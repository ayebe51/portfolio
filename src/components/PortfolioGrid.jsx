import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import MagneticButton from './ui/MagneticButton';

const PortfolioGrid = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="portfolio" className="section-padding bg-neutral-dark relative z-10 min-h-screen">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <h2 className="text-4xl md:text-[6vw] leading-[1] font-heading font-black text-white uppercase opacity-100">
                        Selected<br />Works
                    </h2>
                    <p className="text-gray-400 text-sm md:text-xl font-body uppercase tracking-widest font-medium">
                        {"// 2023 — 2026"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col h-full"
                        >
                            <ProjectCard 
                                project={project} 
                                onClick={(p) => setSelectedProject(p)} 
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <MagneticButton href="https://github.com/ayebe51" target="_blank" rel="noopener noreferrer">
                       <span className="inline-block px-10 py-4 border border-white/20 rounded-full text-white uppercase tracking-widest hover:bg-white hover:text-black active:scale-95 transition-all duration-300 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark">
                            View All Archives
                       </span>
                    </MagneticButton>
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PortfolioGrid;
