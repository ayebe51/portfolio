import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink, FiFileText, FiCheck, FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi';
import { cvDataEn, cvDataId, frontendCvDataEn, frontendCvDataId } from '../data/cvData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CVDownloadModal = ({ isOpen, onClose }) => {
    const { language: currentLang } = useLanguage();
    const [selectedLang, setSelectedLang] = useState(currentLang || 'en');
    const [selectedRole, setSelectedRole] = useState('frontend'); // 'frontend' | 'fullstack'

    useEffect(() => {
        if (isOpen) {
            setSelectedLang(currentLang);
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, currentLang, onClose]);

    if (!isOpen) return null;

    const isEn = selectedLang === 'en';
    const isFrontend = selectedRole === 'frontend';

    const activeData = isFrontend
        ? (isEn ? frontendCvDataEn : frontendCvDataId)
        : (isEn ? cvDataEn : cvDataId);

    const t = translations[selectedLang].cvModal;

    const roleSlug = isFrontend ? 'Frontend-Developer' : 'Full-Stack-Software-Engineer';
    const langSuffix = isEn ? 'EN' : 'ID';

    const pdfPath = `/cv/Ahmad-Ayub-Numan-${roleSlug}-CV-${langSuffix}.pdf`;
    const docxPath = `/cv/Ahmad-Ayub-Numan-${roleSlug}-CV-${langSuffix}.docx`;
    const pdfDownloadName = `Ahmad-Ayub-Numan-${roleSlug}-CV-${langSuffix}.pdf`;
    const docxDownloadName = `Ahmad-Ayub-Numan-${roleSlug}-CV-${langSuffix}.docx`;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-ink/75 backdrop-blur-xs"
                />

                {/* Neo-Brutalist Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-2xl bg-canvas-card border-2 border-ink p-6 sm:p-8 shadow-brutal-xl z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    data-lenis-prevent
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label={t.close || "Close dialog"}
                        className="absolute top-5 right-5 p-2 bg-white hover:bg-ink hover:text-white border-2 border-ink active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#18181B] transition-colors"
                    >
                        <FiX className="text-lg" />
                    </button>

                    {/* Header */}
                    <div className="mb-6 pr-12">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-safety border border-ink text-ink font-mono text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_#18181B]">
                            <FiCheck className="text-sm" /> 
                            <span>{t.badge}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-black text-ink uppercase tracking-tight">
                            {t.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-ink-muted mt-1">
                            {t.subtitle}
                        </p>
                    </div>

                    {/* Role Specialization Selector */}
                    <div className="mb-5">
                        <label className="font-mono text-xs font-bold uppercase text-ink block mb-2">
                            {t.selectRoleLabel || "Target Specialization:"}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setSelectedRole('frontend')}
                                className={`p-3.5 border-2 border-ink text-left transition-all ${
                                    isFrontend
                                        ? 'bg-blueprint text-white shadow-brutal-sm'
                                        : 'bg-white hover:bg-stone-50 text-ink shadow-[2px_2px_0px_#18181B]'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-mono text-xs sm:text-sm font-black uppercase">
                                        {t.roleFrontend || "Front-End Developer"}
                                    </span>
                                    {isFrontend && (
                                        <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span>
                                    )}
                                </div>
                                <p className={`font-sans text-[11px] ${isFrontend ? 'text-white/80' : 'text-ink-muted'}`}>
                                    {t.roleFrontendDesc || "React 19 • Next.js • TypeScript • UI Architecture"}
                                </p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedRole('fullstack')}
                                className={`p-3.5 border-2 border-ink text-left transition-all ${
                                    !isFrontend
                                        ? 'bg-blueprint text-white shadow-brutal-sm'
                                        : 'bg-white hover:bg-stone-50 text-ink shadow-[2px_2px_0px_#18181B]'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-mono text-xs sm:text-sm font-black uppercase">
                                        {t.roleFullstack || "Full-Stack Web Developer"}
                                    </span>
                                    {!isFrontend && (
                                        <span className="w-2 h-2 rounded-full bg-safety animate-pulse"></span>
                                    )}
                                </div>
                                <p className={`font-sans text-[11px] ${!isFrontend ? 'text-white/80' : 'text-ink-muted'}`}>
                                    {t.roleFullstackDesc || "React 19 • Laravel 12 • NestJS • PostgreSQL"}
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-6 pb-4 border-b-2 border-ink">
                        <div className="flex items-center border-2 border-ink bg-canvas p-0.5 shadow-[2px_2px_0px_#18181B]">
                            <button
                                type="button"
                                onClick={() => setSelectedLang('en')}
                                className={`px-3 py-1 font-mono text-xs font-black uppercase transition-colors ${
                                    isEn 
                                        ? 'bg-ink text-white' 
                                        : 'text-ink-muted hover:text-ink'
                                }`}
                            >
                                {translations[selectedLang].cvModal.tabEn}
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedLang('id')}
                                className={`px-3 py-1 font-mono text-xs font-black uppercase transition-colors ${
                                    !isEn 
                                        ? 'bg-ink text-white' 
                                        : 'text-ink-muted hover:text-ink'
                                }`}
                            >
                                {translations[selectedLang].cvModal.tabId}
                            </button>
                        </div>
                        <span className="font-mono text-xs text-ink font-bold">
                            {isFrontend ? 'FRONTEND ARCHITECTURE' : 'DISTRIBUTED SYSTEMS'} {'//'} {isEn ? 'EN' : 'ID'}
                        </span>
                    </div>

                    {/* Quick Candidate Snapshot */}
                    <div className="bg-canvas border-2 border-ink p-4 mb-6 space-y-2.5 font-mono text-xs text-ink">
                        <div className="flex items-start gap-2.5">
                            <FiBriefcase className="text-blueprint shrink-0 mt-0.5 text-sm" />
                            <div>
                                <span className="font-black block uppercase">{activeData.experience[0].role}</span>
                                <span className="text-ink-muted font-sans text-xs">
                                    {activeData.experience[0].company} ({activeData.experience[0].period})
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-2.5 pt-2 border-t border-ink/20">
                            <FiBookOpen className="text-blueprint shrink-0 mt-0.5 text-sm" />
                            <div>
                                <span className="font-black block uppercase">{activeData.education[0].degree}</span>
                                <span className="text-ink-muted font-sans text-xs">
                                    {activeData.education[0].institution} • {activeData.education[0].graduationYear}
                                </span>
                            </div>
                        </div>

                        {activeData.certifications && activeData.certifications.length > 0 && (
                            <div className="flex items-start gap-2.5 pt-2 border-t border-ink/20">
                                <FiAward className="text-telemetry shrink-0 mt-0.5 text-sm" />
                                <div className="flex-1">
                                    <span className="font-black block uppercase">{activeData.certifications[0].name}</span>
                                    <span className="text-ink-muted font-sans text-xs">
                                        {activeData.certifications[0].issuer} • {activeData.certifications[0].issueDate}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Download Actions */}
                    <div className="space-y-3 mb-6">
                        {/* PDF Download Button */}
                        <a
                            href={pdfPath}
                            download={pdfDownloadName}
                            className="brutal-card brutal-card-hover p-4 bg-canvas-card flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blueprint text-white flex items-center justify-center font-bold text-lg border-2 border-ink">
                                    <FiFileText />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-display font-black text-sm sm:text-base text-ink uppercase">
                                            {t.pdfTitle}
                                        </span>
                                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.2 bg-telemetry-light border border-ink text-telemetry-dark">
                                            {t.recommended}
                                        </span>
                                    </div>
                                    <span className="font-sans text-xs text-ink-muted block">
                                        {t.pdfDesc}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 border-2 border-ink bg-white group-hover:bg-safety transition-colors">
                                <FiDownload className="text-ink" />
                            </div>
                        </a>

                        {/* DOCX Download Button */}
                        <a
                            href={docxPath}
                            download={docxDownloadName}
                            className="brutal-card brutal-card-hover p-4 bg-canvas-card flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white text-ink flex items-center justify-center font-bold text-lg border-2 border-ink">
                                    <FiFileText />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-display font-black text-sm sm:text-base text-ink uppercase">
                                            {t.docxTitle}
                                        </span>
                                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.2 bg-canvas border border-ink text-ink-muted">
                                            {t.editable}
                                        </span>
                                    </div>
                                    <span className="font-sans text-xs text-ink-muted block">
                                        {t.docxDesc}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 border-2 border-ink bg-white group-hover:bg-safety transition-colors">
                                <FiDownload className="text-ink" />
                            </div>
                        </a>
                    </div>

                    {/* Footer Verification Note */}
                    <div className="pt-3 border-t-2 border-ink flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-xs text-ink-muted">
                        <span>
                            {t.verified}
                        </span>
                        <a
                            href={pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blueprint font-bold hover:underline flex items-center gap-1"
                        >
                            <span>{t.openPdf}</span>
                            <FiExternalLink />
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CVDownloadModal;
