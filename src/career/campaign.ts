/**
 * The Campaign — a persistent war wrapped around the missions.
 *
 * Each era runs its own theater. A front-line meter tracks how the war is
 * going (-100 = your side collapses, +100 = victory); every mission flown
 * moves it. Your squadron is real: named pilots who score, die, and get
 * replaced, and a finite pool of aircraft. Lose too much and the war is
 * lost even if you personally fly like an ace. Persisted in localStorage
 * next to the dynasty.
 */
import type { Era } from '../engine/flight/aircraft';
import type { Side } from './dynasty';

export interface SquadronPilot {
  name: string;
  skill: number;
  kills: number;
  status: 'active' | 'kia';
}

/** The enemy's champion. His score grows until somebody stops him. */
export interface AceRecord {
  name: string;
  kills: number;
  alive: boolean;
  /** Missions since he fell — a successor rises after two. */
  sinceDeath: number;
}

export interface Campaign {
  era: Era;
  side: Side;
  /** War progress: -100 = defeat, +100 = victory. */
  front: number;
  missionsFlown: number;
  /** Squadron airframes. Runs dry, war's lost — planes are the war. */
  aircraft: number;
  roster: SquadronPilot[];
  ace: AceRecord;
  /** Fallen enemy champions — trophies, and no name rises twice. */
  deadAces: string[];
  over: 'won' | 'lost' | null;
}

const WINGMAN_NAMES: Record<Side, string[]> = {
  entente: ['Willoughby', 'Hart', 'Baker', 'Chapman', 'Ellis', 'Pryce', 'Whitmore', 'Dunn', 'Cole', 'Farrell'],
  central: ['Vogel', 'Brandt', 'Keller', 'Sachs', 'Lehmann', 'Falk', 'Winter', 'Roth', 'Krause', 'Adler'],
  nato: ['Duke', 'Static', 'Torch', 'Gypsy', 'Havoc', 'Reaper', 'Frost', 'Mongoose', 'Saber', 'Tex']
};

/** Enemy ace name pools — who you fight, not who you are. */
const ACE_NAMES: Record<Side, string[]> = {
  // Facing the entente player: the German champions.
  entente: ['Manfred von Richthofen', 'Werner Voss', 'Ernst Udet', 'Lothar von Richthofen', 'Kurt Wolff'],
  // Facing the central player: the Allied champions.
  central: ['Albert Ball', 'James McCudden', 'Mick Mannock', 'Billy Bishop', 'Georges Guynemer'],
  // Facing NATO: the other side's squadron leaders.
  nato: ['Col. V. "DRAKON" Baranov', 'Maj. I. "WRAITH" Sorokin', 'Col. A. "KHAN" Nazarov', 'Maj. R. "VULTURE" Petrov', 'Col. D. "TEMPEST" Volkov']
};

function nextAce(side: Side, existing: string[], rng: () => number, era: Era): AceRecord {
  const pool = ACE_NAMES[side].filter(n => !existing.includes(n));
  const name = pool.length ? pool[Math.floor(rng() * pool.length)] : `The New ${era === 'wwi' ? 'Baron' : 'Colonel'}`;
  return {
    name,
    kills: era === 'wwi' ? 8 + Math.floor(rng() * 18) : 2 + Math.floor(rng() * 5),
    alive: true,
    sinceDeath: 0
  };
}

const MAX_AIRCRAFT = 12;
const KEY = 'jets.campaign.v1';

function loadAll(): Partial<Record<Era, Campaign>> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Partial<Record<Era, Campaign>>) : {};
  } catch {
    return {};
  }
}

export function saveCampaign(c: Campaign): void {
  try {
    const all = loadAll();
    all[c.era] = c;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* private browsing */
  }
}

function freshRoster(side: Side, rng: () => number): SquadronPilot[] {
  const names = [...WINGMAN_NAMES[side]];
  const roster: SquadronPilot[] = [];
  for (let i = 0; i < 6; i++) {
    const pick = Math.floor(rng() * names.length);
    roster.push({ name: names.splice(pick, 1)[0], skill: 0.55 + rng() * 0.3, kills: 0, status: 'active' });
  }
  return roster;
}

export function createCampaign(era: Era, side: Side, rng: () => number = Math.random): Campaign {
  return {
    era, side, front: 0, missionsFlown: 0, aircraft: 10,
    roster: freshRoster(side, rng),
    ace: nextAce(side, [], rng, era),
    deadAces: [],
    over: null
  };
}

/** The era's running war, or a fresh one if none / side changed / war over. */
export function getCampaign(era: Era, side: Side): Campaign {
  const existing = loadAll()[era];
  if (existing && existing.side === side && !existing.over) {
    // Saves from before the ace system get a champion assigned.
    if (!existing.ace) {
      existing.ace = nextAce(side, [], Math.random, era);
      existing.deadAces = existing.deadAces ?? [];
      saveCampaign(existing);
    }
    return existing;
  }
  const c = createCampaign(era, side);
  saveCampaign(c);
  return c;
}

/** Pick who flies your wing today. Null if the squadron is out of pilots. */
export function pickWingman(c: Campaign, rng: () => number = Math.random): SquadronPilot | null {
  const active = c.roster.filter(p => p.status === 'active');
  if (!active.length) return null;
  return active[Math.floor(rng() * active.length)];
}

export interface CampaignOutcome {
  missionComplete: boolean;
  /** Player's airframe written off (shot down or crashed). */
  playerPlaneLost: boolean;
  wingmanName: string | null;
  wingmanKills: number;
  wingmanLost: boolean;
  wingman2Name?: string | null;
  wingman2Kills?: number;
  wingman2Lost?: boolean;
  /** The enemy ace flew this mission and did not fly home. */
  aceKilled?: boolean;
}

export interface CampaignDelta {
  frontDelta: number;
  /** null = no wingman drama; 'kia' | 'down' (survived the crash). */
  wingmanFate: 'kia' | 'down' | null;
  wingman2Fate: 'kia' | 'down' | null;
  /** Name of the replacement pilot who joined, if any. */
  replacement: string | null;
  /** A new enemy champion rose this mission. */
  newAce: string | null;
  ended: 'won' | 'lost' | null;
}

export function applyCampaignOutcome(c: Campaign, o: CampaignOutcome, rng: () => number = Math.random): CampaignDelta {
  const delta: CampaignDelta = { frontDelta: 0, wingmanFate: null, wingman2Fate: null, replacement: null, newAce: null, ended: null };
  if (c.over) return delta;

  // The enemy champion: falls today, or keeps scoring off-screen.
  if (c.ace.alive && o.aceKilled) {
    c.ace.alive = false;
    c.ace.sinceDeath = 0;
    c.deadAces.push(c.ace.name);
    delta.frontDelta += 4; // his death is worth ground
  } else if (c.ace.alive) {
    c.ace.kills += rng() < 0.5 ? 1 : 0;
  } else if (++c.ace.sinceDeath >= 2) {
    c.ace = nextAce(c.side, c.deadAces, rng, c.era);
    delta.newAce = c.ace.name;
  }

  // The front moves on results, with the rest of the war drifting around you.
  // (An ace killed above already contributed +4.)
  const drift = (rng() - 0.45) * 4;
  const swing = o.missionComplete ? 7 + rng() * 5 : -(5 + rng() * 4);
  delta.frontDelta += Math.round(swing + drift);
  c.front = Math.max(-100, Math.min(100, c.front + delta.frontDelta));

  // Airframes: losses hurt, the depot trickles replacements.
  if (o.playerPlaneLost) c.aircraft--;
  if (o.wingmanLost) c.aircraft--;
  if (o.wingman2Lost) c.aircraft--;
  c.missionsFlown++;
  if (c.missionsFlown % 2 === 0 && c.aircraft < MAX_AIRCRAFT) c.aircraft++;

  // Wingman fates and scores — both slots, same rules.
  const wingmen: Array<{ name: string | null; kills: number; lost: boolean; fate: 'wingmanFate' | 'wingman2Fate' }> = [
    { name: o.wingmanName, kills: o.wingmanKills, lost: o.wingmanLost, fate: 'wingmanFate' },
    { name: o.wingman2Name ?? null, kills: o.wingman2Kills ?? 0, lost: o.wingman2Lost ?? false, fate: 'wingman2Fate' }
  ];
  for (const w of wingmen) {
    const wm = w.name ? c.roster.find(p => p.name === w.name && p.status === 'active') : null;
    if (!wm) continue;
    wm.kills += w.kills;
    if (w.lost) {
      if (rng() < 0.55) {
        wm.status = 'kia';
        delta[w.fate] = 'kia';
      } else {
        delta[w.fate] = 'down';
      }
    }
  }

  // Replacements keep the roster at fighting strength.
  const active = c.roster.filter(p => p.status === 'active');
  if (active.length < 4) {
    const used = new Set(c.roster.map(p => p.name));
    const pool = WINGMAN_NAMES[c.side].filter(n => !used.has(n));
    const name = pool.length ? pool[Math.floor(rng() * pool.length)] : `Rookie ${c.missionsFlown}`;
    c.roster.push({ name, skill: 0.5 + rng() * 0.2, kills: 0, status: 'active' });
    delta.replacement = name;
  }

  if (c.front >= 100) c.over = 'won';
  else if (c.front <= -100 || c.aircraft <= 0) c.over = 'lost';
  delta.ended = c.over;

  saveCampaign(c);
  return delta;
}

/** One-line war report for briefings and the career screen. */
export function warStatusLine(c: Campaign): string {
  const f = c.front;
  if (f >= 70) return 'The enemy is in full retreat. One more push.';
  if (f >= 35) return 'The front is moving our way. Keep the pressure on.';
  if (f >= 10) return 'We hold a slight edge, sector by sector.';
  if (f > -10) return 'The war is deadlocked. Every sortie counts.';
  if (f > -35) return 'We are losing ground. The squadron feels it.';
  if (f > -70) return 'The front is buckling. It gets worse every day.';
  return 'Collapse is near. Fly like everything depends on it — it does.';
}
