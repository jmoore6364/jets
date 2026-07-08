/**
 * A Combatant: airframe (FlightModel + mesh) with a gun, hit points,
 * and damage/death effects. Player and AI use the identical class.
 */
import * as THREE from 'three';
import type { AircraftSpec } from '../engine/flight/aircraft';
import { FlightModel } from '../engine/flight/flightModel';
import { ArcadeFlightModel } from '../engine/flight/arcadeModel';
import type { FlightBody } from '../engine/flight/flightBody';
import { buildAircraftMesh } from '../world/aircraftMesh';
import { Gun, WWI_TWIN_MG, M61_VULCAN, type GunSpec } from '../engine/combat/projectiles';
import { AIM9, R73, type MissileSpec } from '../engine/combat/missiles';
import type { EffectsPool } from '../world/effects';

export function gunFor(spec: AircraftSpec): GunSpec {
  return spec.era === 'wwi' ? WWI_TWIN_MG : M61_VULCAN;
}

export function hitPointsFor(spec: AircraftSpec): number {
  return spec.era === 'wwi' ? 14 : 7;
}

export class Combatant {
  readonly model: FlightBody;
  readonly mesh: THREE.Group;
  readonly gun: Gun;
  readonly maxHp: number;
  hp: number;
  alive = true;
  lastHitBy = -1;

  /** IR missile loadout (modern era only). */
  readonly missileSpec: MissileSpec | null;
  missiles = 0;
  flares = 0;

  private smokeTimer = 0;

  constructor(
    readonly id: number,
    scene: THREE.Scene,
    spec: AircraftSpec,
    private effects: EffectsPool,
    /** 0 = player's side, 1 = enemy. */
    readonly side: number = 1,
    arcade = false
  ) {
    this.model = arcade ? new ArcadeFlightModel(spec) : new FlightModel(spec);
    this.mesh = buildAircraftMesh(spec);
    scene.add(this.mesh);
    this.gun = new Gun(gunFor(spec));
    this.maxHp = hitPointsFor(spec);
    this.hp = this.maxHp;
    this.missileSpec = spec.era === 'modern' ? (spec.id === 'mig29' ? R73 : AIM9) : null;
    this.rearm();
  }

  private rearm(): void {
    if (this.missileSpec) {
      this.missiles = 4;
      this.flares = 30;
    }
  }

  get spec(): AircraftSpec {
    return this.model.spec;
  }

  /** Rough airframe hit radius. */
  get radiusM(): number {
    return this.spec.wingSpanM * 0.55;
  }

  hit(damage: number, shooterId: number): void {
    if (!this.alive) return;
    this.hp -= damage;
    this.lastHitBy = shooterId;
    this.effects.spawn(this.model.position.clone(), { size: 2.5, growth: 4, life: 0.5, color: 0xffdd88, opacity: 0.8 });
    if (this.hp <= 0) this.kill();
  }

  /** Death in the air: engine fire, controls go slack, physics carries it down. */
  kill(): void {
    if (!this.alive) return;
    this.alive = false;
    const c = this.model.controls;
    c.pitch = 0; c.roll = 0.3; c.yaw = 0;
    c.throttle = 0; c.afterburner = false; c.brake = false;
    this.effects.explosion(this.model.position.clone());
  }

  respawn(x: number, altitude: number, z: number, speed: number, heading: number): void {
    this.alive = true;
    this.hp = this.maxHp;
    this.lastHitBy = -1;
    this.gun.reload();
    this.rearm();
    this.model.spawn(x, altitude, z, speed, heading);
    this.mesh.visible = true;
  }

  /** Damage smoke / death fire trails. Call every frame. */
  updateEffects(dt: number): void {
    this.smokeTimer -= dt;
    const wounded = this.hp <= this.maxHp * 0.5;
    if ((wounded || !this.alive) && this.smokeTimer <= 0) {
      this.smokeTimer = this.alive ? 0.09 : 0.05;
      const pos = this.model.position.clone();
      if (!this.alive) {
        this.effects.spawn(pos, { size: 3, growth: 6, life: 1.2, color: 0xff7020, opacity: 0.75 });
      }
      this.effects.spawn(pos, { size: this.alive ? 2.2 : 4, growth: 5, life: 1.8, color: 0x1c1c1c, opacity: 0.55 });
    }
  }

  dispose(): void {
    this.mesh.removeFromParent();
    this.mesh.traverse(obj => {
      const m = obj as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach(x => x.dispose());
      else mat?.dispose();
    });
  }
}
