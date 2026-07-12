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
  applyMissionOutcome, rankOf, formatDate, dynastyLegacy, wwiFounderAce, logChronicle,
  type Dynasty, type Side, type Consequences
} from '../career/dynasty';
import { LEGACY_UNLOCKS, availableLegacy, buyUnlock, hasUnlock } from '../career/legacyShop';
import { getCampaign, applyCampaignOutcome, warStatusLine, type Campaign } from '../career/campaign';
import { availableMounts, selectedMount, setMount } from '../game/mount';
import { exportSave, importSave } from '../career/backup';
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
      wingman2Name: mission.wingman2?.name ?? null,
      wingman2Kills: result.wingman2Kills,
      wingman2Lost: result.wingman2Lost,
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
    for (const [wm, kills, fate] of [
      [mission.wingman, result.wingmanKills, delta.wingmanFate],
      [mission.wingman2, result.wingman2Kills, delta.wingman2Fate]
    ] as const) {
      if (!wm) continue;
      if (kills > 0) lines.push(`${wm.name} claimed ${kills} — buy him a drink.`);
      if (fate === 'kia') lines.push(`${wm.name} did not come back. His bunk is empty tonight.`);
      else if (fate === 'down') lines.push(`${wm.name} went down but walked away. He'll fly again.`);
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

    // The family history gets a line.
    const notes: string[] = [];
    if (mission.ace && result.aceKilled) notes.push(`Downed ${mission.ace.name}`);
    for (const md of cons.newMedals) notes.push(`Awarded the ${md.name}`);
    if (cons.promotedTo) notes.push(`Promoted to ${cons.promotedTo}`);
    if (delta.ended === 'won') notes.push('CAMPAIGN VICTORY');
    else if (delta.ended === 'lost') notes.push('The campaign was lost');
    if (delta.ended === 'won') d.warsWon = (d.warsWon ?? 0) + 1;
    logChronicle(d, {
      dateISO: p.dateISO,
      pilotId: p.id,
      era: this.era,
      title: mission.title,
      kills: result.kills,
      outcome: cons.kia ? 'kia' : result.missionComplete ? 'complete' : 'failed',
      note: notes.length ? notes.join(' · ') : undefined
    });

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
        <button data-act="chronicle">CHRONICLE</button>
        <button data-act="backup">SAVE CODE</button>
        <button data-act="exit">MAIN MENU</button>
      </div>`;
    this.bind();
    this.drawWarMap(getCampaign(this.era, p.side));
  }

  /** The theater, drawn: shaded sides, a wobbling front line, the war's places. */
  private drawWarMap(c: Campaign): void {
    const canvas = this.root.querySelector('.war-map') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const w = canvas.width, h = canvas.height;
    const wwi = this.era === 'wwi';

    // Ground
    ctx.fillStyle = wwi ? '#4a5236' : '#8a744e';
    ctx.fillRect(0, 0, w, h);
    // terrain speckle, deterministic
    for (let i = 0; i < 240; i++) {
      const x = ((i * 127.1) % 1) * 0 + ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1 * w;
      const y = ((Math.sin(i * 78.233) * 12543.123) % 1 + 1) % 1 * h;
      ctx.fillStyle = wwi ? 'rgba(30,36,20,0.35)' : 'rgba(60,48,30,0.3)';
      ctx.fillRect(x, y, 2.2, 2.2);
    }

    // Front line: +100 (victory) pushes it to the far left.
    const lineX = w * (0.5 - (c.front / 200) * 0.9);
    // Enemy side wash (left), friendly side wash (right)
    ctx.fillStyle = 'rgba(160,40,30,0.18)';
    ctx.fillRect(0, 0, lineX, h);
    ctx.fillStyle = wwi ? 'rgba(90,110,60,0.15)' : 'rgba(60,110,160,0.14)';
    ctx.fillRect(lineX, 0, w - lineX, h);

    // The line itself, wobbling like a real front
    ctx.strokeStyle = wwi ? '#e0d6b0' : '#ffd98a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let y = 0; y <= h; y += 6) {
      const x = lineX + Math.sin(y * 0.09 + c.missionsFlown) * 9 + Math.sin(y * 0.031) * 14;
      if (y === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    if (wwi) {
      // trench hatching either side of the line
      ctx.strokeStyle = 'rgba(30,30,24,0.5)';
      ctx.lineWidth = 1;
      for (const off of [-14, 14]) {
        ctx.beginPath();
        for (let y = 0; y <= h; y += 6) {
          const x = lineX + off + Math.sin(y * 0.09 + c.missionsFlown) * 9 + Math.sin(y * 0.031) * 14;
          if (y === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    // Sector names scattered on each side
    const sectors = wwi
      ? (c.side === 'central' ? ['Ypres', 'Messines', 'the Scarpe'] : ['Arras', 'Cambrai', 'Lens'])
      : ['Red Canyon', 'Sector Bravo', 'the Rift'];
    ctx.font = '10px Georgia, serif';
    ctx.fillStyle = 'rgba(240,226,196,0.55)';
    sectors.forEach((s, i) => {
      ctx.fillText(s, w * 0.12 + i * w * 0.3, h * (0.2 + (i % 2) * 0.55));
    });

    // Home plate, friendly edge
    ctx.fillStyle = '#b8e6a0';
    ctx.fillRect(w - 26, h / 2 - 3, 14, 6);
    ctx.font = '9px Consolas, monospace';
    ctx.fillText('HOME', w - 40, h / 2 + 16);

    // Their champion prowls the enemy side
    if (c.ace.alive) {
      ctx.fillStyle = '#ff8a70';
      ctx.font = '13px Georgia, serif';
      ctx.fillText('✠', Math.max(14, lineX * 0.35), h * 0.32);
      ctx.font = '9px Georgia, serif';
      ctx.fillText(c.ace.name.split(' ').pop() ?? '', Math.max(6, lineX * 0.35 - 12), h * 0.32 + 13);
    }
  }

  /** The war around you: front-line meter, squadron roster, aircraft pool. */
  private buildWarPanel(c: Campaign): string {
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
        <canvas class="war-map" width="520" height="190"></canvas>
        <div class="war-meta">
          <span>THEIR GROUND</span>
          <span>${c.aircraft} aircraft · mission ${c.missionsFlown + 1}</span>
          <span>OURS</span>
        </div>
        <div class="roster">${roster}</div>
      </div>`;
  }

  /** Backup codes: the dynasty packed into copyable text, and back. */
  private showBackup(): void {
    const code = exportSave();
    this.root.innerHTML = `
      <h2 class="career-h">DYNASTY SAVE CODE</h2>
      <p class="career-sub">Your whole family history lives in this browser. Copy this code somewhere
        safe — paste it back on any device to restore the dynasty, campaigns, and unlocks.</p>
      <textarea class="save-code" readonly>${code}</textarea>
      <div class="career-actions"><button data-act="copy-code" class="primary">COPY CODE</button></div>
      <p class="career-sub">Restore from a code:</p>
      <textarea class="save-code restore" placeholder="Paste a JETS save code here..."></textarea>
      <div class="save-msg"></div>
      <div class="career-actions">
        <button data-act="restore-code">RESTORE</button>
        <button data-act="home">BACK</button>
      </div>`;
    const msg = this.root.querySelector('.save-msg') as HTMLElement;
    this.root.querySelector('button[data-act="copy-code"]')?.addEventListener('click', () => {
      void navigator.clipboard?.writeText(code).catch(() => undefined);
      msg.textContent = 'Copied to clipboard.';
      msg.className = 'save-msg ok';
    });
    this.root.querySelector('button[data-act="restore-code"]')?.addEventListener('click', () => {
      const input = (this.root.querySelector('.save-code.restore') as HTMLTextAreaElement).value;
      const err = importSave(input);
      if (err) {
        msg.textContent = err;
        msg.className = 'save-msg bad';
      } else {
        this.dynasty = loadDynasty();
        msg.textContent = 'Restored. Welcome back.';
        msg.className = 'save-msg ok';
        setTimeout(() => this.showHome(), 900);
      }
    });
    this.bind();
  }

  /** The family history: every pilot, every sortie that made a line. */
  private showChronicle(): void {
    const d = this.dynasty!;
    const chron = d.chronicle ?? [];
    const acesDowned = chron.filter(e => e.note?.includes('Downed ')).length;
    const totalVict = d.pilots.reduce((s, p) => s + p.victories, 0);
    const totalSorties = d.pilots.reduce((s, p) => s + p.sorties, 0);

    const gens = [...d.pilots].reverse().map(p => {
      const entries = chron.filter(e => e.pilotId === p.id).slice(-10).reverse();
      const list = entries.map(e => `
        <div class="chron-entry ${e.outcome}">
          <span class="chron-date">${formatDate(e.dateISO)}</span>
          <span class="chron-title">${e.title}</span>
          ${e.kills > 0 ? `<span class="chron-kills">${e.kills} ✕</span>` : ''}
          ${e.note ? `<div class="chron-note">${e.note}</div>` : ''}
        </div>`).join('');
      const medals = p.medals.map(m => `<span class="medal">${m.name}</span>`).join('');
      return `
        <div class="chron-pilot ${p.status}">
          <div class="chron-head">
            <span>Generation ${p.generation} · ${rankOf(p)} ${p.firstName} ${d.surname} · ${p.era === 'wwi' ? '1917' : '2026'}</span>
            <span class="chron-stat">${p.victories} victories · ${p.sorties} sorties${p.status === 'kia' ? ' · ✝ fell in action' : p.status === 'active' ? ' · flying' : ''}</span>
          </div>
          ${medals ? `<div class="pilot-medals chron-medals">${medals}</div>` : ''}
          ${list || '<div class="chron-note none">No sorties recorded yet.</div>'}
        </div>`;
    }).join('');

    this.root.innerHTML = `
      <h2 class="career-h">THE ${d.surname.toUpperCase()} CHRONICLE</h2>
      <div class="pilot-stats chron-totals">
        <span><b>${totalVict}</b> family victories</span>
        <span><b>${totalSorties}</b> sorties flown</span>
        <span><b>${d.warsWon ?? 0}</b> wars won</span>
        <span><b>${acesDowned}</b> enemy aces downed</span>
      </div>
      <div class="chronicle">${gens || '<p class="career-sub">The book is empty. Go write it.</p>'}</div>
      <div class="career-actions"><button data-act="home">BACK</button></div>`;
    this.bind();
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
    const wingNames = [mission.wingman, mission.wingman2].filter(Boolean)
      .map(w => `${w!.name}${w!.kills > 0 ? ` (${w!.kills} kills)` : ''}`).join(' and ');
    const wingLine = wingNames
      ? `<p class="briefing-meta">On your wing: ${wingNames}.</p>`
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
        else if (act === 'chronicle') this.showChronicle();
        else if (act === 'backup') this.showBackup();
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
