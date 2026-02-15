import { useEffect, useRef } from 'react';

export default function About() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            className="section"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                ref={ref}
                className="reveal"
                style={{
                    maxWidth: '750px',
                    textAlign: 'center',
                }}
            >
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        marginBottom: '28px',
                    }}
                >
                    About <span className="gradient-text">Me</span>
                </h2>

                <p
                    style={{
                        fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '16px',
                    }}
                >
                    Hi, I'm Akshay Shinde, a Final Year Computer Science student at Indian Institute of Information Technology, Gwalior (IIIT Gwalior).
                </p>
                <p
                    style={{
                        fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                    }}
                >
                    I am a passionate Full Stack Developer specializing in the MERN stack, with a strong foundation in Data Structures and Algorithms. I enjoy building scalable web applications, integrating AI-driven features, and exploring cybersecurity concepts. I’m always eager to solve complex problems and create impactful, real-world solutions.
                </p>
            </div>
        </section>
    );
}
