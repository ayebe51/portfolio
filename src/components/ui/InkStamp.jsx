import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../../context/SoundContext';

const InkStamp = ({ 
    text = "100% PRODUCTION VERIFIED", 
    subtext = "ZERO REGRESSION // 1,842 TESTS PASSED",
    refCode = "AYN-SPEC-2026",
    color = "red", // "red" | "ink" | "blueprint"
    className = ""
}) => {
    const { playStamp } = useSound();
    const [stampKey, setStampKey] = useState(0);

    const colorStyles = {
        red: {
            border: "border-red-700/90",
            innerBorder: "border-red-700/80",
            text: "text-red-700/90",
            bg: "bg-red-50/20"
        },
        ink: {
            border: "border-ink/90",
            innerBorder: "border-ink/80",
            text: "text-ink/90",
            bg: "bg-ink/5"
        },
        blueprint: {
            border: "border-blueprint/90",
            innerBorder: "border-blueprint/80",
            text: "text-blueprint/90",
            bg: "bg-blueprint/5"
        }
    };

    const currentStyle = colorStyles[color] || colorStyles.red;

    const handleStampClick = () => {
        playStamp();
        setStampKey(prev => prev + 1);
    };

    return (
        <motion.div
            key={stampKey}
            initial={{ scale: 1.8, opacity: 0, rotate: -22 }}
            animate={{ scale: 1, opacity: 0.92, rotate: -10 }}
            transition={{ 
                type: "spring", 
                stiffness: 450, 
                damping: 22,
                mass: 0.8
            }}
            onClick={handleStampClick}
            className={`inline-block select-none cursor-pointer group p-1 ${className}`}
            title="Official Engineering Certification Stamp (Click to Re-Stamp)"
        >
            <div className={`p-2.5 sm:p-3 border-4 ${currentStyle.border} ${currentStyle.bg} tracking-wider font-mono uppercase transform group-hover:scale-105 active:scale-95 transition-transform duration-100`}>
                <div className={`border-2 ${currentStyle.innerBorder} p-2 flex flex-col items-center justify-center text-center`}>
                    
                    {/* Top Star Header */}
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest leading-none mb-1">
                        <span>★</span>
                        <span className="font-bold">INSPECTION PASSED</span>
                        <span>★</span>
                    </div>

                    {/* Central Verified Badge */}
                    <div className={`font-black text-sm sm:text-lg leading-tight tracking-tight my-0.5 border-y-2 ${currentStyle.innerBorder} py-0.5 px-2`}>
                        {text}
                    </div>

                    {/* Subtext info */}
                    <div className="text-[9px] sm:text-[10px] font-bold leading-tight mt-1 opacity-90">
                        {subtext}
                    </div>

                    {/* Ref Certificate Stamp */}
                    <div className="text-[8px] font-black tracking-widest mt-1 opacity-75">
                        CERT_ID: {refCode} {'//'} SERIALIZABLE
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default InkStamp;
