import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import EducationSection from '../components/EducationSection.jsx';
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
  { id: '/education', label: 'Education' },
  { id: '/contact', label: 'Contact' },
];

export default function EducationPage() {
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
        <title>Education & Academics | Het Roy Portfolio</title>
        <meta name="description" content="Explore Het Roy's educational background, academic achievements, universities attended, and foundational learning in Computer Science and software engineering." />
        <meta name="keywords" content="Het Roy Education, Academic Background, Computer Science Degree, Software Engineering Education, Student Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/education" />
        <meta property="og:title" content="Education & Academics | Het Roy Portfolio" />
        <meta property="og:description" content="Explore Het Roy's educational background, academic achievements, universities attended, and foundational learning in Computer Science and software engineering." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Education & Academics | Het Roy Portfolio" />
        <meta name="twitter:description" content="Explore Het Roy's educational background, academic achievements, universities attended, and foundational learning in Computer Science and software engineering." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/education" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
}
