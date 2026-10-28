import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckSquare, FiGithub, FiLayers } from 'react-icons/fi';
import { getProjects } from '../data/projects';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const FILTER_KEYS = ['all', 'frontend', 'fullstack', 'mobile'];

const PortfolioGrid = () => {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const { language } = useLanguage();
    const t = translations[language].portfolio;
    const currentProjects = getProjects(language);

    const filteredProjects = activeFilter === 'all'
        ? currentProjects
        : currentProjects.filter(p => p.filterCategories?.includes(activeFilter));

    const selectedProject = selectedProjectId 
        ? currentProjects.find(p => p.id === selectedProjectId) || null 
        : null;

    return (
        <section id="portfolio" className="py-16 sm:py-24 bg-canvas border-t-2 border-ink relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b-2 border-ink">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-safety text-ink font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_#18181B]">
                            <FiCheckSquare className="text-xs" />
                            <span>[ {t.badge} ]</span>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                            {t.title}
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 font-mono text-xs text-ink font-bold bg-white px-3 py-1.5 border-2 border-ink shadow-brutal-sm">
                        TOTAL REPOSITORIES: 3 (100% PRODUCTION VERIFIED)
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10" role="tablist" aria-label="Project category filter">
                    {FILTER_KEYS.map((key) => {
                        const isActive = activeFilter === key;
                        const label = t.filters?.[key] || key;
                        const count = key === 'all'
                            ? currentProjects.length
                            : currentProjects.filter(p => p.filterCategories?.includes(key)).length;

                        return (
                            <button
                                key={key}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveFilter(key)}
                                className={`font-mono text-xs font-bold uppercase px-3.5 py-2 border-2 border-ink transition-all cursor-pointer ${
                                    isActive
                                        ? 'bg-ink text-white shadow-none translate-x-0.5 translate-y-0.5'
                                        : 'bg-white text-ink shadow-[2px_2px_0px_#18181B] hover:bg-stone-50'
                                }`}
                            >
                                <span className="mr-2">{label}</span>
                                <span className={`px-1.5 py-0.2 text-[10px] font-black border border-current ${
                                    isActive ? 'bg-blueprint text-white' : 'bg-canvas text-ink'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Project Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div 
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25 }}
                                className="h-full flex flex-col"
                            >
                                <ProjectCard 
                                    project={project} 
                                    onClick={(p) => setSelectedProjectId(p.id)} 
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Footer Callout */}
                <div className="p-6 brutal-card bg-canvas-card flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blueprint text-white flex items-center justify-center font-bold text-lg border-2 border-ink">
                            <FiLayers />
                        </div>
                        <div>
                            <div className="font-mono text-xs font-black uppercase text-ink">
                                Looking for Architecture & DDL Details?
                            </div>
                            <div className="font-sans text-xs text-ink-muted">
                                Full database schemas, ER diagrams, and automated test walkthroughs available upon interview request.
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://github.com/ayebe51"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn-white text-xs font-mono w-full sm:w-auto"
                    >
                        <FiGithub />
                        <span>GitHub @ayebe51</span>
                    </a>
                </div>

                {/* Specifications Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProjectId(null)}
                        />
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default PortfolioGrid;
