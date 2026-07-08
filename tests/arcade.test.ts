/**
 * The arcade contract: what you command happens, nothing you don't.
 */
import { describe, it, expect } from 'vitest';
import { ArcadeFlightModel } from '../src/engine/flight/arcadeModel';
import { F16 } from '../src/era/modern/aircraft';
import { SOPWITH_CAMEL } from '../src/era/wwi/aircraft';

function fresh(spec = F16, speed = 220) {
  const m = new ArcadeFlightModel(spec);
  m.spawn(0, 2000, 0, speed);
  m.controls.throttle = 0.85;
  return m;
}

const dt = 1 / 120;
const run = (m: ArcadeFlightModel, s: number) => { for (let t = 0; t < s; t += dt) m.step(dt); };

describe('arcade handling', () => {
  it('release = the attitude stays EXACTLY, forever', () => {
    const m = fresh();
    m.controls.pitch = 1;
    while (m.sample.pitchRad < 0.6) m.step(dt);
    m.controls.pitch = 0;
    run(m, 0.3); // rate smoothing settles
    const pitchAfterSettle = m.sample.pitchRad;
    run(m, 10);
    expect(Math.abs(m.sample.pitchRad - pitchAfterSettle) * 57.3).toBeLessThan(1.0);

    m.controls.roll = 1;
    while (m.sample.bankRad < 1.0) m.step(dt);
    m.controls.roll = 0;
    run(m, 0.3);
    const bankAfterSettle = m.sample.bankRad;
    run(m, 10);
    expect(Math.abs(m.sample.bankRad - bankAfterSettle) * 57.3).toBeLessThan(1.0);
  });

  it('THE arcade rule: banked = turning, hands off, forever', () => {
    const m = fresh();
    m.controls.roll = 1;
    while (m.sample.bankRad < 0.9) m.step(dt); // ~52 deg
    m.controls.roll = 0;
    run(m, 0.5);
    const hdg0 = m.sample.headingRad;
    const bank0 = m.sample.bankRad;
    run(m, 4); // hands completely off
    let turned = (m.sample.headingRad - hdg0) * 57.3;
    if (turned > 180) turned -= 360; if (turned < -180) turned += 360;
    expect(Math.abs(turned)).toBeGreaterThan(20);          // never freezes (was 0 deg/s)
    expect(Math.abs(m.sample.bankRad - bank0) * 57.3).toBeLessThan(3); // bank untouched
  });

  it('pulling while banked turns the jet — hard', () => {
    const m = fresh();
    m.controls.roll = 1;
    while (m.sample.bankRad < 1.3) m.step(dt); // ~75 deg
    m.controls.roll = 0;
    run(m, 0.3);
    const hdg0 = m.sample.headingRad;
    m.controls.pitch = 1;
    run(m, 3);
    let turned = (m.sample.headingRad - hdg0) * 57.3;
    if (turned < -180) turned += 360; if (turned > 360) turned -= 360;
    expect(Math.abs(turned)).toBeGreaterThan(45); // 15+ deg/s of real turn
  });

  it('no stall trap: full pull at low speed mushes, never departs', () => {
    const m = fresh(F16, 90);
    m.controls.throttle = 0.3;
    m.controls.pitch = 1;
    run(m, 10);
    expect(Number.isFinite(m.sample.pitchRad)).toBe(true);
    expect(m.sample.speedMs).toBeGreaterThan(30); // floor holds
  });

  it('energy is honest: climbs bleed speed, dives regain it', () => {
    const climb = fresh();
    climb.controls.pitch = 1;
    while (climb.sample.pitchRad < 1.0) climb.step(dt);
    climb.controls.pitch = 0;
    run(climb, 5);
    expect(climb.sample.speedMs).toBeLessThan(200);

    const dive = fresh();
    dive.controls.pitch = -1;
    while (dive.sample.pitchRad > -0.8) dive.step(dt);
    dive.controls.pitch = 0;
    run(dive, 4);
    expect(dive.sample.speedMs).toBeGreaterThan(240);
  });

  it('works for the WWI stable too', () => {
    const m = fresh(SOPWITH_CAMEL, 45);
    m.controls.roll = -1;
    run(m, 0.8);
    m.controls.roll = 0;
    run(m, 5);
    expect(Number.isFinite(m.sample.bankRad)).toBe(true);
    expect(m.sample.speedMs).toBeGreaterThan(20);
  });
});
