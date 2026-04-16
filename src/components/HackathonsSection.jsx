import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const HACKATHONS = [
  {
    id: 1,
    name: 'Sangam University',
    subtitle: 'SU Hackathon • Offline Hackathon • Winner',
    meta: 'Bhilwara, Rajasthan · 2025',
    description: 'Secured 1st place by building a scalable full-stack solution under intense time pressure — demonstrating rapid architecture, domain collaboration & compelling pitching.',
    bg: '#1e1e1e', // Sleek dark to match their screenshot's dark vibe somewhat, but keeping the flat card style
    imageGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))',
    borderColor: '#f59e0b', // Gold accent
    linkText: '🏆 1st Place',
    link: '#'
  },
  {
    id: 2,
    name: 'GU Hackathon',
    subtitle: 'Offline Hackathon',
    meta: 'Gujarat · 2024',
    description: 'Participated in an intensive offline hackathon environment, focusing on innovative problem solving and robust full-stack development implementations.',
    bg: '#1a1d24', 
    imageGradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0.05))',
    borderColor: '#38bdf8',
    linkText: '🏅 Finalist / Participant',
    link: '#'
  },
  {
    id: 3,
    name: 'Web3 & AI Sprint',
    subtitle: 'Online Virtual Hack',
    meta: 'Global · 2023',
    description: 'An open-innovation track focused on decentralized apps layered with AI tooling. Rapidly prototyped a smart contract integrated with conversational AI.',
    bg: '#1e1c24',
    imageGradient: 'linear-gradient(135deg, rgba(162, 89, 255, 0.1), rgba(162, 89, 255, 0.05))',
    borderColor: '#a259ff',
    linkText: '✅ Completed',
    link: '#'
  }
];

export default function HackathonsSection() {
  const containerRef = useRef(null);

  return (
    <section id="hackathons" className="section" style={{ position: 'relative', overflow: 'visible' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .stack-section-wrapper {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding-top: 40px;
          padding-bottom: 20vh;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .stack-card {
          position: sticky;
          border-radius: 24px;
          width: 100%;
          min-height: 480px;
          padding: 48px;
          box-shadow: 0 -10px 40px rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
          will-change: transform;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .stack-card-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #ffffff;
          width: 100%;
          margin-bottom: 8px;
          font-family: var(--font-display);
          line-height: 1.1;
        }

        .stack-card-subtitle {
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: var(--font-display);
          margin-bottom: 40px;
        }

        .stack-card-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          gap: 40px;
          flex: 1;
        }

        .stack-card-left {
          width: 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
        }

        .stack-card-meta {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          font-family: var(--font-display);
        }

        .stack-card-desc {
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.8;
          font-family: var(--font-body);
        }

        .stack-card-link {
          color: #ffffff;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          width: fit-content;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .stack-card-link:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .stack-card-right {
          width: 55%;
          /* Switched to responsive aspect ratio for certificates */
          aspect-ratio: 4 / 3;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .stack-bg-media {
          width: 100%;
          height: 100%;
          /* contain ensures horizontal/landscape certificates aren't cropped */
          object-fit: contain; 
          padding: 24px;
          box-sizing: border-box;
          backdrop-filter: blur(10px);
        }
        
        .stack-bg-media-placeholder {
           position: absolute;
           inset: 0;
           display: flex;
           align-items: center;
           justify-content: center;
           font-family: var(--font-display);
           color: rgba(255,255,255,0.2);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 13px;
        }

        @media (max-width: 800px) {
          .stack-card {
            padding: 32px 24px;
            min-height: auto;
          }
          .stack-card-content {
            flex-direction: column;
          }
          .stack-card-left, .stack-card-right {
            width: 100%;
          }
        }
      `}} />

      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 className="section-title">Hackathon Journey</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Offline battles, regional victories, and building under pressure.
        </p>
      </div>

      <div className="stack-section-wrapper" ref={containerRef}>
        {HACKATHONS.map((hack, index) => {
          const topOffset = 120 + (index * 60); // Tighter stack gap

          return (
            <div 
              key={hack.id} 
              className="stack-card"
              style={{
                backgroundColor: hack.bg,
                top: `${topOffset}px`,
                zIndex: (index + 1) * 10
              }}
            >
              <div style={{ borderBottom: `1px solid rgba(255,255,255,0.08)`, paddingBottom: '24px', marginBottom: '32px' }}>
                <h3 className="stack-card-title">{hack.name}</h3>
                <div className="stack-card-subtitle" style={{ color: hack.borderColor }}>
                  {hack.subtitle}
                </div>
              </div>

              <div className="stack-card-content">
                <div className="stack-card-left">
                  <div className="stack-card-meta">{hack.meta}</div>
                  <p className="stack-card-desc">{hack.description}</p>
                  <a href={hack.link} className="stack-card-link">
                    {hack.linkText}
                  </a>
                </div>
                
                <div 
                  className="stack-card-right" 
                  style={{ background: hack.imageGradient, border: `1px solid rgba(255,255,255,0.05)` }}
                >
                  <div className="stack-bg-media-placeholder">Your Certificate Here</div>
                  <img 
                    className="stack-bg-media" 
                    src={hack.certificateImg || "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} 
                    alt={`${hack.name} Certificate`}
                    style={{ position: 'relative', zIndex: 1 }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
