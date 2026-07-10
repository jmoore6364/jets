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

export interface EraEnvironment {
  terrainHeight(x: number, z: number): number;
  group: THREE.Group;
  skyColor: THREE.Color;
  fogColor: THREE.Color;
  fogDensity: number;
}

const SIZE = 16000;      // 16 km square
const SEGMENTS = 220;

export function buildEnvironment(era: Era): EraEnvironment {
  const group = new THREE.Group();

  const heightScale = era === 'modern' ? 900 : 120;
  const heightFreq = era === 'modern' ? 1 / 4200 : 1 / 1600;

  const terrainHeight = (x: number, z: number): number => {
    const base = fbm(x * heightFreq, z * heightFreq, 5);
    let h = Math.pow(base, era === 'modern' ? 1.8 : 1.2) * heightScale;
    if (era === 'modern') {
      // Carve canyon floors flat-ish for that Top Gun low-level run.
      h = Math.max(h - 60, 0) * 1.1;
    }
    return h;
  };

  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEGMENTS, SEGMENTS);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = terrainHeight(x, z);
    pos.setY(i, h);

    const t = h / heightScale;
    const speckle = hash2(Math.floor(x / 90), Math.floor(z / 90));
    if (era === 'wwi') {
      // Muddy greens & browns; occasional shell-churned field.
      if (speckle > 0.82) c.setRGB(0.32 + t * 0.1, 0.26, 0.16);       // mud
      else c.setRGB(0.24 + t * 0.15, 0.34 + t * 0.12, 0.16);          // field green
      if (speckle < 0.08) c.multiplyScalar(0.8);                       // hedgerow shadow
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

  const skyColor = era === 'modern' ? new THREE.Color(0x7ab6e8) : new THREE.Color(0x9fb4bd);
  const fogColor = era === 'modern' ? new THREE.Color(0xcfd9e2) : new THREE.Color(0xb9c4c2);
  const fogDensity = era === 'modern' ? 0.000055 : 0.00013; // WWI: closer haze

  return { terrainHeight, group, skyColor, fogColor, fogDensity };
}
