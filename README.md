# PROJECT JETS

**A Century of Air Combat — One Bloodline.**

Two games in one: a Red Baron-style WWI campaign and a Falcon 4-inspired modern-era
campaign with Top Gun-flavored missions — connected by a *dynasty*: the family of
aviators you fly across a hundred years. Your 1917 ace founds the line; their
descendant straps into a Viper.

Built with Three.js + TypeScript. One shared 6-DOF flight model powers every
aircraft in every era — a Fokker Dr.I and an F-16 are the same physics with
different numbers.

## Run it

```bash
npm install
npm run dev      # open the printed localhost URL
npm test         # flight-model physics tests
npm run build    # production build in dist/
```

## Controls

| Input | Action |
|---|---|
| `W` / `S` | Pitch down / up (pull) |
| `A` / `D` | Roll left / right |
| `Q` / `E` | Rudder left / right |
| `Space` / left click | **Fire guns** |
| `Shift` / `Ctrl` | Throttle up / down |
| `1`–`9`, `0` | Direct throttle 10–100% |
| `Tab` | Afterburner (jets) |
| `B` | Speedbrake (jets) / ignition blip (WWI rotary) |
| `M` | Mouse-fly toggle (cursor offset from center = stick) |
| `C` | Cockpit / chase camera (cockpit is default) |
| `R` | Respawn |
| `Esc` | Back to menu |

**Gamepad**: left stick pitch/roll · right stick X rudder · RT/LT throttle ·
A afterburner · X brake · Y camera.

**Touch (phone/tablet, landscape recommended)**: right thumb anywhere on the
right half is a floating stick (auto-coordinated rudder) · left-edge throttle
slider · FIRE (hold), AB (toggle), BRK (hold) buttons · ☰ menu · CAM camera ·
tap the banner to respawn.

Both eras fly first-person by default: the F-16 gets a full glass HUD
(pitch ladder, flight-path marker, heading tape, speed/alt/Mach/G/AoA, bank
scale), the WWI birds get a painted cockpit — brass gauges, compass card,
slip ball, twin gun breeches, and a ring-and-bead gunsight.

## What flies today (Milestones 0–2)

**WWI Career** — found your dynasty, name your pilot, choose your side
(RFC Sopwith Camel or Jasta Fokker Dr.I), and fly generated missions over
the Western Front: dawn patrols, balloon attacks, two-seater escorts.
Victories are confirmed, medals and promotions follow the real decoration
ladders (Military Cross → VC, Iron Cross → Pour le Mérite), the campaign
calendar marches on from April 1917 — and death is permanent. When a pilot
falls, the next of kin takes their place and the dynasty endures.
Saved in your browser between sessions.

- **1917** — Fokker Dr.I, Sopwith Camel: rotary-engine gyroscopic coupling,
  adverse yaw, low-speed stall/spin behavior, Flanders farmland. Twin .303s
  with tracer ballistics; fight a bandit flown by the AI.
- **2026** — F-16C: FBW alpha/G limiter (25° / 9 G) with lead anticipation,
  afterburner, speedbrake, desert canyons. M61 Vulcan; a MiG-29 patrols the map.
- **Combat** — real projectile physics (muzzle velocity + gravity drop),
  damage with smoke/fire, kill explosions, respawning bandits, kill tally.
  The AI flies the *same flight model* through the same control inputs —
  lead pursuit, break turns when threatened, terrain avoidance.

See [docs/DESIGN.md](docs/DESIGN.md) for the full vision and roadmap.

## Layout

```
src/
  engine/flight/   shared 6-DOF flight model + AircraftSpec data contract
  engine/input.ts  smoothed keyboard controls
  era/wwi/         WWI aircraft data
  era/modern/      modern aircraft data
  world/           procedural terrain (era palettes), placeholder aircraft meshes
  game/            flight session: physics loop, cameras, crash/respawn
  ui/              menu + era-specific HUDs
  career/          dynasty data model (meta-narrative spine, WIP)
tests/             physics sanity tests (sign conventions, stall, FBW, gyroscopics)
```
