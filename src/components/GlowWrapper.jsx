import React, { useRef, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const useGlowTracking = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) {
       el.classList.add('gcard-touch');
       return;
    }

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', x + 'px');
      el.style.setProperty('--mouse-y', y + 'px');
      el.style.setProperty('--glow-opacity', '1');
    };
    const handleMouseLeave = () => {
      el.style.setProperty('--glow-opacity', '0');
    };
    
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
};

export const GlowWrapper = ({ children, accentRGB, className = "", style = {}, innerStyle = {}, innerClassName = "" }) => {
  const ref = useRef(null);
  useGlowTracking(ref);

  return (
    <>
      <style>{`
        .gcard-wrapper {
          position: relative;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          padding: 1.5px;
          --mouse-x: 50%;
          --mouse-y: 50%;
          --glow-opacity: 0;
          --inner-glow-alpha: 0.18;
          transition: transform 200ms ease, box-shadow 200ms ease;
          z-index: 1;
          box-sizing: border-box;
        }
        .gcard-wrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: rgba(var(--card-accent-rgb), 0.18);
          pointer-events: none;
          z-index: -2;
        }
        .gcard-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            180px circle at var(--mouse-x) var(--mouse-y),
            rgba(var(--card-accent-rgb), 0.65),
            transparent 70%
          );
          opacity: var(--glow-opacity);
          transition: opacity 200ms ease;
          pointer-events: none;
          z-index: -1;
        }
        .gcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          overflow: hidden;
          z-index: 1;
          box-sizing: border-box;
          background: inherit;
          display: flex;
          flex-direction: column;
        }
        .gcard-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            300px circle at var(--mouse-x) var(--mouse-y),
            rgba(var(--card-accent-rgb), var(--inner-glow-alpha)),
            transparent 60%
          );
          opacity: var(--glow-opacity);
          transition: opacity 200ms ease;
          pointer-events: none;
          z-index: 0;
        }
        .gcard-wrapper:hover {
          transform: translateY(-4px);
          --inner-glow-alpha: 0.28;
        }
        .gcard-touch {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
        .gcard-touch::after, .gcard-touch .gcard-inner::before {
          animation: glowPulse 3s infinite ease-in-out;
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
      <div 
        ref={ref} 
        className={`gcard-wrapper ${className}`} 
        style={{ '--card-accent-rgb': accentRGB, ...style }}
      >
        <div className={`gcard-inner ${innerClassName}`} style={innerStyle}>
          {children}
        </div>
      </div>
    </>
  );
};
