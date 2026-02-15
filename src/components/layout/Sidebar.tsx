import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ListTodo,
    Calendar,
    GraduationCap,
    BookOpen,
    Trophy,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
    mobileOpen?: boolean;
    onMobileClose?: () => void;
}

export default function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
    const location = useLocation();
    const t = useTranslation();

    const navItems = [
        { path: '/dashboard', label: t.sidebar.dashboard, icon: LayoutDashboard },
        { path: '/sessions', label: t.sidebar.sessions, icon: ListTodo },
        { path: '/calendar', label: t.sidebar.calendar, icon: Calendar },
        { path: '/term', label: t.sidebar.term, icon: GraduationCap },
        { path: '/courses', label: t.sidebar.courses, icon: BookOpen },
        { path: '/achievements', label: t.sidebar.achievements, icon: Trophy },
        { path: '/settings', label: t.sidebar.settings, icon: Settings },
    ];

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
            {/* Mobile close button */}
            <button className="sidebar-mobile-close" onClick={onMobileClose}>
                <X size={20} />
            </button>

            <div className="sidebar-brand">
                <div className="brand-icon"><img src="/logo.svg" alt="Yol" className="brand-logo" /></div>
                <span className="brand-name">Yol</span>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <span className="nav-icon">
                                <Icon size={18} />
                            </span>
                            <span className="nav-label">{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <button className="sidebar-collapse-btn" onClick={onToggle}>
                {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>

            <div className="sidebar-footer">
                <LanguageSwitcher />
                <div className="sidebar-user">
                    <div className="sidebar-user-avatar">👤</div>
                    <span className="sidebar-user-info">lukasinfo@googlemail.com</span>
                </div>
                <button className="sidebar-logout">
                    <LogOut size={16} />
                    <span>{t.sidebar.logout}</span>
                </button>
            </div>
        </aside>
    );
}
