/**
 * Pooled sprite effects: damage smoke, engine fire, kill explosions.
 */
import * as THREE from 'three';

function makePuffTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

interface Puff {
  sprite: THREE.Sprite;
  life: number;
  maxLife: number;
  growth: number;
  baseOpacity: number;
}

const POOL = 96;

export class EffectsPool {
  private puffs: Puff[] = [];
  private texture = makePuffTexture();

  constructor(scene: THREE.Scene) {
    for (let i = 0; i < POOL; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.texture, transparent: true, depthWrite: false, opacity: 0 });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      scene.add(sprite);
      this.puffs.push({ sprite, life: 0, maxLife: 1, growth: 0, baseOpacity: 1 });
    }
  }

  spawn(pos: THREE.Vector3, opts: { size: number; growth?: number; life?: number; color?: number; opacity?: number }): void {
    const p = this.puffs.find(x => x.life <= 0);
    if (!p) return;
    p.life = p.maxLife = opts.life ?? 1.6;
    p.growth = opts.growth ?? 3;
    p.baseOpacity = opts.opacity ?? 0.55;
    p.sprite.visible = true;
    p.sprite.position.copy(pos);
    p.sprite.scale.setScalar(opts.size);
    (p.sprite.material as THREE.SpriteMaterial).color.setHex(opts.color ?? 0x222222);
  }

  /** Big orange flash + debris smoke. */
  explosion(pos: THREE.Vector3): void {
    this.spawn(pos, { size: 14, growth: 30, life: 0.5, color: 0xffa030, opacity: 0.95 });
    this.spawn(pos, { size: 8, growth: 18, life: 0.9, color: 0xff5510, opacity: 0.9 });
    for (let i = 0; i < 6; i++) {
      const jitter = new THREE.Vector3((Math.random() - 0.5) * 10, Math.random() * 8, (Math.random() - 0.5) * 10);
      this.spawn(jitter.add(pos), { size: 6, growth: 5, life: 2.5, color: 0x1a1a1a, opacity: 0.6 });
    }
  }

  update(dt: number): void {
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.sprite.visible = false;
        continue;
      }
      const t = p.life / p.maxLife;
      p.sprite.scale.addScalar(p.growth * dt);
      (p.sprite.material as THREE.SpriteMaterial).opacity = p.baseOpacity * t;
    }
  }

  dispose(): void {
    for (const p of this.puffs) {
      (p.sprite.material as THREE.SpriteMaterial).dispose();
      p.sprite.removeFromParent();
    }
    this.texture.dispose();
  }
}
