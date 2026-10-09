import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const services = [
    {
        id: "01",
        title: "Full Stack Development",
        description: "Building complete web applications from database to UI using React, Next.js, Node.js, and PostgreSQL/MySQL. Expertise in authentication, state management, and deployment.",
        tags: ["React", "Next.js", "Node.js", "Express", "TypeScript"]
    },
    {
        id: "02",
        title: "SaaS Development",
        description: "Creating subscription-based platforms with multi-tier pricing, user management, payment integration, and analytics. From MVP to production-ready SaaS products.",
        tags: ["Subscriptions", "Stripe", "Multi-tenancy", "Analytics"]
    },
    {
        id: "03",
        title: "Database Architecture",
        description: "Designing normalized schemas, optimizing queries, and implementing data migration strategies for PostgreSQL and MySQL. Focus on scalability and data integrity.",
        tags: ["PostgreSQL", "MySQL", "Prisma", "Supabase", "Migrations"]
    },
    {
        id: "04",
        title: "Dashboard & Analytics",
        description: "Building data-rich admin panels with real-time updates, interactive charts, role-based access control, and comprehensive reporting systems.",
        tags: ["Recharts", "Real-time", "RBAC", "Data Viz"]
    },
    {
        id: "05",
        title: "API Development",
        description: "Designing and implementing RESTful APIs with proper authentication, validation, error handling, and documentation. Focus on performance and security.",
        tags: ["REST", "JWT", "Validation", "Documentation"]
    },
    {
        id: "06",
        title: "Frontend Engineering",
        description: "Crafting responsive, accessible interfaces with smooth animations and optimal performance. Expert in Tailwind CSS, Shadcn UI, and Framer Motion.",
        tags: ["Tailwind CSS", "Shadcn UI", "Framer Motion", "Responsive"]
    }
];

const Services = () => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <section id="services" className="section-padding bg-neutral-dark relative z-10">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-[calc(5vw*1.618)]">
                    <h2 className="text-[10vw] leading-[0.8] font-heading font-bold text-white uppercase opacity-100">
                        Expertise
                    </h2>
                    <p className="text-gray-200 text-lg max-w-sm text-right mt-8 md:mt-0 font-body uppercase tracking-widest font-medium">
                        A toolkit built for the modern edge of the web.
                    </p>
                </div>

                <div className="flex flex-col">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.618 }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="group border-t border-gray-800 py-12 md:py-[5vw] grid grid-cols-1 md:grid-cols-[0.38fr_auto] gap-8 cursor-pointer hover:bg-white/5 transition-colors duration-500 px-4 md:px-0"
                        >
                            <span className="text-gray-400 font-body text-sm tracking-widest uppercase font-bold pt-4">
                                /{service.id}
                            </span>
                            
                            <div className="flex-1 relative">
                                <h3 className="text-5xl md:text-[5vw] leading-[1.1] font-heading font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ${hoveredService === service.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:group-hover:max-h-64 md:group-hover:opacity-100`}>
                                    <p className="text-xl md:text-2xl text-neutral-300 max-w-[38.2vw] leading-[1.618] mb-6 font-normal">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300 uppercase tracking-wider font-semibold">
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
