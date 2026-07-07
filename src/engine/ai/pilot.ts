/**
 * AI pilot — flies the same FlightModel as the player, through the same
 * ControlInputs. No cheating: it only sets stick, rudder, throttle.
 *
 * Behavior: pursue with lead, break-turn when the threat is on its six,
 * and above all else, don't hit the ground.
 */
import * as THREE from 'three';
import type { FlightModel } from '../flight/flightModel';
import type { GunSpec } from '../combat/projectiles';

const _dir = new THREE.Vector3();
const _q = new THREE.Quaternion();

export class AiPilot {
  /** Set true by update() when the AI wants the trigger down. */
  wantsFire = false;

  private jinkSign = 1;
  private jinkTimer = 0;
  private aimWander = new THREE.Vector3();
  private wanderTimer = 0;

  constructor(private gun: GunSpec, private skill = 0.7) {}

  update(dt: number, me: FlightModel, target: FlightModel | null, aglM: number): void {
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
      c.pitch = 0.85;
      c.yaw = 0;
      c.throttle = 1;
      c.afterburner = true;
      return;
    }

    // --- Pursue: roll the lift vector onto the target, then pull ---
    const rollErr = Math.atan2(dirB.x, dirB.y);
    const alignment = Math.cos(rollErr); // 1 = target above canopy
    c.roll = THREE.MathUtils.clamp(rollErr * 1.6, -1, 1);
    c.pitch = THREE.MathUtils.clamp(Math.atan2(dirB.y, -dirB.z) * 3.5 * Math.max(0.15, alignment), -1, 1);
    c.yaw = THREE.MathUtils.clamp(dirB.x * 0.6, -0.4, 0.4);

    // Energy: burn to close, ease off in the saddle
    const closing = range > this.gun.effectiveRangeM * 1.5;
    c.throttle = closing ? 1 : 0.75;
    c.afterburner = closing && range > 2000;
    c.brake = false;

    this.wantsFire = angleOff < 0.05 && range < this.gun.effectiveRangeM;
  }
}
