/**
 * Which aircraft a side flies: the era default, plus anything the family
 * has unlocked in the Legacy Shop. The chosen mount is remembered per side
 * and used by both career missions and skirmishes.
 */
import type { AircraftSpec } from '../engine/flight/aircraft';
import type { Side } from '../career/dynasty';
import { loadDynasty } from '../career/dynasty';
import { hasUnlock } from '../career/legacyShop';
import { F16, FA18, F14, F22 } from '../era/modern/aircraft';
import { SOPWITH_CAMEL, FOKKER_DR1, SPAD13, FOKKER_D7, SE5A, ALBATROS } from '../era/wwi/aircraft';

const KEY = 'jets.mount.v1';

/** The unlock id an aircraft needs, if it isn't free. */
export const UNLOCK_FOR: Record<string, string> = {
  fa18: 'fa18',
  f14: 'f14',
  f22: 'f22',
  spad13: 'late-birds',
  'fokker-d7': 'late-birds',
  se5a: 'aces-birds',
  albatros: 'aces-birds'
};

export function availableMounts(side: Side): AircraftSpec[] {
  const d = loadDynasty();
  if (side === 'nato') {
    const list = [F16];
    if (hasUnlock(d, 'fa18')) list.push(FA18);
    if (hasUnlock(d, 'f14')) list.push(F14);
    if (hasUnlock(d, 'f22')) list.push(F22);
    return list;
  }
  if (side === 'entente') {
    const list = [SOPWITH_CAMEL];
    if (hasUnlock(d, 'late-birds')) list.push(SPAD13);
    if (hasUnlock(d, 'aces-birds')) list.push(SE5A);
    return list;
  }
  const list = [FOKKER_DR1];
  if (hasUnlock(d, 'late-birds')) list.push(FOKKER_D7);
  if (hasUnlock(d, 'aces-birds')) list.push(ALBATROS);
  return list;
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
