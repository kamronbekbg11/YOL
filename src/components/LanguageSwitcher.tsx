import { useLanguage, type Language } from '../i18n/LanguageContext';

const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: 'UZ', flag: '🇺🇿' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="lang-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                    onClick={() => setLanguage(lang.code)}
                    title={lang.label}
                >
                    <span className="lang-flag">{lang.flag}</span>
                    <span className="lang-code">{lang.label}</span>
                </button>
            ))}
        </div>
    );
}
