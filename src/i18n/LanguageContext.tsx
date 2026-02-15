import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en, type TranslationKeys } from './en';
import { uz } from './uz';
import { ru } from './ru';

export type Language = 'en' | 'uz' | 'ru';

const translations: Record<Language, TranslationKeys> = { en, uz, ru };

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => { },
    t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('app-language');
        return (saved as Language) || 'en';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('app-language', lang);
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

export function useTranslation() {
    const { t } = useContext(LanguageContext);
    return t;
}
