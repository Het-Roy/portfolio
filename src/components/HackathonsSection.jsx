import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HACKATHONS = [
  {
    id: 1,
    name: 'AI Track',
    description: 'Build cutting-edge AI tools that solve real-world problems. Open to all skill levels.',
    bg: '#B5A5A8', // Dusty mauve
    imageGradient: 'linear-gradient(135deg, #00C9A7, #0A84FF)',
    link: '#'
  },
  {
    id: 2,
    name: 'Web3 Track',
    description: 'Decentralized apps, smart contracts, and blockchain infrastructure for the next web.',
    bg: '#9E8470', // Warm tan/brown
    imageGradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    link: '#'
  },
  {
    id: 3,
    name: 'Sustainability Track',
    description: 'Climate tech, green energy, and environmental impact — build for the planet.',
    bg: '#7A8FA0', // Slate
    imageGradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
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
          /* Ensure enough height for scrolling, gap provides some native spacing before stick */
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
          box-shadow: none;
          display: flex;
          flex-direction: column;
          will-change: transform;
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
        }

        .stack-card-link:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .stack-card-right {
          width: 55%;
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stack-bg-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 800px) {
          .stack-card {
            padding: 32px 24px;
          }
          .stack-card-content {
            flex-direction: column;
          }
          .stack-card-left, .stack-card-right {
            width: 100%;
          }
          .stack-card-right {
            height: 220px;
          }
        }
      `}} />

      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 className="section-title">Hackathon Journey</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Real world problems built over 48 hours of intense coding.
        </p>
      </div>

      <div className="stack-section-wrapper" ref={containerRef}>
        {HACKATHONS.map((hack, index) => {
          const topOffset = 120 + (index * 80);

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
                  <a href={hack.link} className="stack-card-link">See more ↗</a>
                </div>
                
                <div className="stack-card-right">
                  <div 
                    className="stack-bg-media" 
                    style={{ background: hack.imageGradient }} 
                    title={`${hack.name} visual`}
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
