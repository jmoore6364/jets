/**
 * First-person cockpit HUDs, drawn per-frame on a full-screen canvas.
 *
 * Modern: F-16-style glass HUD — pitch ladder, flight-path marker, heading
 * tape, airspeed/altitude boxes, Mach, G/max-G, AoA, VVI, bank scale.
 * WWI: painted cockpit — walnut panel with brass gauges (ASI, altimeter,
 * compass card, tachometer, slip ball), twin gun breeches, ring-and-bead sight.
 *
 * In chase view the cockpit furniture is hidden: modern keeps the full HUD
 * (floating glass), WWI drops to a slim gauge strip.
 */
import type { FlightModel } from '../engine/flight/flightModel';
import type { InputManager } from '../engine/input';

const MS_TO_KTS = 1.94384;
const MS_TO_MPH = 2.23694;
const M_TO_FT = 3.28084;
const R2D = 180 / Math.PI;

export interface CockpitHud {
  update(aglM: number, cockpitMode: boolean): void;
  showCrash(): void;
  clearCrash(): void;
  resize(): void;
  dispose(): void;
}

abstract class CanvasHud implements CockpitHud {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  protected w = 0;
  protected h = 0;
  private crashEl: HTMLElement | null = null;

  constructor(protected container: HTMLElement, protected model: FlightModel, protected input: InputManager) {
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')!;
    this.resize();
  }

  resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * dpr;
    this.canvas.height = this.h * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  abstract update(aglM: number, cockpitMode: boolean): void;

  showCrash(): void {
    if (this.crashEl) return;
    this.crashEl = document.createElement('div');
    this.crashEl.className = 'crash-banner';
    this.crashEl.textContent = '✝ CRASHED — press R to fly again';
    this.container.appendChild(this.crashEl);
  }

  clearCrash(): void {
    this.crashEl?.remove();
    this.crashEl = null;
  }

  dispose(): void {
    this.clearCrash();
    this.canvas.remove();
  }
}

/* ================================ MODERN ================================ */

const GREEN = 'rgba(80,255,130,0.95)';
const GREEN_DIM = 'rgba(80,255,130,0.55)';

export class ModernHud extends CanvasHud {
  private maxG = 1;

  update(aglM: number, cockpitMode: boolean): void {
    const c = this.ctx;
    const s = this.model.sample;
    const { w, h } = this;
    const cx = w / 2, cy = h / 2;
    const ppd = h / 32; // pixels per degree of pitch

    this.maxG = Math.max(this.maxG, s.gLoad);
    c.clearRect(0, 0, w, h);

    c.strokeStyle = GREEN;
    c.fillStyle = GREEN;
    c.lineWidth = 1.6;
    c.font = '15px Consolas, Menlo, monospace';
    c.textBaseline = 'middle';
    c.shadowColor = 'rgba(60,255,110,0.6)';
    c.shadowBlur = 4;

    const pitchDeg = s.pitchRad * R2D;
    const bankRad = s.bankRad;

    // ---- Pitch ladder (rotates with bank) ----
    c.save();
    c.translate(cx, cy);
    c.rotate(bankRad);
    c.beginPath();
    c.rect(-w * 0.24, -h * 0.34, w * 0.48, h * 0.68);
    c.clip();
    for (let L = -90; L <= 90; L += 5) {
      const y = (pitchDeg - L) * ppd;
      if (Math.abs(y) > h * 0.36) continue;
      const wide = L === 0 ? w * 0.22 : w * 0.085;
      const gap = L === 0 ? w * 0.05 : w * 0.03;
      c.beginPath();
      if (L < 0) c.setLineDash([8, 6]);
      // left + right bars with center gap; non-zero lines get end ticks toward horizon
      for (const side of [-1, 1]) {
        c.moveTo(side * gap, y);
        c.lineTo(side * (gap + wide), y);
        if (L !== 0) c.lineTo(side * (gap + wide), y + Math.sign(L) * 7);
      }
      c.stroke();
      c.setLineDash([]);
      if (L !== 0 && L % 10 === 0) {
        c.textAlign = 'left';
        c.fillText(String(Math.abs(L)), gap + wide + 6, y);
        c.textAlign = 'right';
        c.fillText(String(Math.abs(L)), -(gap + wide + 6), y);
      }
    }
    c.restore();

    // ---- Flight-path marker (velocity vector, body frame) ----
    const fpmX = cx + s.betaRad * R2D * ppd;
    const fpmY = cy + s.alphaRad * R2D * ppd;
    c.beginPath();
    c.arc(fpmX, fpmY, 7, 0, Math.PI * 2);
    c.moveTo(fpmX - 7, fpmY); c.lineTo(fpmX - 17, fpmY);
    c.moveTo(fpmX + 7, fpmY); c.lineTo(fpmX + 17, fpmY);
    c.moveTo(fpmX, fpmY - 7); c.lineTo(fpmX, fpmY - 13);
    c.stroke();

    // ---- Waterline (boresight) ----
    c.beginPath();
    c.moveTo(cx - 14, cy); c.lineTo(cx - 5, cy); c.lineTo(cx, cy + 6); c.lineTo(cx + 5, cy); c.lineTo(cx + 14, cy);
    c.stroke();

    // ---- Heading tape ----
    const hdg = ((s.headingRad * R2D) + 360) % 360;
    const tapeY = h * 0.075;
    const pxPerHdgDeg = w * 0.016;
    c.textAlign = 'center';
    for (let d = -25; d <= 25; d++) {
      const hh = (Math.round(hdg) + d + 360) % 360;
      if (hh % 5 !== 0) continue;
      const diff = ((hh - hdg + 540) % 360) - 180;
      const xx = cx + diff * pxPerHdgDeg;
      c.beginPath();
      c.moveTo(xx, tapeY);
      c.lineTo(xx, tapeY - (hh % 10 === 0 ? 10 : 6));
      c.stroke();
      if (hh % 10 === 0) c.fillText(String(hh / 10).padStart(2, '0'), xx, tapeY - 20);
    }
    c.beginPath(); // caret + boxed digital heading
    c.moveTo(cx - 6, tapeY + 10); c.lineTo(cx, tapeY + 2); c.lineTo(cx + 6, tapeY + 10);
    c.stroke();
    c.strokeRect(cx - 26, tapeY + 12, 52, 22);
    c.fillText(String(Math.round(hdg)).padStart(3, '0'), cx, tapeY + 23);

    // ---- Airspeed (left box) ----
    const boxY = cy - 12;
    c.textAlign = 'right';
    c.strokeRect(w * 0.2 - 78, boxY, 78, 26);
    c.font = '19px Consolas, Menlo, monospace';
    c.fillText(String(Math.round(s.speedMs * MS_TO_KTS)), w * 0.2 - 8, boxY + 13);
    c.font = '14px Consolas, Menlo, monospace';
    c.fillText(`M ${s.mach.toFixed(2)}`, w * 0.2 - 8, boxY + 42);
    const thr = Math.round(this.model.controls.throttle * 100);
    c.fillText(`THR ${thr}${this.model.controls.afterburner ? ' AB' : ''}${this.model.controls.brake ? ' BRK' : ''}`, w * 0.2 - 8, boxY + 62);

    // ---- Altitude (right box) ----
    c.textAlign = 'left';
    c.strokeRect(w * 0.8, boxY, 92, 26);
    c.font = '19px Consolas, Menlo, monospace';
    c.fillText(String(Math.round(s.altitudeM * M_TO_FT)), w * 0.8 + 8, boxY + 13);
    c.font = '14px Consolas, Menlo, monospace';
    c.fillStyle = GREEN_DIM;
    c.fillText(`R ${Math.max(0, Math.round(aglM * M_TO_FT))}`, w * 0.8 + 8, boxY + 42);
    c.fillStyle = GREEN;
    const fpm = s.climbRateMs * M_TO_FT * 60;
    c.fillText(`${fpm >= 0 ? '+' : ''}${Math.round(fpm / 10) * 10}`, w * 0.8 + 8, boxY + 62);

    // ---- G / AoA (upper left block) ----
    c.textAlign = 'left';
    c.fillText(`G  ${s.gLoad.toFixed(1)}`, w * 0.2 - 78, boxY - 64);
    c.fillStyle = GREEN_DIM;
    c.fillText(`MX ${this.maxG.toFixed(1)}`, w * 0.2 - 78, boxY - 44);
    c.fillStyle = GREEN;
    c.fillText(`α  ${(s.alphaRad * R2D).toFixed(1)}`, w * 0.2 - 78, boxY - 24);

    // ---- Bank scale (bottom arc) ----
    const arcR = h * 0.17;
    const arcCY = cy + h * 0.27;
    for (const a of [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60]) {
      const rad = (a - 90) * Math.PI / 180;
      const len = a % 30 === 0 ? 12 : 7;
      const x1 = cx + Math.cos(rad) * arcR, y1 = arcCY + Math.sin(rad) * arcR;
      const x2 = cx + Math.cos(rad) * (arcR + len), y2 = arcCY + Math.sin(rad) * (arcR + len);
      c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
    }
    const bp = (-bankRad * R2D - 90) * Math.PI / 180; // pointer
    c.beginPath();
    c.moveTo(cx + Math.cos(bp) * (arcR - 3), arcCY + Math.sin(bp) * (arcR - 3));
    c.lineTo(cx + Math.cos(bp) * (arcR - 14), arcCY + Math.sin(bp) * (arcR - 14));
    c.stroke();

    // ---- Warnings ----
    c.textAlign = 'center';
    if (s.stalled) {
      c.fillStyle = 'rgba(255,70,60,0.95)';
      c.font = 'bold 22px Consolas, Menlo, monospace';
      if (Math.floor(performance.now() / 250) % 2 === 0) c.fillText('STALL', cx, cy - h * 0.2);
    }
    if (this.input.mouseFly) {
      c.fillStyle = GREEN_DIM;
      c.font = '12px Consolas, Menlo, monospace';
      c.fillText('MOUSE FLY', cx, h - 18);
      const mr = 0.33 * Math.min(w, h);
      c.beginPath();
      c.arc(cx + this.input.mouseStick.x * mr, cy + this.input.mouseStick.y * mr, 4, 0, Math.PI * 2);
      c.stroke();
    }
    void cockpitMode; // full glass HUD in both views
  }
}

/* ================================= WWI ================================= */

export class WwiCockpit extends CanvasHud {
  update(aglM: number, cockpitMode: boolean): void {
    const c = this.ctx;
    const s = this.model.sample;
    const { w, h } = this;
    c.clearRect(0, 0, w, h);
    void aglM;

    const mph = s.speedMs * MS_TO_MPH;
    const altFt = s.altitudeM * M_TO_FT;
    const hdg = ((s.headingRad * R2D) + 360) % 360;
    const blipped = this.model.controls.brake;
    const rpm = (blipped ? 0.15 : this.model.controls.throttle) * 1250 * (0.85 + 0.15 * Math.random());

    if (!cockpitMode) {
      // Slim chase-view strip
      c.fillStyle = 'rgba(30,22,12,0.65)';
      c.fillRect(0, h - 40, w, 40);
      c.fillStyle = '#f0dfae';
      c.font = '16px Georgia, serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(
        `ASI ${Math.round(mph)} mph    ALT ${Math.round(altFt)} ft    CMP ${String(Math.round(hdg)).padStart(3, '0')}°    RPM ${Math.round(rpm)}${s.stalled ? '    ⚠ STALL' : ''}${blipped ? '    BLIP' : ''}`,
        w / 2, h - 20
      );
      return;
    }

    // ---- Gunsight: ring and bead ----
    const gx = w / 2, gy = h * 0.42;
    c.strokeStyle = 'rgba(25,25,25,0.9)';
    c.lineWidth = 3;
    c.beginPath(); c.arc(gx, gy, 34, 0, Math.PI * 2); c.stroke();
    c.lineWidth = 2;
    for (const [dx1, dy1, dx2, dy2] of [[-34, 0, -14, 0], [34, 0, 14, 0], [0, -34, 0, -14], [0, 34, 0, 14]]) {
      c.beginPath(); c.moveTo(gx + dx1, gy + dy1); c.lineTo(gx + dx2, gy + dy2); c.stroke();
    }
    c.fillStyle = 'rgba(200,170,60,0.95)';
    c.beginPath(); c.arc(gx, gy, 3, 0, Math.PI * 2); c.fill();

    // ---- Windscreen frame ----
    c.strokeStyle = 'rgba(48,34,18,0.95)';
    c.lineWidth = 10;
    c.beginPath();
    c.moveTo(w * 0.16, h * 0.72); c.lineTo(w * 0.3, h * 0.18);
    c.moveTo(w * 0.84, h * 0.72); c.lineTo(w * 0.7, h * 0.18);
    c.moveTo(w * 0.3, h * 0.185); c.quadraticCurveTo(w * 0.5, h * 0.13, w * 0.7, h * 0.185);
    c.stroke();

    // ---- Panel ----
    const py = h * 0.74;
    const grad = c.createLinearGradient(0, py, 0, h);
    grad.addColorStop(0, '#3a2a16');
    grad.addColorStop(0.15, '#57391c');
    grad.addColorStop(1, '#2a1c0e');
    c.fillStyle = grad;
    c.beginPath();
    c.moveTo(w * 0.08, h);
    c.quadraticCurveTo(w * 0.1, py, w * 0.28, py - 8);
    c.lineTo(w * 0.72, py - 8);
    c.quadraticCurveTo(w * 0.9, py, w * 0.92, h);
    c.closePath();
    c.fill();

    // ---- Twin gun breeches ----
    for (const sx of [-0.075, 0.075]) {
      const x = w / 2 + w * sx;
      c.fillStyle = '#1c1c1e';
      c.beginPath();
      c.roundRect(x - 13, h * 0.60, 26, h * 0.16, 6);
      c.fill();
      c.fillStyle = '#333338';
      c.fillRect(x - 4, h * 0.575, 8, h * 0.04);
    }

    // ---- Gauges ----
    const gaugeY = py + (h - py) * 0.44;
    const R = Math.min(h * 0.085, w * 0.055);
    this.gauge(w * 0.20, gaugeY, R, 'M.P.H.', 0, 160, mph, 20);
    this.gauge(w * 0.36, gaugeY, R, 'ALT ×1000', 0, 20, altFt / 1000, 5);
    this.compass(w * 0.5, gaugeY + R * 0.15, R * 0.92, hdg);
    this.gauge(w * 0.64, gaugeY, R, 'R.P.M. ×100', 0, 16, rpm / 100, 4);
    this.slipBall(w * 0.80, gaugeY, R, s.betaRad);

    // ---- Warnings ----
    if (s.stalled && Math.floor(performance.now() / 300) % 2 === 0) {
      c.fillStyle = 'rgba(255,80,60,0.9)';
      c.font = 'bold 20px Georgia, serif';
      c.textAlign = 'center';
      c.fillText('— STALL —', w / 2, h * 0.3);
    }
    if (blipped) {
      c.fillStyle = '#ffd98a';
      c.font = '15px Georgia, serif';
      c.textAlign = 'center';
      c.fillText('BLIP', w * 0.64, gaugeY + R + 18);
    }
    if (this.input.mouseFly) {
      c.fillStyle = 'rgba(240,223,174,0.6)';
      c.font = '12px Georgia, serif';
      c.textAlign = 'center';
      c.fillText('MOUSE FLY', w / 2, h - 8);
    }
  }

  /** Brass-bezel gauge with a 270° sweep. */
  private gauge(x: number, y: number, r: number, label: string, min: number, max: number, val: number, step: number): void {
    const c = this.ctx;
    // bezel + face
    const bz = c.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.2, x, y, r * 1.15);
    bz.addColorStop(0, '#d8b46a'); bz.addColorStop(1, '#6d5423');
    c.fillStyle = bz;
    c.beginPath(); c.arc(x, y, r * 1.12, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#efe6cd';
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();

    const a0 = Math.PI * 0.75, sweep = Math.PI * 1.5;
    c.strokeStyle = '#221a10';
    c.fillStyle = '#221a10';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = `${Math.max(9, r * 0.22)}px Georgia, serif`;
    for (let v = min; v <= max; v += step) {
      const a = a0 + sweep * ((v - min) / (max - min));
      const c1 = Math.cos(a), s1 = Math.sin(a);
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(x + c1 * r * 0.82, y + s1 * r * 0.82);
      c.lineTo(x + c1 * r * 0.95, y + s1 * r * 0.95);
      c.stroke();
      c.fillText(String(v), x + c1 * r * 0.62, y + s1 * r * 0.62);
    }
    c.font = `${Math.max(8, r * 0.17)}px Georgia, serif`;
    c.fillText(label, x, y - r * 0.34);
    // needle
    const av = a0 + sweep * Math.max(0, Math.min(1, (val - min) / (max - min)));
    c.strokeStyle = '#101010';
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(x - Math.cos(av) * r * 0.15, y - Math.sin(av) * r * 0.15);
    c.lineTo(x + Math.cos(av) * r * 0.78, y + Math.sin(av) * r * 0.78);
    c.stroke();
    c.fillStyle = '#8a6d35';
    c.beginPath(); c.arc(x, y, r * 0.09, 0, Math.PI * 2); c.fill();
  }

  /** Rotating compass card, lubber line fixed at top. */
  private compass(x: number, y: number, r: number, hdgDeg: number): void {
    const c = this.ctx;
    const bz = c.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.2, x, y, r * 1.15);
    bz.addColorStop(0, '#d8b46a'); bz.addColorStop(1, '#6d5423');
    c.fillStyle = bz;
    c.beginPath(); c.arc(x, y, r * 1.12, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#181614';
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();

    c.save();
    c.translate(x, y);
    c.rotate(-hdgDeg * Math.PI / 180);
    c.fillStyle = '#efe6cd';
    c.strokeStyle = '#efe6cd';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = `${Math.max(10, r * 0.3)}px Georgia, serif`;
    const pts: Array<[string, number]> = [['N', 0], ['E', 90], ['S', 180], ['W', 270]];
    for (const [t, a] of pts) {
      const rad = (a - 90) * Math.PI / 180;
      c.fillText(t, Math.cos(rad) * r * 0.62, Math.sin(rad) * r * 0.62);
    }
    for (let a = 0; a < 360; a += 30) {
      const rad = (a - 90) * Math.PI / 180;
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(Math.cos(rad) * r * 0.82, Math.sin(rad) * r * 0.82);
      c.lineTo(Math.cos(rad) * r * 0.94, Math.sin(rad) * r * 0.94);
      c.stroke();
    }
    c.restore();
    // lubber line
    c.strokeStyle = '#ffd98a';
    c.lineWidth = 3;
    c.beginPath(); c.moveTo(x, y - r * 0.98); c.lineTo(x, y - r * 0.72); c.stroke();
  }

  /** Curved-tube slip indicator. */
  private slipBall(x: number, y: number, r: number, betaRad: number): void {
    const c = this.ctx;
    c.strokeStyle = '#6d5423';
    c.lineWidth = r * 0.42;
    c.lineCap = 'round';
    c.beginPath();
    c.arc(x, y - r * 0.9, r * 1.5, Math.PI * 0.37, Math.PI * 0.63);
    c.stroke();
    c.strokeStyle = '#efe6cd';
    c.lineWidth = r * 0.32;
    c.beginPath();
    c.arc(x, y - r * 0.9, r * 1.5, Math.PI * 0.37, Math.PI * 0.63);
    c.stroke();
    c.lineCap = 'butt';
    // ball: slips toward the low wing (deflects with sideslip)
    const t = Math.max(-1, Math.min(1, betaRad * 6));
    const a = Math.PI * 0.5 + t * Math.PI * 0.1;
    c.fillStyle = '#181614';
    c.beginPath();
    c.arc(x + Math.cos(a) * r * 1.5, y - r * 0.9 + Math.sin(a) * r * 1.5, r * 0.15, 0, Math.PI * 2);
    c.fill();
    c.font = `${Math.max(8, r * 0.17)}px Georgia, serif`;
    c.fillStyle = '#efe6cd';
    c.textAlign = 'center';
    c.fillText('SLIP', x, y + r * 1.05);
  }
}

export function createHud(container: HTMLElement, model: FlightModel, input: InputManager): CockpitHud {
  return model.spec.era === 'modern'
    ? new ModernHud(container, model, input)
    : new WwiCockpit(container, model, input);
}
