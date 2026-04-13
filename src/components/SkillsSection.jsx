import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILL_GROUPS = [
  {
    category: 'Core',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5 & Semantic Markup'],
    color: '#7f5af0'
  },
  {
    category: 'Frontend',
    skills: ['React', 'React Hooks', 'Responsive UI & Accessibility'],
    color: '#22c55e'
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'RESTful APIs'],
    color: '#3b82f6'
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose', 'Data Modeling'],
    color: '#f59e0b'
  },
  {
    category: 'Tooling',
    skills: ['Git & GitHub', 'Vite', 'ESLint & Formatting'],
    color: '#ef4444'
  },
  {
    category: 'Design',
    skills: ['Figma', 'UI/UX Fundamentals', 'Interaction Design'],
    color: '#ec4899'
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      // Unified entrance for grid cards
      gsap.from('.card-surface', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
        },
        y: 80,
        rotateX: -15,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Technical Mastery</h2>
        <p className="section-subtitle" style={{ marginBottom: '4rem' }}>
          Combining performance with clean code to build scalable web ecosystems.
        </p>

        <div className="skills-grid" ref={gridRef}>
          {SKILL_GROUPS.map((group, idx) => (
            <motion.article 
              key={group.category} 
              className="card-surface"
              initial={{ y: 0 }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                boxShadow: `0 25px 50px ${group.color}33`,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 // Lower damping for a more 'bouncy' feel
              }}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${group.color}33`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: group.color
                }}
              />
              <div className="skills-category-title" style={{ color: group.color }}>{group.category}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.skills.map((skill) => (
                  <motion.div 
                    key={skill} 
                    className="skill-pill"
                    whileHover={{ 
                      x: 8, 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                  >
                    <span className="skills-category-name">{skill}</span>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: group.color,
                        boxShadow: `0 0 12px ${group.color}`
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      
      {/* Dynamic Background Glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
        opacity: 0.1,
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
        opacity: 0.08,
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
    </section>
  );
}

