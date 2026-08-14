import { MeetupEvent } from '../types';

export const LUMA_CALENDAR_URL = "https://lu.ma/bmore-on-rails";

export const UPCOMING_EVENTS: MeetupEvent[] = [
  {
    id: "bmr-2026-09",
    title: "Bmore on Rails: Autumn Equinox Hack & Ruby 3.4 Deep Dive",
    date: "Thursday, September 17, 2026",
    time: "6:30 PM – 9:00 PM EDT",
    location: "Spark Baltimore / Cyber District Hub",
    venueAddress: "8 Light St, Baltimore, MD 21202",
    description: "Join Baltimore's elite underground of software craftsfolk for an evening of technical talks, lightning demos, and fermented beverages. We explore modern Ruby concurrency, Rails 8 Solid adapters, and building resilient full-stack systems.",
    talks: [
      {
        speaker: "Morgan Vance (Staff Systems Architect)",
        topic: "Cracking Rails 8 Solid Queue & Solid Cache Under Heavy Load",
        tag: "RAILS 8 CORE"
      },
      {
        speaker: "Devin Cross (Charm City Hacker)",
        topic: "Integrating Local AI Models with Ruby via llama.cpp Bindings",
        tag: "LLMS & RUBY"
      },
      {
        speaker: "Open Lightning Round (5 min slots)",
        topic: "Bmore Hacks, Gem Tear-downs & WTF Ruby Quirks",
        tag: "LIGHTNING"
      }
    ],
    lumaUrl: "https://lu.ma/bmore-on-rails",
    spotsLeft: 18,
    featured: true
  },
  {
    id: "bmr-2026-10",
    title: "Bmore on Rails: Halloween Black Metal Syntax & Hotwire Nightmares",
    date: "Thursday, October 15, 2026",
    time: "6:30 PM – 9:00 PM EDT",
    location: "R. House Garage Lounge / Baltimore, MD",
    venueAddress: "301 W 29th St, Baltimore, MD 21211",
    description: "Dark syntax, spooky metaprogramming, and surviving legacy codebases. Featuring lightning horror stories from 10+ year production Rails monoliths and how Turbo 8 morphed everything.",
    talks: [
      {
        speaker: "Alex 'Hex' Mercer (Lead Backend)",
        topic: "Necromancy on 2012 ActiveRecord Migrations",
        tag: "DB ARCHAEOLOGY"
      },
      {
        speaker: "Samira K. (Distributed Systems)",
        topic: "Kamal Deployment Pipelines from Bare Metal to Cloud",
        tag: "DEVOPS & KAMAL"
      }
    ],
    lumaUrl: "https://lu.ma/bmore-on-rails",
    spotsLeft: 34,
    featured: false
  },
  {
    id: "bmr-2026-11",
    title: "Bmore on Rails: Winter Solstice Compiler Battles & Sidekiq War Room",
    date: "Thursday, November 19, 2026",
    time: "6:30 PM – 9:00 PM EST",
    location: "Emerging Technology Center (ETC) Baltimore",
    venueAddress: "101 N Haven St #301, Baltimore, MD 21224",
    description: "The year-end gathering of Charm City's finest Ruby hackers. High-throughput queuing, performance profiling with Stackprof & Vernier, and community project showcases.",
    talks: [
      {
        speaker: "Jordan Leigh (Infrastructure Lead)",
        topic: "100k Jobs/Sec: Tuning Sidekiq and Redis Memory In Real Time",
        tag: "PERFORMANCE"
      },
      {
        speaker: "Bmore on Rails Core Team",
        topic: "State of Baltimore Tech & 2027 Roadmap",
        tag: "KEYNOTE"
      }
    ],
    lumaUrl: "https://lu.ma/bmore-on-rails",
    spotsLeft: 42,
    featured: false
  }
];
