import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

const SECTIONS = [
  { id: '/', label: 'Home' },
  { id: '/about', label: 'About' },
  { id: '/skills', label: 'Skills' },
  { id: '/projects', label: 'Projects' },
  { id: '/designs', label: 'Designs' },
  { id: '/hackathon', label: 'Hackathon' },
  { id: '/certificates', label: 'Certificates' },
  { id: '/contact', label: 'Contact' },
];

export default function SkillsPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="app-root">
      <Helmet>
        <title>Technical Skills & Tech Stack | Het Roy Portfolio</title>
        <meta name="description" content="Discover Het Roy's technical expertise and proficiency including React, Node.js, MongoDB, JavaScript, and other modern frontend and backend technologies." />
        <meta name="keywords" content="Het Roy Skills, React Developer Skills, Node.js, MERN Stack, Frontend Technologies, Software Engineering Tech Stack" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/skills" />
        <meta property="og:title" content="Technical Skills & Tech Stack | Het Roy Portfolio" />
        <meta property="og:description" content="Discover Het Roy's technical expertise and proficiency including React, Node.js, MongoDB, JavaScript, and other modern frontend and backend technologies." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Technical Skills & Tech Stack | Het Roy Portfolio" />
        <meta name="twitter:description" content="Discover Het Roy's technical expertise and proficiency including React, Node.js, MongoDB, JavaScript, and other modern frontend and backend technologies." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/skills" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <SkillsSection />
        <Footer />
      </main>
    </div>
  );
}
