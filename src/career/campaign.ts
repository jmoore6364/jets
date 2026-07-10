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

export interface Campaign {
  era: Era;
  side: Side;
  /** War progress: -100 = defeat, +100 = victory. */
  front: number;
  missionsFlown: number;
  /** Squadron airframes. Runs dry, war's lost — planes are the war. */
  aircraft: number;
  roster: SquadronPilot[];
  over: 'won' | 'lost' | null;
}

const WINGMAN_NAMES: Record<Side, string[]> = {
  entente: ['Willoughby', 'Hart', 'Baker', 'Chapman', 'Ellis', 'Pryce', 'Whitmore', 'Dunn', 'Cole', 'Farrell'],
  central: ['Vogel', 'Brandt', 'Keller', 'Sachs', 'Lehmann', 'Falk', 'Winter', 'Roth', 'Krause', 'Adler'],
  nato: ['Duke', 'Static', 'Torch', 'Gypsy', 'Havoc', 'Reaper', 'Frost', 'Mongoose', 'Saber', 'Tex']
};

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
    over: null
  };
}

/** The era's running war, or a fresh one if none / side changed / war over. */
export function getCampaign(era: Era, side: Side): Campaign {
  const existing = loadAll()[era];
  if (existing && existing.side === side && !existing.over) return existing;
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
}

export interface CampaignDelta {
  frontDelta: number;
  /** null = no wingman drama; 'kia' | 'down' (survived the crash). */
  wingmanFate: 'kia' | 'down' | null;
  /** Name of the replacement pilot who joined, if any. */
  replacement: string | null;
  ended: 'won' | 'lost' | null;
}

export function applyCampaignOutcome(c: Campaign, o: CampaignOutcome, rng: () => number = Math.random): CampaignDelta {
  const delta: CampaignDelta = { frontDelta: 0, wingmanFate: null, replacement: null, ended: null };
  if (c.over) return delta;

  // The front moves on results, with the rest of the war drifting around you.
  const drift = (rng() - 0.45) * 4;
  const swing = o.missionComplete ? 7 + rng() * 5 : -(5 + rng() * 4);
  delta.frontDelta = Math.round(swing + drift);
  c.front = Math.max(-100, Math.min(100, c.front + delta.frontDelta));

  // Airframes: losses hurt, the depot trickles replacements.
  if (o.playerPlaneLost) c.aircraft--;
  if (o.wingmanLost) c.aircraft--;
  c.missionsFlown++;
  if (c.missionsFlown % 2 === 0 && c.aircraft < MAX_AIRCRAFT) c.aircraft++;

  // Wingman fate and score.
  const wm = o.wingmanName ? c.roster.find(p => p.name === o.wingmanName && p.status === 'active') : null;
  if (wm) {
    wm.kills += o.wingmanKills;
    if (o.wingmanLost) {
      if (rng() < 0.55) {
        wm.status = 'kia';
        delta.wingmanFate = 'kia';
      } else {
        delta.wingmanFate = 'down';
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
