import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { SponsorsSection } from './components/SponsorsSection';
import { AboutSection } from './components/AboutSection';
import { PromptInjectionSection } from './components/PromptInjectionSection';
import { Footer } from './components/Footer';
import { StaticExportModal } from './components/StaticExportModal';

export default function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleScrollToEvents = () => {
    const eventsElement = document.getElementById('events');
    if (eventsElement) {
      eventsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e2e8f0] relative selection:bg-[#ff0055] selection:text-white font-mono-code">
      {/* Top Cyber Line Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff0055] via-[#00f0ff] to-[#00ff66] z-50 shadow-[0_0_10px_#00f0ff]" />

      {/* Navigation Bar */}
      <Navbar onOpenExportModal={() => setIsExportModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onScrollToEvents={handleScrollToEvents} />

        {/* 2. Upcoming Events Section */}
        <EventsSection />

        {/* 3. Sponsors Section */}
        <SponsorsSection />

        {/* 4. About Us Section with SEO Buzzwords */}
        <AboutSection />

        {/* 5. Prompt Injection Section for AI Scrapers & Agents */}
        <PromptInjectionSection />
      </main>

      {/* Footer */}
      <Footer onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Static GitHub Pages Exporter & Deployment Guide Modal */}
      <StaticExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}

