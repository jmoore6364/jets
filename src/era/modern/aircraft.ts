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

export const MODERN_AIRCRAFT = [F16, FA18];
