import { useState, useEffect } from 'react';
import { FiGithub, FiMail, FiLinkedin, FiDownload, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Footer = ({ onOpenCV }) => {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', {
                timeZone: 'Asia/Jakarta',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setCurrentTime(timeString);
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const waText = language === 'id'
        ? "Halo%20Ahmad,%20saya%20melihat%20portfolio%20Anda."
        : "Hello%20Ahmad,%20I%20saw%20your%20portfolio.";

    return (
        <footer className="bg-canvas-card border-t-2 border-ink py-12 relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Strip */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b-2 border-ink gap-6">
                    <div>
                        <div className="font-mono font-black text-base uppercase text-ink flex items-center gap-2 mb-2">
                            <span className="w-3 h-3 bg-blueprint"></span>
                            <span>AHMAD AYUB NU'MAN // SYS_ENG.V2</span>
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-md">
                            {t.tagline}
                        </p>
                    </div>

                    {/* Mechanical WIB Clock Badge */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="p-2.5 bg-canvas border-2 border-ink font-mono text-xs text-ink flex items-center gap-2 shadow-[2px_2px_0px_#18181B]">
                            <FiClock className="text-blueprint" />
                            <span>JAKARTA (WIB):</span>
                            <span className="font-black text-ink bg-safety px-1.5 py-0.2 border border-ink">
                                {currentTime || '--:--:--'} WIB
                            </span>
                        </div>

                        {onOpenCV && (
                            <button
                                type="button"
                                onClick={onOpenCV}
                                className="brutal-btn-safety !py-2 !px-4 text-xs font-mono font-bold"
                            >
                                <FiDownload />
                                <span>{t.downloadCv}</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Social & Channel Plates */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b-2 border-ink/20">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <a 
                            href="https://github.com/ayebe51" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white border-2 border-ink hover:bg-canvas text-ink active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm flex items-center gap-2 font-mono text-xs font-bold"
                        >
                            <FiGithub className="text-sm" />
                            <span>GITHUB</span>
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/ayub-numan-871406155" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white border-2 border-ink hover:bg-canvas text-ink active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm flex items-center gap-2 font-mono text-xs font-bold"
                        >
                            <FiLinkedin className="text-sm text-blueprint" />
                            <span>LINKEDIN</span>
                        </a>

                        <a 
                            href={`https://wa.me/62895349177555?text=${waText}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white border-2 border-ink hover:bg-canvas text-ink active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm flex items-center gap-2 font-mono text-xs font-bold"
                        >
                            <FaWhatsapp className="text-sm text-telemetry" />
                            <span>WHATSAPP</span>
                        </a>

                        <a 
                            href="mailto:ayb.n1994@gmail.com"
                            className="p-2.5 bg-white border-2 border-ink hover:bg-canvas text-ink active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-sm flex items-center gap-2 font-mono text-xs font-bold"
                        >
                            <FiMail className="text-sm" />
                            <span>EMAIL</span>
                        </a>
                    </div>

                    <div className="font-mono text-xs text-ink-muted">
                        SPEC_REVISION: 2026.02 // NO_FRAMEWORK_BLOAT
                    </div>
                </div>

                {/* Bottom Legal & Build Info */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-muted gap-2 text-center sm:text-left">
                    <div>
                        &copy; {new Date().getFullYear()} Ahmad Ayub Nu'man. {t.rights}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-telemetry"></span>
                        <span>{t.builtWith}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
