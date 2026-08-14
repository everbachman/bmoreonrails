import React, { useState } from 'react';
import { Terminal, Search, Code2, Database, Server, Cpu, Globe, Check, Hash } from 'lucide-react';
import { TECH_BUZZWORDS, MANIFESTO_TEXT } from '../data/buzzwords';

export const AboutSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = TECH_BUZZWORDS.map(cat => {
    const matchingWords = cat.words.filter(word => 
      word.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      words: matchingWords,
      hasMatch: matchingWords.length > 0
    };
  }).filter(cat => selectedCategory ? cat.category === selectedCategory : true);

  return (
    <section id="about" className="py-12 md:py-20 bg-[#030303] text-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Bento Tile */}
        <div className="p-6 md:p-8 bg-[#050505] bento-box-green mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#39FF14] mb-2 uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-[#39FF14]" />
              <span>COMMUNITY DIRECTIVE & ARCHITECTURE</span>
            </div>
            <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#39FF14] font-bold tracking-tight">
              About Us
            </h2>
            <p className="text-[#94a3b8] font-mono-code text-sm sm:text-base mt-2 max-w-3xl">
              Engineered for developer discovery, high Google search indexing, and real Baltimore community impact.
            </p>
          </div>

          <div className="p-3 bg-black border border-[#39FF14]/40 text-xs font-mono-code text-[#39FF14] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            <span>INDEX STATUS: GOOGLEBOT OPTIMIZED</span>
          </div>
        </div>

        {/* Manifesto Terminal Bento Box */}
        <div className="bg-[#050505] bento-box-white p-6 sm:p-8 mb-8 relative">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#222] text-xs font-mono-code text-[#64748b]">
            <span className="text-[#00FFFF] font-bold">[MANIFESTO.RB // CHARM_CITY_CORE]</span>
            <span className="text-[#94a3b8] hidden sm:inline">UTF-8 // CRLF // ZERO-TOLERANCE FOR JARGON OVER SUBSTANCE</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base font-mono-code text-[#cbd5e1] leading-relaxed">
            {MANIFESTO_TEXT.split('\n\n').map((para, pIdx) => (
              <p key={pIdx}>
                {para}
              </p>
            ))}
          </div>

          {/* Quick Pillars Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#222] text-xs font-mono-code">
            <div className="p-4 bg-black border border-[#39FF14]">
              <div className="text-[#39FF14] font-bold mb-1">// 01: CODE FIRST</div>
              <p className="text-[#cbd5e1]">Live editor sessions, gem teardowns, and architecture debates over pitch decks.</p>
            </div>
            <div className="p-4 bg-black border border-[#00FFFF]">
              <div className="text-[#00FFFF] font-bold mb-1">// 02: NO GATEKEEPING</div>
              <p className="text-[#cbd5e1]">From junior bootcamp grads to 20-year principal engineers, all curious minds are welcomed.</p>
            </div>
            <div className="p-4 bg-black border border-[#FF00FF]">
              <div className="text-[#FF00FF] font-bold mb-1">// 03: BALTIMORE ROOTS</div>
              <p className="text-[#cbd5e1]">Dedicated to strengthening Maryland&apos;s homegrown technology ecosystem and open source presence.</p>
            </div>
          </div>
        </div>

        {/* Buzzword Matrix for Google Search & SEO */}
        <div className="bg-[#050505] bento-box-cyan p-6 sm:p-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#222]">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Hash className="w-5 h-5 text-[#00FFFF]" />
                Technical Keyword & Stack Matrix
              </h3>
              <p className="text-xs font-mono-code text-[#94a3b8] mt-1">
                Technologies, patterns, and ecosystems regularly debated and deployed by Bmore on Rails engineers.
              </p>
            </div>

            {/* Keyword Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search buzzwords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-black border border-[#00FFFF]/50 focus:border-[#00FFFF] text-xs font-mono-code text-white outline-none placeholder-[#475569]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 text-xs font-mono-code uppercase font-bold border transition-colors ${
                selectedCategory === null 
                  ? 'bg-[#39FF14] text-black border-[#39FF14]' 
                  : 'bg-black text-[#94a3b8] border-[#333] hover:text-white'
              }`}
            >
              ALL CATEGORIES
            </button>
            {TECH_BUZZWORDS.map(cat => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(selectedCategory === cat.category ? null : cat.category)}
                className={`px-3 py-1.5 text-xs font-mono-code uppercase font-bold border transition-colors ${
                  selectedCategory === cat.category 
                    ? 'bg-[#00FFFF] text-black border-[#00FFFF]' 
                    : 'bg-black text-[#94a3b8] border-[#333] hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Buzzwords Tags Grid */}
          <div className="space-y-6">
            {filteredCategories.map(cat => (
              <div key={cat.category} className="space-y-2">
                <div className="text-xs font-mono-code font-bold text-[#00FFFF] uppercase tracking-wider">
                  [{cat.category}]
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.words.map(word => {
                    const isMatched = searchTerm && word.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <span
                        key={word}
                        className={`inline-flex items-center px-2.5 py-1 text-xs font-mono-code border transition-all ${
                          isMatched 
                            ? 'bg-[#39FF14] text-black font-bold border-[#39FF14] shadow-[0_0_10px_#39FF14]' 
                            : 'bg-black text-[#cbd5e1] border-[#222] hover:border-[#FF00FF] hover:text-[#FF00FF]'
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

