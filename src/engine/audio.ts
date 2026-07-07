/**
 * Procedural audio — no samples, everything synthesized live.
 *
 * Continuous layers (driven every frame from flight state):
 *   engine  — WWI: lumpy rotary drone (saw pair + slow AM wobble)
 *             modern: filtered noise turbine + sub-bass, AB adds rumble
 *   wind    — high-passed noise scaled by airspeed
 *   growl   — Sidewinder seeker: warble when seeking, urgent when locked
 *   warn    — inbound-missile beeper
 * One-shots: gun bursts, missile launch whoosh, explosions (distance-scaled).
 *
 * Browsers require a user gesture before audio: the context lazily starts
 * on the first click/keydown/touch. V toggles mute.
 */

interface AudioState {
  era: 'wwi' | 'modern';
  throttle: number;
  speedMs: number;
  afterburner: boolean;
  firingGun: boolean;
  gunRateHz: number;
  growl: 'off' | 'seek' | 'lock';
  inbound: boolean;
}

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  muted = false;

  // continuous layers
  private engGain: GainNode | null = null;
  private engOscA: OscillatorNode | null = null;
  private engOscB: OscillatorNode | null = null;
  private engFilter: BiquadFilterNode | null = null;
  private engLfo: OscillatorNode | null = null;
  private turbGain: GainNode | null = null;
  private turbFilter: BiquadFilterNode | null = null;
  private windGain: GainNode | null = null;
  private growlOsc: OscillatorNode | null = null;
  private growlLfo: OscillatorNode | null = null;
  private growlGain: GainNode | null = null;
  private warnGain: GainNode | null = null;
  private gunTimer = 0;

  constructor() {
    const kick = () => this.ensure();
    window.addEventListener('pointerdown', kick, { passive: true });
    window.addEventListener('keydown', kick);
  }

  private ensure(): boolean {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return true;
    }
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return false;
    const ctx = new Ctx();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.55;
    this.master.connect(ctx.destination);

    // 2s of white noise, shared by every noise-based voice
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;

    this.buildContinuousLayers();
    return true;
  }

  private noiseSource(loop = false): AudioBufferSourceNode {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = loop;
    return src;
  }

  private buildContinuousLayers(): void {
    const ctx = this.ctx!;

    // Prop/rotary engine: two saws through a lowpass, AM wobble
    this.engFilter = ctx.createBiquadFilter();
    this.engFilter.type = 'lowpass';
    this.engFilter.frequency.value = 350;
    this.engGain = ctx.createGain();
    this.engGain.gain.value = 0;
    this.engOscA = ctx.createOscillator(); this.engOscA.type = 'sawtooth'; this.engOscA.frequency.value = 60;
    this.engOscB = ctx.createOscillator(); this.engOscB.type = 'square'; this.engOscB.frequency.value = 121;
    const bGain = ctx.createGain(); bGain.gain.value = 0.35;
    this.engOscA.connect(this.engFilter);
    this.engOscB.connect(bGain).connect(this.engFilter);
    this.engFilter.connect(this.engGain).connect(this.master!);
    this.engLfo = ctx.createOscillator(); this.engLfo.frequency.value = 11;
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 0.35;
    this.engLfo.connect(lfoGain).connect(this.engGain.gain);
    this.engOscA.start(); this.engOscB.start(); this.engLfo.start();

    // Turbine: looped noise through a sweeping bandpass
    this.turbFilter = ctx.createBiquadFilter();
    this.turbFilter.type = 'bandpass';
    this.turbFilter.frequency.value = 400;
    this.turbFilter.Q.value = 0.8;
    this.turbGain = ctx.createGain();
    this.turbGain.gain.value = 0;
    this.turbFilter.connect(this.turbGain).connect(this.master!);
    const turbSrc = this.noiseSource(true);
    turbSrc.connect(this.turbFilter);
    turbSrc.start();

    // Wind: high-passed noise
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'highpass';
    windFilter.frequency.value = 900;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    const windSrc = this.noiseSource(true);
    windSrc.connect(windFilter).connect(this.windGain).connect(this.master!);
    windSrc.start();

    // Seeker growl
    this.growlOsc = ctx.createOscillator(); this.growlOsc.type = 'square'; this.growlOsc.frequency.value = 750;
    this.growlLfo = ctx.createOscillator(); this.growlLfo.frequency.value = 14;
    const gl = ctx.createGain(); gl.gain.value = 120;
    this.growlLfo.connect(gl).connect(this.growlOsc.frequency);
    this.growlGain = ctx.createGain(); this.growlGain.gain.value = 0;
    this.growlOsc.connect(this.growlGain).connect(this.master!);
    this.growlOsc.start(); this.growlLfo.start();

    // Missile warning beeper
    const warnOsc = ctx.createOscillator(); warnOsc.type = 'square'; warnOsc.frequency.value = 1350;
    const gate = ctx.createOscillator(); gate.type = 'square'; gate.frequency.value = 7;
    const gateGain = ctx.createGain(); gateGain.gain.value = 0.5;
    this.warnGain = ctx.createGain(); this.warnGain.gain.value = 0;
    gate.connect(gateGain);
    const beepLevel = ctx.createGain(); beepLevel.gain.value = 0; // gate modulates this
    gateGain.connect(beepLevel.gain);
    warnOsc.connect(beepLevel).connect(this.warnGain).connect(this.master!);
    warnOsc.start(); gate.start();
  }

  toggleMute(): void {
    this.muted = !this.muted;
    if (this.master) this.master.gain.value = this.muted ? 0 : 0.55;
  }

  /** Drive the continuous layers from flight state. Call every frame. */
  update(dt: number, s: AudioState): void {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    const ramp = (p: AudioParam, v: number) => p.setTargetAtTime(v, t, 0.08);

    if (s.era === 'wwi') {
      const rpmHz = 45 + s.throttle * 75;
      ramp(this.engOscA!.frequency, rpmHz);
      ramp(this.engOscB!.frequency, rpmHz * 2.02);
      ramp(this.engGain!.gain, 0.05 + s.throttle * 0.10);
      ramp(this.turbGain!.gain, 0);
    } else {
      ramp(this.engGain!.gain, 0.015 + s.throttle * 0.02); // faint sub whine
      ramp(this.engOscA!.frequency, 70 + s.throttle * 60);
      ramp(this.engOscB!.frequency, 141 + s.throttle * 130);
      ramp(this.turbFilter!.frequency, 300 + s.throttle * 900 + s.speedMs * 1.2);
      ramp(this.turbGain!.gain, 0.05 + s.throttle * 0.09 + (s.afterburner ? 0.10 : 0));
    }

    ramp(this.windGain!.gain, Math.min(Math.max((s.speedMs - 40) / 400, 0), 1) * 0.10);

    // Seeker growl
    if (s.growl === 'off') {
      ramp(this.growlGain!.gain, 0);
    } else {
      ramp(this.growlGain!.gain, 0.028);
      ramp(this.growlLfo!.frequency, s.growl === 'lock' ? 38 : 12);
      ramp(this.growlOsc!.frequency, s.growl === 'lock' ? 950 : 720);
    }

    ramp(this.warnGain!.gain, s.inbound ? 0.06 : 0);

    // Gun bursts while the trigger is down
    this.gunTimer -= dt;
    if (s.firingGun && this.gunTimer <= 0) {
      const rate = Math.min(s.gunRateHz, 28); // audible burst rate, not literal 100 Hz
      this.gunTimer = 1 / rate;
      this.gunShot(s.era);
    }
  }

  private gunShot(era: 'wwi' | 'modern'): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const src = this.noiseSource();
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = era === 'wwi' ? 850 : 480;
    f.Q.value = 0.7;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(era === 'wwi' ? 0.30 : 0.22, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + (era === 'wwi' ? 0.07 : 0.05));
    src.connect(f).connect(g).connect(this.master!);
    src.start(t, Math.random());
    src.stop(t + 0.09);
  }

  /** Missile away: falling whoosh. */
  launch(): void {
    if (!this.ensure()) return;
    const ctx = this.ctx!;
    const src = this.noiseSource();
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    const t = ctx.currentTime;
    f.frequency.setValueAtTime(3200, t);
    f.frequency.exponentialRampToValueAtTime(280, t + 1.3);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.4, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
    src.connect(f).connect(g).connect(this.master!);
    src.start(t, Math.random());
    src.stop(t + 1.5);
  }

  /** Boom, scaled by distance to the listener. */
  explosionAt(distanceM: number): void {
    if (!this.ctx) return;
    const vol = Math.min(0.6, 90 / Math.max(distanceM, 30));
    if (vol < 0.01) return;
    const ctx = this.ctx;
    const src = this.noiseSource();
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    const t = ctx.currentTime;
    f.frequency.setValueAtTime(400, t);
    f.frequency.exponentialRampToValueAtTime(60, t + 0.9);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
    src.connect(f).connect(g).connect(this.master!);
    src.start(t, Math.random());
    src.stop(t + 1.2);
  }

  /** Rounds striking your airframe: sharp thud. */
  hitThud(): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const src = this.noiseSource();
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 250;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(0.35, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    src.connect(f).connect(g).connect(this.master!);
    src.start(t, Math.random());
    src.stop(t + 0.15);
  }
}
