import React, { useState } from 'react';
import { CyberCrabLogo } from './CyberCrabLogo';
import { Calendar, Menu, X, Terminal, Shield, FileCode2, ExternalLink } from 'lucide-react';
import { LUMA_CALENDAR_URL } from '../data/events';

interface NavbarProps {
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b-2 border-[#39FF14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center group">
            <CyberCrabLogo size={42} showText={true} />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-mono-code font-bold">
            <a 
              href="#hero" 
              className="text-[#39FF14] hover:text-white transition-colors uppercase tracking-wider py-1 hover:border-b-2 border-[#39FF14]"
            >
              [// HERO]
            </a>
            <a 
              href="#events" 
              className="text-[#00FFFF] hover:text-white transition-colors uppercase tracking-wider py-1 hover:border-b-2 border-[#00FFFF]"
            >
              [// EVENTS]
            </a>
            <a 
              href="#sponsors" 
              className="text-[#FF00FF] hover:text-white transition-colors uppercase tracking-wider py-1 hover:border-b-2 border-[#FF00FF]"
            >
              [// SPONSORS]
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#39FF14] transition-colors uppercase tracking-wider py-1 hover:border-b-2 border-white"
            >
              [// ABOUT US]
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenExportModal}
              title="View static HTML/CSS export for GitHub Pages deployment"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-black hover:bg-[#111111] text-[#00FFFF] border border-[#00FFFF] font-mono-code text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_10px_rgba(0,255,255,0.2)]"
            >
              <FileCode2 className="w-3.5 h-3.5 text-[#00FFFF]" />
              <span className="hidden md:inline">GITHUB PAGES</span> EXPORT
            </button>

            <a
              href={LUMA_CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#39FF14] hover:bg-white text-black font-mono-code font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>RSVP ON LUMA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-black text-[#39FF14] border border-[#39FF14]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b-2 border-[#39FF14] px-4 pt-4 pb-6 space-y-4 font-mono-code text-sm">
          <div className="flex flex-col space-y-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#050505] text-[#39FF14] border-l-4 border-[#39FF14] font-bold uppercase"
            >
              // HERO & MANIFESTO
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#050505] text-[#00FFFF] border-l-4 border-[#00FFFF] font-bold uppercase"
            >
              // UPCOMING EVENTS (LUMA)
            </a>
            <a
              href="#sponsors"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#050505] text-[#FF00FF] border-l-4 border-[#FF00FF] font-bold uppercase"
            >
              // SPONSORS & ALLIES
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#050505] text-white border-l-4 border-white font-bold uppercase"
            >
              // ABOUT US & TECH STACK
            </a>
          </div>

          <div className="pt-2 border-t border-[#222] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 p-2.5 bg-black border border-[#00FFFF] text-[#00FFFF] text-xs uppercase font-bold"
            >
              <FileCode2 className="w-4 h-4" />
              <span>GITHUB PAGES EXPORT CODE</span>
            </button>

            <a
              href={LUMA_CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 p-3 bg-[#39FF14] text-black font-black text-xs uppercase"
            >
              <Calendar className="w-4 h-4" />
              <span>RSVP ON LUMA.COM</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

