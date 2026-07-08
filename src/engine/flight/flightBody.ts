/**
 * The surface every flyable body exposes — satisfied by both the full
 * aerodynamic FlightModel (sim) and the ArcadeFlightModel (direct control).
 */
import type * as THREE from 'three';
import type { AircraftSpec } from './aircraft';
import type { ControlInputs, FlightSample } from './flightModel';

export interface FlightBody {
  readonly spec: AircraftSpec;
  readonly position: THREE.Vector3;
  readonly quaternion: THREE.Quaternion;
  readonly velocity: THREE.Vector3;
  readonly controls: ControlInputs;
  readonly sample: FlightSample;
  spawn(x: number, altitude: number, z: number, speedMs: number, headingRad?: number): void;
  step(dt: number): void;
}
