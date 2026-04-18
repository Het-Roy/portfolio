import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import ContactSection from '../components/ContactSection.jsx';
import SocialLinksSection from '../components/SocialLinksSection.jsx';
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

export default function ContactPage() {
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
        <title>Contact Het Roy | Hire a Full Stack Developer</title>
        <meta name="description" content="Get in touch with Het Roy for freelance work, full-time job opportunities, collaborations, or tech networking. Reach out via email, LinkedIn, or GitHub." />
        <meta name="keywords" content="Contact Het Roy, Hire React Developer, Freelance Web Developer, Software Engineer Contact, Tech Networking, Hire SDE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/contact" />
        <meta property="og:title" content="Contact Het Roy | Hire a Full Stack Developer" />
        <meta property="og:description" content="Get in touch with Het Roy for freelance work, full-time job opportunities, collaborations, or tech networking. Reach out via email, LinkedIn, or GitHub." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Het Roy | Hire a Full Stack Developer" />
        <meta name="twitter:description" content="Get in touch with Het Roy for freelance work, full-time job opportunities, collaborations, or tech networking. Reach out via email, LinkedIn, or GitHub." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/contact" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <SocialLinksSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
