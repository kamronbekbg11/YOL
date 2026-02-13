import { useState } from 'react';
import { Info } from 'lucide-react';

export default function SettingsPage() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [sounds, setSounds] = useState(true);

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Settings
                    <Info size={18} className="info-icon" />
                </h1>
            </div>

            <div style={{ maxWidth: '600px' }}>
                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>Profile</h3>
                        <div className="settings-row">
                            <span className="settings-label">Email</span>
                            <span className="settings-value">lukasinfo@googlemail.com</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Name</span>
                            <span className="settings-value">Lukas</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Timezone</span>
                            <span className="settings-value">Europe/Berlin (UTC+1)</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Language</span>
                            <span className="settings-value">English</span>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>Preferences</h3>
                        <div className="settings-row">
                            <span className="settings-label">Notifications</span>
                            <div
                                className={`toggle-switch ${notifications ? 'active' : ''}`}
                                onClick={() => setNotifications(!notifications)}
                            />
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Dark Mode</span>
                            <div
                                className={`toggle-switch ${darkMode ? 'active' : ''}`}
                                onClick={() => setDarkMode(!darkMode)}
                            />
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Sound Effects</span>
                            <div
                                className={`toggle-switch ${sounds ? 'active' : ''}`}
                                onClick={() => setSounds(!sounds)}
                            />
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>Timer Settings</h3>
                        <div className="settings-row">
                            <span className="settings-label">Default Timer Mode</span>
                            <span className="settings-value">Stopwatch</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Pomodoro Duration</span>
                            <span className="settings-value">25 min</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Break Duration</span>
                            <span className="settings-value">5 min</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Long Break Duration</span>
                            <span className="settings-value">15 min</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="settings-section">
                        <h3>Data & Privacy</h3>
                        <div className="settings-row">
                            <span className="settings-label">Export Data</span>
                            <button className="filter-btn">Export CSV</button>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Delete Account</span>
                            <button className="filter-btn" style={{ color: '#EF4444', borderColor: '#FCA5A5' }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
