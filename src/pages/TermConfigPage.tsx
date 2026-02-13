import { useState } from 'react';
import { Info, Plus, Trash2 } from 'lucide-react';

export default function TermConfigPage() {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Term Config.
                    <Info size={18} className="info-icon" />
                </h1>
            </div>

            <div style={{ maxWidth: '700px' }}>
                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>Current Term</h3>
                        <div className="settings-row">
                            <span className="settings-label">Term Name</span>
                            <span className="settings-value">ZEITTRACKING 2024</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Start Date</span>
                            <span className="settings-value">01.01.2024</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">End Date</span>
                            <span className="settings-value">31.12.2024</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Study Days Goal</span>
                            <span className="settings-value">365 days</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Overall Study Goal</span>
                            <span className="settings-value">784h</span>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>Daily Goals</h3>
                        <div className="settings-row">
                            <span className="settings-label">Weekday Goal</span>
                            <span className="settings-value">2h 30m</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Weekend Goal</span>
                            <span className="settings-value">1h 30m</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Holiday Goal</span>
                            <span className="settings-value">3h 00m</span>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: '20px' }}>
                    <div className="settings-section">
                        <h3>Medal Thresholds</h3>
                        <div className="settings-row">
                            <span className="settings-label">🥇 Gold</span>
                            <span className="settings-value">≥ 100% of daily goal</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">🥈 Silver</span>
                            <span className="settings-value">≥ 75% of daily goal</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">🥉 Bronze</span>
                            <span className="settings-value">≥ 50% of daily goal</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="settings-section">
                        <h3>Share Price Formula</h3>
                        <div className="settings-row">
                            <span className="settings-label">Base Value</span>
                            <span className="settings-value">100</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Multiplier</span>
                            <span className="settings-value">Study progress × streak bonus</span>
                        </div>
                        <div className="settings-row">
                            <span className="settings-label">Streak Bonus</span>
                            <span className="settings-value">+0.5% per day</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
