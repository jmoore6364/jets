import * as THREE from 'three';
import type { AircraftSpec } from './engine/flight/aircraft';
import { FlightSession } from './game/flightSession';
import type { Mission } from './game/mission';
import { MainMenu } from './ui/menu';
import { CareerUI } from './ui/career';
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
let career: CareerUI | null = null;
let careerMission: Mission | null = null;

function clearScreens(): void {
  menu?.dispose(); menu = null;
  career?.dispose(); career = null;
}

function showMenu(): void {
  clearScreens();
  session?.dispose();
  session = null;
  document.body.classList.add('in-menu');
  menu = new MainMenu(uiRoot, startSkirmish, openCareer);
}

function openCareer(): void {
  clearScreens();
  document.body.classList.add('in-menu');
  career = new CareerUI(uiRoot, { onFly: startMission, onExit: showMenu });
}

function startSkirmish(spec: AircraftSpec): void {
  clearScreens();
  document.body.classList.remove('in-menu');
  careerMission = null;
  session = new FlightSession(renderer, uiRoot, spec);
}

function startMission(mission: Mission, spec: AircraftSpec): void {
  clearScreens();
  document.body.classList.remove('in-menu');
  careerMission = mission;
  session = new FlightSession(renderer, uiRoot, spec, mission);
}

function endSession(): void {
  if (!session) return;
  const result = session.getResult();
  const mission = careerMission;
  careerMission = null;
  session.dispose();
  session = null;
  if (mission) {
    document.body.classList.add('in-menu');
    career = new CareerUI(uiRoot, { onFly: startMission, onExit: showMenu });
    career.showDebrief(mission, result);
  } else {
    showMenu();
  }
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
    endSession();
  }
  requestAnimationFrame(frame);
}

showMenu();
requestAnimationFrame(frame);
