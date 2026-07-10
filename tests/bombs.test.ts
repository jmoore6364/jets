/**
 * Bombs: ballistic fall, blast-radius damage with falloff, CCIP prediction.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { BombSystem, predictImpact } from '../src/engine/combat/bombs';
import type { FxSink } from '../src/engine/combat/missiles';
import type { HitTarget } from '../src/engine/combat/projectiles';

const fx: FxSink = { spawn: () => undefined, explosion: () => undefined };
const flat = () => 0;

function fall(sys: BombSystem, targets: HitTarget[], seconds: number): void {
  const dt = 1 / 120;
  for (let t = 0; t < seconds; t += dt) sys.update(dt, flat, targets);
}

describe('bombs', () => {
  it('level drop lands ahead and damages a target under the fall line', () => {
    const sys = new BombSystem(new THREE.Scene(), fx);
    // 1000 m up at 200 m/s: vacuum fall time ~14.3 s, throw ~2.8 km. With
    // drag the bomb lands short of that — put the target on the CCIP point.
    const impact = new THREE.Vector3();
    const pos = new THREE.Vector3(0, 1000, 0);
    const vel = new THREE.Vector3(0, 0, -200);
    expect(predictImpact(pos, vel, flat, impact)).toBe(true);
    expect(impact.z).toBeLessThan(-1500); // it travels well downrange
    let dmg = 0;
    const target: HitTarget = { id: 1, position: impact.clone(), radiusM: 8, onHit: d => { dmg += d; } };
    sys.drop(0, pos, vel);
    fall(sys, [target], 25);
    expect(dmg).toBeGreaterThanOrEqual(5); // near-direct hit
  });

  it('blast falls off with distance and misses far targets entirely', () => {
    const sys = new BombSystem(new THREE.Scene(), fx);
    const impact = new THREE.Vector3();
    const pos = new THREE.Vector3(0, 800, 0);
    const vel = new THREE.Vector3(0, 0, -150);
    predictImpact(pos, vel, flat, impact);
    let near = 0, mid = 0, far = 0;
    const targets: HitTarget[] = [
      { id: 1, position: impact.clone(), radiusM: 2, onHit: d => { near += d; } },
      { id: 2, position: impact.clone().add(new THREE.Vector3(38, 0, 0)), radiusM: 2, onHit: d => { mid += d; } },
      { id: 3, position: impact.clone().add(new THREE.Vector3(200, 0, 0)), radiusM: 2, onHit: d => { far += d; } }
    ];
    sys.drop(0, pos, vel);
    fall(sys, targets, 25);
    expect(near).toBeGreaterThan(mid);
    expect(mid).toBeGreaterThan(0);
    expect(far).toBe(0);
  });

  it('CCIP prediction matches where the bomb actually lands', () => {
    const sys = new BombSystem(new THREE.Scene(), fx);
    const pos = new THREE.Vector3(50, 1200, -300);
    const vel = new THREE.Vector3(20, -10, -180);
    const predicted = new THREE.Vector3();
    expect(predictImpact(pos, vel, flat, predicted)).toBe(true);
    let actual: THREE.Vector3 | null = null;
    sys.drop(0, pos, vel);
    const dt = 1 / 120;
    for (let t = 0; t < 30 && !actual; t += dt) {
      sys.update(dt, flat, [], p => { actual = p.clone(); });
    }
    expect(actual).not.toBeNull();
    expect(actual!.distanceTo(predicted)).toBeLessThan(30); // coarse-step predictor, fine-step flight
  });
});
