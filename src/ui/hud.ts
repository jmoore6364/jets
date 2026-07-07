/**
 * Era-specific HUDs on a DOM overlay.
 * Modern: green glass HUD (speed / alt / heading / G / AoA).
 * WWI: brass-and-ivory gauge strip along the bottom.
 */
import type { FlightModel } from '../engine/flight/flightModel';

const MS_TO_KTS = 1.94384;
const M_TO_FT = 3.28084;

export class Hud {
  private root: HTMLElement;

  constructor(container: HTMLElement, private model: FlightModel) {
    this.root = document.createElement('div');
    this.root.className = `hud hud-${model.spec.era}`;
    if (model.spec.era === 'modern') {
      this.root.innerHTML = `
        <div class="hud-center">╺╋╸</div>
        <div class="hud-left"><span id="hud-spd">---</span><small>KTS</small></div>
        <div class="hud-right"><span id="hud-alt">---</span><small>FT</small></div>
        <div class="hud-top"><span id="hud-hdg">---</span></div>
        <div class="hud-bottom">
          <span id="hud-g">1.0 G</span> · <span id="hud-aoa">0.0°α</span> ·
          THR <span id="hud-thr">--</span>% <span id="hud-ab"></span>
          <span id="hud-stall" class="warn"></span>
        </div>`;
    } else {
      this.root.innerHTML = `
        <div class="hud-bottom gauges">
          <span class="gauge">ASI <b id="hud-spd">---</b> mph</span>
          <span class="gauge">ALT <b id="hud-alt">---</b> ft</span>
          <span class="gauge">CMP <b id="hud-hdg">---</b></span>
          <span class="gauge">THR <b id="hud-thr">--</b>%</span>
          <span id="hud-stall" class="warn"></span>
        </div>`;
    }
    container.appendChild(this.root);
  }

  private el(id: string): HTMLElement | null {
    return this.root.querySelector('#' + id);
  }

  update(): void {
    const s = this.model.sample;
    const era = this.model.spec.era;
    const hdgDeg = ((s.headingRad * 180 / Math.PI) + 360) % 360;

    const spd = this.el('hud-spd');
    if (spd) spd.textContent = era === 'modern'
      ? String(Math.round(s.speedMs * MS_TO_KTS))
      : String(Math.round(s.speedMs * 2.23694)); // mph for the vintage crowd

    const alt = this.el('hud-alt');
    if (alt) alt.textContent = String(Math.round(s.altitudeM * M_TO_FT));

    const hdg = this.el('hud-hdg');
    if (hdg) hdg.textContent = String(Math.round(hdgDeg)).padStart(3, '0') + '°';

    const thr = this.el('hud-thr');
    if (thr) thr.textContent = String(Math.round(this.model.controls.throttle * 100));

    if (era === 'modern') {
      const g = this.el('hud-g');
      if (g) g.textContent = s.gLoad.toFixed(1) + ' G';
      const aoa = this.el('hud-aoa');
      if (aoa) aoa.textContent = (s.alphaRad * 180 / Math.PI).toFixed(1) + '°α';
      const ab = this.el('hud-ab');
      if (ab) ab.textContent = this.model.controls.afterburner ? ' AB' : '';
    }

    const stall = this.el('hud-stall');
    if (stall) stall.textContent = s.stalled ? ' STALL' : '';
  }

  showCrash(): void {
    const div = document.createElement('div');
    div.className = 'crash-banner';
    div.textContent = '✝ CRASHED — press R to fly again';
    this.root.appendChild(div);
  }

  clearCrash(): void {
    this.root.querySelector('.crash-banner')?.remove();
  }

  dispose(): void {
    this.root.remove();
  }
}
