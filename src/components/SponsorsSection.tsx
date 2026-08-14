import React from 'react';
import { Shield, ExternalLink, Flame, Cpu, Terminal } from 'lucide-react';
import { SPONSORS } from '../data/sponsors';
import { SponsorIcon } from './SponsorBadges';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-12 md:py-20 bg-black text-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Bento Tile */}
        <div className="p-6 md:p-8 bg-[#050505] bento-box-magenta mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-[#FF00FF] text-[#FF00FF] text-xs font-mono-code font-bold tracking-widest uppercase">
              <Shield className="w-3.5 h-3.5 text-[#FF00FF]" />
              <span>COMMUNITY BACKERS & PATRONS</span>
            </div>

            <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF00FF] tracking-tight">
              Our Sponsors
            </h2>

            <p className="text-[#94a3b8] font-mono-code text-sm sm:text-base leading-relaxed max-w-2xl">
              The visionary institutions, industrial titans, and creative giants empowering Baltimore&apos;s underground developer ecosystem.
            </p>
          </div>

          <div className="p-3 bg-black border border-[#FF00FF]/50 text-xs font-mono-code text-[#00FFFF] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            <span>NODE ALLIANCES: ACTIVE</span>
          </div>
        </div>

        {/* Sponsor Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {SPONSORS.map((sponsor) => {
            return (
              <div
                key={sponsor.id}
                className="group relative bg-[#050505] bento-box-white hover:border-[#39FF14] transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                {/* Top Tier Tag */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#222]">
                  <span 
                    className="text-[10px] font-mono-code font-bold uppercase tracking-widest px-2 py-0.5 border"
                    style={{ 
                      color: sponsor.accentColor, 
                      borderColor: `${sponsor.accentColor}88`,
                      backgroundColor: `${sponsor.accentColor}15`
                    }}
                  >
                    {sponsor.tier} TIER
                  </span>
                  <span className="text-[10px] font-mono-code text-[#64748b]">
                    // {sponsor.id.toUpperCase()}
                  </span>
                </div>

                {/* Logo & Visual Mark */}
                <div className="my-6 flex flex-col items-center text-center space-y-4">
                  <div 
                    className="w-20 h-20 p-3 bg-black border border-[#222] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#39FF14]"
                    style={{ color: sponsor.accentColor }}
                  >
                    <SponsorIcon type={sponsor.svgIconType} className="w-14 h-14 transition-transform duration-300" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#39FF14] transition-colors">
                      {sponsor.name}
                    </h3>
                    <p className="text-xs font-mono-code text-[#94a3b8] leading-tight">
                      {sponsor.tagline}
                    </p>
                  </div>
                </div>

                {/* Sponsor Category & Link */}
                <div className="pt-3 border-t border-[#222] flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[10px] text-[#64748b] truncate mr-2">
                    {sponsor.category}
                  </span>
                  
                  <a
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-[#00FFFF] hover:text-white font-bold hover:underline"
                  >
                    <span>VISIT</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}

          {/* Become a Sponsor Bento Tile */}
          <div className="bg-[#050505] bento-box-magenta p-6 flex flex-col justify-between items-center text-center space-y-4 group">
            <div className="w-full flex items-center justify-between pb-3 border-b border-[#FF00FF]/40 text-[10px] font-mono-code text-[#FF00FF] font-bold">
              <span>CALL FOR ALLIES</span>
              <span>2026/2027</span>
            </div>

            <div className="my-auto space-y-2">
              <div className="w-12 h-12 mx-auto bg-black border border-[#FF00FF] flex items-center justify-center text-[#FF00FF]">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Sponsor Bmore on Rails
              </h3>
              <p className="text-xs font-mono-code text-[#94a3b8]">
                Feed hungry developers, support open source talks, and recruit top engineering talent in Baltimore.
              </p>
            </div>

            <a
              href="mailto:organizers@bmoreonrails.org?subject=Bmore%20on%20Rails%20Sponsorship"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FF00FF] hover:bg-white text-black font-mono-code font-black text-xs uppercase tracking-wider transition-all"
            >
              <span>BECOME A SPONSOR</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

