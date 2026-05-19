import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['contact', 'projects', 'techstack', 'about'];
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
        <>
            {/* Top-left branding */}
            <div
                style={{
                    position: 'fixed',
                    top: '24px',
                    left: '24px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    pointerEvents: 'none',
                }}
            >
                <div
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#fff',
                        color: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 900,
                        fontSize: '0.65rem',
                        letterSpacing: '0.02em',
                        flexShrink: 0,
                    }}
                >
                    AS
                </div>
                <div style={{ lineHeight: 1.1 }}>
                    <div
                        style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.2em',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: '#fff',
                        }}
                    >
                        AK/SH{' '}
                        <span style={{ opacity: 0.4, fontWeight: 400 }}>from India</span>
                    </div>
                </div>
            </div>

            {/* Centered nav pill */}
            <nav
                style={{
                    position: 'fixed',
                    top: scrolled ? '12px' : '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 16px',
                    background: scrolled
                        ? 'rgba(0,0,0,0.9)'
                        : 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: scrolled
                        ? '0 4px 30px rgba(255, 77, 41, 0.15)'
                        : '0 4px 20px rgba(0,0,0,0.5)',
                }}
            >
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            style={{
                                color: isActive ? '#ff4d29' : 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                fontFamily: 'var(--font-body)',
                                padding: '6px 14px',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                transition: 'color 0.25s ease',
                                borderBottom: isActive
                                    ? '1px solid #ff4d29'
                                    : '1px solid transparent',
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) e.target.style.color = 'rgba(255,255,255,0.6)';
                            }}
                        >
                            {link.label}
                        </a>
                    );
                })}
            </nav>

            {/* Top-right status */}
            <div
                style={{
                    position: 'fixed',
                    top: '24px',
                    right: '24px',
                    zIndex: 1000,
                    textAlign: 'right',
                    lineHeight: 1.5,
                    pointerEvents: 'auto',
                }}
            >
                <div
                    style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.45)',
                        marginBottom: '10px',
                    }}
                >
                    <div>Full-Stack Developer</div>
                    <div>Remote / Global</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                    <a
                        href="https://github.com/Akshay01070"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.45)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = '#ff4d29')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/akshay-shinde-2ba824221/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.45)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = '#ff4d29')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://leetcode.com/u/akshay582004/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.45)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = '#ff4d29')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
                    >
                        LeetCode
                    </a>
                </div>
            </div>
        </>
    );
}
