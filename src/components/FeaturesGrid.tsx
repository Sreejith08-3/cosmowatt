import React from 'react';
import { Orbit, SunMedium, CloudLightning, ShieldCheck } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const specs = [
    {
      title: 'Zero Night Downtime',
      desc: 'Orbits in continuous sunlight, eliminating the 12-hour nighttime generation gap.',
      icon: Orbit,
      tag: 'CONTINUOUS',
    },
    {
      title: 'Atmosphere-Free Capture',
      desc: 'Receives unfiltered sunlight with up to 10x higher intensity than surface solar panels.',
      icon: SunMedium,
      tag: 'MAX FLUX',
    },
    {
      title: 'All-Weather Transmission',
      desc: 'Penetrates dense clouds, rain, and storms without energy interruption.',
      icon: CloudLightning,
      tag: 'ALL-WEATHER',
    },
    {
      title: 'Grid Synchronization',
      desc: 'Converts wireless photons straight into AC/DC power for standard power networks.',
      icon: ShieldCheck,
      tag: 'COMPATIBLE',
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Specifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered for high-efficiency continuous clean power.
          </p>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {specs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-3xl liquid-glass-card border border-white/10 hover:border-cyan-400/40 space-y-4 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl liquid-glass border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
