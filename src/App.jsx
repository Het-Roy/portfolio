import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import DesignsPage from './pages/DesignsPage.jsx';
import HackathonPage from './pages/HackathonPage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/designs" element={<DesignsPage />} />
      <Route path="/hackathon" element={<HackathonPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
