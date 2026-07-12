/**
 * Skirmish setup: how big a fight, and against whom. Persisted like the
 * other menu toggles.
 */
export interface SkirmishOptions {
  /** Bandits in the air. 4 = the furball (you get two extra wingmen). */
  count: 1 | 2 | 4;
  /** 'mixed' draws from the era pool; ids force a type (modern only). */
  foe: 'mixed' | 'mig29' | 'su27';
}

const KEY = 'jets.skirmish.v1';
const DEFAULTS: SkirmishOptions = { count: 2, foe: 'mixed' };

export function getSkirmishOptions(): SkirmishOptions {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS };
    const p = JSON.parse(raw) as Partial<SkirmishOptions>;
    return {
      count: p.count === 1 || p.count === 4 ? p.count : 2,
      foe: p.foe === 'mig29' || p.foe === 'su27' ? p.foe : 'mixed'
    };
  } catch {
    return { ...DEFAULTS };
  }
}

export function setSkirmishOptions(o: SkirmishOptions): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(o));
  } catch {
    /* private browsing */
  }
}
