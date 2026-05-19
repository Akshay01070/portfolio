import { useEffect, useRef } from 'react';

const rows = [
    [
        { name: 'React',      icon: 'devicon-react-original colored' },
        { name: 'Next.js',    icon: 'devicon-nextjs-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'HTML5',      icon: 'devicon-html5-plain colored' },
        { name: 'CSS3',       icon: 'devicon-css3-plain colored' },
        { name: 'Tailwind',   icon: 'devicon-tailwindcss-original colored' },
        { name: 'Figma',      icon: 'devicon-figma-plain colored' },
    ],
    [
        { name: 'Node.js',    icon: 'devicon-nodejs-plain colored' },
        { name: 'Express',    icon: 'devicon-express-original' },
        { name: 'MongoDB',    icon: 'devicon-mongodb-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'Firebase',   icon: 'devicon-firebase-plain colored' },
        { name: 'MySQL',      icon: 'devicon-mysql-plain colored' },
        { name: 'Redis',      icon: 'devicon-redis-plain colored' },
        { name: 'Prisma',     icon: 'devicon-prisma-original' },
    ],
    [
        { name: 'Docker',     icon: 'devicon-docker-plain colored' },
        { name: 'Git',        icon: 'devicon-git-plain colored' },
        { name: 'GitHub',     icon: 'devicon-github-original' },
        { name: 'VS Code',    icon: 'devicon-vscode-plain colored' },
        { name: 'Linux',      icon: 'devicon-linux-plain' },
        { name: 'Vercel',     icon: 'devicon-vercel-original' },
        { name: 'Vite',       icon: 'devicon-vitejs-plain colored' },
        { name: 'npm',        icon: 'devicon-npm-original-wordmark colored' },
    ],
    [
        { name: 'Python',     icon: 'devicon-python-plain colored' },
        { name: 'C++',        icon: 'devicon-cplusplus-plain colored' },
        { name: 'Java',       icon: 'devicon-java-plain colored' },
        { name: 'Go',         icon: 'devicon-go-original-wordmark colored' },
        { name: 'GraphQL',    icon: 'devicon-graphql-plain colored' },
        { name: 'Postman',    icon: 'devicon-postman-plain colored' },
        { name: 'Canva',      icon: 'devicon-canva-original colored' },
        { name: 'Solidity',   icon: 'devicon-solidity-plain' },
    ],
];

function MarqueeRow({ items, reverse, speed = 30 }) {
    const doubled = [...items, ...items];
    return (
        <div
            style={{
                overflow: 'hidden',
                padding: '6px 0',
                maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
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
                            padding: '10px 20px',
                            margin: '0 6px',
                            background: '#0a0a0a',
                            border: '1px solid rgba(255,255,255,0.07)',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            transition: 'border-color 0.3s ease, background 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,77,41,0.4)';
                            e.currentTarget.style.background = '#111';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                            e.currentTarget.style.background = '#0a0a0a';
                        }}
                    >
                        <i
                            className={tech.icon}
                            style={{
                                fontSize: '1.4rem',
                                filter: tech.icon.includes('colored') ? 'none' : 'invert(1)',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                fontFamily: 'var(--font-body)',
                                color: 'rgba(255,255,255,0.55)',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
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
            style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', justifyContent: 'center' }}
        >
            <div ref={ref} className="reveal">

                <div className="section-label">— Arsenal</div>

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
                    Tech <span style={{ color: '#ff4d29', fontStyle: 'italic' }}>Stack</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {rows.map((row, i) => (
                        <MarqueeRow
                            key={i}
                            items={row}
                            reverse={i % 2 === 1}
                            speed={22 + i * 6}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
