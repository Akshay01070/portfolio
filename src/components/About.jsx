import { useEffect, useRef } from 'react';

const stats = [
    { value: '2026', label: 'BATCH' },
    { value: 'DSA', label: 'CORE\nFOCUS' },
    { value: 'MERN', label: 'PRIMARY\nSTACK' },
    { value: 'CS', label: 'IIIT\nGWALIOR' },
];

export default function About() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
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
            style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            <div ref={ref} className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

                {/* Eyebrow label */}
                <div className="section-label">— About Me</div>

                {/* Main heading */}
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
                    Building the<br />
                    <span style={{ color: '#ff4d29', fontStyle: 'italic' }}>Digital Future</span>
                </h2>

                {/* 2-column layout */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '60px',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: bio */}
                    <div>
                        <p
                            style={{
                                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.9,
                                marginBottom: '20px',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            Hi, I'm{' '}
                            <span style={{ color: '#fff', fontWeight: 700 }}>Akshay Shinde</span>, a
                            Final Year Computer Science student at{' '}
                            <span style={{ color: '#ff4d29', fontWeight: 600 }}>IIIT Gwalior</span>.
                        </p>
                        <p
                            style={{
                                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.9,
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            I'm a passionate Full Stack Developer specialising in the MERN stack,
                            with a strong foundation in Data Structures and Algorithms. I enjoy
                            building scalable web applications, integrating AI-driven features, and
                            exploring cybersecurity concepts.
                        </p>

                        {/* Expertise list */}
                        <div style={{ marginTop: '36px' }}>
                            {[
                                ['FULL STACK', 'EXPRESSION · INNOVATION · ICON'],
                                ['PERFORMANCE', 'MASTERY · SPEED'],
                                ['BATCH', '2026 PASSOUT'],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    style={{
                                        display: 'flex',
                                        gap: '24px',
                                        alignItems: 'baseline',
                                        marginBottom: '10px',
                                        paddingBottom: '10px',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    <span style={{ color: 'rgba(255,255,255,0.35)', minWidth: '90px' }}>{label}</span>
                                    <span style={{ color: label === 'BATCH' ? '#ff4d29' : '#fff', fontWeight: 600 }}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: stat blocks */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2px',
                        }}
                    >
                        {stats.map((s) => (
                            <div
                                key={s.value}
                                style={{
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    padding: '32px 24px',
                                    transition: 'border-color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,77,41,0.35)')}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                            >
                                <div
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '3rem',
                                        lineHeight: 1,
                                        color: '#ff4d29',
                                        marginBottom: '8px',
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: '0.55rem',
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'rgba(255,255,255,0.35)',
                                        lineHeight: 1.6,
                                        whiteSpace: 'pre-line',
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Responsive: stack on mobile */}
            <style>{`
                @media (max-width: 700px) {
                    #about .reveal > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
