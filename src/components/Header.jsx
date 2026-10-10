import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import MagneticButton from './ui/MagneticButton';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Header = ({ onOpenCV }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, isEn } = useLanguage();
    const t = translations[language].nav;

    const navLinks = [
        { name: t.services, href: '#services' },
        { name: t.portfolio, href: '#portfolio' },
        { name: t.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-0 py-6 mix-blend-difference`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a 
                        href="#" 
                        className="text-xl font-bold font-heading text-white tracking-widest uppercase rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        Ayub.dev
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <MagneticButton key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors rounded px-1.5 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    {link.name}
                                </a>
                            </MagneticButton>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        {/* Language Switcher */}
                        <div className="flex items-center bg-gray-900/80 border border-gray-700/80 rounded-full p-1 text-xs font-mono font-bold mr-1">
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                aria-label="Switch to English"
                                className={`px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                                    isEn 
                                        ? 'bg-primary text-black shadow-sm font-black' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage('id')}
                                aria-label="Ganti ke Bahasa Indonesia"
                                className={`px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                                    !isEn 
                                        ? 'bg-primary text-black shadow-sm font-black' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                ID
                            </button>
                        </div>

                        <MagneticButton onClick={onOpenCV} className="cursor-pointer">
                            <span className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-black active:scale-95 transition-all duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                <FiDownload className="text-sm" /> {t.downloadCv}
                            </span>
                        </MagneticButton>
                        <MagneticButton href="#contact">
                            <span className="inline-block px-6 py-2.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                {t.letsTalk}
                            </span>
                        </MagneticButton>
                    </div>

                    {/* Mobile Controls (Language + Hamburger) */}
                    <div className="md:hidden flex items-center gap-2">
                        <div className="flex items-center bg-gray-900/80 border border-gray-700/80 rounded-full p-0.5 text-xs font-mono font-bold">
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                                    isEn 
                                        ? 'bg-primary text-black font-black' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage('id')}
                                className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                                    !isEn 
                                        ? 'bg-primary text-black font-black' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                ID
                            </button>
                        </div>

                        <button
                            type="button"
                            className="p-2 text-white hover:text-primary active:scale-90 transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation-menu"
                        >
                            {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-navigation-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-neutral-dark pt-24 px-6 md:hidden flex flex-col space-y-6"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-bold text-white hover:text-primary tracking-tighter transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-8 border-t border-gray-800 space-y-4">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onOpenCV();
                                }}
                                className="w-full py-4 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <FiDownload className="text-base" /> {t.fullCvBtn}
                            </button>
                            <a
                                href="#contact"
                                className="w-full py-4 rounded-full bg-white text-black hover:bg-primary hover:text-black font-bold uppercase tracking-widest text-sm text-center block active:scale-95 transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t.letsTalk}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
