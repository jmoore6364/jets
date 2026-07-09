/**
 * Main menu: pick your century. Career buttons are visible but locked —
 * they document the roadmap right on the title screen.
 */
import type { AircraftSpec } from '../engine/flight/aircraft';
import { WWI_AIRCRAFT } from '../era/wwi/aircraft';
import { MODERN_AIRCRAFT } from '../era/modern/aircraft';
import { isTouchDevice } from './touch';
import { getHandling, setHandling } from '../game/handling';
import { getDifficulty, setDifficulty, type Difficulty } from '../game/difficulty';

export class MainMenu {
  private root: HTMLElement;

  constructor(container: HTMLElement, onSelect: (spec: AircraftSpec) => void, onCareer: (era: 'wwi' | 'modern') => void) {
    this.root = document.createElement('div');
    this.root.className = 'menu';
    this.root.innerHTML = `
      <h1>PROJECT&nbsp;JETS</h1>
      <p class="tagline">A CENTURY OF AIR COMBAT — ONE BLOODLINE</p>
      <div class="eras">
        <section class="era era-wwi">
          <h2>1917 · THE GREAT WAR</h2>
          <div class="planes"></div>
          <button class="career-btn" data-era="wwi">CAREER — THE DYNASTY BEGINS</button>
        </section>
        <section class="era era-modern">
          <h2>2026 · MODERN ERA</h2>
          <div class="planes"></div>
          <button class="career-btn" data-era="modern">CAREER — THE LINE CONTINUES</button>
        </section>
      </div>
      <div class="settings-row">
        <button class="handling-btn"></button>
        <button class="handling-btn difficulty-btn"></button>
      </div>
      <p class="controls-hint">${isTouchDevice()
        ? 'Right thumb: stick · Left edge: throttle · FIRE / AB / BRK buttons · ☰ menu · a bandit patrols each map'
        : 'W/S pitch · A/D roll · Q/E rudder · Space fire · F weapon · T lock · X flare · G wingman orders · Shift/Ctrl throttle · Tab afterburner · B brake/blip · P pause · M mouse-fly · V sound · C camera · R respawn · Esc menu'
      }</p>
      <p class="build-stamp">build ${typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : 'dev'}</p>`;

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
    this.root.querySelectorAll<HTMLButtonElement>('.career-btn').forEach(btn => {
      btn.addEventListener('click', () => onCareer(btn.dataset.era as 'wwi' | 'modern'));
    });

    const handlingBtn = this.root.querySelector('.handling-btn') as HTMLButtonElement;
    const renderHandling = () => {
      const h = getHandling();
      handlingBtn.innerHTML = h === 'arcade'
        ? 'HANDLING: <b>ARCADE</b> — direct control, no hidden assists <small>(click for SIM)</small>'
        : 'HANDLING: <b>SIM</b> — full aerodynamics + FCS <small>(click for ARCADE)</small>';
    };
    renderHandling();
    handlingBtn.addEventListener('click', () => {
      setHandling(getHandling() === 'arcade' ? 'sim' : 'arcade');
      renderHandling();
    });

    const diffBtn = this.root.querySelector('.difficulty-btn') as HTMLButtonElement;
    const DIFF_LABEL: Record<Difficulty, string> = {
      rookie: 'ENEMIES: <b>ROOKIE</b> — forgiving foes <small>(click to change)</small>',
      pilot: 'ENEMIES: <b>PILOT</b> — a fair fight <small>(click to change)</small>',
      ace: 'ENEMIES: <b>ACE</b> — they want you dead <small>(click to change)</small>'
    };
    const renderDiff = () => { diffBtn.innerHTML = DIFF_LABEL[getDifficulty()]; };
    renderDiff();
    diffBtn.addEventListener('click', () => {
      const order: Difficulty[] = ['rookie', 'pilot', 'ace'];
      setDifficulty(order[(order.indexOf(getDifficulty()) + 1) % order.length]);
      renderDiff();
    });

    container.appendChild(this.root);
  }

  dispose(): void {
    this.root.remove();
  }
}
