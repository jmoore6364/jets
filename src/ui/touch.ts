/**
 * Touch controls for phones/tablets. Appears only on touch devices.
 *
 * Layout (landscape-first):
 *   Right zone  — floating virtual stick: anchor where the thumb lands,
 *                 drag = pitch/roll (auto-coordinated rudder).
 *   Left edge   — vertical throttle slider.
 *   Left side   — FIRE (hold), AB (toggle), BRK (hold).
 *   Top left    — menu + camera buttons.
 *
 * Pointer events with per-widget capture give clean multi-touch: thumb on
 * the stick, other thumb firing and working the throttle at the same time.
 */
import type { InputManager } from '../engine/input';

export function isTouchDevice(): boolean {
  return typeof window !== 'undefined' &&
    (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
}

const STICK_RADIUS = 65;

export class TouchControls {
  /** Read by InputManager each frame. */
  readonly stick = { active: false, x: 0, y: 0 };
  firing = false;
  brake = false;

  private root: HTMLElement;
  private base: HTMLElement;
  private knob: HTMLElement;
  private fill: HTMLElement;
  private abBtn: HTMLElement;
  private anchor = { x: 0, y: 0 };
  private stickPointer = -1;

  constructor(container: HTMLElement, private input: InputManager) {
    this.root = document.createElement('div');
    this.root.className = 'touch-ui';
    this.root.innerHTML = `
      <div class="tstick-zone"></div>
      <div class="tstick-base"></div>
      <div class="tstick-knob"></div>
      <div class="tthrottle"><div class="tthrottle-fill"></div><span>THR</span></div>
      <button class="tbtn tfire">FIRE</button>
      <button class="tbtn tab">AB</button>
      <button class="tbtn tbrk">BRK</button>
      <button class="tbtn tmenu">☰</button>
      <button class="tbtn tcam">CAM</button>`;
    container.appendChild(this.root);

    const q = <T extends HTMLElement>(sel: string) => this.root.querySelector(sel) as T;
    this.base = q('.tstick-base');
    this.knob = q('.tstick-knob');
    this.fill = q('.tthrottle-fill');
    this.abBtn = q('.tab');

    this.bindStick(q('.tstick-zone'));
    this.bindThrottle(q('.tthrottle'));
    this.bindHold(q('.tfire'), v => { this.firing = v; });
    this.bindHold(q('.tbrk'), v => { this.brake = v; });
    q('.tab').addEventListener('pointerdown', e => {
      e.preventDefault();
      this.input.afterburner = !this.input.afterburner;
    });
    q('.tmenu').addEventListener('pointerdown', e => {
      e.preventDefault();
      this.input.menuRequested = true;
    });
    q('.tcam').addEventListener('pointerdown', e => {
      e.preventDefault();
      this.input.cameraToggleRequested = true;
    });
  }

  private bindStick(zone: HTMLElement): void {
    zone.addEventListener('pointerdown', e => {
      if (this.stickPointer !== -1) return;
      e.preventDefault();
      this.stickPointer = e.pointerId;
      zone.setPointerCapture(e.pointerId);
      this.anchor.x = e.clientX;
      this.anchor.y = e.clientY;
      this.stick.active = true;
      this.stick.x = 0; this.stick.y = 0;
      this.base.style.display = this.knob.style.display = 'block';
      this.placeStickVisuals(e.clientX, e.clientY);
    });
    zone.addEventListener('pointermove', e => {
      if (e.pointerId !== this.stickPointer) return;
      const dx = e.clientX - this.anchor.x;
      const dy = e.clientY - this.anchor.y;
      const len = Math.hypot(dx, dy);
      const clamped = Math.min(len, STICK_RADIUS);
      const nx = len > 0 ? (dx / len) * clamped : 0;
      const ny = len > 0 ? (dy / len) * clamped : 0;
      this.stick.x = nx / STICK_RADIUS;
      this.stick.y = ny / STICK_RADIUS;
      this.placeStickVisuals(this.anchor.x + nx, this.anchor.y + ny);
    });
    const end = (e: PointerEvent) => {
      if (e.pointerId !== this.stickPointer) return;
      this.stickPointer = -1;
      this.stick.active = false;
      this.stick.x = 0; this.stick.y = 0;
      this.base.style.display = this.knob.style.display = 'none';
    };
    zone.addEventListener('pointerup', end);
    zone.addEventListener('pointercancel', end);
  }

  private placeStickVisuals(knobX: number, knobY: number): void {
    this.base.style.left = `${this.anchor.x - 60}px`;
    this.base.style.top = `${this.anchor.y - 60}px`;
    this.knob.style.left = `${knobX - 26}px`;
    this.knob.style.top = `${knobY - 26}px`;
  }

  private bindThrottle(track: HTMLElement): void {
    const set = (e: PointerEvent) => {
      const r = track.getBoundingClientRect();
      const t = 1 - (e.clientY - r.top) / r.height;
      this.input.throttle = Math.max(0, Math.min(1, t));
    };
    track.addEventListener('pointerdown', e => {
      e.preventDefault();
      track.setPointerCapture(e.pointerId);
      set(e);
    });
    track.addEventListener('pointermove', e => {
      if (track.hasPointerCapture(e.pointerId)) set(e);
    });
  }

  private bindHold(btn: HTMLElement, cb: (down: boolean) => void): void {
    btn.addEventListener('pointerdown', e => {
      e.preventDefault();
      btn.setPointerCapture(e.pointerId);
      btn.classList.add('active');
      cb(true);
    });
    const up = () => { btn.classList.remove('active'); cb(false); };
    btn.addEventListener('pointerup', up);
    btn.addEventListener('pointercancel', up);
  }

  /** Reflect state driven elsewhere (throttle keys, AB toggles). Call each frame. */
  sync(): void {
    this.fill.style.height = `${Math.round(this.input.throttle * 100)}%`;
    this.abBtn.classList.toggle('active', this.input.afterburner);
  }

  dispose(): void {
    this.root.remove();
  }
}
