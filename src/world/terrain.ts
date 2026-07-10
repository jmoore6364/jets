/**
 * Procedural low-poly terrain, shared by both eras with different palettes:
 * WWI gets sodden Flanders farmland, the modern era gets desert canyons.
 * Height function is analytic so physics can sample it for ground collision.
 */
import * as THREE from 'three';
import type { Era } from '../engine/flight/aircraft';

// --- Deterministic value noise (no deps) ---
function hash2(x: number, y: number): number {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function valueNoise(x: number, y: number): number {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi);
  const c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
}

function fbm(x: number, y: number, octaves: number): number {
  let v = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < octaves; i++) {
    v += amp * valueNoise(x * freq, y * freq);
    amp *= 0.5;
    freq *= 2.05;
  }
  return v;
}

/** Radial-falloff disc for the sun and its halo — no more square sun. */
function makeGlowTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.7, 'rgba(255,255,255,0.25)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * A lumpy cloud: overlapping soft puffs clustered along the horizontal,
 * bigger through the middle, with a flatter base — drawn once to a canvas.
 */
function makeCloudTexture(seed: number): THREE.Texture {
  const W = 256, H = 128;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  const puffs = 11;
  for (let i = 0; i < puffs; i++) {
    const t = i / (puffs - 1);
    const px = W * (0.14 + 0.72 * t) + (hash2(seed * 31 + i, 5) - 0.5) * 22;
    // tops billow, bottoms stay flat
    const py = H * 0.62 - Math.sin(t * Math.PI) * H * 0.22 * (0.6 + hash2(seed, i) * 0.8);
    const pr = (H * 0.16 + hash2(seed * 7, i) * H * 0.2) * (0.7 + Math.sin(t * Math.PI) * 0.5);
    const g = ctx.createRadialGradient(px, py, 0, px, py, pr);
    g.addColorStop(0, 'rgba(255,255,255,0.85)');
    g.addColorStop(0.6, 'rgba(255,255,255,0.4)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(px - pr, py - pr, pr * 2, pr * 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Where the war happens. Each era owns a set; 'ocean' brings the carrier. */
export type Theater = 'flanders' | 'coast' | 'desert' | 'arctic' | 'ocean';

export const THEATERS: Record<Era, Theater[]> = {
  wwi: ['flanders', 'coast'],
  modern: ['desert', 'arctic', 'ocean']
};

export function randomTheater(era: Era): Theater {
  const list = THEATERS[era];
  return list[Math.floor(Math.random() * list.length)];
}

export interface EraEnvironment {
  /** Collision height — never below the water surface where there is one. */
  terrainHeight(x: number, z: number): number;
  theater: Theater;
  /** Water surface height, or null on dry theaters. */
  waterY: number | null;
  group: THREE.Group;
  skyColor: THREE.Color;
  fogColor: THREE.Color;
  fogDensity: number;
}

const SIZE = 16000;      // 16 km square
const SEGMENTS = 220;

function smooth01(v: number): number {
  const t = Math.min(Math.max(v, 0), 1);
  return t * t * (3 - 2 * t);
}

export function buildEnvironment(era: Era, theater?: Theater): EraEnvironment {
  const th: Theater = theater ?? (era === 'modern' ? 'desert' : 'flanders');
  const group = new THREE.Group();

  const heightScale = era === 'modern' ? 900 : 120;
  const heightFreq = th === 'ocean' ? 1 / 3000 : era === 'modern' ? 1 / 4200 : 1 / 1600;
  const hasWater = th === 'ocean' || th === 'coast';

  /** Raw terrain, allowed below sea level — the mesh shows the seabed. */
  const rawHeight = (x: number, z: number): number => {
    const base = fbm(x * heightFreq, z * heightFreq, 5);
    if (th === 'ocean') {
      // Island chains: most of the map drowned, peaks break the surface.
      return Math.pow(base, 1.6) * 800 - 300;
    }
    let h = Math.pow(base, era === 'modern' ? 1.8 : 1.2) * heightScale;
    if (era === 'modern') {
      // Carve canyon floors flat-ish for that Top Gun low-level run.
      h = Math.max(h - 60, 0) * 1.1;
    }
    if (th === 'coast') {
      // The land slides into the Channel toward the west.
      h -= smooth01((-x - 2200) / 2000) * 260;
    }
    return h;
  };

  const terrainHeight = (x: number, z: number): number =>
    hasWater ? Math.max(rawHeight(x, z), 0) : rawHeight(x, z);

  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEGMENTS, SEGMENTS);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = rawHeight(x, z);
    pos.setY(i, h);

    const t = Math.max(h, 0) / heightScale;
    const speckle = hash2(Math.floor(x / 90), Math.floor(z / 90));
    if (h < 0) {
      // Seabed: sandy shallows shading into deep blue-green.
      const d = Math.min(-h / 220, 1);
      c.setRGB(0.55 - d * 0.42, 0.55 - d * 0.34, 0.42 - d * 0.18);
    } else if (th === 'flanders' || th === 'coast') {
      // Muddy greens & browns; occasional shell-churned field.
      if (speckle > 0.82) c.setRGB(0.32 + t * 0.1, 0.26, 0.16);       // mud
      else c.setRGB(0.24 + t * 0.15, 0.34 + t * 0.12, 0.16);          // field green
      if (speckle < 0.08) c.multiplyScalar(0.8);                       // hedgerow shadow
      if (th === 'coast' && h < 8) c.setRGB(0.72, 0.66, 0.5);          // beach strip
    } else if (th === 'arctic') {
      // Frozen flats, gray rock shoulders, snow ridgelines.
      if (t < 0.05) c.setRGB(0.8, 0.85, 0.9);
      else if (t < 0.45) c.setRGB(0.44 + t * 0.2, 0.47 + t * 0.2, 0.52 + t * 0.2);
      else c.setRGB(0.88, 0.91, 0.96);
      if (speckle > 0.88) c.multiplyScalar(0.92);
    } else if (th === 'ocean') {
      // Islands: sand ring, green interior, gray peaks.
      if (h < 12) c.setRGB(0.8, 0.72, 0.52);
      else if (t < 0.3) c.setRGB(0.25 + t * 0.2, 0.45 + t * 0.1, 0.24);
      else c.setRGB(0.5 + t * 0.2, 0.5 + t * 0.18, 0.46 + t * 0.15);
      if (speckle > 0.9) c.multiplyScalar(0.9);
    } else {
      // Desert: tan floors, red-rock walls, pale ridgelines.
      if (t < 0.05) c.setRGB(0.78, 0.68, 0.5);
      else if (t < 0.5) c.setRGB(0.62 + t * 0.15, 0.4 + t * 0.1, 0.28);
      else c.setRGB(0.7 + t * 0.15, 0.62 + t * 0.12, 0.55);
      if (speckle > 0.9) c.multiplyScalar(0.9);
    }
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  const terrain = new THREE.Mesh(
    geo,
    new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
  );
  terrain.name = 'terrain';
  group.add(terrain);

  // Water surface — oversized so the ocean runs past the terrain edge.
  if (hasWater) {
    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(SIZE * 4, SIZE * 4),
      new THREE.MeshLambertMaterial({
        color: th === 'ocean' ? 0x1e5d8e : 0x3d6b74,
        transparent: true,
        opacity: 0.88
      })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.2;
    group.add(water);
  }

  // Lighting
  const sun = new THREE.DirectionalLight(0xffffff, era === 'modern' ? 2.6 : 1.9);
  sun.position.set(-3000, 5000, -2000);
  group.add(sun);

  // Visible sun disc + glow, far along the light direction
  const sunDir = sun.position.clone().normalize();
  const glowTex = makeGlowTexture();
  const mkGlow = (size: number, opacity: number, color: number) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color, transparent: true, opacity,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false
    }));
    s.position.copy(sunDir).multiplyScalar(18000);
    s.scale.setScalar(size);
    return s;
  };
  group.add(mkGlow(2600, 0.9, 0xfff3d0), mkGlow(7000, 0.28, era === 'modern' ? 0xffe9b0 : 0xf5e6c8));

  // Cloud layer: soft static billboards drifting over the map
  const cloudTextures = [makeCloudTexture(1), makeCloudTexture(2), makeCloudTexture(3)];
  const cloudBase = era === 'modern' ? 2400 : 1100;
  for (let i = 0; i < 26; i++) {
    const c1 = new THREE.Sprite(new THREE.SpriteMaterial({
      map: cloudTextures[i % cloudTextures.length],
      color: 0xffffff, transparent: true, depthWrite: false,
      opacity: 0.5 + hash2(i, 7) * 0.3
    }));
    c1.position.set(
      (hash2(i, 1) - 0.5) * SIZE * 0.9,
      cloudBase + hash2(i, 2) * 900,
      (hash2(i, 3) - 0.5) * SIZE * 0.9
    );
    c1.scale.set(500 + hash2(i, 4) * 700, 130 + hash2(i, 5) * 160, 1);
    group.add(c1);
  }
  const hemi = new THREE.HemisphereLight(
    era === 'modern' ? 0xbfd8ff : 0xcfd8d0,
    era === 'modern' ? 0x8a6f4f : 0x3d4a2f,
    era === 'modern' ? 0.9 : 0.8
  );
  group.add(hemi);

  const palettes: Record<Theater, { sky: number; fog: number; density: number }> = {
    desert: { sky: 0x7ab6e8, fog: 0xcfd9e2, density: 0.000055 },
    arctic: { sky: 0x9cc4e8, fog: 0xe2eaf2, density: 0.00004 },
    ocean: { sky: 0x6fb0e8, fog: 0xc4dcec, density: 0.00004 },
    flanders: { sky: 0x9fb4bd, fog: 0xb9c4c2, density: 0.00013 },
    coast: { sky: 0x9db6c4, fog: 0xb9c8cc, density: 0.0001 }
  };
  const pal = palettes[th];

  return {
    terrainHeight,
    theater: th,
    waterY: hasWater ? 0 : null,
    group,
    skyColor: new THREE.Color(pal.sky),
    fogColor: new THREE.Color(pal.fog),
    fogDensity: pal.density
  };
}
