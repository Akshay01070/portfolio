import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const tickets = [
    { id: '001', title: 'React',    category: 'Frontend',    details: 'Hooks Architecture\nVirtual DOM' },
    { id: '002', title: 'Node.JS',  category: 'Backend',     details: 'Event Loop\nNPM Ecosystem' },
    { id: '003', title: 'MongoDB',  category: 'Database',    details: 'NoSQL Schema\nAtlas Cloud' },
    { id: '004', title: 'Express',  category: 'Server',      details: 'Middleware Design\nRESTful APIs' },
    { id: '005', title: 'Next.JS',  category: 'Framework',   details: 'SSR / SSG\nApp Router' },
    { id: '006', title: 'TypeScript', category: 'Language',  details: 'Type Safety\nGenerics' },
    { id: '007', title: 'Python',   category: 'Automation',  details: 'FastAPI / Django\nData Processing' },
    { id: '008', title: 'C++',      category: 'Development', details: 'Object Oriented\nSTL / Templates' },
    { id: '009', title: 'SQL',      category: 'Database',    details: 'PostgreSQL\nRelations / Joins' },
    { id: '010', title: 'Docker',   category: 'DevOps',      details: 'Containers\nOrchestration' },
    { id: '011', title: 'Git',      category: 'VCS',         details: 'Branching\nCI / CD' },
];

const TICKET_W = 220;
const TICKET_H = 80;

export default function Hero() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const W = section.offsetWidth;
        const H = section.offsetHeight;

        const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

        const engine = Engine.create();
        const world = engine.world;

        // Boundaries — clipped to hero section height
        const ground    = Bodies.rectangle(W / 2, H + 50, W * 2, 100, { isStatic: true, label: 'ground' });
        const wallLeft  = Bodies.rectangle(-50, H / 2, 100, H * 2, { isStatic: true, label: 'wallLeft' });
        const wallRight = Bodies.rectangle(W + 50, H / 2, 100, H * 2, { isStatic: true, label: 'wallRight' });
        // ceiling so tickets don't fly out top
        const ceiling   = Bodies.rectangle(W / 2, -50, W * 2, 100, { isStatic: true, label: 'ceiling' });

        Composite.add(world, [ground, wallLeft, wallRight, ceiling]);

        const domTickets = container.querySelectorAll('.ticket');
        const bodiesMap = new Map();

        domTickets.forEach((ticket, index) => {
            const startX = W / 2 + (Math.random() - 0.5) * (W * 0.7);
            const startY = -TICKET_H * (index + 1) - Math.random() * 100;
            const rotation = (Math.random() - 0.5) * 0.4;

            const body = Bodies.rectangle(startX, startY, TICKET_W, TICKET_H, {
                restitution: 0.25,
                friction: 0.45,
                density: 0.0012,
                frictionAir: 0.01,
            });

            Matter.Body.setAngle(body, rotation);
            Composite.add(world, body);
            bodiesMap.set(ticket, body);
        });

        // Mouse interaction — relative to section
        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } },
        });
        Composite.add(world, mouseConstraint);

        // Sync DOM positions
        Events.on(engine, 'afterUpdate', () => {
            bodiesMap.forEach((body, ticket) => {
                const { x, y } = body.position;
                const angle = body.angle;
                ticket.style.left  = `${x - TICKET_W / 2}px`;
                ticket.style.top   = `${y - TICKET_H / 2}px`;
                ticket.style.transform = `rotate(${angle}rad)`;
            });
        });

        const runner = Runner.create();
        Runner.run(runner, engine);

        // Handle resize
        const handleResize = () => {
            const nW = section.offsetWidth;
            const nH = section.offsetHeight;
            Matter.Body.setPosition(ground,    { x: nW / 2, y: nH + 50 });
            Matter.Body.setPosition(wallLeft,  { x: -50, y: nH / 2 });
            Matter.Body.setPosition(wallRight, { x: nW + 50, y: nH / 2 });
            Matter.Body.setPosition(ceiling,   { x: nW / 2, y: -50 });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            Runner.stop(runner);
            Engine.clear(engine);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            id="home"
            className="section-hero"
            ref={sectionRef}
            style={{ background: '#000' }}
        >
            {/* Orange radial glow */}
            <div
                aria-hidden
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '400px',
                    background: '#ff4d29',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.18,
                    animation: 'glowPulse 4s ease-in-out infinite',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            {/* Hero text — centered, above tickets */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 20,
                    textAlign: 'center',
                    pointerEvents: 'auto',
                }}
            >
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(4.5rem, 13vw, 10rem)',
                        lineHeight: 0.85,
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        marginBottom: '0.15em',
                        color: '#fff',
                        animation: 'fadeInUp 0.7s ease both',
                    }}
                >
                    Akshay
                </h1>
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(4.5rem, 13vw, 10rem)',
                        lineHeight: 0.85,
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5em',
                        color: '#ff4d29',
                        fontStyle: 'italic',
                        animation: 'fadeInUp 0.7s ease 0.1s both',
                    }}
                >
                    Shinde
                </h1>

                <p
                    style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        color: '#ff4d29',
                        fontWeight: 700,
                        marginBottom: '2.5rem',
                        animation: 'fadeInUp 0.7s ease 0.2s both',
                    }}
                >
                    Software Developer / Architect
                </p>

                <a
                    href="/Akshay Shinde, IIIT Gwalior.pdf"
                    download
                    style={{
                        display: 'inline-block',
                        padding: '18px 48px',
                        background: '#ff4d29',
                        color: '#fff',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: '6px 6px 0 rgba(255,255,255,0.1)',
                        animation: 'fadeInUp 0.7s ease 0.3s both',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.04)';
                        e.currentTarget.style.boxShadow = '8px 8px 0 rgba(255,255,255,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '6px 6px 0 rgba(255,255,255,0.1)';
                    }}
                >
                    Download Resume
                </a>
            </div>

            {/* Physics ticket container — absolutely fills the section */}
            <div
                ref={containerRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    zIndex: 10,
                    pointerEvents: 'none',
                }}
            >
                {tickets.map((t) => (
                    <div key={t.id} className="ticket" style={{ pointerEvents: 'auto' }}>
                        <div className="ticket-left-section">
                            <div className="ticket-header-small">#{t.id}</div>
                            <div className="ticket-title-small">{t.title}</div>
                        </div>
                        <div className="ticket-content-section">
                            <div className="ticket-category-small">{t.category}</div>
                            <div className="ticket-details-small">
                                {t.details.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < t.details.split('\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="ticket-barcode-vertical" />
                    </div>
                ))}
            </div>


        </section>
    );
}
