/**
 * Combat sanity: ballistics hit what they're aimed at, gravity drops rounds,
 * guns respect ammo, and the AI actually turns toward its target.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { ProjectileSystem, Gun, WWI_TWIN_MG, M61_VULCAN, type HitTarget } from '../src/engine/combat/projectiles';
import { AiPilot } from '../src/engine/ai/pilot';
import { FlightModel } from '../src/engine/flight/flightModel';
import { F16 } from '../src/era/modern/aircraft';
import { SOPWITH_CAMEL } from '../src/era/wwi/aircraft';

const flatGround = () => -1000;

function makeSystem(): ProjectileSystem {
  // ProjectileSystem only touches THREE scene APIs, which work headless.
  const scene = new THREE.Scene();
  return new ProjectileSystem(scene);
}

describe('ballistics', () => {
  it('a burst fired straight at a target hits it', () => {
    const sys = makeSystem();
    let hits = 0;
    const target: HitTarget = {
      id: 1,
      position: new THREE.Vector3(0, 0, -300),
      radiusM: 5,
      onHit: d => { hits += d; }
    };
    // fire a few rounds straight down -Z
    for (let i = 0; i < 5; i++) {
      sys.spawn(0, M61_VULCAN, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3());
    }
    for (let t = 0; t < 1; t += 1 / 120) sys.update(1 / 120, [target], flatGround);
    expect(hits).toBeGreaterThan(0);
  });

  it('rounds drop under gravity', () => {
    const sys = makeSystem();
    const noSpread = { ...WWI_TWIN_MG, dispersionRad: 0 }; // deterministic trajectory
    let hitBoresight = 0;
    let hitDropped = 0;
    // 800 m at 745 m/s ≈ 1.07 s of flight → ~5.6 m of drop.
    const targets: HitTarget[] = [
      { id: 1, position: new THREE.Vector3(0, 0, -800), radiusM: 2, onHit: () => { hitBoresight++; } },
      { id: 2, position: new THREE.Vector3(0, -5.6, -800), radiusM: 2, onHit: () => { hitDropped++; } }
    ];
    sys.spawn(0, noSpread, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3());
    for (let t = 0; t < 2; t += 1 / 120) sys.update(1 / 120, targets, flatGround);
    expect(hitBoresight).toBe(0); // fell below the aim point
    expect(hitDropped).toBe(1);   // ...by the predicted amount
  });

  it('projectiles never hit their owner', () => {
    const sys = makeSystem();
    let own = 0;
    const me: HitTarget = { id: 0, position: new THREE.Vector3(0, 0, -1), radiusM: 10, onHit: () => { own++; } };
    sys.spawn(0, M61_VULCAN, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3());
    sys.update(1 / 120, [me], flatGround);
    expect(own).toBe(0);
  });
});

describe('gun', () => {
  it('respects rate of fire and magazine', () => {
    const sys = makeSystem();
    const gun = new Gun(WWI_TWIN_MG);
    const pos = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const vel = new THREE.Vector3();
    // hold the trigger for 2 seconds
    for (let t = 0; t < 2; t += 1 / 120) gun.update(1 / 120, true, 0, pos, q, vel, sys);
    const fired = WWI_TWIN_MG.magazine - gun.ammo;
    expect(fired).toBeGreaterThan(28);
    expect(fired).toBeLessThan(36); // ~16 rounds/s
    // empty it
    for (let t = 0; t < 60; t += 1 / 120) gun.update(1 / 120, true, 0, pos, q, vel, sys);
    expect(gun.ammo).toBe(0);
  });
});

describe('AI pilot', () => {
  it('turns toward its target', () => {
    const me = new FlightModel(F16);
    me.spawn(0, 3000, 0, 200);
    const tgt = new FlightModel(F16);
    tgt.spawn(3000, 3200, -1500, 180, Math.PI / 2); // off to the right
    const ai = new AiPilot(M61_VULCAN, 1);

    const angleOff = () => {
      const dir = tgt.position.clone().sub(me.position).normalize();
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(me.quaternion);
      return Math.acos(THREE.MathUtils.clamp(dir.dot(fwd), -1, 1));
    };

    const before = angleOff();
    const dt = 1 / 120;
    let minAngle = before;
    for (let t = 0; t < 8; t += dt) {
      ai.update(dt, me, tgt, 3000);
      me.step(dt);
      tgt.step(dt);
      minAngle = Math.min(minAngle, angleOff());
    }
    // At some point in the intercept the AI must be pointing nearly at the
    // target (final angle is meaningless once it merges and blows past).
    expect(minAngle).toBeLessThan(Math.min(0.35, before * 0.4));
  });

  it('pulls up instead of chasing into the ground', () => {
    const me = new FlightModel(SOPWITH_CAMEL);
    me.spawn(0, 500, 0, 42);
    const ai = new AiPilot(WWI_TWIN_MG, 1);
    ai.update(1 / 120, me, null, 100); // 100 m AGL — terrain panic
    expect(me.controls.pitch).toBe(1);
    expect(me.controls.throttle).toBe(1);
  });
});
