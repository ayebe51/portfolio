import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio_language');
            if (saved === 'id' || saved === 'en') {
                return saved;
            }
        }
        return 'en';
    });

    const setLanguage = (lang) => {
        if (lang === 'en' || lang === 'id') {
            setLanguageState(lang);
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio_language', lang);
                document.documentElement.lang = lang;
            }
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'id' : 'en');
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.lang = language;
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isEn: language === 'en', isId: language === 'id' }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
