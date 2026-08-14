import React from 'react';
import { Sponsor } from '../types';

interface SponsorIconProps {
  type: Sponsor['svgIconType'];
  className?: string;
}

export const SponsorIcon: React.FC<SponsorIconProps> = ({ type, className = "w-8 h-8" }) => {
  switch (type) {
    case 'underarmour':
      return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
          {/* Under Armour Interlocking Arches */}
          <path d="M50 15 C34 15 22 28 22 45 C22 55 27 63 35 69 L22 79 C10 69 4 54 4 37 C4 14 24 0 50 0 C76 0 96 14 96 37 C96 54 90 69 78 79 L65 69 C73 63 78 55 78 45 C78 28 66 15 50 15 Z" />
          <path d="M50 85 C66 85 78 72 78 55 C78 45 73 37 65 31 L78 21 C90 31 96 46 96 63 C96 86 76 100 50 100 C24 100 4 86 4 63 C4 46 10 31 22 21 L35 31 C27 37 22 45 22 55 C22 72 34 85 50 85 Z" />
        </svg>
      );
    case 'ravens':
      return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
          {/* Ravens Talon / Spiked Beak Crest */}
          <path d="M10 50 Q30 20 65 15 Q95 20 90 45 Q80 75 45 85 Q20 80 10 50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M25 45 L50 35 L85 45 L70 65 L45 70 Z" fill="currentColor" opacity="0.4" />
          <circle cx="65" cy="35" r="5" fill="#00ff66" />
          <path d="M85 45 L95 48 L75 58 Z" fill="currentColor" />
          <path d="M35 25 L45 5 M50 20 L60 5 M65 22 L75 10" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        </svg>
      );
    case 'bwi':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
          {/* BWI Airport Radar Jet Vector */}
          <circle cx="50" cy="50" r="42" strokeWidth="3" strokeDasharray="6 4" />
          <circle cx="50" cy="50" r="26" strokeWidth="2" opacity="0.6" />
          <path d="M50 15 L50 85 M15 50 L85 50" strokeWidth="1.5" opacity="0.4" />
          {/* Supersonic Jet */}
          <path d="M50 20 L58 45 L85 58 L58 64 L50 80 L42 64 L15 58 L42 45 Z" fill="currentColor" />
        </svg>
      );
    case 'sesame':
      return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
          {/* Sesame Street Signboard Crest */}
          <rect x="10" y="25" width="80" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M10 45 L90 45" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="25" r="14" fill="#050507" stroke="currentColor" strokeWidth="4" />
          <text x="50" y="29" fontSize="14" fontWeight="bold" textAnchor="middle" fill="currentColor" fontFamily="monospace">123</text>
          <text x="50" y="40" fontSize="10" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="sans-serif">SESAME</text>
          <text x="50" y="57" fontSize="9" fontWeight="bold" textAnchor="middle" fill="currentColor" fontFamily="monospace">STREET</text>
          <path d="M50 65 L50 92 M40 92 L60 92" stroke="currentColor" strokeWidth="4" />
        </svg>
      );
    case 'gbc':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
          {/* GBC Greater Baltimore Committee Innovation Delta */}
          <polygon points="50,10 90,85 10,85" strokeWidth="4" fill="none" />
          <polygon points="50,32 75,75 25,75" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
          <circle cx="50" cy="55" r="8" fill="currentColor" />
          <line x1="50" y1="10" x2="50" y2="85" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      );
    case 'baltimore':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
          {/* City of Baltimore Battle Monument Historic Shield */}
          <path d="M20 15 L80 15 L80 55 Q80 85 50 95 Q20 85 20 55 Z" strokeWidth="4" fill="#08080c" />
          {/* Battle Monument Column Silhouette */}
          <rect x="44" y="35" width="12" height="36" fill="currentColor" />
          <rect x="38" y="70" width="24" height="6" fill="currentColor" />
          <circle cx="50" cy="28" r="6" fill="currentColor" />
          {/* Star Accents */}
          <polygon points="30,30 32,35 37,35 33,38 35,43 30,40 25,43 27,38 23,35 28,35" fill="currentColor" opacity="0.8" />
          <polygon points="70,30 72,35 77,35 73,38 75,43 70,40 65,43 67,38 63,35 68,35" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case 'etsy':
      return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
          {/* Etsy Gothic-Serif Artisan Stamp */}
          <rect x="12" y="12" width="76" height="76" rx="4" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4 2" />
          <text x="50" y="68" fontSize="54" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="serif" fontStyle="italic">E</text>
        </svg>
      );
    default:
      return null;
  }
};
