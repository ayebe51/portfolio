import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getProjects } from '../data/projects';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import MagneticButton from './ui/MagneticButton';
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
        <section id="portfolio" className="section-padding bg-neutral-dark relative z-10 min-h-screen">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="text-primary text-xs uppercase tracking-widest font-bold mb-3 block">
                            {language === 'id' ? '// Portofolio Teruji' : '// Proven Case Studies'}
                        </span>
                        <h2 className="text-4xl md:text-[6vw] leading-[1] font-heading font-black text-white uppercase opacity-100">
                            {language === 'id' ? (
                                <>Proyek<br />Pilihan</>
                            ) : (
                                <>Selected<br />Works</>
                            )}
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm md:text-xl font-body uppercase tracking-widest font-medium">
                        {t.timeline}
                    </p>
                </div>

                {/* Interactive Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12" role="tablist" aria-label="Project category filters">
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
                                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark ${
                                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeFilterPill"
                                        className="absolute inset-0 bg-primary/20 border border-primary/60 rounded-full shadow-lg shadow-primary/10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>{label}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                                        isActive ? 'bg-primary text-white' : 'bg-neutral-800 text-neutral-400'
                                    }`}>
                                        {count}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div 
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                className="flex flex-col h-full"
                            >
                                <ProjectCard 
                                    project={project} 
                                    onClick={(p) => setSelectedProjectId(p.id)} 
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-24 text-center">
                    <MagneticButton href="https://github.com/ayebe51" target="_blank" rel="noopener noreferrer">
                       <span className="inline-block px-10 py-4 border border-white/20 rounded-full text-white uppercase tracking-widest hover:bg-white hover:text-black active:scale-95 transition-all duration-300 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                            {t.viewAllArchives}
                       </span>
                    </MagneticButton>
                </div>

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
