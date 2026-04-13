import React, { useEffect, useRef } from 'react';

const EDUCATION_STEPS = [
  {
    title: 'Foundations in Computer Science',
    institution: 'High School & Early Academics',
    year: '2018 – 2020',
    description:
      'Built a strong foundation in programming fundamentals, problem solving, and core mathematics, sparking a long‑term interest in software development.',
  },
  {
    title: 'Focused Web Development Learning',
    institution: 'Self‑Directed Study & Online Platforms',
    year: '2021 – 2023',
    description:
      'Dived into HTML, CSS, and JavaScript, building small projects and clones to internalize layouts, responsive design, and the basics of frontend engineering.',
  },
  {
    title: 'MERN Stack & Full Stack Thinking',
    institution: 'MERN‑Oriented Courses & Projects',
    year: '2023 – Present',
    description:
      'Specialized in the MERN stack, working on hands‑on projects that combine React, Node.js, Express, and MongoDB, with emphasis on clean architecture and APIs.',
  },
  {
    title: 'Continuous Learning & Portfolio Growth',
    institution: 'Workshops, Documentation, and Community',
    year: 'Ongoing',
    description:
      'Actively refining skills in performance, scalability, and maintainable patterns while expanding this portfolio with new experiments and real‑world use cases.',
  },
];

export default function EducationSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('.fade-in-up');
    if (!nodes || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section">
      <div ref={containerRef} style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 className="section-title">Education Journey</h2>
        <p className="section-subtitle">
          A vertical look at how my interests, skills, and discipline in web development have
          evolved over time.
        </p>

        <div className="timeline">
          {EDUCATION_STEPS.map((step) => (
            <div key={step.title} className="timeline-item fade-in-up">
              <div className="timeline-dot" />
              <article className="timeline-card">
                <h3 className="timeline-title">{step.title}</h3>
                <div className="timeline-meta">
                  {step.institution} · {step.year}
                </div>
                <p className="timeline-body">{step.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

