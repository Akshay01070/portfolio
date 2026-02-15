import { useEffect, useRef } from 'react';

const projects = [
    {
        title: 'MediMeet',
        description:
            'A comprehensive healthcare platform connecting patients with doctors through seamless appointment booking, video consultations, and medical records management.',
        tech: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
        live: '#',
        github: '#',
    },
    {
        title: 'FinBoard',
        description:
            'A real-time financial dashboard for tracking stocks, crypto, and portfolio analytics with interactive charts, watchlists, and market insights.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
        live: '#',
        github: '#',
    },
    {
        title: 'Doubtify',
        description:
            'An AI-powered doubt-solving platform where students can ask questions, get instant explanations, and collaborate with peers in real time.',
        tech: ['React', 'Express', 'OpenAI', 'Socket.io'],
        live: '#',
        github: '#',
    },
    {
        title: 'Trello Clone',
        description:
            'A feature-rich project management tool with drag-and-drop Kanban boards, task assignments, labels, and real-time collaboration capabilities.',
        tech: ['React', 'Node.js', 'MongoDB', 'DnD Kit'],
        live: '#',
        github: '#',
    },
    {
        title: 'LeetFriend',
        description:
            'A social coding companion that tracks LeetCode progress, enables competitive coding with friends, and provides curated problem recommendations.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
        live: '#',
        github: '#',
    },
];

function ProjectCard({ project, index }) {
    const ref = useRef(null);

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

    return (
        <div
            ref={ref}
            className="reveal glow-card"
            style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transitionDelay: `${index * 0.1}s`,
            }}
        >
            {/* Colored accent bar */}
            <div
                style={{
                    height: '4px',
                    width: '50px',
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-blue))',
                }}
            />

            <h3
                style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                }}
            >
                {project.title}
            </h3>

            <p
                style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    flex: 1,
                }}
            >
                {project.description}
            </p>

            {/* Tech badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t) => (
                    <span
                        key={t}
                        style={{
                            fontSize: '0.78rem',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            background: 'rgba(139, 92, 246, 0.12)',
                            color: 'var(--accent-hover)',
                            fontWeight: 500,
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                        }}
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: '8px 20px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.opacity = '0.85';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Live Demo
                </a>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: '8px 20px',
                        borderRadius: '8px',
                        background: 'transparent',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        border: '1px solid var(--border-subtle)',
                        transition: 'border-color 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border-subtle)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    const ref = useRef(null);

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
        <section id="projects" className="section" style={{ justifyContent: 'center' }}>
            <div ref={ref} className="reveal">
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        textAlign: 'center',
                        marginBottom: '48px',
                    }}
                >
                    My <span className="gradient-text">Projects</span>
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
