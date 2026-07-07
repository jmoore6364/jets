/**
 * WWI mission generation. Three classic Red Baron mission types:
 * dawn patrols, balloon busting, and two-seater escorts.
 */
import type { Side, PilotRecord } from '../career/dynasty';
import { formatDate } from '../career/dynasty';

export type MissionType = 'patrol' | 'balloon' | 'escort';

export interface Mission {
  type: MissionType;
  title: string;
  briefing: string;
  side: Side;
  /** Objective area, world coords relative to spawn at origin. */
  zone: { x: number; z: number };
  enemyCount: number;
  /** Balloon missions: tethered target. */
  balloonAltM?: number;
  /** Escort missions: the friendly's route (world XZ). */
  route?: Array<{ x: number; z: number }>;
}

const SECTORS = {
  entente: ['Arras', 'Vimy Ridge', 'Douai', 'Cambrai', 'Lens'],
  central: ['Ypres', 'Messines', 'Armentières', 'the Scarpe', 'Monchy']
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateMission(pilot: PilotRecord): Mission {
  const type: MissionType = pick(['patrol', 'patrol', 'balloon', 'escort']);
  const sector = pick(SECTORS[pilot.side]);
  const date = formatDate(pilot.dateISO);
  const bearing = Math.random() * Math.PI * 2;
  const dist = 2800 + Math.random() * 1800;
  const zone = { x: Math.sin(bearing) * dist, z: -Math.cos(bearing) * dist };
  const enemyCount = Math.min(2, 1 + Math.floor(pilot.victories / 6));

  if (type === 'balloon') {
    return {
      type,
      title: `Balloon Attack — ${sector}`,
      briefing:
        `${date}. An enemy observation balloon near ${sector} has been directing ` +
        `artillery onto our trenches all week. Fly to the marked position and burn it down. ` +
        `Expect a defending scout — balloons are never left alone.`,
      side: pilot.side,
      zone,
      enemyCount: 1,
      balloonAltM: 500 + Math.random() * 200
    };
  }

  if (type === 'escort') {
    const mid = { x: zone.x * 0.55 + 600, z: zone.z * 0.55 };
    const route = [
      { x: zone.x * 0.25, z: zone.z * 0.25 },
      mid,
      zone
    ];
    return {
      type,
      title: `Escort Duty — ${sector}`,
      briefing:
        `${date}. A reconnaissance two-seater is photographing the lines near ${sector}. ` +
        `Stay with it until the camera run is complete. If the enemy scouts get through ` +
        `to it, the whole show is wasted — and the crew won't be coming home.`,
      side: pilot.side,
      zone,
      enemyCount,
      route
    };
  }

  return {
    type: 'patrol',
    title: `Dawn Patrol — ${sector}`,
    briefing:
      `${date}. Offensive patrol over ${sector}. Enemy scouts have been working ` +
      `our side of the lines at first light. Sweep the marked sector and clear it. ` +
      `Watch the sun — that's where they'll come from.`,
    side: pilot.side,
    zone,
    enemyCount
  };
}
