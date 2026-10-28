import { useState } from 'react';
import { FiPlus, FiMinus, FiCpu } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Services = () => {
    const [openId, setOpenId] = useState("01");
    const { language } = useLanguage();
    const t = translations[language].services;

    return (
        <section id="services" className="py-16 sm:py-24 bg-canvas border-t-2 border-ink relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b-2 border-ink">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-ink text-white font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_#18181B]">
                            <FiCpu className="text-xs" />
                            <span>[ CAPABILITY ROSTER ]</span>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                            {t.title}
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 font-mono text-xs text-ink font-bold bg-white px-3 py-1.5 border-2 border-ink shadow-brutal-sm">
                        TOTAL DISCIPLINES: 06
                    </div>
                </div>

                {/* Industrial Accordion Grid */}
                <div className="space-y-4">
                    {t.items.map((service) => {
                        const isOpen = openId === service.id;

                        return (
                            <div
                                key={service.id}
                                className={`brutal-card transition-all duration-150 overflow-hidden ${
                                    isOpen 
                                        ? 'bg-canvas-card border-2 border-ink shadow-brutal-md ring-2 ring-blueprint/20' 
                                        : 'bg-white hover:bg-stone-50 border-2 border-ink shadow-brutal-sm'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenId(isOpen ? null : service.id)}
                                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                                >
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <span className={`font-mono text-sm sm:text-base font-black px-2.5 py-1 border-2 border-ink shadow-[2px_2px_0px_#18181B] ${
                                            isOpen ? 'bg-blueprint text-white' : 'bg-canvas text-ink'
                                        }`}>
                                            /{service.id}
                                        </span>
                                        <h3 className="font-display font-black text-lg sm:text-2xl text-ink uppercase tracking-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <div className={`w-8 h-8 flex items-center justify-center border-2 border-ink font-bold transition-transform ${
                                        isOpen ? 'bg-safety text-ink rotate-180' : 'bg-canvas text-ink'
                                    }`}>
                                        {isOpen ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t-2 border-ink/10 space-y-4 bg-canvas/40">
                                        <p className="font-sans text-sm sm:text-base text-ink leading-relaxed max-w-4xl">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {service.tags.map((tag) => (
                                                <span 
                                                    key={tag}
                                                    className="font-mono text-xs font-bold px-3 py-1 bg-white border border-ink text-ink shadow-[1px_1px_0px_#18181B]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
