# PROJECT JETS — Design Document

## The Pitch

Two legendary flight-sim traditions in one game, joined by a story:

- **The Great War (1917–1918)** — Red Baron (1990) spirit. Canvas and wire,
  rotary engines, gun jams, no parachutes. A career from rookie to ace across
  the Western Front, with historical aces in the sky.
- **The Modern Era (2026)** — Falcon 4.0 systems depth with Top Gun mission
  energy. Radar, RWR, missiles, afterburner. Cinematic set-piece missions
  (canyon runs, carrier alerts, hard-deck training duels) inside a persistent
  campaign.

### The Dynasty (the hook)

One family of aviators across a century. You name the line once. Your WWI pilot
founds it; every later pilot is a descendant. Careers in either era feed a
shared **Legacy** track:

- WWI victories/medals unlock squadron heritage in the modern era (nose art,
  callsigns, a museum Dr.I flyable in 2026).
- Modern-era achievements unlock "family archive" content backwards — letters,
  photos, replay scenarios of the founder's most famous sorties.
- If a pilot dies, the line continues through kin — the dynasty is the save file.

## Architecture

One engine, two era modules. The flight model, damage, AI, mission, and career
systems are era-agnostic and data-driven; each era supplies aircraft specs,
environments, weapons, and mission grammars.

```
engine/          era-agnostic: 6-DOF flight, (soon) damage, AI, weapons, missions
era/wwi/         data + rules for 1917: aircraft, guns-only combat, front lines
era/modern/      data + rules for 2026: radar/IR sensors, missiles, SAM rings
career/          dynasty model, pilot lifecycle, legacy unlocks (era-agnostic)
```

### Flight model

Shared rigid-body 6-DOF (`engine/flight/flightModel.ts`):

- Lift-curve with post-stall flat-plate blending; induced + parasitic drag
- Stability derivatives (cmα, cnβ, dihedral), rate damping, Euler coupling
- Control effectiveness scaled by dynamic pressure; adverse yaw
- **Rotary gyroscopics** (`engineAngularMomentum`): the Camel's pitch/yaw
  coupling emerges from the physics, not scripting
- **FBW limiter** for modern jets: alpha/G caps with G-rate lead anticipation
- Prop thrust = power·η/V (capped static); jet thrust with AB + density lapse

Sign conventions are locked by unit tests (`tests/flightModel.test.ts`).

## Roadmap

| Milestone | Deliverable |
|---|---|
| **M0 ✅** | Scaffold, shared flight model, free flight in both eras, physics tests |
| **M1 ✅** | Combat core: gun ballistics with tracers, damage/kill model, dogfight AI (pursue/evade/terrain-avoid), 1v1 skirmish in both eras |
| **M2** | WWI career vertical slice: squadron roster, mission generator (patrol/balloon/escort), medals, perma-death |
| **M3** | Modern combat: radar modes, RWR, IR/radar missiles, chaff/flare; Top Gun scripted mission framework |
| **M4** | Dynasty meta-layer: legacy track, cross-era unlocks, family archive UI |
| **M5** | Presentation: real models, cockpits, sound, music, replay camera |

### Design principles

1. **Data over code.** New aircraft = new `AircraftSpec`. New mission type =
   new grammar entry. Era differences live in data wherever possible.
2. **The feel gap is the feature.** Jumping from a 100 kt triplane to a 500 kt
   Viper should be shocking. Never homogenize the two eras for convenience.
3. **Career is the game.** Free flight and single missions are test benches;
   the dynasty career is why you come back. (Red Baron taught us this.)
4. **Mid-fidelity, honest physics.** Behaviors should *emerge* (spins, gyro
   swing, energy management), but a keyboard pilot must be able to fly it.
