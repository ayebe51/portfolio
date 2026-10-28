import { FiAward } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Testimonials = () => {
    const { language } = useLanguage();
    const t = translations[language].testimonials;

    return (
        <section id="track-record" className="py-16 sm:py-24 bg-canvas border-t-2 border-ink relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b-2 border-ink">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-telemetry text-white font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_#18181B]">
                            <FiAward className="text-xs" />
                            <span>[ PRODUCTION AUDIT ]</span>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                            {t.title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-xs font-bold text-ink bg-white px-3 py-1.5 border-2 border-ink shadow-brutal-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-telemetry animate-ping"></span>
                        <span>{t.status}</span>
                    </div>
                </div>

                {/* 3 Pillar Verification Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {t.stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="brutal-card brutal-card-hover bg-canvas-card p-6 sm:p-8 flex flex-col justify-between"
                        >
                            <div>
                                <div className="font-mono font-black text-4xl sm:text-5xl text-ink tracking-tight mb-3">
                                    {stat.number}
                                </div>
                                <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight mb-3">
                                    {stat.label}
                                </h3>
                                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                                    {stat.description}
                                </p>
                            </div>

                            {stat.tags && (
                                <div className="pt-4 border-t-2 border-ink flex flex-wrap gap-1.5">
                                    {stat.tags.map((tag, tIdx) => (
                                        <span 
                                            key={tIdx}
                                            className="font-mono text-[11px] font-bold px-2 py-0.5 bg-canvas border border-ink text-ink"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
