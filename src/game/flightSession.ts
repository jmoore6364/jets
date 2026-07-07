/**
 * A flight session: skirmish (endless respawning bandit) or a career
 * mission (patrol / balloon bust / escort) with objective tracking.
 * Every aircraft — player, bandits, the escorted two-seater — flies the
 * same physics through the same control inputs.
 */
import * as THREE from 'three';
import type { AircraftSpec } from '../engine/flight/aircraft';
import { InputManager } from '../engine/input';
import { buildEnvironment, type EraEnvironment } from '../world/terrain';
import { EffectsPool } from '../world/effects';
import { createHud, type CockpitHud, type CombatInfo } from '../ui/hud';
import { ProjectileSystem, type HitTarget } from '../engine/combat/projectiles';
import { MissileSystem, type MissileTargetView } from '../engine/combat/missiles';
import { AiPilot, RoutePilot } from '../engine/ai/pilot';
import { Combatant, gunFor } from './combatant';
import { FOKKER_DR1, SOPWITH_CAMEL } from '../era/wwi/aircraft';
import { MIG29 } from '../era/modern/aircraft';
import { TouchControls, isTouchDevice } from '../ui/touch';
import type { Mission } from './mission';

const PHYSICS_DT = 1 / 120;
const SPAWN_ALT = { wwi: 600, modern: 1500 };

interface Pilot {
  wantsFire: boolean;
  update(dt: number, me: Combatant['model'], target: Combatant['model'] | null, aglM: number): void;
}

export interface SessionResult {
  kills: number;
  survived: boolean;
  /** null = skirmish (no objective). */
  missionComplete: boolean | null;
}

function skirmishBanditFor(player: AircraftSpec): AircraftSpec {
  if (player.era === 'modern') return MIG29;
  return player.id === 'fokker-dr1' ? SOPWITH_CAMEL : FOKKER_DR1;
}

function wwiEnemyOf(player: AircraftSpec): AircraftSpec {
  return player.id === 'fokker-dr1' ? SOPWITH_CAMEL : FOKKER_DR1;
}

export class FlightSession {
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private env: EraEnvironment;
  private effects: EffectsPool;
  private projectiles: ProjectileSystem;

  private combatants: Combatant[] = [];
  private pilots = new Map<Combatant, Pilot>();
  private player: Combatant;
  private escortee: Combatant | null = null;
  private banditRespawnTimer = 0;
  private nextId = 0;

  /** Balloon objective (balloon missions). */
  private balloon: { mesh: THREE.Group; pos: THREE.Vector3; hp: number; alive: boolean } | null = null;

  private hud: CockpitHud;
  private input = new InputManager();
  private touch: TouchControls | null = null;

  private accumulator = 0;
  private cameraMode: 'chase' | 'cockpit' = 'cockpit';
  private chasePos = new THREE.Vector3();
  private playerDown: 'flying' | 'crashed' | 'shot-down' = 'flying';
  private kills = 0;

  // Modern weapons state
  private missileSystem: MissileSystem | null = null;
  private selectedWeapon: 'gun' | 'msl' = 'gun';
  private lockedTarget: Combatant | null = null;
  private launchCooldown = 0;
  private prevFiring = false;
  private flareCooldown = 0;
  private aiMissileCooldown = new Map<Combatant, number>();
  private aiFlareCooldown = new Map<Combatant, number>();
  private missionState: 'none' | 'running' | 'complete' | 'failed' = 'none';
  private completeAnnounced = false;

  onExit: (() => void) | null = null;

  constructor(
    private renderer: THREE.WebGLRenderer,
    uiRoot: HTMLElement,
    spec: AircraftSpec,
    private mission: Mission | null = null
  ) {
    this.env = buildEnvironment(spec.era);
    this.scene.add(this.env.group);
    this.scene.background = this.env.skyColor;
    this.scene.fog = new THREE.FogExp2(this.env.fogColor, this.env.fogDensity);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.5, 40000);
    this.effects = new EffectsPool(this.scene);
    this.projectiles = new ProjectileSystem(this.scene);
    if (spec.era === 'modern') this.missileSystem = new MissileSystem(this.scene, this.effects);

    this.player = this.addCombatant(spec, 0);
    const alt = this.env.terrainHeight(0, 0) + SPAWN_ALT[spec.era];
    this.player.respawn(0, alt, 0, spec.cruiseSpeedMs * 1.1, 0);

    if (mission) {
      this.missionState = 'running';
      this.setupMission(mission);
    } else {
      this.spawnSkirmishBandit();
    }

    this.hud = createHud(uiRoot, this.player.model, this.input);
    this.input.attach();
    this.input.throttle = spec.propulsion.kind === 'jet' ? 0.85 : 0.8;
    if (isTouchDevice()) {
      this.touch = new TouchControls(uiRoot, this.input);
      this.input.touch = this.touch;
    }
  }

  private addCombatant(spec: AircraftSpec, side: number): Combatant {
    const c = new Combatant(this.nextId++, this.scene, spec, this.effects, side);
    this.combatants.push(c);
    return c;
  }

  // ---------------- Mission setup ----------------

  private setupMission(m: Mission): void {
    const enemySpec = wwiEnemyOf(this.player.spec);
    const groundAtZone = this.env.terrainHeight(m.zone.x, m.zone.z);

    for (let i = 0; i < m.enemyCount; i++) {
      const e = this.addCombatant(enemySpec, 1);
      const ox = (Math.random() - 0.5) * 800, oz = (Math.random() - 0.5) * 800;
      e.respawn(m.zone.x + ox, groundAtZone + 500 + Math.random() * 300, m.zone.z + oz,
        enemySpec.cruiseSpeedMs, Math.random() * Math.PI * 2);
      this.pilots.set(e, new AiPilot(gunFor(enemySpec), 0.6 + Math.random() * 0.15));
    }

    if (m.type === 'balloon' && m.balloonAltM) {
      this.balloon = {
        mesh: this.buildBalloonMesh(),
        pos: new THREE.Vector3(m.zone.x, groundAtZone + m.balloonAltM, m.zone.z),
        hp: 8,
        alive: true
      };
      this.balloon.mesh.position.copy(this.balloon.pos);
      this.scene.add(this.balloon.mesh);
    }

    if (m.type === 'escort' && m.route) {
      const friendSpec = this.player.spec; // stand-in two-seater until real models
      const f = this.addCombatant(friendSpec, 0);
      f.respawn(-300, this.env.terrainHeight(-300, 200) + 450, 200, friendSpec.cruiseSpeedMs * 0.95, 0);
      const route = m.route.map(w =>
        new THREE.Vector3(w.x, this.env.terrainHeight(w.x, w.z) + 450, w.z));
      this.pilots.set(f, new RoutePilot(route, 0.7));
      this.escortee = f;
    }
  }

  private buildBalloonMesh(): THREE.Group {
    const g = new THREE.Group();
    const envelope = new THREE.Mesh(
      new THREE.SphereGeometry(9, 12, 10),
      new THREE.MeshLambertMaterial({ color: 0xb8b090, flatShading: true })
    );
    envelope.scale.set(1, 0.75, 1.4);
    g.add(envelope);
    const basket = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 1.2, 1.6),
      new THREE.MeshLambertMaterial({ color: 0x4a3b28 })
    );
    basket.position.y = -10;
    g.add(basket);
    return g;
  }

  private spawnSkirmishBandit(): void {
    const spec = skirmishBanditFor(this.player.spec);
    let bandit = this.combatants.find(c => c !== this.player);
    if (!bandit) {
      bandit = this.addCombatant(spec, 1);
      this.pilots.set(bandit, new AiPilot(gunFor(spec), 0.65));
    }
    const dist = spec.era === 'modern' ? 4000 : 1200;
    const p = this.player.model.position;
    const bearing = Math.random() * Math.PI * 2;
    const x = p.x + Math.sin(bearing) * dist;
    const z = p.z - Math.cos(bearing) * dist;
    const alt = Math.max(p.y + (Math.random() - 0.3) * 400, this.env.terrainHeight(x, z) + 400);
    bandit.respawn(x, alt, z, spec.cruiseSpeedMs, Math.random() * Math.PI * 2);
  }

  private respawnAll(): void {
    const alt = this.env.terrainHeight(0, 0) + SPAWN_ALT[this.player.spec.era];
    this.player.respawn(0, alt, 0, this.player.spec.cruiseSpeedMs * 1.1, 0);
    this.playerDown = 'flying';
    if (!this.mission) this.spawnSkirmishBandit();
  }

  getResult(): SessionResult {
    return {
      kills: this.kills,
      survived: this.playerDown === 'flying',
      missionComplete: this.mission ? this.missionState === 'complete' : null
    };
  }

  resize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.hud.resize();
  }

  // ---------------- Frame update ----------------

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
      // In a career mission, death is final — no mid-mission respawns.
      if (!this.mission) {
        this.hud.clearCrash();
        this.respawnAll();
      }
    }
    this.handleWeaponInputs(dt);

    if (this.playerDown === 'flying') this.input.update(this.player.model.controls, dt);

    this.accumulator += Math.min(dt, 0.1);
    while (this.accumulator >= PHYSICS_DT) {
      this.stepPhysics(PHYSICS_DT);
      this.accumulator -= PHYSICS_DT;
    }

    // Skirmish bandit lifecycle
    if (!this.mission) {
      const bandit = this.combatants.find(c => c !== this.player);
      if (bandit && !bandit.alive) {
        this.banditRespawnTimer -= dt;
        if (this.banditRespawnTimer <= 0) this.spawnSkirmishBandit();
      }
    }

    this.evaluateMission();

    for (const c of this.combatants) c.updateEffects(dt);
    this.effects.update(dt);

    // Visual sync
    for (const c of this.combatants) {
      c.mesh.position.copy(c.model.position);
      c.mesh.quaternion.copy(c.model.quaternion);
      const ab = c.mesh.getObjectByName('abFlame');
      if (ab) ab.visible = c.model.controls.afterburner && c.alive;
      const prop = c.mesh.getObjectByName('propDisc');
      const blipped = c.spec.blipSwitch && c.model.controls.brake;
      if (prop) prop.rotation.z += dt * 40 * (blipped ? 0.05 : c.model.controls.throttle);
    }

    this.updateCamera(dt);
    this.touch?.sync();

    const p = this.player.model.position;
    const agl = p.y - this.env.terrainHeight(p.x, p.z);
    this.hud.update(agl, this.cameraMode === 'cockpit', this.combatInfo());
    this.renderer.render(this.scene, this.camera);
    return true;
  }

  // ---------------- Modern weapons ----------------

  private handleWeaponInputs(dt: number): void {
    this.launchCooldown -= dt;
    this.flareCooldown -= dt;

    if (this.input.weaponToggleRequested) {
      this.input.weaponToggleRequested = false;
      if (this.player.missileSpec) {
        this.selectedWeapon = this.selectedWeapon === 'gun' ? 'msl' : 'gun';
      }
    }
    if (this.input.lockRequested) {
      this.input.lockRequested = false;
      this.tryLock();
    }
    if (this.input.flareRequested) {
      this.input.flareRequested = false;
      if (this.missileSystem && this.player.flares > 0 && this.flareCooldown <= 0 && this.playerDown === 'flying') {
        this.flareCooldown = 0.25;
        this.player.flares--;
        this.missileSystem.dropFlare(this.player.id, this.player.model.position, this.player.model.velocity);
      }
    }

    // Maintain / drop the lock
    if (this.lockedTarget && (!this.lockedTarget.alive || !this.inSeekerEnvelope(this.lockedTarget, 1.0, 9000))) {
      this.lockedTarget = null;
    }
    // Missiles want a lock — grab one automatically when selected
    if (this.selectedWeapon === 'msl' && !this.lockedTarget) this.tryLock();

    // Trigger edge: launch a missile
    const firing = this.playerDown === 'flying' && this.input.firing;
    if (firing && !this.prevFiring && this.selectedWeapon === 'msl' && this.missileSystem) {
      if (this.lockedTarget && this.player.missiles > 0 && this.launchCooldown <= 0) {
        this.launchCooldown = 1.0;
        this.player.missiles--;
        const m = this.player.model;
        const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(m.quaternion);
        this.missileSystem.launch(this.player.missileSpec!, this.player.id,
          m.position.clone().addScaledVector(fwd, 3), fwd, m.velocity, this.lockedTarget.id);
      }
    }
    this.prevFiring = firing;
  }

  private inSeekerEnvelope(target: Combatant, coneRad: number, rangeM: number): boolean {
    const m = this.player.model;
    const to = target.model.position.clone().sub(m.position);
    const dist = to.length();
    if (dist > rangeM) return false;
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(m.quaternion);
    return to.normalize().dot(fwd) > Math.cos(coneRad);
  }

  private tryLock(): void {
    if (!this.player.missileSpec) return;
    const spec = this.player.missileSpec;
    let best: Combatant | null = null;
    let bestD = Infinity;
    for (const c of this.combatants) {
      if (!c.alive || c.side === this.player.side) continue;
      if (!this.inSeekerEnvelope(c, spec.seekerConeRad * 0.7, spec.lockRangeM)) continue;
      const d = c.model.position.distanceToSquared(this.player.model.position);
      if (d < bestD) { bestD = d; best = c; }
    }
    this.lockedTarget = best;
  }

  /** Enemy jets shoot back and defend themselves. */
  private updateAiWeapons(dt: number): void {
    if (!this.missileSystem) return;
    for (const c of this.combatants) {
      if (c === this.player || !c.alive || !c.missileSpec) continue;

      // Launch when in the envelope, on a human-ish cadence
      const cd = (this.aiMissileCooldown.get(c) ?? 3) - dt;
      this.aiMissileCooldown.set(c, cd);
      const target = this.pickTarget(c);
      if (cd <= 0 && target && c.missiles > 0) {
        const to = target.model.position.clone().sub(c.model.position);
        const dist = to.length();
        const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(c.model.quaternion);
        const angle = Math.acos(THREE.MathUtils.clamp(to.normalize().dot(fwd), -1, 1));
        if (dist > 1200 && dist < 5500 && angle < 0.35) {
          c.missiles--;
          this.aiMissileCooldown.set(c, 7 + Math.random() * 5);
          this.missileSystem.launch(c.missileSpec, c.id,
            c.model.position.clone().addScaledVector(fwd, 3), fwd, c.model.velocity, target.id);
        }
      }

      // Pop flares while a missile is inbound
      const fcd = (this.aiFlareCooldown.get(c) ?? 0) - dt;
      this.aiFlareCooldown.set(c, fcd);
      if (fcd <= 0 && c.flares > 0 && this.missileSystem.inboundFor(c.id)) {
        this.aiFlareCooldown.set(c, 0.6);
        c.flares--;
        this.missileSystem.dropFlare(c.id, c.model.position, c.model.velocity);
      }
    }
  }

  private stepPhysics(dt: number): void {
    // AI decisions
    for (const c of this.combatants) {
      const pilot = this.pilots.get(c);
      if (!pilot || !c.alive) continue;
      const pos = c.model.position;
      const agl = pos.y - this.env.terrainHeight(pos.x, pos.z);
      pilot.update(dt, c.model, this.pickTarget(c)?.model ?? null, agl);
    }

    for (const c of this.combatants) c.model.step(dt);

    // Guns
    for (const c of this.combatants) {
      const pilot = this.pilots.get(c);
      const firing = c === this.player
        ? this.playerDown === 'flying' && this.input.firing && this.selectedWeapon === 'gun'
        : !!pilot && c.alive && pilot.wantsFire;
      const m = c.model;
      c.gun.update(dt, firing, c.id, m.position, m.quaternion, m.velocity, this.projectiles);
    }

    // Missiles
    if (this.missileSystem) {
      this.updateAiWeapons(dt);
      const views: MissileTargetView[] = this.combatants.map(c => ({
        id: c.id, alive: c.alive, position: c.model.position, velocity: c.model.velocity
      }));
      this.missileSystem.update(dt, views, this.env.terrainHeight, (targetId, damage, by) => {
        const victim = this.combatants.find(c => c.id === targetId);
        if (victim) this.onCombatantHit(victim, damage, by);
      });
    }

    // Projectiles vs airframes + balloon
    const targets: HitTarget[] = [];
    for (const c of this.combatants) {
      if (!c.alive) continue;
      targets.push({
        id: c.id, position: c.model.position, radiusM: c.radiusM,
        onHit: (d, by) => this.onCombatantHit(c, d, by)
      });
    }
    if (this.balloon?.alive) {
      const b = this.balloon;
      targets.push({
        id: 999, position: b.pos, radiusM: 11,
        onHit: d => {
          b.hp -= d;
          this.effects.spawn(b.pos.clone(), { size: 3, growth: 5, life: 0.5, color: 0xffcc66, opacity: 0.8 });
          if (b.hp <= 0 && b.alive) {
            b.alive = false;
            this.effects.explosion(b.pos.clone());
            this.effects.spawn(b.pos.clone(), { size: 20, growth: 25, life: 1.4, color: 0xff6a10, opacity: 0.9 });
            b.mesh.visible = false;
            this.kills++;
          }
        }
      });
    }
    this.projectiles.update(dt, targets, this.env.terrainHeight);

    for (const c of this.combatants) this.groundCheck(c);
  }

  /** Nearest living combatant on the other side. */
  private pickTarget(me: Combatant): Combatant | null {
    let best: Combatant | null = null;
    let bestD = Infinity;
    for (const c of this.combatants) {
      if (c === me || !c.alive || c.side === me.side) continue;
      if (c === this.player && this.playerDown !== 'flying') continue;
      const d = me.model.position.distanceToSquared(c.model.position);
      if (d < bestD) { bestD = d; best = c; }
    }
    return best;
  }

  private onCombatantHit(c: Combatant, damage: number, by: number): void {
    const wasAlive = c.alive;
    c.hit(damage, by);
    if (c === this.player) {
      if (!this.player.alive && this.playerDown === 'flying') {
        this.playerDown = 'shot-down';
        this.hud.showCrash(this.mission ? '✝ SHOT DOWN — press Esc' : '✝ SHOT DOWN — press R');
      }
      return;
    }
    if (wasAlive && !c.alive && c.side !== this.player.side) {
      if (c.lastHitBy === this.player.id) this.kills++;
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
        this.hud.showCrash(this.mission ? '✝ CRASHED — press Esc' : '✝ CRASHED — press R to fly again');
      }
      pos.y = ground + 1.5;
      c.model.velocity.setScalar(0);
    } else {
      if (c.alive) {
        c.kill();
        if (c.side !== this.player.side) this.kills++;
        this.banditRespawnTimer = 7;
      }
      this.effects.explosion(pos.clone());
      c.mesh.visible = false;
      pos.y = ground - 100;
      c.model.velocity.setScalar(0);
    }
  }

  // ---------------- Mission logic ----------------

  private evaluateMission(): void {
    if (!this.mission || this.missionState !== 'running') return;
    const m = this.mission;

    if (this.playerDown !== 'flying') {
      this.missionState = 'failed';
      return;
    }

    const enemiesDown = this.combatants.filter(c => c.side === 1).every(c => !c.alive);

    let complete = false;
    if (m.type === 'patrol') complete = enemiesDown;
    else if (m.type === 'balloon') complete = !!this.balloon && !this.balloon.alive;
    else if (m.type === 'escort') {
      if (this.escortee && !this.escortee.alive) {
        this.missionState = 'failed';
        this.hud.showCrash('THE TWO-SEATER IS DOWN — press Esc');
        return;
      }
      const rp = this.escortee ? this.pilots.get(this.escortee) as RoutePilot : null;
      complete = !!rp?.finished;
    }

    if (complete) {
      this.missionState = 'complete';
      if (!this.completeAnnounced) {
        this.completeAnnounced = true;
        this.hud.showCrash('✔ MISSION COMPLETE — press Esc to return');
      }
    }
  }

  private combatInfo(): CombatInfo {
    const info: CombatInfo = {
      ammo: this.player.gun.ammo,
      kills: this.kills,
      hpFrac: Math.max(0, this.player.hp / this.player.maxHp)
    };

    // Nearest enemy designator (modern HUD only renders it)
    const enemy = this.lockedTarget ?? this.pickTarget(this.player);
    if (enemy) {
      const v = enemy.model.position.clone().project(this.camera);
      const onScreen = v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1;
      info.target = {
        onScreen,
        sx: (v.x + 1) / 2 * window.innerWidth,
        sy: (1 - v.y) / 2 * window.innerHeight,
        dirX: v.x, dirY: v.y, behind: v.z >= 1,
        rangeM: enemy.model.position.distanceTo(this.player.model.position),
        locked: enemy === this.lockedTarget
      };
    }

    // Weapons panel + threat warning (modern)
    if (this.player.missileSpec) {
      info.weapon = {
        kind: this.selectedWeapon,
        name: this.selectedWeapon === 'gun' ? 'GUN' : this.player.missileSpec.name,
        missiles: this.player.missiles,
        flares: this.player.flares,
        locked: !!this.lockedTarget
      };
      const inbound = this.missileSystem?.inboundFor(this.player.id);
      if (inbound) {
        const v = inbound.pos.clone().project(this.camera);
        info.threat = { dirX: v.x, dirY: v.y, behind: v.z >= 1 };
      }
    }

    if (this.mission) {
      const m = this.mission;
      const p = this.player.model.position;
      // Objective point: escort follows the two-seater, others the zone.
      const ox = m.type === 'escort' && this.escortee?.alive ? this.escortee.model.position.x : m.zone.x;
      const oz = m.type === 'escort' && this.escortee?.alive ? this.escortee.model.position.z : m.zone.z;
      const bearing = Math.atan2(ox - p.x, -(oz - p.z));
      const dist = Math.hypot(ox - p.x, oz - p.z);
      const label =
        this.missionState === 'complete' ? 'Mission complete — return when ready' :
        this.missionState === 'failed' ? 'Mission failed' :
        m.type === 'patrol' ? `Patrol: clear the sector (${this.combatants.filter(c => c.side === 1 && c.alive).length} hostile)` :
        m.type === 'balloon' ? 'Destroy the observation balloon' :
        'Escort the two-seater';
      info.mission = {
        text: label,
        bearingRad: bearing,
        distanceM: dist,
        state: this.missionState
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
    this.touch?.dispose();
    this.hud.dispose();
    this.missileSystem?.dispose();
    this.projectiles.dispose();
    this.effects.dispose();
    for (const c of this.combatants) c.dispose();
    this.scene.traverse(obj => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const m = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(m)) m.forEach(x => x.dispose());
      else m?.dispose();
    });
  }
}
