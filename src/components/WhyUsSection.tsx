import React from 'react';
import { Lightbulb, Battery, Globe, Sparkles } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      title: 'Reliable electricity is important to modern life.',
      description: 'Hospitals, servers, smart homes, and everyday lives run 24 hours a day. Energy infrastructure cannot afford to sleep when night falls.',
      icon: Lightbulb,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-400/30',
    },
    {
      title: 'Energy storage can help balance supply and demand.',
      description: 'The green transition needs innovative balancing solutions that store surplus diurnal generation to meet evening peak surges seamlessly.',
      icon: Battery,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30',
    },
    {
      title: 'Space-based solar power is an active area of research.',
      description: 'Agencies like NASA, ESA, and JAXA are actively researching space solar power satellites because sunlight in orbit is up to 10x more intense and never interrupted by night.',
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/30',
    },
    {
      title: 'Big ideas begin with asking impossible questions.',
      description: 'Every major leap in human history sounded like science fiction first. We combine wild humor with genuine scientific curiosity to inspire future engineers.',
      icon: Sparkles,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-400/30',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Foundational Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Because the World{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Doesn't Stop After Sunset.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Beyond the humor and space-age cheekiness lies a serious truth about our planet’s insatiable appetite for clean, round-the-clock power.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl liquid-glass-card p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex items-start gap-6"
              >
                <div className={`w-14 h-14 rounded-2xl ${pt.bgColor} border ${pt.borderColor} flex items-center justify-center ${pt.color} shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                    PILLAR 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ending Strong Statement */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-cyan-glow">
            <div className="px-8 sm:px-14 py-8 rounded-[22px] bg-space-950/90 backdrop-blur-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2 font-bold">
                THE WATT THE HELL MANIFESTO
              </span>
              <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                “We don't wait for the sun.{' '}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-400 bg-clip-text text-transparent">
                  We put the universe to work!
                </span>”
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
