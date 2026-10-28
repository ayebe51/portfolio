import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiLock, FiCheckCircle, FiCpu, FiLayers, FiBox } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useSound } from '../context/SoundContext';
import InkStamp from './ui/InkStamp';
import ExplodedViewModal from './ui/ExplodedViewModal';

const ProjectModal = ({ project, onClose }) => {
    const { language } = useLanguage();
    const t = translations[language].modal;
    const { playClick } = useSound();
    const [isExplodedOpen, setIsExplodedOpen] = useState(false);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [project, onClose]);

    if (!project) return null;

    const mobileGallery = project.gallery?.filter(item => item.isMobile) || [];
    const webGallery = project.gallery?.filter(item => !item.isMobile) || [];

    const getSystemName = (id) => {
        if (id === 1) return 'Kiro';
        if (id === 2) return 'Koneksi';
        return 'SIMMACI';
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-ink/70 backdrop-blur-xs"
                />

                {/* Neo-Brutalist Blueprint Modal Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-canvas-card border-2 border-ink shadow-brutal-xl flex flex-col z-10"
                    role="dialog"
                    aria-modal="true"
                    data-lenis-prevent
                >
                    {/* Top Control Bar */}
                    <div className="sticky top-0 z-30 bg-canvas px-4 sm:px-6 py-3 border-b-2 border-ink flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black uppercase bg-safety px-2 py-0.5 border border-ink">
                                SPEC_SHEET // ID #{project.id}
                            </span>
                            <span className="hidden sm:inline font-mono text-xs font-bold text-ink-muted">
                                {project.category}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="font-mono text-xs font-black uppercase px-2.5 py-1 bg-white hover:bg-ink hover:text-white border-2 border-ink active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#18181B] transition-colors flex items-center gap-1.5 cursor-pointer"
                            aria-label={t.close}
                        >
                            <span>{t.close}</span>
                            <FiX className="text-sm" />
                        </button>
                    </div>

                    {/* Banner Image */}
                    <div className="w-full aspect-[21/9] sm:aspect-[21/8] bg-canvas border-b-2 border-ink relative overflow-hidden flex-shrink-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-3 left-4 sm:left-6">
                            <span className="font-mono text-xs font-bold px-3 py-1 bg-ink text-white border border-canvas shadow-[2px_2px_0px_#18181B]">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-8 space-y-8 relative">
                        
                        {/* Title, Overview & Physical Stamp */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-2 border-b-2 border-ink">
                            <div className="flex-1">
                                <h3 className="font-display font-black text-2xl sm:text-4xl text-ink uppercase tracking-tight mb-3">
                                    {project.title}
                                </h3>
                                <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Physical Industrial Ink Stamp */}
                            <div className="flex-shrink-0 self-center sm:self-start">
                                <InkStamp 
                                    text="100% CI/CD VERIFIED"
                                    subtext="ZERO REGRESSION RECORD"
                                    refCode={`AYN-PRJ-${project.id}`}
                                    color="red"
                                />
                            </div>
                        </div>

                        {/* Production Demo Note */}
                        {project.demoNote && (
                            <div className="p-4 bg-canvas border-2 border-ink flex items-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-telemetry mt-1.5 flex-shrink-0 animate-ping"></span>
                                <div className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
                                    <strong className="font-mono font-bold uppercase">{t.liveDemoAccess} </strong>
                                    {project.demoNote}
                                </div>
                            </div>
                        )}

                        {/* Engineering Analysis 3-Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            
                            <div className="p-4 bg-canvas border-2 border-ink space-y-2">
                                <h4 className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                                    <FiCpu className="text-blueprint" />
                                    <span>{t.challenge}</span>
                                </h4>
                                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            <div className="p-4 bg-canvas border-2 border-ink space-y-2">
                                <h4 className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                                    <FiLayers className="text-safety-dark" />
                                    <span>{t.approach}</span>
                                </h4>
                                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                                    {project.approach}
                                </p>
                            </div>

                            <div className="p-4 bg-canvas border-2 border-ink space-y-2">
                                <h4 className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                                    <FiCheckCircle className="text-telemetry" />
                                    <span>{t.results}</span>
                                </h4>
                                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                                    {project.results}
                                </p>
                            </div>

                        </div>

                        {/* Stack Badges */}
                        <div>
                            <h4 className="font-mono text-xs font-black uppercase text-ink mb-3">
                                [ {t.tools} ]
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, idx) => (
                                    <span 
                                        key={idx}
                                        className="font-mono text-xs font-bold px-3 py-1 bg-white border-2 border-ink shadow-[2px_2px_0px_#18181B] text-ink"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Gallery Section */}
                        {/* Mobile Flutter App Views */}
                        {mobileGallery.length > 0 && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b-2 border-ink">
                                    <span className="w-2.5 h-2.5 bg-telemetry animate-ping"></span>
                                    <h4 className="font-mono text-xs font-black uppercase text-ink">
                                        {t.mobileTitle} ({mobileGallery.length} {t.screens})
                                    </h4>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {mobileGallery.map((item, idx) => (
                                        <div key={idx} className="border-2 border-ink bg-canvas shadow-brutal-sm overflow-hidden flex flex-col">
                                            <div className="aspect-[9/18] overflow-hidden bg-black border-b border-ink">
                                                <img 
                                                    src={item.src} 
                                                    alt={item.alt}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                            {item.caption && (
                                                <div className="p-3 bg-white font-sans text-xs text-ink-muted leading-relaxed">
                                                    <span className="font-mono font-bold text-blueprint mr-1">{'//'}</span>
                                                    {item.caption}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Web Enterprise Platform Views */}
                        {webGallery.length > 0 && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b-2 border-ink">
                                    <span className="w-2.5 h-2.5 bg-blueprint animate-ping"></span>
                                    <h4 className="font-mono text-xs font-black uppercase text-ink">
                                        {mobileGallery.length > 0 ? t.webTitle : t.defaultGalleryTitle}
                                    </h4>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {webGallery.map((item, idx) => (
                                        <div key={idx} className="border-2 border-ink bg-canvas shadow-brutal-sm overflow-hidden flex flex-col">
                                            <div className="aspect-video overflow-hidden bg-stone-100 border-b border-ink">
                                                <img 
                                                    src={item.src} 
                                                    alt={item.alt}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                            {item.caption && (
                                                <div className="p-3 bg-white font-sans text-xs text-ink-muted leading-relaxed">
                                                    <span className="font-mono font-bold text-blueprint mr-1">{'//'}</span>
                                                    {item.caption}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Footer */}
                        <div className="pt-6 border-t-2 border-ink flex flex-wrap gap-3">
                            {/* CAD Exploded View Trigger */}
                            <button
                                type="button"
                                onClick={() => {
                                    playClick();
                                    setIsExplodedOpen(true);
                                }}
                                className="brutal-btn-white flex-1 text-center font-mono text-xs font-black flex items-center justify-center gap-2"
                            >
                                <FiBox className="text-blueprint text-sm" />
                                <span>CAD EXPLODED VIEW</span>
                            </button>

                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brutal-btn-primary flex-1 text-center"
                                >
                                    <span>{t.viewLive}</span>
                                    <FiExternalLink />
                                </a>
                            )}

                            {project.repoType === 'private' ? (
                                <div className="brutal-btn bg-safety text-ink flex-1 text-center cursor-default select-none">
                                    <FiLock />
                                    <span>{t.proprietaryCode}</span>
                                </div>
                            ) : project.repoUrl ? (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brutal-btn-white flex-1 text-center"
                                >
                                    <FiGithub />
                                    <span>{t.sourceCode}</span>
                                </a>
                            ) : null}
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* Exploded 3D Modal scoped to this project */}
            <ExplodedViewModal 
                isOpen={isExplodedOpen}
                onClose={() => setIsExplodedOpen(false)}
                defaultSystem={getSystemName(project.id)}
            />
        </AnimatePresence>
    );
};

export default ProjectModal;
