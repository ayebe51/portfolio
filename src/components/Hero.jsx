import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import TechOrbit from './ui/TechOrbit';
import { FiDownload } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ROLES = ['FRONT END', 'FULL STACK', 'WEB DEVELOPER'];

const Hero = ({ onOpenCV }) => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);

    const [isPhotoHovered, setIsPhotoHovered] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const hoverTimeoutRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobileView(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsPhotoHovered(true);
    };

    const handleMouseLeave = () => {
        if (isPinned) return; // Keep orbit open if pinned by user click
        // 450ms grace period to allow mouse to travel smoothly to orbiting badges
        hoverTimeoutRef.current = setTimeout(() => {
            setIsPhotoHovered(false);
        }, 450);
    };

    const handleToggleClick = (e) => {
        e.stopPropagation();
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsPinned(prev => {
            const nextPinned = !prev;
            setIsPhotoHovered(nextPinned);
            return nextPinned;
        });
    };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section 
            id="about" 
            className="group relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-neutral-dark"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Interactive Grid Pattern (Linear / Vercel Indigo Style) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Subtle base grid visible everywhere */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
                
                {/* Glowing electric indigo grid revealed strictly under cursor */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem]"
                    style={{
                        maskImage: useMotionTemplate`radial-gradient(30vw circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                        WebkitMaskImage: useMotionTemplate`radial-gradient(30vw circle at ${mouseX}px ${mouseY}px, black, transparent)`
                    }}
                />
            </div>

            {/* Floating Fullstack Symbols */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[25%] left-[10%] text-gray-700/30 text-4xl md:text-6xl font-mono font-bold">
                    {'</>'}
                </motion.div>
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-[30%] left-[20%] text-primary/20 text-5xl md:text-7xl font-mono font-light">
                    {'{ }'}
                </motion.div>
                <motion.div animate={{ y: [0, -40, 0], rotate: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute top-[20%] right-[15%] text-gray-700/30 text-5xl md:text-8xl font-mono font-light">
                    {'()'}
                </motion.div>
                <motion.div animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute bottom-[25%] right-[25%] text-primary/20 text-3xl md:text-5xl font-mono font-bold">
                    {'[ ]'}
                </motion.div>
            </div>

            <div className="container mx-auto container-padding relative z-20 h-full flex flex-col justify-center">
                
                {/* 1. Status Line (Top Left - In flow to prevent collision with hero heading) */}
                <div className="w-full flex items-center justify-start pt-20 sm:pt-24 md:pt-28 pb-2 md:pb-4 z-30 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 pointer-events-auto"
                    >
                         <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
                        </span>
                        <span className="font-heading uppercase tracking-wider md:tracking-widest text-xs sm:text-sm text-gray-400">{t.status}</span>
                    </motion.div>
                </div>

                {/* LAYERED LAYOUT WRAPPER - Refined Vertical Balance */}
                <div className="relative w-full flex flex-col items-center justify-center">

                    {/* Layer 0: Background Text "AHMAD AYUB" (Opsi 1: Depth Sandwich - z-10 behind z-20 profile photo) */}
                    {/* Size Relationship: The Foundation (Largest) */}
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] w-screen z-10 pointer-events-none overflow-hidden flex justify-center">
                        <motion.h1 style={{ y: y1 }} className="text-[14vw] sm:text-[15vw] md:text-[13vw] leading-[0.8] font-heading font-black text-transparent text-stroke opacity-50 md:opacity-60 uppercase tracking-wider md:tracking-widest whitespace-nowrap text-center select-none mix-blend-screen">
                            AHMAD AYUB
                        </motion.h1>
                    </div>

                    {/* Layer 1: Middle Text - Dynamic Role Rotator */}
                    {/* Size Relationship: The Subject (Phi * Image) */}
                    <div className="relative z-10 w-full flex justify-center items-center -mb-[8vw] pointer-events-none mix-blend-screen overflow-hidden py-1">
                        <motion.h2 
                            style={{ y: y2 }} 
                            className="text-[13.5vw] sm:text-[14.5vw] md:text-[11.5vw] leading-[0.8] font-heading font-black text-white/90 uppercase tracking-tighter whitespace-nowrap drop-shadow-2xl flex justify-center items-center min-h-[1em]"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROLES[roleIndex]}
                                    initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -25, filter: 'blur(8px)' }}
                                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block"
                                >
                                    {ROLES[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.h2>
                    </div>
                    {/* Layer 2: Interactive Profile & Tech Orbit Wrapper */}
                    <div 
                        className="group/profile relative z-30 w-[85vw] md:w-[38.2vw] mx-auto flex items-center justify-center cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleToggleClick}
                    >
                        {/* Tech Stack Orbiting Halo (Positioned outside overflow-hidden) */}
                        <TechOrbit 
                            isHovered={isPhotoHovered} 
                            isMobileView={isMobileView} 
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        {/* Profile Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.618, ease: [0.16, 1, 0.3, 1] }}
                            style={{ scale: imageScale }}
                            onMouseEnter={handleMouseEnter}
                            className="relative z-20 w-full overflow-hidden rounded-sm shadow-2xl"
                        >
                             {/* Seamless fade to neutral-dark at the bottom */}
                             <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent z-20 pointer-events-none"></div>
                             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-dark to-transparent z-20 pointer-events-none"></div>
                             <img 
                                src="/assets/profile.png" 
                                alt="Ahmad Ayub Nu'man" 
                                onMouseEnter={handleMouseEnter}
                                className={`w-full h-auto object-cover object-center transition-all duration-[1.2s] ease-out ${
                                    (isPhotoHovered || isPinned)
                                        ? 'grayscale-0 contrast-100' 
                                        : 'grayscale contrast-110 group-hover/profile:grayscale-0 group-hover/profile:contrast-100'
                                }`} 
                            />
                        </motion.div>
                    </div>

                    {/* Layer 3: Foreground Subtitle & Actions */}
                    <div className="relative z-30 mt-4 md:mt-6 flex flex-col items-center justify-center gap-6 pb-12 pointer-events-none">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-gray-300 font-body text-sm md:text-base uppercase tracking-widest text-center max-w-xl leading-relaxed px-4 pointer-events-auto"
                        >
                            {t.subtitle}
                        </motion.p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto relative z-40">
                            <MagneticButton href="#portfolio">
                                <span className="inline-block px-8 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-body uppercase tracking-widest text-sm hover:bg-white hover:text-neutral-dark active:scale-95 transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                    {t.exploreWork}
                                </span>
                            </MagneticButton>
                            <MagneticButton onClick={onOpenCV} className="cursor-pointer">
                                <span className="px-8 py-3 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-white active:scale-95 font-body uppercase tracking-widest text-sm transition-all duration-300 shadow-lg flex items-center gap-2 group font-semibold backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                    <FiDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
                                    {t.downloadCv}
                                </span>
                            </MagneticButton>
                            <MagneticButton href="#contact">
                                <span className="inline-block px-8 py-3 rounded-full bg-white text-neutral-dark font-body uppercase tracking-widest text-sm hover:bg-primary hover:text-white active:scale-95 transition-all duration-300 shadow-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                    {t.letsTalk}
                                </span>
                            </MagneticButton>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute right-8 md:right-12 bottom-12 flex flex-col items-center gap-4 z-30"
            >
                <span className="writing-vertical text-xs uppercase tracking-widest text-gray-500 font-heading">{t.scrollDown || 'Scroll Down'}</span>
                <div className="h-16 w-[1px] bg-gray-600"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
