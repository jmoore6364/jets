/**
 * IR missile sanity: guidance intercepts, seeker cone limits, flare decoys,
 * and proximity-fuse damage. Runs headless with a stub effects sink.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { MissileSystem, AIM9, type MissileTargetView, type FxSink } from '../src/engine/combat/missiles';

const fx: FxSink = { spawn: () => undefined, explosion: () => undefined };
const flat = () => -10000;

function makeTarget(id: number, pos: [number, number, number], vel: [number, number, number]): MissileTargetView {
  return { id, alive: true, position: new THREE.Vector3(...pos), velocity: new THREE.Vector3(...vel) };
}

function fly(sys: MissileSystem, targets: MissileTargetView[], seconds: number, onHit: (id: number, dmg: number, by: number) => void): void {
  const dt = 1 / 120;
  for (let t = 0; t < seconds; t += dt) {
    for (const tg of targets) tg.position.addScaledVector(tg.velocity, dt);
    sys.update(dt, targets, flat, onHit);
  }
}

describe('IR missiles', () => {
  it('intercepts a crossing target ahead', () => {
    const sys = new MissileSystem(new THREE.Scene(), fx, () => 0); // rng 0 < resistance: never decoyed
    const target = makeTarget(1, [400, 0, -2500], [-120, 0, 0]); // crossing left at 2.5 km
    let hits = 0;
    sys.launch(AIM9, 0, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -250), 1);
    fly(sys, [target], 12, (id, dmg) => { if (id === 1) hits += dmg; });
    expect(hits).toBeGreaterThan(0);
  });

  it('goes stupid when the target is outside the seeker cone', () => {
    const sys = new MissileSystem(new THREE.Scene(), fx, () => 0);
    const target = makeTarget(1, [0, 0, 3000], [0, 0, 120]); // dead astern, fleeing
    let hits = 0;
    sys.launch(AIM9, 0, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -250), 1);
    fly(sys, [target], 10, (id, dmg) => { if (id === 1) hits += dmg; });
    expect(hits).toBe(0);
  });

  it('is decoyed by flares when resistance rolls fail', () => {
    // rng = 1 means every flare roll (rng > resistance) succeeds in seducing.
    const sys = new MissileSystem(new THREE.Scene(), fx, () => 1);
    const target = makeTarget(1, [0, 0, -3000], [0, 0, -10]); // nearly head-on aspect
    let hits = 0;
    sys.launch(AIM9, 0, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -250), 1);
    // pop flares continuously while the missile flies
    const dt = 1 / 120;
    let flareTimer = 0;
    for (let t = 0; t < 10; t += dt) {
      target.position.addScaledVector(target.velocity, dt);
      flareTimer -= dt;
      if (flareTimer <= 0) {
        flareTimer = 0.5;
        sys.dropFlare(1, target.position, target.velocity);
      }
      sys.update(dt, [target], flat, id => { if (id === 1) hits++; });
    }
    expect(hits).toBe(0); // every missile chased a flare instead
  });

  it('resists flares when the resistance roll wins', () => {
    const sys = new MissileSystem(new THREE.Scene(), fx, () => 0); // rng 0: never seduced
    const target = makeTarget(1, [0, 0, -3000], [0, 0, -10]);
    let hits = 0;
    const dt = 1 / 120;
    sys.launch(AIM9, 0, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -250), 1);
    let flareTimer = 0;
    for (let t = 0; t < 12; t += dt) {
      target.position.addScaledVector(target.velocity, dt);
      flareTimer -= dt;
      if (flareTimer <= 0) { flareTimer = 0.5; sys.dropFlare(1, target.position, target.velocity); }
      sys.update(dt, [target], flat, (id, dmg) => { if (id === 1) hits += dmg; });
    }
    expect(hits).toBeGreaterThan(0);
  });
});
