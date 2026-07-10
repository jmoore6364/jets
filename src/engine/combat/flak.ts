/**
 * Flak / AAA: timed proximity bursts around an aircraft over defended
 * ground. WWI "archie" — slow black puffs with a wide spread; modern AAA —
 * faster, tighter, meaner. No projectiles simulated: the guns below decide
 * where the sky explodes, the pilot decides not to be there.
 */
import * as THREE from 'three';
import type { FxSink } from './missiles';

export interface FlakTargetView {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

const DAMAGE_RADIUS_M = 45;

export class FlakSystem {
  private timer = 2.0;

  constructor(
    private fx: FxSink,
    private era: 'wwi' | 'modern',
    private rng: () => number = Math.random
  ) {}

  /**
   * Call every frame. While `active`, bursts walk toward the target's
   * predicted position; a burst inside the damage radius hurts.
   * Returns the burst distance when one fired (for audio), else null.
   */
  update(dt: number, active: boolean, target: FlakTargetView, onDamage: (dmg: number) => void): number | null {
    if (!active) {
      this.timer = Math.min(this.timer, 1.2); // guns re-lay quickly once you're back
      return null;
    }
    this.timer -= dt;
    if (this.timer > 0) return null;

    const wwi = this.era === 'wwi';
    this.timer = wwi ? 1.1 + this.rng() * 1.5 : 0.7 + this.rng() * 1.1;

    // Lead the target, then miss by a gunner's spread.
    const spread = wwi ? 130 : 90;
    const burst = target.position.clone()
      .addScaledVector(target.velocity, 0.9 + this.rng() * 1.0)
      .add(new THREE.Vector3(
        (this.rng() - 0.5) * 2 * spread,
        (this.rng() - 0.5) * 2 * spread * 0.7,
        (this.rng() - 0.5) * 2 * spread
      ));

    this.fx.spawn(burst, {
      size: wwi ? 7 : 5,
      growth: wwi ? 4 : 6,
      life: wwi ? 2.2 : 1.4,
      color: wwi ? 0x1c1c1c : 0x33302c,
      opacity: 0.85
    });
    this.fx.spawn(burst, { size: 2.5, growth: 12, life: 0.25, color: 0xffcc66, opacity: 0.9 });

    const dist = burst.distanceTo(target.position);
    if (dist < DAMAGE_RADIUS_M) onDamage(1);
    return dist;
  }
}
