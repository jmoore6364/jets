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
import { MissileSystem, SAM, type MissileTargetView, type MissileSpec } from '../engine/combat/missiles';
import { AiPilot, RoutePilot, StrikerPilot, WingmanPilot } from '../engine/ai/pilot';
import { FlightModel } from '../engine/flight/flightModel';
import { Combatant, gunFor } from './combatant';
import { FOKKER_DR1, SOPWITH_CAMEL } from '../era/wwi/aircraft';
import { MIG29 } from '../era/modern/aircraft';
import { TouchControls, isTouchDevice } from '../ui/touch';
import { viewportSize } from '../engine/viewport';
import type { AudioEngine } from '../engine/audio';
import { getHandling } from './handling';
import { difficultyParams } from './difficulty';
import { loadDynasty } from '../career/dynasty';
import { dynastyPerks, type DynastyPerks } from '../career/legacyShop';
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
  /** Campaign bookkeeping: how the squadron mate on your wing fared. */
  wingmanKills: number;
  wingmanLost: boolean;
  /** The enemy ace flew this mission and went down. */
  aceKilled: boolean;
}

const WWI_CENTRAL_IDS = ['fokker-dr1', 'fokker-d7'];

function skirmishBanditFor(player: AircraftSpec): AircraftSpec {
  if (player.era === 'modern') return MIG29;
  return wwiEnemyOf(player);
}

function wwiEnemyOf(player: AircraftSpec): AircraftSpec {
  return WWI_CENTRAL_IDS.includes(player.id) ? SOPWITH_CAMEL : FOKKER_DR1;
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
  private wingman: Combatant | null = null;
  private escortee: Combatant | null = null;
  private respawnTimers = new Map<Combatant, number>();
  private nextId = 0;

  /** Balloon objective (balloon missions). */
  private balloon: { mesh: THREE.Group; pos: THREE.Vector3; hp: number; alive: boolean } | null = null;
  /** Strike mission objectives. */
  private bunker: { mesh: THREE.Group; pos: THREE.Vector3; hp: number; alive: boolean } | null = null;
  private sam: { mesh: THREE.Group; pos: THREE.Vector3; hp: number; alive: boolean; cooldown: number } | null = null;

  private hud: CockpitHud;
  private input = new InputManager();
  private touch: TouchControls | null = null;

  private accumulator = 0;
  private cameraMode: 'chase' | 'cockpit' = 'cockpit';
  /** Black box: last ~30s of flight data, dumped with K for bug reports. */
  private blackBox: object[] = [];
  private blackBoxTimer = 0;
  /** Arcade resupply timers. */
  private gunRegenDelay = 0;
  private missileRegenTimer = 20;
  private bvrRegenTimer = 30;
  private flareRegenTimer = 6;

  private paused = false;
  private bestStreak = 0;
  /** Dynasty legacy unlocks, applied to the player's loadout and airframe. */
  private perks: DynastyPerks;
  private chasePos = new THREE.Vector3();
  private playerDown: 'flying' | 'crashed' | 'shot-down' = 'flying';
  private kills = 0;
  private wingmanKills = 0;
  /** The enemy ace's airframe this mission, if he's up. */
  private aceCombatant: Combatant | null = null;
  private aceKilled = false;

  // Modern weapons state
  private missileSystem: MissileSystem | null = null;
  private selectedWeapon: 'gun' | 'msl' | 'bvr' = 'gun';
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
    private mission: Mission | null = null,
    private audio: AudioEngine | null = null
  ) {
    this.env = buildEnvironment(spec.era);
    this.scene.add(this.env.group);
    this.scene.background = this.env.skyColor;
    this.scene.fog = new THREE.FogExp2(this.env.fogColor, this.env.fogDensity);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.5, 40000);
    this.effects = new EffectsPool(this.scene);
    this.projectiles = new ProjectileSystem(this.scene);
    if (spec.era === 'modern') {
      // Wrap the effects sink so missile detonations also reach the speakers.
      const fx = {
        spawn: this.effects.spawn.bind(this.effects),
        explosion: (pos: THREE.Vector3) => {
          this.effects.explosion(pos);
          this.audio?.explosionAt(pos.distanceTo(this.player.model.position));
        }
      };
      this.missileSystem = new MissileSystem(this.scene, fx);
    }

    this.player = this.addCombatant(spec, 0, getHandling() === 'arcade');
    this.perks = dynastyPerks(loadDynasty());
    this.player.applyPerks(this.perks);
    const alt = this.env.terrainHeight(0, 0) + SPAWN_ALT[spec.era];
    this.player.respawn(0, alt, 0, spec.cruiseSpeedMs * 1.1, 0);

    this.spawnWingman();
    if (mission) {
      this.missionState = 'running';
      this.setupMission(mission);
    } else {
      this.spawnSkirmishBandit();
      this.spawnSkirmishBandit();
    }

    try {
      this.bestStreak = Number(localStorage.getItem(`jets.best.${spec.era}`)) || 0;
    } catch { /* private browsing */ }

    this.hud = createHud(uiRoot, this.player.model, this.input);
    this.input.attach();
    this.input.throttle = spec.propulsion.kind === 'jet' ? 0.85 : 0.8;
    if (isTouchDevice()) {
      this.touch = new TouchControls(uiRoot, this.input);
      this.input.touch = this.touch;
    }
  }

  private addCombatant(spec: AircraftSpec, side: number, arcade = false): Combatant {
    const isPlayer = this.combatants.length === 0;
    const c = new Combatant(this.nextId++, this.scene, spec, this.effects, side, arcade);
    // FCS pilot assists are for human hands only — they fight AI controllers.
    if (!isPlayer && c.model instanceof FlightModel) c.model.assists = false;
    this.combatants.push(c);
    return c;
  }

  /** Enemy toughness and stores follow the difficulty setting. */
  private applyDifficulty(enemy: Combatant): void {
    const d = difficultyParams();
    enemy.maxHp = Math.max(2, Math.round(enemy.maxHp * d.hpMult));
    enemy.hp = enemy.maxHp;
    enemy.flares = d.flareCount;
  }

  // ---------------- Mission setup ----------------

  private setupMission(m: Mission): void {
    const modern = this.player.spec.era === 'modern';
    const enemySpec = modern ? MIG29 : wwiEnemyOf(this.player.spec);
    const groundAtZone = this.env.terrainHeight(m.zone.x, m.zone.z);
    const zonePos = new THREE.Vector3(m.zone.x, groundAtZone, m.zone.z);
    const cruiseAlt = modern ? 1500 : 500;

    // Heritage: the dynasty's WWI ace earns the Viper a Richthofen-red tail.
    if (m.heritage && modern) {
      const fin = this.player.mesh.getObjectByName('fin') as THREE.Mesh | undefined;
      if (fin) (fin.material as THREE.MeshLambertMaterial).color.setHex(0xb02020);
    }

    for (let i = 0; i < m.enemyCount; i++) {
      const e = this.addCombatant(enemySpec, 1);
      if (m.type === 'intercept') {
        // Strikers start far out, inbound low and fast toward the base.
        const away = zonePos.clone().sub(this.player.model.position).normalize();
        const sx = m.zone.x + away.x * 9000 + (Math.random() - 0.5) * 1500;
        const sz = m.zone.z + away.z * 9000 + (Math.random() - 0.5) * 1500;
        e.respawn(sx, this.env.terrainHeight(sx, sz) + 600, sz, enemySpec.cruiseSpeedMs * 1.1, 0);
        this.pilots.set(e, new StrikerPilot(zonePos.clone().setY(groundAtZone + 400), gunFor(enemySpec), difficultyParams().skill));
        this.applyDifficulty(e);
      } else {
        const ox = (Math.random() - 0.5) * 800, oz = (Math.random() - 0.5) * 800;
        e.respawn(m.zone.x + ox, groundAtZone + cruiseAlt + Math.random() * 300, m.zone.z + oz,
          enemySpec.cruiseSpeedMs, Math.random() * Math.PI * 2);
        this.pilots.set(e, new AiPilot(gunFor(enemySpec), difficultyParams().skill + Math.random() * 0.1));
        this.applyDifficulty(e);
      }
    }

    // The enemy ace flies as one of them — better, tougher, and marked.
    if (m.ace) {
      const aceBird = this.combatants.find(c => c.side === 1 && c.alive);
      if (aceBird) {
        this.aceCombatant = aceBird;
        this.pilots.set(aceBird, new AiPilot(gunFor(aceBird.spec), 0.95));
        aceBird.maxHp += 2;
        aceBird.hp = aceBird.maxHp;
        this.paintAce(aceBird);
        this.toast(`⚠ ${m.ace.name.toUpperCase()} IS AIRBORNE — ${m.ace.kills} KILLS`, 3200);
      }
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

    if (m.type === 'strike') {
      // Ground bunker target
      const bunkerMesh = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 14), new THREE.MeshLambertMaterial({ color: 0x777d72, flatShading: true }));
      base.position.y = 2.5;
      const top = new THREE.Mesh(new THREE.BoxGeometry(8, 3, 8), new THREE.MeshLambertMaterial({ color: 0x62685e, flatShading: true }));
      top.position.y = 6.5;
      bunkerMesh.add(base, top);
      bunkerMesh.position.set(m.zone.x, groundAtZone, m.zone.z);
      this.scene.add(bunkerMesh);
      this.bunker = { mesh: bunkerMesh, pos: bunkerMesh.position.clone().setY(groundAtZone + 4), hp: 10, alive: true };

      // SAM site guarding it
      const samMesh = new THREE.Group();
      const sBase = new THREE.Mesh(new THREE.BoxGeometry(6, 2.5, 6), new THREE.MeshLambertMaterial({ color: 0x5a6152, flatShading: true }));
      sBase.position.y = 1.25;
      const dish = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.5, 10), new THREE.MeshLambertMaterial({ color: 0x8a9182, flatShading: true }));
      dish.rotation.z = Math.PI / 3;
      dish.position.y = 4;
      dish.name = 'samDish';
      samMesh.add(sBase, dish);
      const sx = m.zone.x + 900, sz = m.zone.z - 700;
      samMesh.position.set(sx, this.env.terrainHeight(sx, sz), sz);
      this.scene.add(samMesh);
      this.sam = { mesh: samMesh, pos: samMesh.position.clone().addScaledVector(new THREE.Vector3(0, 3, 0), 1), hp: 6, alive: true, cooldown: 6 };
    }

    if (m.type === 'escort' && m.route) {
      const friendSpec = this.player.spec; // stand-in package until real models
      const friendAlt = modern ? 1400 : 450;
      const f = this.addCombatant(friendSpec, 0);
      f.respawn(-300, this.env.terrainHeight(-300, 200) + friendAlt, 200, friendSpec.cruiseSpeedMs * 0.95, 0);
      const route = m.route.map(w =>
        new THREE.Vector3(w.x, this.env.terrainHeight(w.x, w.z) + friendAlt, w.z));
      this.pilots.set(f, new RoutePilot(route, modern ? 0.8 : 0.7));
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

  private noteAceDown(c: Combatant): void {
    if (c !== this.aceCombatant || this.aceKilled || !this.mission?.ace) return;
    this.aceKilled = true;
    this.toast(`★ ${this.mission.ace.name.toUpperCase()} GOES DOWN ★`, 3600);
  }

  /** The ace wears his colors: all-red in 1917, red fins in 2026. */
  private paintAce(c: Combatant): void {
    const red = new THREE.Color(0xb02020);
    if (c.spec.era === 'wwi') {
      c.mesh.traverse(obj => {
        const mesh = obj as THREE.Mesh;
        const mat = mesh.material as THREE.MeshLambertMaterial | undefined;
        if (mat?.color) mat.color.lerp(red, 0.7);
      });
    } else {
      c.mesh.traverse(obj => {
        if (obj.name !== 'fin') return;
        const mat = (obj as THREE.Mesh).material as THREE.MeshLambertMaterial | undefined;
        if (mat?.color) mat.color.setHex(0xb02020);
      });
    }
  }

  /** A wingman on your wing, in every fight. Same mount as yours. */
  private spawnWingman(): void {
    const spec = this.player.spec;
    if (!this.wingman) {
      this.wingman = this.addCombatant(spec, 0);
      this.pilots.set(this.wingman, new WingmanPilot(gunFor(spec), this.player.model, this.mission?.wingman?.skill ?? 0.75));
    }
    const p = this.player.model.position;
    const off = new THREE.Vector3(70, 12, 90).applyQuaternion(this.player.model.quaternion);
    this.wingman.respawn(p.x + off.x, Math.max(p.y + off.y, this.env.terrainHeight(p.x + off.x, p.z + off.z) + 200),
      p.z + off.z, spec.cruiseSpeedMs * 1.1, this.player.model.sample.headingRad);
  }

  private spawnSkirmishBandit(existing?: Combatant): void {
    const spec = skirmishBanditFor(this.player.spec);
    let bandit = existing;
    if (!bandit) {
      bandit = this.addCombatant(spec, 1);
      this.pilots.set(bandit, new AiPilot(gunFor(spec), difficultyParams().skill));
    }
    const dist = spec.era === 'modern' ? 4000 : 1200;
    const p = this.player.model.position;
    const bearing = Math.random() * Math.PI * 2;
    const x = p.x + Math.sin(bearing) * dist;
    const z = p.z - Math.cos(bearing) * dist;
    const alt = Math.max(p.y + (Math.random() - 0.3) * 400, this.env.terrainHeight(x, z) + 400);
    bandit.respawn(x, alt, z, spec.cruiseSpeedMs, Math.random() * Math.PI * 2);
    this.applyDifficulty(bandit);
  }

  private respawnAll(): void {
    const alt = this.env.terrainHeight(0, 0) + SPAWN_ALT[this.player.spec.era];
    this.player.respawn(0, alt, 0, this.player.spec.cruiseSpeedMs * 1.1, 0);
    this.playerDown = 'flying';
    this.spawnWingman();
    if (!this.mission) {
      for (const c of this.combatants) {
        if (c.side === 1) this.spawnSkirmishBandit(c);
      }
      this.respawnTimers.clear();
    }
  }

  getResult(): SessionResult {
    return {
      kills: this.kills,
      survived: this.playerDown === 'flying',
      missionComplete: this.mission ? this.missionState === 'complete' : null,
      wingmanKills: this.wingmanKills,
      wingmanLost: !!this.wingman && !this.wingman.alive,
      aceKilled: this.aceKilled
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
    if (this.input.muteToggleRequested) {
      this.input.muteToggleRequested = false;
      this.audio?.toggleMute();
    }
    if (this.input.blackBoxRequested) {
      this.input.blackBoxRequested = false;
      this.dumpBlackBox();
    }
    if (this.input.wingmanOrderRequested) {
      this.input.wingmanOrderRequested = false;
      const wp = this.wingman ? this.pilots.get(this.wingman) : null;
      if (wp instanceof WingmanPilot) {
        wp.mode = wp.mode === 'engage' ? 'cover' : 'engage';
        this.toast(wp.mode === 'engage' ? 'WINGMAN: ENGAGE — cleared to hunt' : 'WINGMAN: COVER — on your wing', 1800);
      }
    }
    if (this.input.pauseRequested) {
      this.input.pauseRequested = false;
      this.paused = !this.paused;
      this.toast(this.paused ? '⏸ PAUSED — P to resume' : '▶ RESUMED', this.paused ? 60000 : 1200);
    }
    if (this.paused) {
      this.renderer.render(this.scene, this.camera);
      return true;
    }
    this.recordBlackBox(dt);
    this.updateArcadeResupply(dt);
    this.handleWeaponInputs(dt);

    if (this.playerDown === 'flying') this.input.update(this.player.model.controls, dt);

    this.accumulator += Math.min(dt, 0.1);
    while (this.accumulator >= PHYSICS_DT) {
      this.stepPhysics(PHYSICS_DT);
      this.accumulator -= PHYSICS_DT;
    }

    // Skirmish lifecycle: dead bandits respawn after 7s, a lost wingman
    // rejoins after 15s.
    if (!this.mission) {
      for (const c of this.combatants) {
        if (c === this.player || c.alive) { this.respawnTimers.delete(c); continue; }
        const t = (this.respawnTimers.get(c) ?? (c === this.wingman ? 15 : 7)) - dt;
        if (t <= 0) {
          this.respawnTimers.delete(c);
          if (c === this.wingman) this.spawnWingman();
          else this.spawnSkirmishBandit(c);
        } else {
          this.respawnTimers.set(c, t);
        }
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

      const flash = c.mesh.getObjectByName('muzzleFlash') as THREE.Sprite | undefined;
      if (flash) {
        const firing = c === this.player
          ? this.playerDown === 'flying' && this.input.firing && this.selectedWeapon === 'gun' && c.gun.ammo > 0
          : !!this.pilots.get(c)?.wantsFire && c.alive && c.gun.ammo > 0;
        flash.visible = firing && Math.random() > 0.35;
        if (flash.visible) flash.scale.setScalar(1.2 + Math.random() * 1.2);
      }
    }

    this.updateCamera(dt);
    this.touch?.sync();

    if (this.audio) {
      const pc = this.player.model.controls;
      const alive = this.playerDown === 'flying';
      this.audio.update(dt, {
        era: this.player.spec.era,
        throttle: alive ? pc.throttle : 0,
        speedMs: this.player.model.sample.speedMs,
        afterburner: pc.afterburner && alive,
        firingGun: alive && this.input.firing && this.selectedWeapon === 'gun' && this.player.gun.ammo > 0,
        gunRateHz: this.player.gun.spec.rateHz,
        growl: this.player.missileSpec && this.selectedWeapon === 'msl'
          ? (this.lockedTarget ? 'lock' : 'seek')
          : 'off',
        inbound: !!this.missileSystem?.inboundFor(this.player.id)
      });
    }

    const p = this.player.model.position;
    const agl = p.y - this.env.terrainHeight(p.x, p.z);
    this.hud.update(agl, this.cameraMode === 'cockpit', this.combatInfo());
    this.renderer.render(this.scene, this.camera);
    return true;
  }

  // ---------------- Toasts ----------------

  private toastEl: HTMLElement | null = null;

  private toast(text: string, ms = 2200): void {
    this.toastEl?.remove();
    const el = document.createElement('div');
    el.className = 'kill-toast';
    el.textContent = text;
    document.getElementById('ui')?.appendChild(el);
    this.toastEl = el;
    setTimeout(() => { if (this.toastEl === el) { el.remove(); this.toastEl = null; } }, ms);
  }

  private announceKill(): void {
    const wwi = this.player.spec.era === 'wwi';
    const lines = wwi
      ? ['VICTORY!', 'HE GOES DOWN!', 'GOT HIM!']
      : ['SPLASH ONE!', 'GOOD KILL!', 'BANDIT DOWN!'];
    this.toast(lines[Math.min(lines.length - 1, Math.floor(Math.random() * lines.length))]);
    if (this.kills > this.bestStreak) {
      this.bestStreak = this.kills;
      try { localStorage.setItem(`jets.best.${this.player.spec.era}`, String(this.bestStreak)); } catch { /* ok */ }
    }
  }

  // ---------------- Black box ----------------

  private recordBlackBox(dt: number): void {
    this.blackBoxTimer -= dt;
    if (this.blackBoxTimer > 0) return;
    this.blackBoxTimer = 0.1;
    const m = this.player.model;
    const s = m.sample;
    // Raw gamepad axes: catches drift from an idle controller silently
    // overriding the keyboard.
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = pads && Array.from(pads).find(p => p && p.connected);
    this.blackBox.push({
      pad: pad ? pad.axes.slice(0, 4).map(a => +a.toFixed(2)) : null,
      t: +performance.now().toFixed(0),
      inP: +m.controls.pitch.toFixed(2),
      inR: +m.controls.roll.toFixed(2),
      inY: +m.controls.yaw.toFixed(2),
      thr: +m.controls.throttle.toFixed(2),
      bank: Math.round(s.bankRad * 57.3),
      pitch: Math.round(s.pitchRad * 57.3),
      hdg: Math.round(((s.headingRad * 57.3) + 360) % 360),
      g: +s.gLoad.toFixed(1),
      aoa: +(s.alphaRad * 57.3).toFixed(1),
      beta: +(s.betaRad * 57.3).toFixed(1),
      spd: Math.round(s.speedMs),
      alt: Math.round(s.altitudeM),
      cam: this.cameraMode
    });
    if (this.blackBox.length > 300) this.blackBox.shift();
  }

  private dumpBlackBox(): void {
    const pads = navigator.getGamepads ? Array.from(navigator.getGamepads()).filter(p => p && p.connected) : [];
    const dump = {
      build: typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : 'dev',
      aircraft: this.player.spec.id,
      handling: getHandling(),
      mouseFly: this.input.mouseFly,
      touch: !!this.touch,
      gamepads: pads.map(p => ({ id: p!.id, axes: p!.axes.map(a => +a.toFixed(3)) })),
      samples: this.blackBox
    };
    const text = JSON.stringify(dump);
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    const blob = new Blob([text], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'flight-data.json';
    a.click();
    URL.revokeObjectURL(a.href);
    const note = document.createElement('div');
    note.className = 'crash-banner';
    note.style.borderColor = '#7ec8ff';
    note.style.color = '#7ec8ff';
    note.textContent = 'FLIGHT DATA SAVED (copied + downloaded) — paste it to Claude';
    document.getElementById('ui')?.appendChild(note);
    setTimeout(() => note.remove(), 3500);
  }

  /** Arcade mode: belts refill off-trigger, missiles and flares restock slowly.
   *  Sim mode carries what it carries. */
  private updateArcadeResupply(dt: number): void {
    if (getHandling() !== 'arcade' || this.playerDown !== 'flying') return;

    const firingGun = this.input.firing && this.selectedWeapon === 'gun';
    this.gunRegenDelay = firingGun ? 1.2 : Math.max(0, this.gunRegenDelay - dt);
    if (!firingGun && this.gunRegenDelay <= 0) {
      this.player.gun.regenerate(dt, (this.player.spec.era === 'modern' ? 35 : 12) * this.perks.gunRegenMult);
    }

    const p = this.player;
    if (p.missileSpec && p.missiles < p.missileCap) {
      this.missileRegenTimer -= dt;
      if (this.missileRegenTimer <= 0) {
        this.missileRegenTimer = 20;
        p.missiles++;
      }
    }
    if (p.bvrSpec && p.bvrMissiles < p.bvrCap) {
      this.bvrRegenTimer -= dt;
      if (this.bvrRegenTimer <= 0) {
        this.bvrRegenTimer = 30;
        p.bvrMissiles++;
      }
    }
    if (p.missileSpec && (p.flares < p.decoyCap || p.chaff < p.decoyCap)) {
      this.flareRegenTimer -= dt;
      if (this.flareRegenTimer <= 0) {
        this.flareRegenTimer = 6;
        if (p.flares < p.decoyCap) p.flares++;
        if (p.chaff < p.decoyCap) p.chaff++;
      }
    }
  }

  // ---------------- Modern weapons ----------------

  private handleWeaponInputs(dt: number): void {
    this.launchCooldown -= dt;
    this.flareCooldown -= dt;

    if (this.input.weaponToggleRequested) {
      this.input.weaponToggleRequested = false;
      if (this.player.missileSpec) {
        this.selectedWeapon = this.selectedWeapon === 'gun' ? 'msl' : this.selectedWeapon === 'msl' ? 'bvr' : 'gun';
        this.lockedTarget = null;
      }
    }
    if (this.input.lockRequested) {
      this.input.lockRequested = false;
      this.tryLock();
    }
    if (this.input.flareRequested) {
      this.input.flareRequested = false;
      if (this.missileSystem && this.flareCooldown <= 0 && this.playerDown === 'flying') {
        this.flareCooldown = 0.25;
        if (this.player.flares > 0) {
          this.player.flares--;
          this.missileSystem.dropFlare(this.player.id, this.player.model.position, this.player.model.velocity, 'flare');
        }
        if (this.player.chaff > 0) {
          this.player.chaff--;
          this.missileSystem.dropFlare(this.player.id, this.player.model.position, this.player.model.velocity, 'chaff');
        }
      }
    }

    // Maintain / drop the lock (radar shots hold lock much farther out)
    const lockRange = this.selectedWeapon === 'bvr' ? 16000 : 9000;
    if (this.lockedTarget && (!this.lockedTarget.alive || !this.inSeekerEnvelope(this.lockedTarget, 1.0, lockRange))) {
      this.lockedTarget = null;
    }
    // Missiles want a lock — grab one automatically when selected
    if ((this.selectedWeapon === 'msl' || this.selectedWeapon === 'bvr') && !this.lockedTarget) this.tryLock();

    // Trigger edge: launch a missile
    const firing = this.playerDown === 'flying' && this.input.firing;
    if (firing && !this.prevFiring && this.selectedWeapon !== 'gun' && this.missileSystem) {
      const bvr = this.selectedWeapon === 'bvr';
      const spec = bvr ? this.player.bvrSpec : this.player.missileSpec;
      const count = bvr ? this.player.bvrMissiles : this.player.missiles;
      if (this.lockedTarget && spec && count > 0 && this.launchCooldown <= 0) {
        this.launchCooldown = 1.0;
        if (bvr) this.player.bvrMissiles--; else this.player.missiles--;
        const m = this.player.model;
        const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(m.quaternion);
        this.missileSystem.launch(spec, this.player.id,
          m.position.clone().addScaledVector(fwd, 3), fwd, m.velocity, this.lockedTarget.id);
        this.audio?.launch();
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
    const spec: MissileSpec | null = this.selectedWeapon === 'bvr' ? this.player.bvrSpec : this.player.missileSpec;
    if (!spec) return;
    let best: Combatant | null = null;
    let bestD = Infinity;
    for (const c of this.combatants) {
      if (!c.alive || c.side === this.player.side) continue;
      if (!this.inSeekerEnvelope(c, Math.min(spec.seekerConeRad * 0.7, 0.5), spec.lockRangeM)) continue;
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
        const bvrShot = c.bvrSpec && c.bvrMissiles > 0 && dist > 4500 && dist < 9500 && angle < 0.25;
        const irShot = dist > 1200 && dist < 5500 && angle < 0.35 && c.missiles > 0;
        if (bvrShot || irShot) {
          const spec = bvrShot ? c.bvrSpec! : c.missileSpec;
          if (bvrShot) c.bvrMissiles--; else c.missiles--;
          const [cadMin, cadMax] = difficultyParams().missileCadence;
          this.aiMissileCooldown.set(c, cadMin + Math.random() * (cadMax - cadMin));
          this.missileSystem.launch(spec, c.id,
            c.model.position.clone().addScaledVector(fwd, 3), fwd, c.model.velocity, target.id);
          if (c.model.position.distanceTo(this.player.model.position) < 4000) this.audio?.launch();
        }
      }

      // Pop flares while a missile is inbound
      // Defensive flares come in discrete bursts with a real cooldown — the
      // AI can no longer spoof every missile with a continuous flare stream.
      const fcd = (this.aiFlareCooldown.get(c) ?? 0) - dt;
      this.aiFlareCooldown.set(c, fcd);
      if (fcd <= 0 && (c.flares > 0 || c.chaff > 0) && this.missileSystem.inboundFor(c.id)) {
        this.aiFlareCooldown.set(c, difficultyParams().flareBurstCooldown);
        for (let i = 0; i < 2; i++) {
          if (c.flares > 0) {
            c.flares--;
            this.missileSystem.dropFlare(c.id, c.model.position, c.model.velocity, 'flare');
          }
          if (c.chaff > 0) {
            c.chaff--;
            this.missileSystem.dropFlare(c.id, c.model.position, c.model.velocity, 'chaff');
          }
        }
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

      // SAM site: tracks and launches at the player inside its ring
      if (this.sam?.alive && this.playerDown === 'flying') {
        this.sam.cooldown -= dt;
        const dish = this.sam.mesh.getObjectByName('samDish');
        if (dish) dish.rotation.y += dt * 1.5;
        const dist = this.sam.pos.distanceTo(this.player.model.position);
        if (this.sam.cooldown <= 0 && dist < SAM.lockRangeM) {
          this.sam.cooldown = 13 + Math.random() * 6;
          const up = this.player.model.position.clone().sub(this.sam.pos).normalize().add(new THREE.Vector3(0, 0.6, 0)).normalize();
          this.missileSystem.launch(SAM, 998, this.sam.pos.clone().addScaledVector(up, 4), up, new THREE.Vector3(), this.player.id);
          this.audio?.launch();
          this.toast('⚠ SAM LAUNCH', 1600);
        }
      }
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
    if (this.bunker?.alive) {
      const b = this.bunker;
      targets.push({
        id: 997, position: b.pos, radiusM: 10,
        onHit: d => {
          b.hp -= d;
          this.effects.spawn(b.pos.clone(), { size: 4, growth: 6, life: 0.6, color: 0xffcc66, opacity: 0.8 });
          if (b.hp <= 0 && b.alive) {
            b.alive = false;
            this.effects.explosion(b.pos.clone());
            this.audio?.explosionAt(b.pos.distanceTo(this.player.model.position));
            b.mesh.visible = false;
            this.toast('TARGET DESTROYED');
          }
        }
      });
    }
    if (this.sam?.alive) {
      const s = this.sam;
      targets.push({
        id: 998, position: s.pos, radiusM: 7,
        onHit: d => {
          s.hp -= d;
          this.effects.spawn(s.pos.clone(), { size: 3, growth: 5, life: 0.5, color: 0xffcc66, opacity: 0.8 });
          if (s.hp <= 0 && s.alive) {
            s.alive = false;
            this.effects.explosion(s.pos.clone());
            this.audio?.explosionAt(s.pos.distanceTo(this.player.model.position));
            s.mesh.visible = false;
            this.kills++;
            this.toast('SAM DESTROYED');
          }
        }
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
    if (wasAlive && !c.alive) {
      this.audio?.explosionAt(c.model.position.distanceTo(this.player.model.position));
    }
    if (c === this.player) {
      this.audio?.hitThud();
      if (!this.player.alive && this.playerDown === 'flying') {
        this.playerDown = 'shot-down';
        this.hud.showCrash(this.mission ? '✝ SHOT DOWN — press Esc' : '✝ SHOT DOWN — press R');
      }
      return;
    }
    if (wasAlive && !c.alive && c.side !== this.player.side) {
      if (c.lastHitBy === this.player.id) {
        this.kills++;
        this.announceKill();
      } else if (this.wingman && c.lastHitBy === this.wingman.id) {
        this.wingmanKills++;
        const wm = this.mission?.wingman?.name;
        this.toast(this.player.spec.era === 'wwi'
          ? `${wm ? wm.toUpperCase() : 'YOUR WINGMAN'} GETS ONE!`
          : `${wm ? wm.toUpperCase() : 'WINGMAN'}: SPLASH ONE`);
      }
    }
    if (wasAlive && !c.alive && c === this.wingman) {
      const wm = this.mission?.wingman?.name;
      this.toast(this.player.spec.era === 'wwi'
        ? `${wm ? wm.toUpperCase() : 'YOUR WINGMAN'} GOES DOWN`
        : `${wm ? wm.toUpperCase() : 'WINGMAN'} IS DOWN`, 2600);
    }
    if (wasAlive && !c.alive) this.noteAceDown(c);
  }

  private groundCheck(c: Combatant): void {
    const pos = c.model.position;
    const ground = this.env.terrainHeight(pos.x, pos.z);
    if (pos.y >= ground + 1.5) return;

    if (c === this.player) {
      if (this.playerDown === 'flying') {
        this.playerDown = 'crashed';
        this.player.kill();
        this.audio?.explosionAt(0);
        this.hud.showCrash(this.mission ? '✝ CRASHED — press Esc' : '✝ CRASHED — press R to fly again');
      }
      pos.y = ground + 1.5;
      c.model.velocity.setScalar(0);
    } else {
      if (c.alive) this.audio?.explosionAt(pos.distanceTo(this.player.model.position));
      if (c.alive) {
        c.kill();
        if (c.side !== this.player.side) {
          this.kills++;
          this.announceKill();
        }
        this.noteAceDown(c);
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
    else if (m.type === 'strike') complete = !!this.bunker && !this.bunker.alive;
    else if (m.type === 'intercept') {
      // Any striker reaching the base = mission failed.
      for (const c of this.combatants) {
        if (c.side !== 1 || !c.alive) continue;
        const d = Math.hypot(c.model.position.x - m.zone.x, c.model.position.z - m.zone.z);
        if (d < 1200) {
          this.missionState = 'failed';
          this.hud.showCrash('THE STRIKERS GOT THROUGH — press Esc');
          return;
        }
      }
      complete = enemiesDown;
    }
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
      best: this.bestStreak,
      hpFrac: Math.max(0, this.player.hp / this.player.maxHp)
    };

    // Nearest enemy designator (modern HUD only renders it)
    const enemy = this.lockedTarget ?? this.pickTarget(this.player);
    if (enemy) {
      const vp = viewportSize();
      const v = enemy.model.position.clone().project(this.camera);
      const onScreen = v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1;
      info.target = {
        onScreen,
        sx: (v.x + 1) / 2 * vp.w,
        sy: (1 - v.y) / 2 * vp.h,
        dirX: v.x, dirY: v.y, behind: v.z >= 1,
        rangeM: enemy.model.position.distanceTo(this.player.model.position),
        locked: enemy === this.lockedTarget
      };
    }

    // Wingman status
    if (this.wingman) {
      const wp = this.pilots.get(this.wingman);
      info.wingman = {
        alive: this.wingman.alive,
        mode: wp instanceof WingmanPilot ? wp.mode : 'engage',
        name: this.mission?.wingman?.name
      };
    }

    // Weapons panel + threat warning (modern)
    if (this.player.missileSpec) {
      info.weapon = {
        kind: this.selectedWeapon,
        name: this.selectedWeapon === 'gun' ? 'GUN'
          : this.selectedWeapon === 'bvr' ? this.player.bvrSpec!.name : this.player.missileSpec.name,
        missiles: this.selectedWeapon === 'bvr' ? this.player.bvrMissiles : this.player.missiles,
        flares: this.player.flares,
        locked: !!this.lockedTarget
      };
      const inbound = this.missileSystem?.inboundFor(this.player.id);
      if (inbound) {
        const v = inbound.pos.clone().project(this.camera);
        info.threat = { dirX: v.x, dirY: v.y, behind: v.z >= 1 };
      } else {
        // RWR: spike when an enemy radar is on us (nose-on inside its range)
        for (const c of this.combatants) {
          if (!c.alive || c.side === this.player.side || !c.bvrSpec) continue;
          const to = this.player.model.position.clone().sub(c.model.position);
          const dist = to.length();
          if (dist > 11000) continue;
          const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(c.model.quaternion);
          if (to.normalize().dot(fwd) > Math.cos(0.3)) {
            const v = c.model.position.clone().project(this.camera);
            info.rwr = { dirX: v.x, dirY: v.y, behind: v.z >= 1 };
            break;
          }
        }
        if (!info.rwr && this.sam?.alive &&
            this.sam.pos.distanceTo(this.player.model.position) < SAM.lockRangeM * 1.2) {
          const v = this.sam.pos.clone().project(this.camera);
          info.rwr = { dirX: v.x, dirY: v.y, behind: v.z >= 1 };
        }
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
      const hostiles = this.combatants.filter(c => c.side === 1 && c.alive).length;
      const modern = this.player.spec.era === 'modern';
      const label =
        this.missionState === 'complete' ? 'Mission complete — return when ready' :
        this.missionState === 'failed' ? 'Mission failed' :
        m.type === 'patrol' ? `${modern ? 'CAP' : 'Patrol'}: clear the sector (${hostiles} hostile)` :
        m.type === 'balloon' ? 'Destroy the observation balloon' :
        m.type === 'strike' ? `Strike: destroy the bunker${this.sam?.alive ? ' (SAM active)' : ''}` :
        m.type === 'intercept' ? `Intercept: stop the strikers (${hostiles} inbound)` :
        modern ? 'Protect the strike package' : 'Escort the two-seater';
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
      // The camera banks WITH the aircraft (tiny world-up bias only for
      // stability): a 75-degree bank must LOOK like 75 degrees, or a hard
      // turn reads as a straight-up climb.
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q).lerp(new THREE.Vector3(0, 1, 0), 0.1).normalize();
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
