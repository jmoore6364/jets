/**
 * Which aircraft a side flies: the era default, plus anything the family
 * has unlocked in the Legacy Shop. The chosen mount is remembered per side
 * and used by both career missions and skirmishes.
 */
import type { AircraftSpec } from '../engine/flight/aircraft';
import type { Side } from '../career/dynasty';
import { loadDynasty } from '../career/dynasty';
import { hasUnlock } from '../career/legacyShop';
import { F16, FA18 } from '../era/modern/aircraft';
import { SOPWITH_CAMEL, FOKKER_DR1, SPAD13, FOKKER_D7 } from '../era/wwi/aircraft';

const KEY = 'jets.mount.v1';

/** The unlock id an aircraft needs, if it isn't free. */
export const UNLOCK_FOR: Record<string, string> = {
  fa18: 'fa18',
  spad13: 'late-birds',
  'fokker-d7': 'late-birds'
};

export function availableMounts(side: Side): AircraftSpec[] {
  const d = loadDynasty();
  if (side === 'nato') return hasUnlock(d, 'fa18') ? [F16, FA18] : [F16];
  if (side === 'entente') return hasUnlock(d, 'late-birds') ? [SOPWITH_CAMEL, SPAD13] : [SOPWITH_CAMEL];
  return hasUnlock(d, 'late-birds') ? [FOKKER_DR1, FOKKER_D7] : [FOKKER_DR1];
}

export function selectedMount(side: Side): AircraftSpec {
  const opts = availableMounts(side);
  try {
    const prefs = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Record<string, string>;
    return opts.find(s => s.id === prefs[side]) ?? opts[0];
  } catch {
    return opts[0];
  }
}

export function setMount(side: Side, id: string): void {
  try {
    const prefs = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Record<string, string>;
    prefs[side] = id;
    localStorage.setItem(KEY, JSON.stringify(prefs));
  } catch {
    /* private browsing */
  }
}
