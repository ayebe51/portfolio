import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
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

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-[#0a0a0a] rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col overflow-hidden border border-gray-800/50"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        data-lenis-prevent
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-white hover:text-black rounded-full text-white backdrop-blur-md transition-all duration-300 border border-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                            aria-label="Close project modal"
                        >
                            <FiX className="text-xl" />
                        </button>

                        {/* Image Header */}
                        <div className="w-full aspect-video bg-black relative border-b border-gray-800/50 flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                decoding="async"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute bottom-6 left-8 z-20">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase bg-black/50 backdrop-blur-md px-4 py-2 rounded-full inline-block border border-primary/20 shadow-lg">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12 w-full">
                            <h3 id="project-modal-title" className="text-4xl md:text-5xl font-black mb-6 font-heading text-white tracking-tight">{project.title}</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg font-body">
                                {project.description}
                            </p>

                            {project.demoNote && (
                                <div className="mb-10 p-4 bg-primary/10 border border-primary/30 rounded-2xl flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 animate-pulse"></div>
                                    <div className="text-sm text-gray-200 leading-relaxed font-body">
                                        <strong className="text-white font-semibold">Live Demo Access: </strong>
                                        {project.demoNote}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Challenge</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{project.challenge}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Approach</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{project.approach}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Results</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{project.results}</p>
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Tools & Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, idx) => (
                                        <span key={idx} className="text-sm font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800 px-4 py-2 rounded-lg border border-gray-700/50 transition-colors">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Gallery */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="mb-10">
                                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Project Gallery & Feature Views</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.gallery.map((item, idx) => {
                                            const imgSrc = typeof item === 'string' ? item : item.src;
                                            const imgAlt = typeof item === 'object' && item.alt ? item.alt : `${project.title} screenshot ${idx + 1}`;
                                            const imgCaption = typeof item === 'object' && item.caption ? item.caption : null;

                                            return (
                                                <div key={idx} className="flex flex-col rounded-2xl overflow-hidden border border-gray-800/80 bg-gray-900/60 shadow-lg hover:border-primary/40 transition-all duration-300 group">
                                                    <div className="aspect-video w-full overflow-hidden bg-black/60 relative">
                                                        <img 
                                                            src={imgSrc} 
                                                            alt={imgAlt} 
                                                            loading="lazy"
                                                            decoding="async"
                                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                                                        />
                                                    </div>
                                                    {imgCaption && (
                                                        <div className="p-4 bg-gray-900/90 border-t border-gray-800/60 flex items-start gap-2 text-xs text-gray-300 leading-relaxed font-body">
                                                            <span className="text-primary font-bold select-none">{"//"}</span>
                                                            <span>{imgCaption}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800/50">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest py-3.5 px-6 rounded-full bg-primary text-black hover:bg-white hover:text-black active:scale-95 transition-all duration-300 shadow-lg flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                                    >
                                        View Live Project <FiExternalLink className="text-lg" />
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest py-3.5 px-6 rounded-full bg-gray-800/80 border border-gray-700 hover:border-white text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-300 shadow-lg flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                                    >
                                        Source Code <FiGithub className="text-lg" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
