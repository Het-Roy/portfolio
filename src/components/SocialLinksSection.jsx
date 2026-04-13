import React from 'react';

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/Het-Roy',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/het-roy-73879739a/',
  },
  {
    label: 'X',
    href: 'https://x.com/HettRoyy',
  },
];

export default function SocialLinksSection() {
  return (
    <section id="social-links" className="section">
      <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title">Connect With Me</h2>
        <p className="section-subtitle">
          I&apos;m always open to discussing new projects, learning opportunities, or simply talking
          about web development and good engineering practices.
        </p>

        <div className="social-grid">
          {SOCIAL.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                }}
              >
                {item.label[0]}
              </div>
              <span className="social-label">{item.label.toUpperCase()}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

