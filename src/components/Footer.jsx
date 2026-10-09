import React from 'react';
import { FiGithub, FiMail, FiLinkedin, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = ({ onOpenCV }) => {
    return (
        <footer className="bg-neutral-dark border-t border-gray-800 pt-16 pb-8">
            <div className="container mx-auto container-padding">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-bold font-heading text-primary block mb-2">ayub.dev</span>
                        <p className="text-gray-400 text-sm max-w-xs mb-3">
                            Engineering reliable, scalable web applications with precision.
                        </p>
                        {onOpenCV && (
                            <button
                                onClick={onOpenCV}
                                className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white active:scale-95 transition-all duration-300 font-bold uppercase tracking-wider rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                            >
                                <FiDownload className="text-sm" /> Download ATS CV (PDF / DOCX)
                            </button>
                        )}
                    </div>

                    <div className="flex space-x-4">
                        <a 
                            href="https://github.com/ayebe51" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                        >
                            <FiGithub className="text-lg" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ayub-numan-871406155" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                        >
                            <FiLinkedin className="text-lg" />
                        </a>
                        <a 
                            href="https://wa.me/62895349177555?text=Hello%20Ahmad,%20I%20saw%20your%20portfolio." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Contact"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                        >
                            <FaWhatsapp className="text-lg" />
                        </a>
                        <a 
                            href="mailto:ayb.n1994@gmail.com" 
                            aria-label="Email Contact"
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-dark"
                        >
                            <FiMail className="text-lg" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Ahmad Ayub Nu'man. All rights reserved.</p>
                    <p>Built with React, Vite & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
