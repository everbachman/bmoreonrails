export interface MeetupEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venueAddress: string;
  description: string;
  talks: {
    speaker: string;
    topic: string;
    tag: string;
  }[];
  lumaUrl: string;
  spotsLeft?: number;
  featured?: boolean;
}

export interface Sponsor {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tier: 'Diamond' | 'Platinum' | 'Gold' | 'Community';
  accentColor: string;
  websiteUrl: string;
  svgIconType: 'underarmour' | 'ravens' | 'bwi' | 'sesame' | 'gbc' | 'baltimore' | 'etsy';
}
