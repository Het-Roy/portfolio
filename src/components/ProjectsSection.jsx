import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MongoIcon, NodeIcon, ReactIcon, JSIcon } from './TechnologyIcon.jsx';
import Carousel from './Carousel.jsx';
import { useGlowTracking } from './GlowWrapper.jsx';

const PROJECTS = [
  {
    title: 'Taylor Stitch',
    description:
      'A full-stack e-commerce experience with an AI-assisted shopping flow, built with React, Node.js, and MongoDB. Includes product discovery, cart management, and an admin view.',
    github: 'https://github.com/Het-Roy/project/tree/het/taylorStitch',
    live: 'https://hetroy-taylorstitch.netlify.app/',
    youtube: 'https://youtu.be/V4DdGLpUJ-E?si=DK-JivLrwvw6pjl4',
    tech: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    color: 'var(--accent-secondary)',
    accentRGB: '34, 197, 94', // #22c55e -> 34, 197, 94
    previewImage: 'https://res.cloudinary.com/dwpjwccxd/image/upload/v1773652464/taylorstitch_hujjv9.png',
  },
  {
    title: 'Big Basket',
    description:
      'A responsive grocery e-commerce front-end clone built to replicate the BigBasket shopping experience with clean category navigation, product listings, and cart functionality.',
    github: 'https://github.com/Het-Roy/project/tree/het/bigBasket',
    live: 'https://hetroy-bigbasket.netlify.app/',
    youtube: '#',
    tech: ['React', 'JavaScript'],
    color: '#84cc16',
    accentRGB: '132, 204, 22',
    previewImage: 'https://res.cloudinary.com/dwpjwccxd/image/upload/v1773652749/bigbasket_jpbaks.png',
  },
  {
    title: 'Hindustan Times',
    description:
      'A pixel-accurate news portal front-end clone featuring dynamic article layouts, category filters, and a responsive grid designed to match the Hindustan Times reading experience.',
    github: 'https://github.com/Het-Roy/project/tree/het/hindustanTimes',
    live: 'https://hetroy-hindustantimes.netlify.app/',
    youtube: 'https://youtu.be/B8IzTf9F2_s?si=fFIOJqTjmkc6Oznf',
    tech: ['React', 'JavaScript'],
    color: '#f97316',
    accentRGB: '249, 115, 22',
    previewImage: 'https://res.cloudinary.com/dwpjwccxd/image/upload/v1773652557/hindustantimes_jlfmyn.png',
  },
  {
    title: 'InDrive',
    description:
      'A ride-hailing application UI clone inspired by InDrive, featuring ride booking flows, driver matching screens, and a modern dark-mode interface built with React.',
    github: 'https://github.com/Het-Roy/project/tree/het/inDrive',
    live: 'https://hetroy-indrive.netlify.app/',
    youtube: 'https://youtu.be/QsRTTQAfC84?si=0XAF5-kgrb6hye4C',
    tech: ['React', 'Node.js', 'JavaScript'],
    color: '#38bdf8',
    accentRGB: '56, 189, 248',
    previewImage: 'https://res.cloudinary.com/dwpjwccxd/image/upload/v1773652844/indrive_gzmkqj.
  },
];

const techIconFor = (tech) => {
  switch (tech) {
    case 'React': return <ReactIcon />;
    case 'Node.js': return <NodeIcon />;
    case 'MongoDB': return <MongoIcon />;
    case 'JavaScript': return <JSIcon />;
    default: return null;
  }
};

const PreviewPlaceholder = ({ color, title }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: `linear-gradient(135deg, rgba(127,90,240,0.15), ${color}22)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#555',
      textTransform: 'uppercase',
      padding: '20px',
      textAlign: 'center',
    }}
  >
    {title}
  </div>
);

function ProjectCard({ project, index, onOpen, isCenter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  useGlowTracking(ref);

  return (
    <motion.article
      ref={ref}
      className="gcard-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      onClick={() => isCenter && onOpen(project)}
      style={{
        cursor: isCenter ? 'pointer' : 'default',
        boxShadow: isCenter ? `0 0 40px ${project.color}30` : 'none',
        transition: 'box-shadow 0.4s ease',
        margin: '0 auto',
        '--card-accent-rgb': project.accentRGB || '127, 90, 240',
        borderRadius: '22px' // Required for gcard-wrapper
      }}
    >
      <div className="project-card-v2 gcard-inner" style={{ borderRadius: 'inherit', background: '#121218' }}>
        {/* Left: Content */}
        <div className="project-card-content">
          <div style={{ textAlign: 'center' }}>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.8vw, 26px)',
                marginBottom: 8,
                color: project.color,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#b0b0b0',
                lineHeight: 1.75,
                fontFamily: 'var(--font-body)',
              }}
            >
              {project.description}
            </p>
          </div>

          <div className="project-meta" aria-label={`${project.title} tech stack`}>
            {project.tech.map((tech) => (
              <span key={tech} className="project-tag">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {techIconFor(tech)}
                  <span>{tech}</span>
                </span>
              </span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ paddingBlock: 10, paddingInline: 18, borderRadius: 999, fontSize: 11 }}
              onClick={(e) => e.stopPropagation()}
            >
              GITHUB
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ paddingBlock: 10, paddingInline: 18, borderRadius: 999, fontSize: 11 }}
              onClick={(e) => e.stopPropagation()}
            >
              LIVE DEMO
            </a>
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ paddingBlock: 10, paddingInline: 18, borderRadius: 999, fontSize: 11, borderColor: '#a259ff', color: '#a259ff' }}
                onClick={(e) => e.stopPropagation()}
              >
                FIGMA
              </a>
            )}
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yt"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YOUTUBE DEMO
            </a>
          </div>
        </div>

        {/* Right: Preview Image */}
        <div className="project-card-preview">
          {project.previewImage ? (
            <img src={project.previewImage} alt={`${project.title} preview`} />
          ) : (
            <PreviewPlaceholder color={project.color} title={project.title} />
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section" style={{ overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle" style={{ marginBottom: 'clamp(32px, 5vh, 48px)' }}>
          A selection of work that highlights my approach to structure, usability, and modern web stacks.
        </p>

        <Carousel
          items={PROJECTS}
          renderItem={(project, index, isCenter) => (
            <ProjectCard key={project.title} project={project} index={index} isCenter={isCenter} onOpen={setActive} />
          )}
        />
      </div>

      {/* Detail Modal */}
      {active && (
        <motion.div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            zIndex: 30,
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: 760,
              width: '100%',
              background: '#050505',
              borderRadius: 22,
              border: `1px solid ${active.color}`,
              padding: '32px 28px 28px',
              position: 'relative',
            }}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close project details"
              style={{
                position: 'absolute',
                top: 14,
                right: 18,
                border: 'none',
                background: 'transparent',
                color: '#fff',
                fontSize: 26,
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: active.color, fontFamily: 'var(--font-display)' }}>
              {active.title}
            </h3>
            <p style={{ fontSize: 14, color: '#b5b5b5', lineHeight: 1.8, marginBottom: 18, fontFamily: 'var(--font-body)' }}>
              {active.description}
            </p>
            <div className="project-meta" style={{ marginBottom: 18 }}>
              {active.tech.map((tech) => (
                <span key={tech} className="project-tag">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {techIconFor(tech)}
                    <span>{tech}</span>
                  </span>
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={active.github} target="_blank" rel="noopener noreferrer"
                className="btn-outline" style={{ paddingBlock: 10, paddingInline: 18, borderRadius: 999, fontSize: 11 }}>
                VIEW ON GITHUB
              </a>
              <a href={active.live} target="_blank" rel="noopener noreferrer"
                className="btn-primary" style={{ paddingBlock: 10, paddingInline: 18, borderRadius: 999, fontSize: 11 }}>
                LIVE DEMO
              </a>
              {active.figma && (
                <a href={active.figma} target="_blank" rel="noopener noreferrer"
                  className="btn-outline" style={{ paddingBlock: 10, paddingInline: 18, borderRadius: 999, fontSize: 11, borderColor: '#a259ff', color: '#a259ff' }}>
                  FIGMA
                </a>
              )}
              <a href={active.youtube} target="_blank" rel="noopener noreferrer" className="btn-yt">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YOUTUBE DEMO
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
