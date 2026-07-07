/**
 * WWI career screens: dynasty founding, the pilot's service record,
 * mission briefing, and post-flight debrief with consequences.
 */
import type { AircraftSpec } from '../engine/flight/aircraft';
import { FOKKER_DR1, SOPWITH_CAMEL } from '../era/wwi/aircraft';
import {
  loadDynasty, saveDynasty, createDynasty, createPilot, activePilot,
  applyMissionOutcome, rankOf, formatDate,
  type Dynasty, type Side, type Consequences
} from '../career/dynasty';
import { generateMission, type Mission } from '../game/mission';
import type { SessionResult } from '../game/flightSession';

export function aircraftForSide(side: Side): AircraftSpec {
  return side === 'entente' ? SOPWITH_CAMEL : FOKKER_DR1;
}

export class CareerUI {
  private root: HTMLElement;
  private dynasty: Dynasty | null;
  private pendingMission: Mission | null = null;

  constructor(
    container: HTMLElement,
    private opts: {
      onFly: (mission: Mission, spec: AircraftSpec) => void;
      onExit: () => void;
    }
  ) {
    this.root = document.createElement('div');
    this.root.className = 'menu career';
    container.appendChild(this.root);
    this.dynasty = loadDynasty();
    this.showHome();
  }

  /** Entry point after a mission ends. */
  showDebrief(mission: Mission, result: SessionResult): void {
    const d = this.dynasty;
    const p = d ? activePilot(d) : null;
    if (!d || !p) { this.showHome(); return; }

    // A crash isn't always fatal in career terms: fate decides.
    let survived = result.survived;
    let fateLine = '';
    if (!survived && Math.random() < 0.4) {
      survived = true;
      fateLine = 'Pulled from the wreckage alive — bruised, lucky, and flying again within the week.';
    }

    const cons: Consequences = applyMissionOutcome(d, p, {
      victories: result.kills,
      survived,
      missionComplete: result.missionComplete === true
    });

    const lines: string[] = [];
    lines.push(result.missionComplete ? 'Mission accomplished.' :
      survived ? 'Mission failed.' : 'The patrol did not return.');
    if (result.kills > 0) lines.push(`${result.kills} ${result.kills === 1 ? 'victory' : 'victories'} confirmed.`);
    if (fateLine) lines.push(fateLine);
    for (const m of cons.newMedals) lines.push(`Awarded the ${m.name}.`);
    if (cons.promotedTo) lines.push(`Promoted to ${cons.promotedTo}.`);
    if (cons.becameAce) lines.push(`${p.firstName} ${d.surname} is now an ACE.`);
    if (cons.kia) lines.push(`${rankOf(p)} ${p.firstName} ${d.surname} — killed in action, ${formatDate(p.dateISO)}. The line endures.`);

    this.root.innerHTML = `
      <h2 class="career-h">${mission.title}</h2>
      <div class="debrief ${cons.kia ? 'kia' : result.missionComplete ? 'ok' : ''}">
        ${lines.map(l => `<p>${l}</p>`).join('')}
      </div>
      <div class="career-actions">
        <button data-act="home">${cons.kia ? 'THE NEXT OF KIN' : 'CONTINUE'}</button>
      </div>`;
    this.bind();
  }

  private showHome(): void {
    const d = this.dynasty;
    const p = d ? activePilot(d) : null;
    if (!d || !p) { this.showCreation(!d); return; }

    const medals = p.medals.length
      ? p.medals.map(m => `<span class="medal">${m.name}</span>`).join('')
      : '<span class="medal none">No decorations yet</span>';
    const fallen = d.pilots.filter(x => x.status === 'kia');
    const history = fallen.length
      ? `<div class="fallen">In memoriam: ${fallen.map(x =>
          `${x.firstName} ${d.surname} (${x.victories} victories)`).join(' · ')}</div>`
      : '';

    this.root.innerHTML = `
      <h2 class="career-h">${d.surname.toUpperCase()} DYNASTY</h2>
      <div class="pilot-card">
        <div class="pilot-name">${rankOf(p)} ${p.firstName} ${d.surname}</div>
        <div class="pilot-sub">${p.squadron} · ${formatDate(p.dateISO)} · Generation ${p.generation}</div>
        <div class="pilot-stats">
          <span><b>${p.victories}</b> victories${p.victories >= 5 ? ' — ACE' : ''}</span>
          <span><b>${p.sorties}</b> sorties</span>
          <span><b>${p.legacy}</b> legacy</span>
        </div>
        <div class="pilot-medals">${medals}</div>
      </div>
      ${history}
      <div class="career-actions">
        <button data-act="fly" class="primary">FLY NEXT MISSION</button>
        <button data-act="exit">MAIN MENU</button>
      </div>`;
    this.bind();
  }

  private showCreation(newDynasty: boolean): void {
    const d = this.dynasty;
    this.root.innerHTML = `
      <h2 class="career-h">${newDynasty ? 'FOUND YOUR DYNASTY' : 'THE LINE CONTINUES'}</h2>
      <p class="career-sub">${newDynasty
        ? 'One family of aviators, a century of war. It begins over the trenches, 1917.'
        : `The ${d!.surname} family sends another of its own to the front.`}</p>
      <div class="create-form">
        ${newDynasty ? '<input id="cf-surname" placeholder="Family name" maxlength="16" autocomplete="off">' : ''}
        <input id="cf-first" placeholder="Pilot first name" maxlength="16" autocomplete="off">
        <div class="side-pick">
          <button data-side="entente" class="side-btn">ROYAL FLYING CORPS<br><small>Sopwith Camel</small></button>
          <button data-side="central" class="side-btn">LUFTSTREITKRÄFTE<br><small>Fokker Dr.I</small></button>
        </div>
      </div>
      <div class="career-actions"><button data-act="exit">BACK</button></div>`;

    this.root.querySelectorAll<HTMLButtonElement>('.side-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const side = btn.dataset.side as Side;
        const first = (this.root.querySelector('#cf-first') as HTMLInputElement)?.value.trim() || 'Jack';
        if (newDynasty) {
          const surname = (this.root.querySelector('#cf-surname') as HTMLInputElement)?.value.trim() || 'Moore';
          this.dynasty = createDynasty(surname);
        }
        createPilot(this.dynasty!, first, side);
        saveDynasty(this.dynasty!);
        this.showHome();
      });
    });
    this.bind();
  }

  private showBriefing(): void {
    const d = this.dynasty!;
    const p = activePilot(d)!;
    const mission = generateMission(p);
    this.pendingMission = mission;
    this.root.innerHTML = `
      <h2 class="career-h">${mission.title}</h2>
      <div class="briefing">
        <p>${mission.briefing}</p>
        <p class="briefing-meta">${rankOf(p)} ${p.firstName} ${d.surname} · ${p.squadron} ·
          mount: ${aircraftForSide(p.side).name}</p>
      </div>
      <div class="career-actions">
        <button data-act="takeoff" class="primary">TAKE OFF</button>
        <button data-act="home">STAND DOWN</button>
      </div>`;
    this.bind();
  }

  private bind(): void {
    this.root.querySelectorAll<HTMLButtonElement>('button[data-act]').forEach(btn => {
      btn.addEventListener('click', () => {
        const act = btn.dataset.act;
        if (act === 'exit') this.opts.onExit();
        else if (act === 'home') this.showHome();
        else if (act === 'fly') this.showBriefing();
        else if (act === 'takeoff' && this.pendingMission) {
          const p = activePilot(this.dynasty!)!;
          this.opts.onFly(this.pendingMission, aircraftForSide(p.side));
        }
      });
    });
  }

  dispose(): void {
    this.root.remove();
  }
}
