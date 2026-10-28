import React, { useState } from 'react';
import { Zap, Activity, Wifi, ShieldCheck, Sparkles } from 'lucide-react';

interface DashboardSectionProps {
  onClapTriggered?: (message: string) => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ onClapTriggered }) => {
  const [boostActive, setBoostActive] = useState(false);
  const [powerOutput, setPowerOutput] = useState(14.8);

  const handleBoostClick = () => {
    setBoostActive(true);
    setPowerOutput(18.4);
    if (onClapTriggered) {
      onClapTriggered('⚡ Solar Satellite boosted to 18.4 kW peak flux!');
    }
    setTimeout(() => {
      setBoostActive(false);
      setPowerOutput(14.8);
    }, 2000);
  };

  return (
    <section id="telemetry" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            Real-Time Feed
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Orbital Telemetry HUD
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live stream metrics from the orbital energy satellite array.
          </p>
        </div>

        {/* Dashboard Glass Card */}
        <div className="rounded-3xl liquid-glass border-cyan-400/25 p-6 sm:p-8 space-y-8 shadow-2xl shadow-cyan-950/60">
          
          {/* Status bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-white tracking-wide">
                  SATELLITE NODE #108
                </span>
                <span className="text-[11px] font-mono text-cyan-400 block">
                  GEO-SYNC ORBIT • LOCKED
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quantum Link: 100%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Beam Shield: OK</span>
              </div>
            </div>
          </div>

          {/* 4 Minimal Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl liquid-glass-card border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                Harvest Output
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                <span>{powerOutput.toFixed(1)}</span>
                <span className="text-xs text-cyan-400 font-bold">kW</span>
              </div>
              <span className="text-[10px] text-cyan-300 font-mono block">
                {boostActive ? 'Boost Activated 🔥' : 'Nominal Flux'}
              </span>
            </div>

            <div className="p-4 rounded-2xl liquid-glass-card border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                Beam Efficiency
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                <span>99.8</span>
                <span className="text-xs text-purple-400 font-bold">%</span>
              </div>
              <span className="text-[10px] text-purple-300 font-mono block">
                Zero Atmospheric Loss
              </span>
            </div>

            <div className="p-4 rounded-2xl liquid-glass-card border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                Storage Cell
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                <span>100</span>
                <span className="text-xs text-emerald-400 font-bold">%</span>
              </div>
              <span className="text-[10px] text-emerald-300 font-mono block">
                Continuous Reserve
              </span>
            </div>

            <div className="p-4 rounded-2xl liquid-glass-card border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                Night Gap
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                <span>0.0</span>
                <span className="text-xs text-blue-400 font-bold">hrs</span>
              </div>
              <span className="text-[10px] text-blue-300 font-mono block">
                Always Generating
              </span>
            </div>
          </div>

          {/* Minimal Animated Waveform */}
          <div className="p-4 rounded-2xl liquid-glass-card border-white/5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-200">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>24-Hour Beam Waveform</span>
              </div>
              <span className="text-cyan-400 text-[11px]">Unbroken Continuous Curve</span>
            </div>

            <div className="h-20 w-full relative">
              <svg viewBox="0 0 500 80" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f6ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 Q60,25 125,35 T250,30 T375,38 T500,28 L500,80 L0,80 Z"
                  fill="url(#waveFill)"
                />
                <path
                  d="M0,45 Q60,25 125,35 T250,30 T375,38 T500,28"
                  fill="none"
                  stroke="#00f6ff"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>

          {/* Interactive Boost Button */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <div className="text-xs text-slate-300">
              Test satellite response with an orbital pulse test.
            </div>

            <button
              onClick={handleBoostClick}
              disabled={boostActive}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md ${
                boostActive
                  ? 'bg-purple-600 text-white scale-95'
                  : 'btn-fluid text-space-950 hover:shadow-cyan-400/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{boostActive ? 'Boosting Beam...' : 'Trigger Power Pulse'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
