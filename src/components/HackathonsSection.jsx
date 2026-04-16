import React, { useState, useEffect, useRef } from 'react';

// Hardcoded data based on the strict requirements provided
const HACKATHON_STATS = {
  total: 6,
  wins: 2,
  projects: 4,
  hours: '120+'
};

const HACKATHONS = [
  {
    id: 1,
    name: 'Smart India Hackathon',
    organizer: 'Government of India',
    date: 'Dec 2023',
    location: 'Bhopal, India',
    theme: 'Blockchain & Identity',
    role: 'Finalist',
    project: 'Decentralized CredVerify',
    teamSize: 'Team of 4',
    takeaway: 'Built a robust credential issuance system on Ethereum testnet in 36 hours.',
    achievement: '🎖 Finalist',
    tech: ['React', 'Solidity', 'Node.js'],
    certificateImg: 'https://res.cloudinary.com/demo/image/upload/sample.jpg' 
  },
  {
    id: 2,
    name: 'Global Hack Week: Web3',
    organizer: 'Major League Hacking (MLH)',
    date: 'Aug 2023',
    location: 'Online',
    theme: 'FinTech Innovation',
    role: 'Participant',
    project: 'Seamless Onboard',
    teamSize: 'Solo',
    takeaway: 'Focused heavily on accessible UX for wallet connections using wagmi.',
    achievement: '✅ Participated',
    tech: ['React', 'Ethers.js', 'Tailwind'],
    certificateImg: 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  },
  {
    id: 3,
    name: 'HackSprint Vol 3',
    organizer: 'Tech Innovators Club',
    date: 'Mar 2023',
    location: 'Surat, India',
    theme: 'AI for Education',
    role: 'Winner',
    project: 'AI Tutor Net',
    teamSize: 'Team of 3',
    takeaway: 'Integrated ChatGPT API and built a real-time summarizer backend in Express.',
    achievement: '🏆 Winner',
    tech: ['Node.js', 'React', 'OpenAI'],
    certificateImg: 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  },
  {
    id: 4,
    name: 'CodeFest Challenge 2022',
    organizer: 'Local University',
    date: 'Oct 2022',
    location: 'Online',
    theme: 'Open Innovation',
    role: 'Runner-Up',
    project: 'Green Footprint',
    teamSize: 'Team of 2',
    takeaway: 'Calculated and visualized local carbon metrics via public APIs.',
    achievement: '🥈 Runner-Up',
    tech: ['Python', 'Django', 'JS'],
    certificateImg: 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  }
];

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export default function HackathonsSection() {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('.hack-animate-up');
    if (!nodes || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [showAll]);

  const visibleHackathons = showAll ? HACKATHONS : HACKATHONS.slice(0, 3);

  const getRoleColor = (role) => {
    if (role === 'Winner') return 'var(--accent-secondary)'; 
    if (role === 'Runner-Up' || role === 'Finalist') return '#38bdf8'; 
    return '#94a3b8'; 
  };

  const getRoleBg = (role) => {
    if (role === 'Winner') return 'rgba(34, 197, 94, 0.15)'; 
    if (role === 'Runner-Up' || role === 'Finalist') return 'rgba(56, 189, 248, 0.15)';
    return 'rgba(255, 255, 255, 0.05)';
  };

  return (
    <section id="hackathons" className="section" style={{ position: 'relative' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .hack-stats-container {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          margin-bottom: clamp(30px, 5vh, 48px);
          max-width: 1100px;
          margin-inline: auto;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 20px;
          padding: 24px 32px;
        }
        .hack-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 120px;
        }
        .hack-stat-num {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 700;
          font-family: var(--font-display);
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }
        .hack-stat-label {
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-family: var(--font-display);
          margin-top: 6px;
        }

        .hack-grid {
          display: grid;
          gap: clamp(24px, 4vw, 36px);
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .hack-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .hack-card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .hack-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 50px rgba(126, 34, 206, 0.15);
        }

        .hack-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          background: radial-gradient(circle at center, rgba(126, 34, 206, 0.15), rgba(5, 5, 5, 0.9));
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          overflow: hidden;
        }
        .hack-ghost-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          color: rgba(255, 255, 255, 0.02);
          font-family: var(--font-display);
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
        }
        .hack-img-wrapper {
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #ebebeb; 
          transition: transform 0.5s ease;
          transform: rotate(-2deg);
        }
        .hack-card:hover .hack-img-wrapper {
          transform: rotate(0deg) scale(1.02);
        }
        .hack-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 6px;
          display: block;
        }

        .hack-content {
          padding: clamp(24px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }
        .hack-title {
          font-size: clamp(20px, 2.5vw, 24px);
          font-weight: 700;
          color: #fff;
          font-family: var(--font-display);
          line-height: 1.25;
        }
        .hack-org {
          font-size: 13px;
          color: #94A3B8;
        }
        .hack-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #cbd5e1;
          font-family: var(--font-body);
        }
        .hack-badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hack-pill {
          padding: 4px 12px;
          font-size: 11px;
          border-radius: 999px;
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hack-pill-theme {
          background: rgba(126, 34, 206, 0.15);
          color: #d8b4fe;
          border: 1px solid rgba(126, 34, 206, 0.3);
        }

        .hack-project-box {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 16px;
          margin-top: 4px;
        }
        .hack-project-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hack-takeaway {
          font-size: 13.5px;
          color: #aaa;
          line-height: 1.6;
        }

        .hack-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(10, 15, 30, 0.5);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .hack-achievement {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
        .hack-tech-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .hack-tech-pill {
          font-size: 11px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: #cbd5e1;
        }

        .hack-toggle {
          margin: 40px auto 0;
          display: block;
        }
        .hack-animate-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}} />

      <div ref={containerRef} style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Hackathon Journey</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto clamp(32px, 5vh, 48px)' }}>
          48 hours. Real problems. Real solutions. <br/>A showcase of intense, time-boxed coding sprints and the certificates earned along the way.
        </p>

        <div className="hack-stats-container">
          <div className="hack-stat">
            <div className="hack-stat-num">{HACKATHON_STATS.total}</div>
            <div className="hack-stat-label">Participated</div>
          </div>
          <div className="hack-stat">
            <div className="hack-stat-num">{HACKATHON_STATS.wins}</div>
            <div className="hack-stat-label">Wins / Finalist</div>
          </div>
          <div className="hack-stat">
            <div className="hack-stat-num">{HACKATHON_STATS.projects}</div>
            <div className="hack-stat-label">Projects Built</div>
          </div>
          <div className="hack-stat">
            <div className="hack-stat-num">{HACKATHON_STATS.hours}</div>
            <div className="hack-stat-label">Hours Coded</div>
          </div>
        </div>

        <div className="hack-grid">
          {visibleHackathons.map((hack, index) => (
            <article 
              key={hack.id} 
              className="hack-card hack-animate-up" 
              style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
              {/* HERO VISUAL */}
              <div className="hack-visual">
                <div className="hack-ghost-text">{hack.organizer.toUpperCase()}</div>
                <div className="hack-img-wrapper">
                  <img 
                    src={hack.certificateImg} 
                    alt={`${hack.name} Certificate`} 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* CONTENT STRIP */}
              <div className="hack-content">
                <div>
                  <h3 className="hack-title">{hack.name}</h3>
                  <div className="hack-org">{hack.organizer}</div>
                </div>

                <div className="hack-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CalendarIcon /> {hack.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <PinIcon /> {hack.location}
                  </span>
                </div>

                <div className="hack-badge-row">
                  <div className="hack-pill hack-pill-theme">{hack.theme}</div>
                  <div 
                    className="hack-pill" 
                    style={{ 
                      background: getRoleBg(hack.role), 
                      color: getRoleColor(hack.role), 
                      borderColor: getRoleBg(hack.role) 
                    }}
                  >
                    {hack.role}
                  </div>
                </div>

                <div className="hack-project-box">
                  <div className="hack-project-name">
                    <UsersIcon />
                    {hack.project} <span style={{ fontWeight: 400, color: '#888', fontSize: '13px' }}>({hack.teamSize})</span>
                  </div>
                  <div className="hack-takeaway">
                    "{hack.takeaway}"
                  </div>
                </div>
              </div>

              {/* FOOTER STRIP */}
              <div className="hack-footer">
                <div className="hack-achievement">{hack.achievement}</div>
                <div className="hack-tech-pills">
                  {hack.tech.map(t => (
                    <span key={t} className="hack-tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {HACKATHONS.length > 3 && (
          <button 
            className="btn-outline hack-toggle" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More Hackathons'}
          </button>
        )}
      </div>
    </section>
  );
}
