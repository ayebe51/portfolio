import { useState } from 'react';
import { FiMail, FiCheck, FiArrowRight, FiCopy, FiRadio, FiCheckCircle, FiAlertOctagon } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [isCopied, setIsCopied] = useState(false);
    const { language } = useLanguage();
    const t = translations[language].contact;
    const { playKeystroke, playRelay, playPing, playClick } = useSound();

    const handleCopyEmail = () => {
        playClick();
        navigator.clipboard.writeText('ayb.n1994@gmail.com');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    const handleTypingKey = (e) => {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            playKeystroke();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        playRelay();
        setStatus('sending');

        try {
            const subject = encodeURIComponent(
                language === 'id' 
                    ? `Pertanyaan Sistem/Portfolio dari ${formData.name}` 
                    : `System Engineering Inquiry from ${formData.name}`
            );
            const greeting = language === 'id' ? 'Halo Ahmad' : 'Hello Ahmad';
            const body = encodeURIComponent(
                `${greeting},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Technical Dispatch`
            );
            
            setTimeout(() => {
                playPing();
                window.location.href = `mailto:ayb.n1994@gmail.com?subject=${subject}&body=${body}`;
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 7000);
            }, 600);
        } catch (error) {
            console.error('Contact form submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const waText = language === 'id'
        ? "Halo%20Ahmad,%20saya%20tertarik%20dengan%20pengalaman%20rekayasa%20sistem%20dan%20frontend%20Anda."
        : "Hello%20Ahmad,%20I%20am%20interested%20in%20your%20system%20engineering%20and%20frontend%20experience.";

    return (
        <section id="contact" className="py-16 sm:py-24 bg-canvas border-t-2 border-ink relative overflow-x-clip">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b-2 border-ink">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blueprint text-white font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_#18181B]">
                            <FiMail className="text-xs" />
                            <span>[ {t.badge} ]</span>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                            {t.title}
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 font-mono text-xs text-ink font-bold bg-white px-3 py-1.5 border-2 border-ink shadow-brutal-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-telemetry animate-ping"></span>
                        <span>TELEGRAPHIC DISPATCH // NO BROKERS</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                    
                    {/* Left Communication Channels (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* 1-Click Copy Email Button */}
                        <div className="brutal-card bg-canvas-card p-5 sm:p-6 space-y-3">
                            <span className="font-mono text-xs font-black uppercase text-ink-muted block">
                                Direct Email Dispatch
                            </span>
                            <div className="font-mono font-bold text-base sm:text-lg text-ink">
                                ayb.n1994@gmail.com
                            </div>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className={`brutal-btn w-full text-xs font-mono font-bold transition-all ${
                                    isCopied 
                                        ? 'bg-telemetry text-white border-2 border-ink' 
                                        : 'bg-white hover:bg-stone-50 text-ink'
                                }`}
                            >
                                {isCopied ? (
                                    <>
                                        <FiCheck className="text-sm" />
                                        <span>[ BUFFER STORED // 64-BIT CLIPBOARD ]</span>
                                    </>
                                ) : (
                                    <>
                                        <FiCopy className="text-sm" />
                                        <span>{t.copyEmail}</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* WhatsApp Direct Chat */}
                        <a
                            href={`https://wa.me/62895349177555?text=${waText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={playClick}
                            className="brutal-card brutal-card-hover bg-canvas-card p-5 sm:p-6 flex items-center justify-between group cursor-pointer block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-telemetry-light border-2 border-ink flex items-center justify-center text-telemetry-dark text-2xl shadow-[2px_2px_0px_#18181B]">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <span className="font-mono text-xs font-bold text-ink-muted uppercase block">
                                        {t.whatsappLabel}
                                    </span>
                                    <span className="font-mono font-black text-base sm:text-lg text-ink group-hover:text-telemetry transition-colors">
                                        +62 895-3491-77555
                                    </span>
                                </div>
                            </div>
                            <FiArrowRight className="text-xl text-ink group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Status Stamp */}
                        <div className="p-4 bg-canvas border-2 border-ink font-mono text-xs space-y-1.5">
                            <div className="flex items-center gap-2 text-ink font-bold">
                                <span className="w-2 h-2 rounded-full bg-telemetry animate-ping"></span>
                                <span>{t.statusBadge}</span>
                            </div>
                            <div className="text-ink-muted">
                                {t.location}
                            </div>
                        </div>

                    </div>

                    {/* Right Form Dispatch Box (7 Cols) with Teletypewriter Feedback */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={handleSubmit}
                            className="brutal-card bg-canvas-card p-6 sm:p-8 space-y-5 shadow-brutal-lg"
                        >
                            <div className="font-mono text-xs font-black uppercase pb-3 border-b-2 border-ink flex items-center justify-between text-ink">
                                <span className="flex items-center gap-1.5">
                                    <FiRadio className="text-blueprint animate-pulse" />
                                    <span>TELETYPE TRANSMISSION FORM // INQUIRY</span>
                                </span>
                                <span className="text-[10px] bg-ink text-white px-1.5 py-0.5 border border-ink font-mono">
                                    ENCRYPTED
                                </span>
                            </div>

                            <div className="space-y-1.5">
                                <label className="font-mono text-xs font-bold uppercase text-ink block">
                                    {t.nameLabel} *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onKeyDown={handleTypingKey}
                                    placeholder={t.namePlaceholder}
                                    required
                                    className="w-full bg-white border-2 border-ink p-3 font-mono text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-blueprint"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="font-mono text-xs font-bold uppercase text-ink block">
                                    {t.emailInputLabel} *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onKeyDown={handleTypingKey}
                                    placeholder={t.emailPlaceholder}
                                    required
                                    className="w-full bg-white border-2 border-ink p-3 font-mono text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-blueprint"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="font-mono text-xs font-bold uppercase text-ink block">
                                    {t.messageLabel} *
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onKeyDown={handleTypingKey}
                                    placeholder={t.messagePlaceholder}
                                    required
                                    className="w-full bg-white border-2 border-ink p-3 font-mono text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-blueprint resize-none"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`brutal-btn w-full sm:w-auto text-xs sm:text-sm font-mono font-black ${
                                        status === 'sending' 
                                            ? 'bg-safety text-ink animate-pulse cursor-wait' 
                                            : 'brutal-btn-primary'
                                    }`}
                                >
                                    <span>{status === 'sending' ? 'TRANSMITTING DISPATCH...' : t.sendBtn}</span>
                                    <FiArrowRight />
                                </button>
                            </div>

                            {status === 'sending' && (
                                <div className="p-3 bg-safety-light border-2 border-ink font-mono text-xs text-ink font-bold flex items-center gap-2 animate-pulse">
                                    <span className="w-2 h-2 rounded-full bg-ink animate-ping"></span>
                                    <span>[ TRANSMITTING DISPATCH PACKETS VIA CH_01 // ENCRYPTED ]</span>
                                </div>
                            )}

                            {status === 'success' && (
                                <div className="p-4 bg-telemetry-light border-2 border-ink font-mono text-xs text-telemetry-dark font-bold space-y-1">
                                    <div className="flex items-center gap-1.5 text-sm font-black">
                                        <FiCheckCircle className="text-base" />
                                        <span>[ DISPATCH TRANSMITTED // ACK 200 OK // 0 PACKETS LOST ]</span>
                                    </div>
                                    <div className="text-[11px] font-sans font-semibold text-ink">
                                        {t.successMsg} Handshake dispatched to ayb.n1994@gmail.com. Response expected &lt; 24h.
                                    </div>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-3 bg-red-100 border-2 border-ink font-mono text-xs text-red-700 font-bold flex items-center gap-2">
                                    <FiAlertOctagon />
                                    <span>{t.errorMsg}</span>
                                </div>
                            )}
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
