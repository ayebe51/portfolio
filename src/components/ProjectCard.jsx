import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -8 }}
            className="group relative h-full flex flex-col bg-gray-900 rounded-3xl overflow-hidden cursor-pointer border border-gray-800 hover:border-gray-700 hover:shadow-2xl transition-all duration-500"
            onClick={() => onClick(project)}
        >
            {/* Image Container with Parallax-like feel on hover */}
            <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-dark/20 group-hover:bg-neutral-dark/0 transition-all duration-500 z-10"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-neutral-dark/80 backdrop-blur-md text-xs font-bold px-4 py-2 rounded-full text-white uppercase tracking-wider shadow-sm border border-white/10">
                        {project.category}
                    </span>
                </div>

                {/* Live Demo Status Pill */}
                {project.demoUrl && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-500/40 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest">Live Demo</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-8 relative flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {project.shortDesc}
                    </p>
                </div>

                <div>
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        {project.tools.slice(0, 4).map((tool, i) => (
                            <span key={i} className="text-xs font-medium text-gray-400 bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700/60">
                                {tool}
                            </span>
                        ))}
                    </div>

                    {/* Direct Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/70">
                        <div className="flex items-center gap-2">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 hover:bg-primary text-primary hover:text-black border border-primary/40 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                                    title={`Open ${project.title} live demonstration`}
                                >
                                    <span>Live Demo</span>
                                    <FiExternalLink className="text-xs" />
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-white text-gray-300 hover:text-black border border-gray-700 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                                    title="View Source Code on GitHub"
                                >
                                    <span>GitHub</span>
                                    <FiGithub className="text-xs" />
                                </a>
                            )}
                        </div>

                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white flex items-center gap-1 transition-colors">
                            Case Study <FiArrowUpRight className="text-sm" />
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
