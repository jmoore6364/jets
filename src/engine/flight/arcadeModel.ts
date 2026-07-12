/**
 * Arcade flight: zero hidden automation.
 *
 * The contract — and there is nothing else:
 *   - Stick commands rotation rates. Directly. Scaled only by airspeed.
 *   - Release the stick and rotation stops. The attitude you left is the
 *     attitude you keep. No latches, no holds, no leveling, no assists.
 *   - The velocity vector chases wherever the nose points, limited by G.
 *   - Throttle fights drag; climbs bleed speed, dives buy it back.
 *   - Get very slow and authority softens and the nose gently mushes —
 *     no stall traps, no departures.
 *
 * The full aerodynamic FlightModel remains available as "SIM" handling.
 */
import * as THREE from 'three';
import type { AircraftSpec } from './aircraft';
import type { ControlInputs, FlightSample } from './flightModel';
import { speedOfSound, airDensity } from './flightModel';
import type { FlightBody } from './flightBody';

const G0 = 9.80665;

interface ArcadeTuning {
  pitchRate: number;   // rad/s at full authority
  rollRate: number;
  yawRate: number;
  gMax: number;        // path-chase limit
  vMax: number;        // level top speed, mil power
  vMaxAb: number;      // with afterburner (jets)
  vCorner: number;     // full authority at/above this speed
  vMin: number;        // below this: mush
}

function tuningFor(spec: AircraftSpec): ArcadeTuning {
  const base: ArcadeTuning = spec.era === 'modern'
    ? { pitchRate: 1.15, rollRate: 3.1, yawRate: 0.45, gMax: 9, vMax: 290, vMaxAb: 390, vCorner: 130, vMin: 75 }
    : { pitchRate: 0.95, rollRate: 2.0, yawRate: 0.5, gMax: 4.5, vMax: spec.cruiseSpeedMs * 1.25, vMaxAb: spec.cruiseSpeedMs * 1.25, vCorner: 30, vMin: 17 };

  // Airframe character, arcade edition. Same contract, different numbers.
  const perAirframe: Record<string, Partial<ArcadeTuning>> = {
    // The Viper owns the roll axis. This is the baseline everything is judged by.
    f16: { rollRate: 3.4 },
    // Hornet: slow-speed nose authority, softer G, less top end.
    fa18: { pitchRate: 1.3, rollRate: 2.7, gMax: 7.5, vMax: 265, vMaxAb: 350, vCorner: 110, vMin: 66 },
    // Raptor: brutal speed and climb; heavy in roll next to the Viper.
    f22: { pitchRate: 1.2, rollRate: 2.4, vMax: 330, vMaxAb: 470, vCorner: 150, vMin: 80 },
    // Tomcat: heavy fleet iron — fast, stable, mushy up close.
    f14: { pitchRate: 0.9, rollRate: 2.1, gMax: 7.5, vMax: 305, vMaxAb: 430, vCorner: 145, vMin: 85 },
    // Camel: the turn-fighter. Dr.I: even snappier nose, slower everywhere.
    'sopwith-camel': { rollRate: 2.4, pitchRate: 1.05 },
    'fokker-dr1': { pitchRate: 1.12, rollRate: 2.2, vMax: spec.cruiseSpeedMs * 1.18 },
    // SPAD: an anvil with an engine — fast, stiff, strong in the dive.
    spad13: { rollRate: 1.7, gMax: 5, vMax: spec.cruiseSpeedMs * 1.35, vCorner: 36 },
    // D.VII: hangs on its prop where everything else falls off.
    'fokker-d7': { pitchRate: 1.05, vMin: 14, vCorner: 26 },
    // S.E.5a: fast, steady, deliberate.
    se5a: { rollRate: 1.8, vMax: spec.cruiseSpeedMs * 1.32, vCorner: 34 },
    // Albatros: quick and slippery, average stick.
    albatros: { rollRate: 1.9, vMax: spec.cruiseSpeedMs * 1.3 }
  };
  return { ...base, ...perAirframe[spec.id] };
}

const _v = new THREE.Vector3();
const _axis = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _up = new THREE.Vector3(0, 1, 0);

export class ArcadeFlightModel implements FlightBody {
  readonly spec: AircraftSpec;
  readonly position = new THREE.Vector3();
  readonly quaternion = new THREE.Quaternion();
  readonly velocity = new THREE.Vector3();
  readonly controls: ControlInputs = { pitch: 0, roll: 0, yaw: 0, throttle: 0.7, afterburner: false, brake: false };

  private tuning: ArcadeTuning;
  private rates = new THREE.Vector3(); // smoothed body rates (x=pitch, y=yaw, z=roll axis)
  private lastSample: FlightSample = {
    speedMs: 0, altitudeM: 0, alphaRad: 0, betaRad: 0, gLoad: 1,
    headingRad: 0, pitchRad: 0, bankRad: 0, mach: 0,
    climbRateMs: 0, stalled: false, thrustN: 0
  };

  constructor(spec: AircraftSpec) {
    this.spec = spec;
    this.tuning = tuningFor(spec);
  }

  get sample(): FlightSample {
    return this.lastSample;
  }

  spawn(x: number, altitude: number, z: number, speedMs: number, headingRad = 0): void {
    this.position.set(x, altitude, z);
    this.quaternion.setFromEuler(new THREE.Euler(0, headingRad, 0, 'YXZ'));
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    this.velocity.copy(fwd.multiplyScalar(speedMs));
    this.rates.set(0, 0, 0);
  }

  step(dt: number): void {
    const t = this.tuning;
    const c = this.controls;
    const V = Math.max(this.velocity.length(), 5);

    // --- Authority: full above corner speed, soft when slow. That's the
    // only thing that ever modifies your command. ---
    const authority = THREE.MathUtils.clamp((V - t.vMin * 0.6) / (t.vCorner - t.vMin * 0.6), 0.25, 1);

    // --- THE arcade rule: banked = turning. ---
    // A banked aircraft sweeps its heading continuously (rotation about the
    // world vertical, which preserves your bank and pitch exactly). Pulling
    // while banked tightens the turn instead of ballooning into a climb.
    const bank = this.lastSample.bankRad;
    const sinB = Math.sin(bank);
    const pullingBanked = Math.max(0, c.pitch) * Math.abs(sinB);
    if (Math.abs(bank) > 0.09 && V > t.vMin * 0.8) {
      const tanB = Math.tan(THREE.MathUtils.clamp(bank, -1.42, 1.42));
      const pullBoost = 1 + 2.2 * pullingBanked;
      const gCap = (t.gMax * G0 / V) * 1.05; // the carve rides the G limit, never beyond
      const turn = THREE.MathUtils.clamp(
        -2.2 * (G0 * tanB / V) * pullBoost * authority,
        -gCap, gCap
      );
      _q.setFromAxisAngle(_up, turn * dt);
      this.quaternion.premultiply(_q);
    }

    // Commanded body rates (smoothed for feel, ~90 ms). Pulling while banked
    // spends most of the stick on the turn above, not on raising the nose.
    const pitchAuthority = authority * (1 - 0.62 * pullingBanked);
    const k = 1 - Math.exp(-dt / 0.09);
    this.rates.x += ((c.pitch * t.pitchRate * pitchAuthority) - this.rates.x) * k;
    this.rates.z += ((-c.roll * t.rollRate * authority) - this.rates.z) * k;
    this.rates.y += ((-c.yaw * t.yawRate * authority) - this.rates.y) * k;

    // Integrate orientation
    const dq = new THREE.Quaternion(this.rates.x * 0.5 * dt, this.rates.y * 0.5 * dt, this.rates.z * 0.5 * dt, 0);
    dq.multiplyQuaternions(this.quaternion, dq);
    this.quaternion.x += dq.x; this.quaternion.y += dq.y;
    this.quaternion.z += dq.z; this.quaternion.w += dq.w;
    this.quaternion.normalize();

    // --- Velocity chases the nose, G-limited ---
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    const dir = _v.copy(this.velocity).divideScalar(V);
    const angle = Math.acos(THREE.MathUtils.clamp(dir.dot(fwd), -1, 1));
    let pathRate = 0;
    if (angle > 1e-4) {
      const maxRate = (t.gMax * G0 / V) * authority;
      pathRate = Math.min(angle * 6, maxRate); // chase gain, capped by G
      _axis.crossVectors(dir, fwd).normalize();
      if (_axis.lengthSq() > 0.5) {
        _q.setFromAxisAngle(_axis, pathRate * dt);
        dir.applyQuaternion(_q);
      }
    }

    // Low-speed mush: below Vmin the nose can't hold the path up.
    const gamma = Math.asin(THREE.MathUtils.clamp(dir.y, -1, 1));
    if (V < t.vMin * 1.15 && gamma > -0.5) {
      const sag = (1 - V / (t.vMin * 1.15)) * 0.45;
      dir.y -= sag * dt;
      dir.normalize();
    }

    // --- Speed: thrust vs drag, gravity along the path ---
    const rho = airDensity(this.position.y) / 1.225;
    let thrust = 0;
    const prop = this.spec.propulsion;
    if (prop.kind === 'prop') {
      const blipped = this.spec.blipSwitch && c.brake;
      thrust = blipped ? 0 : prop.maxStaticThrustN * c.throttle;
    } else {
      thrust = (c.afterburner ? prop.abThrustN : prop.milThrustN * c.throttle) * rho;
    }
    const vTop = prop.kind === 'jet' && c.afterburner ? t.vMaxAb : t.vMax;
    const refThrust = prop.kind === 'jet' ? (c.afterburner ? prop.abThrustN : prop.milThrustN) : prop.maxStaticThrustN;
    const dragK = refThrust / (vTop * vTop);
    const gNow = 1 + pathRate * V / G0;
    let drag = dragK * V * V * (1 + 0.12 * Math.max(0, gNow - 1.5));
    if (c.brake && this.spec.brakeDrag) drag *= 2.2;

    const dV = (thrust - drag) / this.spec.massKg - G0 * Math.sin(gamma);
    const newV = Math.max(V + dV * dt, t.vMin * 0.55);
    this.velocity.copy(dir).multiplyScalar(newV);
    this.position.addScaledVector(this.velocity, dt);

    // --- Sample ---
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.quaternion);
    this.lastSample = {
      speedMs: newV,
      altitudeM: this.position.y,
      alphaRad: angle * THREE.MathUtils.clamp(fwd.y - dir.y >= 0 ? 1 : -1, -1, 1),
      betaRad: 0,
      gLoad: gNow,
      headingRad: Math.atan2(fwd.x, -fwd.z),
      pitchRad: Math.asin(THREE.MathUtils.clamp(fwd.y, -1, 1)),
      bankRad: Math.atan2(-right.y, up.y),
      mach: newV / speedOfSound(this.position.y),
      climbRateMs: this.velocity.y,
      stalled: newV < t.vMin,
      thrustN: thrust
    };
  }
}
