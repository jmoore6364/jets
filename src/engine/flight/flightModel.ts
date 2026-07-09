/**
 * Shared 6-DOF flight dynamics.
 *
 * One rigid-body model serves every aircraft in every era — a Fokker Dr.I and
 * an F-16 are the same math with different AircraftSpec numbers. Mid-fidelity:
 * real lift/drag/stall aerodynamics, stability derivatives, rate damping,
 * rotary-engine gyroscopics, and a light FBW limiter for modern jets.
 *
 * Body frame (three.js style): +X right, +Y up, -Z forward.
 * Sign conventions (verified in tests/flightModel.test.ts):
 *   pitch up   = +torque about X
 *   yaw right  = -torque about Y
 *   roll right = -torque about Z
 */
import * as THREE from 'three';
import type { AircraftSpec } from './aircraft';

export interface ControlInputs {
  /** -1..1, + = pull (nose up) */
  pitch: number;
  /** -1..1, + = roll right */
  roll: number;
  /** -1..1, + = nose right */
  yaw: number;
  /** 0..1 */
  throttle: number;
  /** Afterburner engaged (jets). */
  afterburner: boolean;
  /** Speedbrake (modern) / ignition blip (WWI rotary). */
  brake: boolean;
}

const G0 = 9.80665;
const RHO_SL = 1.225;

/** ISA-ish exponential atmosphere. */
export function airDensity(altitudeM: number): number {
  return RHO_SL * Math.exp(-Math.max(0, altitudeM) / 8500);
}

function clamp(x: number, lo: number, hi: number): number {
  return x < lo ? lo : x > hi ? hi : x;
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

/** Lift/drag coefficients with post-stall blending. Exported for tests. */
export function aeroCoefficients(spec: AircraftSpec, alpha: number): { cl: number; cd: number; stalled: number } {
  const clLinear = clamp(spec.cl0 + spec.clAlpha * alpha, -spec.clMax, spec.clMax);
  // Past the stall the wing behaves increasingly like a flat plate.
  const stalled = smoothstep(spec.alphaStallRad, spec.alphaStallRad + 0.15, Math.abs(alpha));
  const clStalled = Math.sin(2 * alpha) * 0.85;
  const cl = clLinear * (1 - stalled) + clStalled * stalled;
  const cdInduced = (cl * cl) / (Math.PI * spec.aspectRatio * spec.oswald);
  const cd = spec.cd0 + cdInduced + stalled * 0.18;
  return { cl, cd, stalled };
}

export interface FlightSample {
  speedMs: number;
  altitudeM: number;
  alphaRad: number;
  betaRad: number;
  gLoad: number;
  headingRad: number;
  pitchRad: number;
  bankRad: number;
  mach: number;
  climbRateMs: number;
  stalled: boolean;
  thrustN: number;
}

/** Speed of sound in the ISA troposphere. */
export function speedOfSound(altitudeM: number): number {
  const t = Math.max(216.65, 288.15 - 0.0065 * Math.max(0, altitudeM));
  return 340.29 * Math.sqrt(t / 288.15);
}

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _f = new THREE.Vector3();

export class FlightModel {
  readonly spec: AircraftSpec;

  readonly position = new THREE.Vector3();
  readonly quaternion = new THREE.Quaternion();
  readonly velocity = new THREE.Vector3();
  /** Angular velocity in body frame, rad/s. */
  readonly angVelBody = new THREE.Vector3();

  readonly controls: ControlInputs = { pitch: 0, roll: 0, yaw: 0, throttle: 0.7, afterburner: false, brake: false };

  private lastSample: FlightSample = {
    speedMs: 0, altitudeM: 0, alphaRad: 0, betaRad: 0, gLoad: 1,
    headingRad: 0, pitchRad: 0, bankRad: 0, mach: 0,
    climbRateMs: 0, stalled: false, thrustN: 0
  };

  /** Smoothed G rate-of-change, used by the FBW limiter for lead anticipation. */
  private gRate = 0;
  /**
   * Pilot assists (attitude/bank hold, level-turn assist) are for human
   * hands with neutral sticks. AI pilots command continuously — the assists
   * fight their controllers and cause flip-flopping. AI models set false.
   */
  assists = true;

  /** Bank angle latched by the FCS when the roll stick goes neutral. */
  private heldBank: number | null = null;
  /** Pitch attitude latched by the FCS when the pitch stick goes neutral. */
  private heldPitch: number | null = null;

  constructor(spec: AircraftSpec) {
    this.spec = spec;
  }

  /** Place the aircraft in level flight at a point, heading along -Z (world). */
  spawn(x: number, altitude: number, z: number, speedMs: number, headingRad = 0): void {
    this.heldBank = null;
    this.heldPitch = null;
    this.gRate = 0;
    this.position.set(x, altitude, z);
    this.quaternion.setFromEuler(new THREE.Euler(0, headingRad, 0, 'YXZ'));
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    this.velocity.copy(fwd.multiplyScalar(speedMs));
    this.angVelBody.set(0, 0, 0);
  }

  get sample(): FlightSample {
    return this.lastSample;
  }

  /** Advance physics. Call with a fixed dt (substeps internally at <= 1/240 s). */
  step(dt: number): void {
    const sub = Math.max(1, Math.ceil(dt / (1 / 240)));
    const h = dt / sub;
    for (let i = 0; i < sub; i++) this.substep(h);
  }

  private substep(dt: number): void {
    const s = this.spec;
    const m = s.massKg;

    const rho = airDensity(this.position.y);
    const V = Math.max(this.velocity.length(), 0.5);
    const qbar = 0.5 * rho * V * V;
    const qS = qbar * s.wingAreaM2;

    // Velocity in body frame.
    _q.copy(this.quaternion).invert();
    const vBody = _v.copy(this.velocity).applyQuaternion(_q);

    // Flow angles. Straight ahead => vBody = (0, 0, -V) => alpha = beta = 0.
    const alpha = Math.atan2(-vBody.y, -vBody.z);
    const beta = Math.asin(clamp(vBody.x / V, -1, 1));

    // --- Controls (with optional FBW stability augmentation + limiters) ---
    let pitchCmd = this.controls.pitch;
    let rollCmd = this.controls.roll;
    let yawCmd = this.controls.yaw;
    const g = this.lastSample.gLoad;
    if (s.fbw) {
      // Stick neutral: brake the pitch rate, then latch and hold the pitch
      // ATTITUDE — but with turn-rate feedforward, so holding the nose at
      // your angle doesn't cancel the turn the bank is flying. The hold
      // supplies exactly the body pitch rate a steady heading change needs,
      // and corrects attitude error on top of it.
      const pitchNeutral = Math.abs(pitchCmd) < 0.05 && this.assists;
      if (pitchNeutral) {
        const upright = Math.abs(this.lastSample.bankRad) < 1.75 && Math.abs(this.lastSample.pitchRad) < 1.3;
        if (this.heldPitch === null || !upright) {
          pitchCmd = clamp(-this.angVelBody.x * 0.8, -0.5, 0.5); // brake first: no kick-back
          if (upright && Math.abs(this.angVelBody.x) < 0.15) this.heldPitch = this.lastSample.pitchRad;
        } else {
          // Body pitch rate needed just to keep attitude while the heading
          // turns: rotate the world-frame yaw rate into the body frame.
          const wWorld = this.angVelBody.clone().applyQuaternion(this.quaternion);
          const turnFF = new THREE.Vector3(0, wWorld.y, 0).applyQuaternion(_q.copy(this.quaternion).invert()).x;
          const targetWx = clamp((this.heldPitch - this.lastSample.pitchRad) * 1.5, -0.8, 0.8) + clamp(turnFF, -0.6, 0.6);
          pitchCmd = clamp((targetWx - this.angVelBody.x) * 0.9, -0.6, 0.6);
        }
      } else {
        this.heldPitch = null;
      }
      // Soft alpha & G limiter: bleeds off pilot pitch authority near limits.
      const alphaOver = Math.max(0, alpha - s.fbw.alphaLimitRad) / 0.04;
      // Mild lead on smoothed G-rate so the cap holds without pumping.
      const gPredicted = g + this.gRate * 0.18;
      const gOver = Math.max(0, gPredicted - (s.fbw.gLimit - 0.5)) / 0.8;
      // Rate feedback while the pilot commands (the hold branch has its own).
      pitchCmd = clamp(pitchCmd - alphaOver - gOver - (pitchNeutral ? 0 : this.angVelBody.x * 0.15), -1, 1);
      // Roll is rate-command: stick deflection asks for a roll RATE, and the
      // FCS drives the ailerons to deliver exactly that — including braking
      // the roll to a stop the moment the stick returns to neutral. With the
      // stick free it latches your bank angle and holds it (rate-only near
      // the vertical, where bank is ill-defined).
      let targetRollRate: number; // body ωz; roll right = negative
      if (Math.abs(rollCmd) < 0.05 && this.assists) {
        // Level-turn assist: pulling while banked means "turn". Deepen the
        // held bank to match the G being pulled, so the pull carves flat
        // around the horizon instead of ballooning into a climb. Wings-level
        // pulls (< ~15 deg) are left alone — that's an intentional loop.
        if (this.controls.pitch > 0.1 && this.heldBank !== null) {
          const bankNow = this.lastSample.bankRad;
          if (Math.abs(bankNow) > 0.26 && Math.abs(this.heldBank) < 1.45) {
            const lvl = Math.acos(clamp(1 / Math.max(g, 1.05), 0.05, 1));
            const desired = Math.sign(bankNow) * Math.min(Math.max(Math.abs(this.heldBank), lvl), 1.45);
            const slew = 1.1 * dt;
            this.heldBank += clamp(desired - this.heldBank, -slew, slew);
          }
        }
        if (this.heldBank === null) {
          // Brake to a stop first, and only THEN latch the bank — latching
          // early would drag the jet back against its own roll momentum
          // (a direction-reversing "kick" the pilot never commanded).
          targetRollRate = 0;
          if (Math.abs(this.angVelBody.z) < 0.12) this.heldBank = this.lastSample.bankRad;
        } else {
          let bankErr = this.heldBank - this.lastSample.bankRad;
          bankErr = Math.atan2(Math.sin(bankErr), Math.cos(bankErr));
          const holdBank = Math.abs(this.lastSample.pitchRad) < 1.2;
          targetRollRate = holdBank ? clamp(-bankErr * 2.2, -1.5, 1.5) : 0;
        }
      } else {
        this.heldBank = null;
        targetRollRate = -rollCmd * 4.6; // ~260 deg/s max commanded rate
      }
      rollCmd = clamp((this.angVelBody.z - targetRollRate) * 0.6, -1, 1);

      // Auto-coordination: rudder into the sideslip, yaw DAMPER against yaw
      // rate (kills dutch roll), and an aileron-rudder interconnect so hard
      // rolls at alpha don't convert incidence into sideslip.
      yawCmd = clamp(
        yawCmd + 1.0 * beta + 1.5 * this.angVelBody.y - 0.6 * this.angVelBody.z * alpha,
        -1, 1
      );
    }

    // --- Aerodynamic forces (body frame) ---
    let { cl, cd, stalled } = aeroCoefficients(s, alpha);
    if (this.controls.brake && s.brakeDrag) cd += s.brakeDrag;
    const vhat = vBody.clone().divideScalar(V);

    // Lift ⟂ velocity, in the aircraft's plane of symmetry.
    const liftDir = new THREE.Vector3(1, 0, 0).cross(vhat);
    if (liftDir.lengthSq() > 1e-8) liftDir.normalize(); else liftDir.set(0, 1, 0);

    const fBody = _f.set(0, 0, 0);
    fBody.addScaledVector(liftDir, qS * cl);          // lift
    fBody.addScaledVector(vhat, -qS * cd);            // drag
    fBody.x += -qS * 0.30 * beta;                     // fuselage side force

    // --- Thrust ---
    let thrust = 0;
    const prop = s.propulsion;
    if (prop.kind === 'prop') {
      // Ignition blip: rotary pilots cut the engine to manage power.
      const blipped = s.blipSwitch && this.controls.brake;
      const throttle = blipped ? 0 : this.controls.throttle;
      thrust = Math.min(prop.maxStaticThrustN, (prop.maxPowerW * prop.propEfficiency * throttle) / Math.max(V, 8));
    } else {
      thrust = prop.milThrustN * this.controls.throttle;
      if (this.controls.afterburner && prop.abThrustN > 0) thrust = prop.abThrustN;
      thrust *= rho / RHO_SL; // crude altitude lapse
    }
    fBody.z -= thrust; // forward = -Z

    // G load as felt along body-up (excludes gravity), before rotating to world.
    const gLoad = fBody.y / (m * G0);

    // To world, add gravity, integrate translation (semi-implicit Euler).
    const fWorld = fBody.applyQuaternion(this.quaternion);
    fWorld.y -= m * G0;
    this.velocity.addScaledVector(fWorld, dt / m);
    this.position.addScaledVector(this.velocity, dt);

    // --- Moments (body frame) ---
    const w = this.angVelBody;
    const qSc = qS * s.chordM;
    const qSb = qS * s.wingSpanM;
    const twoV = 2 * V;

    // Pitch (+X = nose up). Elevator loses bite in the stalled wake, so full
    // aft stick can't park the aircraft in a deep stall — the nose drops and
    // it recovers, mushing at the edge instead of departing.
    const elevEff = 1 - 0.55 * stalled;
    let tx = qSc * (s.cm0 + s.cmAlpha * alpha + s.cmDe * elevEff * pitchCmd);
    tx -= qSc * s.pitchDamp * (w.x * s.chordM / twoV);

    // Yaw (-Y = nose right)
    let ty = -qSb * (s.cnDr * yawCmd + s.cnBeta * beta);
    ty += qSb * s.adverseYaw * rollCmd; // roll right -> nose left
    ty -= qSb * s.yawDamp * (w.y * s.wingSpanM / twoV);

    // Roll (-Z = roll right)
    let tz = -qSb * s.clDa * rollCmd;
    tz += qSb * s.dihedralEffect * beta; // slip right -> roll left
    tz -= qSb * s.rollDamp * (w.z * s.wingSpanM / twoV);

    // Rotary engine gyroscopics: reaction torque = -(w × H), H along forward.
    if (s.engineAngularMomentum !== 0 && this.controls.throttle > 0.05) {
      const H = new THREE.Vector3(0, 0, -s.engineAngularMomentum);
      const gyro = new THREE.Vector3().crossVectors(w, H).multiplyScalar(-1);
      tx += gyro.x; ty += gyro.y; tz += gyro.z;
    }

    // Euler coupling: -w × (I·w)
    const I = s.inertia;
    const Iw = new THREE.Vector3(w.x * I.pitch, w.y * I.yaw, w.z * I.roll);
    const coup = new THREE.Vector3().crossVectors(w, Iw);
    tx -= coup.x; ty -= coup.y; tz -= coup.z;

    w.x += (tx / I.pitch) * dt;
    w.y += (ty / I.yaw) * dt;
    w.z += (tz / I.roll) * dt;

    // Integrate orientation: q̇ = ½ q ⊗ ω_body
    const dq = new THREE.Quaternion(w.x * 0.5 * dt, w.y * 0.5 * dt, w.z * 0.5 * dt, 0);
    dq.multiplyQuaternions(this.quaternion, dq);
    this.quaternion.x += dq.x; this.quaternion.y += dq.y;
    this.quaternion.z += dq.z; this.quaternion.w += dq.w;
    this.quaternion.normalize();

    // --- Sample for HUD/AI ---
    const gRateInst = clamp((gLoad - this.lastSample.gLoad) / dt, -60, 60);
    this.gRate += (gRateInst - this.gRate) * Math.min(1, dt / 0.06); // low-pass: kills limiter pumping
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.quaternion);
    this.lastSample = {
      speedMs: this.velocity.length(),
      altitudeM: this.position.y,
      alphaRad: alpha,
      betaRad: beta,
      gLoad,
      headingRad: Math.atan2(fwd.x, -fwd.z),
      pitchRad: Math.asin(clamp(fwd.y, -1, 1)),
      bankRad: Math.atan2(-right.y, up.y),
      mach: this.velocity.length() / speedOfSound(this.position.y),
      climbRateMs: this.velocity.y,
      stalled: stalled > 0.4,
      thrustN: thrust
    };
  }
}
