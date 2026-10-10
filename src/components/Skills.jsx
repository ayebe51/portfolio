import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    // Frontend & Mobile
    "React", "Next.js", "Flutter", "TypeScript", "JavaScript", "Dart", "Tailwind CSS", "HTML5", "CSS3",
    // Backend & Databases
    "Laravel", "NestJS", "PHP", "Node.js", "Express", "PostgreSQL", "MySQL", "Prisma",
    // Libraries & Tools
    "Framer Motion", "Recharts", "Vite", "Git", "REST API",
    // Deployment & DevOps
    "Docker", "Coolify", "Vercel"
];

const Skills = () => {
    return (
        <section className="section-padding bg-neutral-dark overflow-hidden border-t border-gray-800">
            <div className="flex relative">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 30 
                    }}
                    className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-16 md:gap-32">
                             <span className={`text-[6vw] md:text-[5vw] font-heading font-bold uppercase tracking-tighter ${index % 2 === 0 ? 'text-white' : 'text-transparent text-stroke'}`}>
                                {skill}
                            </span>
                            <div className="w-4 h-4 rounded-full bg-primary/50"></div>
                        </div>
                    ))}
                </motion.div>
                
                 {/* Fade Gradients */}
                 <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-neutral-dark to-transparent z-10"></div>
                 <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neutral-dark to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default Skills;
