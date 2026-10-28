import React from 'react';
import { Sun, Radio, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Orbital Capture',
      desc: 'Space satellites harvest unfiltered solar photons continuously in geostationary orbit.',
      icon: Sun,
      color: 'text-amber-400',
      border: 'border-amber-400/30',
      glow: 'from-amber-500/10 to-transparent',
    },
    {
      num: '02',
      title: 'Targeted Beam',
      desc: 'Safe microwave frequencies wirelessly beam the clean energy through clouds directly to ground stations.',
      icon: Radio,
      color: 'text-cyan-400',
      border: 'border-cyan-400/30',
      glow: 'from-cyan-500/10 to-transparent',
    },
    {
      num: '03',
      title: 'Grid Distribution',
      desc: 'Ground rectenna stations convert beams into standard electricity for instant distribution.',
      icon: Zap,
      color: 'text-purple-400',
      border: 'border-purple-400/30',
      glow: 'from-purple-500/10 to-transparent',
    },
  ];

  return (
    <section id="technology" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 3-Step Solar Loop
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From raw cosmic photons to clean grid electricity in seconds.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`p-6 sm:p-7 rounded-3xl liquid-glass-card border ${step.border} bg-gradient-to-b ${step.glow} flex flex-col justify-between space-y-6 hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-2xl liquid-glass ${step.border} flex items-center justify-center ${step.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
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
