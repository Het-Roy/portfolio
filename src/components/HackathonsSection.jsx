import React, { useEffect, useRef } from 'react';

const HACKATHONS = [
  {
    title: 'Smart India Hackathon',
    date: 'December 2023',
    outcome: 'National Finalist',
    description: 
      'Built a decentralized credential verification system using Ethereum smart contracts and React. Placed in the top 50 nationally for robust implementation and clean UI design.',
  },
  {
    title: 'Global Hack Week: Web3',
    date: 'August 2023',
    outcome: 'Participation & Honorable Mention',
    description:
      'Developed a seamless web3 onboarding flow for a DApp over a 48-hour sprint. Praised for exceptional user experience and accessibility features.',
  },
  {
    title: 'Local Campus CodeSprint',
    date: 'March 2023',
    outcome: '1st Runner Up',
    description:
      'Created an AI-assisted study platform for college students. Integrated a MERN stack back-end with ChatGPT API for real-time tutoring.',
  }
];

export default function HackathonsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('.fade-in-up');
    if (!nodes || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hackathons" className="section">
      <div ref={containerRef} style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 className="section-title">Hackathons</h2>
        <p className="section-subtitle">
          Intense, time-boxed coding challenges that pushed my limits in collaboration and rapid prototyping.
        </p>

        <div className="timeline">
          {HACKATHONS.map((hackathon) => (
            <div key={hackathon.title} className="timeline-item fade-in-up">
              <div className="timeline-dot" style={{ background: '#a259ff', boxShadow: '0 0 10px #a259ff' }} />
              <article className="timeline-card" style={{ borderLeft: '3px solid #a259ff' }}>
                <h3 className="timeline-title" style={{ color: '#a259ff' }}>{hackathon.title}</h3>
                <div className="timeline-meta">
                  {hackathon.date} · <strong>{hackathon.outcome}</strong>
                </div>
                <p className="timeline-body">{hackathon.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
