import { useState, useEffect } from 'react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Programmer'];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayed.length < current.length) {
            // Typing
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length + 1));
            }, 80);
        } else if (!isDeleting && displayed.length === current.length) {
            // Pause at full word
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && displayed.length > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length - 1));
            }, 40);
        } else if (isDeleting && displayed.length === 0) {
            // Move to next role
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="section"
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background glow orbs */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <p
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        marginBottom: '12px',
                        letterSpacing: '0.05em',
                        animation: 'fadeInLeft 0.8s ease forwards',
                    }}
                >
                    👋 Welcome to my portfolio
                </p>

                <h1
                    style={{
                        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        animation: 'fadeInLeft 0.8s ease 0.15s both',
                    }}
                >
                    Hello, I am{' '}
                    <span className="gradient-text">Akshay</span>
                </h1>

                <div
                    style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 400,
                        color: 'var(--text-secondary)',
                        minHeight: '2.2em',
                        animation: 'fadeInLeft 0.8s ease 0.3s both',
                    }}
                >
                    <span>{displayed}</span>
                    <span className="typing-cursor" />
                </div>
            </div>
        </section>
    );
}
