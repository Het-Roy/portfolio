import React, { useState } from 'react';

const tabs = [
  { id: 'SU', label: 'SU HACKATHON' },
  { id: 'GU', label: 'GU HACKATHON' }
];

const data = {
  SU: {
    status: 'ONLINE HACKATHON - FINALIST',
    uniLine1: 'Stanford',
    uniLine2: 'University',
    location: 'Stanford, California · 2024',
    achievementIcon: '🏅',
    achievementTitle: 'Top 10 Finalist',
    achievementSub: 'Online Global Hackathon',
    description: 'Secured a finalist spot by building a high-impact, scalability-focused web application. Demonstrated exceptional problem-solving and full-stack capabilities under immense pressure.',
    images: [
      'https://picsum.photos/seed/su1/600/750',
      'https://picsum.photos/seed/su2/600/750',
      'https://picsum.photos/seed/su3/600/750',
      'https://picsum.photos/seed/su4/600/750',
      'https://picsum.photos/seed/su5/600/750',
    ]
  },
  GU: {
    status: 'OFFLINE HACKATHON - WINNER',
    uniLine1: 'Ganpat',
    uniLine2: 'University',
    location: 'Mehsana, Gujarat · 2025',
    achievementIcon: '🏆',
    achievementTitle: '2nd Place',
    achievementSub: 'Offline Hackathon',
    description: 'Clinched 2nd at Ganpat University with a project that impressed judges across design, usability & technical depth — a showcase of teamwork and production-ready code delivery.',
    images: [
      'https://picsum.photos/seed/gu1/600/750',
      'https://picsum.photos/seed/gu2/600/750',
      'https://picsum.photos/seed/gu3/600/750',
      'https://picsum.photos/seed/gu4/600/750',
      'https://picsum.photos/seed/gu5/600/750',
    ]
  }
};

const HackathonCard = () => {
  const [activeTabId, setActiveTabId] = useState('GU');
  const [animatingTab, setAnimatingTab] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleTabSwitch = (newTabId) => {
    if (newTabId === activeTabId || animatingTab) return;
    setAnimatingTab(true);
    setTimeout(() => {
      setActiveTabId(newTabId);
      setActiveImageIdx(0);
      setAnimatingTab(false);
    }, 180);
  };

  const activeData = data[activeTabId];

  return (
    <div className="hc-wrapper">
      <style>{`
        /* Hackathon Card Custom CSS (Pure CSS Vanilla implementation) */
        .hc-wrapper {
          width: 100%; padding: 4rem 1rem;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }
        .hc-wrapper * {
          box-sizing: border-box;
        }
        .hc-card {
          width: 100%; max-width: 960px; margin: 0 auto;
          background-color: #0D0D0F; border: 1px solid #2A2A35;
          border-radius: 20px; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          display: flex; flex-direction: column;
        }
        @media (min-width: 768px) {
          .hc-card { flex-direction: row; }
        }
        .hc-glow {
          position: absolute; top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(to right, transparent, #6C4EF6, transparent);
          opacity: 0.7; border-top-left-radius: 20px; border-top-right-radius: 20px;
        }
        .hc-left {
          width: 100%; background-color: #111116; padding: 20px;
          display: flex; flex-direction: column; z-index: 10;
          border-top-left-radius: 20px; border-top-right-radius: 20px;
          border-bottom: 1px solid #2A2A35;
        }
        @media (min-width: 768px) {
          .hc-left { width: 45%; border-top-right-radius: 0; border-bottom-left-radius: 20px; border-bottom: none; border-right: 1px solid #2A2A35; }
        }
        .hc-main-img-ctn {
          position: relative; aspect-ratio: 4/5; width: 100%;
          border-radius: 12px; border: 1px solid #2A2A35; overflow: hidden; margin-bottom: 12px; background-color: #1A1A22;
        }
        .hc-main-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          transition: opacity 250ms ease-out;
        }
        .hc-badge {
          position: absolute; top: 12px; left: 12px; background-color: #F5C518;
          border-radius: 6px; padding: 6px 10px; display: flex; align-items: center; gap: 4px;
          z-index: 20; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          transition: opacity 300ms;
        }
        .hc-badge-icon { font-size: 14px; line-height: 1; }
        .hc-badge-text { color: #1A1200; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1; margin-top: 1px; }
        .hc-counter {
          position: absolute; bottom: 12px; right: 12px; background-color: rgba(0,0,0,0.65);
          backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.15); border-radius: 9999px;
          padding: 4px 12px; z-index: 20; transition: opacity 300ms;
        }
        .hc-counter-text { color: #FFFFFF; font-size: 12px; font-weight: 500; line-height: 1; }
        .hc-label {
          display: flex; align-items: center; gap: 8px; margin-bottom: 16px; cursor: pointer; width: fit-content;
          transition: opacity 300ms;
        }
        .hc-label-text {
          color: #7C6EF7; font-size: 13px; font-weight: 500; position: relative; overflow: hidden;
        }
        .hc-label-underline {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 1px; background-color: #7C6EF7;
          transform: translateX(-100%); transition: transform 300ms;
        }
        .hc-label:hover .hc-label-underline { transform: translateX(0); }
        .hc-thumbs {
          display: flex; align-items: center; gap: 8px; overflow-x: auto; padding-bottom: 8px; flex-shrink: 0;
          transition: opacity 300ms;
        }
        .hc-thumbs::-webkit-scrollbar { display: none; }
        .hc-thumb-btn {
          position: relative; width: 60px; height: 60px; border-radius: 8px; overflow: hidden; flex-shrink: 0;
          transition: all 200ms ease-out; display: flex; align-items: center; justify-content: center; cursor: pointer;
          background: transparent; padding: 0; box-sizing: border-box;
        }
        .hc-thumb-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hc-play-badge {
          position: absolute; z-index: 10; background-color: rgba(0,0,0,0.8); padding: 3px 8px;
          border-radius: 9999px; display: flex; align-items: center; justify-content: center; gap: 3px;
        }
        .hc-play-icon { width: 8px; height: 8px; color: #FFFFFF; }
        .hc-play-text { color: #FFFFFF; font-size: 8px; font-weight: 700; line-height: 1; margin-top: 1px; }

        .hc-right {
          width: 100%; padding: 28px; background-color: transparent; display: flex; flex-direction: column; position: relative; z-index: 20; box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .hc-right { width: 55%; padding: 28px 32px; }
        }
        .hc-tab-container {
          background-color: #1A1A22; border-radius: 10px; padding: 5px; border: 1px solid #2A2A35;
          display: inline-flex; gap: 8px; width: fit-content;
        }
        .hc-tab-btn-wrapper { position: relative; }
        .hc-tab-btn {
          position: relative; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          padding: 7px 16px; border-radius: 7px; transition: all 200ms ease-out; z-index: 10; cursor: pointer; border: none; font-family: inherit;
        }
        .hc-tab-brackets {
          position: absolute; top: -3px; left: -3px; right: -3px; bottom: -3px; pointer-events: none; z-index: 0;
        }
        .hc-bracket { position: absolute; width: 6px; height: 6px; border-color: #7C6EF7; border-style: solid; box-sizing: border-box; }
        .hc-bracket-tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
        .hc-bracket-tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
        .hc-bracket-bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
        .hc-bracket-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

        .hc-content-wrapper {
          display: flex; flex-direction: column; margin-top: 16px; transition: all 180ms ease-out; width: 100%;
        }
        .hc-status-badge {
          display: inline-flex; gap: 10px; background-color: rgba(108,78,246,0.12);
          border: 1px solid rgba(108,78,246,0.35); border-radius: 9999px; padding: 5px 14px; width: fit-content; align-items: center;
        }
        .hc-status-dot { width: 8px; height: 8px; border-radius: 9999px; background-color: #7C6EF7; flex-shrink: 0;}
        .hc-status-text { color: #A08BFF; font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; padding-top: 1px; line-height: 1; }

        .hc-uni-name {
          margin-top: 24px; display: flex; flex-direction: column; font-weight: 800; font-size: 42px; line-height: 1.1; color: #FFFFFF; letter-spacing: -0.02em;
        }
        @media (min-width: 768px) {
          .hc-uni-name { font-size: 52px; line-height: 1.05; }
        }
        .hc-loc-year { margin-top: 6px; font-size: 13px; color: #6B6B80; font-weight: 400; letter-spacing: 0.01em; }

        .hc-achieve-row { display: flex; align-items: center; gap: 14px; margin-top: 24px; }
        .hc-achieve-icon-box {
          width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
          background-color: rgba(245,197,24,0.1); border-radius: 10px; border: 1px solid rgba(245,197,24,0.2);
          cursor: default; flex-shrink: 0;
        }
        .hc-achieve-icon { font-size: 28px; transition: transform 300ms ease-out; }
        .hc-achieve-icon-box:hover .hc-achieve-icon { transform: rotate(-8deg) scale(1.1); }
        .hc-achieve-col { display: flex; flex-direction: column; justify-content: center; }
        .hc-achieve-title { font-size: 18px; font-weight: 700; color: #FFFFFF; line-height: 1.2; }
        .hc-achieve-sub { font-size: 12px; color: #6B6B80; line-height: 1.2; margin-top: 2px; }

        .hc-desc {
          margin-top: 20px; font-size: 14px; line-height: 1.7; color: #9898A8; max-width: 380px; margin-bottom: 0;
        }

        .hc-cta {
          margin-top: 28px; width: 100%; height: 52px; background-color: #1C1C26; border: 1px solid #2E2E40;
          border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 200ms; cursor: pointer; padding: 0; box-sizing: border-box;
        }
        .hc-cta:hover {
          background-color: #242433; border-color: #6C4EF6; box-shadow: inset 0 0 0 1px rgba(108,78,246,0.3);
        }
        .hc-cta:active { transform: scale(0.98); transition-duration: 100ms; }
        .hc-cta-text { color: #FFFFFF; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-family: inherit; }
        .hc-cta-arrow { color: #7C6EF7; font-size: 16px; transition: transform 200ms ease-out; }
        .hc-cta:hover .hc-cta-arrow { transform: translateX(4px); }

        /* Animations */
        @keyframes hcEntranceFadeUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .hc-anim-entrance { animation: hcEntranceFadeUp 600ms cubic-bezier(0.16,1,0.3,1) forwards; }

        @keyframes hcPulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.4; }
        }
        .hc-anim-pulse { animation: hcPulseDot 2s infinite ease-in-out; }

        @keyframes hcSlideUpWord {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .hc-anim-word1 { opacity: 0; animation: hcSlideUpWord 500ms ease-out forwards; }
        .hc-anim-word2 { opacity: 0; animation: hcSlideUpWord 500ms ease-out 80ms forwards; }

        @keyframes hcFadeSlideInRight {
          0% { transform: translateX(12px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .hc-anim-content-in { animation: hcFadeSlideInRight 200ms ease-out forwards; }

        @keyframes hcSlideInTL { 0% { transform: translate(-4px, -4px); opacity: 0;} 100% { transform: translate(0, 0); opacity: 1;} }
        @keyframes hcSlideInTR { 0% { transform: translate(4px, -4px); opacity: 0;} 100% { transform: translate(0, 0); opacity: 1;} }
        @keyframes hcSlideInBL { 0% { transform: translate(-4px, 4px); opacity: 0;} 100% { transform: translate(0, 0); opacity: 1;} }
        @keyframes hcSlideInBR { 0% { transform: translate(4px, 4px); opacity: 0;} 100% { transform: translate(0, 0); opacity: 1;} }

        .hc-anim-br-tl { animation: hcSlideInTL 200ms ease-out forwards; }
        .hc-anim-br-tr { animation: hcSlideInTR 200ms ease-out forwards; }
        .hc-anim-br-bl { animation: hcSlideInBL 200ms ease-out forwards; }
        .hc-anim-br-br { animation: hcSlideInBR 200ms ease-out forwards; }

        @keyframes hcTabScaleUp { 0% { transform: scale(0.96); } 100% { transform: scale(1); } }
        .hc-anim-tab-up { animation: hcTabScaleUp 150ms ease-out forwards; }

        /* Dynamic states */
        .hc-opacity-0 { opacity: 0; }
        .hc-opacity-100 { opacity: 1; }
        .hc-translate-out { transform: translateX(-12px); opacity: 0; }
        .hc-translate-in { transform: translateX(0); opacity: 1; }
        .hc-thumb-active { border: 2px solid #7C6EF7; transform: scale(1.05); opacity: 1; z-index: 10; box-shadow: 0 0 12px rgba(124,110,247,0.4); }
        .hc-thumb-inactive { border: 1px solid #2A2A35; opacity: 0.65; }
        .hc-thumb-inactive:hover { opacity: 1; transform: scale(1.08); }
        .hc-tab-active { background-color: #6C4EF6; color: #FFFFFF; box-shadow: 0 2px 12px rgba(108,78,246,0.45); border: 1px solid transparent; }
        .hc-tab-inactive { background-color: transparent; color: #6B6B80; transform: scale(0.96); border: 1px solid transparent; }
        .hc-tab-inactive:hover { color: #9898A8; background-color: rgba(255,255,255,0.05); }
      `}</style>

      {/* SECTION TITLE */}
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vh, 48px)' }}>
          Hackathon Participations
      </h2>

      {/* OUTER CONTAINER */}
      <div className="hc-card hc-anim-entrance">
        {/* Subtle purple top-edge gradient glow */}
        <div className="hc-glow" />
        
        {/* LEFT PANEL — IMAGE VIEWER */}
        <div className="hc-left">
          
          {/* Main Image Area */}
          <div className="hc-main-img-ctn">
            {activeData.images.map((src, idx) => (
              <img 
                key={idx} 
                src={src} 
                alt="Hackathon Event"
                className={`hc-main-img ${idx === activeImageIdx && !animatingTab ? 'hc-opacity-100' : 'hc-opacity-0'}`} 
                style={{ zIndex: idx === activeImageIdx ? 1 : 0 }}
              />
            ))}
            
            {/* BADGE */}
            <div className={`hc-badge ${animatingTab ? 'hc-opacity-0' : 'hc-opacity-100'}`}>
              <span className="hc-badge-icon">🏆</span>
              <span className="hc-badge-text">Winner Certificate</span>
            </div>

            {/* COUNTER */}
            <div className={`hc-counter ${animatingTab ? 'hc-opacity-0' : 'hc-opacity-100'}`}>
              <span className="hc-counter-text">{activeImageIdx + 1} / {activeData.images.length}</span>
            </div>
          </div>

          {/* LABEL */}
          <div className={`hc-label ${animatingTab ? 'hc-opacity-0' : 'hc-opacity-100'}`}>
             <span>🏆</span>
             <span className="hc-label-text">
                Official Winner Certificate
                <span className="hc-label-underline" />
             </span>
          </div>

          {/* THUMBNAILS STRIP */}
          <div className={`hc-thumbs ${animatingTab ? 'hc-opacity-0' : 'hc-opacity-100'}`}>
            {activeData.images.map((src, idx) => {
              const isActive = activeImageIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`hc-thumb-btn ${isActive ? 'hc-thumb-active' : 'hc-thumb-inactive'}`}
                >
                  <img src={src} className="hc-thumb-img" alt="thumb" />
                  {idx === 1 && (
                    <div className="hc-play-badge">
                      <svg className="hc-play-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      <span className="hc-play-text">PLAY</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL — INFO */}
        <div className="hc-right">
          
          {/* TAB SWITCHER */}
          <div className="hc-tab-container">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <div key={tab.id} className="hc-tab-btn-wrapper">
                  <button 
                    onClick={() => handleTabSwitch(tab.id)}
                    className={`hc-tab-btn ${isActive ? 'hc-tab-active hc-anim-tab-up' : 'hc-tab-inactive'}`}
                  >
                    {tab.label}
                  </button>
                  {isActive && (
                    <div className="hc-tab-brackets">
                      <div className="hc-bracket hc-bracket-tl hc-anim-br-tl" />
                      <div className="hc-bracket hc-bracket-tr hc-anim-br-tr" />
                      <div className="hc-bracket hc-bracket-bl hc-anim-br-bl" />
                      <div className="hc-bracket hc-bracket-br hc-anim-br-br" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* DYNAMIC CONTENT WRAPPER */}
          <div 
             key={activeTabId} 
             className={`hc-content-wrapper ${animatingTab ? 'hc-translate-out' : 'hc-anim-content-in'}`}
          >
            {/* STATUS BADGE */}
            <div className="hc-status-badge">
               <div className="hc-status-dot hc-anim-pulse" />
               <span className="hc-status-text">{activeData.status}</span>
            </div>

            {/* UNIVERSITY NAME */}
            <div className="hc-uni-name">
               <span className="hc-anim-word1">{activeData.uniLine1}</span>
               <span className="hc-anim-word2">{activeData.uniLine2}</span>
            </div>
            
            {/* LOCATION & YEAR */}
            <div className="hc-loc-year">
               {activeData.location}
            </div>

            {/* ACHIEVEMENT ROW */}
            <div className="hc-achieve-row">
               <div className="hc-achieve-icon-box">
                  <span className="hc-achieve-icon">
                    {activeData.achievementIcon}
                  </span>
               </div>
               <div className="hc-achieve-col">
                  <span className="hc-achieve-title">{activeData.achievementTitle}</span>
                  <span className="hc-achieve-sub">{activeData.achievementSub}</span>
               </div>
            </div>

            {/* DESCRIPTION */}
            <p className="hc-desc">
               {activeData.description}
            </p>

            {/* CTA BUTTON */}
            <button className="hc-cta">
               <span className="hc-cta-text">Continue to portfolio</span>
               <span className="hc-cta-arrow">→</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
