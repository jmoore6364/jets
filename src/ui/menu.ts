/**
 * Main menu: pick your century. Career buttons are visible but locked —
 * they document the roadmap right on the title screen.
 */
import type { AircraftSpec } from '../engine/flight/aircraft';
import { WWI_AIRCRAFT } from '../era/wwi/aircraft';
import { MODERN_AIRCRAFT } from '../era/modern/aircraft';
import { isTouchDevice } from './touch';

export class MainMenu {
  private root: HTMLElement;

  constructor(container: HTMLElement, onSelect: (spec: AircraftSpec) => void, onCareer: () => void) {
    this.root = document.createElement('div');
    this.root.className = 'menu';
    this.root.innerHTML = `
      <h1>PROJECT&nbsp;JETS</h1>
      <p class="tagline">A CENTURY OF AIR COMBAT — ONE BLOODLINE</p>
      <div class="eras">
        <section class="era era-wwi">
          <h2>1917 · THE GREAT WAR</h2>
          <div class="planes"></div>
          <button class="career-btn">CAREER — YOUR DYNASTY BEGINS</button>
        </section>
        <section class="era era-modern">
          <h2>2026 · MODERN ERA</h2>
          <div class="planes"></div>
          <button class="locked" disabled>CAREER — Milestone 3</button>
        </section>
      </div>
      <p class="controls-hint">${isTouchDevice()
        ? 'Right thumb: stick · Left edge: throttle · FIRE / AB / BRK buttons · ☰ menu · a bandit patrols each map'
        : 'W/S pitch · A/D roll · Q/E rudder · Space fire · F weapon · T lock · X flare · Shift/Ctrl throttle · Tab afterburner · B brake/blip · M mouse-fly · C camera · R respawn · Esc menu'
      }</p>`;

    const sections = this.root.querySelectorAll('.planes');
    const fill = (el: Element, list: AircraftSpec[]) => {
      for (const spec of list) {
        const btn = document.createElement('button');
        btn.textContent = `SKIRMISH — ${spec.name}`;
        btn.addEventListener('click', () => onSelect(spec));
        el.appendChild(btn);
      }
    };
    fill(sections[0], WWI_AIRCRAFT);
    fill(sections[1], MODERN_AIRCRAFT);
    this.root.querySelector('.career-btn')!.addEventListener('click', onCareer);

    container.appendChild(this.root);
  }

  dispose(): void {
    this.root.remove();
  }
}
