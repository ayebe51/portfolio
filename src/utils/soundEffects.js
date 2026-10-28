// Pure Web Audio API Mechanical Sound Synthesizer
// 0 external audio files, zero network latency, compliant with browser autoplay policies.

let audioCtx = null;

const getAudioContext = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
    }
    return audioCtx;
};

// Satisfying mechanical key / tactile switch click
export const playMechanicalClick = () => {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const now = ctx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.02);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.02);
    } catch {
        // Graceful silent fallback
    }
};

// Industrial relay solenoid latch click (clack-tick of an industrial circuit breaker)
export const playRelayClick = () => {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;

        // First click
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'square';
        osc1.frequency.setValueAtTime(90, now);
        osc1.frequency.exponentialRampToValueAtTime(30, now + 0.015);
        gain1.gain.setValueAtTime(0.14, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.015);

        // Second rebound click (relay lock)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(260, now + 0.025);
        osc2.frequency.exponentialRampToValueAtTime(80, now + 0.04);
        gain2.gain.setValueAtTime(0.16, now + 0.025);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.025);
        osc2.stop(now + 0.04);
    } catch {
        // Graceful silent fallback
    }
};

// Subtle telemetry ping for live transaction / success events
export const playTelemetryPing = () => {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const now = ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now); // A5 note
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
    } catch {
        // Graceful silent fallback
    }
};

// Mechanical toggle switch click (bilingual toggle, mute toggle)
export const playToggleClick = () => {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const now = ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.025);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.03);
    } catch {
        // Graceful silent fallback
    }
};
