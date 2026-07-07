/**
 * Gun and projectile simulation, shared by both eras.
 *
 * Every round is a real projectile: muzzle velocity + aircraft velocity,
 * gravity drop, finite lifetime, segment-vs-sphere hit tests against
 * airframes. Tracers render as additive line segments.
 */
import * as THREE from 'three';

export interface GunSpec {
  name: string;
  /** Rounds per second (all barrels combined). */
  rateHz: number;
  muzzleVelMs: number;
  dispersionRad: number;
  magazine: number;
  damage: number;
  /** AI opens fire inside this range. */
  effectiveRangeM: number;
  tracerColor: number;
  /** Lateral muzzle offsets, m (twin cowl guns vs single cannon). */
  muzzleOffsets: number[];
}

export const WWI_TWIN_MG: GunSpec = {
  name: 'Twin .303',
  rateHz: 16,
  muzzleVelMs: 745,
  dispersionRad: 0.010,
  magazine: 500,
  damage: 1,
  effectiveRangeM: 280,
  tracerColor: 0xffc873,
  muzzleOffsets: [-0.35, 0.35]
};

export const M61_VULCAN: GunSpec = {
  name: 'M61A1',
  rateHz: 100,
  muzzleVelMs: 1035,
  dispersionRad: 0.004,
  magazine: 511,
  damage: 1,
  effectiveRangeM: 1100,
  tracerColor: 0xff8844,
  muzzleOffsets: [0]
};

export interface HitTarget {
  id: number;
  position: THREE.Vector3;
  radiusM: number;
  onHit: (damage: number, shooterId: number) => void;
}

interface Round {
  active: boolean;
  owner: number;
  damage: number;
  life: number;
  color: THREE.Color;
  pos: THREE.Vector3;
  prev: THREE.Vector3;
  vel: THREE.Vector3;
}

const MAX_ROUNDS = 512;
const G = 9.80665;
const TRACER_LEN = 0.014; // seconds of travel drawn behind the round

export class ProjectileSystem {
  private rounds: Round[] = [];
  private line: THREE.LineSegments;
  private positions: Float32Array;
  private colors: Float32Array;

  constructor(scene: THREE.Scene) {
    for (let i = 0; i < MAX_ROUNDS; i++) {
      this.rounds.push({
        active: false, owner: -1, damage: 0, life: 0,
        color: new THREE.Color(),
        pos: new THREE.Vector3(), prev: new THREE.Vector3(), vel: new THREE.Vector3()
      });
    }
    this.positions = new Float32Array(MAX_ROUNDS * 6);
    this.colors = new Float32Array(MAX_ROUNDS * 6);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.line = new THREE.LineSegments(
      geo,
      new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false })
    );
    this.line.frustumCulled = false;
    scene.add(this.line);
  }

  spawn(owner: number, spec: GunSpec, muzzleWorld: THREE.Vector3, aimDir: THREE.Vector3, platformVel: THREE.Vector3): void {
    const r = this.rounds.find(x => !x.active);
    if (!r) return;
    r.active = true;
    r.owner = owner;
    r.damage = spec.damage;
    r.life = 3;
    r.color.setHex(spec.tracerColor);
    r.pos.copy(muzzleWorld);
    r.prev.copy(muzzleWorld);
    // dispersion: random cone around the aim direction
    const d = aimDir.clone()
      .add(new THREE.Vector3(
        (Math.random() - 0.5) * 2 * spec.dispersionRad,
        (Math.random() - 0.5) * 2 * spec.dispersionRad,
        (Math.random() - 0.5) * 2 * spec.dispersionRad
      ))
      .normalize();
    r.vel.copy(platformVel).addScaledVector(d, spec.muzzleVelMs);
  }

  update(dt: number, targets: HitTarget[], terrainHeight: (x: number, z: number) => number): void {
    const seg = new THREE.Vector3();
    const toT = new THREE.Vector3();
    for (const r of this.rounds) {
      if (!r.active) continue;
      r.life -= dt;
      r.prev.copy(r.pos);
      r.vel.y -= G * dt;
      r.pos.addScaledVector(r.vel, dt);

      if (r.life <= 0 || r.pos.y < terrainHeight(r.pos.x, r.pos.z)) {
        r.active = false;
        continue;
      }

      // Segment-vs-sphere hit test
      for (const t of targets) {
        if (t.id === r.owner) continue;
        seg.subVectors(r.pos, r.prev);
        toT.subVectors(t.position, r.prev);
        const segLen2 = Math.max(seg.lengthSq(), 1e-6);
        const s = Math.max(0, Math.min(1, toT.dot(seg) / segLen2));
        const dist2 = toT.addScaledVector(seg, -s).lengthSq();
        if (dist2 < t.radiusM * t.radiusM) {
          t.onHit(r.damage, r.owner);
          r.active = false;
          break;
        }
      }
    }
    this.rebuildGeometry();
  }

  private rebuildGeometry(): void {
    let n = 0;
    for (const r of this.rounds) {
      if (!r.active) continue;
      const i = n * 6;
      this.positions[i] = r.pos.x; this.positions[i + 1] = r.pos.y; this.positions[i + 2] = r.pos.z;
      this.positions[i + 3] = r.pos.x - r.vel.x * TRACER_LEN;
      this.positions[i + 4] = r.pos.y - r.vel.y * TRACER_LEN;
      this.positions[i + 5] = r.pos.z - r.vel.z * TRACER_LEN;
      this.colors[i] = r.color.r; this.colors[i + 1] = r.color.g; this.colors[i + 2] = r.color.b;
      this.colors[i + 3] = r.color.r * 0.25; this.colors[i + 4] = r.color.g * 0.25; this.colors[i + 5] = r.color.b * 0.25;
      n++;
    }
    const geo = this.line.geometry;
    geo.setDrawRange(0, n * 2);
    (geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (geo.attributes.color as THREE.BufferAttribute).needsUpdate = true;
  }

  dispose(): void {
    this.line.geometry.dispose();
    (this.line.material as THREE.Material).dispose();
    this.line.removeFromParent();
  }
}

/** A gun mounted on an airframe: handles rate of fire, ammo, muzzle placement. */
export class Gun {
  ammo: number;
  private cooldown = 0;
  private muzzleIndex = 0;

  constructor(readonly spec: GunSpec) {
    this.ammo = spec.magazine;
  }

  reload(): void {
    this.ammo = this.spec.magazine;
    this.cooldown = 0;
  }

  /** Call every frame; spawns rounds while trigger held. */
  update(
    dt: number, firing: boolean, ownerId: number,
    position: THREE.Vector3, quaternion: THREE.Quaternion, velocity: THREE.Vector3,
    projectiles: ProjectileSystem
  ): void {
    this.cooldown -= dt;
    if (!firing || this.ammo <= 0) return;
    const interval = 1 / this.spec.rateHz;
    while (this.cooldown <= 0 && this.ammo > 0) {
      const off = this.spec.muzzleOffsets[this.muzzleIndex % this.spec.muzzleOffsets.length];
      this.muzzleIndex++;
      const muzzle = new THREE.Vector3(off, 0, -2.5).applyQuaternion(quaternion).add(position);
      const aim = new THREE.Vector3(0, 0, -1).applyQuaternion(quaternion);
      projectiles.spawn(ownerId, this.spec, muzzle, aim, velocity);
      this.ammo--;
      this.cooldown += interval;
    }
    if (this.cooldown < -interval) this.cooldown = 0;
  }
}
