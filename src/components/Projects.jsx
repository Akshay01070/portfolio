import { useEffect, useRef } from 'react';

const projects = [
    {
        id: '#001',
        title: 'MediMeet',
        description:
            'A comprehensive healthcare platform connecting patients with doctors through seamless appointment booking, video consultations, and medical records management.',
        tech: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
        live: 'https://medimeet-beige.vercel.app/',
        github: 'https://github.com/Akshay01070/MediMeet',
        image: '/projects/medimeet.png',
        category: 'HEALTHCARE',
    },
    {
        id: '#002',
        title: 'FinBoard',
        description:
            'A real-time financial dashboard for tracking stocks, crypto, and portfolio analytics with interactive charts, watchlists, and market insights.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
        live: 'https://fin-board-dun.vercel.app/',
        github: 'https://github.com/Akshay01070/FinBoard',
        image: '/projects/finboard.png',
        category: 'FINTECH',
    },
    {
        id: '#003',
        title: 'Doubtify',
        description:
            'A doubt-solving platform where students can ask questions and receive answers from their peers or teachers, powered by AI assistance.',
        tech: ['React', 'Express', 'OpenAI', 'Socket.io'],
        live: null,
        github: 'https://github.com/Akshay01070/Doubtify',
        image: null,
        category: 'EDTECH',
    },
    {
        id: '#004',
        title: 'TaskFlow',
        description:
            'A feature-rich project management tool with drag-and-drop Kanban boards, task assignments, labels, and real-time collaboration capabilities.',
        tech: ['React', 'Node.js', 'MongoDB', 'DnD Kit'],
        live: 'https://trello-vert-zeta.vercel.app/',
        github: 'https://github.com/Akshay01070/Trello',
        image: '/projects/trello1.png',
        category: 'PRODUCTIVITY',
    },
    {
        id: '#005',
        title: 'LeetFriend',
        description:
            'A social coding companion that tracks LeetCode progress, enables competitive coding with friends, and provides curated problem recommendations.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
        live: null,
        github: 'https://github.com/Akshay01070/CodeSync',
        image: null,
        category: 'DEVELOPER TOOLS',
    },
];

function ProjectCard({ project }) {
    const initials = project.title
        .split(' ')
        .map((w) => w[0])
        .join('')
        .toUpperCase();

    return (
        <div
            style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.07)',
                width: '320px',
                minWidth: '320px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,77,41,0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Header bar */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 16px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: '#050505',
                }}
            >
                <span
                    style={{
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        fontFamily: 'var(--font-body)',
                    }}
                >
                    {project.id}
                </span>
                <span
                    style={{
                        fontSize: '0.5rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#ff4d29',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                    }}
                >
                    {project.category}
                </span>
            </div>

            {/* Image / placeholder */}
            <div
                style={{
                    width: '100%',
                    height: '160px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.85,
                            transition: 'transform 0.4s ease, opacity 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.opacity = '0.85';
                        }}
                    />
                ) : (
                    <span
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '3.5rem',
                            color: 'rgba(255,77,41,0.15)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {initials}
                    </span>
                )}
            </div>

            {/* Content */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <h3
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        color: '#fff',
                        lineHeight: 1,
                    }}
                >
                    {project.title}
                </h3>

                <p
                    style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.7,
                        flex: 1,
                        fontFamily: 'var(--font-body)',
                    }}
                >
                    {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: '0.58rem',
                                padding: '3px 10px',
                                background: 'rgba(255,77,41,0.08)',
                                color: '#ff4d29',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontFamily: 'var(--font-body)',
                                border: '1px solid rgba(255,77,41,0.15)',
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '8px 18px',
                                background: '#ff4d29',
                                color: '#fff',
                                fontSize: '0.62rem',
                                fontWeight: 700,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-body)',
                                transition: 'opacity 0.2s ease',
                                flex: 1,
                                textAlign: 'center',
                            }}
                            onMouseEnter={(e) => (e.target.style.opacity = '0.85')}
                            onMouseLeave={(e) => (e.target.style.opacity = '1')}
                        >
                            Live Demo
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '8px 18px',
                            background: 'transparent',
                            color: 'rgba(255,255,255,0.65)',
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-body)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            transition: 'border-color 0.2s ease, color 0.2s ease',
                            flex: 1,
                            textAlign: 'center',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,77,41,0.4)';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                            e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                        }}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const doubled = [...projects, ...projects];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="projects"
            className="section"
            style={{
                background: '#000',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                justifyContent: 'center',
                padding: '100px 3%',
            }}
        >
            <div ref={ref} className="reveal">
                <div style={{ padding: '0 5%' }}>
                    <div className="section-label">— Selected Work</div>
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
                        My <span style={{ color: '#ff4d29', fontStyle: 'italic' }}>Projects</span>
                    </h2>
                </div>

                {/* Scrolling marquee */}
                <div
                    style={{
                        overflow: 'hidden',
                        padding: '10px 0',
                        maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
                    }}
                >
                    <div
                        className="marquee-track"
                        style={{ animationDuration: '50s', gap: '16px', alignItems: 'stretch' }}
                    >
                        {doubled.map((project, i) => (
                            <ProjectCard key={`${project.title}-${i}`} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
