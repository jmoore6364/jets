/**
 * Aircraft specification — pure data. The shared flight model consumes these,
 * so a 1917 triplane and a modern jet differ only in numbers, not code paths.
 *
 * Body-frame convention (matches three.js objects):
 *   +X = right wing, +Y = up, -Z = forward (nose).
 * Angles in radians, SI units throughout unless suffixed.
 */

export type Era = 'wwi' | 'modern';

export interface PropPropulsion {
  kind: 'prop';
  /** Shaft power at full throttle, watts. */
  maxPowerW: number;
  /** Propeller efficiency (0..1). */
  propEfficiency: number;
  /** Static thrust cap, N (thrust = min(cap, P*eta/V)). */
  maxStaticThrustN: number;
}

export interface JetPropulsion {
  kind: 'jet';
  /** Military (dry) thrust, N. */
  milThrustN: number;
  /** Afterburner thrust, N (0 if none). */
  abThrustN: number;
}

export type Propulsion = PropPropulsion | JetPropulsion;

export interface AircraftSpec {
  id: string;
  name: string;
  era: Era;

  massKg: number;
  /** Diagonal inertia about body axes, kg·m². roll = about forward axis. */
  inertia: { pitch: number; yaw: number; roll: number };

  wingAreaM2: number;
  wingSpanM: number;
  /** Mean aerodynamic chord, m. */
  chordM: number;
  aspectRatio: number;
  oswald: number;

  /** Lift curve. */
  cl0: number;
  clAlpha: number; // per rad
  clMax: number;
  alphaStallRad: number;

  cd0: number;

  /** Control effectiveness per unit stick input (input already includes max deflection). */
  cmDe: number; // pitch:  +input (pull) -> nose up
  clDa: number; // roll:   +input -> roll right
  cnDr: number; // yaw:    +input -> nose right
  /** Aileron adverse yaw: +roll-right input -> nose left. WWI planes: large. */
  adverseYaw: number;

  /** Static stability (restoring). cmAlpha < 0 = pitch-stable. */
  cmAlpha: number;
  /** Pitch trim offset. */
  cm0: number;
  /** Weathervane stability, > 0 = stable. */
  cnBeta: number;
  /** Dihedral effect: sideslip right -> roll left, > 0 = stable. */
  dihedralEffect: number;

  /** Rate damping (magnitude of Cmq / Clp / Cnr). */
  pitchDamp: number;
  rollDamp: number;
  yawDamp: number;

  /**
   * Angular momentum of rotary engine + prop along the forward axis, N·m·s.
   * Positive = spins clockwise seen from the cockpit (Le Rhône style).
   * Produces the gyroscopic pitch/yaw coupling that defined WWI dogfighting.
   */
  engineAngularMomentum: number;

  /** Simple fly-by-wire alpha/G limiter (modern jets). */
  fbw?: { alphaLimitRad: number; gLimit: number };

  propulsion: Propulsion;

  /** For UI / spawn logic. */
  cruiseSpeedMs: number;
}
