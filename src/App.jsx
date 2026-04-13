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
import SocialLinksSection from './components/SocialLinksSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
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
        <EducationSection />
        <SocialLinksSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
