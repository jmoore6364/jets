/**
 * Physics sanity tests — these lock down the flight model's sign conventions
 * and basic aerodynamic behavior so refactors can't silently invert a control.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { FlightModel, aeroCoefficients, airDensity } from '../src/engine/flight/flightModel';
import { FOKKER_DR1, SOPWITH_CAMEL, WWI_AIRCRAFT } from '../src/era/wwi/aircraft';
import { F16, MODERN_AIRCRAFT } from '../src/era/modern/aircraft';

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

  it('FBW alpha limiter holds a sustained pull without porpoising', () => {
    // Regression: a proportional-only alpha cut limit-cycled — pitch rate
    // pumped between ~5 and ~70 deg/s in a constant full pull ("the bounce").
    const m = freshModel(F16, 220);
    m.controls.throttle = 0.9;
    m.controls.pitch = 0.7;
    const dt = 1 / 120;
    const alphas: number[] = [];
    let prevPitch = 0;
    let pitchRateReversals = 0;
    let lastRate = 0;
    for (let t = 0; t < 2.2; t += dt) {
      m.step(dt);
      // once established on the limiter (t > 1s), record behavior
      if (t > 1.0) {
        alphas.push(m.sample.alphaRad);
        const rate = (m.sample.pitchRad - prevPitch) / dt;
        if (rate * lastRate < 0 && Math.abs(rate) > 0.1) pitchRateReversals++;
        lastRate = rate;
      }
      prevPitch = m.sample.pitchRad;
    }
    const spread = Math.max(...alphas) - Math.min(...alphas);
    expect(spread).toBeLessThan(0.03); // alpha pinned, not bouncing (was ~0.06+)
    expect(pitchRateReversals).toBe(0); // nose never see-saws mid-pull
  });

  it('speedbrake bleeds energy faster (F-16)', () => {
    const clean = freshModel(F16, 250);
    clean.controls.throttle = 0;
    run(clean, 6);

    const braked = freshModel(F16, 250);
    braked.controls.throttle = 0;
    braked.controls.brake = true;
    run(braked, 6);

    expect(braked.sample.speedMs).toBeLessThan(clean.sample.speedMs - 5);
  });

  it('ignition blip kills rotary thrust (Camel)', () => {
    const m = freshModel(SOPWITH_CAMEL);
    m.controls.throttle = 1;
    m.controls.brake = true; // blipping
    run(m, 0.1);
    expect(m.sample.thrustN).toBe(0);
    m.controls.brake = false;
    run(m, 0.1);
    expect(m.sample.thrustN).toBeGreaterThan(500);
  });

  it('reports sane pitch/bank/mach in the sample', () => {
    const m = freshModel(F16, 250);
    run(m, 0.5);
    expect(Math.abs(m.sample.bankRad)).toBeLessThan(0.2);
    expect(Math.abs(m.sample.pitchRad)).toBeLessThan(0.3);
    expect(m.sample.mach).toBeGreaterThan(0.6);
    expect(m.sample.mach).toBeLessThan(1.0);
  });

  it('FCS: releasing the roll stick never kicks back the other way', () => {
    const m = freshModel(F16, 220);
    m.controls.throttle = 0.9;
    const dt = 1 / 120;
    m.controls.roll = 1;
    while (m.sample.bankRad < 1.05) m.step(dt); // roll to ~60 deg
    let roll = 1;
    let maxBank = -999;
    let reversal = 0;
    for (let t = 0; t < 6; t += dt) {
      roll *= 1 - dt / 0.05; // keyboard-style release decay
      m.controls.roll = roll < 0.01 ? 0 : roll;
      m.step(dt);
      maxBank = Math.max(maxBank, m.sample.bankRad);
      reversal = Math.max(reversal, maxBank - m.sample.bankRad);
    }
    expect(reversal * 57.3).toBeLessThan(1.5); // brake-then-latch: no visible reversal
    expect(Math.abs(m.angVelBody.z)).toBeLessThan(0.05); // and the roll is truly stopped
  });

  it('FCS: attitude holds after release (no auto-leveling)', () => {
    const m = freshModel(F16, 220);
    m.controls.throttle = 0.9;
    const dt = 1 / 120;
    m.controls.pitch = 1;
    while (m.sample.pitchRad < 0.6) m.step(dt); // pull to ~35 deg
    m.controls.pitch = 0;
    for (let t = 0; t < 8; t += dt) m.step(dt);
    expect(m.sample.pitchRad).toBeGreaterThan(0.45); // still ~26+ deg nose-up
  });

  it('FCS: no dutch-roll bounce after a hard rolling pull', () => {
    const m = freshModel(F16, 220);
    m.controls.throttle = 0.9;
    const dt = 1 / 120;
    m.controls.roll = 1;
    m.controls.pitch = 0.7;
    while (m.sample.bankRad < 1.2) m.step(dt);
    m.controls.roll = 0;
    m.controls.pitch = 0;
    // yaw damper must bleed the sideslip off smoothly, not ring
    let maxBetaLate = 0;
    for (let t = 0; t < 5; t += dt) {
      m.step(dt);
      if (t > 2.5) maxBetaLate = Math.max(maxBetaLate, Math.abs(m.sample.betaRad));
    }
    expect(maxBetaLate * 57.3).toBeLessThan(4); // was swinging +/-25 deg before the damper
  });

  it('WWI and modern aircraft both fly with the same engine code', () => {
    for (const spec of [...WWI_AIRCRAFT, ...MODERN_AIRCRAFT]) {
      const m = freshModel(spec);
      run(m, 3);
      expect(Number.isFinite(m.position.y)).toBe(true);
      expect(Number.isFinite(m.sample.speedMs)).toBe(true);
      expect(m.sample.speedMs).toBeGreaterThan(spec.cruiseSpeedMs * 0.4);
    }
  });
});
