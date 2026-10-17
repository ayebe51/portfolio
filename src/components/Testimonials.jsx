import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Testimonials = () => {
    const { language } = useLanguage();
    const t = translations[language].testimonials;

    return (
        <section className="section-padding bg-neutral-dark relative z-10 overflow-hidden border-t border-neutral-border">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                     <h2 className="text-[10vw] leading-[0.8] font-heading font-bold text-white uppercase opacity-100">
                        {language === 'id' ? (
                            <>Rekam<br />Jejak</>
                        ) : (
                            <>Track<br />Record</>
                        )}
                    </h2>
                     <div className="flex items-center gap-4 mt-8 md:mt-0">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                        <span className="text-gray-200 font-mono text-sm tracking-widest uppercase font-bold">{t.status}</span>
                     </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {t.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="h-full flex flex-col bg-neutral-surface backdrop-blur-sm border border-neutral-border rounded-3xl overflow-hidden p-8 hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
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
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-neutral-border">
                                        {stat.tags.map((tag, tIndex) => (
                                            <span 
                                                key={tIndex}
                                                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-dark border border-neutral-border text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
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
