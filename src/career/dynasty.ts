/**
 * The Dynasty — the meta-narrative spine connecting both eras.
 *
 * One family of aviators across a century: your WWI ace founds the line, and
 * their legacy (name, medals, squadron heritage, unlocks) carries forward to
 * the descendant flying modern jets. Persisted in localStorage for now.
 *
 * Milestone 4 wires this into gameplay; for now it is the canonical data model.
 */
import type { Era } from '../engine/flight/aircraft';

export interface MedalAward {
  id: string;
  name: string;
  dateISO: string;
  citation: string;
}

export interface PilotRecord {
  id: string;
  firstName: string;
  era: Era;
  /** Generation within the family line: 1 = the WWI founder. */
  generation: number;
  rank: string;
  squadron: string;
  sorties: number;
  victories: number;
  medals: MedalAward[];
  status: 'active' | 'kia' | 'pow' | 'retired';
  /** Legacy points earned for the dynasty (feeds cross-era unlocks). */
  legacy: number;
}

export interface Dynasty {
  surname: string;
  createdISO: string;
  pilots: PilotRecord[];
  /** Cross-era unlocks earned via legacy (paint schemes, squadron heritage, etc). */
  unlocks: string[];
}

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
  localStorage.setItem(KEY, JSON.stringify(d));
}

export function createDynasty(surname: string): Dynasty {
  const d: Dynasty = {
    surname,
    createdISO: new Date().toISOString(),
    pilots: [],
    unlocks: []
  };
  saveDynasty(d);
  return d;
}
