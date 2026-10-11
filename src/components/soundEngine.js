class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // User must explicitly enable sound via gesture
    this.tickInterval = null;
    this.tickState = 0; // Alternates tick / tock
    this.isHeartbeatMode = false;
  }

  setHeartbeatMode(active) {
    this.isHeartbeatMode = active;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.startTicking();
      this.playClick(600, 0.04);
    } else {
      this.stopTicking();
    }
    return !this.isMuted;
  }

  // Synthesized Swiss Escapement Tick (4Hz / 8 beats per second)
  startTicking() {
    if (this.tickInterval || this.isMuted || !this.ctx) return;

    // 28,800 vph = 8 ticks per second = 125ms per tick
    this.tickInterval = setInterval(() => {
      if (this.isMuted || !this.ctx) return;
      this.tickState = 1 - this.tickState;
      const isTick = this.tickState === 0;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // In Mechanical Heart mode, produce deep organic resonance
      const freq = this.isHeartbeatMode
        ? (isTick ? 2400 : 1800)
        : (isTick ? 3800 : 3200);

      osc.type = this.isHeartbeatMode ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(this.isHeartbeatMode ? 220 : 800, this.ctx.currentTime + 0.02);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq, this.ctx.currentTime);
      filter.Q.setValueAtTime(this.isHeartbeatMode ? 1.8 : 3.0, this.ctx.currentTime);

      const vol = this.isHeartbeatMode ? 0.08 : 0.045;
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + (this.isHeartbeatMode ? 0.035 : 0.018));

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + (this.isHeartbeatMode ? 0.04 : 0.02));
    }, 125);
  }

  stopTicking() {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
  }

  // Tactile interaction click on hover / button tap
  playClick(pitch = 520, duration = 0.03) {
    if (this.isMuted || !this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {}
  }
}

export const soundEngine = new SoundEngine();
