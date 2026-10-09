import React from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { FiDownload } from 'react-icons/fi';

const Hero = ({ onOpenCV }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);

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
            className="group relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-neutral-dark pt-32 md:pt-0"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Interactive Grid Pattern (Vercel Style) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Subtle base grid visible everywhere */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
                
                {/* Glowing cyan grid revealed only strictly under the cursor */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"
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
                
                {/* 1. Status Line (Top Left) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-32 left-6 md:left-24 flex items-center gap-3 z-30"
                >
                     <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-heading uppercase tracking-widest text-sm text-gray-400">Available for Software Engineering Roles</span>
                </motion.div>

                {/* LAYERED LAYOUT WRAPPER - Golden Ratio Vertical Spacing */}
                <div className="relative w-full flex flex-col items-center justify-center pt-[calc(10vw*1.618)] mt-20 md:mt-0">

                    {/* Layer 0: Background Text "AHMAD AYUB" (Moved to Z-30 to overlay the image) */}
                    {/* Size Relationship: The Foundation (Largest) */}
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] w-screen z-30 pointer-events-none overflow-hidden flex justify-center">
                        <motion.h1 style={{ y: y1 }} className="text-[18vw] md:text-[13vw] leading-[0.8] font-heading font-black text-transparent text-stroke opacity-60 uppercase tracking-widest whitespace-nowrap text-center mix-blend-screen">
                            AHMAD AYUB
                        </motion.h1>
                    </div>

                    {/* Layer 1: Middle Text "FULL STACK" */}
                    {/* Size Relationship: The Subject (Phi * Image) */}
                    <div className="relative z-10 w-full flex justify-center items-center -mb-[8vw] pointer-events-none mix-blend-screen">
                        <motion.h2 style={{ y: y2 }} className="text-[17vw] md:text-[12vw] leading-[0.8] font-heading font-black text-white/90 uppercase tracking-tighter whitespace-nowrap drop-shadow-2xl">
                            FULL STACK
                        </motion.h2>
                    </div>
                    {/* Layer 2: Profile Image */}
                    {/* Size Relationship: The Golden Section (38.2%) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.618, ease: [0.16, 1, 0.3, 1] }}
                        style={{ scale: imageScale }}
                        className="relative z-20 w-[85vw] md:w-[38.2vw] mx-auto overflow-hidden rounded-sm shadow-2xl"
                    >
                         {/* Seamless fade to black at the bottom */}
                         <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent z-20 pointer-events-none"></div>
                         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-dark to-transparent z-20 pointer-events-none"></div>
                         <img 
                            src="/assets/profile.png" 
                            alt="Ahmad Ayub Nu'man" 
                            className="w-full h-auto object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-[1.618s] ease-out" 
                        />
                    </motion.div>

                    {/* Layer 3: Foreground Buttons (On Top of Image Gradient) */}
                    <div className="relative z-30 -mt-[12vw] flex flex-col items-center justify-center gap-6 pb-12 pointer-events-auto">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-white/90 font-body text-sm md:text-base uppercase tracking-widest text-center max-w-xl mix-blend-difference leading-relaxed"
                        >
                            Engineering scalable enterprise web systems<br className="hidden md:inline" /> & robust distributed architectures.
                        </motion.p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <MagneticButton href="#portfolio">
                                <span className="inline-block px-8 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-body uppercase tracking-widest text-sm hover:bg-white hover:text-black active:scale-95 transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                    Explore Work
                                </span>
                            </MagneticButton>
                            <MagneticButton onClick={onOpenCV} className="cursor-pointer">
                                <span className="px-8 py-3 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-black active:scale-95 font-body uppercase tracking-widest text-sm transition-all duration-300 shadow-lg flex items-center gap-2 group font-semibold backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                    <FiDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
                                    Download CV
                                </span>
                            </MagneticButton>
                            <MagneticButton href="#contact">
                                <span className="inline-block px-8 py-3 rounded-full bg-white text-black font-body uppercase tracking-widest text-sm hover:bg-primary hover:text-black active:scale-95 transition-all duration-300 shadow-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                                    Let's Talk
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
                <span className="writing-vertical text-xs uppercase tracking-widest text-gray-500 font-heading">Scroll Down</span>
                <div className="h-16 w-[1px] bg-gray-600"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
