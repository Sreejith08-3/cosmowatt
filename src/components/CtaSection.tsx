import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onEnterUniverse?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onEnterUniverse }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      if (onEnterUniverse) onEnterUniverse();
    }
  };

  return (
    <section id="cta" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl liquid-glass border-cyan-400/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl shadow-cyan-950/50">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border-cyan-400/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EARLY ACCESS WAITLIST</span>
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              The Future of Solar is Orbital.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Continuous clean energy beamed directly to Earth. Sign up for early access updates.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-mono font-bold animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>You're on the list! Welcome to orbital power.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-space-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto btn-fluid px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-space-950 flex items-center justify-center gap-2 shrink-0 shadow-md hover:shadow-cyan-400/30"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
