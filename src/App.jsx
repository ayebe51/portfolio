import { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { FiTerminal } from 'react-icons/fi';
import { LanguageProvider } from './context/LanguageContext';
import { SoundProvider, useSound } from './context/SoundContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ConveyorTape from './components/ui/ConveyorTape';
import ArchitectureExplorer from './components/ArchitectureExplorer';
import PortfolioGrid from './components/PortfolioGrid';
import Skills from './components/Skills';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GrainOverlay from './components/ui/GrainOverlay';
import CVDownloadModal from './components/CVDownloadModal';
import CommandPalette from './components/CommandPalette';
import CoordinateHud from './components/ui/CoordinateHud';
import CadCrosshairCursor from './components/ui/CadCrosshairCursor';
import DevConsole from './components/ui/DevConsole';
import KeyboardShortcutsModal from './components/ui/KeyboardShortcutsModal';
import { useLanguage } from './context/LanguageContext';

function AppContent() {
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);
    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const { playClick, playRelay, toggleSound } = useSound();
    const { toggleLanguage } = useLanguage();

    // Global keyboard shortcuts listener (?, ~, Cmd+K, M, L)
    useEffect(() => {
        const handleKeyDown = (e) => {
            const activeTag = document.activeElement?.tagName?.toLowerCase();
            const isFormInput = activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable;

            // Cmd+K / Ctrl+K for Command Palette (works even in inputs if user wants palette)
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                playClick();
                setIsCmdPaletteOpen(prev => !prev);
                return;
            }

            // Backtick (`) or Tilde (~) for Quake Retro CLI Console
            if (e.key === '`' || e.key === '~') {
                // Allow backtick to toggle console if not typing in regular inputs
                if (!isFormInput || document.activeElement?.placeholder?.includes('Type \'help\'')) {
                    e.preventDefault();
                    playRelay();
                    setIsConsoleOpen(prev => !prev);
                    return;
                }
            }

            // If user is actively typing in a form input, prevent single key triggers (M, L, ?)
            if (isFormInput) return;

            // '?' for Keyboard Shortcuts Modal
            if (e.key === '?') {
                e.preventDefault();
                playClick();
                setIsShortcutsOpen(prev => !prev);
                return;
            }

            // 'M' or 'm' for Mute / Audio Toggle
            if ((e.key === 'm' || e.key === 'M') && !e.metaKey && !e.ctrlKey) {
                e.preventDefault();
                toggleSound();
                return;
            }

            // 'L' or 'l' for Language Switch
            if ((e.key === 'l' || e.key === 'L') && !e.metaKey && !e.ctrlKey) {
                e.preventDefault();
                playClick();
                toggleLanguage();
                return;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [playClick, playRelay, toggleSound, toggleLanguage]);

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-safety selection:text-ink bg-drafting-grid overflow-x-clip">
                <GrainOverlay />
                <CoordinateHud />
                <CadCrosshairCursor />
                
                <Header 
                    onOpenCV={() => setIsCVModalOpen(true)} 
                    onOpenCommandPalette={() => setIsCmdPaletteOpen(true)}
                    onOpenShortcuts={() => setIsShortcutsOpen(true)}
                />

                <main>
                    <Hero 
                        onOpenCV={() => setIsCVModalOpen(true)} 
                        onOpenCommandPalette={() => setIsCmdPaletteOpen(true)}
                    />
                    <ConveyorTape />
                    <ArchitectureExplorer />
                    <PortfolioGrid />
                    <Skills />
                    <Services />
                    <Testimonials />
                    <Contact />
                </main>

                <Footer onOpenCV={() => setIsCVModalOpen(true)} />

                {/* Sticky Industrial HUD & CLI Drawer Quick Trigger Buttons */}
                <div className="fixed bottom-3 right-3 z-40 hidden sm:flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            playClick();
                            setIsShortcutsOpen(prev => !prev);
                        }}
                        className="font-mono text-xs font-black uppercase px-2.5 py-1.5 bg-canvas text-ink border-2 border-ink shadow-brutal-sm hover:bg-safety active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
                        title="Operator Keyboard Shortcuts Guide (?)"
                    >
                        <span className="w-4 h-4 bg-ink text-white text-[10px] flex items-center justify-center font-bold">?</span>
                        <span className="hidden md:inline text-[10px]">HOTKEYS</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            playRelay();
                            setIsConsoleOpen(prev => !prev);
                        }}
                        className="font-mono text-xs font-black uppercase px-3 py-1.5 bg-[#0C0D10] text-[#00FF66] border-2 border-ink shadow-brutal-sm hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                        title="Open Kernel Diagnostic Console (`~`)"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
                        <FiTerminal className="text-sm" />
                        <span>&gt;_ DEV_CONSOLE (Tekan ~)</span>
                    </button>
                </div>

                <CVDownloadModal 
                    isOpen={isCVModalOpen} 
                    onClose={() => setIsCVModalOpen(false)} 
                />

                <CommandPalette
                    isOpen={isCmdPaletteOpen}
                    onClose={() => setIsCmdPaletteOpen(false)}
                    onOpenCV={() => setIsCVModalOpen(true)}
                    onOpenCLI={() => setIsConsoleOpen(true)}
                />

                <DevConsole
                    isOpen={isConsoleOpen}
                    onClose={() => setIsConsoleOpen(false)}
                />

                <KeyboardShortcutsModal
                    isOpen={isShortcutsOpen}
                    onClose={() => setIsShortcutsOpen(false)}
                />
            </div>
        </ReactLenis>
    );
}

function App() {
    return (
        <LanguageProvider>
            <SoundProvider>
                <AppContent />
            </SoundProvider>
        </LanguageProvider>
    );
}

export default App;
