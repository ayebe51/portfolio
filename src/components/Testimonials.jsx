import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    {
        number: "3",
        label: "Enterprise Platforms",
        description: "Architected SIMMACI for 270+ educational institutions, Koneksi Santri pesantren ERP & Flutter mobile app, and Kiro omnichannel retail POS.",
        tags: ["SIMMACI (270+ Org)", "Koneksi Santri", "Kiro Retail POS"]
    },
    {
        number: "Multi-Entity",
        label: "Domain Architecture",
        description: "Implemented double-entry accounting ledgers, Maker-Checker transaction verification, Money Value Objects, and append-only audit stores with strict RBAC.",
        tags: ["Domain-Driven Design", "Maker-Checker", "Money Objects", "RBAC"]
    },
    {
        number: "Full-Stack",
        label: "Production Delivery",
        description: "End-to-end engineering across React 19, Next.js, Flutter, Laravel 12, NestJS, TypeScript, and PostgreSQL 16. Delivered scalable RESTful APIs, Docker containers, and 1,800+ automated test cases with zero financial discrepancies.",
        tags: ["React 19", "Next.js", "Flutter", "Laravel 12", "NestJS", "TypeScript", "PostgreSQL 16", "Docker", "PHPUnit/Pest"]
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding bg-neutral-dark relative z-10 overflow-hidden border-t border-gray-800">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                     <h2 className="text-[10vw] leading-[0.8] font-heading font-bold text-white uppercase opacity-100">
                        Track<br />Record
                    </h2>
                     <div className="flex items-center gap-4 mt-8 md:mt-0">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                        <span className="text-gray-200 font-mono text-sm tracking-widest uppercase font-bold">Proven Results</span>
                     </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="h-full flex flex-col bg-neutral-800/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden p-8 hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                <h3 className="text-6xl md:text-7xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {stat.number}
                                </h3>
                                <h4 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-2">
                                    {stat.label}
                                </h4>
                                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                                    {stat.description}
                                </p>
                                {stat.tags && (
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-800/80">
                                        {stat.tags.map((tag, tIndex) => (
                                            <span 
                                                key={tIndex}
                                                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-gray-800 text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
