import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const { language } = useLanguage();
    const t = translations[language].contact;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const subject = encodeURIComponent(
                language === 'id' 
                    ? `Pertanyaan Portfolio dari ${formData.name}` 
                    : `Portfolio Inquiry from ${formData.name}`
            );
            const greeting = language === 'id' ? 'Halo Ahmad' : 'Hello Ahmad';
            const body = encodeURIComponent(
                `${greeting},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
            );
            window.location.href = `mailto:ayb.n1994@gmail.com?subject=${subject}&body=${body}`;
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 5000);
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
        ? "Halo%20Ahmad,%20saya%20melihat%20portfolio%20Anda%20dan%20ingin%20mendiskusikan%20peluang%20kerja."
        : "Hello%20Ahmad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.";

    return (
        <section id="contact" className="section-padding bg-neutral-dark relative z-10 overflow-hidden">
            <div className="container mx-auto container-padding">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
                    <div>
                        <h2 className="text-[12vw] md:text-[6vw] leading-[0.9] font-heading font-bold text-white uppercase mb-6">
                            {language === 'id' ? (
                                <>Mari<br />Terhubung</>
                            ) : (
                                <>Let's<br />Connect</>
                            )}
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md leading-relaxed font-body">
                            {t.subtitle}
                        </p>

                        {/* Direct Communication CTAs */}
                        <div className="space-y-4 mb-10 max-w-md">
                            <a 
                                href={`https://wa.me/62895349177555?text=${waText}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-5 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-green-500/60 hover:bg-gray-800/80 active:scale-[0.99] transition-all duration-300 group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                                        <FaWhatsapp className="text-2xl" />
                                    </div>
                                    <div>
                                        <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold block">{t.whatsappLabel}</span>
                                        <span className="text-white text-base md:text-lg font-heading font-semibold">+62 895-3491-77555</span>
                                    </div>
                                </div>
                                <FiArrowUpRight className="text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xl" />
                            </a>

                            <a 
                                href="mailto:ayb.n1994@gmail.com" 
                                className="flex items-center justify-between p-5 rounded-2xl bg-gray-900/90 border border-gray-800 hover:border-primary/60 hover:bg-gray-800/80 active:scale-[0.99] transition-all duration-300 group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold block">{t.emailLabel}</span>
                                        <span className="text-white text-base md:text-lg font-heading font-semibold">ayb.n1994@gmail.com</span>
                                    </div>
                                </div>
                                <FiArrowUpRight className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xl" />
                            </a>
                        </div>

                        {/* Location & Availability Note */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 uppercase tracking-widest font-body">
                            <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                                {t.statusBadge}
                            </span>
                            <span>•</span>
                            <span>{t.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <form 
                            onSubmit={handleSubmit} 
                            className="space-y-8"
                        >

                             <div className="space-y-4">
                                <label className="text-gray-400 text-xs uppercase tracking-widest ml-4 font-bold">{t.nameLabel}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t.namePlaceholder}
                                    className="w-full bg-transparent border-b border-gray-700 px-4 py-4 text-xl text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-gray-400 text-xs uppercase tracking-widest ml-4 font-bold">{t.emailInputLabel}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t.emailPlaceholder}
                                    className="w-full bg-transparent border-b border-gray-700 px-4 py-4 text-xl text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-gray-400 text-xs uppercase tracking-widest ml-4 font-bold">{t.messageLabel}</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t.messagePlaceholder}
                                    className="w-full bg-transparent border-b border-gray-700 px-4 py-4 text-xl text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="pt-8">
                                <MagneticButton 
                                    type="submit"
                                    className="w-full md:w-auto px-12 py-5 bg-white text-black font-heading font-bold text-xl uppercase tracking-widest rounded-full hover:bg-primary hover:text-black active:scale-95 transition-all duration-300 flex items-center justify-between gap-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? t.sendingBtn : t.sendBtn}
                                    <FiArrowUpRight />
                                </MagneticButton>
                            </div>

                            {/* Success/Error Messages */}
                            {status === 'success' && (
                                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm">
                                    {t.successMsg}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                                    {t.errorMsg}
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
