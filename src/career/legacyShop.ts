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
  era: 'both' | 'modern' | 'wwi';
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
    desc: '+2 IR missiles and +1 radar missile over any airframe\'s standard load. Somebody signed for the extra pylons; nobody asks who.',
    cost: 60,
    era: 'modern'
  },
  {
    id: 'airframe',
    name: 'Veteran Airframe',
    desc: 'Your mount absorbs 30% more damage. A century of family notes on what breaks first.',
    cost: 80,
    era: 'both'
  },
  {
    id: 'late-birds',
    name: 'Late-War Fighters',
    desc: 'The SPAD S.XIII (heavy, fast, dives like an anvil) and the Fokker D.VII (hangs on its prop) join the family stable.',
    cost: 100,
    era: 'wwi'
  },
  {
    id: 'fa18',
    name: 'F/A-18C Hornet',
    desc: "A second modern mount: slower than the Viper, but it turns like a knife fight and holds alpha the Viper's limiter won't allow. Six-bomb rack.",
    cost: 120,
    era: 'modern'
  },
  {
    id: 'aces-birds',
    name: 'The Aces\' Mounts',
    desc: 'The S.E.5a (fast, steady, forgiving) and the Albatros D.Va (the Jastas\' plywood shark) join the stable.',
    cost: 80,
    era: 'wwi'
  },
  {
    id: 'f14',
    name: 'F-14B Tomcat',
    desc: 'The fleet interceptor: heavy and mushy up close, but four AIM-54 Phoenix kill from 24 km — twice any other missile.',
    cost: 150,
    era: 'modern'
  },
  {
    id: 'f22',
    name: 'F-22A Raptor',
    desc: 'Speed, altitude, six internal AMRAAMs, and a radar return the size of a bird — enemies engage you at half range. The Viper still out-rolls it.',
    cost: 200,
    era: 'modern'
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

/** Concrete gameplay modifiers derived from owned unlocks. Weapon perks
 * are ADDITIVE on top of each airframe's own stations. */
export interface DynastyPerks {
  hpMult: number;
  gunRegenMult: number;
  missileBonus: number;
  bvrBonus: number;
  decoyBonus: number;
}

export function dynastyPerks(d: Dynasty | null): DynastyPerks {
  return {
    hpMult: hasUnlock(d, 'airframe') ? 1.3 : 1,
    gunRegenMult: hasUnlock(d, 'armorer') ? 1.6 : 1,
    missileBonus: hasUnlock(d, 'rails') ? 2 : 0,
    bvrBonus: hasUnlock(d, 'rails') ? 1 : 0,
    decoyBonus: hasUnlock(d, 'dispensers') ? 15 : 0
  };
}
