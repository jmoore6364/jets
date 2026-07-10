/**
 * Flak: bursts only while over defended ground, and only close bursts hurt.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { FlakSystem } from '../src/engine/combat/flak';
import type { FxSink } from '../src/engine/combat/missiles';

function makeFx(): { fx: FxSink; bursts: THREE.Vector3[] } {
  const bursts: THREE.Vector3[] = [];
  return {
    bursts,
    fx: { spawn: (pos) => { bursts.push(pos.clone()); }, explosion: () => undefined }
  };
}

const target = () => ({ position: new THREE.Vector3(0, 1000, 0), velocity: new THREE.Vector3(0, 0, -80) });

describe('flak', () => {
  it('never fires while inactive', () => {
    const { fx, bursts } = makeFx();
    const flak = new FlakSystem(fx, 'wwi', () => 0.5);
    let dmg = 0;
    for (let t = 0; t < 20; t += 1 / 60) flak.update(1 / 60, false, target(), d => { dmg += d; });
    expect(bursts.length).toBe(0);
    expect(dmg).toBe(0);
  });

  it('bursts on a cadence while active, leading the target', () => {
    const { fx, bursts } = makeFx();
    const flak = new FlakSystem(fx, 'wwi', () => 0.5);
    const tgt = target();
    for (let t = 0; t < 10; t += 1 / 60) flak.update(1 / 60, true, tgt, () => undefined);
    // wwi cadence ~1.85s with rng 0.5 → ~5 salvos, 2 fx each (puff + flash)
    expect(bursts.length).toBeGreaterThanOrEqual(8);
    // bursts land ahead of the aircraft (negative z, direction of travel)
    const puffs = bursts.filter((_, i) => i % 2 === 0);
    expect(puffs.every(b => b.z < 0)).toBe(true);
  });

  it('only near-misses damage the airframe', () => {
    // rng 0.5 puts the burst exactly on the lead point ~112 m ahead: no damage.
    const far = new FlakSystem(makeFx().fx, 'modern', () => 0.5);
    let dmg = 0;
    const tgt = { position: new THREE.Vector3(0, 1000, 0), velocity: new THREE.Vector3(0, 0, -80) };
    for (let t = 0; t < 6; t += 1 / 60) far.update(1 / 60, true, tgt, d => { dmg += d; });
    expect(dmg).toBe(0);

    // A stationary target with rng 0.5 gets the burst dropped on its head.
    const near = new FlakSystem(makeFx().fx, 'modern', () => 0.5);
    let dmg2 = 0;
    const sitting = { position: new THREE.Vector3(0, 1000, 0), velocity: new THREE.Vector3(0, 0, 0) };
    for (let t = 0; t < 6; t += 1 / 60) near.update(1 / 60, true, sitting, d => { dmg2 += d; });
    expect(dmg2).toBeGreaterThan(0);
  });
});
