import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiFlutter,
    SiLaravel,
    SiNestjs,
    SiPostgresql,
    SiDocker,
} from 'react-icons/si';

const TECH_STACKS = [
    { id: 'react', name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'Framework' },
    { id: 'ts', name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
    { id: 'flutter', name: 'Flutter', icon: SiFlutter, color: '#54C5F8', category: 'Mobile' },
    { id: 'laravel', name: 'Laravel', icon: SiLaravel, color: '#FF2D20', category: 'Backend' },
    { id: 'nestjs', name: 'NestJS', icon: SiNestjs, color: '#E0234E', category: 'Backend' },
    { id: 'postgres', name: 'PostgreSQL', icon: SiPostgresql, color: '#699ECA', category: 'Database' },
    { id: 'docker', name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
];

const TechOrbit = ({ isHovered, isMobileView, onMouseEnter, onMouseLeave }) => {
    const orbitRef = useRef(null);
    const [dims, setDims] = useState({ rx: 240, ry: 230 });
    const [activeBadge, setActiveBadge] = useState(null);

    useEffect(() => {
        const updateDims = () => {
            if (!orbitRef.current) return;
            const parent = orbitRef.current.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();
            const winW = window.innerWidth;

            if (winW < 768) {
                // Mobile: calculated to wrap comfortably within viewport width
                const safeRx = Math.min(rect.width * 0.5 + 20, winW * 0.42);
                setDims({
                    rx: Math.round(safeRx),
                    ry: Math.round(safeRx * 1.05),
                });
            } else {
                // Desktop: generously halo outside the head & shoulders
                const baseW = rect.width > 50 ? rect.width : 500;
                const baseH = rect.height > 50 ? rect.height : 600;
                setDims({
                    rx: Math.round(Math.max(baseW * 0.56 + 35, 275)),
                    ry: Math.round(Math.max(baseH * 0.48 + 30, 270)),
                });
            }
        };

        updateDims();
        const t1 = setTimeout(updateDims, 300);
        const t2 = setTimeout(updateDims, 1200);
        window.addEventListener('resize', updateDims);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener('resize', updateDims);
        };
    }, []);

    // Active state: auto-active in mobile or triggered on desktop hover
    const isOpen = Boolean(isMobileView || isHovered);

    return (
        <div 
            ref={orbitRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{
                zIndex: 35,
                top: '-5%',
            }}
        >
            {/* Subtle decorative glowing orbit ring when active */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: isOpen ? 0.35 : 0, 
                    scale: isOpen ? 1 : 0.8 
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute rounded-full border border-primary/40 pointer-events-none"
                style={{
                    width: dims.rx * 2,
                    height: dims.ry * 2,
                    boxShadow: '0 0 50px rgba(99, 102, 241, 0.2)',
                }}
            />

            {/* Orbiting Badges */}
            {TECH_STACKS.map((tech, index) => {
                const total = TECH_STACKS.length;
                // Angle distribution: start from -90 deg (12 o'clock)
                const angleDeg = -90 + (index * (360 / total));
                const angleRad = (angleDeg * Math.PI) / 180;
                
                const targetX = Math.round(Math.cos(angleRad) * dims.rx);
                const targetY = Math.round(Math.sin(angleRad) * dims.ry);
                const IconComponent = tech.icon;
                const isItemActive = activeBadge === tech.id;

                return (
                    <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={
                            isOpen
                                ? {
                                      opacity: 1,
                                      scale: isItemActive ? 1.25 : 1,
                                      x: targetX,
                                      y: targetY,
                                  }
                                : {
                                      opacity: 0,
                                      scale: 0,
                                      x: 0,
                                      y: 0,
                                  }
                        }
                        transition={{
                            type: 'spring',
                            stiffness: 240,
                            damping: 20,
                            delay: isOpen ? index * 0.04 : 0,
                        }}
                        onMouseEnter={() => {
                            if (onMouseEnter) onMouseEnter();
                            setActiveBadge(tech.id);
                        }}
                        onMouseLeave={() => {
                            setActiveBadge(null);
                            if (onMouseLeave) onMouseLeave();
                        }}
                        className="absolute pointer-events-auto cursor-pointer"
                    >
                        {/* Interactive Badge Container */}
                        <div
                            className={`relative group flex items-center justify-center rounded-2xl p-2.5 sm:p-3 transition-all duration-300 backdrop-blur-xl border ${
                                isItemActive 
                                    ? 'bg-neutral-surface/95 border-primary shadow-xl ring-2 ring-primary/40' 
                                    : 'bg-neutral-surface/85 border-neutral-border hover:border-primary/60 shadow-lg'
                            }`}
                            style={{
                                boxShadow: isItemActive
                                    ? `0 0 25px ${tech.color}50, 0 8px 16px rgba(0,0,0,0.6)`
                                    : '0 4px 14px rgba(0,0,0,0.5)',
                            }}
                        >
                            <IconComponent
                                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                                style={{ color: tech.color }}
                            />

                            {/* Floating Tooltip */}
                            <AnimatePresence>
                                {isItemActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                                        animate={{ opacity: 1, y: -42, scale: 1 }}
                                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-full bg-neutral-dark/95 border border-primary/40 shadow-2xl backdrop-blur-md pointer-events-none z-50 flex items-center gap-1.5"
                                    >
                                        <span 
                                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                                            style={{ backgroundColor: tech.color }}
                                        />
                                        <span className="text-xs font-bold text-white tracking-wider font-sans">
                                            {tech.name}
                                        </span>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                                            • {tech.category}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TechOrbit;
