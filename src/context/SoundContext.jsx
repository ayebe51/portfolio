import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
    playMechanicalClick, 
    playTelemetryPing, 
    playToggleClick, 
    playRelayClick,
    playStampThud,
    playChaosAlarm,
    playTerminalKeystroke,
    playLedgerLock
} from '../utils/soundEffects';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio_sfx_enabled');
            return saved !== null ? saved === 'true' : true;
        }
        return true;
    });

    useEffect(() => {
        try {
            localStorage.setItem('portfolio_sfx_enabled', String(isSoundEnabled));
        } catch {
            // Ignore storage restrictions
        }
    }, [isSoundEnabled]);

    const toggleSound = useCallback(() => {
        setIsSoundEnabled(prev => {
            const next = !prev;
            if (next) {
                playToggleClick();
            }
            return next;
        });
    }, []);

    const playClick = useCallback(() => {
        if (isSoundEnabled) {
            playMechanicalClick();
        }
    }, [isSoundEnabled]);

    const playPing = useCallback(() => {
        if (isSoundEnabled) {
            playTelemetryPing();
        }
    }, [isSoundEnabled]);

    const playToggle = useCallback(() => {
        if (isSoundEnabled) {
            playToggleClick();
        }
    }, [isSoundEnabled]);

    const playRelay = useCallback(() => {
        if (isSoundEnabled) {
            playRelayClick();
        }
    }, [isSoundEnabled]);

    const playStamp = useCallback(() => {
        if (isSoundEnabled) {
            playStampThud();
        }
    }, [isSoundEnabled]);

    const playChaos = useCallback(() => {
        if (isSoundEnabled) {
            playChaosAlarm();
        }
    }, [isSoundEnabled]);

    const playKeystroke = useCallback(() => {
        if (isSoundEnabled) {
            playTerminalKeystroke();
        }
    }, [isSoundEnabled]);

    const playLock = useCallback(() => {
        if (isSoundEnabled) {
            playLedgerLock();
        }
    }, [isSoundEnabled]);

    return (
        <SoundContext.Provider value={{ 
            isSoundEnabled, 
            toggleSound, 
            playClick, 
            playPing, 
            playToggle, 
            playRelay,
            playStamp,
            playChaos,
            playKeystroke,
            playLock
        }}>
            {children}
        </SoundContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        return {
            isSoundEnabled: false,
            toggleSound: () => {},
            playClick: () => {},
            playPing: () => {},
            playToggle: () => {},
            playRelay: () => {},
            playStamp: () => {},
            playChaos: () => {},
            playKeystroke: () => {},
            playLock: () => {}
        };
    }
    return context;
};
