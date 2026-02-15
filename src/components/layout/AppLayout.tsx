import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Close mobile sidebar on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Close mobile sidebar on window resize above mobile breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="app-layout">
            {/* Mobile overlay */}
            {mobileOpen && (
                <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
            )}

            <Sidebar
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                mobileOpen={mobileOpen}
                onMobileClose={() => setMobileOpen(false)}
            />

            <div className={`main-wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                {/* Mobile header bar */}
                <div className="mobile-topbar">
                    <button
                        className="hamburger-btn"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </button>
                    <div className="mobile-brand">
                        <img src="/logo.png" alt="Yol" className="brand-logo-mini" />
                        <span>Yol</span>
                    </div>
                    <div style={{ width: '32px' }} />
                </div>

                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
