import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLock, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

const ProjectCard = ({ project, onClick }) => {
    const { language } = useLanguage();
    const t = translations[language].portfolio;
    const { playClick } = useSound();
    const cardRef = useRef(null);
    const [isPointerFine, setIsPointerFine] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
        }
    }, []);

    // 3D Spring tilt values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

    // Dynamic shadow displacement based on tilt
    const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [6, 2]);
    const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [6, 2]);
    const dynamicBoxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 0px #18181B`;

    const handleMouseMove = (e) => {
        if (!isPointerFine || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Derived engineering highlights based on project
    const getSystemHighlight = (id) => {
        if (id === 1) return { sys: "Append-only Ledger (WAC/FIFO)", ui: "Sub-second Cashier & ECharts" };
        if (id === 2) return { sys: "Multi-Entity General Ledger & QR Gate", ui: "Flutter Mobile Wallet & Next.js" };
        return { sys: "Tenant-Isolated 1,800+ Tests (Postgres)", ui: "React 19 SPA & Batch Docx Templater" };
    };

    const highlights = getSystemHighlight(project.id);

    return (
        <motion.article 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={isPointerFine ? {
                rotateX,
                rotateY,
                boxShadow: dynamicBoxShadow,
                transformStyle: 'preserve-3d'
            } : {}}
            className="brutal-card bg-canvas-card h-full flex flex-col justify-between overflow-hidden relative group transition-shadow duration-150"
        >
            {/* Card Header & Preview Image */}
            <div className="relative border-b-2 border-ink">
                <button
                    type="button"
                    onClick={() => {
                        playClick();
                        onClick(project);
                    }}
                    className="w-full aspect-[16/10] overflow-hidden block text-left bg-canvas cursor-pointer group-hover:opacity-95 transition-opacity"
                    aria-label={`View architectural specs for ${project.title}`}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                </button>

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 pointer-events-none">
                    <span className="font-mono text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 bg-canvas-card text-ink border-2 border-ink shadow-[2px_2px_0px_#18181B]">
                        {project.category}
                    </span>
                </div>

                {project.demoUrl && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                        <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-telemetry text-white border-2 border-ink shadow-[2px_2px_0px_#18181B] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            <span>{t.liveDemo}</span>
                        </span>
                    </div>
                )}
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-ink uppercase tracking-tight mb-2">
                        <button
                            type="button"
                            onClick={() => {
                                playClick();
                                onClick(project);
                            }}
                            className="text-left hover:text-blueprint transition-colors cursor-pointer"
                        >
                            {project.title}
                        </button>
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3 mb-4">
                        {project.shortDesc}
                    </p>

                    {/* Dual-Perspective Matrix */}
                    <div className="space-y-2 mb-5 p-3 bg-canvas border-2 border-ink">
                        <div className="flex items-start gap-2 text-xs font-mono">
                            <span className="px-1.5 py-0.5 bg-ink text-white font-bold text-[10px] uppercase flex-shrink-0">
                                SYS
                            </span>
                            <span className="text-ink font-semibold leading-tight">
                                {highlights.sys}
                            </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs font-mono">
                            <span className="px-1.5 py-0.5 bg-blueprint text-white font-bold text-[10px] uppercase flex-shrink-0">
                                UI
                            </span>
                            <span className="text-ink font-semibold leading-tight">
                                {highlights.ui}
                            </span>
                        </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tools.slice(0, 5).map((tool, idx) => (
                            <span 
                                key={idx} 
                                className="font-mono text-[11px] font-bold px-2 py-0.5 bg-white border border-ink text-ink"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t-2 border-ink flex items-center justify-between gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            playClick();
                            onClick(project);
                        }}
                        className="brutal-btn-primary !py-1.5 !px-3 text-xs"
                    >
                        <span>{t.specsBtn}</span>
                        <FiArrowRight className="text-xs" />
                    </button>

                    <div className="flex items-center gap-2">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={playClick}
                                className="p-2 border-2 border-ink bg-white hover:bg-canvas text-ink active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#18181B]"
                                title="Open Live System Demo"
                            >
                                <FiExternalLink className="text-sm" />
                            </a>
                        )}

                        {project.repoType === 'private' ? (
                            <div 
                                className="p-2 border-2 border-ink bg-safety text-ink shadow-[2px_2px_0px_#18181B]"
                                title={t.proprietary}
                            >
                                <FiLock className="text-sm" />
                            </div>
                        ) : project.repoUrl ? (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={playClick}
                                className="p-2 border-2 border-ink bg-white hover:bg-canvas text-ink active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#18181B]"
                                title="Inspect GitHub Repository"
                            >
                                <FiGithub className="text-sm" />
                            </a>
                        ) : null}
                    </div>
                </div>

            </div>
        </motion.article>
    );
};

export default ProjectCard;
