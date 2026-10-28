import { FiTerminal, FiCheckCircle, FiShield, FiCpu, FiLayers } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language].datasheet;

    const layerIcons = [
        FiCpu,
        FiShield,
        FiLayers,
        FiTerminal
    ];

    return (
        <section id="datasheet" className="py-16 sm:py-24 bg-canvas border-t-2 border-ink relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b-2 border-ink">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blueprint text-white font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_#18181B]">
                            <FiTerminal className="text-xs" />
                            <span>[ {t.badge} ]</span>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                            {t.title}
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 font-mono text-xs text-ink font-bold bg-safety px-3 py-1.5 border border-ink shadow-[2px_2px_0px_#18181B]">
                        STANDARDS: ACID // DDD // 100% CI PASS
                    </div>
                </div>

                {/* Industrial Datasheet Table Container */}
                <div className="brutal-card bg-canvas-card overflow-hidden shadow-brutal-lg">
                    
                    {/* Table Title Bar */}
                    <div className="bg-canvas p-3 sm:p-4 border-b-2 border-ink flex items-center justify-between font-mono text-xs font-bold text-ink">
                        <span>SYSTEM SPECIFICATION MATRIX // REV 2.0</span>
                        <span className="text-telemetry font-black">● AUDITED</span>
                    </div>

                    {/* Table Elements */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-ink bg-stone-100 font-mono text-xs font-black text-ink uppercase tracking-wider">
                                    <th className="p-4 sm:p-5 border-r-2 border-ink">{t.headers.layer}</th>
                                    <th className="p-4 sm:p-5 border-r-2 border-ink">{t.headers.stack}</th>
                                    <th className="p-4 sm:p-5 border-r-2 border-ink hidden md:table-cell">{t.headers.patterns}</th>
                                    <th className="p-4 sm:p-5">{t.headers.status}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-ink font-mono text-xs sm:text-sm">
                                {t.rows.map((row, idx) => {
                                    const Icon = layerIcons[idx] || FiLayers;
                                    return (
                                        <tr 
                                            key={idx}
                                            className="hover:bg-blueprint/5 transition-colors group"
                                        >
                                            <td className="p-4 sm:p-5 border-r-2 border-ink font-bold text-ink align-top">
                                                <div className="flex items-center gap-2">
                                                    <span className="p-1.5 bg-canvas border border-ink text-blueprint">
                                                        <Icon className="text-sm" />
                                                    </span>
                                                    <span className="font-display font-black text-sm sm:text-base uppercase tracking-tight">
                                                        {row.layer}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="p-4 sm:p-5 border-r-2 border-ink font-bold text-ink align-top">
                                                <div className="bg-canvas p-2.5 border border-ink text-xs sm:text-sm leading-relaxed text-ink">
                                                    {row.stack}
                                                </div>
                                            </td>

                                            <td className="p-4 sm:p-5 border-r-2 border-ink font-sans text-xs sm:text-sm text-ink-muted leading-relaxed align-top hidden md:table-cell">
                                                {row.patterns}
                                            </td>

                                            <td className="p-4 sm:p-5 align-top">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-telemetry-light border border-ink text-telemetry-dark font-mono text-xs font-black uppercase">
                                                    <FiCheckCircle className="text-xs" />
                                                    <span>{row.status}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer Bar */}
                    <div className="bg-canvas p-3 sm:p-4 border-t-2 border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-ink-muted">
                        <span>DATASET EXTRACTED FROM PRODUCTION DEPLOYMENTS & REPOSITORIES</span>
                        <span className="font-bold text-ink">36,000+ AUTOMATED ASSERTIONS VERIFIED</span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Skills;
