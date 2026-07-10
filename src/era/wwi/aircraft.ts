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
  cmDe: 0.15, // full stick trims near CLmax — pull hard and she mushes at the buffet, not into a tumble
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
  blipSwitch: true,
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
  cmDe: 0.14,
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
  blipSwitch: true,
  propulsion: { kind: 'prop', maxPowerW: 97000, propEfficiency: 0.75, maxStaticThrustN: 2900 },
  cruiseSpeedMs: 42
};

/** Legacy-shop unlock: the entente's late-war thoroughbred. Heavy, fast,
 * dives like an anvil — but don't try to turn with a rotary scout. */
export const SPAD13: AircraftSpec = {
  id: 'spad13',
  name: 'SPAD S.XIII',
  era: 'wwi',
  massKg: 845,
  inertia: { pitch: 2300, yaw: 3400, roll: 2000 },
  wingAreaM2: 21.1,
  wingSpanM: 8.1,
  chordM: 2.4,
  aspectRatio: 3.1,
  oswald: 0.72,
  cl0: 0.13,
  clAlpha: 4.3,
  clMax: 1.35,
  alphaStallRad: 0.26,
  cd0: 0.040,
  cmDe: 0.15,
  clDa: 0.05,
  cnDr: 0.07,
  adverseYaw: 0.012,
  cmAlpha: -0.32, // stable gun platform
  cm0: 0.012,
  cnBeta: 0.10,
  dihedralEffect: 0.045,
  pitchDamp: 8,
  rollDamp: 0.55,
  yawDamp: 0.35,
  engineAngularMomentum: 260, // geared Hispano-Suiza V8 — no rotary tricks
  propulsion: { kind: 'prop', maxPowerW: 164000, propEfficiency: 0.76, maxStaticThrustN: 3400 },
  cruiseSpeedMs: 50
};

/** Legacy-shop unlock: the D.VII "hangs on its prop" — docile at the edge
 * of the stall where everything else falls out of the sky. */
export const FOKKER_D7: AircraftSpec = {
  id: 'fokker-d7',
  name: 'Fokker D.VII',
  era: 'wwi',
  massKg: 700,
  inertia: { pitch: 2000, yaw: 3000, roll: 1700 },
  wingAreaM2: 20.5,
  wingSpanM: 8.9,
  chordM: 2.3,
  aspectRatio: 3.86,
  oswald: 0.74,
  cl0: 0.18,
  clAlpha: 4.4,
  clMax: 1.65,
  alphaStallRad: 0.31,
  cd0: 0.044,
  cmDe: 0.16,
  clDa: 0.052,
  cnDr: 0.07,
  adverseYaw: 0.013,
  cmAlpha: -0.24,
  cm0: 0.013,
  cnBeta: 0.10,
  dihedralEffect: 0.05,
  pitchDamp: 8.5,
  rollDamp: 0.52,
  yawDamp: 0.34,
  engineAngularMomentum: 350, // inline Mercedes — steady as a table
  propulsion: { kind: 'prop', maxPowerW: 138000, propEfficiency: 0.75, maxStaticThrustN: 3100 },
  cruiseSpeedMs: 46
};

export const WWI_AIRCRAFT = [FOKKER_DR1, SOPWITH_CAMEL, SPAD13, FOKKER_D7];
