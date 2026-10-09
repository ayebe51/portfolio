import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import MagneticButton from './ui/MagneticButton';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

const Header = ({ onOpenCV }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    <a href="#" className="text-xl font-bold font-heading text-white tracking-widest uppercase">
                        Ayub.dev
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <MagneticButton key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            </MagneticButton>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={onOpenCV}
                            className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-black transition-all cursor-pointer flex items-center gap-1.5"
                        >
                            <FiDownload className="text-sm" /> CV
                        </button>
                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                            >
                                Let's Talk
                            </a>
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-neutral-dark pt-24 px-6 md:hidden flex flex-col space-y-6"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-bold text-white tracking-tighter"
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
                                className="w-full py-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                            >
                                <FiDownload className="text-base" /> Download CV (ATS-Ready)
                            </button>
                            <a
                                href="#contact"
                                className="btn btn-primary w-full text-center block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
