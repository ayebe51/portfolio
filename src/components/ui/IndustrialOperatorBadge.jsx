import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { FiCheckCircle, FiShield, FiCpu, FiRadio } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { useSound } from '../../context/SoundContext';

const IndustrialOperatorBadge = ({ className = "" }) => {
    const { isEn } = useLanguage();
    const { playRelay } = useSound();
    const cardRef = useRef(null);
    const [isPointerFine, setIsPointerFine] = useState(false);
    const [isVerifiedBurst, setIsVerifiedBurst] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
        }
    }, []);

    // 3D Spring tilt values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 260, damping: 24 });
    const mouseYSpring = useSpring(y, { stiffness: 260, damping: 24 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

    const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [8, 3]);
    const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [8, 3]);
    const dynamicBoxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 0px #18181B`;

    const handleMouseMove = (e) => {
        if (!isPointerFine || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleBadgeClick = () => {
        playRelay();
        setIsVerifiedBurst(true);
        setTimeout(() => setIsVerifiedBurst(false), 1200);
    };

    return (
        <div className={`relative flex flex-col items-center select-none ${className}`}>
            
            {/* Industrial Lanyard Clip Slot / Fastener */}
            <div className="w-20 h-5 bg-[#27272A] border-2 border-ink rounded-t-sm flex items-center justify-center relative z-20 shadow-[2px_0px_0px_#18181B]">
                <div className="w-10 h-1.5 bg-[#09090B] rounded-full border border-stone-600"></div>
                <div className="absolute -top-3 w-4 h-3 border-2 border-ink bg-stone-300 rounded-xs"></div>
            </div>

            {/* Main Physical Operator Badge Card */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleBadgeClick}
                style={isPointerFine ? {
                    rotateX,
                    rotateY,
                    boxShadow: dynamicBoxShadow,
                    transformStyle: 'preserve-3d'
                } : {}}
                className="w-full max-w-[340px] sm:max-w-[360px] bg-canvas-card border-3 border-ink p-4 sm:p-5 relative cursor-pointer group transition-shadow duration-150 shadow-brutal-lg"
                title="Ahmad Ayub Nu'man // System Operator Badge (Click to Verify)"
            >
                {/* CAD Caliper Corner Brackets */}
                <span className="absolute top-1.5 left-1.5 font-mono text-[11px] font-black text-ink select-none leading-none">┌</span>
                <span className="absolute top-1.5 right-1.5 font-mono text-[11px] font-black text-ink select-none leading-none">┐</span>
                <span className="absolute bottom-1.5 left-1.5 font-mono text-[11px] font-black text-ink select-none leading-none">└</span>
                <span className="absolute bottom-1.5 right-1.5 font-mono text-[11px] font-black text-ink select-none leading-none">┘</span>

                {/* Top Badge Header Bar */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-2.5 mb-3.5">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 bg-telemetry rounded-full animate-ping"></span>
                        <span className="font-mono text-[11px] font-black uppercase tracking-wider text-ink">
                            OPERATOR_ID // #AYN-2026
                        </span>
                    </div>

                    <span className="font-mono text-[9px] font-black uppercase px-1.5 py-0.5 bg-ink text-white border border-ink">
                        ROOT // LVL_03
                    </span>
                </div>

                {/* Operator Photo Frame with CAD Corner Brackets & Hover Color Reveal */}
                <div className="relative border-2 border-ink bg-canvas mb-3.5 overflow-hidden group/photo">
                    
                    {/* Corner Caliper Overlay inside Photo */}
                    <span className="absolute top-2 left-2 font-mono text-xs font-black text-white drop-shadow-[1px_1px_0px_#18181B] z-10 select-none">┌</span>
                    <span className="absolute top-2 right-2 font-mono text-xs font-black text-white drop-shadow-[1px_1px_0px_#18181B] z-10 select-none">┐</span>
                    <span className="absolute bottom-2 left-2 font-mono text-xs font-black text-white drop-shadow-[1px_1px_0px_#18181B] z-10 select-none">└</span>
                    <span className="absolute bottom-2 right-2 font-mono text-xs font-black text-white drop-shadow-[1px_1px_0px_#18181B] z-10 select-none">┘</span>

                    {/* Actual Portrait Photo of Ahmad Ayub */}
                    <div className="aspect-[4/4.5] sm:aspect-[4/4.6] overflow-hidden bg-stone-200">
                        <img 
                            src="/assets/profile.png" 
                            alt="Ahmad Ayub Nu'man — System & UI Engineer" 
                            className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover/photo:grayscale-0 group-hover/photo:contrast-100 group-hover/photo:brightness-100 transition-all duration-300"
                            loading="eager"
                        />
                    </div>

                    {/* Watermark Stencil Badge on Photo */}
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                        <span className={`font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#18181B] transition-colors ${
                            isVerifiedBurst 
                                ? 'bg-telemetry text-white animate-bounce' 
                                : 'bg-safety text-ink'
                        }`}>
                            {isVerifiedBurst ? 'VERIFIED ✓' : 'SYSTEM ARCHITECT'}
                        </span>
                    </div>

                    {/* Subtle Holographic Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-drafting-grid opacity-25 pointer-events-none"></div>
                </div>

                {/* Operator Technical Specifications Sheet */}
                <div className="space-y-2 mb-3.5 bg-canvas p-2.5 sm:p-3 border-2 border-ink font-mono text-xs">
                    
                    <div className="flex items-start justify-between border-b border-ink/20 pb-1.5">
                        <span className="text-[10px] font-bold text-ink-muted uppercase flex items-center gap-1">
                            <FiCpu className="text-blueprint text-[11px]" />
                            <span>{isEn ? 'IDENTITY:' : 'IDENTITAS:'}</span>
                        </span>
                        <span className="font-black text-ink text-right text-[11px]">
                            AHMAD AYUB NU'MAN
                        </span>
                    </div>

                    <div className="flex items-start justify-between border-b border-ink/20 pb-1.5">
                        <span className="text-[10px] font-bold text-ink-muted uppercase flex items-center gap-1">
                            <FiShield className="text-telemetry text-[11px]" />
                            <span>{isEn ? 'DOMAIN:' : 'KEAHLIAN:'}</span>
                        </span>
                        <span className="font-bold text-blueprint text-right text-[10px] sm:text-[11px]">
                            {isEn ? 'Distributed Sys & UI' : 'Backend & UI Craft'}
                        </span>
                    </div>

                    <div className="flex items-start justify-between border-b border-ink/20 pb-1.5">
                        <span className="text-[10px] font-bold text-ink-muted uppercase flex items-center gap-1">
                            <FiRadio className="text-safety-dark text-[11px]" />
                            <span>{isEn ? 'BASE:' : 'LOKASI:'}</span>
                        </span>
                        <span className="font-semibold text-ink text-right text-[10px]">
                            JAKARTA, ID (UTC+7)
                        </span>
                    </div>

                    <div className="flex items-center justify-between pt-0.5">
                        <span className="text-[10px] font-bold text-ink-muted uppercase">
                            STATUS:
                        </span>
                        <span className="font-black text-[10px] text-telemetry-dark bg-telemetry-light px-1.5 py-0.2 border border-telemetry flex items-center gap-1">
                            <FiCheckCircle className="text-[10px]" />
                            <span>{isEn ? 'AVAILABLE FOR HIRE' : 'SIAP DIREKRUT'}</span>
                        </span>
                    </div>

                </div>

                {/* Industrial Barcode & Cryptographic Hash Footer */}
                <div className="pt-2 border-t-2 border-ink flex items-center justify-between font-mono text-[9px] text-ink-muted">
                    {/* Simulated SVG Barcode */}
                    <div className="flex items-center gap-0.5 h-6 bg-white px-2 py-0.5 border border-ink">
                        <span className="w-0.5 h-full bg-ink"></span>
                        <span className="w-1 h-full bg-ink"></span>
                        <span className="w-0.5 h-full bg-ink"></span>
                        <span className="w-1.5 h-full bg-ink"></span>
                        <span className="w-0.5 h-full bg-ink"></span>
                        <span className="w-1 h-full bg-ink"></span>
                        <span className="w-0.5 h-full bg-ink"></span>
                        <span className="w-2 h-full bg-ink"></span>
                        <span className="w-0.5 h-full bg-ink"></span>
                        <span className="w-1 h-full bg-ink"></span>
                        <span className="w-0.5 h-full bg-ink"></span>
                    </div>

                    <div className="text-right leading-tight">
                        <div className="font-black text-ink">SEC_HASH: 7F8A..C4E1</div>
                        <div className="text-[8px] text-blueprint font-bold">100% CI/CD VERIFIED</div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default IndustrialOperatorBadge;
