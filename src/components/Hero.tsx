import React from 'react';
import { ArrowDown, Radio, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreTech: () => void;
  onMeetFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTech, onMeetFeatures }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-8">
        
        {/* Top Minimal Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass border-cyan-400/30 text-cyan-300 text-xs font-mono font-medium tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>ORBITAL SOLAR STREAM ACTIVE</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Minimal Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
            Continuous Solar.<br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-400 bg-clip-text text-transparent">
              Day & Night.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-xl mx-auto leading-relaxed">
            Orbiting solar satellites harvesting 24/7 sunlight above Earth's atmosphere and beaming continuous clean electricity.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onExploreTech}
            className="btn-fluid px-7 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider text-space-950 flex items-center gap-2 shadow-lg hover:shadow-cyan-400/40 transition-all"
          >
            <span>How It Works</span>
            <Radio className="w-4 h-4" />
          </button>

          <button
            onClick={onMeetFeatures}
            className="px-7 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider text-slate-200 liquid-glass border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
          >
            Live Telemetry
          </button>
        </div>

        {/* 3 Minimal Metric Pills */}
        <div className="pt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto">
          <div className="p-3 sm:p-4 rounded-2xl liquid-glass border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">24/7</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Continuous</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl liquid-glass border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">35,786 km</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Orbit Alt</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl liquid-glass border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-purple-400 font-mono">0%</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Emission</div>
          </div>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="pt-8 flex flex-col items-center justify-center gap-2 text-slate-400 text-xs font-mono">
          <span className="tracking-widest uppercase text-[10px] text-cyan-400/80">Scroll to control 3D orbit</span>
          <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
        </div>

      </div>
    </section>
  );
};
