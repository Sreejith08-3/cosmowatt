import React from 'react';
import { PowerOff, Receipt, Moon, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Power Cuts',
      description: "Your favourite show shouldn't end because the electricity did.",
      icon: PowerOff,
      color: 'from-rose-500/20 to-orange-500/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
      tag: 'BLACKOUT ANXIETY',
    },
    {
      title: 'Bill Shock',
      description: 'Your electricity bill has more plot twists than a thriller.',
      icon: Receipt,
      color: 'from-amber-500/20 to-yellow-500/20',
      borderColor: 'border-amber-400/30',
      iconColor: 'text-amber-400',
      tag: 'FINANCIAL JUMPSCARE',
    },
    {
      title: 'Night-Time Energy',
      description: 'The sun has clocked out, but your appliances are still working overtime.',
      icon: Moon,
      color: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-400/30',
      iconColor: 'text-purple-400',
      tag: 'NOCTURNAL DRAIN',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>The Reality of 2026 Solar</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Sun Sleeps. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-300 to-amber-300">Your Bills Don't.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Traditional solar power takes a 12-hour siesta every evening while your lights, AC, and refrigerators work the night shift.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl liquid-glass-card p-8 border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top specular glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center ${item.iconColor} shadow-inner group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PROBLEM #0{index + 1}</span>
                  <span className="text-amber-400/80">UNRESOLVED BY TRADITIONAL TECH</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Finishing Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-orange-500/20">
            <div className="px-8 py-5 rounded-2xl liquid-glass border-cyan-400/30">
              <p className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                “Meet the fictional energy system designed to <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent underline decoration-cyan-400/50">make darkness work</span>.”
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
