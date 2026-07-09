/**
 * AI pilot — flies the same FlightModel as the player, through the same
 * ControlInputs. No cheating: it only sets stick, rudder, throttle.
 *
 * Behavior: pursue with lead, break-turn when the threat is on its six,
 * and above all else, don't hit the ground.
 */
import * as THREE from 'three';
import type { FlightBody } from '../flight/flightBody';
import type { GunSpec } from '../combat/projectiles';

const _dir = new THREE.Vector3();
const _q = new THREE.Quaternion();

/** Roll the lift vector onto a world-space point, then pull. Shared steering core. */
export function steerToward(me: FlightBody, point: THREE.Vector3, gain = 1): void {
  const c = me.controls;
  _q.copy(me.quaternion).invert();
  const dirB = _dir.copy(point).sub(me.position).normalize().applyQuaternion(_q);
  const rollErr = Math.atan2(dirB.x, dirB.y);
  const alignment = Math.cos(rollErr);
  c.roll = THREE.MathUtils.clamp(rollErr * 1.6 * gain, -1, 1);
  c.pitch = THREE.MathUtils.clamp(Math.atan2(dirB.y, -dirB.z) * 3.5 * gain * Math.max(0.15, alignment), -1, 1);
  c.yaw = THREE.MathUtils.clamp(dirB.x * 0.6, -0.4, 0.4);
}

/**
 * Flies a fixed route at cruise power — the reconnaissance two-seater
 * placidly holding course while the war happens around it.
 */
export class RoutePilot {
  readonly wantsFire = false;
  private index = 0;
  finished = false;

  constructor(private route: THREE.Vector3[], private cruiseThrottle = 0.75) {}

  update(dt: number, me: FlightBody, _target: FlightBody | null, aglM: number): void {
    void dt; void _target;
    const c = me.controls;
    c.throttle = this.cruiseThrottle;
    c.afterburner = false;
    c.brake = false;

    if (aglM < 150) { // even the placid two-seater avoids hills
      c.roll = THREE.MathUtils.clamp(-me.sample.bankRad * 2.5, -1, 1);
      c.pitch = 0.8;
      return;
    }

    if (this.finished) {
      // Orbit the last waypoint gently.
      c.roll = THREE.MathUtils.clamp((0.3 - me.sample.bankRad) * 1.5, -1, 1);
      c.pitch = THREE.MathUtils.clamp((0 - me.sample.pitchRad) * 2 + 0.06, -1, 1);
      return;
    }

    const wp = this.route[this.index];
    const flat = wp.clone().setY(me.position.y); // hold altitude, steer laterally
    steerToward(me, flat, 0.7);
    const dist = Math.hypot(wp.x - me.position.x, wp.z - me.position.z);
    if (dist < 300) {
      this.index++;
      if (this.index >= this.route.length) this.finished = true;
    }
  }
}

/**
 * An attacker with somewhere to be: presses toward its destination, but
 * turns and fights when an enemy closes in. Used for intercept missions —
 * if it reaches the target point, the defenders have failed.
 */
export class StrikerPilot {
  wantsFire = false;
  private ai: AiPilot;

  constructor(private dest: THREE.Vector3, gun: GunSpec, skill = 0.6) {
    this.ai = new AiPilot(gun, skill);
  }

  update(dt: number, me: FlightBody, target: FlightBody | null, aglM: number): void {
    const engaged = target && me.position.distanceTo(target.position) < 3200;
    if (engaged) {
      this.ai.update(dt, me, target, aglM);
      this.wantsFire = this.ai.wantsFire;
      return;
    }
    this.wantsFire = false;
    const c = me.controls;
    c.throttle = 1;
    c.afterburner = true;
    c.brake = false;
    if (aglM < 200) {
      c.roll = THREE.MathUtils.clamp(-me.sample.bankRad * 2.5, -1, 1);
      c.pitch = 0.9;
      return;
    }
    const level = this.dest.clone().setY(me.position.y);
    steerToward(me, level, 0.8);
  }
}

export class AiPilot {
  /** Set true by update() when the AI wants the trigger down. */
  wantsFire = false;

  private jinkSign = 1;
  private jinkTimer = 0;
  private aimWander = new THREE.Vector3();
  private wanderTimer = 0;

  /** Rookies can't fly the airframe to its limits: max pull scales with skill. */
  private maxPull: number;

  constructor(private gun: GunSpec, private skill = 0.7) {
    this.maxPull = 0.55 + 0.45 * this.skill;
  }

  update(dt: number, me: FlightBody, target: FlightBody | null, aglM: number): void {
    const c = me.controls;
    this.wantsFire = false;
    this.jinkTimer -= dt;
    this.wanderTimer -= dt;

    // --- Terrain is the real enemy ---
    const sinking = me.sample.climbRateMs < 0 ? -me.sample.climbRateMs : 0;
    const timeToImpact = sinking > 1 ? aglM / sinking : Infinity;
    if (aglM < 200 || timeToImpact < 4) {
      c.roll = THREE.MathUtils.clamp(-me.sample.bankRad * 2.5, -1, 1); // wings level
      c.pitch = 1;
      c.yaw = 0;
      c.throttle = 1;
      c.afterburner = true;
      return;
    }

    if (!target) {
      // Lazy patrol orbit
      c.roll = THREE.MathUtils.clamp((0.35 - me.sample.bankRad) * 1.5, -1, 1);
      c.pitch = THREE.MathUtils.clamp((0 - me.sample.pitchRad) * 2 + 0.08, -1, 1);
      c.throttle = 0.65;
      c.afterburner = false;
      return;
    }

    // --- Geometry ---
    const range = me.position.distanceTo(target.position);

    // Aim wander: imperfect gunnery, refreshed periodically (lower skill = worse)
    if (this.wanderTimer <= 0) {
      this.wanderTimer = 0.7;
      const err = (1 - this.skill) * 60;
      this.aimWander.set((Math.random() - 0.5) * err, (Math.random() - 0.5) * err, (Math.random() - 0.5) * err);
    }

    // Lead pursuit: aim where the target will be when the rounds arrive
    const tof = range / this.gun.muzzleVelMs;
    const lead = target.position.clone()
      .addScaledVector(target.velocity, tof)
      .add(this.aimWander);
    _q.copy(me.quaternion).invert();
    const dirB = _dir.copy(lead).sub(me.position).normalize().applyQuaternion(_q);
    const angleOff = Math.acos(THREE.MathUtils.clamp(-dirB.z, -1, 1));

    // Threat check: is the target behind me and close?
    const meToTgtDotFwd = -dirB.z;
    if (meToTgtDotFwd < -0.2 && range < 700) {
      // Break turn — hard jinking with periodic reversals
      if (this.jinkTimer <= 0) {
        this.jinkTimer = 1.8 + Math.random();
        this.jinkSign = -this.jinkSign;
      }
      c.roll = this.jinkSign;
      c.pitch = Math.min(0.85, this.maxPull);
      c.yaw = 0;
      c.throttle = 1;
      c.afterburner = true;
      return;
    }

    // --- Pursue: roll the lift vector onto the target, then pull ---
    const rollErr = Math.atan2(dirB.x, dirB.y);
    const alignment = Math.cos(rollErr); // 1 = target above canopy
    c.roll = THREE.MathUtils.clamp(rollErr * 1.6, -1, 1);
    c.pitch = THREE.MathUtils.clamp(Math.atan2(dirB.y, -dirB.z) * 3.5 * Math.max(0.15, alignment), -this.maxPull, this.maxPull);
    c.yaw = THREE.MathUtils.clamp(dirB.x * 0.6, -0.4, 0.4);

    // Energy: burn to close, ease off in the saddle
    const closing = range > this.gun.effectiveRangeM * 1.5;
    c.throttle = closing ? 1 : 0.75;
    c.afterburner = closing && range > 2000;
    c.brake = false;

    this.wantsFire = angleOff < 0.05 && range < this.gun.effectiveRangeM;
  }
}
