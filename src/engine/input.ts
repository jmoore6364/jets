/**
 * Keyboard input with smoothing — raw keys are binary, so control values
 * ease toward their targets to keep the flying civilized.
 */
import type { ControlInputs } from './flight/flightModel';

export class InputManager {
  private keys = new Set<string>();
  private smoothed = { pitch: 0, roll: 0, yaw: 0 };
  throttle = 0.7;
  afterburner = false;

  /** One-shot events consumed by the session. */
  cameraToggleRequested = false;
  respawnRequested = false;
  menuRequested = false;

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.repeat) return;
    this.keys.add(e.code);
    if (e.code === 'KeyC') this.cameraToggleRequested = true;
    if (e.code === 'KeyR') this.respawnRequested = true;
    if (e.code === 'Escape') this.menuRequested = true;
    if (e.code === 'Tab') { this.afterburner = !this.afterburner; e.preventDefault(); }
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };

  attach(): void {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  detach(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    this.keys.clear();
  }

  private axis(neg: string[], pos: string[]): number {
    let v = 0;
    if (neg.some(k => this.keys.has(k))) v -= 1;
    if (pos.some(k => this.keys.has(k))) v += 1;
    return v;
  }

  /** Update controls in place. dt in seconds. */
  update(controls: ControlInputs, dt: number): void {
    // Pitch: S / Down = pull. Roll: A/D or arrows. Yaw: Q/E.
    const targetPitch = this.axis(['KeyW', 'ArrowUp'], ['KeyS', 'ArrowDown']);
    const targetRoll = this.axis(['KeyA', 'ArrowLeft'], ['KeyD', 'ArrowRight']);
    const targetYaw = this.axis(['KeyQ'], ['KeyE']);

    const rate = dt / 0.18; // ~180 ms to full deflection
    const ease = (cur: number, tgt: number) => {
      const next = cur + Math.sign(tgt - cur) * Math.min(Math.abs(tgt - cur), rate);
      return Math.abs(tgt) < 0.01 ? next * Math.max(0, 1 - dt / 0.12) : next; // recenters faster
    };
    this.smoothed.pitch = ease(this.smoothed.pitch, targetPitch);
    this.smoothed.roll = ease(this.smoothed.roll, targetRoll);
    this.smoothed.yaw = ease(this.smoothed.yaw, targetYaw);

    if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) this.throttle = Math.min(1, this.throttle + dt * 0.5);
    if (this.keys.has('ControlLeft') || this.keys.has('ControlRight')) this.throttle = Math.max(0, this.throttle - dt * 0.5);

    controls.pitch = this.smoothed.pitch;
    controls.roll = this.smoothed.roll;
    controls.yaw = this.smoothed.yaw;
    controls.throttle = this.throttle;
    controls.afterburner = this.afterburner;
  }
}
