import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../components/Background.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navigation from '../components/Navigation.jsx';
import HackathonCard from '../components/HackathonCard.jsx';
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

export default function HackathonPage() {
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
        <title>Hackathon Experience & Achievements | Het Roy Portfolio</title>
        <meta name="description" content="Read about Het Roy's competitive programming and hackathon experiences, awards, teamwork, and the innovative technological solutions built under pressure." />
        <meta name="keywords" content="Het Roy Hackathons, Competitive Programming, Tech Achievements, Hackathon Winner, Codefest, Tech Competitions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-hetroy.vercel.app/hackathon" />
        <meta property="og:title" content="Hackathon Experience & Achievements | Het Roy Portfolio" />
        <meta property="og:description" content="Read about Het Roy's competitive programming and hackathon experiences, awards, teamwork, and the innovative technological solutions built under pressure." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hackathon Experience & Achievements | Het Roy Portfolio" />
        <meta name="twitter:description" content="Read about Het Roy's competitive programming and hackathon experiences, awards, teamwork, and the innovative technological solutions built under pressure." />
        <link rel="canonical" href="https://portfolio-hetroy.vercel.app/hackathon" />
      </Helmet>
      <Background />
      <CustomCursor position={cursorPos} />
      <Navigation sections={SECTIONS} onNavigate={(id) => navigate(id)} />
      <main className="app-scroll-container">
        <div id="hackathon">
          <HackathonCard />
        </div>
        <Footer />
      </main>
    </div>
  );
}
