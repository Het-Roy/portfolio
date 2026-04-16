import React, { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
  {
    title: 'Lead Frontend Engineer @ Tech Innovators Club',
    context: 'University Leadership Role',
    description: 
      'Mentored a team of 15+ student developers, organized weekly hands-on workshops on React and Modern JavaScript, and oversaw the development of the official university chapter portal.',
  },
  {
    title: 'Google Code to Learn Contest - Finalist',
    context: 'Algorithms & Problem Solving',
    description:
      'Recognized for exceptional competitive programming skills and clean algorithmic approach during an intense coding marathon. Solved 12/15 complex dynamic programming challenges.',
  },
  {
    title: 'Highest Distinction in Computer Science',
    context: 'Academic Excellence',
    description:
      'Awarded the academic medallion for topping the cohort in Advanced Data Structures and Web Architecture courses.'
  }
];

export default function AchievementsSection() {
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
    <section id="achievements" className="section">
      <div ref={containerRef} style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 className="section-title">Achievements & Leadership</h2>
        <p className="section-subtitle">
          Recognitions, extra-curriculars, and leadership roles that have shaped my technical and collaborative journey.
        </p>

        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {ACHIEVEMENTS.map((item) => (
            <article key={item.title} className="fade-in-up" style={{
              background: '#0a0a0a', border: '1px solid #333', borderRadius: '16px', padding: '24px'
            }}>
              <h3 style={{ fontSize: '20px', color: '#ffbd2e', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <div style={{ fontSize: '13px', color: '#888', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.context}
              </div>
              <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.6' }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
