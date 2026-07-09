/**
 * Enemy difficulty. Affects only the opposition — never your own aircraft.
 */
export type Difficulty = 'rookie' | 'pilot' | 'ace';

export interface DifficultyParams {
  /** AI gunnery/maneuver skill 0..1 (feeds aim wander + pull limits). */
  skill: number;
  /** Enemy airframe toughness multiplier. */
  hpMult: number;
  /** Seconds between defensive flare bursts (2 flares per burst). */
  flareBurstCooldown: number;
  /** Flares carried by enemy aircraft. */
  flareCount: number;
  /** Enemy missile shot cadence, seconds (min..max random). */
  missileCadence: [number, number];
}

export const DIFFICULTY: Record<Difficulty, DifficultyParams> = {
  rookie: { skill: 0.35, hpMult: 0.7, flareBurstCooldown: 6.0, flareCount: 8, missileCadence: [14, 22] },
  pilot: { skill: 0.6, hpMult: 1.0, flareBurstCooldown: 3.5, flareCount: 16, missileCadence: [8, 14] },
  ace: { skill: 0.85, hpMult: 1.2, flareBurstCooldown: 2.2, flareCount: 30, missileCadence: [5, 9] }
};

const KEY = 'jets.difficulty';

export function getDifficulty(): Difficulty {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'rookie' || v === 'ace' ? v : 'pilot';
  } catch {
    return 'pilot';
  }
}

export function setDifficulty(d: Difficulty): void {
  try {
    localStorage.setItem(KEY, d);
  } catch {
    /* private browsing */
  }
}

export function difficultyParams(): DifficultyParams {
  return DIFFICULTY[getDifficulty()];
}
