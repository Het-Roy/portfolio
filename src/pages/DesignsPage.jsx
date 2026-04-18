import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import FigmaSection from '../components/FigmaSection.jsx';
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

export default function DesignsPage() {
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
        <title>UI/UX & Figma Designs | Het Roy Portfolio</title>
        <meta name="description" content="Check out Het Roy's UI/UX design concepts, modern layouts, and interactive Figma prototypes, fusing creative aesthetics with practical web development." />
        <meta name="keywords" content="Het Roy Designs, UI/UX Portfolio, Figma Mockups, Web Design, Creative Developer, Frontend UI Design" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/designs" />
        <meta property="og:title" content="UI/UX & Figma Designs | Het Roy Portfolio" />
        <meta property="og:description" content="Check out Het Roy's UI/UX design concepts, modern layouts, and interactive Figma prototypes, fusing creative aesthetics with practical web development." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX & Figma Designs | Het Roy Portfolio" />
        <meta name="twitter:description" content="Check out Het Roy's UI/UX design concepts, modern layouts, and interactive Figma prototypes, fusing creative aesthetics with practical web development." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/designs" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <FigmaSection />
        <Footer />
      </main>
    </div>
  );
}
