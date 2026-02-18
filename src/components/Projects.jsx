import { useEffect, useRef } from 'react';

// To use real screenshots: place images in public/projects/ and set the image field
// e.g. image: '/projects/medimeet.png'
const projects = [
    {
        title: 'MediMeet',
        description:
            'A comprehensive healthcare platform connecting patients with doctors through seamless appointment booking, video consultations, and medical records management.',
        tech: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
        live: 'https://medimeet-beige.vercel.app/',
        github: 'https://github.com/Akshay01070/MediMeet',
        image: '/projects/medimeet.png',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    },
    {
        title: 'FinBoard',
        description:
            'A real-time financial dashboard for tracking stocks, crypto, and portfolio analytics with interactive charts, watchlists, and market insights.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
        live: 'https://fin-board-dun.vercel.app/',
        github: 'https://github.com/Akshay01070/FinBoard',
        image: '/projects/finboard.png',
        gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    },
    {
        title: 'Doubtify',
        description:
            'A doubt-solving platform where students can ask questions and receive answers from their peers or teachers.',
        tech: ['React', 'Express', 'OpenAI', 'Socket.io'],
        live: '#',
        github: 'https://github.com/Akshay01070/Doubtify',
        image: null,
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    },
    {
        title: 'Trello Clone',
        description:
            'A feature-rich project management tool with drag-and-drop Kanban boards, task assignments, labels, and real-time collaboration capabilities.',
        tech: ['React', 'Node.js', 'MongoDB', 'DnD Kit'],
        live: 'https://trello-vert-zeta.vercel.app/',
        github: 'https://github.com/Akshay01070/Trello',
        image: '/projects/trello.png',
        gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    },
    {
        title: 'LeetFriend',
        description:
            'A social coding companion that tracks LeetCode progress, enables competitive coding with friends, and provides curated problem recommendations.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
        live: '#',
        github: 'https://github.com/Akshay01070/CodeSync',
        image: null,
        gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
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
            className="glow-card"
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '360px',
                minWidth: '360px',
                flexShrink: 0,
                overflow: 'hidden',
            }}
        >
            {/* Preview image / gradient placeholder */}
            <div
                style={{
                    width: '100%',
                    height: '180px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: project.image ? 'var(--bg-card)' : project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                            transition: 'transform 0.4s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    />
                ) : (
                    <span
                        style={{
                            fontSize: '3rem',
                            fontWeight: 900,
                            fontFamily: 'var(--font-heading)',
                            color: 'rgba(255,255,255,0.35)',
                            letterSpacing: '0.1em',
                            userSelect: 'none',
                        }}
                    >
                        {initials}
                    </span>
                )}
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>

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
                        fontSize: '0.92rem',
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
                    {project.live && project.live !== '#' && (
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
                    )}
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
        <section id="projects" className="section-projects" style={{ justifyContent: 'center' }}>
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

                {/* Marquee container */}
                <div
                    style={{
                        overflow: 'hidden',
                        padding: '10px 0',
                        maskImage:
                            'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                    }}
                >
                    <div
                        className="marquee-track"
                        style={{
                            animationDuration: '40s',
                            gap: '24px',
                            alignItems: 'stretch',
                        }}
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
