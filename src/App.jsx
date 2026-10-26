import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { personalInfo } from './data/portfolioData';
import './App.css';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('aryan_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [selectedOpportunityRole, setSelectedOpportunityRole] = useState('');

  // Handle theme toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('aryan_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('aryan_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: '', type: 'success' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast(`Copied ${personalInfo.email} to clipboard!`);
  };

  const handleSelectOpportunityRole = (roleTitle) => {
    setSelectedOpportunityRole(roleTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Inquiry subject updated for "${roleTitle}"`, 'info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Sticky Glass Navbar */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onCopyEmail={handleCopyEmail} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education & Certification Section */}
        <Education />

        {/* Opportunities Section */}
        <Opportunities onSelectRole={handleSelectOpportunityRole} />

        {/* Contact Section */}
        <Contact
          prefilledSubject={selectedOpportunityRole}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Notifications */}
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'success' })}
        />
      )}
    </div>
  );
}
