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

function AppContent() {
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);
    const { playClick, playRelay } = useSound();

    // Global Cmd+K / Ctrl+K and Backtick `~` keyboard shortcuts listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Cmd+K / Ctrl+K for Command Palette
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                playClick();
                setIsCmdPaletteOpen(prev => !prev);
                return;
            }

            // Backtick (`) or Tilde (~) for Quake Retro CLI Console
            if (e.key === '`' || e.key === '~') {
                // If user is not typing in a real form input or textarea
                const activeTag = document.activeElement?.tagName?.toLowerCase();
                const isFormInput = activeTag === 'input' || activeTag === 'textarea';
                
                // Allow backtick to toggle console if not typing in regular inputs
                if (!isFormInput || document.activeElement?.placeholder?.includes('Type \'help\'')) {
                    e.preventDefault();
                    playRelay();
                    setIsConsoleOpen(prev => !prev);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [playClick, playRelay]);

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-safety selection:text-ink bg-drafting-grid overflow-x-clip">
                <GrainOverlay />
                <CoordinateHud />
                <CadCrosshairCursor />
                
                <Header 
                    onOpenCV={() => setIsCVModalOpen(true)} 
                    onOpenCommandPalette={() => setIsCmdPaletteOpen(true)}
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

                {/* Sticky Industrial CLI Drawer Quick Trigger Button */}
                <div className="fixed bottom-3 right-3 z-40 hidden sm:block">
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
                        <span>&gt;_ DEV_CLI [`~`]</span>
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
