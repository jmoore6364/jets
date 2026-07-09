/**
 * Legacy shop: shared dynasty points, purchase rules, and the perk
 * modifiers that feed the flight session.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createDynasty, createPilot, dynastyLegacy, type Dynasty } from '../src/career/dynasty';
import {
  LEGACY_UNLOCKS, availableLegacy, spentLegacy, buyUnlock, hasUnlock, dynastyPerks
} from '../src/career/legacyShop';

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: () => null,
    setItem: () => undefined,
    removeItem: () => undefined
  });
});

function richDynasty(points: number): Dynasty {
  const d = createDynasty('Moore');
  const p = createPilot(d, 'Jack', 'entente');
  p.legacy = points;
  return d;
}

describe('legacy shop', () => {
  it('pools legacy across the whole line and tracks spending', () => {
    const d = richDynasty(60);
    const heir = createPilot(d, 'Sam', 'nato', 'modern');
    heir.legacy = 40;
    expect(dynastyLegacy(d)).toBe(100);
    expect(availableLegacy(d)).toBe(100);

    expect(buyUnlock(d, 'dispensers')).toBe(true); // 30
    expect(spentLegacy(d)).toBe(30);
    expect(availableLegacy(d)).toBe(70);
  });

  it('rejects overspending, double-purchase, and unknown ids', () => {
    const d = richDynasty(50);
    expect(buyUnlock(d, 'airframe')).toBe(false); // costs 80
    expect(buyUnlock(d, 'dispensers')).toBe(true); // 30, leaves 20
    expect(buyUnlock(d, 'dispensers')).toBe(false); // already owned
    expect(buyUnlock(d, 'armorer')).toBe(false); // 40 > 20 remaining
    expect(buyUnlock(d, 'warp-drive')).toBe(false);
    expect(availableLegacy(d)).toBe(20);
  });

  it('derives perk modifiers from owned unlocks', () => {
    const base = dynastyPerks(null);
    expect(base).toEqual({ hpMult: 1, gunRegenMult: 1, missileCap: 4, bvrCap: 2, decoyCap: 30 });

    const d = richDynasty(1000);
    for (const u of LEGACY_UNLOCKS) expect(buyUnlock(d, u.id)).toBe(true);
    expect(LEGACY_UNLOCKS.every(u => hasUnlock(d, u.id))).toBe(true);

    const perks = dynastyPerks(d);
    expect(perks.hpMult).toBeGreaterThan(1);
    expect(perks.gunRegenMult).toBeGreaterThan(1);
    expect(perks.missileCap).toBe(6);
    expect(perks.bvrCap).toBe(3);
    expect(perks.decoyCap).toBe(45);
  });
});
