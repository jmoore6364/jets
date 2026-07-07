/**
 * Physics sanity tests — these lock down the flight model's sign conventions
 * and basic aerodynamic behavior so refactors can't silently invert a control.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { FlightModel, aeroCoefficients, airDensity } from '../src/engine/flight/flightModel';
import { FOKKER_DR1, SOPWITH_CAMEL } from '../src/era/wwi/aircraft';
import { F16 } from '../src/era/modern/aircraft';

function freshModel(spec = F16, speed = spec.cruiseSpeedMs) {
  const m = new FlightModel(spec);
  m.spawn(0, 2000, 0, speed);
  m.controls.throttle = 0.8;
  return m;
}

function run(m: FlightModel, seconds: number) {
  const dt = 1 / 120;
  for (let t = 0; t < seconds; t += dt) m.step(dt);
}

describe('aerodynamics', () => {
  it('produces positive lift at positive alpha, zero-ish at negative cl0 offset', () => {
    const { cl } = aeroCoefficients(F16, 0.1);
    expect(cl).toBeGreaterThan(0.3);
    const neg = aeroCoefficients(F16, -0.2);
    expect(neg.cl).toBeLessThan(0);
  });

  it('stalls past the critical angle: CL drops, CD rises', () => {
    const before = aeroCoefficients(FOKKER_DR1, FOKKER_DR1.alphaStallRad - 0.02);
    const after = aeroCoefficients(FOKKER_DR1, FOKKER_DR1.alphaStallRad + 0.25);
    expect(after.cl).toBeLessThan(before.cl);
    expect(after.cd).toBeGreaterThan(before.cd);
  });

  it('air thins with altitude', () => {
    expect(airDensity(0)).toBeCloseTo(1.225, 3);
    expect(airDensity(8500)).toBeLessThan(0.5);
  });
});

describe('control sign conventions', () => {
  it('pulling the stick pitches the nose up', () => {
    const m = freshModel();
    m.controls.pitch = 1;
    run(m, 0.5);
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(m.quaternion);
    expect(fwd.y).toBeGreaterThan(0.02); // nose above horizon
  });

  it('right aileron rolls right (right wing drops)', () => {
    const m = freshModel();
    m.controls.roll = 1;
    run(m, 0.6);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(m.quaternion);
    expect(right.y).toBeLessThan(-0.05); // right wingtip below horizon
  });

  it('right rudder yaws the nose right', () => {
    const m = freshModel(FOKKER_DR1);
    m.controls.yaw = 1;
    run(m, 1.0);
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(m.quaternion);
    expect(fwd.x).toBeGreaterThan(0.01); // heading drifts toward +X (right of initial -Z)
  });
});

describe('flight behavior', () => {
  it('sustains roughly level flight when trimmed at cruise', () => {
    const m = freshModel(F16, 200);
    m.controls.throttle = 0.75;
    run(m, 10);
    // Should neither fall out of the sky nor zoom-climb into space.
    expect(m.position.y).toBeGreaterThan(1000);
    expect(m.position.y).toBeLessThan(4000);
    expect(m.sample.speedMs).toBeGreaterThan(100);
  });

  it('falls without thrust or airspeed', () => {
    const m = freshModel(F16, 5);
    m.controls.throttle = 0;
    run(m, 5);
    expect(m.position.y).toBeLessThan(1900);
    expect(m.velocity.y).toBeLessThan(-10);
  });

  it('the Camel shows gyroscopic yaw when pitching (rotary engine)', () => {
    const withGyro = freshModel(SOPWITH_CAMEL);
    withGyro.controls.pitch = 0.6;
    run(withGyro, 1.0);

    const noGyro = new FlightModel({ ...SOPWITH_CAMEL, engineAngularMomentum: 0 });
    noGyro.spawn(0, 2000, 0, SOPWITH_CAMEL.cruiseSpeedMs);
    noGyro.controls.throttle = 0.8;
    noGyro.controls.pitch = 0.6;
    run(noGyro, 1.0);

    const fwdGyro = new THREE.Vector3(0, 0, -1).applyQuaternion(withGyro.quaternion);
    const fwdClean = new THREE.Vector3(0, 0, -1).applyQuaternion(noGyro.quaternion);
    // Pitching up with a clockwise rotary must push the nose right vs. the clean run.
    expect(fwdGyro.x).toBeGreaterThan(fwdClean.x + 0.005);
  });

  it('FBW limiter keeps the F-16 under its G limit in a full-stick pull', () => {
    const m = freshModel(F16, 250);
    m.controls.throttle = 1;
    m.controls.pitch = 1;
    let maxG = 0;
    const dt = 1 / 120;
    for (let t = 0; t < 6; t += dt) {
      m.step(dt);
      maxG = Math.max(maxG, m.sample.gLoad);
    }
    expect(maxG).toBeLessThan(11); // soft limiter: brief overshoot ok, sustained 12+ is not
    expect(maxG).toBeGreaterThan(3); // ...but it should still actually turn
  });

  it('WWI and modern aircraft both fly with the same engine code', () => {
    for (const spec of [FOKKER_DR1, SOPWITH_CAMEL, F16]) {
      const m = freshModel(spec);
      run(m, 3);
      expect(Number.isFinite(m.position.y)).toBe(true);
      expect(Number.isFinite(m.sample.speedMs)).toBe(true);
      expect(m.sample.speedMs).toBeGreaterThan(spec.cruiseSpeedMs * 0.4);
    }
  });
});
