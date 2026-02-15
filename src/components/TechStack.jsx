import { useEffect, useRef } from 'react';

const rows = [
    [
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' },
    ],
    [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'Redis', icon: 'devicon-redis-plain colored' },
        { name: 'Prisma', icon: 'devicon-prisma-original' },
    ],
    [
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'Linux', icon: 'devicon-linux-plain' },
        { name: 'Vercel', icon: 'devicon-vercel-original' },
        { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
        { name: 'npm', icon: 'devicon-npm-original-wordmark colored' },
    ],
    [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Go', icon: 'devicon-go-original-wordmark colored' },
        { name: 'Solidity', icon: 'devicon-solidity-plain' },
        { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
        { name: 'Canva', icon: 'devicon-canva-original colored' },
        { name: 'Postman', icon: 'devicon-postman-plain colored' },
    ],
];

function MarqueeRow({ items, reverse, speed = 30 }) {
    const doubled = [...items, ...items];
    return (
        <div
            style={{
                overflow: 'hidden',
                padding: '10px 0',
                maskImage:
                    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            }}
        >
            <div
                className={`marquee-track${reverse ? ' reverse' : ''}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '12px 24px',
                            margin: '0 8px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '12px',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            transition: 'border-color 0.3s ease, background 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-glow)';
                            e.currentTarget.style.background = 'var(--bg-card-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                            e.currentTarget.style.background = 'var(--bg-card)';
                        }}
                    >
                        <i className={tech.icon} style={{ fontSize: '1.6rem' }} />
                        <span
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: 'var(--text-secondary)',
                            }}
                        >
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TechStack() {
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
        <section
            id="techstack"
            className="section"
            style={{ justifyContent: 'center' }}
        >
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
                    Tech <span className="gradient-text">Stack</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {rows.map((row, i) => (
                        <MarqueeRow
                            key={i}
                            items={row}
                            reverse={i % 2 === 1}
                            speed={25 + i * 5}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
