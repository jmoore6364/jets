/**
 * Pilot input from keyboard, mouse-as-stick, and gamepad.
 *
 * Priority per axis each frame: gamepad stick (if deflected) > mouse-fly
 * (if enabled) > keyboard (smoothed, since raw keys are binary).
 *
 *   Keyboard  W/S pitch · A/D roll · Q/E rudder · Shift/Ctrl throttle ·
 *             1-9,0 direct throttle · Tab afterburner · B speedbrake/blip ·
 *             M mouse-fly · C camera · R respawn · Esc menu
 *   Mouse     M toggles: cursor offset from screen center = stick deflection
 *   Gamepad   left stick = pitch/roll · right stick X = rudder ·
 *             RT/LT = throttle up/down · A = afterburner · X = brake
 */
import type { ControlInputs } from './flight/flightModel';
import type { TouchControls } from '../ui/touch';
import { viewportSize } from './viewport';

export class InputManager {
  /** Set by the session on touch devices. */
  touch: TouchControls | null = null;
  private keys = new Set<string>();
  private smoothed = { pitch: 0, roll: 0, yaw: 0 };
  throttle = 0.7;
  afterburner = false;

  /** Mouse-fly state (M to toggle). */
  mouseFly = false;
  /** Normalized mouse stick deflection, -1..1 (valid while mouseFly). */
  mouseStick = { x: 0, y: 0 };
  private mousePx = { x: 0, y: 0 };

  private padButtonsPrev: boolean[] = [];
  /** A connected-but-untouched gamepad must never fly the plane: the pad is
   *  ignored until an axis or button is deliberately used. */
  private padActivated = false;

  /** Trigger state: Space, left mouse (in mouse-fly), or gamepad RB. */
  firing = false;
  private mouseDown = false;

  /** One-shot events consumed by the session. */
  cameraToggleRequested = false;
  /** Held: eyes on the bandit (padlock view). */
  padlock = false;
  respawnRequested = false;
  menuRequested = false;
  weaponToggleRequested = false;
  lockRequested = false;
  flareRequested = false;
  muteToggleRequested = false;
  blackBoxRequested = false;
  pauseRequested = false;
  wingmanOrderRequested = false;

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.repeat) return;
    this.keys.add(e.code);
    if (e.code === 'KeyC') this.cameraToggleRequested = true;
    if (e.code === 'KeyL') this.padlock = true;
    if (e.code === 'KeyR') this.respawnRequested = true;
    if (e.code === 'Escape') this.menuRequested = true;
    if (e.code === 'KeyM') this.mouseFly = !this.mouseFly;
    if (e.code === 'KeyF') this.weaponToggleRequested = true;
    if (e.code === 'KeyT') this.lockRequested = true;
    if (e.code === 'KeyX') this.flareRequested = true;
    if (e.code === 'KeyV') this.muteToggleRequested = true;
    if (e.code === 'KeyK') this.blackBoxRequested = true;
    if (e.code === 'KeyP') this.pauseRequested = true;
    if (e.code === 'KeyG') this.wingmanOrderRequested = true;
    if (e.code === 'Tab') { this.afterburner = !this.afterburner; e.preventDefault(); }
    // Direct throttle: 1-9 = 10-90%, 0 = 100%
    if (e.code.startsWith('Digit')) {
      const d = Number(e.code.slice(5));
      this.throttle = d === 0 ? 1 : d / 10;
    }
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
    if (e.code === 'KeyL') this.padlock = false;
  };

  private onMouseMove = (e: MouseEvent) => {
    this.mousePx.x = e.clientX;
    this.mousePx.y = e.clientY;
  };

  private onMouseDown = (e: MouseEvent) => {
    if (e.button === 0) this.mouseDown = true;
  };

  private onMouseUp = (e: MouseEvent) => {
    if (e.button === 0) this.mouseDown = false;
  };

  attach(): void {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  detach(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    this.keys.clear();
    this.mouseDown = false;
  }

  private axis(neg: string[], pos: string[]): number {
    let v = 0;
    if (neg.some(k => this.keys.has(k))) v -= 1;
    if (pos.some(k => this.keys.has(k))) v += 1;
    return v;
  }

  private static dead(v: number, dz = 0.1): number {
    return Math.abs(v) < dz ? 0 : (v - Math.sign(v) * dz) / (1 - dz);
  }

  /** Update controls in place. dt in seconds. */
  update(controls: ControlInputs, dt: number): void {
    // --- Keyboard (smoothed) ---
    const targetPitch = this.axis(['KeyW', 'ArrowUp'], ['KeyS', 'ArrowDown']);
    const targetRoll = this.axis(['KeyA', 'ArrowLeft'], ['KeyD', 'ArrowRight']);
    const targetYaw = this.axis(['KeyQ'], ['KeyE']);

    const rate = dt / 0.18; // ~180 ms to full deflection
    const ease = (cur: number, tgt: number) => {
      const next = cur + Math.sign(tgt - cur) * Math.min(Math.abs(tgt - cur), rate);
      return Math.abs(tgt) < 0.01 ? next * Math.max(0, 1 - dt / 0.05) : next; // recenters fast on release
    };
    this.smoothed.pitch = ease(this.smoothed.pitch, targetPitch);
    this.smoothed.roll = ease(this.smoothed.roll, targetRoll);
    this.smoothed.yaw = ease(this.smoothed.yaw, targetYaw);

    let pitch = this.smoothed.pitch;
    let roll = this.smoothed.roll;
    let yaw = this.smoothed.yaw;
    let brake = this.keys.has('KeyB');
    let padFire = false;

    // --- Mouse-fly ---
    if (this.mouseFly) {
      const vp = viewportSize();
      const r = 0.33 * Math.min(vp.w, vp.h);
      this.mouseStick.x = Math.max(-1, Math.min(1, (this.mousePx.x - vp.w / 2) / r));
      this.mouseStick.y = Math.max(-1, Math.min(1, (this.mousePx.y - vp.h / 2) / r));
      const mx = InputManager.dead(this.mouseStick.x, 0.06);
      const my = InputManager.dead(this.mouseStick.y, 0.06);
      if (Math.abs(mx) > Math.abs(roll)) roll = mx;
      if (Math.abs(my) > Math.abs(pitch)) pitch = my; // mouse down = pull
    }

    // --- Touch stick (auto-coordinated: thumb sticks have no rudder) ---
    if (this.touch?.stick.active) {
      const ts = this.touch.stick;
      if (Math.abs(ts.x) > Math.abs(roll)) roll = ts.x;
      if (Math.abs(ts.y) > Math.abs(pitch)) pitch = ts.y; // drag down = pull
      yaw = roll * 0.3;
    }
    if (this.touch?.brake) brake = true;

    // --- Gamepad ---
    const pads = typeof navigator !== 'undefined' && navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = pads && Array.from(pads).find(p => p && p.connected);
    if (pad && !this.padActivated) {
      this.padActivated = pad.axes.some(a => Math.abs(a) > 0.35) || pad.buttons.some(b => b.pressed);
    }
    if (pad && this.padActivated) {
      const gx = InputManager.dead(pad.axes[0] ?? 0);
      const gy = InputManager.dead(pad.axes[1] ?? 0);
      const gr = InputManager.dead(pad.axes[2] ?? 0);
      if (Math.abs(gx) > Math.abs(roll)) roll = gx;
      if (Math.abs(gy) > Math.abs(pitch)) pitch = gy; // stick back = pull
      if (Math.abs(gr) > Math.abs(yaw)) yaw = gr;

      const rt = pad.buttons[7]?.value ?? 0; // right trigger: throttle up
      const lt = pad.buttons[6]?.value ?? 0; // left trigger: throttle down
      this.throttle = Math.max(0, Math.min(1, this.throttle + (rt - lt) * dt * 0.6));

      const pressed = (i: number) => !!pad.buttons[i]?.pressed;
      if (pressed(0) && !this.padButtonsPrev[0]) this.afterburner = !this.afterburner; // A
      if (pressed(1) && !this.padButtonsPrev[1]) this.flareRequested = true;           // B
      if (pressed(2)) brake = true;                                                    // X
      if (pressed(3) && !this.padButtonsPrev[3]) this.cameraToggleRequested = true;    // Y
      if (pressed(5)) padFire = true;                                                  // RB
      if (pressed(4) && !this.padButtonsPrev[4]) this.weaponToggleRequested = true;    // LB
      this.padButtonsPrev = pad.buttons.map(b => b.pressed);
    }

    // --- Keyboard throttle (continuous) ---
    if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) this.throttle = Math.min(1, this.throttle + dt * 0.5);
    if (this.keys.has('ControlLeft') || this.keys.has('ControlRight')) this.throttle = Math.max(0, this.throttle - dt * 0.5);

    controls.pitch = pitch;
    controls.roll = roll;
    controls.yaw = yaw;
    controls.throttle = this.throttle;
    controls.afterburner = this.afterburner;
    controls.brake = brake;

    this.firing = this.keys.has('Space') || (this.mouseFly && this.mouseDown) || padFire || !!this.touch?.firing;
  }
}
