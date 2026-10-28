import React, { useState } from 'react';
import { SolarScene3D } from './components/SolarScene3D';
import {
  Zap,
  ArrowDown,
  Sparkles,
  Sun,
  Radio,
  BatteryCharging,
  RefreshCw,
  Satellite,
  CheckCircle2,
  Home,
  Building2,
  Server,
  Globe2,
  ShieldAlert,
  Cpu,
  ArrowRight,
} from 'lucide-react';

export const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState<'home' | 'business' | 'galaxy'>('home');
  const [reserved, setReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setReserved(true);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-slate-100 bg-[#020612] selection:bg-cyan-400 selection:text-space-950 font-sans overflow-x-hidden">
      {/* 3D Three.js Interactive Solar & Satellite Background with Scroll Animation */}
      <SolarScene3D />

      {/* Floating Minimal Product Header */}
      <header className="fixed top-0 left-0 right-0 z-40 py-4 px-6 sm:px-12 flex items-center justify-between backdrop-blur-md bg-space-950/50 border-b border-white/5">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Zap className="w-4 h-4 fill-cyan-400" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-black tracking-wider text-white">
              COSMOWATT <span className="text-cyan-400">⚡</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              The Night Time Solar
            </div>
          </div>
        </a>

        {/* Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          <button onClick={() => scrollTo('#solution')} className="text-slate-300 hover:text-cyan-300 transition-colors">
            Technology
          </button>
          <button onClick={() => scrollTo('#satellite')} className="text-slate-300 hover:text-cyan-300 transition-colors">
            Satellite System
          </button>
          <button onClick={() => scrollTo('#who-needs')} className="text-slate-300 hover:text-cyan-300 transition-colors">
            Applications
          </button>
          <button onClick={() => scrollTo('#pricing')} className="text-slate-300 hover:text-cyan-300 transition-colors">
            Pricing
          </button>
        </nav>

        {/* CTA */}
        <div>
          <button
            onClick={() => scrollTo('#pricing')}
            className="btn-fluid px-4 py-2 rounded-xl text-xs font-bold text-space-950 flex items-center gap-1.5 shadow-md hover:shadow-cyan-400/30 transition-all"
          >
            <span>Pre-Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Product Single Page */}
      <main className="relative z-10 flex flex-col">
        
        {/* ========================================================
            SECTION 1: HERO
        ======================================================== */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-16 text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE NIGHT TIME SOLAR</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[1.02] mb-4">
            COSMOWATT <span className="text-cyan-400 inline-block drop-shadow-[0_0_25px_rgba(0,246,255,0.8)]">⚡</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-400 bg-clip-text text-transparent mb-10">
            The Sun Clocked Out. We Didn't.
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={() => scrollTo('#pricing')}
              className="btn-fluid px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-space-950 flex items-center gap-2 shadow-lg hover:shadow-cyan-400/40"
            >
              <span>Explore Pricing & Pre-Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('#solution')}
              className="px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-slate-200 liquid-glass border-white/10 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              How It Works
            </button>
          </div>

          {/* Scroll Prompt */}
          <div className="flex flex-col items-center gap-2 text-slate-400 text-xs font-mono animate-bounce">
            <span className="tracking-widest uppercase text-[10px] text-cyan-400">
              Scroll to explore orbit
            </span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </div>
        </section>

        {/* ========================================================
            SECTION 2: THE PROBLEM & SOLUTION
        ======================================================== */}
        <section id="solution" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-4xl mx-auto">
          <div className="w-full space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-rose-500/30 text-rose-300 text-xs font-mono uppercase tracking-wider">
              <span>THE CHALLENGE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
              The Sun Sleeps.<br />
              <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Your Bills Don't.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Ever experienced a power cut in the middle of your favourite show? Or received an electricity bill that looks like a phone number?
            </p>

            {/* Product Solution Box */}
            <div className="p-8 rounded-3xl liquid-glass border-cyan-400/30 max-w-2xl mx-auto text-center space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                  OUR SOLUTION: COSMOWATT
                </span>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  A futuristic space-powered energy system designed to collect energy in space, transmit it to Earth and store it for use whenever needed.
                </p>
              </div>

              {/* 4-Step Chain */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-amber-300 flex flex-col items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Collect Energy</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 flex flex-col items-center gap-1.5">
                  <Satellite className="w-4 h-4 text-cyan-400" />
                  <span>Transmit Energy</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300 flex flex-col items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-purple-400" />
                  <span>Store Energy</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-300 flex flex-col items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Power Everything</span>
                </div>
              </div>

              <div className="pt-2 text-xs sm:text-sm font-mono text-cyan-300 font-bold tracking-wide">
                Our mission: Make the night work overtime! ⚡
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 3: WHO NEEDS DAYLIGHT WHEN YOU HAVE A SATELLITE?
        ======================================================== */}
        <section id="satellite" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-5xl mx-auto">
          <div className="w-full space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <span>ORBITAL TECHNOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Who Needs Daylight When You Have A Satellite?
            </h2>

            {/* Feature Cards from the presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              <div className="p-5 rounded-2xl liquid-glass border-white/10 hover:border-cyan-400/40 transition-all space-y-2">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Satellite className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Dedicated Energy Satellite 🛰️</h3>
                <p className="text-xs text-slate-300">
                  Collects solar energy above Earth's atmosphere without atmospheric absorption.
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 hover:border-purple-400/40 transition-all space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Power Station in Space 🌌</h3>
                <p className="text-xs text-slate-300">
                  Futuristic orbital power station gathers and manages collected stellar energy.
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 hover:border-blue-400/40 transition-all space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <Radio className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Energy Teleportation ⚡</h3>
                <p className="text-xs text-slate-300">
                  Wireless transmission system beams clean energy from space to Earth.
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 hover:border-emerald-400/40 transition-all space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">24/7 Energy Generation 🔄</h3>
                <p className="text-xs text-slate-300">
                  Supplies uninterrupted energy day and night using orbital collection and storage.
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 hover:border-amber-400/40 transition-all space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Infinite Battery Mode 🔋</h3>
                <p className="text-xs text-slate-300">
                  Next-generation battery reserve that never says, “Low battery!”
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 hover:border-rose-400/40 transition-all space-y-2">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Self-Repairing Panels 🤖</h3>
                <p className="text-xs text-slate-300">
                  Panels detect surface wear and repair themselves with zero maintenance down below.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 4: WHO NEEDS COSMOWATT?
        ======================================================== */}
        <section id="who-needs" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-4xl mx-auto">
          <div className="w-full space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-purple-400/40 text-purple-300 text-xs font-mono uppercase tracking-wider">
              <span>TARGET APPLICATIONS</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Who Needs COSMOWATT?
            </h2>

            {/* 5 User Profiles from presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-5 rounded-2xl liquid-glass border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Home className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Homes</h3>
                <p className="text-xs text-slate-300">Tired of power cuts and rising electricity bills.</p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Hospitals</h3>
                <p className="text-xs text-slate-300">Need dependable, uninterrupted life-critical electricity.</p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Factories & Businesses</h3>
                <p className="text-xs text-slate-300">Need continuous power throughout the entire night.</p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 space-y-2 sm:col-span-1 lg:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Data Centres</h3>
                <p className="text-xs text-slate-300">Cannot afford even a second of power interruptions.</p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border-white/10 space-y-2 sm:col-span-2 lg:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Remote Communities</h3>
                <p className="text-xs text-slate-300">Clean power anywhere with limited or zero traditional grid access.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 5: CONCEPT PRICING & PRE-ORDER
        ======================================================== */}
        <section id="pricing" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center max-w-4xl mx-auto">
          <div className="w-full space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <span>CONCEPT PRICING</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Pre-Order COSMOWATT
            </h2>

            {/* 3 Pricing Cards from presentation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <div
                onClick={() => setSelectedTier('home')}
                className={`p-6 rounded-3xl border cursor-pointer transition-all ${
                  selectedTier === 'home'
                    ? 'liquid-glass border-cyan-400 shadow-cyan-glow scale-[1.02]'
                    : 'liquid-glass border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-mono text-cyan-300 uppercase">Residential</div>
                <div className="text-xl font-bold text-white mt-1">COSMOWATT Home</div>
                <div className="text-2xl font-black text-white font-mono mt-3">₹1,49,999</div>
                <div className="text-[11px] text-slate-400 mt-1">Single-family ground receiver system.</div>
              </div>

              <div
                onClick={() => setSelectedTier('business')}
                className={`p-6 rounded-3xl border cursor-pointer transition-all ${
                  selectedTier === 'business'
                    ? 'liquid-glass border-purple-400 shadow-purple-glow scale-[1.02]'
                    : 'liquid-glass border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-mono text-purple-300 uppercase">Commercial</div>
                <div className="text-xl font-bold text-white mt-1">COSMOWATT Business</div>
                <div className="text-2xl font-black text-white font-mono mt-3">₹9,99,999</div>
                <div className="text-[11px] text-slate-400 mt-1">High-flux multi-node industrial array.</div>
              </div>

              <div
                onClick={() => setSelectedTier('galaxy')}
                className={`p-6 rounded-3xl border cursor-pointer transition-all ${
                  selectedTier === 'galaxy'
                    ? 'liquid-glass border-emerald-400 shadow-emerald-500/30 scale-[1.02]'
                    : 'liquid-glass border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-mono text-emerald-300 uppercase">Subscription</div>
                <div className="text-xl font-bold text-white mt-1">Galaxy Plan</div>
                <div className="text-2xl font-black text-white font-mono mt-3">₹999<span className="text-xs font-normal text-slate-400">/mo</span></div>
                <div className="text-[11px] text-slate-400 mt-1">Continuous monitoring & orbital maintenance.</div>
              </div>
            </div>

            {/* Pre-Order Input Form */}
            <div className="p-8 rounded-3xl liquid-glass border-cyan-400/30 max-w-xl mx-auto shadow-2xl">
              {reserved ? (
                <div className="py-6 space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Pre-Order Registered!</h3>
                  <p className="text-xs text-slate-300">
                    We've saved your slot for <span className="text-cyan-300 font-mono font-bold">COSMOWATT {selectedTier.toUpperCase()}</span>. Confirmation sent to <span className="text-white font-mono">{email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReserve} className="space-y-4">
                  <div className="text-xs text-slate-300">
                    Register priority pre-order for <span className="text-cyan-300 font-mono font-bold">COSMOWATT {selectedTier.toUpperCase()}</span>:
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto btn-fluid px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-space-950 flex items-center justify-center gap-1.5 shrink-0 shadow-md hover:shadow-cyan-400/40"
                    >
                      <span>Pre-Order</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Ultra Minimal Product Footer */}
      <footer className="py-8 border-t border-white/5 relative z-10 text-xs text-slate-500 font-mono text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-300 font-bold flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>COSMOWATT ⚡</span>
            <span className="text-slate-500 font-normal">| The Night Time Solar</span>
          </div>
          <div>
            © 2026 COSMOWATT Orbital Energy Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
