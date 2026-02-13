import { Info } from 'lucide-react';
import { achievements } from '../data/mockData';

export default function AchievementsPage() {
    const earned = achievements.filter((a) => a.earned);
    const locked = achievements.filter((a) => !a.earned);

    const tierConfig = {
        gold: { label: 'Gold', class: 'tier-gold', icon: '🥇' },
        silver: { label: 'Silver', class: 'tier-silver', icon: '🥈' },
        bronze: { label: 'Bronze', class: 'tier-bronze', icon: '🥉' },
        locked: { label: 'Locked', class: 'tier-locked', icon: '🔒' },
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">
                    Achievements
                    <Info size={18} className="info-icon" />
                </h1>
                <div className="page-stats">
                    <span className="stat-item">🏆 {earned.length} earned</span>
                    <span className="stat-item">🔒 {locked.length} locked</span>
                    <span className="stat-item">
                        🥇 {achievements.filter((a) => a.tier === 'gold' && a.earned).length} Gold
                    </span>
                    <span className="stat-item">
                        🥈 {achievements.filter((a) => a.tier === 'silver' && a.earned).length} Silver
                    </span>
                    <span className="stat-item">
                        🥉 {achievements.filter((a) => a.tier === 'bronze' && a.earned).length} Bronze
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
                                    Earned {achievement.earnedDate}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
