import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import Background from './components/Background.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navigation from './components/Navigation.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import CertificatesSection from './components/CertificatesSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import HackathonsSection from './components/HackathonsSection.jsx';
import AchievementsSection from './components/AchievementsSection.jsx';
import SocialLinksSection from './components/SocialLinksSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-root">
      <Helmet>
        <title>Het Roy | Portfolio</title>
        <meta name="description" content="Portfolio of Het Roy, a Full Stack Developer & SDE. Showcasing projects built with React, Vite, and modern web technologies." />
        <meta name="keywords" content="het roy portfolio, portfolio, het roy , sde portfolio, react, vite, HET ROY, Het Roy" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Het Roy | Portfolio" />
        <meta property="og:description" content="Explore my projects and skills as a Full Stack Developer." />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />

      {loading && (
        <div className="loading-overlay">
          <div className="loading-logo">HR</div>
          <div className="loading-bar-wrapper">
            <div className="loading-bar" />
          </div>
          <div className="loading-caption">LOADING EXPERIENCE…</div>
        </div>
      )}

      <Navigation sections={SECTIONS} onNavigate={scrollToSection} />

      <main ref={scrollContainerRef} className="app-scroll-container">
        <HeroSection onSecondaryCta={() => scrollToSection('contact')} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <HackathonsSection />
        <AchievementsSection />
        <SocialLinksSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
