import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiTerminal, FiArrowUpRight, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

const Header = ({ onOpenCV, onOpenCommandPalette }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, isEn } = useLanguage();
    const { isSoundEnabled, toggleSound, playClick } = useSound();
    const t = translations[language].nav;

    const navLinks = [
        { name: t.architecture, href: '#architecture' },
        { name: t.portfolio, href: '#portfolio' },
        { name: t.datasheet, href: '#datasheet' },
        { name: t.services, href: '#services' },
        { name: t.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLanguageChange = (lang) => {
        playClick();
        setLanguage(lang);
    };

    return (
        <>
            <header className="sticky top-0 z-40 w-full pt-3 px-3 sm:px-6 transition-all duration-200">
                <div className={`mx-auto max-w-7xl brutal-card bg-canvas-card px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between transition-all ${
                    isScrolled ? 'shadow-brutal' : 'shadow-brutal-sm sm:shadow-brutal'
                }`}>
                    {/* Brand Industrial Plate */}
                    <a 
                        href="#" 
                        onClick={playClick}
                        className="group flex items-center gap-2 font-mono font-black text-xs sm:text-sm tracking-wider uppercase text-ink hover:text-blueprint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint"
                    >
                        <span className="w-2.5 h-2.5 bg-ink group-hover:bg-blueprint transition-colors"></span>
                        <span className="hidden xs:inline">{t.brand}</span>
                        <span className="xs:hidden">AYUB // SYS_ENG</span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={playClick}
                                className="font-mono text-xs uppercase font-bold text-ink-muted hover:text-ink hover:underline underline-offset-4 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Center Telemetry Pulse (Desktop XL) */}
                    <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-telemetry-light border border-ink text-[11px] font-mono font-bold text-ink">
                        <span className="w-2 h-2 rounded-full bg-telemetry animate-ping"></span>
                        <span>{t.status}</span>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Mechanical SFX Switch */}
                        <button
                            type="button"
                            onClick={toggleSound}
                            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-ink text-xs font-mono font-bold transition-all shadow-[1px_1px_0px_#18181B] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer ${
                                isSoundEnabled ? 'bg-canvas text-ink' : 'bg-stone-200 text-ink-muted'
                            }`}
                            title={isSoundEnabled ? "Mute Mechanical Audio" : "Enable Mechanical Audio"}
                        >
                            {isSoundEnabled ? (
                                <FiVolume2 className="text-xs text-telemetry" />
                            ) : (
                                <FiVolumeX className="text-xs text-ink-muted" />
                            )}
                            <span className="text-[10px] font-black">{isSoundEnabled ? 'SFX: ON' : 'SFX: MUTE'}</span>
                        </button>

                        {/* Mechanical Language Switcher */}
                        <div className="flex items-center border-2 border-ink bg-canvas p-0.5 shadow-[1px_1px_0px_#18181B]">
                            <button
                                type="button"
                                onClick={() => handleLanguageChange('en')}
                                aria-label="Switch language to English"
                                className={`px-2 py-0.5 font-mono text-[11px] font-black uppercase transition-colors ${
                                    isEn 
                                        ? 'bg-ink text-canvas-card' 
                                        : 'text-ink-muted hover:text-ink'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => handleLanguageChange('id')}
                                aria-label="Ganti bahasa ke Indonesia"
                                className={`px-2 py-0.5 font-mono text-[11px] font-black uppercase transition-colors ${
                                    !isEn 
                                        ? 'bg-ink text-canvas-card' 
                                        : 'text-ink-muted hover:text-ink'
                                }`}
                            >
                                ID
                            </button>
                        </div>

                        {/* Quick Command Trigger */}
                        {onOpenCommandPalette && (
                            <button
                                type="button"
                                onClick={() => {
                                    playClick();
                                    onOpenCommandPalette();
                                }}
                                className="hidden sm:inline-flex brutal-btn-white !py-1 !px-2.5 text-xs font-mono font-bold"
                                title="Open Command Palette (Cmd+K)"
                            >
                                <FiTerminal className="text-xs" />
                                <span>{t.terminal}</span>
                            </button>
                        )}

                        {/* ATS CV Trigger Button */}
                        <button
                            type="button"
                            onClick={() => {
                                playClick();
                                onOpenCV();
                            }}
                            className="brutal-btn-safety !py-1 !px-3 sm:!px-4 text-xs font-mono font-black"
                        >
                            <FiDownload className="text-xs" />
                            <span className="hidden sm:inline">{t.downloadCv}</span>
                            <span className="sm:hidden">CV</span>
                        </button>

                        {/* Mobile Menu Hamburger */}
                        <button
                            type="button"
                            className="lg:hidden p-1.5 border-2 border-ink bg-white active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm text-ink"
                            onClick={() => {
                                playClick();
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-3 top-20 z-40 brutal-card bg-canvas-card p-6 lg:hidden flex flex-col space-y-4 shadow-brutal-lg"
                    >
                        <div className="flex items-center justify-between pb-3 border-b-2 border-ink font-mono text-xs font-bold text-ink-muted uppercase">
                            <span>Navigation Index</span>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={toggleSound}
                                    className="px-2 py-0.5 border border-ink text-[10px] font-mono font-bold bg-canvas text-ink"
                                >
                                    {isSoundEnabled ? '🔊 SFX: ON' : '🔇 SFX: OFF'}
                                </button>
                                <span className="text-telemetry font-black">● LIVE</span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between font-display text-lg font-bold text-ink hover:text-blueprint transition-colors py-1 border-b border-ink/10"
                                    onClick={() => {
                                        playClick();
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    <span>{link.name}</span>
                                    <FiArrowUpRight className="text-ink-muted" />
                                </a>
                            ))}
                        </div>

                        <div className="pt-2 flex flex-col gap-3">
                            {onOpenCommandPalette && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        playClick();
                                        setIsMobileMenuOpen(false);
                                        onOpenCommandPalette();
                                    }}
                                    className="brutal-btn-white w-full text-xs font-mono"
                                >
                                    <FiTerminal /> Buka Terminal Command (⌘K)
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => {
                                    playClick();
                                    setIsMobileMenuOpen(false);
                                    onOpenCV();
                                }}
                                className="brutal-btn-safety w-full text-xs font-mono font-black"
                            >
                                <FiDownload /> {t.downloadCv}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
