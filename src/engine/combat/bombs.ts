/**
 * Unguided bombs, both centuries: Mk-82s off a jet, Cooper bombs dropped
 * over the side of a scout. Pure ballistics — inherit the aircraft's
 * velocity, fall under gravity with a little drag, detonate on contact
 * with a blast radius that cares how close you put it.
 */
import * as THREE from 'three';
import type { FxSink } from './missiles';
import type { HitTarget } from './projectiles';

const G0 = 9.80665;
const DRAG = 0.02;              // per-second velocity bleed
const BLAST_FULL_M = 20;        // full damage inside this
const BLAST_MAX_M = 48;         // zero damage beyond this
const BLAST_DAMAGE = 6;

interface Bomb {
  active: boolean;
  ownerId: number;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  mesh: THREE.Mesh;
}

/** March a ballistic trajectory to the ground; false if it never lands. */
export function predictImpact(
  position: THREE.Vector3,
  velocity: THREE.Vector3,
  terrainHeight: (x: number, z: number) => number,
  out: THREE.Vector3
): boolean {
  const p = position.clone();
  const v = velocity.clone();
  const dt = 0.1;
  for (let t = 0; t < 25; t += dt) {
    v.y -= G0 * dt;
    v.multiplyScalar(1 - DRAG * dt);
    p.addScaledVector(v, dt);
    if (p.y <= terrainHeight(p.x, p.z)) {
      out.copy(p);
      out.y = terrainHeight(p.x, p.z);
      return true;
    }
  }
  return false;
}

export class BombSystem {
  private bombs: Bomb[] = [];

  constructor(private scene: THREE.Scene, private fx: FxSink) {}

  drop(ownerId: number, position: THREE.Vector3, velocity: THREE.Vector3): void {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.1, 1.6, 6),
      new THREE.MeshLambertMaterial({ color: 0x3a4038 })
    );
    mesh.geometry.rotateX(Math.PI / 2);
    this.scene.add(mesh);
    this.bombs.push({
      active: true,
      ownerId,
      pos: position.clone(),
      vel: velocity.clone(),
      mesh
    });
  }

  update(
    dt: number,
    terrainHeight: (x: number, z: number) => number,
    targets: HitTarget[],
    onImpact?: (pos: THREE.Vector3) => void
  ): void {
    for (const b of this.bombs) {
      if (!b.active) continue;
      b.vel.y -= G0 * dt;
      b.vel.multiplyScalar(1 - DRAG * dt);
      b.pos.addScaledVector(b.vel, dt);
      b.mesh.position.copy(b.pos);
      if (b.vel.lengthSq() > 1) {
        b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), b.vel.clone().normalize());
      }

      const ground = terrainHeight(b.pos.x, b.pos.z);
      if (b.pos.y > ground) continue;

      // Detonate
      b.active = false;
      b.pos.y = ground;
      b.mesh.removeFromParent();
      b.mesh.geometry.dispose();
      (b.mesh.material as THREE.Material).dispose();
      this.fx.explosion(b.pos.clone());
      this.fx.spawn(b.pos.clone(), { size: 10, growth: 26, life: 1.2, color: 0x6b5a40, opacity: 0.8 });
      onImpact?.(b.pos);

      for (const t of targets) {
        const d = t.position.distanceTo(b.pos) - t.radiusM;
        if (d > BLAST_MAX_M) continue;
        const falloff = d <= BLAST_FULL_M ? 1 : 1 - (d - BLAST_FULL_M) / (BLAST_MAX_M - BLAST_FULL_M);
        t.onHit(Math.max(1, Math.round(BLAST_DAMAGE * falloff)), b.ownerId);
      }
    }
    this.bombs = this.bombs.filter(b => b.active);
  }

  dispose(): void {
    for (const b of this.bombs) {
      b.mesh.removeFromParent();
      b.mesh.geometry.dispose();
      (b.mesh.material as THREE.Material).dispose();
    }
    this.bombs = [];
  }
}
