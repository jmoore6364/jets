/**
 * The Legacy Shop — cross-era dynasty unlocks (M4).
 *
 * Legacy points earned by every pilot in the line are a shared family
 * currency. Spending them buys permanent advantages: a tougher airframe,
 * deeper countermeasure bins, extra rails, a friendly armorer. Purchases
 * live in Dynasty.unlocks and apply to every future sortie, both eras.
 */
import { saveDynasty, dynastyLegacy, type Dynasty } from './dynasty';

export interface LegacyUnlock {
  id: string;
  name: string;
  desc: string;
  cost: number;
  /** Which era benefits (cosmetic label — perks no-op where irrelevant). */
  era: 'both' | 'modern';
}

export const LEGACY_UNLOCKS: LegacyUnlock[] = [
  {
    id: 'dispensers',
    name: 'Deep Countermeasure Bins',
    desc: 'Flare and chaff capacity 30 → 45. The family knows a loadmaster.',
    cost: 30,
    era: 'modern'
  },
  {
    id: 'armorer',
    name: "Armorer's Favor",
    desc: 'Belts refill 60% faster between bursts (arcade handling). Your guns are never waiting on the depot.',
    cost: 40,
    era: 'both'
  },
  {
    id: 'rails',
    name: 'Extra Rails',
    desc: 'Carry 6 IR missiles and 3 radar missiles. Somebody signed for the extra pylons; nobody asks who.',
    cost: 60,
    era: 'modern'
  },
  {
    id: 'airframe',
    name: 'Veteran Airframe',
    desc: 'Your mount absorbs 30% more damage. A century of family notes on what breaks first.',
    cost: 80,
    era: 'both'
  }
];

export function hasUnlock(d: Dynasty | null, id: string): boolean {
  return !!d?.unlocks.includes(id);
}

/** Legacy already spent on purchased unlocks. */
export function spentLegacy(d: Dynasty): number {
  return LEGACY_UNLOCKS.filter(u => d.unlocks.includes(u.id)).reduce((s, u) => s + u.cost, 0);
}

/** Legacy available to spend right now. */
export function availableLegacy(d: Dynasty): number {
  return dynastyLegacy(d) - spentLegacy(d);
}

/** Attempt a purchase; persists and returns true on success. */
export function buyUnlock(d: Dynasty, id: string): boolean {
  const u = LEGACY_UNLOCKS.find(x => x.id === id);
  if (!u || d.unlocks.includes(id) || availableLegacy(d) < u.cost) return false;
  d.unlocks.push(id);
  saveDynasty(d);
  return true;
}

/** Concrete gameplay modifiers derived from owned unlocks. */
export interface DynastyPerks {
  hpMult: number;
  gunRegenMult: number;
  missileCap: number;
  bvrCap: number;
  decoyCap: number;
}

export function dynastyPerks(d: Dynasty | null): DynastyPerks {
  return {
    hpMult: hasUnlock(d, 'airframe') ? 1.3 : 1,
    gunRegenMult: hasUnlock(d, 'armorer') ? 1.6 : 1,
    missileCap: hasUnlock(d, 'rails') ? 6 : 4,
    bvrCap: hasUnlock(d, 'rails') ? 3 : 2,
    decoyCap: hasUnlock(d, 'dispensers') ? 45 : 30
  };
}
