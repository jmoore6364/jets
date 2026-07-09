/**
 * IR missile + flare simulation.
 *
 * Every missile is a flying entity: boost-then-coast motor, G-limited
 * pursuit guidance with lead, a seeker cone that can lose the target,
 * flare decoying with per-missile resistance, and a proximity fuse.
 */
import * as THREE from 'three';

export interface MissileSpec {
  name: string;
  accelMs2: number;
  burnS: number;
  maxSpeedMs: number;
  turnG: number;
  /** Seeker half-angle off the missile's nose. */
  seekerConeRad: number;
  lockRangeM: number;
  proxFuseM: number;
  damage: number;
  /** Chance (0..1) to IGNORE any given flare. */
  flareResistance: number;
}

export const AIM9: MissileSpec = {
  name: 'AIM-9', accelMs2: 230, burnS: 5.0, maxSpeedMs: 900, turnG: 35,
  seekerConeRad: 0.70, lockRangeM: 6000, proxFuseM: 9, damage: 5, flareResistance: 0.74
};

export const R73: MissileSpec = {
  name: 'R-73', accelMs2: 240, burnS: 4.6, maxSpeedMs: 880, turnG: 40,
  seekerConeRad: 0.85, lockRangeM: 5500, proxFuseM: 9, damage: 5, flareResistance: 0.50
};

/** Minimal effects interface so the system runs headless in tests. */
export interface FxSink {
  spawn(pos: THREE.Vector3, opts: { size: number; growth?: number; life?: number; color?: number; opacity?: number }): void;
  explosion(pos: THREE.Vector3): void;
}

export interface MissileTargetView {
  id: number;
  alive: boolean;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

interface Flare {
  id: number;
  ownerId: number;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
  sprite: THREE.Sprite | null;
}

interface Missile {
  active: boolean;
  spec: MissileSpec;
  ownerId: number;
  targetId: number;
  /** When decoyed, missile chases this falling point instead of the target. */
  decoy: Flare | null;
  guided: boolean;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  age: number;
  smokeTimer: number;
  consideredFlares: Set<number>;
  mesh: THREE.Object3D;
}

const G0 = 9.80665;
const MISSILE_LIFE_S = 18;
const FLARE_LIFE_S = 3.2;

export class MissileSystem {
  private missiles: Missile[] = [];
  private flares: Flare[] = [];
  private flareId = 0;

  constructor(
    private scene: THREE.Scene,
    private fx: FxSink,
    private rng: () => number = Math.random
  ) {}

  get activeMissiles(): number {
    return this.missiles.filter(m => m.active).length;
  }

  launch(spec: MissileSpec, ownerId: number, position: THREE.Vector3, direction: THREE.Vector3, platformVel: THREE.Vector3, targetId: number): void {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 2.4, 6),
      new THREE.MeshBasicMaterial({ color: 0xf2f2f2 })
    );
    mesh.geometry.rotateX(Math.PI / 2); // align length with +Z, we orient by velocity
    this.scene.add(mesh);
    this.missiles.push({
      active: true, spec, ownerId, targetId, decoy: null, guided: true,
      pos: position.clone(),
      vel: platformVel.clone().addScaledVector(direction.clone().normalize(), 30),
      age: 0, smokeTimer: 0,
      consideredFlares: new Set(),
      mesh
    });
  }

  dropFlare(ownerId: number, position: THREE.Vector3, velocity: THREE.Vector3): void {
    let sprite: THREE.Sprite | null = null;
    sprite = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xffd27a, transparent: true, opacity: 0.95 }));
    sprite.scale.setScalar(3.2);
    this.scene.add(sprite);
    this.flares.push({
      id: this.flareId++,
      ownerId,
      pos: position.clone(),
      vel: velocity.clone().multiplyScalar(0.55).add(new THREE.Vector3((this.rng() - 0.5) * 20, -22, (this.rng() - 0.5) * 20)),
      life: FLARE_LIFE_S,
      sprite
    });
  }

  /** True when any live missile is homing on the given combatant. */
  inboundFor(id: number): Missile | null {
    for (const m of this.missiles) {
      if (m.active && m.guided && !m.decoy && m.targetId === id) return m;
    }
    return null;
  }

  update(
    dt: number,
    targets: MissileTargetView[],
    terrainHeight: (x: number, z: number) => number,
    onHit: (targetId: number, damage: number, ownerId: number) => void
  ): void {
    // Flares fall and fade
    for (const f of this.flares) {
      f.life -= dt;
      f.vel.y -= G0 * 0.6 * dt; // drogue-slowed fall
      f.vel.multiplyScalar(1 - 0.8 * dt);
      f.pos.addScaledVector(f.vel, dt);
      if (f.sprite) {
        f.sprite.position.copy(f.pos);
        (f.sprite.material as THREE.SpriteMaterial).opacity = Math.max(0, f.life / FLARE_LIFE_S);
        if (f.life <= 0) { f.sprite.removeFromParent(); (f.sprite.material as THREE.Material).dispose(); }
      }
    }
    this.flares = this.flares.filter(f => f.life > 0);

    for (const m of this.missiles) {
      if (!m.active) continue;
      m.age += dt;
      const speed = m.vel.length();

      // Motor
      if (m.age < m.spec.burnS && speed < m.spec.maxSpeedMs) {
        m.vel.addScaledVector(m.vel.clone().normalize(), m.spec.accelMs2 * dt);
      } else {
        m.vel.multiplyScalar(1 - 0.05 * dt); // coast drag
      }

      // --- Guidance ---
      const target = targets.find(t => t.id === m.targetId);
      let aim: THREE.Vector3 | null = null;

      if (m.decoy) {
        aim = m.decoy.life > 0 ? m.decoy.pos : null;
        if (!aim) m.guided = false;
      } else if (m.guided && target?.alive) {
        const toTgt = target.position.clone().sub(m.pos);
        const dist = toTgt.length();
        const vhat = m.vel.clone().normalize();
        const angleOff = Math.acos(THREE.MathUtils.clamp(toTgt.clone().normalize().dot(vhat), -1, 1));
        if (angleOff > m.spec.seekerConeRad) {
          m.guided = false; // target escaped the seeker
        } else {
          // Flare consideration: fresh flares from the target inside the cone
          for (const f of this.flares) {
            if (f.ownerId !== m.targetId || m.consideredFlares.has(f.id)) continue;
            if (f.life < FLARE_LIFE_S - 1.2) continue; // only hot, fresh flares seduce
            const toFlare = f.pos.clone().sub(m.pos);
            if (toFlare.length() > 2500) continue;
            const flareAngle = Math.acos(THREE.MathUtils.clamp(toFlare.normalize().dot(vhat), -1, 1));
            if (flareAngle > m.spec.seekerConeRad) continue;
            m.consideredFlares.add(f.id);
            if (this.rng() > m.spec.flareResistance) {
              m.decoy = f;
              break;
            }
          }
          if (!m.decoy) {
            // Lead pursuit: aim ahead of the target
            const tof = dist / Math.max(speed, 150);
            aim = target.position.clone().addScaledVector(target.velocity, tof * 0.85);
          } else {
            aim = m.decoy.pos;
          }
        }
      } else {
        m.guided = false;
      }

      if (aim) {
        const vhat = m.vel.clone().normalize();
        const want = aim.clone().sub(m.pos).normalize();
        const angle = Math.acos(THREE.MathUtils.clamp(vhat.dot(want), -1, 1));
        const maxTurn = (m.spec.turnG * G0 / Math.max(speed, 100)) * dt;
        if (angle > 1e-4) {
          const axis = new THREE.Vector3().crossVectors(vhat, want).normalize();
          if (axis.lengthSq() > 0.5) {
            const q = new THREE.Quaternion().setFromAxisAngle(axis, Math.min(angle, maxTurn));
            m.vel.applyQuaternion(q);
          }
        }
      }

      m.pos.addScaledVector(m.vel, dt);
      m.mesh.position.copy(m.pos);
      const dir = m.vel.clone().normalize();
      m.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);

      // Smoke while burning
      m.smokeTimer -= dt;
      if (m.age < m.spec.burnS + 1 && m.smokeTimer <= 0) {
        m.smokeTimer = 0.035;
        this.fx.spawn(m.pos.clone(), { size: 1.3, growth: 2.6, life: 1.5, color: 0xd8d8d8, opacity: 0.45 });
      }

      // --- Fusing ---
      const fusePoint = m.decoy ? m.decoy.pos : target?.alive ? target.position : null;
      if (fusePoint && m.pos.distanceTo(fusePoint) < m.spec.proxFuseM) {
        this.detonate(m);
        if (!m.decoy && target?.alive && m.pos.distanceTo(target.position) < m.spec.proxFuseM * 1.6) {
          onHit(target.id, m.spec.damage, m.ownerId);
        }
        continue;
      }

      if (m.age > MISSILE_LIFE_S || m.pos.y < terrainHeight(m.pos.x, m.pos.z)) {
        this.detonate(m);
      }
    }
  }

  private detonate(m: Missile): void {
    m.active = false;
    this.fx.explosion(m.pos.clone());
    m.mesh.removeFromParent();
    const mm = m.mesh as THREE.Mesh;
    mm.geometry?.dispose();
    (mm.material as THREE.Material)?.dispose();
  }

  dispose(): void {
    for (const m of this.missiles) if (m.active) this.detonate(m);
    for (const f of this.flares) {
      if (f.sprite) { f.sprite.removeFromParent(); (f.sprite.material as THREE.Material).dispose(); }
    }
    this.missiles = [];
    this.flares = [];
  }
}
