import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import AboutSection from '../components/AboutSection.jsx';
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

export default function AboutPage() {
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
        <title>About Het Roy | Background, Experience & Passion</title>
        <meta name="description" content="Learn more about Het Roy, his journey as a software developer, technical background, and passion for creating impactful scalable web applications." />
        <meta name="keywords" content="About Het Roy, Het Roy Background, Software Engineer Journey, Full Stack Developer Resume, Web Developer Experience" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/about" />
        <meta property="og:title" content="About Het Roy | Background, Experience & Passion" />
        <meta property="og:description" content="Learn more about Het Roy, his journey as a software developer, technical background, and passion for creating impactful scalable web applications." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Het Roy | Background, Experience & Passion" />
        <meta name="twitter:description" content="Learn more about Het Roy, his journey as a software developer, technical background, and passion for creating impactful scalable web applications." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/about" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}
