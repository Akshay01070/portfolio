import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ─────────────────────────────────────
// Replace these with your actual EmailJS credentials:
// 1. Go to https://www.emailjs.com/ and sign up
// 2. Add an email service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an email template → copy the Template ID
// 4. Go to Account → copy your Public Key
const EMAILJS_SERVICE_ID = 'service_ro9nkzp';
const EMAILJS_TEMPLATE_ID = 'template_2wlz91a';
const EMAILJS_PUBLIC_KEY = 'tbrk_prHpIAB1dih1';
// ────────────────────────────────────────────────────────────────

const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/Akshay01070',
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/akshay-shinde-2ba824221/',
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

/* ── Toast Notification Component ─────────────────────────────── */
function Toast({ message, type, onClose }) {
    const bgColor =
        type === 'success'
            ? 'linear-gradient(135deg, #10b981, #059669)'
            : 'linear-gradient(135deg, #ef4444, #dc2626)';
    const icon = type === 'success' ? '✓' : '✕';

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                borderRadius: '12px',
                background: bgColor,
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                zIndex: 9999,
                animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            <span
                style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                }}
            >
                {icon}
            </span>
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
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [toast, setToast] = useState(null); // { message, type }

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

    // Auto-dismiss toast after 5 seconds
    useEffect(() => {
        if (!toast) return;
        const timer = setTimeout(() => setToast(null), 5000);
        return () => clearTimeout(timer);
    }, [toast]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setToast({ message: 'Message sent successfully!', type: 'success' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setToast({
                message: 'Failed to send message. Please try again.',
                type: 'error',
            });
        } finally {
            setSending(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '14px 18px',
        borderRadius: '10px',
        border: '1px solid var(--border-subtle)',
        background: 'rgba(255,255,255,0.03)',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    };

    return (
        <section id="contact" className="section" style={{ justifyContent: 'center' }}>
            <div ref={ref} className="reveal" style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 800,
                        textAlign: 'center',
                        marginBottom: '40px',
                        color: 'var(--text-primary)',
                    }}
                >
                    <span className="gradient-text">Connect</span>
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="glow-card"
                    style={{
                        padding: '36px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                    }}
                >
                    <div>
                        <label
                            style={{
                                display: 'block',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '8px',
                            }}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                        />
                    </div>

                    <div>
                        <label
                            style={{
                                display: 'block',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '8px',
                            }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                        />
                    </div>

                    <div>
                        <label
                            style={{
                                display: 'block',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '8px',
                            }}
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, resize: 'vertical' }}
                            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                            onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={sending}
                        style={{
                            padding: '14px',
                            borderRadius: '10px',
                            border: 'none',
                            background: sending
                                ? 'rgba(255,255,255,0.1)'
                                : 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
                            color: '#fff',
                            fontSize: '1rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-body)',
                            cursor: sending ? 'not-allowed' : 'pointer',
                            transition: 'opacity 0.3s ease, transform 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            opacity: sending ? 0.7 : 1,
                        }}
                        onMouseEnter={(e) => {
                            if (!sending) {
                                e.currentTarget.style.opacity = '0.9';
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
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                style={{ animation: 'spin 1s linear infinite' }}
                            >
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                        )}
                        {sending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {/* Social icons */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        marginTop: '40px',
                    }}
                >
                    {socials.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.name}
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'color 0.3s ease, transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--accent)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {s.svg}
                        </a>
                    ))}
                </div>
            </div>

            {/* Toast notification */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            {/* Keyframe animations */}
            <style>{`
                @keyframes toastSlideIn {
                    from { transform: translateX(120%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
