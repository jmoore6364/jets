/**
 * Placeholder low-poly aircraft, built from primitives. Nose points -Z to
 * match the flight model's body frame. Real models come in a later milestone.
 */
import * as THREE from 'three';
import type { AircraftSpec } from '../engine/flight/aircraft';

function mat(color: number): THREE.MeshLambertMaterial {
  return new THREE.MeshLambertMaterial({ color, flatShading: true });
}

function box(w: number, h: number, d: number, color: number): THREE.Mesh {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
}

/** WWI: fuselage + 2-3 stacked wings + strut posts + tail. */
function buildWwi(spec: AircraftSpec): THREE.Group {
  const g = new THREE.Group();
  const isDr1 = spec.id === 'fokker-dr1';
  const paint = isDr1 ? 0xb02020 : 0xa08a52; // Richthofen red / PC10 khaki
  const wingCount = isDr1 ? 3 : 2;
  const span = spec.wingSpanM;

  const fuselage = box(0.9, 0.95, 5.6, paint);
  fuselage.position.set(0, 0, 0.4);
  g.add(fuselage);

  for (let i = 0; i < wingCount; i++) {
    const wing = box(span - i * 0.6, 0.12, 1.5, paint);
    wing.position.set(0, -0.25 + i * 0.85, -0.6);
    g.add(wing);
  }
  // Interplane struts
  for (const sx of [-span * 0.35, span * 0.35]) {
    const strut = box(0.08, wingCount * 0.85, 0.08, 0x4a3b28);
    strut.position.set(sx, 0.15, -0.6);
    g.add(strut);
  }

  const tailplane = box(2.6, 0.1, 1.1, paint);
  tailplane.position.set(0, 0.1, 3.0);
  g.add(tailplane);
  const fin = box(0.1, 0.9, 1.0, paint);
  fin.position.set(0, 0.55, 3.1);
  g.add(fin);

  // Cowling + prop disc
  const cowl = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.5, 0.6, 10), mat(0x777777));
  cowl.rotation.x = Math.PI / 2;
  cowl.position.set(0, 0, -2.6);
  g.add(cowl);
  const prop = new THREE.Mesh(
    new THREE.CircleGeometry(1.3, 20),
    new THREE.MeshBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
  );
  prop.position.set(0, 0, -2.95);
  prop.name = 'propDisc';
  g.add(prop);

  return g;
}

/** Modern: pointed nose, blended body, swept delta-ish wing, single fin. */
function buildModern(spec: AircraftSpec): THREE.Group {
  const g = new THREE.Group();
  const gray = spec.id === 'mig29' ? 0x5d6b75 : 0x8b95a1; // Fulcrum wears darker camo

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.5, 10, 8), mat(gray));
  body.rotation.x = Math.PI / 2;
  body.position.z = 0.5;
  g.add(body);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.62, 2.6, 8), mat(gray));
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -5.8;
  g.add(nose);

  // Swept wing: shear a flat box back along +Z
  const wingGeo = new THREE.BoxGeometry(9.4, 0.16, 3.4);
  const wp = wingGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < wp.count; i++) {
    wp.setZ(i, wp.getZ(i) + Math.abs(wp.getX(i)) * 0.55);
  }
  wingGeo.computeVertexNormals();
  const wing = new THREE.Mesh(wingGeo, mat(gray));
  wing.position.set(0, -0.1, 0.2);
  g.add(wing);

  const stabGeo = new THREE.BoxGeometry(4.4, 0.12, 1.6);
  const sp = stabGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < sp.count; i++) sp.setZ(i, sp.getZ(i) + Math.abs(sp.getX(i)) * 0.5);
  stabGeo.computeVertexNormals();
  const stab = new THREE.Mesh(stabGeo, mat(gray));
  stab.position.set(0, 0, 4.6);
  g.add(stab);

  const finGeo = new THREE.BoxGeometry(0.14, 2.6, 2.2);
  const fp = finGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < fp.count; i++) fp.setZ(i, fp.getZ(i) + Math.max(0, fp.getY(i)) * 0.9);
  finGeo.computeVertexNormals();
  const fin = new THREE.Mesh(finGeo, mat(spec.id === 'mig29' ? 0x4d5a63 : 0x77808c));
  fin.name = 'fin';
  fin.position.set(0, 1.4, 3.9);
  g.add(fin);

  // Canopy
  const canopy = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 10, 8),
    new THREE.MeshLambertMaterial({ color: 0x2a3d55 })
  );
  canopy.scale.set(0.9, 0.7, 1.8);
  canopy.position.set(0, 0.5, -2.6);
  g.add(canopy);

  // Afterburner glow (toggled by the session)
  const ab = new THREE.Mesh(
    new THREE.ConeGeometry(0.45, 2.2, 8),
    new THREE.MeshBasicMaterial({ color: 0xff7722, transparent: true, opacity: 0.85 })
  );
  ab.rotation.x = Math.PI / 2; // flame tip aft (+Z)
  ab.position.set(0, 0, 6.6);
  ab.visible = false;
  ab.name = 'abFlame';
  g.add(ab);

  return g;
}

export function buildAircraftMesh(spec: AircraftSpec): THREE.Group {
  return spec.era === 'wwi' ? buildWwi(spec) : buildModern(spec);
}
