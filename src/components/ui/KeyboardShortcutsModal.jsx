import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCommand, FiTerminal, FiVolume2, FiGlobe, FiHelpCircle, FiCornerDownLeft } from 'react-icons/fi';
import { useSound } from '../../context/SoundContext';
import { useLanguage } from '../../context/LanguageContext';

export default function KeyboardShortcutsModal({ isOpen, onClose }) {
    const { playClick, playRelay } = useSound();
    const { isEn } = useLanguage();

    useEffect(() => {
        if (!isOpen) return;

        playRelay();

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                playClick();
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, playClick, playRelay]);

    if (!isOpen) return null;

    const shortcuts = [
        {
            category: isEn ? "NAVIGATION & INTERFACES" : "NAVIGASI & ANTARMUKA",
            items: [
                {
                    keys: ['⌘', 'K'],
                    altKeys: ['Ctrl', 'K'],
                    label: isEn ? "Command Palette" : "Palet Perintah",
                    desc: isEn ? "Omni-search projects, skills, documents, and contacts" : "Pencarian cepat proyek, keahlian, dokumen, dan kontak",
                    icon: FiCommand,
                    badge: "GLOBAL"
                },
                {
                    keys: ['~'],
                    altKeys: ['`'],
                    label: isEn ? "Kernel Dev Console" : "Terminal Diagnostik Kernel",
                    desc: isEn ? "Interactive Quake-style terminal with CLI diagnostic tools" : "Terminal interaktif retro dengan diagnostik sistem",
                    icon: FiTerminal,
                    badge: "CLI"
                },
                {
                    keys: ['?'],
                    label: isEn ? "Keyboard Shortcuts HUD" : "Panduan Tombol Pintas",
                    desc: isEn ? "Toggle this technical hotkey operator reference" : "Tampilkan / sembunyikan panduan tombol cepat ini",
                    icon: FiHelpCircle,
                    badge: "INFO"
                }
            ]
        },
        {
            category: isEn ? "OPERATOR TOGGLES" : "PENGATURAN OPERATOR",
            items: [
                {
                    keys: ['M'],
                    label: isEn ? "Mechanical Audio Engine" : "Relay Audio Mekanikal",
                    desc: isEn ? "Toggle Web Audio tactile relays and telemetry sound effects" : "Nyalakan / senyapkan efek suara relay dan klik taktikal",
                    icon: FiVolume2,
                    badge: "AUDIO"
                },
                {
                    keys: ['L'],
                    label: isEn ? "Language Dispatcher" : "Pengalih Bahasa",
                    desc: isEn ? "Instant toggle between English (EN) and Bahasa Indonesia (ID)" : "Beralih instan antara Bahasa Inggris (EN) dan Indonesia (ID)",
                    icon: FiGlobe,
                    badge: "I18N"
                },
                {
                    keys: ['ESC'],
                    label: isEn ? "Dismiss Active Overlay" : "Tutup Tampilan Aktif",
                    desc: isEn ? "Close active modal, drawer, or CAD exploded viewport" : "Menutup modal, laci CLI, atau eksplorasi CAD aktif",
                    icon: FiCornerDownLeft,
                    badge: "SYSTEM"
                }
            ]
        }
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        playClick();
                        onClose();
                    }}
                    className="absolute inset-0 bg-[#0C0D10]/80 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 12 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="relative w-full max-w-2xl bg-canvas border-2 border-ink shadow-brutal-lg z-10 overflow-hidden"
                >
                    {/* Industrial Header Bar */}
                    <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#18181B] text-white border-b-2 border-ink select-none">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 bg-safety rounded-none animate-pulse"></span>
                            <span className="font-mono text-xs font-black tracking-widest uppercase">
                                [ SYS_OPS // KEYBOARD_TELEMETRY_HUD ]
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                playClick();
                                onClose();
                            }}
                            className="font-mono text-xs font-bold px-2 py-1 bg-white text-ink border border-white hover:bg-safety transition-colors flex items-center gap-1 cursor-pointer"
                        >
                            <span>ESC</span>
                            <FiX className="text-sm" />
                        </button>
                    </div>

                    {/* Caliper Framing Corner Accents */}
                    <span className="absolute top-12 left-2 font-mono text-[10px] text-ink/30 select-none pointer-events-none">┌</span>
                    <span className="absolute top-12 right-2 font-mono text-[10px] text-ink/30 select-none pointer-events-none">┐</span>
                    <span className="absolute bottom-10 left-2 font-mono text-[10px] text-ink/30 select-none pointer-events-none">└</span>
                    <span className="absolute bottom-10 right-2 font-mono text-[10px] text-ink/30 select-none pointer-events-none">┘</span>

                    {/* Modal Content */}
                    <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                        {/* Title banner */}
                        <div className="border-l-4 border-blueprint pl-3 py-1">
                            <h3 className="font-display font-bold text-lg text-ink uppercase tracking-tight">
                                {isEn ? "Operator Quick-Dispatch Hotkeys" : "Tombol Pintas Operator Sistem"}
                            </h3>
                            <p className="font-mono text-xs text-ink/70">
                                {isEn 
                                    ? "Hardware-level event dispatcher. Press designated keycaps anywhere on canvas."
                                    : "Dispatcher event tingkat browser. Tekan tombol tertera di mana saja pada layar."}
                            </p>
                        </div>

                        {/* Shortcuts Grid */}
                        <div className="space-y-6">
                            {shortcuts.map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="flex items-center justify-between border-b border-ink/20 pb-1">
                                        <span className="font-mono text-[11px] font-bold text-ink/60 uppercase tracking-widest">
                                            {`// ${section.category}`}
                                        </span>
                                        <span className="font-mono text-[10px] text-ink/40">
                                            0{idx + 1}
                                        </span>
                                    </div>

                                    <div className="grid gap-2.5">
                                        {section.items.map((item, itemIdx) => {
                                            const Icon = item.icon;
                                            return (
                                                <div
                                                    key={itemIdx}
                                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white border border-ink/40 shadow-brutal-sm hover:border-ink transition-colors gap-2"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 flex items-center justify-center bg-canvas-card border border-ink text-ink text-base">
                                                            <Icon />
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-sans font-bold text-sm text-ink">
                                                                    {item.label}
                                                                </span>
                                                                <span className="font-mono text-[9px] font-bold px-1.5 py-0.2 bg-stone-100 text-stone-700 border border-stone-300">
                                                                    {item.badge}
                                                                </span>
                                                            </div>
                                                            <p className="font-mono text-xs text-ink/60">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1.5 self-end sm:self-auto">
                                                        {item.keys.map((k, ki) => (
                                                            <kbd
                                                                key={ki}
                                                                className="font-mono text-xs font-black min-w-[28px] h-7 px-2 flex items-center justify-center bg-[#18181B] text-[#00FF66] border border-ink shadow-[2px_2px_0px_#2563EB]"
                                                            >
                                                                {k}
                                                            </kbd>
                                                        ))}
                                                        {item.altKeys && (
                                                            <>
                                                                <span className="font-mono text-xs text-ink/40">/</span>
                                                                {item.altKeys.map((ak, aki) => (
                                                                    <kbd
                                                                        key={aki}
                                                                        className="font-mono text-xs font-black min-w-[28px] h-7 px-2 flex items-center justify-center bg-white text-ink border border-ink shadow-[2px_2px_0px_#18181B]"
                                                                    >
                                                                        {ak}
                                                                    </kbd>
                                                                ))}
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Industrial Footer Status */}
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2.5 bg-stone-100 border-t-2 border-ink font-mono text-[11px] text-ink/70 gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-telemetry animate-ping"></span>
                            <span>DISPATCH LATENCY &lt; 1MS // RAW EVENT LISTENER</span>
                        </div>
                        <span className="text-[10px] text-ink/50">
                            PRESS <kbd className="px-1 py-0.5 bg-stone-200 border border-stone-400 font-bold">ESC</kbd> TO DISMISS
                        </span>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
