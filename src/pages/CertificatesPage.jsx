import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import CertificatesSection from '../components/CertificatesSection.jsx';
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

export default function CertificatesPage() {
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
        <title>Certifications & Awards | Het Roy Portfolio</title>
        <meta name="description" content="View Het Roy's extensive professional certifications, course completion badges, and academic awards in computer science and full-stack web development." />
        <meta name="keywords" content="Het Roy Certificates, Tech Certifications, Web Development Awards, Professional Recognition, Software Developer Certs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/certificates" />
        <meta property="og:title" content="Certifications & Awards | Het Roy Portfolio" />
        <meta property="og:description" content="View Het Roy's extensive professional certifications, course completion badges, and academic awards in computer science and full-stack web development." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certifications & Awards | Het Roy Portfolio" />
        <meta name="twitter:description" content="View Het Roy's extensive professional certifications, course completion badges, and academic awards in computer science and full-stack web development." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/certificates" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <CertificatesSection />
        <Footer />
      </main>
    </div>
  );
}
