import React from 'react';

interface CyberCrabLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  glow?: boolean;
}

export const CyberCrabLogo: React.FC<CyberCrabLogoProps> = ({
  className = "",
  size = 48,
  showText = false,
  glow = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div 
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Glow halo */}
        {glow && (
          <div className="absolute inset-0 bg-[#39FF14]/20 blur-md rounded-full pointer-events-none" />
        )}

        {/* SVG Gothic Cyber Crab with Railroad Tracks & Ruby Crystal */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Railroad Track Ties (Crossbeams) */}
          <path
            d="M20 78L80 78M24 85L76 85M28 92L72 92"
            stroke="#00FFFF"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
          {/* Railroad Rails (Parallel Tracks Converging to Ground) */}
          <path
            d="M36 70L24 96M64 70L76 96"
            stroke="#00FFFF"
            strokeWidth="3.5"
            strokeLinecap="square"
          />

          {/* Crab Spiked Shell / Ruby Heart Shape */}
          <path
            d="M50 24L74 42L68 68L50 78L32 68L26 42L50 24Z"
            fill="#050505"
            stroke="#39FF14"
            strokeWidth="3"
            strokeLinejoin="bevel"
          />

          {/* Ruby Facets Inside Shell */}
          <path
            d="M50 24L50 78M26 42L74 42M32 68L68 68M50 42L32 68M50 42L68 68M50 24L38 42L50 60L62 42L50 24Z"
            stroke="#FF00FF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* Glowing Center Core */}
          <circle cx="50" cy="51" r="3.5" fill="#39FF14" className="animate-pulse" />

          {/* Left Spiked Pincer / Claw */}
          <path
            d="M30 38L10 24L6 34L20 44L14 52L26 48"
            stroke="#39FF14"
            strokeWidth="2.5"
            strokeLinejoin="miter"
            fill="#0a0a0a"
          />
          {/* Left Inner Fang */}
          <path
            d="M10 24L18 30"
            stroke="#00FFFF"
            strokeWidth="2"
          />

          {/* Right Spiked Pincer / Claw */}
          <path
            d="M70 38L90 24L94 34L80 44L86 52L74 48"
            stroke="#39FF14"
            strokeWidth="2.5"
            strokeLinejoin="miter"
            fill="#0a0a0a"
          />
          {/* Right Inner Fang */}
          <path
            d="M90 24L82 30"
            stroke="#00FFFF"
            strokeWidth="2"
          />

          {/* Piercing Cyber Eyes */}
          <polygon points="42,32 46,36 42,38" fill="#00FFFF" />
          <polygon points="58,32 54,36 58,38" fill="#00FFFF" />

          {/* Sharp Cyber Legs */}
          {/* Left Legs */}
          <path d="M26 48L12 56L6 68" stroke="#39FF14" strokeWidth="2" strokeLinecap="square" />
          <path d="M28 58L16 68L10 80" stroke="#39FF14" strokeWidth="2" strokeLinecap="square" />
          <path d="M32 68L22 78L18 90" stroke="#39FF14" strokeWidth="2" strokeLinecap="square" />

          {/* Right Legs */}
          <path d="M74 48L88 56L94 68" stroke="#39FF14" strokeWidth="2" strokeLinecap="square" />
          <path d="M72 58L84 68L90 80" stroke="#39FF14" strokeWidth="2" strokeLinecap="square" />
          <path d="M68 68L78 78L82 90" stroke="#39FF14" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-gothic text-2xl font-bold tracking-wider text-[#39FF14] hover:text-white transition-colors leading-none">
            Bmore on Rails
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#00FFFF] uppercase font-mono-code font-bold mt-1">
            CHARM CITY HACKERS // EST. 2008
          </span>
        </div>
      )}
    </div>
  );
};

