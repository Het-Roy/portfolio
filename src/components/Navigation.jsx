import React, { useState } from 'react';

const Logo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
    <img 
      src="https://res.cloudinary.com/dwpjwccxd/image/upload/e_make_transparent:15:black/q_auto/f_auto/v1776427795/Screenshot_2026-04-17_173825_v4hrer.png" 
      alt="Het Roy Logo" 
      style={{ width: '42px', height: 'auto', objectFit: 'contain' }} 
    />
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

