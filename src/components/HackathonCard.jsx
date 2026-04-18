import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useGlowTracking } from './GlowWrapper.jsx';

const data = {
  GEC: {
    status: 'Hack the Spring',
    uniLine1: 'GEC',
    uniLine2: 'Gandhinagar',
    location: 'Gandhinagar, Gujarat · 2026',
    achievementIcon: '🏅',
    achievementTitle: 'Top Participants',
    achievementSub: 'Offline Competitive Hackathon',
    description: 'I participated in a Hack The Spring organized by GEC Gandhinagar, where I gained valuable experience in problem-solving and teamwork.',
    images: [
      'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776531295/watermark-removed-Gemini_Generated_Image_nqup1fnqup1fnqup_msk7a5.jpg',
    ]
  },
  GU: {
    status: 'Dev Heat',
    uniLine1: 'IIIT',
    uniLine2: 'Surat',
    location: 'Surat, Gujarat · 2026',
    achievementIcon: '🏆',
    achievementTitle: 'Top Participants',
    achievementSub: 'Offline Competitive Hackathon',
    description: 'I participated in a Dev Heat organized by IIIT Surat, where I gained valuable experience in problem-solving and teamwork.',
    images: [
      'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776531883/7e139ef4-86e5-4f02-a4c5-2a6df27c22cd_lta9og.jpg',
    ]
  }
};

const ALL_CERTIFICATES = [
  ...data.GU.images.map((img, idx) => ({ ...data.GU, image: img, id: `GU-${idx}` })),
  ...data.GEC.images.map((img, idx) => ({ ...data.GEC, image: img, id: `GEC-${idx}` })),
];

const BACKUP_IMAGE = 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800';

const HackathonCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  useGlowTracking(cardRef);

  const slideLeft = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + ALL_CERTIFICATES.length) % ALL_CERTIFICATES.length);
  }, []);

  const slideRight = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % ALL_CERTIFICATES.length);
  }, []);
  
  // Optional Auto-play if not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ALL_CERTIFICATES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeEvent = ALL_CERTIFICATES[currentIndex];

  return (
    <div className="hc-wrapper">
      <style>{`
        .hc-wrapper {
          width: 100%; padding: 4rem 1rem;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }
        .hc-wrapper * { box-sizing: border-box; }
        
        .hc-carousel-card {
          width: 100%; max-width: 800px; margin: 0 auto;
          aspect-ratio: 1.4 / 1; min-height: 400px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background-color: #1A1A22;
          border: 1px solid #2A2A35;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          cursor: pointer;
        }
        
        .hc-image-layer {
          position: absolute; inset: 0; width: 100%; height: 100%;
        }
        
        .hc-main-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hc-carousel-card.is-hovered .hc-main-img {
          transform: scale(1.05);
        }
        
        .hc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(13,13,15,0.98) 0%, rgba(13,13,15,0.85) 45%, rgba(13,13,15,0.1) 100%);
          opacity: 0;
          visibility: hidden;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 40px 48px;
          transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 20;
        }
        
        .hc-overlay.visible {
          opacity: 1; visibility: visible;
        }
        
        .hc-info-content {
          transform: translateY(30px);
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hc-overlay.visible .hc-info-content {
          transform: translateY(0);
        }
        
        .hc-status-badge {
          display: inline-flex; gap: 8px; align-items: center;
          background-color: rgba(108,78,246,0.15); border: 1px solid rgba(108,78,246,0.4);
          padding: 8px 16px; border-radius: 9999px; margin-bottom: 24px;
        }
        
        .hc-status-text {
          color: #E2DDFF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px;
        }
        
        .hc-title {
          font-size: 38px; font-weight: 800; color: #FFF; line-height: 1.15; margin: 0 0 12px 0;
        }
        
        .hc-location {
          color: #A8A8B3; font-size: 14px; margin-bottom: 24px; font-weight: 500;
        }
        
        .hc-achieve {
          display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
          background: rgba(255,255,255,0.04); padding: 14px 18px; border-radius: 12px; width: fit-content;
        }
        
        .hc-desc {
          color: #BDBDC7; font-size: 15px; line-height: 1.7; margin: 0; max-width: 650px;
        }
        
        .hc-controls {
          position: absolute; top: 50%; left: 0; right: 0;
          transform: translateY(-50%); display: flex; justify-content: space-between;
          padding: 0 24px; z-index: 30; pointer-events: none;
        }
        
        .hc-nav-btn {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(0,0,0,0.5); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12);
          color: white; display: flex; align-items: center; justify-content: center;
          cursor: pointer; pointer-events: auto;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0; transform: scale(0.9);
        }
        
        .hc-carousel-card.is-hovered .hc-nav-btn {
          opacity: 1; transform: scale(1);
        }
        
        .hc-nav-btn:hover {
          background: rgba(108,78,246,0.9); border-color: #6C4EF6; transform: scale(1.1) !important;
        }
        
        .hc-dots {
          position: absolute; bottom: 24px; left: 0; right: 0;
          display: flex; justify-content: center; gap: 10px; z-index: 30;
        }
        
        .hc-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.25); transition: all 400ms ease;
        }
        
        .hc-dot.active {
          background: #6C4EF6; width: 32px; border-radius: 6px;
        }
        
        /* Entrance animation */
        @keyframes hcEntranceFadeUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .hc-anim-entrance { animation: hcEntranceFadeUp 600ms ease-out forwards; }
        
        @keyframes hcPulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.3; }
        }
        .hc-anim-pulse { animation: hcPulseDot 2.5s infinite ease-in-out; }
      `}</style>

      {/* SECTION TITLE */}
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vh, 48px)' }}>
          Hackathon Participations
      </h2>

      <div 
        ref={cardRef}
        className="gcard-wrapper hc-anim-entrance"
        style={{ '--card-accent-rgb': '108, 78, 246', width: '100%', maxWidth: '800px', margin: '0 auto', borderRadius: '20px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`gcard-inner hc-carousel-card ${isHovered ? 'is-hovered' : ''}`}>
          
          {/* IMAGE CAROUSEL */}
          <div className="hc-image-layer">
            {ALL_CERTIFICATES.map((cert, idx) => (
              <img 
                key={cert.id} 
                src={cert.image || BACKUP_IMAGE} 
                alt={`${cert.uniLine1} ${cert.uniLine2}`}
                className="hc-main-img"
                style={{ 
                  opacity: idx === currentIndex ? 1 : 0, 
                  zIndex: idx === currentIndex ? 1 : 0,
                  pointerEvents: idx === currentIndex ? 'auto' : 'none'
                }}
              />
            ))}
          </div>
          
          {/* NAVIGATION CONTROLS */}
          <div className="hc-controls">
            <button className="hc-nav-btn" onClick={slideLeft} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="hc-nav-btn" onClick={slideRight} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          
          {/* DOTS */}
          <div className="hc-dots">
            {ALL_CERTIFICATES.map((_, idx) => (
              <div key={idx} className={`hc-dot ${idx === currentIndex ? 'active' : ''}`} />
            ))}
          </div>

          {/* OVERLAY INFORMATION */}
          <div className={`hc-overlay ${isHovered ? 'visible' : ''}`}>
            <div className="hc-info-content">
              <div className="hc-status-badge">
                <div className="hc-anim-pulse" style={{ background: '#7C6EF7', width: 8, height: 8, borderRadius: '50%' }} />
                <span className="hc-status-text">{activeEvent.status}</span>
              </div>
              
              <h3 className="hc-title">
                {activeEvent.uniLine1} <br/> {activeEvent.uniLine2}
              </h3>
              
              <div className="hc-location">
                {activeEvent.location}
              </div>
              
              <div className="hc-achieve">
                <span style={{ fontSize: 26 }}>{activeEvent.achievementIcon}</span>
                <div>
                  <div style={{ color: '#FFF', fontWeight: 600, fontSize: 14 }}>{activeEvent.achievementTitle}</div>
                  <div style={{ color: '#A8A8B3', fontSize: 12 }}>{activeEvent.achievementSub}</div>
                </div>
              </div>
              
              <p className="hc-desc">
                {activeEvent.description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
