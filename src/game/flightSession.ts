/**
 * A skirmish session: you, an era-appropriate bandit flown by the AI on the
 * same physics, guns with real ballistics, damage, kills, and respawns.
 */
import * as THREE from 'three';
import type { AircraftSpec } from '../engine/flight/aircraft';
import { InputManager } from '../engine/input';
import { buildEnvironment, type EraEnvironment } from '../world/terrain';
import { EffectsPool } from '../world/effects';
import { createHud, type CockpitHud, type CombatInfo } from '../ui/hud';
import { ProjectileSystem, type HitTarget } from '../engine/combat/projectiles';
import { AiPilot } from '../engine/ai/pilot';
import { Combatant, gunFor } from './combatant';
import { FOKKER_DR1, SOPWITH_CAMEL } from '../era/wwi/aircraft';
import { MIG29 } from '../era/modern/aircraft';

const PHYSICS_DT = 1 / 120;
const SPAWN_ALT = { wwi: 600, modern: 1500 };

function banditSpecFor(player: AircraftSpec): AircraftSpec {
  if (player.era === 'modern') return MIG29;
  return player.id === 'fokker-dr1' ? SOPWITH_CAMEL : FOKKER_DR1;
}

export class FlightSession {
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private env: EraEnvironment;
  private effects: EffectsPool;
  private projectiles: ProjectileSystem;

  private player: Combatant;
  private bandit: Combatant;
  private banditAi: AiPilot;
  private banditRespawnTimer = 0;

  private hud: CockpitHud;
  private input = new InputManager();

  private accumulator = 0;
  private cameraMode: 'chase' | 'cockpit' = 'cockpit';
  private chasePos = new THREE.Vector3();
  private playerDown: 'flying' | 'crashed' | 'shot-down' = 'flying';
  private kills = 0;

  onExit: (() => void) | null = null;

  constructor(
    private renderer: THREE.WebGLRenderer,
    uiRoot: HTMLElement,
    spec: AircraftSpec
  ) {
    this.env = buildEnvironment(spec.era);
    this.scene.add(this.env.group);
    this.scene.background = this.env.skyColor;
    this.scene.fog = new THREE.FogExp2(this.env.fogColor, this.env.fogDensity);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.5, 40000);
    this.effects = new EffectsPool(this.scene);
    this.projectiles = new ProjectileSystem(this.scene);

    this.player = new Combatant(0, this.scene, spec, this.effects);
    const banditSpec = banditSpecFor(spec);
    this.bandit = new Combatant(1, this.scene, banditSpec, this.effects);
    this.banditAi = new AiPilot(gunFor(banditSpec), 0.65);

    this.respawnAll();

    this.hud = createHud(uiRoot, this.player.model, this.input);
    this.input.attach();
    this.input.throttle = spec.propulsion.kind === 'jet' ? 0.85 : 0.8;
  }

  private respawnAll(): void {
    const era = this.player.spec.era;
    const alt = SPAWN_ALT[era];
    const ground = this.env.terrainHeight(0, 0);
    this.player.respawn(0, ground + alt, 0, this.player.spec.cruiseSpeedMs * 1.1, 0);
    this.spawnBandit();
    this.playerDown = 'flying';
  }

  private spawnBandit(): void {
    const era = this.player.spec.era;
    const dist = era === 'modern' ? 4000 : 1200;
    const p = this.player.model.position;
    const bearing = Math.random() * Math.PI * 2;
    const x = p.x + Math.sin(bearing) * dist;
    const z = p.z - Math.cos(bearing) * dist;
    const alt = Math.max(p.y + (Math.random() - 0.3) * 400, this.env.terrainHeight(x, z) + 400);
    this.bandit.respawn(x, alt, z, this.bandit.spec.cruiseSpeedMs, Math.random() * Math.PI * 2);
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.hud.resize();
  }

  /** Returns false when the session wants to exit to menu. */
  update(dt: number): boolean {
    if (this.input.menuRequested) {
      this.input.menuRequested = false;
      return false;
    }
    if (this.input.cameraToggleRequested) {
      this.input.cameraToggleRequested = false;
      this.cameraMode = this.cameraMode === 'chase' ? 'cockpit' : 'chase';
    }
    if (this.input.respawnRequested) {
      this.input.respawnRequested = false;
      this.hud.clearCrash();
      this.respawnAll();
    }

    const flying = this.playerDown === 'flying';
    if (flying) this.input.update(this.player.model.controls, dt);

    // --- Fixed-step physics for both airframes + weapons ---
    this.accumulator += Math.min(dt, 0.1);
    while (this.accumulator >= PHYSICS_DT) {
      this.stepPhysics(PHYSICS_DT);
      this.accumulator -= PHYSICS_DT;
    }

    // Bandit lifecycle
    if (!this.bandit.alive) {
      this.banditRespawnTimer -= dt;
      if (this.banditRespawnTimer <= 0 && this.bandit.mesh.visible === false) {
        this.spawnBandit();
      }
    }

    this.player.updateEffects(dt);
    this.bandit.updateEffects(dt);
    this.effects.update(dt);

    // --- Visual sync ---
    for (const c of [this.player, this.bandit]) {
      c.mesh.position.copy(c.model.position);
      c.mesh.quaternion.copy(c.model.quaternion);
      const ab = c.mesh.getObjectByName('abFlame');
      if (ab) ab.visible = c.model.controls.afterburner && c.alive;
      const prop = c.mesh.getObjectByName('propDisc');
      const blipped = c.spec.blipSwitch && c.model.controls.brake;
      if (prop) prop.rotation.z += dt * 40 * (blipped ? 0.05 : c.model.controls.throttle);
    }

    this.updateCamera(dt);

    const p = this.player.model.position;
    const agl = p.y - this.env.terrainHeight(p.x, p.z);
    this.hud.update(agl, this.cameraMode === 'cockpit', this.combatInfo());
    this.renderer.render(this.scene, this.camera);
    return true;
  }

  private stepPhysics(dt: number): void {
    // AI thinks, then both airframes fly the same equations.
    if (this.bandit.alive) {
      const bp = this.bandit.model.position;
      const bAgl = bp.y - this.env.terrainHeight(bp.x, bp.z);
      this.banditAi.update(dt, this.bandit.model, this.player.alive ? this.player.model : null, bAgl);
    }
    this.player.model.step(dt);
    this.bandit.model.step(dt);

    // Guns
    const pm = this.player.model;
    this.player.gun.update(
      dt, this.playerDown === 'flying' && this.input.firing, this.player.id,
      pm.position, pm.quaternion, pm.velocity, this.projectiles
    );
    const bm = this.bandit.model;
    this.bandit.gun.update(
      dt, this.bandit.alive && this.banditAi.wantsFire, this.bandit.id,
      bm.position, bm.quaternion, bm.velocity, this.projectiles
    );

    // Projectiles vs airframes
    const targets: HitTarget[] = [];
    if (this.player.alive) {
      targets.push({
        id: this.player.id, position: pm.position, radiusM: this.player.radiusM,
        onHit: (d, by) => this.onPlayerHit(d, by)
      });
    }
    if (this.bandit.alive) {
      targets.push({
        id: this.bandit.id, position: bm.position, radiusM: this.bandit.radiusM,
        onHit: (d, by) => this.onBanditHit(d, by)
      });
    }
    this.projectiles.update(dt, targets, this.env.terrainHeight);

    // Terrain
    this.groundCheck(this.player);
    this.groundCheck(this.bandit);
  }

  private onPlayerHit(damage: number, by: number): void {
    this.player.hit(damage, by);
    if (!this.player.alive && this.playerDown === 'flying') {
      this.playerDown = 'shot-down';
      this.hud.showCrash('✝ SHOT DOWN — press R');
    }
  }

  private onBanditHit(damage: number, by: number): void {
    const wasAlive = this.bandit.alive;
    this.bandit.hit(damage, by);
    if (wasAlive && !this.bandit.alive) {
      this.kills++;
      this.banditRespawnTimer = 7;
    }
  }

  private groundCheck(c: Combatant): void {
    const pos = c.model.position;
    const ground = this.env.terrainHeight(pos.x, pos.z);
    if (pos.y >= ground + 1.5) return;

    if (c === this.player) {
      if (this.playerDown === 'flying') {
        this.playerDown = 'crashed';
        this.player.kill();
        this.hud.showCrash('✝ CRASHED — press R to fly again');
      }
      // pin the wreck
      pos.y = ground + 1.5;
      c.model.velocity.setScalar(0);
    } else {
      if (c.alive) {
        c.kill();
        this.kills++; // a bandit flown into the dirt is still your kill
        this.banditRespawnTimer = 7;
      }
      this.effects.explosion(pos.clone());
      c.mesh.visible = false;
      pos.y = ground - 100; // park the model out of sight until respawn
      c.model.velocity.setScalar(0);
    }
  }

  private combatInfo(): CombatInfo {
    const info: CombatInfo = {
      ammo: this.player.gun.ammo,
      kills: this.kills,
      hpFrac: Math.max(0, this.player.hp / this.player.maxHp)
    };
    if (this.bandit.alive) {
      const v = this.bandit.model.position.clone().project(this.camera);
      const onScreen = v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1;
      info.target = {
        onScreen,
        sx: (v.x + 1) / 2 * window.innerWidth,
        sy: (1 - v.y) / 2 * window.innerHeight,
        // direction for the off-screen cue
        dirX: v.x, dirY: v.y, behind: v.z >= 1,
        rangeM: this.bandit.model.position.distanceTo(this.player.model.position)
      };
    }
    return info;
  }

  private updateCamera(dt: number): void {
    const model = this.player.model;
    const q = model.quaternion;
    if (this.cameraMode === 'cockpit') {
      const eye = new THREE.Vector3(0, 0.65, -0.8).applyQuaternion(q).add(model.position);
      this.camera.position.copy(eye);
      this.camera.quaternion.copy(q);
      this.player.mesh.visible = false;
    } else {
      this.player.mesh.visible = true;
      const dist = model.spec.era === 'modern' ? 26 : 14;
      const target = new THREE.Vector3(0, dist * 0.22, dist).applyQuaternion(q).add(model.position);
      const k = 1 - Math.exp(-dt * 5);
      this.chasePos.lerp(target, this.chasePos.lengthSq() === 0 ? 1 : k);
      this.camera.position.copy(this.chasePos);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q).lerp(new THREE.Vector3(0, 1, 0), 0.6).normalize();
      this.camera.up.copy(up);
      this.camera.lookAt(model.position);
    }
  }

  dispose(): void {
    this.input.detach();
    this.hud.dispose();
    this.projectiles.dispose();
    this.effects.dispose();
    this.player.dispose();
    this.bandit.dispose();
    this.scene.traverse(obj => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const m = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(m)) m.forEach(x => x.dispose());
      else m?.dispose();
    });
  }
}
