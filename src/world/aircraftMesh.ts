/**
 * Procedural aircraft, built from primitives but shaped to be recognizable:
 * the Viper's bubble canopy and chin intake, the Fulcrum's twin canted tails,
 * the Dr.I's stacked triplane wall, the Camel's humped cowl and roundels.
 * Nose points -Z to match the flight model's body frame.
 */
import * as THREE from 'three';
import type { AircraftSpec } from '../engine/flight/aircraft';

function mat(color: number): THREE.MeshLambertMaterial {
  return new THREE.MeshLambertMaterial({ color, flatShading: true });
}

function box(w: number, h: number, d: number, color: number): THREE.Mesh {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
}

/** Shear a box along +Z proportional to |x| — instant swept wing. */
function sweptWing(span: number, thickness: number, chord: number, sweep: number, color: number): THREE.Mesh {
  const geo = new THREE.BoxGeometry(span, thickness, chord);
  const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    p.setZ(i, p.getZ(i) + Math.abs(p.getX(i)) * sweep);
    // taper: outboard chord shrinks
    const t = 1 - Math.abs(p.getX(i)) / (span / 2) * 0.45;
    p.setZ(i, p.getZ(i) * Math.max(t, 0.4) + Math.abs(p.getX(i)) * sweep * 0.25);
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, mat(color));
}

function muzzleFlash(): THREE.Sprite {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    color: 0xffdd88, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  s.scale.setScalar(1.6);
  s.visible = false;
  s.name = 'muzzleFlash';
  return s;
}

/* ------------------------------- WWI ------------------------------- */

function buildWwi(spec: AircraftSpec): THREE.Group {
  const g = new THREE.Group();
  const isDr1 = spec.id === 'fokker-dr1';
  const isSpad = spec.id === 'spad13';
  const isD7 = spec.id === 'fokker-d7';
  const isSe5 = spec.id === 'se5a';
  const isAlb = spec.id === 'albatros';
  const paint = isDr1 ? 0xb02020
    : isSpad ? 0xb09a62
    : isD7 ? 0x55684e
    : isSe5 ? 0x6b6b44          // PC10 khaki-green
    : isAlb ? 0x9c8454          // varnished plywood
    : 0x9a8449;
  const wingCount = isDr1 ? 3 : 2;
  const entente = spec.id === 'sopwith-camel' || isSpad || isSe5;
  const span = spec.wingSpanM;

  // Fuselage: nose box + tapering rear
  const noseSec = box(0.95, 1.0, 2.4, paint);
  noseSec.position.set(0, 0, -1.2);
  g.add(noseSec);
  const rearGeo = new THREE.BoxGeometry(0.9, 0.95, 3.6);
  const rp = rearGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < rp.count; i++) {
    if (rp.getZ(i) > 1) { rp.setX(i, rp.getX(i) * 0.35); rp.setY(i, rp.getY(i) * 0.45); }
  }
  rearGeo.computeVertexNormals();
  const rear = new THREE.Mesh(rearGeo, mat(paint));
  rear.position.set(0, 0.02, 1.8);
  g.add(rear);

  // Wings (staggered like the real airframes)
  for (let i = 0; i < wingCount; i++) {
    const wing = box(span - i * 0.5, 0.13, 1.45, paint);
    wing.position.set(0, -0.35 + i * 0.85, -0.7 - i * 0.18);
    g.add(wing);
    if (entente && i === wingCount - 1) {
      // Allied roundels on the top wing
      for (const sx of [-span * 0.32, span * 0.32]) {
        const r1 = new THREE.Mesh(new THREE.CircleGeometry(0.5, 16), mat(0x1a3a8a));
        r1.rotation.x = -Math.PI / 2; r1.position.set(sx, 0.075, -0.7 - i * 0.18);
        const r2 = new THREE.Mesh(new THREE.CircleGeometry(0.32, 16), mat(0xf0f0f0));
        r2.rotation.x = -Math.PI / 2; r2.position.set(sx, 0.078, r1.position.z);
        const r3 = new THREE.Mesh(new THREE.CircleGeometry(0.15, 16), mat(0xb02020));
        r3.rotation.x = -Math.PI / 2; r3.position.set(sx, 0.081, r1.position.z);
        g.add(r1, r2, r3);
      }
    }
  }
  for (const sx of [-span * 0.34, span * 0.34]) {
    const strut = box(0.07, (wingCount - 1) * 0.85 + 0.2, 0.07, 0x4a3b28);
    strut.position.set(sx, -0.35 + (wingCount - 1) * 0.425, -0.7);
    g.add(strut);
  }

  // Tail
  const tailplane = box(2.5, 0.09, 1.05, paint);
  tailplane.position.set(0, 0.12, 3.1);
  g.add(tailplane);
  const finGeo = new THREE.BoxGeometry(0.09, 1.0, 1.05);
  const fp = finGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < fp.count; i++) fp.setZ(i, fp.getZ(i) + Math.max(0, fp.getY(i)) * 0.5);
  finGeo.computeVertexNormals();
  const fin = new THREE.Mesh(finGeo, mat(isDr1 ? 0xf0f0f0 : paint));
  fin.name = 'fin';
  fin.position.set(0, 0.6, 3.2);
  g.add(fin);

  // Nose: round rotary cowl, or a flat radiator for the inline-engined birds
  const cowl = isSpad || isD7 || isSe5 || isAlb
    ? new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.9, 0.6), mat(0x6e6e72))
    : new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.52, 0.7, 12), mat(0x6e6e72));
  cowl.rotation.x = Math.PI / 2;
  cowl.position.set(0, 0, -2.65);
  g.add(cowl);
  const prop = new THREE.Mesh(
    new THREE.CircleGeometry(1.35, 24),
    new THREE.MeshBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
  );
  prop.position.set(0, 0, -3.05);
  prop.name = 'propDisc';
  g.add(prop);

  // Undercarriage
  for (const sx of [-0.55, 0.55]) {
    const leg = box(0.06, 0.7, 0.06, 0x4a3b28);
    leg.position.set(sx, -0.8, -1.0);
    g.add(leg);
  }
  const axleWing = box(1.4, 0.08, 0.5, paint);
  axleWing.position.set(0, -1.12, -1.0);
  g.add(axleWing);

  const flash = muzzleFlash();
  flash.position.set(0, 0.45, -2.2);
  g.add(flash);

  return g;
}

/* ------------------------------ MODERN ------------------------------ */

function buildModern(spec: AircraftSpec): THREE.Group {
  const g = new THREE.Group();
  const mig = spec.id === 'mig29' || spec.id === 'su27';
  const flanker = spec.id === 'su27';
  const hornet = spec.id === 'fa18';
  const raptor = spec.id === 'f22';
  const tomcat = spec.id === 'f14';
  const skin = flanker ? 0x7d94ad : mig ? 0x5d6b75 : hornet ? 0x9aa4ad : raptor ? 0x737e87 : tomcat ? 0x8e97a2 : 0x8b95a1;
  const dark = flanker ? 0x5f7690 : mig ? 0x46525b : hornet ? 0x7f8992 : raptor ? 0x5e6871 : tomcat ? 0x767f8a : 0x77808c;

  // Fuselage: tapered central body
  const bodyGeo = new THREE.CylinderGeometry(0.62, 0.55, 9.6, 10);
  bodyGeo.rotateX(Math.PI / 2);
  const body = new THREE.Mesh(bodyGeo, mat(skin));
  body.position.z = 0.4;
  g.add(body);

  // Nose cone
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.6, 2.8, 10), mat(skin));
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -5.7;
  g.add(nose);

  // Bubble canopy
  const canopy = new THREE.Mesh(
    new THREE.SphereGeometry(0.58, 12, 8),
    new THREE.MeshLambertMaterial({ color: 0x2a3d55 })
  );
  canopy.scale.set(0.85, 0.75, 2.0);
  canopy.position.set(0, 0.55, -2.9);
  g.add(canopy);

  if (mig || hornet || raptor || tomcat) {
    // Twin engine nacelles (shoulder-mounted on the MiG, tucked on the Hornet)
    for (const sx of mig ? [-0.75, 0.75] : tomcat ? [-0.85, 0.85] : [-0.58, 0.58]) {
      const nacGeo = new THREE.CylinderGeometry(mig ? 0.42 : 0.38, mig ? 0.4 : 0.36, 6.2, 8);
      nacGeo.rotateX(Math.PI / 2);
      const nac = new THREE.Mesh(nacGeo, mat(dark));
      nac.position.set(sx, -0.25, 2.0);
      g.add(nac);
    }
  } else {
    // Viper chin intake
    const intakeGeo = new THREE.CylinderGeometry(0.42, 0.46, 2.6, 8);
    intakeGeo.rotateX(Math.PI / 2);
    const intake = new THREE.Mesh(intakeGeo, mat(dark));
    intake.position.set(0, -0.55, -1.0);
    g.add(intake);
  }

  // Main wing
  const wing = sweptWing(9.6, 0.16, 3.6, 0.55, skin);
  wing.position.set(0, -0.08, 0.6);
  g.add(wing);

  // Wingtip missiles
  for (const sx of [-4.7, 4.7]) {
    const mslGeo = new THREE.CylinderGeometry(0.09, 0.09, 2.6, 6);
    mslGeo.rotateX(Math.PI / 2);
    const msl = new THREE.Mesh(mslGeo, mat(0xe8e8e8));
    msl.position.set(sx, -0.08, 1.0);
    g.add(msl);
  }

  // Horizontal stabs
  const stab = sweptWing(4.6, 0.12, 1.8, 0.5, skin);
  stab.position.set(0, -0.05, 4.7);
  g.add(stab);

  // Tail(s)
  const makeFin = (sx: number, cant: number) => {
    const finGeo = new THREE.BoxGeometry(0.12, 2.5, 2.1);
    const fp = finGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < fp.count; i++) fp.setZ(i, fp.getZ(i) + Math.max(0, fp.getY(i)) * 0.85);
    finGeo.computeVertexNormals();
    const fin = new THREE.Mesh(finGeo, mat(dark));
    fin.name = 'fin';
    fin.position.set(sx, 1.3, 3.9);
    fin.rotation.z = cant;
    return fin;
  };
  if (mig) {
    g.add(makeFin(-0.75, 0.16), makeFin(0.75, -0.16));
  } else if (hornet) {
    g.add(makeFin(-0.62, 0.35), makeFin(0.62, -0.35)); // the Hornet's hard cant
  } else if (raptor) {
    g.add(makeFin(-0.7, 0.42), makeFin(0.7, -0.42));   // big canted slabs
  } else if (tomcat) {
    g.add(makeFin(-0.85, 0.06), makeFin(0.85, -0.06)); // near-vertical twins
  } else {
    g.add(makeFin(0, 0));
  }

  // Heavier iron reads bigger on screen.
  if (raptor) g.scale.setScalar(1.15);
  if (tomcat) g.scale.setScalar(1.3);
  if (flanker) g.scale.setScalar(1.2);

  // Afterburner flame
  const ab = new THREE.Mesh(
    new THREE.ConeGeometry(0.45, 2.4, 8),
    new THREE.MeshBasicMaterial({ color: 0xff7722, transparent: true, opacity: 0.85 })
  );
  ab.rotation.x = Math.PI / 2;
  ab.position.set(0, 0, 6.7);
  ab.visible = false;
  ab.name = 'abFlame';
  g.add(ab);

  const flash = muzzleFlash();
  flash.position.set(-0.45, 0.1, -4.6); // port-side cannon, like the real Viper
  g.add(flash);

  return g;
}

export function buildAircraftMesh(spec: AircraftSpec): THREE.Group {
  // Bombers: build at fighter proportions, then scale the whole airframe up.
  if (spec.id === 'gotha' || spec.id === 'backfire') {
    const k = spec.era === 'wwi' ? 2.4 : 2.1;
    const shrunk = { ...spec, wingSpanM: spec.wingSpanM / k };
    const g = spec.era === 'wwi' ? buildWwi(shrunk) : buildModern(shrunk);
    g.scale.setScalar(k);
    return g;
  }
  return spec.era === 'wwi' ? buildWwi(spec) : buildModern(spec);
}
