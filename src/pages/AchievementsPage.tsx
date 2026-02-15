import { Info } from 'lucide-react';
import { achievements } from '../data/mockData';
import { useTranslation } from '../i18n/LanguageContext';

export default function AchievementsPage() {
    const t = useTranslation();
    const earned = achievements.filter((a) => a.earned);
    const locked = achievements.filter((a) => !a.earned);

    const tierConfig = {
        gold: { label: t.achievementsPage.gold, class: 'tier-gold', icon: '🥇' },
        silver: { label: t.achievementsPage.silver, class: 'tier-silver', icon: '🥈' },
        bronze: { label: t.achievementsPage.bronze, class: 'tier-bronze', icon: '🥉' },
        locked: { label: t.achievementsPage.lockedLabel, class: 'tier-locked', icon: '🔒' },
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    {t.achievementsPage.title}
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">🏆 {earned.length} {t.achievementsPage.earned}</span>
                    <span className="stat-item">🔒 {locked.length} {t.achievementsPage.locked}</span>
                    <span className="stat-item">
                        🥇 {achievements.filter((a) => a.tier === 'gold' && a.earned).length} {t.achievementsPage.gold}
                    </span>
                    <span className="stat-item">
                        🥈 {achievements.filter((a) => a.tier === 'silver' && a.earned).length} {t.achievementsPage.silver}
                    </span>
                    <span className="stat-item">
                        🥉 {achievements.filter((a) => a.tier === 'bronze' && a.earned).length} {t.achievementsPage.bronze}
                    </span>
                </div>
            </div>

            {/* Medal Summary */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
                <div className="medal-display">
                    <div className="medal-item">
                        <span className="medal-icon">🥇</span>
                        <span>{achievements.filter((a) => a.tier === 'gold' && a.earned).length}</span>
                    </div>
                    <div className="medal-item">
                        <span className="medal-icon">🥈</span>
                        <span>{achievements.filter((a) => a.tier === 'silver' && a.earned).length}</span>
                    </div>
                    <div className="medal-item">
                        <span className="medal-icon">🥉</span>
                        <span>{achievements.filter((a) => a.tier === 'bronze' && a.earned).length}</span>
                    </div>
                </div>
            </div>

            {/* Achievements Grid */}
            <div className="achievements-grid">
                {achievements.map((achievement) => {
                    const tier = tierConfig[achievement.tier];
                    return (
                        <div
                            key={achievement.id}
                            className={`achievement-card ${!achievement.earned ? 'locked' : ''}`}
                        >
                            <div className="achievement-icon">{achievement.icon}</div>
                            <div className="achievement-name">{achievement.name}</div>
                            <div className="achievement-desc">{achievement.description}</div>
                            <div className={`achievement-tier ${tier.class}`}>
                                {tier.icon} {tier.label}
                            </div>
                            {achievement.earned && achievement.earnedDate && (
                                <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '6px' }}>
                                    {t.achievementsPage.earnedOn} {achievement.earnedDate}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
