import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PHRASES = [
  'Aspiring Full Stack Developer',
  'MERN Stack Focused',
  'Crafting Clean Web Experiences',
];

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-2.257-1.825-5.654-1.545-7.556.568l-1.164 1.251L13.65 2.45c.446-.446.401-1.11-.11-1.458A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
  </svg>
);

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Het-Roy', Icon: GitHubIcon },
  { label: 'Twitter / X', href: 'https://x.com/HettRoyy', Icon: TwitterIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/het-roy-73879739a/', Icon: LinkedInIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@HetRoyCG', Icon: YoutubeIcon },
  { label: 'LeetCode', href: 'https://leetcode.com/u/HetRoy-2006/', Icon: LeetCodeIcon },
  { label: 'Instagram', href: 'https://instagram.com/', Icon: InstagramIcon },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.6, ease: 'easeOut' },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut', delay: 0.2 } },
};

export default function HeroSection({ onSecondaryCta }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const imageRef = useRef(null);
  const tiltRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const run = () => {
      const phrase = PHRASES[phraseIndex];
      if (!isDeleting) {
        if (currentIndex <= phrase.length) {
          setTypedText(phrase.slice(0, currentIndex));
          currentIndex += 1;
          timeoutId = setTimeout(run, 90);
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            run();
          }, 1400);
        }
      } else if (currentIndex >= 0) {
        setTypedText(phrase.slice(0, currentIndex));
        currentIndex -= 1;
        timeoutId = setTimeout(run, 55);
      } else {
        isDeleting = false;
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    };

    timeoutId = setTimeout(run, 400);
    return () => clearTimeout(timeoutId);
  }, [phraseIndex]);

  const handleImageMouseMove = (e) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = -dy * 10;
    const rotY = dx * 10;
    tiltRef.current = { x: rotX, y: rotY };
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  };

  const handleImageMouseLeave = () => {
    const el = imageRef.current;
    if (!el) return;
    el.style.transform = '';
  };

  return (
    <section id="hero" className="section hero-wrapper">
      <div className="hero-inner">
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              fontSize: 'clamp(11px, 1.6vw, 13px)',
              fontFamily: 'var(--font-display)',
              color: 'var(--accent-secondary)',
              letterSpacing: '3px',
              marginBottom: 'clamp(14px, 2vh, 18px)',
              textTransform: 'uppercase',
            }}
          >
            Full Stack Developer
          </motion.div>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontSize: 'clamp(40px, 8vw, 82px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 'clamp(18px, 3vh, 26px)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Het Roy
          </motion.h1>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontSize: 'clamp(18px, 3.5vw, 28px)',
              marginBottom: 'clamp(26px, 4vh, 36px)',
              minHeight: 'clamp(36px, 6vh, 54px)',
              fontFamily: 'var(--font-display)',
            }}
          >
            <span style={{ color: 'var(--accent-secondary)', display: 'inline-flex', alignItems: 'center' }}>
              {typedText}
              <span
                style={{
                  display: 'inline-block',
                  width: 3,
                  height: '1em',
                  marginLeft: 6,
                  background: 'var(--accent-secondary)',
                  animation: 'blink 1s infinite',
                }}
              />
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-row"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.a
              href="https://drive.google.com/file/d/1nXOWW0LuKzsfMwoZN1iCrjSxzm2p3ch0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              VIEW RESUME
            </motion.a>
            <motion.button
              type="button"
              className="btn-outline"
              onClick={onSecondaryCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social-row"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero Image with tilt */}
        <motion.div
          ref={imageRef}
          className="hero-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          onMouseMove={handleImageMouseMove}
          onMouseLeave={handleImageMouseLeave}
          style={{ transition: 'transform 0.15s ease, box-shadow 0.35s ease' }}
        >
          <div className="hero-image-inner">
            <img
              src="https://res.cloudinary.com/dwpjwccxd/image/upload/v1774685258/bgremovedMyImage_cropped_kw5djr.jpg"
              alt="Roy Het Jayeshkumar portrait"
              loading="eager"
              decoding="async"
            />
            <div className="hero-image-overlay" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-bar" />
        <div className="scroll-indicator-label">SCROLL</div>
      </div>
    </section>
  );
}
