/**
 * A flight session: one aircraft, one era environment, fixed-step physics,
 * chase/cockpit cameras, crash & respawn. Free flight today; missions later.
 */
import * as THREE from 'three';
import type { AircraftSpec } from '../engine/flight/aircraft';
import { FlightModel } from '../engine/flight/flightModel';
import { InputManager } from '../engine/input';
import { buildEnvironment, type EraEnvironment } from '../world/terrain';
import { buildAircraftMesh } from '../world/aircraftMesh';
import { createHud, type CockpitHud } from '../ui/hud';

const PHYSICS_DT = 1 / 120;
const SPAWN_ALT = { wwi: 600, modern: 1500 };

export class FlightSession {
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private env: EraEnvironment;
  private model: FlightModel;
  private mesh: THREE.Group;
  private hud: CockpitHud;
  private input = new InputManager();

  private accumulator = 0;
  private cameraMode: 'chase' | 'cockpit' = 'cockpit';
  private chasePos = new THREE.Vector3();
  private crashed = false;

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

    this.model = new FlightModel(spec);
    this.respawn();

    this.mesh = buildAircraftMesh(spec);
    this.scene.add(this.mesh);

    this.hud = createHud(uiRoot, this.model, this.input);
    this.input.attach();
    this.input.throttle = spec.propulsion.kind === 'jet' ? 0.85 : 0.8;
  }

  private respawn(): void {
    const alt = SPAWN_ALT[this.model.spec.era];
    // Find a spawn spot with ground clearance.
    const groundAtSpawn = this.env.terrainHeight(0, 0);
    this.model.spawn(0, groundAtSpawn + alt, 0, this.model.spec.cruiseSpeedMs * 1.1);
    this.crashed = false;
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
      this.respawn();
    }

    if (!this.crashed) {
      this.input.update(this.model.controls, dt);

      this.accumulator += Math.min(dt, 0.1);
      while (this.accumulator >= PHYSICS_DT) {
        this.model.step(PHYSICS_DT);
        this.accumulator -= PHYSICS_DT;
      }

      // Ground collision.
      const p = this.model.position;
      const ground = this.env.terrainHeight(p.x, p.z);
      if (p.y < ground + 1.5) {
        this.crashed = true;
        this.hud.showCrash();
      }
    }

    const agl = this.model.position.y - this.env.terrainHeight(this.model.position.x, this.model.position.z);

    // Sync visuals.
    this.mesh.position.copy(this.model.position);
    this.mesh.quaternion.copy(this.model.quaternion);

    const ab = this.mesh.getObjectByName('abFlame');
    if (ab) ab.visible = this.model.controls.afterburner && !this.crashed;
    const prop = this.mesh.getObjectByName('propDisc');
    const blipped = this.model.spec.blipSwitch && this.model.controls.brake;
    if (prop) prop.rotation.z += dt * 40 * (blipped ? 0.05 : this.model.controls.throttle);

    this.updateCamera(dt);
    this.hud.update(agl, this.cameraMode === 'cockpit');
    this.renderer.render(this.scene, this.camera);
    return true;
  }

  private updateCamera(dt: number): void {
    const q = this.model.quaternion;
    if (this.cameraMode === 'cockpit') {
      const eye = new THREE.Vector3(0, 0.65, -0.8).applyQuaternion(q).add(this.model.position);
      this.camera.position.copy(eye);
      this.camera.quaternion.copy(q);
      this.mesh.visible = false;
    } else {
      this.mesh.visible = true;
      const dist = this.model.spec.era === 'modern' ? 26 : 14;
      const target = new THREE.Vector3(0, dist * 0.22, dist).applyQuaternion(q).add(this.model.position);
      const k = 1 - Math.exp(-dt * 5);
      this.chasePos.lerp(target, this.chasePos.lengthSq() === 0 ? 1 : k);
      this.camera.position.copy(this.chasePos);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q).lerp(new THREE.Vector3(0, 1, 0), 0.6).normalize();
      this.camera.up.copy(up);
      this.camera.lookAt(this.model.position);
    }
  }

  dispose(): void {
    this.input.detach();
    this.hud.dispose();
    this.scene.traverse(obj => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const m = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(m)) m.forEach(x => x.dispose());
      else m?.dispose();
    });
  }
}
