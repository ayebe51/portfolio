import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Services = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const { language } = useLanguage();
    const t = translations[language].services;

    return (
        <section id="services" className="section-padding bg-neutral-dark relative z-10">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-[calc(5vw*1.618)]">
                    <h2 className="text-[10vw] leading-[0.8] font-heading font-bold text-white uppercase opacity-100">
                        {t.title}
                    </h2>
                    <p className="text-gray-200 text-lg max-w-sm text-right mt-8 md:mt-0 font-body uppercase tracking-widest font-medium">
                        {t.subtitle}
                    </p>
                </div>

                <div className="flex flex-col">
                    {t.items.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.618 }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            onClick={() => setHoveredService(hoveredService === service.id ? null : service.id)}
                            className="group border-t border-gray-800 py-12 md:py-[5vw] grid grid-cols-1 md:grid-cols-[0.38fr_auto] gap-8 cursor-pointer hover:bg-white/5 transition-colors duration-500 px-4 md:px-0"
                        >
                            <span className="text-gray-400 font-body text-sm tracking-widest uppercase font-bold pt-4">
                                /{service.id}
                            </span>
                            
                            <div className="flex-1 relative">
                                <h3 className="text-5xl md:text-[5vw] leading-[1.1] font-heading font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredService === service.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} md:group-hover:max-h-[600px] md:group-hover:opacity-100`}>
                                    <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl md:max-w-3xl leading-relaxed mb-6 font-normal">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2.5 pb-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-3.5 py-1.5 border border-gray-700 bg-neutral-900/80 rounded-full text-xs sm:text-sm text-gray-200 uppercase tracking-wider font-semibold hover:border-primary/50 hover:text-primary transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <motion.div 
                                className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
                                    <FiArrowUpRight className="text-3xl" />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                    <div className="border-t border-gray-800"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;
