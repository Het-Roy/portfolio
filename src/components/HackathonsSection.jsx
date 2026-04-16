import React, { useRef } from 'react';

const HACKATHONS = [
  {
    id: 1,
    name: 'Sangam University',
    description: 'SU Hackathon • Offline Hackathon • Winner (Bhilwara, Rajasthan · 2025). Secured 1st place by building a scalable full-stack solution under intense time pressure — demonstrating rapid architecture, domain collaboration & compelling pitching.',
    bg: '#B5A5A8', // Dusty mauve
    imageGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))',
    link: '#',
    linkText: 'See more ↗',
    certificateImg: '' // Placeholder intact
  },
  {
    id: 2,
    name: 'GU Hackathon',
    description: 'Offline Hackathon (Gujarat · 2024). Participated in an intensive offline hackathon environment, focusing on innovative problem solving and robust full-stack development implementations.',
    bg: '#9E8470', // Warm tan/brown
    imageGradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.05))',
    link: '#',
    linkText: 'See more ↗',
    certificateImg: '' 
  },
  {
    id: 3,
    name: 'Web3 Track',
    description: 'Online Virtual Hack (Global · 2023). An open-innovation track focused on decentralized apps layered with AI tooling. Rapidly prototyped a smart contract integrated with conversational AI.',
    bg: '#7A8FA0', // Slate
    imageGradient: 'linear-gradient(135deg, rgba(162, 89, 255, 0.2), rgba(162, 89, 255, 0.05))',
    link: '#',
    linkText: 'See more ↗',
    certificateImg: ''
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
          box-shadow: 0 -10px 40px rgba(0,0,0,0.15); /* Soft shadow against card below */
          display: flex;
          flex-direction: column;
          will-change: transform;
          border: none;
        }

        .stack-card-title {
          font-size: clamp(32px, 5vw, 40px);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          width: 100%;
          margin-bottom: 40px;
          font-family: var(--font-display);
        }

        .stack-card-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex: 1;
        }

        .stack-card-left {
          width: 40%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .stack-card-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: var(--font-body);
        }

        .stack-card-link {
          color: #ffffff;
          text-decoration: underline;
          font-weight: 500;
          font-size: 16px;
          display: inline-block;
          font-family: var(--font-body);
          transition: color 0.2s ease;
          width: fit-content;
        }

        .stack-card-link:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .stack-card-right {
          width: 55%;
          /* 4:3 certificate aspect ratio orientation */
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
          object-fit: contain; /* Certificates fit safely */
          backdrop-filter: blur(10px);
          padding: 16px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .stack-bg-placeholder {
           position: absolute;
           inset: 0;
           display: flex;
           align-items: center;
           justify-content: center;
           font-family: var(--font-display);
           color: rgba(255,255,255,0.4);
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
          const topOffset = 120 + (index * 80); // Strict stacking gap to show the massive centered titles

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
              <h3 className="stack-card-title">{hack.name}</h3>

              <div className="stack-card-content">
                <div className="stack-card-left">
                  <p className="stack-card-desc">{hack.description}</p>
                  <a href={hack.link} className="stack-card-link">{hack.linkText}</a>
                </div>
                
                <div 
                  className="stack-card-right"
                  style={{ background: hack.imageGradient }}
                >
                  <div className="stack-bg-placeholder">Your Certificate Here</div>
                  <img 
                    className="stack-bg-media" 
                    src={hack.certificateImg || "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} 
                    alt={`${hack.name} visual`}
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
