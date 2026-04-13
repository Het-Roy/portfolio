import React, { useState } from 'react';

const Logo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
    <svg width="42" height="38" viewBox="-2 0 104 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="0" y2="88.6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4AEDED" />
          <stop offset="100%" stopColor="#E0FFFF" />
        </linearGradient>
      </defs>
      <g stroke="url(#logoGrad)" strokeWidth="3" strokeLinejoin="miter" strokeMiterlimit="4">
        {/* Top */}
        <polygon points="50,2 25,45.3 75,45.3" />
        <polygon points="50,11.6 33.3,40.5 66.7,40.5" />
        <polygon points="50,21.2 41.7,35.7 58.3,35.7" />
        {/* Bottom Left */}
        <polygon points="25,45.3 0,88.6 50,88.6" />
        <polygon points="25,54.9 8.3,83.8 41.7,83.8" />
        <polygon points="25,64.5 16.7,79.0 33.3,79.0" />
        {/* Bottom Right */}
        <polygon points="75,45.3 50,88.6 100,88.6" />
        <polygon points="75,54.9 58.3,83.8 91.7,83.8" />
        <polygon points="75,64.5 66.7,79.0 83.3,79.0" />
      </g>
    </svg>
    <div style={{ 
      marginTop: '6px', 
      fontSize: '15px', 
      fontWeight: '800', 
      letterSpacing: '1px', 
      background: 'linear-gradient(180deg, #4AEDED 0%, #E0FFFF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: 'var(--font-display), sans-serif',
      lineHeight: '1'
    }}>
      HET ROY
    </div>
  </div>
);

export default function Navigation({ sections, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <>
      <header className="nav-root">
        <div className="nav-logo" onClick={() => handleNavigate('hero')} style={{ cursor: 'pointer', padding: '8px 0', display: 'flex' }}>
          <Logo />
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className="nav-link"
              onClick={() => handleNavigate(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="nav-burger"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className="nav-burger-line"
            style={open ? { transform: 'rotate(45deg) translateY(8px)' } : undefined}
          />
          <span
            className="nav-burger-line"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="nav-burger-line"
            style={open ? { transform: 'rotate(-45deg) translateY(-8px)' } : undefined}
          />
        </button>
      </header>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className="nav-mobile-link"
              onClick={() => handleNavigate(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}

