import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SUBSECTIONS = [
  {
    tag: 'Identity',
    heading: 'Who I Am',
    body: "I'm Roy Het Jayeshkumar — an aspiring full stack developer with a strong focus on the MERN stack. I'm passionate about turning complex ideas into clean, intuitive digital products that genuinely work well for the people using them.",
  },
  {
    tag: 'Craft',
    heading: 'What I Build',
    body: 'I build full stack web applications with React on the frontend and Node.js with MongoDB on the backend. My work prioritizes fast load times, responsive design, and interfaces that feel natural and polished at every breakpoint.',
  },
  {
    tag: 'Process',
    heading: 'How I Work',
    body: "I write scalable, maintainable code by following established patterns and best practices. I care about clear architecture, readable logic, and thoughtful API design — the foundations that make a codebase a pleasure to revisit and extend.",
  },
  {
    tag: 'Drive',
    heading: 'What Drives Me',
    body: "Continuous learning is core to how I operate. I actively explore modern web technologies, refine how I structure projects, and study how design and engineering intersect. My goal is to build things that are both technically sound and genuinely meaningful.",
  },
];

function SubsectionCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="about-subsection"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.12 }}
    >
      <div className="about-subsection-tag">{item.tag}</div>
      <h3 className="about-subsection-heading">{item.heading}</h3>
      <p className="about-subsection-body">{item.body}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle" style={{ marginBottom: 'clamp(32px, 5vh, 48px)' }}>
            A developer who cares about both the code and the experience it creates.
          </p>
        </motion.div>

        <div className="about-grid">
          {SUBSECTIONS.map((item, i) => (
            <SubsectionCard key={item.heading} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
