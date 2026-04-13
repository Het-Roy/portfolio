import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Carousel from './Carousel.jsx';

const CERTIFICATES = [
  {
    title: 'Introduction of C++',
    issuer: 'Sololearn',
    date: '2026',
    description:
      'Completed a comprehensive basics of C Language',
    link: 'https://www.sololearn.com/certificates/CC-VBZTTB3W',
    image: 'https://api2.sololearn.com/v2/certificates/CC-VBZTTB3W/image/png',
  },
  {
    title: 'C++ Intermediate',
    issuer: 'Sololearn',
    date: '2026',
    description:
      'Deep-dived into advanced C++ concepts.',
    link: 'https://www.sololearn.com/certificates/CC-QWBXGW2W',
    image: 'https://api2.sololearn.com/v2/certificates/CC-QWBXGW2W/image/png',
  },
  {
    title: 'JavaScript Intermediate',
    issuer: 'Sololearn',
    date: '2026',
    description:
      'Learned core principles of JavaScript.',
    link: 'https://www.sololearn.com/certificates/CC-YLXLJSD7',
    image: 'https://api2.sololearn.com/v2/certificates/CC-YLXLJSD7/image/png',
  },
];

function CertCard({ cert, index, isCenter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cardContent = (
    <>
      {cert.image ? (
        <img src={cert.image} alt={cert.title} className="cert-card-image" />
      ) : (
        <div className="cert-card-image-placeholder">
          {cert.issuer}
        </div>
      )}
      <div className="cert-card-body">
        <div className="cert-card-issuer">{cert.issuer}</div>
        <h3 className="cert-card-title">{cert.title}</h3>
        <p className="cert-card-desc">{cert.description}</p>
        <div className="cert-card-date" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{cert.date}</span>
          {cert.link && (
            <span style={{ color: 'var(--accent-secondary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              View ↗
            </span>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      ref={ref}
      className="cert-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      style={{
        boxShadow: isCenter ? `0 0 30px rgba(92, 225, 230, 0.2)` : 'none',
        transition: 'box-shadow 0.5s ease',
        margin: '0 auto',
      }}
    >
      {cert.link ? (
        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.article>
  );
}

export default function CertificatesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="certificates" className="section" style={{ overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">Achievements and Certificates</h2>
          <p className="section-subtitle" style={{ marginBottom: 'clamp(32px, 5vh, 48px)' }}>
            Structured learning that supports my self-driven exploration of full stack engineering and
            interface design.
          </p>
        </motion.div>

        <Carousel 
          items={CERTIFICATES} 
          renderItem={(cert, index, isCenter) => (
            <CertCard key={cert.title} cert={cert} index={index} isCenter={isCenter} />
          )} 
        />
      </div>
    </section>
  );
}
