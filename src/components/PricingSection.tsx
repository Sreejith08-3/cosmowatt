import React from 'react';
import { Check, Sparkles, Zap, Shield, Rocket, Info } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: 'WATT Home',
      price: '₹1,49,999',
      period: 'one-time fictional fee',
      tagline: 'Ideal for suburban homes and nocturnal gamers.',
      popular: false,
      badge: 'TERRESTRIAL TIERS',
      features: [
        'Home energy concept',
        'Smart app preview',
        'Night-time power vision',
        'Fictional battery technology',
      ],
      buttonText: 'Choose Home',
      icon: Zap,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-white/10 hover:border-cyan-400/40',
      btnStyle: 'btn-glass text-white hover:text-cyan-300',
    },
    {
      name: 'WATT Business',
      price: '₹9,99,999',
      period: 'commercial concept',
      tagline: 'For enterprises that refuse to slow down at sunset.',
      popular: true,
      badge: 'MOST OUTRAGEOUS',
      features: [
        'Business energy concept',
        'Satellite power vision',
        'Advanced monitoring concept',
        'Priority fictional support',
      ],
      buttonText: 'Go Big',
      icon: Rocket,
      gradient: 'from-cyan-500/25 via-blue-600/20 to-purple-600/25',
      borderColor: 'border-cyan-400/50 shadow-cyan-glow',
      btnStyle: 'btn-fluid text-space-950 font-black',
    },
    {
      name: 'Galaxy Subscription',
      price: '₹999',
      period: '/month',
      tagline: 'Infinite imaginary perks and intergalactic peace of mind.',
      popular: false,
      badge: 'COSMIC MEMBERSHIP',
      features: [
        'Premium monitoring concept',
        'Bill Shock Predictor',
        'Galaxy support plan',
        'Exclusive imaginary upgrades',
      ],
      buttonText: 'Join the Galaxy',
      icon: Shield,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-white/10 hover:border-purple-400/40',
      btnStyle: 'btn-glass text-white hover:text-purple-300',
    },
  ];

  const handlePlanClick = (planName: string, price: string) => {
    playSciFiSound('success');
    onSelectPlan(planName, price);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fictional Commercial Models</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Level of Madness.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Whether you want to power a single bedroom toaster or command an entire orbital constellation, we have a hypothetical package ready.
          </p>

          {/* Fictional Pricing Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>All pricing is fictional concept pricing created for a student sales pitch demonstration.</span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl liquid-glass-card p-8 border ${plan.borderColor} transition-all duration-300 flex flex-col justify-between ${
                  plan.popular ? 'lg:-translate-y-3' : ''
                }`}
              >
                {/* Popular Ribbon if applicable */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-space-950 text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-cyan-400/40">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                      {plan.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {plan.period}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400/80 mt-1 uppercase">
                      ✦ Fictional Concept Price
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => handlePlanClick(plan.name, plan.price)}
                  id={`pricing-btn-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${plan.btnStyle}`}
                >
                  <span>{plan.buttonText}</span>
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
