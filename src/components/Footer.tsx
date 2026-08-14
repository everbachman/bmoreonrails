import React from 'react';
import { CyberCrabLogo } from './CyberCrabLogo';
import { Terminal, Github, ExternalLink, ShieldCheck, Heart, Radio } from 'lucide-react';
import { LUMA_CALENDAR_URL } from '../data/events';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  return (
    <footer className="bg-black border-t-2 border-[#39FF14] pt-12 pb-8 text-[#94a3b8] font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-[#222]">
          
          {/* Col 1: Brand & Identity Bento Box */}
          <div className="md:col-span-5 p-6 bg-[#050505] bento-box-green space-y-4">
            <CyberCrabLogo size={40} showText={true} />
            <p className="text-xs text-[#cbd5e1] leading-relaxed max-w-sm">
              Baltimore&apos;s premier monthly gathering for software engineers, hackers, and craftsmen. Mostly in Ruby, sometimes with Rails.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#39FF14]">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              <span>COMMUNITY NODE: BALTIMORE, MD (39.2904° N, 76.6122° W)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links Bento Box */}
          <div className="md:col-span-3 p-6 bg-[#050505] bento-box-magenta space-y-3">
            <div className="text-xs font-bold text-[#FF00FF] uppercase tracking-wider mb-2">
              // DIRECT NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#39FF14] text-[#cbd5e1] transition-colors">
                  &gt; Top / Manifesto
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#39FF14] text-[#cbd5e1] transition-colors">
                  &gt; Upcoming Meetups
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-[#39FF14] text-[#cbd5e1] transition-colors">
                  &gt; Meetup Sponsors
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#39FF14] text-[#cbd5e1] transition-colors">
                  &gt; About Us & Tech Matrix
                </a>
              </li>
              <li>
                <a href={LUMA_CALENDAR_URL} target="_blank" rel="noreferrer" className="hover:text-[#00FFFF] text-[#00FFFF] transition-colors font-bold">
                  &gt; Luma Calendar Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: GitHub Pages Deployment & Repos Bento Box */}
          <div className="md:col-span-4 p-6 bg-[#050505] bento-box-cyan space-y-3">
            <div className="text-xs font-bold text-[#00FFFF] uppercase tracking-wider mb-2">
              // GITHUB PAGES & DEPLOYMENT
            </div>
            <p className="text-[11px] text-[#94a3b8]">
              Static HTML/CSS/JS ready to deploy onto GitHub Pages repo (`bmoreonrails.github.io`).
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenExportModal}
                className="w-full inline-flex items-center justify-center gap-2 p-2.5 bg-black hover:bg-[#00FFFF] text-[#00FFFF] hover:text-black border border-[#00FFFF] text-xs font-bold uppercase transition-all"
              >
                <span>INSPECT GITHUB PAGES STATIC FILES</span>
                <ExternalLink className="w-3 h-3" />
              </button>

              <a
                href="https://bmoreonrails.github.io/"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 p-2 bg-black hover:bg-[#111] text-[#94a3b8] hover:text-white border border-[#222] text-[11px] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>BMOREONRAILS.GITHUB.IO</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <div>
            &copy; {new Date().getFullYear()} Bmore on Rails. Built for Baltimore developers. No tracking. No fluff.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#FF00FF]">NO EMOJIS POLICY ENFORCED</span>
            <span>|</span>
            <span className="text-[#39FF14]">BENTO GRID ARCHITECTURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

