import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink, FiFileText, FiCheck, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { cvDataEn, cvDataId } from '../data/cvData';

const CVDownloadModal = ({ isOpen, onClose }) => {
    const [selectedLang, setSelectedLang] = useState('en');

    useEffect(() => {
        if (isOpen) {
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
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const isEn = selectedLang === 'en';
    const activeData = isEn ? cvDataEn : cvDataId;

    const pdfPath = isEn 
        ? '/cv/Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-EN.pdf' 
        : '/cv/Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-ID.pdf';
    
    const docxPath = isEn 
        ? '/cv/Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-EN.docx' 
        : '/cv/Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-ID.docx';

    const pdfDownloadName = isEn 
        ? 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-EN.pdf' 
        : 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-ID.pdf';

    const docxDownloadName = isEn 
        ? 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-EN.docx' 
        : 'Ahmad-Ayub-Numan-Full-Stack-Software-Engineer-CV-ID.docx';

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-2xl bg-neutral-dark border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cv-modal-title"
                >
                    {/* Background glow effect */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close CV Download Modal"
                        className="absolute top-6 right-6 p-2.5 rounded-full bg-gray-900/80 border border-gray-700/80 text-gray-400 hover:text-white hover:border-gray-500 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                    >
                        <FiX className="text-xl" />
                    </button>

                    {/* Header */}
                    <div className="mb-5 pr-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                            <FiCheck className="text-sm" /> ATS-Friendly Curriculum Vitae
                        </div>
                        <h3 id="cv-modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight">
                            Download Professional CV
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 font-body">
                            Formatted for Applicant Tracking Systems (ATS) and technical hiring managers.
                        </p>
                    </div>

                    {/* Language Selector Tabs */}
                    <div className="flex items-center gap-2 bg-gray-900/90 p-1.5 rounded-2xl border border-gray-800 w-fit mb-6">
                        <button
                            type="button"
                            onClick={() => setSelectedLang('en')}
                            aria-pressed={isEn}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
                                isEn 
                                    ? 'bg-primary text-black shadow-lg font-black' 
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            English (EN)
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedLang('id')}
                            aria-pressed={!isEn}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
                                !isEn 
                                    ? 'bg-primary text-black shadow-lg font-black' 
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Bahasa Indonesia (ID)
                        </button>
                    </div>

                    {/* Candidate Quick Overview */}
                    <div className="bg-gray-900/70 border border-gray-800/80 rounded-2xl p-5 mb-6 space-y-3 font-body text-xs sm:text-sm">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                                <FiBriefcase className="text-base" />
                            </div>
                            <div>
                                <span className="font-bold text-white block">{activeData.personal.title}</span>
                                <span className="text-gray-400">
                                    {activeData.experience[0].role} ({activeData.experience[0].subtitle}) — {activeData.experience[0].company} ({activeData.experience[0].period})
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2 border-t border-gray-800/60">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                                <FiBookOpen className="text-base" />
                            </div>
                            <div>
                                <span className="font-bold text-white block">{activeData.education[0].degree}</span>
                                <span className="text-gray-400">{activeData.education[0].institution} • {activeData.education[0].graduationYear}</span>
                            </div>
                        </div>
                    </div>

                    {/* Download Actions */}
                    <div className="space-y-3 mb-6">
                        {/* Primary: PDF */}
                        <a
                            href={pdfPath}
                            download={pdfDownloadName}
                            className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/15 via-primary/5 to-transparent border border-primary/40 hover:border-primary hover:from-primary/25 active:scale-[0.99] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary text-black flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
                                    <FiFileText />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-heading font-bold text-base sm:text-lg">
                                             {isEn ? 'Download PDF Format (EN)' : 'Unduh Format PDF (ID)'}
                                        </span>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-widest">
                                            Recommended
                                        </span>
                                    </div>
                                    <span className="text-gray-400 text-xs font-body block mt-0.5">
                                        {isEn ? 'Submission-ready vector PDF • 100% ATS searchable text' : 'PDF vektor siap kirim • 100% teks terbaca oleh ATS'}
                                    </span>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                <FiDownload className="text-lg" />
                            </div>
                        </a>

                        {/* Secondary: DOCX */}
                        <a
                            href={docxPath}
                            download={docxDownloadName}
                            className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gray-900/80 border border-gray-800 hover:border-gray-600 hover:bg-gray-800/60 active:scale-[0.99] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
                                    <FiFileText />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-heading font-semibold text-base sm:text-lg">
                                            {isEn ? 'Download Editable Word (DOCX)' : 'Unduh Word Dapat Diedit (DOCX)'}
                                        </span>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-800 text-gray-400 border border-gray-700 uppercase tracking-widest">
                                            Editable
                                        </span>
                                    </div>
                                    <span className="text-gray-400 text-xs font-body block mt-0.5">
                                        {isEn ? 'Microsoft Word format for recruiters requiring .docx' : 'Format Microsoft Word untuk rekruter yang mensyaratkan .docx'}
                                    </span>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-black transition-all">
                                <FiDownload className="text-lg" />
                            </div>
                        </a>
                    </div>

                    {/* Preview Online Button */}
                    <div className="pt-4 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-3">
                        <span className="text-xs text-gray-400 font-body">
                            {isEn ? 'Language:' : 'Bahasa:'} <strong className="text-white">{isEn ? 'English (EN)' : 'Bahasa Indonesia (ID)'}</strong> • Verified against production repositories
                        </span>
                        <a
                            href={pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white font-bold uppercase tracking-wider rounded px-1.5 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            {isEn ? 'Open PDF in Browser' : 'Buka PDF di Browser'} <FiExternalLink />
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CVDownloadModal;
