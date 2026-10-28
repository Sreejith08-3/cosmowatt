import React, { useEffect } from 'react';
import { X, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'clap' | 'pricing' | 'universe' | 'info';
  extraContent?: React.ReactNode;
}

export const InteractiveModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  extraContent,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl liquid-glass border border-cyan-400/30 shadow-2xl shadow-cyan-950/80 text-left transition-all transform scale-100 animate-scaleUp"
      >
        {/* Glow corner accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-inner">
            {type === 'clap' && <Zap className="w-6 h-6 animate-pulse text-cyan-300" />}
            {type === 'pricing' && <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
            {type === 'universe' && <Sparkles className="w-6 h-6 text-purple-300 animate-spin" style={{ animationDuration: '6s' }} />}
            {type === 'info' && <Zap className="w-6 h-6 text-cyan-300" />}
          </div>
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-400/80">Transmission Received</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
          </div>
        </div>

        {/* Body Message */}
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-4">
          {message}
        </p>

        {extraContent && (
          <div className="mt-4 pt-4 border-t border-white/10">
            {extraContent}
          </div>
        )}

        {/* Footer Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-space-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all"
          >
            Understood, Orbit On 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
