/**
 * Career screens for both eras: dynasty founding, service records,
 * mission briefings, and consequence debriefs. The same family line runs
 * through a century — the modern career inherits the WWI founder's legacy.
 */
import type { AircraftSpec, Era } from '../engine/flight/aircraft';
import { FOKKER_DR1, SOPWITH_CAMEL } from '../era/wwi/aircraft';
import { F16 } from '../era/modern/aircraft';
import {
  loadDynasty, saveDynasty, createDynasty, createPilot, activePilot,
  applyMissionOutcome, rankOf, formatDate, dynastyLegacy, wwiFounderAce,
  type Dynasty, type Side, type Consequences
} from '../career/dynasty';
import { LEGACY_UNLOCKS, availableLegacy, buyUnlock, hasUnlock } from '../career/legacyShop';
import { getCampaign, applyCampaignOutcome, warStatusLine, type Campaign } from '../career/campaign';
import { availableMounts, selectedMount, setMount } from '../game/mount';
import { generateMission, type Mission } from '../game/mission';
import type { SessionResult } from '../game/flightSession';

export function aircraftForSide(side: Side): AircraftSpec {
  if (side === 'nato') return F16;
  return side === 'entente' ? SOPWITH_CAMEL : FOKKER_DR1;
}

export class CareerUI {
  private root: HTMLElement;
  private dynasty: Dynasty | null;
  private pendingMission: Mission | null = null;

  constructor(
    container: HTMLElement,
    private era: Era,
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
    const p = d ? activePilot(d, this.era) : null;
    if (!d || !p) { this.showHome(); return; }

    // A crash isn't always fatal in career terms: fate decides.
    let survived = result.survived;
    let fateLine = '';
    if (!survived && Math.random() < 0.4) {
      survived = true;
      fateLine = this.era === 'wwi'
        ? 'Pulled from the wreckage alive — bruised, lucky, and flying again within the week.'
        : 'Good chute. Combat search and rescue had you back on base by nightfall.';
    }

    const cons: Consequences = applyMissionOutcome(d, p, {
      victories: result.kills,
      survived,
      missionComplete: result.missionComplete === true
    });

    // The war moves whether you made it back or not.
    const camp = getCampaign(this.era, p.side);
    const delta = applyCampaignOutcome(camp, {
      missionComplete: result.missionComplete === true,
      playerPlaneLost: !result.survived,
      wingmanName: mission.wingman?.name ?? null,
      wingmanKills: result.wingmanKills,
      wingmanLost: result.wingmanLost,
      aceKilled: result.aceKilled
    });

    // Downing their champion is a headline and hard currency.
    if (mission.ace && result.aceKilled) {
      p.legacy += 25;
      saveDynasty(d);
    }
    // A textbook landing back home is worth something too.
    if (result.landed && result.missionComplete) {
      p.legacy += 5;
      saveDynasty(d);
    }

    const lines: string[] = [];
    lines.push(result.missionComplete ? 'Mission accomplished.' :
      survived ? 'Mission failed.' : this.era === 'wwi' ? 'The patrol did not return.' : 'Aircraft lost, pilot with it.');
    if (result.kills > 0) lines.push(`${result.kills} ${result.kills === 1 ? 'victory' : 'victories'} confirmed.`);
    if (result.landed && result.missionComplete) {
      lines.push('Wheels down on the home strip, airframe intact. +5 legacy.');
    }
    if (fateLine) lines.push(fateLine);
    if (mission.wingman && result.wingmanKills > 0) {
      lines.push(`${mission.wingman.name} claimed ${result.wingmanKills} — buy him a drink.`);
    }
    if (mission.wingman && delta.wingmanFate === 'kia') {
      lines.push(`${mission.wingman.name} did not come back. His bunk is empty tonight.`);
    } else if (mission.wingman && delta.wingmanFate === 'down') {
      lines.push(`${mission.wingman.name} went down but walked away. He'll fly again.`);
    }
    if (mission.ace && result.aceKilled) {
      lines.push(`${mission.ace.name} — ${mission.ace.kills} victories — will never fly again. ` +
        `The whole front knows by nightfall. +25 legacy.`);
    } else if (mission.ace && !result.aceKilled) {
      lines.push(`${mission.ace.name} slipped away. His score keeps growing.`);
    }
    if (delta.newAce) lines.push(`Word from across the lines: a new champion rises — ${delta.newAce}.`);
    if (delta.replacement) lines.push(`A replacement pilot joined the squadron: ${delta.replacement}.`);
    lines.push(`The front ${delta.frontDelta >= 0 ? 'moved our way' : 'slipped'} (${delta.frontDelta >= 0 ? '+' : ''}${delta.frontDelta}). ${warStatusLine(camp)}`);
    for (const m of cons.newMedals) lines.push(`Awarded the ${m.name}.`);
    if (cons.promotedTo) lines.push(`Promoted to ${cons.promotedTo}.`);
    if (cons.becameAce) lines.push(`${p.firstName} ${d.surname} is now an ACE.`);
    if (cons.kia) lines.push(`${rankOf(p)} ${p.firstName} ${d.surname} — killed in action, ${formatDate(p.dateISO)}. The line endures.`);

    // War's end: banner + legacy bonus, and the theater resets fresh.
    let warBanner = '';
    if (delta.ended === 'won') {
      p.legacy += 50;
      saveDynasty(d);
      warBanner = `<div class="war-end won">CAMPAIGN VICTORY — the ${this.era === 'wwi' ? 'front' : 'theater'} is ours. +50 legacy.</div>`;
    } else if (delta.ended === 'lost') {
      warBanner = `<div class="war-end lost">CAMPAIGN LOST — ${camp.aircraft <= 0 ? 'the squadron has no aircraft left to fly' : 'the front collapsed'}. A new war begins.</div>`;
    }

    this.root.innerHTML = `
      <h2 class="career-h">${mission.title}</h2>
      ${warBanner}
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
    const p = d ? activePilot(d, this.era) : null;
    if (!d || !p) { this.showCreation(!d); return; }

    const medals = p.medals.length
      ? p.medals.map(m => `<span class="medal">${m.name}</span>`).join('')
      : '<span class="medal none">No decorations yet</span>';
    const fallen = d.pilots.filter(x => x.status === 'kia');
    const history = fallen.length
      ? `<div class="fallen">In memoriam: ${fallen.map(x =>
          `${x.firstName} ${d.surname} (${x.era === 'wwi' ? '1917' : '2026'}, ${x.victories} victories)`).join(' · ')}</div>`
      : '';

    // The bridge across the century
    const ace = wwiFounderAce(d);
    const heritage = this.era === 'modern' && ace
      ? `<div class="heritage">Heritage: ${ace.firstName} ${d.surname}, ${ace.victories} victories over the
         Western Front. Your Viper wears the family's red tail.</div>`
      : '';

    const warPanel = this.buildWarPanel(getCampaign(this.era, p.side));

    this.root.innerHTML = `
      <h2 class="career-h">${d.surname.toUpperCase()} DYNASTY · ${this.era === 'wwi' ? '1917' : '2026'}</h2>
      ${warPanel}
      <div class="pilot-card">
        <div class="pilot-name">${rankOf(p)} ${p.firstName} ${d.surname}</div>
        <div class="pilot-sub">${p.squadron} · ${formatDate(p.dateISO)} · Generation ${p.generation}</div>
        <div class="pilot-stats">
          <span><b>${p.victories}</b> victories${p.victories >= 5 ? ' — ACE' : ''}</span>
          <span><b>${p.sorties}</b> sorties</span>
          <span><b>${dynastyLegacy(d)}</b> dynasty legacy</span>
        </div>
        <div class="pilot-medals">${medals}</div>
      </div>
      ${heritage}
      ${history}
      <div class="career-actions">
        <button data-act="fly" class="primary">FLY NEXT MISSION</button>
        <button data-act="shop">LEGACY · ${availableLegacy(d)} PTS</button>
        <button data-act="exit">MAIN MENU</button>
      </div>`;
    this.bind();
  }

  /** The war around you: front-line meter, squadron roster, aircraft pool. */
  private buildWarPanel(c: Campaign): string {
    const pct = (c.front + 100) / 2; // -100..100 -> 0..100
    const roster = c.roster.map(pl =>
      `<span class="roster-pilot ${pl.status === 'kia' ? 'kia' : ''}">${pl.name}${pl.kills > 0 ? ` (${pl.kills})` : ''}</span>`
    ).join('');
    const aceLine = c.ace.alive
      ? `<div class="ace-line">Their champion: <b>${c.ace.name}</b> — ${c.ace.kills} kills and counting.</div>`
      : `<div class="ace-line fallen">Their champion has fallen. The enemy flies leaderless — for now.</div>`;
    const trophies = c.deadAces.length
      ? `<div class="ace-trophies">Aces downed: ${c.deadAces.join(' · ')}</div>`
      : '';
    return `
      <div class="war-panel">
        <div class="war-line">${warStatusLine(c)}</div>
        ${aceLine}
        ${trophies}
        <div class="front-bar"><div class="front-fill" style="width:${pct}%"></div><div class="front-mid"></div></div>
        <div class="war-meta">
          <span>DEFEAT</span>
          <span>${c.aircraft} aircraft · mission ${c.missionsFlown + 1}</span>
          <span>VICTORY</span>
        </div>
        <div class="roster">${roster}</div>
      </div>`;
  }

  /** The Legacy Shop: spend the family's shared points on permanent perks. */
  private showShop(): void {
    const d = this.dynasty!;
    const avail = availableLegacy(d);
    const rows = LEGACY_UNLOCKS.map(u => {
      const owned = hasUnlock(d, u.id);
      const affordable = avail >= u.cost;
      const eraTag = u.era === 'modern' ? '2026' : u.era === 'wwi' ? '1917' : '1917 + 2026';
      const action = owned
        ? '<span class="shop-owned">OWNED</span>'
        : `<button data-buy="${u.id}" ${affordable ? '' : 'disabled'}>${u.cost} PTS</button>`;
      return `
        <div class="shop-item ${owned ? 'owned' : ''}">
          <div class="shop-info">
            <div class="shop-name">${u.name} <small>· ${eraTag}</small></div>
            <div class="shop-desc">${u.desc}</div>
          </div>
          <div class="shop-buy">${action}</div>
        </div>`;
    }).join('');

    this.root.innerHTML = `
      <h2 class="career-h">THE FAMILY LEGACY</h2>
      <p class="career-sub">Every victory and every mission flown by the ${d.surname} line earns legacy.
        Spend it on advantages that pass down the generations — both wars, forever.</p>
      <div class="pilot-stats shop-balance"><span><b>${avail}</b> legacy available</span></div>
      <div class="shop-list">${rows}</div>
      <div class="career-actions"><button data-act="home">BACK</button></div>`;

    this.root.querySelectorAll<HTMLButtonElement>('button[data-buy]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (buyUnlock(d, btn.dataset.buy!)) this.showShop();
      });
    });
    this.bind();
  }

  private showCreation(newDynasty: boolean): void {
    const d = this.dynasty;
    const modern = this.era === 'modern';
    const ace = d ? wwiFounderAce(d) : null;

    const intro = newDynasty
      ? (modern
        ? 'Every dynasty starts somewhere. Yours starts in a Viper, 2026.'
        : 'One family of aviators, a century of war. It begins over the trenches, 1917.')
      : (modern
        ? (ace
          ? `A century after ${ace.firstName} ${d!.surname} ruled the skies over the trenches, the family name reports to a fighter squadron once more.`
          : `The ${d!.surname} line answers the call again — this time at Mach 1.`)
        : `The ${d!.surname} family sends another of its own to the front.`);

    const sidePick = modern
      ? `<button data-side="nato" class="side-btn">REPORT FOR DUTY<br><small>F-16C Viper · 555th FS</small></button>`
      : `<button data-side="entente" class="side-btn">ROYAL FLYING CORPS<br><small>Sopwith Camel</small></button>
         <button data-side="central" class="side-btn">LUFTSTREITKRÄFTE<br><small>Fokker Dr.I</small></button>`;

    this.root.innerHTML = `
      <h2 class="career-h">${newDynasty ? 'FOUND YOUR DYNASTY' : 'THE LINE CONTINUES'}</h2>
      <p class="career-sub">${intro}</p>
      <div class="create-form">
        ${newDynasty ? '<input id="cf-surname" placeholder="Family name" maxlength="16" autocomplete="off">' : ''}
        <input id="cf-first" placeholder="Pilot first name" maxlength="16" autocomplete="off">
        <div class="side-pick">${sidePick}</div>
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
        createPilot(this.dynasty!, first, side, this.era);
        saveDynasty(this.dynasty!);
        this.showHome();
      });
    });
    this.bind();
  }

  private showBriefing(): void {
    const d = this.dynasty!;
    const p = activePilot(d, this.era)!;
    this.pendingMission = generateMission(p, d, getCampaign(this.era, p.side));
    this.renderBriefing();
  }

  private renderBriefing(): void {
    const d = this.dynasty!;
    const p = activePilot(d, this.era)!;
    const mission = this.pendingMission!;
    const wingLine = mission.wingman
      ? `<p class="briefing-meta">On your wing: ${mission.wingman.name}${mission.wingman.kills > 0 ? ` — ${mission.wingman.kills} kills` : ' — first tour'}.</p>`
      : '';
    const mounts = availableMounts(p.side);
    const current = selectedMount(p.side);
    const mountRow = mounts.length > 1
      ? `<div class="mount-pick">${mounts.map(s =>
          `<button data-mount="${s.id}" class="${s.id === current.id ? 'active' : ''}">${s.name}</button>`).join('')}</div>`
      : '';
    this.root.innerHTML = `
      <h2 class="career-h">${mission.title}</h2>
      <div class="briefing">
        <p>${mission.briefing}</p>
        ${wingLine}
        <p class="briefing-meta">${rankOf(p)} ${p.firstName} ${d.surname} · ${p.squadron} ·
          mount: ${current.name}</p>
      </div>
      ${mountRow}
      <div class="career-actions">
        <button data-act="takeoff" class="primary">TAKE OFF</button>
        <button data-act="home">STAND DOWN</button>
      </div>`;
    this.root.querySelectorAll<HTMLButtonElement>('button[data-mount]').forEach(btn => {
      btn.addEventListener('click', () => {
        setMount(p.side, btn.dataset.mount!);
        this.renderBriefing();
      });
    });
    this.bind();
  }

  private bind(): void {
    this.root.querySelectorAll<HTMLButtonElement>('button[data-act]').forEach(btn => {
      btn.addEventListener('click', () => {
        const act = btn.dataset.act;
        if (act === 'exit') this.opts.onExit();
        else if (act === 'home') this.showHome();
        else if (act === 'shop') this.showShop();
        else if (act === 'fly') this.showBriefing();
        else if (act === 'takeoff' && this.pendingMission) {
          const p = activePilot(this.dynasty!, this.era)!;
          this.opts.onFly(this.pendingMission, selectedMount(p.side));
        }
      });
    });
  }

  dispose(): void {
    this.root.remove();
  }
}
