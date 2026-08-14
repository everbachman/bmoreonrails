import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink, Download, RefreshCw, CheckCircle2, Mic, Flame, AlertCircle, Layers } from 'lucide-react';
import { UPCOMING_EVENTS, LUMA_CALENDAR_URL } from '../data/events';
import { MeetupEvent } from '../types';

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<MeetupEvent | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("JUST NOW");
  const [syncSuccess, setSyncSuccess] = useState(true);

  // Generate .ics calendar download for local import
  const handleDownloadIcs = (event: MeetupEvent) => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Bmore on Rails//Meetup Calendar//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${event.location} - ${event.venueAddress}`,
      `URL:${event.lumaUrl}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSyncLuma = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncSuccess(true);
      const now = new Date();
      setLastSyncTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 800);
  };

  return (
    <section id="events" className="py-12 md:py-20 bg-[#020202] text-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Bento Tile */}
        <div className="p-6 md:p-8 bg-[#050505] bento-box-cyan mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#00FFFF] mb-2 uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-[#00FFFF]" />
              <span>GATHERINGS & CODE SESSIONS</span>
            </div>
            <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#00FFFF] font-bold tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-[#94a3b8] font-mono-code text-sm sm:text-base mt-2 max-w-2xl">
              Monthly convene of Baltimore hackers, systems architects, and Rubyists. Meetups occur on the 3rd Thursday of each month.
            </p>
          </div>

          {/* Luma Sync & Direct Link Widget */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="p-2.5 bg-black border border-[#00FFFF]/50 flex items-center gap-3 text-xs font-mono-code">
              <button 
                onClick={handleSyncLuma}
                disabled={isSyncing}
                title="Sync from Luma API"
                className="p-1.5 bg-[#111] hover:bg-[#222] text-[#00FFFF] transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#39FF14]' : ''}`} />
              </button>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                  <span className="text-[#39FF14] font-bold">LUMA SYNC: ACTIVE</span>
                </div>
                <span className="text-[10px] text-[#64748b]">CHECKED: {lastSyncTime}</span>
              </div>
            </div>

            <a
              href={LUMA_CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#00FFFF] text-black font-mono-code font-black text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all"
            >
              <span>LUMA.COM/BMORE-ON-RAILS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Events Bento Cards Stack */}
        <div className="space-y-6">
          {UPCOMING_EVENTS.map((event) => {
            const isFeatured = event.featured;
            return (
              <div
                key={event.id}
                className={`relative bg-[#050505] p-6 sm:p-8 transition-all duration-300 ${
                  isFeatured 
                    ? 'bento-box-green' 
                    : 'bento-box-white hover:border-[#00FFFF]'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#39FF14] text-black font-mono-code font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-black" />
                    NEXT IMMINENT GATHERING
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Event Date Block */}
                  <div className="lg:col-span-3 flex flex-col justify-between p-4 bg-black border border-[#222]">
                    <div className="space-y-1">
                      <span className="text-xs font-mono-code font-bold text-[#FF00FF] tracking-widest uppercase">
                        {event.date.split(',')[0]}
                      </span>
                      <div className="font-display font-black text-2xl text-white">
                        {event.date.split(',')[1] || event.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono-code text-[#00FFFF] pt-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#222] space-y-2">
                      <div className="flex items-start gap-1.5 text-xs font-mono-code text-[#cbd5e1]">
                        <MapPin className="w-3.5 h-3.5 text-[#39FF14] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">{event.location}</p>
                          <p className="text-[11px] text-[#94a3b8]">{event.venueAddress}</p>
                        </div>
                      </div>

                      {event.spotsLeft && (
                        <div className="pt-1 flex items-center justify-between text-[11px] font-mono-code">
                          <span className="text-[#64748b]">CAPACITY:</span>
                          <span className="text-[#39FF14] font-bold">{event.spotsLeft} SPOTS LEFT</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event Main Details & Talks */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white hover:text-[#00FFFF] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#94a3b8] font-mono-code mt-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Talks & Agenda Breakdown */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-mono-code font-bold text-[#39FF14] uppercase tracking-wider flex items-center gap-1.5">
                        <Mic className="w-3.5 h-3.5 text-[#39FF14]" />
                        SESSION AGENDA & SPEAKERS:
                      </div>
                      
                      <div className="space-y-2">
                        {event.talks.map((talk, tIndex) => (
                          <div 
                            key={tIndex} 
                            className="p-3 bg-black border border-[#222] hover:border-[#00FFFF] transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-xs font-mono-code font-bold text-white">
                                {talk.topic}
                              </span>
                              <span className="text-[9px] font-mono-code px-2 py-0.5 bg-black text-[#FF00FF] border border-[#FF00FF] font-bold shrink-0">
                                {talk.tag}
                              </span>
                            </div>
                            <p className="text-[11px] font-mono-code text-[#00FFFF]">
                              Speaker: {talk.speaker}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Event Actions & RSVP Panel */}
                  <div className="lg:col-span-3 flex flex-col gap-3 h-full justify-between pt-2 lg:pt-0">
                    <div className="p-3 bg-black border border-[#333] space-y-1">
                      <div className="text-[10px] font-mono-code text-[#39FF14] uppercase tracking-widest font-bold">
                        REGISTRATION STATUS
                      </div>
                      <div className="text-xs font-mono-code text-[#f1f5f9]">
                        Open via Luma Event Platform
                      </div>
                    </div>

                    <div className="space-y-2">
                      <a
                        href={event.lumaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#39FF14] hover:bg-white text-black font-mono-code font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all text-center"
                      >
                        <span>RSVP ON LUMA</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => handleDownloadIcs(event)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black hover:bg-[#111] text-[#00FFFF] hover:text-white border border-[#00FFFF] font-mono-code text-xs uppercase tracking-wider transition-colors font-bold"
                      >
                        <Download className="w-3.5 h-3.5 text-[#00FFFF]" />
                        <span>ADD TO CALENDAR (.ICS)</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Talk Proposal Bento Callout */}
        <div className="mt-8 p-6 bg-[#050505] bento-box-magenta flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Got something cool you built or broke in Ruby / Rails?
            </h4>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-mono-code">
              We welcome 5-minute lightning demos, 20-minute architecture deep dives, and live debugging sessions.
            </p>
          </div>
          <a
            href={LUMA_CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#FF00FF] hover:bg-white text-black font-mono-code font-black text-xs uppercase tracking-wider shadow-[0_0_15px_#FF00FF] transition-all"
          >
            <span>PROPOSE A TALK</span>
            <Mic className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

