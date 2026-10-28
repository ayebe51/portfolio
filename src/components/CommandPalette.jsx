import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiTerminal, 
    FiFolder, 
    FiLayers, 
    FiDownload, 
    FiMail, 
    FiGlobe, 
    FiGithub, 
    FiX,
    FiArrowRight
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CommandPalette = ({ isOpen, onClose, onOpenCV, onOpenCLI }) => {
    const { language, setLanguage, isEn } = useLanguage();
    const t = translations[language].commandPalette;
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);

    const items = [
        // Diagnostics CLI
        {
            id: 'action-cli',
            group: t.actions,
            icon: FiTerminal,
            title: 'Launch Kernel Diagnostic Console Drawer (`~`)',
            action: () => {
                onClose();
                onOpenCLI?.();
            }
        },
        // Projects
        {
            id: 'proj-simmaci',
            group: t.projects,
            icon: FiFolder,
            title: 'SIMMACI — Education Governance Platform (270+ Schools)',
            action: () => {
                window.location.hash = '#portfolio';
                onClose();
            }
        },
        {
            id: 'proj-koneksi',
            group: t.projects,
            icon: FiFolder,
            title: 'Koneksi Santri — Pesantren ERP & Flutter Mobile Wallet',
            action: () => {
                window.location.hash = '#portfolio';
                onClose();
            }
        },
        {
            id: 'proj-kiro',
            group: t.projects,
            icon: FiFolder,
            title: 'Kiro ERP / POS — Retail Management & Stock Ledger',
            action: () => {
                window.location.hash = '#portfolio';
                onClose();
            }
        },
        // Architecture
        {
            id: 'arch-pipeline',
            group: t.navigation,
            icon: FiLayers,
            title: 'System Architecture Pipeline & Interactive Nodes',
            action: () => {
                window.location.hash = '#architecture';
                onClose();
            }
        },
        {
            id: 'arch-datasheet',
            group: t.navigation,
            icon: FiTerminal,
            title: 'Technical Stack Datasheet & Runtimes',
            action: () => {
                window.location.hash = '#datasheet';
                onClose();
            }
        },
        {
            id: 'arch-contact',
            group: t.navigation,
            icon: FiMail,
            title: 'Direct Engineering Dispatch & Contact',
            action: () => {
                window.location.hash = '#contact';
                onClose();
            }
        },
        // Actions
        {
            id: 'action-cv',
            group: t.actions,
            icon: FiDownload,
            title: 'Download ATS-Ready Professional CV (PDF / DOCX)',
            action: () => {
                onClose();
                onOpenCV();
            }
        },
        {
            id: 'action-lang',
            group: t.actions,
            icon: FiGlobe,
            title: isEn ? 'Ganti Bahasa ke Bahasa Indonesia' : 'Switch Language to English',
            action: () => {
                setLanguage(isEn ? 'id' : 'en');
                onClose();
            }
        },
        {
            id: 'action-github',
            group: t.actions,
            icon: FiGithub,
            title: 'Open GitHub Profile (@ayebe51)',
            action: () => {
                window.open('https://github.com/ayebe51', '_blank');
                onClose();
            }
        }
    ];

    const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.group.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setSearchQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
            document.body.style.overflow = 'hidden';

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
                } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
                    e.preventDefault();
                    filteredItems[selectedIndex].action();
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, filteredItems, selectedIndex, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-ink/75 backdrop-blur-xs"
                />

                {/* Palette Container */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="relative w-full max-w-2xl bg-canvas-card border-2 border-ink shadow-brutal-xl z-10 overflow-hidden"
                    role="dialog"
                    aria-modal="true"
                    data-lenis-prevent
                >
                    {/* Terminal Prompt Bar */}
                    <div className="bg-canvas p-3 border-b-2 border-ink flex items-center justify-between font-mono text-xs font-black uppercase">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-ink"></span>
                            <span>TERMINAL DISPATCH // QUICK_JUMP.EXE</span>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-1 hover:bg-ink hover:text-white transition-colors"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* Search Input Box */}
                    <div className="p-4 border-b-2 border-ink bg-white flex items-center gap-3">
                        <span className="font-mono font-black text-blueprint text-base select-none">&gt;</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setSelectedIndex(0);
                            }}
                            placeholder={t.placeholder}
                            className="w-full bg-transparent font-mono text-sm sm:text-base text-ink placeholder:text-ink-muted/60 focus:outline-none"
                        />
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-canvas border border-ink text-ink-muted">
                            ESC
                        </span>
                    </div>

                    {/* Results List */}
                    <div className="max-h-80 overflow-y-auto p-2 bg-canvas divide-y divide-ink/10">
                        {filteredItems.length === 0 ? (
                            <div className="p-8 text-center font-mono text-xs text-ink-muted">
                                [ NO MATCHING COMMANDS FOUND ]
                            </div>
                        ) : (
                            filteredItems.map((item, idx) => {
                                const isSelected = idx === selectedIndex;
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={item.action}
                                        onMouseEnter={() => setSelectedIndex(idx)}
                                        className={`w-full text-left p-3 flex items-center justify-between font-mono text-xs transition-colors cursor-pointer ${
                                            isSelected 
                                                ? 'bg-blueprint text-white' 
                                                : 'bg-white text-ink hover:bg-stone-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 truncate">
                                            <Icon className={`text-sm flex-shrink-0 ${isSelected ? 'text-white' : 'text-blueprint'}`} />
                                            <span className="truncate font-semibold">{item.title}</span>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                                            <span className={`text-[10px] uppercase px-1.5 py-0.2 border ${
                                                isSelected ? 'border-white text-white' : 'border-ink/30 text-ink-muted'
                                            }`}>
                                                {item.group}
                                            </span>
                                            <FiArrowRight className={`text-xs ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                        </div>
                                    </button>
                                );
                            })
                        )}
                    </div>

                    {/* Footer Shortcut Instructions */}
                    <div className="p-2.5 bg-white border-t-2 border-ink flex items-center justify-between font-mono text-[11px] text-ink-muted">
                        <span>{t.closeHelp}</span>
                        <span className="font-bold text-ink">SYS_V2.0</span>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CommandPalette;
