import React from 'react';
import { Terminal, Calendar, ArrowDownRight, Radio, Skull, Flame, Zap, ShieldAlert, Cpu } from 'lucide-react';
import heroHackerImg from '../assets/images/goth_cyber_hacker_1786666154122.jpg';
import { LUMA_CALENDAR_URL } from '../data/events';

interface HeroSectionProps {
  onScrollToEvents: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToEvents }) => {
  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-black text-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code text-[#64748b] mb-6 pb-2 border-b border-[#222]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-ping" />
            <span className="text-[#39FF14] font-bold tracking-widest">[SYSTEM STATUS: OPERATIONAL]</span>
            <span className="text-[#333]">|</span>
            <span className="hidden sm:inline text-[#94a3b8]">BALTIMORE, MD // 39.2904° N, 76.6122° W</span>
          </div>
          <div className="flex items-center gap-4 font-bold text-xs">
            <span className="text-[#00FFFF]">[RUBY: 3.4.x]</span>
            <span className="text-[#FF00FF]">[RAILS: 8.0]</span>
            <span className="text-[#39FF14]">[MEETUP: MONTHLY]</span>
          </div>
        </div>

        {/* Primary Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Bento Cell 1: Main Hero Directive (Col 7) */}
          <div className="md:col-span-12 lg:col-span-7 bg-[#050505] p-6 sm:p-8 bento-box-green flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-[#39FF14] text-[#39FF14] text-xs font-mono-code font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                <Skull className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>CHARM CITY UNDERGROUND COLLECTIVE</span>
                <span className="text-[#444]">///</span>
                <span className="text-[#00FFFF]">EST. 2008</span>
              </div>

              {/* Display Heading */}
              <div className="space-y-1">
                <h1 className="font-gothic text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#39FF14] leading-none drop-shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                  Bmore on Rails
                </h1>
                <p className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#00FFFF] uppercase tracking-wider">
                  Baltimore&apos;s Premier Technical Meetup
                </p>
              </div>

              {/* Meetup Description */}
              <p className="text-base sm:text-lg text-[#cbd5e1] font-mono-code leading-relaxed border-l-4 border-[#39FF14] pl-4 bg-black/60 py-2">
                A monthly gathering for cool nerds who do amazing things. We build software, not too much, mostly in Ruby, sometimes with Rails.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToEvents}
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#39FF14] text-black font-mono-code font-black text-sm tracking-wider uppercase transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] active:translate-y-0.5"
              >
                <span>UPCOMING EVENTS</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>

              <a
                href={LUMA_CALENDAR_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black hover:bg-[#00FFFF] text-[#00FFFF] hover:text-black border border-[#00FFFF] font-mono-code font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
              >
                <Calendar className="w-4 h-4" />
                <span>JOIN ON LUMA</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-[#94a3b8] hover:text-white font-mono-code text-xs tracking-widest uppercase hover:underline"
              >
                <Terminal className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>TECH SPECS</span>
              </a>
            </div>
          </div>

          {/* Bento Cell 2: Hero Visual / CRT Session (Col 5) */}
          <div className="md:col-span-12 lg:col-span-5 bg-black p-4 bento-box-magenta bento-pattern-magenta flex flex-col justify-between">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-black border border-[#FF00FF] text-[11px] font-mono-code text-[#FF00FF] mb-3 font-bold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF00FF] inline-block" />
                <span className="text-white">TTY://BMORE-CORE-HACKER</span>
              </div>
              <span className="text-[#39FF14]">[LIVE_RECORDING]</span>
            </div>

            {/* Hacker Graphic */}
            <div className="relative overflow-hidden aspect-video sm:aspect-[4/3] lg:aspect-[16/12] bg-black border-2 border-[#FF00FF]">
              <img
                src={heroHackerImg}
                alt="Baltimore Rubyist Hacker in Cyberpunk Terminal Session"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-125 saturate-110 brightness-95"
              />
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 scanlines opacity-50" />

              {/* HUD labels */}
              <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/90 border border-[#00FFFF] text-[10px] font-mono-code flex items-center justify-between text-[#00FFFF]">
                <span>PID: 41829 // RUBY_VM_CORE</span>
                <span className="text-[#39FF14] font-bold">FPS: 60.0</span>
              </div>
            </div>

            {/* Sub telemetry */}
            <div className="mt-3 p-2 bg-black border border-[#333] flex items-center justify-between text-[10px] font-mono-code text-[#94a3b8]">
              <span className="text-[#e2e8f0]">ENGAGEMENT: MAXIMUM</span>
              <span className="text-[#FF00FF] font-bold">NODE://BMORE.TECH</span>
            </div>
          </div>

          {/* Bento Cell 3: Manifesto Quote (Col 8) */}
          <div className="md:col-span-12 lg:col-span-8 bg-[#060606] p-6 bento-box-cyan flex flex-col justify-between relative">
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#00FFFF] mb-3 uppercase tracking-widest">
              <Flame className="w-4 h-4 text-[#00FFFF]" />
              <span>COMMUNITY MANIFESTO & ETHOS</span>
            </div>
            
            <blockquote className="font-mono-code italic text-sm sm:text-base text-[#f1f5f9] leading-relaxed border-l-2 border-[#00FFFF] pl-4 my-2">
              &ldquo;We descend upon Charm City each month to forge unbreakable systems, dismantle bloated abstractions, and celebrate the pure, visceral joy of writing clean Ruby code.&rdquo;
            </blockquote>

            <div className="mt-4 flex items-center justify-between text-xs font-mono-code pt-3 border-t border-[#1a1a1a]">
              <span className="text-[#64748b]">STATUS: UNCOMPROMISED CRAFTSMANSHIP</span>
              <span className="text-[#00FFFF] font-bold tracking-wider">— Bmore on Rails Council</span>
            </div>
          </div>

          {/* Bento Cell 4: Quick Metrics & Info (Col 4) */}
          <div className="md:col-span-12 lg:col-span-4 bg-[#0a0a0a] p-6 bento-box-white flex flex-col justify-between space-y-4">
            <div className="text-xs font-mono-code font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#39FF14]" />
              <span>MEETUP PARAMETERS</span>
            </div>

            <div className="space-y-2.5 text-xs font-mono-code">
              <div className="p-2.5 bg-black border border-[#222] flex items-center justify-between">
                <span className="text-[#94a3b8] flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-[#39FF14]" /> SCHEDULE
                </span>
                <span className="text-white font-bold">3rd Thursday / Mo</span>
              </div>
              <div className="p-2.5 bg-black border border-[#222] flex items-center justify-between">
                <span className="text-[#94a3b8] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FF00FF]" /> ADMISSION
                </span>
                <span className="text-[#39FF14] font-bold">100% Free / Open</span>
              </div>
              <div className="p-2.5 bg-black border border-[#222] flex items-center justify-between">
                <span className="text-[#94a3b8] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00FFFF]" /> COMMUNITY
                </span>
                <span className="text-[#00FFFF] font-bold">All Levels Welcome</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

