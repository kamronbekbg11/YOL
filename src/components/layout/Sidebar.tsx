import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ListTodo,
    Calendar,
    GraduationCap,
    BookOpen,
    Database,
    Trophy,
    Settings,
    Wrench,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/sessions', label: 'Sessions', icon: ListTodo },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/term', label: 'Term', icon: GraduationCap },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/data-room', label: 'Data Room', icon: Database },
    { path: '/achievements', label: 'Achievements', icon: Trophy },
    { path: '/term-config', label: 'Term Config.', icon: Wrench },
    { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
    const location = useLocation();

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-brand">
                <div className="brand-icon">🦉</div>
                <span className="brand-name">Athenify</span>
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
                <div className="sidebar-user">
                    <div className="sidebar-user-avatar">👤</div>
                    <span className="sidebar-user-info">lukasinfo@googlemail.com</span>
                </div>
                <button className="sidebar-logout">
                    <LogOut size={16} />
                    <span>Log out</span>
                </button>
            </div>
        </aside>
    );
}
