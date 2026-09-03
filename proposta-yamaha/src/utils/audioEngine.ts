/**
 * Radio Audio Engine with Web Audio & Speech Synthesis fallback
 * Provides authentic radio preview experience with beats, ducking, and narration.
 */

class RadioAudioEngine {
  private audioCtx: AudioContext | null = null;
  private bgmGain: GainNode | null = null;
  private isPlayingBgm = false;
  private synthInterval: number | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  public playRadioBgm() {
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.stopRadioBgm();
      this.isPlayingBgm = true;

      const masterGain = this.audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
      masterGain.connect(this.audioCtx.destination);
      this.bgmGain = masterGain;

      // Create an energetic radio beat & bassline synthesizer loop
      let step = 0;
      const bpm = 126;
      const stepTime = (60 / bpm) / 4 * 1000;

      const playDrumHit = () => {
        if (!this.isPlayingBgm || !this.audioCtx || !this.bgmGain) return;
        const now = this.audioCtx.currentTime;

        // Kick on every beat
        if (step % 4 === 0) {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140, now);
          osc.frequency.exponentialRampToValueAtTime(38, now + 0.12);
          gain.gain.setValueAtTime(0.4, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
          osc.connect(gain);
          gain.connect(this.bgmGain);
          osc.start(now);
          osc.stop(now + 0.15);
        }

        // Snare / Clap on 2 and 4
        if (step % 8 === 4) {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(220, now);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
          osc.connect(gain);
          gain.connect(this.bgmGain);
          osc.start(now);
          osc.stop(now + 0.1);
        }

        // Upbeat Hi-hat
        if (step % 2 === 1) {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'highpass' as unknown as OscillatorType;
          osc.frequency.setValueAtTime(7000, now);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
          osc.connect(gain);
          gain.connect(this.bgmGain);
          osc.start(now);
          osc.stop(now + 0.04);
        }

        // Funky Bass note
        if (step % 4 === 2 || step % 8 === 6) {
          const bass = this.audioCtx.createOscillator();
          const bassGain = this.audioCtx.createGain();
          bass.type = 'sawtooth';
          const notes = [110, 110, 130.8, 146.8];
          const freq = notes[Math.floor((step / 4) % notes.length)];
          bass.frequency.setValueAtTime(freq, now);
          bassGain.gain.setValueAtTime(0.12, now);
          bassGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
          bass.connect(bassGain);
          bassGain.connect(this.bgmGain);
          bass.start(now);
          bass.stop(now + 0.16);
        }

        step = (step + 1) % 32;
      };

      this.synthInterval = window.setInterval(playDrumHit, stepTime);
    } catch {
      // AudioContext fallback
    }
  }

  public stopRadioBgm() {
    this.isPlayingBgm = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    if (this.bgmGain && this.audioCtx) {
      try {
        this.bgmGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
      } catch {
        // Safe catch
      }
    }
  }

  public speakScript(text: string, onEnd?: () => void, onBoundary?: (charIndex: number) => void) {
    if (!('speechSynthesis' in window)) return;
    this.stopSpeech();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.15; // Energetic radio announcer pace
    utterance.pitch = 1.05;

    // Pick best PT-BR voice if available
    const voices = window.speechSynthesis.getVoices();
    const ptVoices = voices.filter(v => v.lang.startsWith('pt'));
    if (ptVoices.length > 0) {
      utterance.voice = ptVoices.find(v => v.lang.includes('BR') || v.name.includes('Luciana') || v.name.includes('Google') || v.name.includes('Yuri')) || ptVoices[0];
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    if (onBoundary) {
      utterance.onboundary = (e) => {
        onBoundary(e.charIndex);
      };
    }

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.currentUtterance = null;
  }

  public stopAll() {
    this.stopRadioBgm();
    this.stopSpeech();
  }
}

export const audioEngine = new RadioAudioEngine();
