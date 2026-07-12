/**
 * Modern stable. F-16C-inspired numbers with a light FBW alpha/G limiter
 * standing in for the real flight control system.
 */
import type { AircraftSpec } from '../../engine/flight/aircraft';

export const F16: AircraftSpec = {
  id: 'f16',
  name: 'F-16C Viper',
  era: 'modern',
  massKg: 12000,
  inertia: { pitch: 75674, yaw: 85552, roll: 12875 },
  wingAreaM2: 27.9,
  wingSpanM: 9.45,
  chordM: 3.45,
  aspectRatio: 3.2,
  oswald: 0.85,
  cl0: 0.05,
  clAlpha: 3.7,
  clMax: 1.6,
  alphaStallRad: 0.52,
  cd0: 0.018,
  cmDe: 0.50,
  clDa: 0.06,
  cnDr: 0.06,
  adverseYaw: 0.002, // FCS coordinates for you
  cmAlpha: -0.08,    // genuinely relaxed static stability — the FCS is the stability
  cm0: 0.004,
  cnBeta: 0.12,
  dihedralEffect: 0.01, // the FCS masks what little there is
  pitchDamp: 7,
  rollDamp: 0.4,
  yawDamp: 0.35,
  engineAngularMomentum: 0,
  fbw: { alphaLimitRad: 0.44, gLimit: 9 }, // 25° AoA, 9 G — Viper limits
  brakeDrag: 0.055, // speedbrake
  propulsion: { kind: 'jet', milThrustN: 76000, abThrustN: 129000 },
  cruiseSpeedMs: 180
};

/** Legacy-shop unlock: the Navy's knife fighter. Slower than the Viper,
 * but it holds angles of attack the Viper's limiter won't even discuss. */
export const FA18: AircraftSpec = {
  ...F16,
  id: 'fa18',
  name: 'F/A-18C Hornet',
  massKg: 16800,
  inertia: { pitch: 110000, yaw: 125000, roll: 22000 },
  wingAreaM2: 37.2,
  wingSpanM: 11.4,
  chordM: 3.5,
  aspectRatio: 3.5,
  cd0: 0.020,
  clMax: 1.8,
  alphaStallRad: 0.61,
  fbw: { alphaLimitRad: 0.56, gLimit: 7.5 }, // 32° AoA, 7.5 G — Hornet paperwork
  brakeDrag: 0.05,
  propulsion: { kind: 'jet', milThrustN: 97000, abThrustN: 158000 },
  cruiseSpeedMs: 170
};

/** Bandit only for now — flyable once the campaign opens up. */
export const MIG29: AircraftSpec = {
  ...F16,
  id: 'mig29',
  name: 'MiG-29 Fulcrum',
  massKg: 12500,
  inertia: { pitch: 79000, yaw: 89000, roll: 14500 },
  wingAreaM2: 38,
  wingSpanM: 11.36,
  chordM: 3.35,
  aspectRatio: 3.4,
  cd0: 0.021,
  fbw: { alphaLimitRad: 0.42, gLimit: 9 },
  propulsion: { kind: 'jet', milThrustN: 99000, abThrustN: 163000 },
  cruiseSpeedMs: 175
};

/** Legacy-shop unlock: speed, altitude, and six AMRAAMs nobody sees coming.
 * The F-16 will out-roll it in a phone booth — the Raptor's fight is BVR. */
export const F22: AircraftSpec = {
  ...F16,
  id: 'f22',
  name: 'F-22A Raptor',
  massKg: 19700,
  inertia: { pitch: 165000, yaw: 190000, roll: 38000 },
  wingAreaM2: 78,
  wingSpanM: 13.6,
  chordM: 5.1,
  aspectRatio: 2.36,
  cd0: 0.015,
  clMax: 1.7,
  alphaStallRad: 0.6,
  fbw: { alphaLimitRad: 0.6, gLimit: 9 }, // TVC-fed alpha authority
  brakeDrag: 0.05,
  propulsion: { kind: 'jet', milThrustN: 232000, abThrustN: 312000 }, // supercruise thrust
  cruiseSpeedMs: 220
};

/** Legacy-shop unlock: the fleet interceptor. Heavy, fast, and it kills
 * from 24 km with the Phoenix — just don't try to knife-fight in it. */
export const F14: AircraftSpec = {
  ...F16,
  id: 'f14',
  name: 'F-14B Tomcat',
  massKg: 27700,
  inertia: { pitch: 310000, yaw: 360000, roll: 82000 },
  wingAreaM2: 94,
  wingSpanM: 19.5,
  chordM: 4.9,
  aspectRatio: 4.05,
  cd0: 0.021,
  clMax: 1.5,
  alphaStallRad: 0.42,
  fbw: { alphaLimitRad: 0.38, gLimit: 7.5 },
  brakeDrag: 0.06,
  propulsion: { kind: 'jet', milThrustN: 130000, abThrustN: 214000 },
  cruiseSpeedMs: 210
};

/** AI only (for now): the Flanker — bigger, faster, and better armed than
 * the Fulcrum. When one shows on the scope, respect it. */
export const SU27: AircraftSpec = {
  ...F16,
  id: 'su27',
  name: 'Su-27 Flanker',
  massKg: 23000,
  inertia: { pitch: 230000, yaw: 270000, roll: 52000 },
  wingAreaM2: 62,
  wingSpanM: 14.7,
  chordM: 4.6,
  aspectRatio: 3.5,
  cd0: 0.019,
  clMax: 1.7,
  alphaStallRad: 0.52,
  fbw: { alphaLimitRad: 0.5, gLimit: 9 },
  brakeDrag: 0.05,
  propulsion: { kind: 'jet', milThrustN: 150000, abThrustN: 245000 },
  cruiseSpeedMs: 200
};

/** AI only: the raid bomber — fast in a straight line, helpless in a turn. */
export const BACKFIRE: AircraftSpec = {
  ...F16,
  id: 'backfire',
  name: 'Tu-22M Backfire',
  massKg: 58000,
  inertia: { pitch: 900000, yaw: 1100000, roll: 400000 },
  wingAreaM2: 175,
  wingSpanM: 23.3,
  chordM: 7.5,
  aspectRatio: 3.1,
  cd0: 0.024,
  clMax: 1.4,
  alphaStallRad: 0.3,
  fbw: { alphaLimitRad: 0.26, gLimit: 2.5 },
  brakeDrag: 0.04,
  propulsion: { kind: 'jet', milThrustN: 490000, abThrustN: 490000 },
  cruiseSpeedMs: 235
};

export const MODERN_AIRCRAFT = [F16, FA18, F14, F22];
