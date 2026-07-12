/**
 * Wingtip trails: contrails at altitude, vapor in a hard pull, silk
 * streamers on a diving scout. One rolling line buffer per wingtip —
 * when the condition drops, new samples collapse onto the tip and the
 * old trail slides off the end of the buffer.
 */
import * as THREE from 'three';
import type { FlightBody } from '../engine/flight/flightBody';

const POINTS = 90;
const SAMPLE_S = 0.06;

export class WingTrails {
  private lines: THREE.Line[] = [];
  private buffers: Float32Array[] = [];
  private timer = 0;
  private material: THREE.LineBasicMaterial;

  constructor(scene: THREE.Scene, color: number, opacity: number) {
    this.material = new THREE.LineBasicMaterial({
      color, transparent: true, opacity, depthWrite: false
    });
    for (let i = 0; i < 2; i++) {
      const buf = new Float32Array(POINTS * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(buf, 3));
      const line = new THREE.Line(geo, this.material);
      line.frustumCulled = false;
      line.visible = false;
      scene.add(line);
      this.buffers.push(buf);
      this.lines.push(line);
    }
  }

  /** Seed both trails at the tips (e.g. after a respawn teleport). */
  reset(model: FlightBody, halfSpanM: number): void {
    for (const side of [0, 1]) {
      const tip = new THREE.Vector3(side === 0 ? -halfSpanM : halfSpanM, 0, 0.4)
        .applyQuaternion(model.quaternion).add(model.position);
      const buf = this.buffers[side];
      for (let i = 0; i < POINTS; i++) {
        buf[i * 3] = tip.x; buf[i * 3 + 1] = tip.y; buf[i * 3 + 2] = tip.z;
      }
    }
  }

  update(dt: number, model: FlightBody, halfSpanM: number, active: boolean): void {
    this.timer -= dt;
    if (this.timer > 0) return;
    this.timer = SAMPLE_S;

    let anyVisible = false;
    for (const side of [0, 1]) {
      const buf = this.buffers[side];
      // slide the history back one slot
      buf.copyWithin(3, 0, (POINTS - 1) * 3);
      const tip = new THREE.Vector3(side === 0 ? -halfSpanM : halfSpanM, 0, 0.4)
        .applyQuaternion(model.quaternion).add(model.position);
      if (active) {
        buf[0] = tip.x; buf[1] = tip.y; buf[2] = tip.z;
      } else {
        // collapse: new head rides the tip so no fresh ribbon is laid,
        // while the old trail ages out of the buffer
        buf[0] = tip.x; buf[1] = tip.y; buf[2] = tip.z;
        buf[3] = tip.x; buf[4] = tip.y; buf[5] = tip.z;
      }
      const attr = this.lines[side].geometry.getAttribute('position') as THREE.BufferAttribute;
      attr.needsUpdate = true;
      // visible while any part of the ribbon is stretched out
      const dx = buf[0] - buf[(POINTS - 1) * 3];
      const dy = buf[1] - buf[(POINTS - 1) * 3 + 1];
      const dz = buf[2] - buf[(POINTS - 1) * 3 + 2];
      const stretched = dx * dx + dy * dy + dz * dz > 25;
      this.lines[side].visible = active || stretched;
      anyVisible = anyVisible || this.lines[side].visible;
    }
    void anyVisible;
  }

  dispose(): void {
    for (const l of this.lines) {
      l.removeFromParent();
      l.geometry.dispose();
    }
    this.material.dispose();
  }
}

/** The condition, era-appropriate: when does this airframe draw lines? */
export function trailActive(model: FlightBody): boolean {
  const s = model.sample;
  if (model.spec.era === 'modern') {
    // Contrail band at altitude, or vapor in a hard pull
    return s.altitudeM > 5200 || Math.abs(s.gLoad) > 5.6;
  }
  // Streamers in a fast dive
  return s.speedMs > model.spec.cruiseSpeedMs * 1.22;
}
