import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import FigmaSection from '../components/FigmaSection.jsx';
import CertificatesSection from '../components/CertificatesSection.jsx';
import HackathonCard from '../components/HackathonCard.jsx';
import EducationSection from '../components/EducationSection.jsx';
import SocialLinksSection from '../components/SocialLinksSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

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

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

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

  return (
    <div className="app-root">
      <Helmet>
        <title>Het Roy | Portfolio</title>
        <meta name="description" content="Portfolio of Het Roy, a Full Stack Developer & SDE. Showcasing projects built with React, Vite, and modern web technologies." />
        <meta name="keywords" content="het roy portfolio, portfolio, het roy, sde portfolio, react, vite, HET ROY, Het Roy" />
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

      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />

      <main className="app-scroll-container">
        <HeroSection onSecondaryCta={() => navigate('/contact')} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FigmaSection />
        <div id="hackathon">
          <HackathonCard />
        </div>
        <CertificatesSection />
        <SocialLinksSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
