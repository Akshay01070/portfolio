import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll-spy
            const sections = ['contact', 'projects', 'about'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(id);
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: scrolled ? '12px' : '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: scrolled ? '8px 20px' : '12px 32px',
                background: 'rgba(18, 18, 26, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '999px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: scrolled
                    ? '0 4px 30px rgba(139, 92, 246, 0.15)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
            }}
        >
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    style={{
                        color:
                            activeSection === link.href.slice(1)
                                ? '#a78bfa'
                                : 'rgba(240,240,245,0.7)',
                        textDecoration: 'none',
                        fontSize: scrolled ? '0.85rem' : '0.95rem',
                        fontWeight: 500,
                        fontFamily: "var(--font-heading)",
                        padding: '6px 16px',
                        borderRadius: '999px',
                        transition: 'all 0.3s ease',
                        background:
                            activeSection === link.href.slice(1)
                                ? 'rgba(139,92,246,0.12)'
                                : 'transparent',
                        letterSpacing: '0.02em',
                    }}
                    onMouseEnter={(e) => {
                        if (activeSection !== link.href.slice(1)) {
                            e.target.style.color = '#f0f0f5';
                            e.target.style.background = 'rgba(255,255,255,0.06)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (activeSection !== link.href.slice(1)) {
                            e.target.style.color = 'rgba(240,240,245,0.7)';
                            e.target.style.background = 'transparent';
                        }
                    }}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
}
