import * as THREE from 'three';
import type { AircraftSpec } from './engine/flight/aircraft';
import { FlightSession } from './game/flightSession';
import { MainMenu } from './ui/menu';
import { isTouchDevice } from './ui/touch';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const uiRoot = document.getElementById('ui') as HTMLElement;

if (isTouchDevice()) {
  document.body.classList.add('touch');
  const hint = document.createElement('div');
  hint.className = 'rotate-hint';
  hint.textContent = '↻ Rotate to landscape for the best cockpit';
  document.body.appendChild(hint);
}

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

let session: FlightSession | null = null;
let menu: MainMenu | null = null;

function showMenu(): void {
  session?.dispose();
  session = null;
  document.body.classList.add('in-menu');
  menu = new MainMenu(uiRoot, startFlight);
}

function startFlight(spec: AircraftSpec): void {
  menu?.dispose();
  menu = null;
  document.body.classList.remove('in-menu');
  session = new FlightSession(renderer, uiRoot, spec);
}

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  session?.resize(window.innerWidth, window.innerHeight);
});

let last = performance.now();
function frame(now: number): void {
  const dt = Math.min((now - last) / 1000, 0.25);
  last = now;
  if (session && !session.update(dt)) {
    showMenu();
  }
  requestAnimationFrame(frame);
}

showMenu();
requestAnimationFrame(frame);
