import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_ro9nkzp';
const EMAILJS_TEMPLATE_ID = 'template_2wlz91a';
const EMAILJS_PUBLIC_KEY  = 'tbrk_prHpIAB1dih1';

const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/Akshay01070',
        label: 'GH',
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/akshay-shinde-2ba824221/',
        label: 'LI',
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'LeetCode',
        href: 'https://leetcode.com/u/akshay582004/',
        label: 'LC',
        svg: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
        ),
    },
];

function Toast({ message, type, onClose }) {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 20px',
                background: type === 'success' ? '#ff4d29' : '#333',
                color: '#fff',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                zIndex: 9999,
                animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            {message}
            <button
                onClick={onClose}
                style={{
                    marginLeft: '8px',
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    padding: '0 4px',
                }}
            >
                ×
            </button>
        </div>
    );
}

export default function Contact() {
    const ref = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 5000);
        return () => clearTimeout(t);
    }, [toast]);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                { from_name: formData.name, from_email: formData.email, message: formData.message },
                EMAILJS_PUBLIC_KEY
            );
            setToast({ message: 'Message sent successfully!', type: 'success' });
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setToast({ message: 'Failed to send. Please try again.', type: 'error' });
        } finally {
            setSending(false);
        }
    };

    const fieldStyle = {
        width: '100%',
        padding: '14px 16px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#fff',
        fontSize: '0.88rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        borderRadius: 0,
    };
    const labelStyle = {
        display: 'block',
        fontSize: '0.58rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.35)',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        marginBottom: '8px',
    };

    return (
        <section
            id="contact"
            className="section"
            style={{
                background: '#000',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                justifyContent: 'center',
            }}
        >
            <div ref={ref} className="reveal" style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>

                <div className="section-label">— Get In Touch</div>

                <h2
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        lineHeight: 0.88,
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                        marginBottom: '60px',
                        color: '#fff',
                    }}
                >
                    Let's <span style={{ color: '#ff4d29', fontStyle: 'italic' }}>Connect</span>
                </h2>

                {/* 2-column: form + info */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.6fr 1fr',
                        gap: '40px',
                        alignItems: 'start',
                    }}
                >
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            background: '#0a0a0a',
                            border: '1px solid rgba(255,255,255,0.07)',
                            padding: '36px',
                        }}
                    >
                        <div>
                            <label style={labelStyle}>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={fieldStyle}
                                onFocus={(e) => (e.target.style.borderColor = '#ff4d29')}
                                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={fieldStyle}
                                onFocus={(e) => (e.target.style.borderColor = '#ff4d29')}
                                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ ...fieldStyle, resize: 'vertical' }}
                                onFocus={(e) => (e.target.style.borderColor = '#ff4d29')}
                                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={sending}
                            style={{
                                padding: '16px',
                                background: sending ? 'rgba(255,255,255,0.08)' : '#ff4d29',
                                color: '#fff',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                fontFamily: 'var(--font-body)',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                border: 'none',
                                cursor: sending ? 'not-allowed' : 'pointer',
                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                opacity: sending ? 0.6 : 1,
                            }}
                            onMouseEnter={(e) => {
                                if (!sending) {
                                    e.currentTarget.style.opacity = '0.88';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!sending) {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {sending && (
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                    style={{ animation: 'spin 1s linear infinite' }}
                                >
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                            )}
                            {sending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {/* Right info panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div
                            style={{
                                background: '#0a0a0a',
                                border: '1px solid rgba(255,255,255,0.07)',
                                padding: '28px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '0.58rem',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.35)',
                                    marginBottom: '12px',
                                }}
                            >
                                Status
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span
                                    style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: '#ff4d29',
                                        display: 'inline-block',
                                        boxShadow: '0 0 8px #ff4d29',
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: '0.72rem',
                                        fontWeight: 600,
                                        color: '#fff',
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Open to Opportunities
                                </span>
                            </div>
                        </div>

                        <div
                            style={{
                                background: '#0a0a0a',
                                border: '1px solid rgba(255,255,255,0.07)',
                                padding: '28px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '0.58rem',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.35)',
                                    marginBottom: '16px',
                                }}
                            >
                                Connect
                            </div>
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: 'rgba(255,255,255,0.5)',
                                        textDecoration: 'none',
                                        fontSize: '0.72rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        padding: '10px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ff4d29')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                                >
                                    {s.svg}
                                    {s.name}
                                </a>
                            ))}
                        </div>

                        {/* Barcode decoration */}
                        <div
                            style={{
                                height: '24px',
                                background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 4px)',
                                opacity: 0.6,
                            }}
                        />
                    </div>
                </div>
            </div>

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            <style>{`
                @keyframes toastSlideIn {
                    from { transform: translateX(120%); opacity: 0; }
                    to   { transform: translateX(0); opacity: 1; }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                input::placeholder, textarea::placeholder {
                    color: rgba(255,255,255,0.2);
                }
                @media (max-width: 700px) {
                    #contact .reveal > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
