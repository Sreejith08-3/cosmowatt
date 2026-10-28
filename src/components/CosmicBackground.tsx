import React, { useMemo } from 'react';

export const CosmicBackground: React.FC = () => {
  // Generate random twinkling stars deterministically
  const stars = useMemo(() => {
    return Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      x: (i * 19.3) % 100,
      y: (i * 31.7) % 100,
      size: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1),
      opacity: 0.2 + ((i % 5) * 0.16),
      delay: (i % 7) * 0.7,
      duration: 3 + (i % 4) * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020612]">
      {/* Deep Space Radial Nebula Glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-purple-600/12 via-indigo-600/6 to-transparent blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-cyan-500/8 via-purple-700/5 to-transparent blur-[160px]" />

      {/* Subtle Orbital Horizon Arc */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1400px] h-[500px] rounded-[100%] border-t border-cyan-500/10 opacity-30 pointer-events-none" />
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[1600px] h-[600px] rounded-[100%] border-t border-purple-500/10 opacity-20 pointer-events-none" />

      {/* Stars Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white transition-opacity"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 1 ? '0 0 6px rgba(0, 246, 255, 0.8)' : 'none',
            animation: `pulseGlow ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
