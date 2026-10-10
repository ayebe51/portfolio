import React, { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import PortfolioGrid from './components/PortfolioGrid';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GrainOverlay from './components/ui/GrainOverlay';
import CVDownloadModal from './components/CVDownloadModal';

function AppContent() {
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-neutral-dark text-white font-sans selection:bg-primary selection:text-white">
                <GrainOverlay />
                <Header onOpenCV={() => setIsCVModalOpen(true)} />
                <main>
                    <Hero onOpenCV={() => setIsCVModalOpen(true)} />
                    <Services />
                    <Skills />
                    <PortfolioGrid />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer onOpenCV={() => setIsCVModalOpen(true)} />
                <CVDownloadModal 
                    isOpen={isCVModalOpen} 
                    onClose={() => setIsCVModalOpen(false)} 
                />
            </div>
        </ReactLenis>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
