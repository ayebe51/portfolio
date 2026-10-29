import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiTerminal, FiDownload, FiInfo } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import ScrambleText from './ui/ScrambleText';
import KineticCounter from './ui/KineticCounter';
import IndustrialOperatorBadge from './ui/IndustrialOperatorBadge';
import { useSound } from '../context/SoundContext';

const Hero = ({ onOpenCV, onOpenCommandPalette }) => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const telemetry = translations[language].telemetry;
    const { playClick } = useSound();
    const [focusedMetric, setFocusedMetric] = useState(null);

    // Deep micro-telemetry breakdown data
    const microTelemetryEn = [
        "Across 14 Districts • Centralized LP Ma'arif NU Cilacap Admin",
        "15,000+ Active Students • 2,000+ Verified Teachers & Staff",
        "Pest + PHPUnit • 36,000+ Assertions • Zero Flaky Tests in CI",
        "Double-Entry Accounting • Closed-Loop Wallet Cashier Balanced"
    ];

    const microTelemetryId = [
        "Tersebar di 14 Kecamatan • Tata Kelola LP Ma'arif NU Cilacap",
        "15.000+ Siswa Aktif • 2.000+ Guru & Staf Tervalidasi",
        "Pest + PHPUnit • 36.000+ Assertions • Nol Test Gagal di CI",
        "Buku Besar Double-Entry • Rekonsiliasi Kasir & Dompet Tertutup"
    ];

    const microData = language === 'id' ? microTelemetryId : microTelemetryEn;

    return (
        <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2-Column Responsive Hero Stage: Left (Typography & CTAs) | Right (Industrial Operator Badge) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
                    
                    {/* Left Column: Headlines & Actions */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
                        
                        {/* Specification Header Tag with Text Scrambler */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 brutal-card !shadow-brutal-sm bg-canvas-card mb-5 sm:mb-6 self-start"
                        >
                            <span className="w-2.5 h-2.5 bg-telemetry animate-ping"></span>
                            <span className="font-mono text-xs font-black tracking-wider text-ink uppercase">
                                <ScrambleText text={t.eyebrow} delay={200} />
                            </span>
                        </motion.div>

                        {/* Dual-Identity Headline with Kinetic Decoder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-2 mb-5 sm:mb-6"
                        >
                            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink uppercase">
                                <span className="block">
                                    <ScrambleText text={t.headlineTop} delay={400} />
                                </span>
                                <span className="text-blueprint underline decoration-4 decoration-ink underline-offset-8 inline-block">
                                    <ScrambleText text={t.headlineBottom} delay={700} />
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle / Value Proposition */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="font-sans text-base sm:text-lg md:text-xl text-ink-muted leading-relaxed mb-6 sm:mb-8 max-w-2xl"
                        >
                            {t.desc}
                        </motion.p>

                        {/* Interactive Action Triggers with Sound Hook */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-3 sm:gap-4"
                        >
                            <a
                                href="#architecture"
                                onClick={playClick}
                                className="brutal-btn-primary"
                            >
                                <span>{t.exploreWork}</span>
                                <FiArrowRight className="text-sm" />
                            </a>

                            {onOpenCommandPalette && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        playClick();
                                        onOpenCommandPalette();
                                    }}
                                    className="brutal-btn-white"
                                >
                                    <FiTerminal className="text-sm" />
                                    <span>{t.cmdBtn}</span>
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={() => {
                                    playClick();
                                    onOpenCV();
                                }}
                                className="brutal-btn-safety"
                            >
                                <FiDownload className="text-sm" />
                                <span>{t.downloadCv}</span>
                            </button>
                        </motion.div>

                    </div>

                    {/* Right Column: Physical Industrial Operator Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 25 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end pt-4 lg:pt-0"
                    >
                        <IndustrialOperatorBadge />
                    </motion.div>

                </div>

                {/* The Telemetry Strip with Kinetic Counters & Micro-Telemetry Tooltips */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="border-t-2 border-ink pt-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-black uppercase tracking-wider text-ink bg-safety px-2 py-0.5 border border-ink">
                            [ {telemetry.badge} ]
                        </span>
                        <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
                            HOVER / FOCUS FOR MICRO-TELEMETRY SPEC
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {telemetry.items.map((item, idx) => {
                            const isInspecting = focusedMetric === idx;

                            return (
                                <div 
                                    key={idx}
                                    tabIndex={0}
                                    onMouseEnter={() => setFocusedMetric(idx)}
                                    onMouseLeave={() => setFocusedMetric(null)}
                                    onFocus={() => setFocusedMetric(idx)}
                                    onBlur={() => setFocusedMetric(null)}
                                    className={`brutal-card p-4 sm:p-5 bg-canvas-card relative overflow-hidden transition-all duration-200 outline-none ${
                                        isInspecting 
                                            ? '!shadow-brutal-lg ring-2 ring-blueprint translate-x-0.5 -translate-y-0.5' 
                                            : 'hover:!shadow-brutal-sm'
                                    }`}
                                >
                                    {/* Top Pin Header */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono text-[10px] font-bold text-ink-muted">
                                            {`TELEMETRY // 0${idx + 1}`}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-telemetry"></span>
                                    </div>

                                    {/* Primary Metric Number with Count-Up */}
                                    <div className="font-display font-black text-3xl sm:text-4xl text-ink tracking-tight mb-1">
                                        <KineticCounter value={item.count} />
                                    </div>

                                    {/* Label */}
                                    <div className="font-sans font-bold text-xs sm:text-sm text-ink mb-1">
                                        {item.label}
                                    </div>

                                    {/* Sub-label */}
                                    <div className="font-mono text-[11px] text-ink-muted leading-tight">
                                        {item.sub}
                                    </div>

                                    {/* Active Inspection Micro-Tooltip Popover */}
                                    <AnimatePresence>
                                        {isInspecting && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                transition={{ duration: 0.15 }}
                                                className="mt-2 pt-2 border-t border-ink/20 font-mono text-[11px] font-semibold text-blueprint flex items-start gap-1.5"
                                            >
                                                <FiInfo className="text-xs shrink-0 mt-0.5" />
                                                <span>{microData[idx]}</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
