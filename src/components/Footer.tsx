import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-white/5 relative z-10 text-xs text-slate-500 font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2 text-slate-300 font-bold">
          <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
          <span>WATT THE HELL ⚡</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a href="#technology" className="hover:text-cyan-400 transition-colors">Technology</a>
          <a href="#telemetry" className="hover:text-cyan-400 transition-colors">Live HUD</a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">Architecture</a>
          <a href="#cta" className="hover:text-cyan-400 transition-colors">Waitlist</a>
        </div>

        {/* Copyright */}
        <div>
          © 2026 Orbital Solar Systems.
        </div>

      </div>
    </footer>
  );
};
