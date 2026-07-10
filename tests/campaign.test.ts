/**
 * Campaign: the persistent war. Front movement, squadron attrition,
 * replacements, and win/lose conditions.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  createCampaign, applyCampaignOutcome, pickWingman, warStatusLine, type CampaignOutcome
} from '../src/career/campaign';

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: () => null,
    setItem: () => undefined,
    removeItem: () => undefined
  });
});

const win: CampaignOutcome = { missionComplete: true, playerPlaneLost: false, wingmanName: null, wingmanKills: 0, wingmanLost: false };
const loss: CampaignOutcome = { missionComplete: false, playerPlaneLost: false, wingmanName: null, wingmanKills: 0, wingmanLost: false };

describe('campaign', () => {
  it('starts balanced with a six-pilot roster and ten aircraft', () => {
    const c = createCampaign('wwi', 'entente', () => 0.5);
    expect(c.front).toBe(0);
    expect(c.roster).toHaveLength(6);
    expect(c.aircraft).toBe(10);
    expect(c.over).toBeNull();
    expect(pickWingman(c, () => 0)).not.toBeNull();
  });

  it('completed missions push the front toward victory, failures toward defeat', () => {
    const c = createCampaign('modern', 'nato', () => 0.5);
    applyCampaignOutcome(c, win, () => 0.5);
    expect(c.front).toBeGreaterThan(0);
    const f = c.front;
    applyCampaignOutcome(c, loss, () => 0.5);
    expect(c.front).toBeLessThan(f);
  });

  it('reaching +100 wins the war', () => {
    const c = createCampaign('wwi', 'central', () => 0.5);
    let guard = 0;
    while (!c.over && guard++ < 50) applyCampaignOutcome(c, win, () => 0.9);
    expect(c.over).toBe('won');
  });

  it('running out of aircraft loses the war even mid-front', () => {
    const c = createCampaign('modern', 'nato', () => 0.5);
    const bloodbath: CampaignOutcome = { ...win, playerPlaneLost: true, wingmanLost: true };
    let guard = 0;
    while (!c.over && guard++ < 40) applyCampaignOutcome(c, bloodbath, () => 0.1);
    expect(c.over).toBe('lost');
    expect(c.aircraft).toBeLessThanOrEqual(0);
  });

  it('records wingman kills, KIAs him on a bad roll, and recruits replacements', () => {
    const c = createCampaign('wwi', 'entente', () => 0.5);
    const wm = pickWingman(c, () => 0)!;
    const d1 = applyCampaignOutcome(c, { ...win, wingmanName: wm.name, wingmanKills: 2 }, () => 0.9);
    expect(c.roster.find(p => p.name === wm.name)!.kills).toBe(2);
    expect(d1.wingmanFate).toBeNull();

    // rng 0.1 < 0.55: the loss is fatal
    const d2 = applyCampaignOutcome(c, { ...win, wingmanName: wm.name, wingmanLost: true }, () => 0.1);
    expect(d2.wingmanFate).toBe('kia');
    expect(c.roster.find(p => p.name === wm.name)!.status).toBe('kia');

    // Grind the roster down to force a replacement
    let dead = 0;
    for (const p of c.roster) {
      if (p.status === 'active' && dead++ < 2) p.status = 'kia';
    }
    const d3 = applyCampaignOutcome(c, win, () => 0.9);
    expect(d3.replacement).not.toBeNull();
    expect(c.roster.filter(p => p.status === 'active').length).toBeGreaterThanOrEqual(4);
  });

  it('war status line tracks the front', () => {
    const c = createCampaign('wwi', 'entente', () => 0.5);
    c.front = 80;
    expect(warStatusLine(c)).toMatch(/retreat/i);
    c.front = -80;
    expect(warStatusLine(c)).toMatch(/collapse/i);
  });
});
