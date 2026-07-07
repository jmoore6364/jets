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
  cmAlpha: -0.25,    // relaxed static stability, FCS-augmented
  cm0: 0.011,
  cnBeta: 0.12,
  dihedralEffect: 0.03,
  pitchDamp: 7,
  rollDamp: 0.4,
  yawDamp: 0.35,
  engineAngularMomentum: 0,
  fbw: { alphaLimitRad: 0.44, gLimit: 9 }, // 25° AoA, 9 G — Viper limits
  propulsion: { kind: 'jet', milThrustN: 76000, abThrustN: 129000 },
  cruiseSpeedMs: 180
};

export const MODERN_AIRCRAFT = [F16];
