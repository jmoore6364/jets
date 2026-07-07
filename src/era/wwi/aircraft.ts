/**
 * WWI stable. Tuned for the classic Red Baron feel: slow, draggy, agile,
 * with rotary-engine gyroscopics that make left and right turns different beasts.
 */
import type { AircraftSpec } from '../../engine/flight/aircraft';

export const FOKKER_DR1: AircraftSpec = {
  id: 'fokker-dr1',
  name: 'Fokker Dr.I',
  era: 'wwi',
  massKg: 585,
  inertia: { pitch: 1700, yaw: 2600, roll: 1400 },
  wingAreaM2: 18.7,
  wingSpanM: 7.2,
  chordM: 2.6,
  aspectRatio: 2.77,
  oswald: 0.70,
  cl0: 0.15,
  clAlpha: 4.0,
  clMax: 1.5,
  alphaStallRad: 0.29,
  cd0: 0.046,
  cmDe: 0.55,
  clDa: 0.05,
  cnDr: 0.07,
  adverseYaw: 0.015,
  cmAlpha: -0.30,
  cm0: 0.013,
  cnBeta: 0.10,
  dihedralEffect: 0.06,
  pitchDamp: 8,
  rollDamp: 0.5,
  yawDamp: 0.35,
  engineAngularMomentum: 1300, // Oberursel rotary — the whole engine spins
  propulsion: { kind: 'prop', maxPowerW: 82000, propEfficiency: 0.75, maxStaticThrustN: 2600 },
  cruiseSpeedMs: 38
};

export const SOPWITH_CAMEL: AircraftSpec = {
  id: 'sopwith-camel',
  name: 'Sopwith Camel',
  era: 'wwi',
  massKg: 660,
  inertia: { pitch: 1900, yaw: 2900, roll: 1700 },
  wingAreaM2: 21.5,
  wingSpanM: 8.5,
  chordM: 2.5,
  aspectRatio: 3.36,
  oswald: 0.72,
  cl0: 0.14,
  clAlpha: 4.2,
  clMax: 1.4,
  alphaStallRad: 0.27,
  cd0: 0.045,
  cmDe: 0.55,
  clDa: 0.055,
  cnDr: 0.07,
  adverseYaw: 0.018,
  cmAlpha: -0.26, // famously twitchy in pitch
  cm0: 0.012,
  cnBeta: 0.09,
  dihedralEffect: 0.05,
  pitchDamp: 6.5,
  rollDamp: 0.5,
  yawDamp: 0.32,
  engineAngularMomentum: 1550, // Clerget rotary — the Camel's killer quirk
  propulsion: { kind: 'prop', maxPowerW: 97000, propEfficiency: 0.75, maxStaticThrustN: 2900 },
  cruiseSpeedMs: 42
};

export const WWI_AIRCRAFT = [FOKKER_DR1, SOPWITH_CAMEL];
