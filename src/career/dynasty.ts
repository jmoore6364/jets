/**
 * The Dynasty — the meta-narrative spine connecting both eras.
 *
 * One family of aviators across a century. The WWI founder starts the line;
 * every later pilot is kin. Careers feed a shared Legacy track that will
 * unlock cross-era content (M4). Persisted in localStorage.
 */
import type { Era } from '../engine/flight/aircraft';

/** Allegiance: Great War sides, or NATO for the modern era. */
export type Side = 'entente' | 'central' | 'nato';

export interface MedalAward {
  id: string;
  name: string;
  dateISO: string;
}

export interface PilotRecord {
  id: string;
  firstName: string;
  era: Era;
  side: Side;
  /** Generation within the family line: 1 = the WWI founder. */
  generation: number;
  rankIndex: number;
  squadron: string;
  sorties: number;
  victories: number;
  medals: MedalAward[];
  status: 'active' | 'kia' | 'retired';
  /** Legacy points earned for the dynasty (feeds cross-era unlocks). */
  legacy: number;
  /** Current campaign date for this pilot. */
  dateISO: string;
}

/** One line in the family history — a sortie, a medal, a death, a war. */
export interface ChronicleEntry {
  dateISO: string;
  pilotId: string;
  era: Era;
  title: string;
  kills: number;
  outcome: 'complete' | 'failed' | 'kia';
  /** The headline, if the sortie made one: an ace downed, a war won... */
  note?: string;
}

export interface Dynasty {
  surname: string;
  createdISO: string;
  pilots: PilotRecord[];
  unlocks: string[];
  chronicle?: ChronicleEntry[];
  warsWon?: number;
}

const CHRONICLE_CAP = 250;

export function logChronicle(d: Dynasty, entry: ChronicleEntry): void {
  d.chronicle = d.chronicle ?? [];
  d.chronicle.push(entry);
  if (d.chronicle.length > CHRONICLE_CAP) d.chronicle.splice(0, d.chronicle.length - CHRONICLE_CAP);
  saveDynasty(d);
}

export const RANKS: Record<Side, string[]> = {
  entente: ['2nd Lieutenant', 'Lieutenant', 'Captain', 'Major'],
  central: ['Leutnant', 'Oberleutnant', 'Hauptmann', 'Major'],
  nato: ['2nd Lieutenant', '1st Lieutenant', 'Captain', 'Major']
};

export const SQUADRONS: Record<Side, string> = {
  entente: 'No. 46 Squadron RFC',
  central: 'Jagdstaffel 11',
  nato: '555th Fighter Squadron'
};

/** Victory thresholds → decorations, in order. */
export const MEDALS: Record<Side, Array<{ at: number; id: string; name: string }>> = {
  entente: [
    { at: 1, id: 'mid', name: 'Mentioned in Dispatches' },
    { at: 5, id: 'mc', name: 'Military Cross' },
    { at: 10, id: 'dso', name: 'Distinguished Service Order' },
    { at: 20, id: 'vc', name: 'Victoria Cross' }
  ],
  central: [
    { at: 1, id: 'ek2', name: 'Iron Cross 2nd Class' },
    { at: 5, id: 'ek1', name: 'Iron Cross 1st Class' },
    { at: 15, id: 'plm', name: 'Pour le Mérite' }
  ],
  nato: [
    { at: 1, id: 'am', name: 'Air Medal' },
    { at: 5, id: 'dfc', name: 'Distinguished Flying Cross' },
    { at: 10, id: 'ss', name: 'Silver Star' },
    { at: 20, id: 'moh', name: 'Medal of Honor' }
  ]
};

const CAMPAIGN_START: Record<Era, string> = {
  wwi: '1917-04-01',
  modern: '2026-07-01'
};
const KEY = 'jets.dynasty.v1';

export function loadDynasty(): Dynasty | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Dynasty) : null;
  } catch {
    return null;
  }
}

export function saveDynasty(d: Dynasty): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(d));
  } catch {
    /* private browsing — career just won't persist */
  }
}

export function createDynasty(surname: string): Dynasty {
  return { surname, createdISO: new Date().toISOString(), pilots: [], unlocks: [] };
}

export function createPilot(d: Dynasty, firstName: string, side: Side, era: Era = 'wwi'): PilotRecord {
  const generation = d.pilots.length + 1;
  // Heirs join the same era's front where the last of that line fell.
  const prev = [...d.pilots].reverse().find(x => x.era === era);
  const p: PilotRecord = {
    id: `p${generation}-${Math.random().toString(36).slice(2, 8)}`,
    firstName,
    era,
    side,
    generation,
    rankIndex: 0,
    squadron: SQUADRONS[side],
    sorties: 0,
    victories: 0,
    medals: [],
    status: 'active',
    legacy: 0,
    dateISO: prev ? prev.dateISO : CAMPAIGN_START[era]
  };
  d.pilots.push(p);
  return p;
}

export function activePilot(d: Dynasty, era?: Era): PilotRecord | null {
  return d.pilots.find(p => p.status === 'active' && (!era || p.era === era)) ?? null;
}

/** Total legacy earned by the whole line, both eras. */
export function dynastyLegacy(d: Dynasty): number {
  return d.pilots.reduce((sum, p) => sum + p.legacy, 0);
}

/** The line's greatest Great War pilot — heritage for the modern era. */
export function wwiFounderAce(d: Dynasty): PilotRecord | null {
  const aces = d.pilots.filter(p => p.era === 'wwi' && p.victories >= 5);
  if (!aces.length) return null;
  return aces.reduce((a, b) => (b.victories > a.victories ? b : a));
}

export function rankOf(p: PilotRecord): string {
  return RANKS[p.side][Math.min(p.rankIndex, RANKS[p.side].length - 1)];
}

export interface MissionOutcome {
  victories: number;
  survived: boolean;
  missionComplete: boolean;
}

export interface Consequences {
  newMedals: MedalAward[];
  promotedTo: string | null;
  becameAce: boolean;
  kia: boolean;
}

/** Apply a flown mission to the pilot; returns what changed for the debrief. */
export function applyMissionOutcome(d: Dynasty, p: PilotRecord, o: MissionOutcome): Consequences {
  const wasAce = p.victories >= 5;
  p.sorties += 1;
  p.victories += o.victories;
  p.legacy += o.victories * 10 + (o.missionComplete ? 5 : 0);

  // Advance the campaign calendar 1–3 days.
  const date = new Date(p.dateISO + 'T12:00:00Z');
  date.setUTCDate(date.getUTCDate() + 1 + Math.floor(Math.random() * 3));
  p.dateISO = date.toISOString().slice(0, 10);

  const out: Consequences = { newMedals: [], promotedTo: null, becameAce: false, kia: false };

  // Decorations crossing thresholds
  for (const m of MEDALS[p.side]) {
    if (p.victories >= m.at && !p.medals.some(x => x.id === m.id)) {
      const award: MedalAward = { id: m.id, name: m.name, dateISO: p.dateISO };
      p.medals.push(award);
      out.newMedals.push(award);
    }
  }

  // Promotions by experience
  const deserved = p.sorties >= 25 || p.victories >= 15 ? 3
    : p.sorties >= 12 || p.victories >= 8 ? 2
    : p.sorties >= 5 || p.victories >= 3 ? 1
    : 0;
  if (deserved > p.rankIndex) {
    p.rankIndex = deserved;
    out.promotedTo = rankOf(p);
  }

  out.becameAce = !wasAce && p.victories >= 5;

  if (!o.survived) {
    p.status = 'kia';
    out.kia = true;
  }

  saveDynasty(d);
  return out;
}

/** Nicely formatted campaign date, e.g. "14 April 1917". */
export function formatDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
