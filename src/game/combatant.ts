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
import { AIM9, R73, AIM120, R77, AIM54, type MissileSpec } from '../engine/combat/missiles';
import type { EffectsPool } from '../world/effects';

export function gunFor(spec: AircraftSpec): GunSpec {
  return spec.era === 'wwi' ? WWI_TWIN_MG : M61_VULCAN;
}

export function hitPointsFor(spec: AircraftSpec): number {
  if (spec.id === 'gotha') return 24;      // it takes a squadron to bring one down
  if (spec.id === 'backfire') return 16;
  if (spec.id === 'su27') return 9;        // big airframe, soaks a little more
  return spec.era === 'wwi' ? 14 : 7;
}

/** Era-accurate stations, best we can: what each airframe actually carries. */
export interface Loadout {
  ir: MissileSpec | null;
  irCount: number;
  bvr: MissileSpec | null;
  bvrCount: number;
  bombs: number;
  decoys: number;
}

export const LOADOUTS: Record<string, Loadout> = {
  // 2× wingtip Sidewinders + 2 more on 3/7, 2 AMRAAM, the do-it-all jet.
  f16: { ir: AIM9, irCount: 4, bvr: AIM120, bvrCount: 2, bombs: 4, decoys: 30 },
  // The bomb truck: fewer heaters, more AMRAAM, six Mk-82s.
  fa18: { ir: AIM9, irCount: 2, bvr: AIM120, bvrCount: 4, bombs: 6, decoys: 30 },
  // Internal bays: 2 '9s and SIX '120s. Two small-diameter bombs.
  f22: { ir: AIM9, irCount: 2, bvr: AIM120, bvrCount: 6, bombs: 2, decoys: 24 },
  // The fleet-defense load: four Phoenix on the tunnel, four Sidewinders.
  f14: { ir: AIM9, irCount: 4, bvr: AIM54, bvrCount: 4, bombs: 4, decoys: 30 },
  mig29: { ir: R73, irCount: 4, bvr: R77, bvrCount: 2, bombs: 0, decoys: 30 },
  su27: { ir: R73, irCount: 6, bvr: R77, bvrCount: 4, bombs: 0, decoys: 40 },
  backfire: { ir: null, irCount: 0, bvr: null, bvrCount: 0, bombs: 0, decoys: 30 }
};

function loadoutFor(spec: AircraftSpec): Loadout {
  const l = LOADOUTS[spec.id];
  if (l) return l;
  // WWI: guns and a rack of Cooper bombs.
  return { ir: null, irCount: 0, bvr: null, bvrCount: 0, bombs: 4, decoys: 0 };
}

export class Combatant {
  readonly model: FlightBody;
  readonly mesh: THREE.Group;
  readonly gun: Gun;
  maxHp: number;
  hp: number;
  alive = true;
  lastHitBy = -1;

  /** IR missile loadout (modern era only). */
  readonly missileSpec: MissileSpec | null;
  /** Radar missile loadout (modern era only). */
  readonly bvrSpec: MissileSpec | null;
  missiles = 0;
  bvrMissiles = 0;
  flares = 0;
  chaff = 0;
  /** Loadout capacities — raised by dynasty legacy unlocks for the player. */
  missileCap = 4;
  bvrCap = 2;
  decoyCap = 30;
  /** Unguided bombs — both eras carry a rack. */
  bombs = 0;
  bombCap = 4;

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
    const loadout = loadoutFor(spec);
    this.missileSpec = loadout.ir;
    this.bvrSpec = loadout.bvr;
    this.missileCap = loadout.irCount;
    this.bvrCap = loadout.bvrCount;
    this.bombCap = loadout.bombs;
    this.decoyCap = loadout.decoys;
    this.rearm();
  }

  private rearm(): void {
    this.bombs = this.bombCap;
    if (this.missileSpec) {
      this.missiles = this.missileCap;
      this.bvrMissiles = this.bvrCap;
      this.flares = this.decoyCap;
      this.chaff = this.decoyCap;
    }
  }

  /** Apply dynasty legacy perks (player only) on top of the airframe's
   *  own stations. Re-arms with the new caps. Call once. */
  applyPerks(p: { hpMult: number; missileBonus: number; bvrBonus: number; decoyBonus: number }): void {
    this.maxHp = Math.round(hitPointsFor(this.spec) * p.hpMult);
    this.hp = this.maxHp;
    if (this.missileSpec) this.missileCap += p.missileBonus;
    if (this.bvrSpec) this.bvrCap += p.bvrBonus;
    if (this.decoyCap > 0) this.decoyCap += p.decoyBonus;
    this.rearm();
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
