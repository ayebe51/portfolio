import { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
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

function AppContent() {
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
    const { playClick } = useSound();

    // Global Cmd+K / Ctrl+K keyboard shortcut listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                playClick();
                setIsCmdPaletteOpen(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [playClick]);

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

                <CVDownloadModal 
                    isOpen={isCVModalOpen} 
                    onClose={() => setIsCVModalOpen(false)} 
                />

                <CommandPalette
                    isOpen={isCmdPaletteOpen}
                    onClose={() => setIsCmdPaletteOpen(false)}
                    onOpenCV={() => setIsCVModalOpen(true)}
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
