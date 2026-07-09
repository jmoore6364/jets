/**
 * Mission generation for both eras.
 * WWI: Red Baron classics — dawn patrols, balloon busting, escorts.
 * Modern: Top Gun energy — CAPs, strike escorts, low-level intercepts.
 */
import type { Era } from '../engine/flight/aircraft';
import type { Side, PilotRecord, Dynasty } from '../career/dynasty';
import { formatDate, wwiFounderAce } from '../career/dynasty';

export type MissionType = 'patrol' | 'balloon' | 'escort' | 'intercept' | 'strike';

export interface Mission {
  era: Era;
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
  /** Modern heritage: the line's WWI ace, if any — cosmetic + flavor. */
  heritage?: { name: string; victories: number };
}

const WWI_SECTORS = {
  entente: ['Arras', 'Vimy Ridge', 'Douai', 'Cambrai', 'Lens'],
  central: ['Ypres', 'Messines', 'Armentières', 'the Scarpe', 'Monchy']
};

const MODERN_SECTORS = ['Red Canyon', 'the Dagger Range', 'Sector Bravo', 'the Rift Valley', 'Point Mugu East'];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateWwi(pilot: PilotRecord): Mission {
  const type: MissionType = pick(['patrol', 'patrol', 'balloon', 'escort']);
  const sector = pick(WWI_SECTORS[pilot.side as 'entente' | 'central'] ?? WWI_SECTORS.entente);
  const date = formatDate(pilot.dateISO);
  const bearing = Math.random() * Math.PI * 2;
  const dist = 2800 + Math.random() * 1800;
  const zone = { x: Math.sin(bearing) * dist, z: -Math.cos(bearing) * dist };
  const enemyCount = Math.min(2, 1 + Math.floor(pilot.victories / 6));

  if (type === 'balloon') {
    return {
      era: 'wwi', type, side: pilot.side, zone, enemyCount: 1,
      balloonAltM: 500 + Math.random() * 200,
      title: `Balloon Attack — ${sector}`,
      briefing:
        `${date}. An enemy observation balloon near ${sector} has been directing ` +
        `artillery onto our trenches all week. Fly to the marked position and burn it down. ` +
        `Expect a defending scout — balloons are never left alone.`
    };
  }

  if (type === 'escort') {
    const route = [
      { x: zone.x * 0.25, z: zone.z * 0.25 },
      { x: zone.x * 0.55 + 600, z: zone.z * 0.55 },
      zone
    ];
    return {
      era: 'wwi', type, side: pilot.side, zone, enemyCount, route,
      title: `Escort Duty — ${sector}`,
      briefing:
        `${date}. A reconnaissance two-seater is photographing the lines near ${sector}. ` +
        `Stay with it until the camera run is complete. If the enemy scouts get through ` +
        `to it, the whole show is wasted — and the crew won't be coming home.`
    };
  }

  return {
    era: 'wwi', type: 'patrol', side: pilot.side, zone, enemyCount,
    title: `Dawn Patrol — ${sector}`,
    briefing:
      `${date}. Offensive patrol over ${sector}. Enemy scouts have been working ` +
      `our side of the lines at first light. Sweep the marked sector and clear it. ` +
      `Watch the sun — that's where they'll come from.`
  };
}

function generateModern(pilot: PilotRecord, dynasty: Dynasty | null): Mission {
  const type: MissionType = pick(['patrol', 'patrol', 'escort', 'intercept', 'strike']);
  const sector = pick(MODERN_SECTORS);
  const date = formatDate(pilot.dateISO);
  const bearing = Math.random() * Math.PI * 2;
  const dist = 7000 + Math.random() * 5000;
  const zone = { x: Math.sin(bearing) * dist, z: -Math.cos(bearing) * dist };
  const enemyCount = Math.min(2, 1 + Math.floor(pilot.victories / 5));

  const ace = dynasty ? wwiFounderAce(dynasty) : null;
  const heritage = ace
    ? { name: `${ace.firstName} ${dynasty!.surname}`, victories: ace.victories }
    : undefined;
  const heritageLine = heritage
    ? ` The red tail flash is your family's: ${heritage.name} scored ${heritage.victories} over the trenches a century ago. Fly like it.`
    : '';

  if (type === 'escort') {
    const route = [
      { x: zone.x * 0.3, z: zone.z * 0.3 },
      { x: zone.x * 0.65 - 1200, z: zone.z * 0.65 },
      zone
    ];
    return {
      era: 'modern', type, side: 'nato', zone, enemyCount, route, heritage,
      title: `Strike Escort — ${sector}`,
      briefing:
        `${date}. A strike package is going through ${sector} at medium level and ` +
        `hostile CAPs are up. You are the sweep: keep the Fulcrums off the package until ` +
        `it is off target. Lose the strikers, lose the war that day.` + heritageLine
    };
  }

  if (type === 'strike') {
    return {
      era: 'modern', type, side: 'nato', zone, enemyCount: 1, heritage,
      title: `Deep Strike — ${sector}`,
      briefing:
        `${date}. A hardened command bunker in ${sector} is coordinating everything ` +
        `hostile in this sector, and it is defended: an SA-8 ring sits 900 meters east, ` +
        `and a CAP is up. Kill the radar or stay low and fast; either way the bunker ` +
        `dies today. Guns and missiles both work on soft structures.` + heritageLine
    };
  }

  if (type === 'intercept') {
    return {
      era: 'modern', type, side: 'nato', zone, enemyCount, heritage,
      title: `Alert Scramble — ${sector}`,
      briefing:
        `${date}. Hostile aircraft inbound toward the forward base at ${sector}, ` +
        `coming in low and fast. You are the alert bird. Run them down and splash them ` +
        `before they reach the field — burner is authorized, fuel is not your problem today.` + heritageLine
    };
  }

  return {
    era: 'modern', type: 'patrol', side: 'nato', zone, enemyCount, heritage,
    title: `Combat Air Patrol — ${sector}`,
    briefing:
      `${date}. Establish CAP over ${sector}. Intel says Fulcrums have been probing ` +
      `the sector at random intervals. Sanitize the airspace: nothing hostile flies home.` + heritageLine
  };
}

export function generateMission(pilot: PilotRecord, dynasty: Dynasty | null = null): Mission {
  return pilot.era === 'modern' ? generateModern(pilot, dynasty) : generateWwi(pilot);
}
