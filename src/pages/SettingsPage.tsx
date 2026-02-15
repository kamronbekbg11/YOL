import { useState } from 'react';
import { Info } from 'lucide-react';
import { useTranslation, useLanguage, type Language } from '../i18n/LanguageContext';

export default function SettingsPage() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [sounds, setSounds] = useState(true);
    const t = useTranslation();
    const { language, setLanguage } = useLanguage();

    const languageOptions: { code: Language; label: string }[] = [
        { code: 'en', label: t.settingsPage.langEnglish },
        { code: 'uz', label: t.settingsPage.langUzbek },
        { code: 'ru', label: t.settingsPage.langRussian },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    {t.settingsPage.title}
                    <Info size={18} className="info-icon" />
                </h1>
            </div>

            <div style={{ maxWidth: '600px' }}>
                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>{t.settingsPage.profile}</h3>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.email}</span>
                            <span className="settings-value">lukasinfo@googlemail.com</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.name}</span>
                            <span className="settings-value">Lukas</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.timezone}</span>
                            <span className="settings-value">Europe/Berlin (UTC+1)</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.language}</span>
                            <select
                                className="lang-select"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value as Language)}
                            >
                                {languageOptions.map((opt) => (
                                    <option key={opt.code} value={opt.code}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>{t.settingsPage.preferences}</h3>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.notifications}</span>
                            <div
                                className={`toggle-switch ${notifications ? 'active' : ''}`}
                                onClick={() => setNotifications(!notifications)}
                            />
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.darkMode}</span>
                            <div
                                className={`toggle-switch ${darkMode ? 'active' : ''}`}
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.soundEffects}</span>
                            <div
                                className={`toggle-switch ${sounds ? 'active' : ''}`}
                                onClick={() => setSounds(!sounds)}
                            />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>{t.settingsPage.timerSettings}</h3>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.defaultTimer}</span>
                            <span className="settings-value">{t.settingsPage.stopwatch}</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.pomodoroDuration}</span>
                            <span className="settings-value">25 min</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.breakDuration}</span>
                            <span className="settings-value">5 min</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.longBreak}</span>
                            <span className="settings-value">15 min</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="settings-section">
                        <h3>{t.settingsPage.dataPrivacy}</h3>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.exportData}</span>
                            <button className="filter-btn">{t.settingsPage.exportCSV}</button>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">{t.settingsPage.deleteAccount}</span>
                            <button className="filter-btn" style={{ color: '#EF4444', borderColor: '#FCA5A5' }}>
                                {t.settingsPage.delete}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
