import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ChevronRight } from 'lucide-react';
import { useTranslation, useLanguage, type Language } from '../i18n/LanguageContext';

export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const t = useTranslation();
    const { language, setLanguage } = useLanguage();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-owl"><img src="/logo.svg" alt="Yol" className="login-logo-img" /></div>
                <div className="login-brand">Yol</div>
                <div className="login-tagline">{t.login.tagline}</div>
            </div>

            <div className="login-right">
                <div className="login-card">
                    {/* Language switcher on login */}
                    <div className="login-lang-switcher">
                        {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
                            <button
                                key={lang}
                                className={`lang-btn-mini ${language === lang ? 'active' : ''}`}
                                onClick={() => setLanguage(lang)}
                            >
                                {lang === 'uz' ? '🇺🇿' : lang === 'ru' ? '🇷🇺' : '🇬🇧'} {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div className="login-cap">🎓</div>
                    <h2>{t.login.title}</h2>
                    <p className="welcome">{t.login.welcome}</p>

                    <button className="google-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        {t.login.google}
                    </button>

                    <div className="divider">{t.login.or}</div>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>{t.login.email}</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>{t.login.password}</label>
                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <a className="forgot-link">{t.login.forgot}</a>

                        <button type="submit" className="login-btn">
                            {t.login.loginBtn} <ChevronRight size={16} />
                        </button>
                    </form>

                    <div className="divider">{t.login.or}</div>

                    <p style={{ fontSize: '14px', color: '#64748B' }}>{t.login.noAccount}</p>
                    <a className="create-link" onClick={() => navigate('/dashboard')}>
                        {t.login.createAccount} <ChevronRight size={14} />
                    </a>

                    <div className="login-footer">
                        <strong>Yol</strong> · {t.login.footer}
                        <br />© 2025 Yol
                    </div>
                </div>
            </div>
        </div>
    );
}
