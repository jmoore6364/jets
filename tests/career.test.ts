/**
 * Career progression: medals, promotions, ace status, perma-death,
 * and the mission generator's contracts.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  createDynasty, createPilot, activePilot, applyMissionOutcome, rankOf,
  MEDALS, type Dynasty
} from '../src/career/dynasty';
import { generateMission } from '../src/game/mission';

// dynasty.ts persists via localStorage, which node lacks — stub it.
beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: () => null,
    setItem: () => undefined,
    removeItem: () => undefined
  });
});

function freshPilot(side: 'entente' | 'central' = 'entente'): { d: Dynasty; p: ReturnType<typeof createPilot> } {
  const d = createDynasty('Moore');
  const p = createPilot(d, 'Jack', side);
  return { d, p };
}

describe('career progression', () => {
  it('awards first-victory and ace medals when thresholds cross', () => {
    const { d, p } = freshPilot();
    const first = applyMissionOutcome(d, p, { victories: 1, survived: true, missionComplete: true });
    expect(first.newMedals.map(m => m.id)).toContain('mid');

    const ace = applyMissionOutcome(d, p, { victories: 4, survived: true, missionComplete: true });
    expect(p.victories).toBe(5);
    expect(ace.newMedals.map(m => m.id)).toContain('mc');
    expect(ace.becameAce).toBe(true);
  });

  it('never awards the same medal twice', () => {
    const { d, p } = freshPilot('central');
    applyMissionOutcome(d, p, { victories: 2, survived: true, missionComplete: true });
    const again = applyMissionOutcome(d, p, { victories: 1, survived: true, missionComplete: true });
    expect(again.newMedals.some(m => m.id === 'ek2')).toBe(false);
  });

  it('promotes on victories and reports the new rank', () => {
    const { d, p } = freshPilot();
    expect(rankOf(p)).toBe('2nd Lieutenant');
    const c = applyMissionOutcome(d, p, { victories: 3, survived: true, missionComplete: true });
    expect(c.promotedTo).toBe('Lieutenant');
    expect(rankOf(p)).toBe('Lieutenant');
  });

  it('perma-death ends the pilot; the dynasty continues with an heir', () => {
    const { d, p } = freshPilot();
    const c = applyMissionOutcome(d, p, { victories: 0, survived: false, missionComplete: false });
    expect(c.kia).toBe(true);
    expect(p.status).toBe('kia');
    expect(activePilot(d)).toBeNull();

    const heir = createPilot(d, 'Thomas', 'entente');
    expect(heir.generation).toBe(2);
    expect(heir.dateISO).toBe(p.dateISO); // joins the war where the founder fell
    expect(activePilot(d)).toBe(heir);
  });

  it('campaign date advances with each sortie', () => {
    const { d, p } = freshPilot();
    const before = p.dateISO;
    applyMissionOutcome(d, p, { victories: 0, survived: true, missionComplete: true });
    expect(p.dateISO > before).toBe(true);
  });

  it('medal tables are ordered by threshold', () => {
    for (const side of ['entente', 'central'] as const) {
      const ats = MEDALS[side].map(m => m.at);
      expect([...ats].sort((a, b) => a - b)).toEqual(ats);
    }
  });
});

describe('mission generator', () => {
  it('produces valid missions of every type', () => {
    const { p } = freshPilot();
    const seen = new Set<string>();
    for (let i = 0; i < 60; i++) {
      const m = generateMission(p);
      seen.add(m.type);
      expect(m.title.length).toBeGreaterThan(5);
      expect(m.briefing.length).toBeGreaterThan(40);
      expect(Math.hypot(m.zone.x, m.zone.z)).toBeGreaterThan(2000);
      expect(m.enemyCount).toBeGreaterThan(0);
      if (m.type === 'balloon') expect(m.balloonAltM).toBeGreaterThan(300);
      if (m.type === 'escort') expect(m.route!.length).toBeGreaterThanOrEqual(2);
    }
    expect(seen).toEqual(new Set(['patrol', 'balloon', 'escort']));
  });

  it('scales opposition with the pilot\'s score', () => {
    const { p } = freshPilot();
    p.victories = 12;
    const counts = new Set<number>();
    for (let i = 0; i < 30; i++) {
      const m = generateMission(p);
      if (m.type !== 'balloon') counts.add(m.enemyCount);
    }
    expect(Math.max(...counts)).toBe(2);
  });
});
