import React from 'react';
import { GlowWrapper } from './GlowWrapper.jsx';

const CARDS = [
  {
    title: 'Performance',
    desc: 'Lightning-fast components built for modern web applications with optimal performance.',
    accent: '#10B981',
    accentRGB: '16, 185, 129',
    features: [
      { text: 'Optimized rendering', icon: '☆' },
      { text: 'Minimal bundle size', icon: '☆' }
    ],
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    title: 'Design',
    desc: 'Beautiful, accessible components with smooth animations and modern design principles.',
    accent: '#8B5CF6',
    accentRGB: '139, 92, 246',
    features: [
      { text: 'Elegant animations', icon: '♡' },
      { text: 'Accessibility first', icon: '♡' }
    ],
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: 'Premium',
    desc: 'Enterprise-grade components with advanced features and comprehensive documentation.',
    accent: '#F59E0B',
    accentRGB: '245, 158, 11',
    features: [
      { text: 'Enterprise support', icon: '◎' },
      { text: 'Advanced features', icon: '◎' }
    ],
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    )
  }
];

export default function GlowingCards() {
  return (
    <div style={{ background: '#FFFFFF', padding: '60px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        .gc-showcase-title {
          font-weight: 800;
          font-size: 32px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #111111;
          text-align: center;
          margin: 0;
        }
        .gc-showcase-sub {
          font-size: 14px;
          color: #666666;
          max-width: 620px;
          line-height: 1.6;
          margin: 16px auto 48px;
          text-align: center;
        }
        .gc-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (min-width: 480px) {
          .gc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .gc-grid { grid-template-columns: repeat(3, 1fr); }
        }
        
        .gc-card-content {
          padding: 28px 26px;
          width: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .gc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .gc-header-title {
          font-weight: 700;
          font-size: 20px;
          color: #111111;
          margin: 0;
        }
        .gc-desc {
          font-size: 14px;
          color: #444444;
          line-height: 1.65;
          margin: 0;
        }
        .gc-features {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .gc-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gc-feature-icon {
          font-size: 14px;
          color: #AAAAAA;
          line-height: 1;
        }
        .gc-feature-text {
          font-size: 13px;
          color: #555555;
          line-height: 1;
        }
      `}</style>
      
      <h2 className="gc-showcase-title">Glowing Cards</h2>
      <p className="gc-showcase-sub">
        Interactive card components with beautiful glowing effects that follow mouse cursor movement. Perfect for feature showcases, pricing sections, and content highlights.
      </p>

      <div className="gc-grid">
        {CARDS.map((card, idx) => (
          <GlowWrapper 
            key={idx}
            accentRGB={card.accentRGB}
            style={{ borderRadius: '18px', background: '#FFFFFF' }}
            innerStyle={{ background: '#FFFFFF' }}
          >
            <div className="gc-card-content">
              <div className="gc-header">
                <div style={{ color: card.accent, display: 'flex', alignItems: 'center' }}>
                  <card.Icon />
                </div>
                <h3 className="gc-header-title">{card.title}</h3>
              </div>
              <p className="gc-desc">{card.desc}</p>
              
              <div className="gc-features">
                {card.features.map((feat, i) => (
                  <div key={i} className="gc-feature-item">
                    <span className="gc-feature-icon">{feat.icon}</span>
                    <span className="gc-feature-text">{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlowWrapper>
        ))}
      </div>
    </div>
  );
}
