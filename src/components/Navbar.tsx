import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onExploreMadness?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '#technology' },
    { name: 'Live HUD', href: '#telemetry' },
    { name: 'Architecture', href: '#features' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-space-950/80 backdrop-blur-xl border-b border-cyan-500/15 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 text-white font-bold group"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Zap className="w-4 h-4 fill-cyan-400" />
            </div>
            <span className="text-base sm:text-lg font-black tracking-wider text-white">
              WATT THE HELL <span className="text-cyan-400">⚡</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 px-4 py-1.5 rounded-full liquid-glass border-white/10 text-xs font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-300 hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#cta"
              onClick={(e) => handleLinkClick(e, '#cta')}
              className="btn-fluid px-4 py-2 rounded-xl text-xs font-bold text-space-950 flex items-center gap-1.5 shadow-md hover:shadow-cyan-400/30 transition-all"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl liquid-glass text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl liquid-glass border-cyan-500/20 shadow-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm text-slate-200 hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={(e) => handleLinkClick(e, '#cta')}
                className="btn-fluid py-2.5 rounded-xl text-xs font-bold text-space-950 text-center mt-1"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
