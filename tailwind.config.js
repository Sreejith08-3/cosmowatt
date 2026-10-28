/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#02040a',
          900: '#050b18',
          850: '#09132b',
          800: '#0e1b3d',
          700: '#16285a',
        },
        electric: {
          cyan: '#00f6ff',
          neon: '#00b4d8',
          purple: '#a855f7',
          violet: '#7c3aed',
          orange: '#ff6b35',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'orbit 28s linear infinite',
        'orbit-reverse': 'orbitReverse 38s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'liquid-flow': 'liquidFlow 12s ease infinite',
        'beam-pulse': 'beamPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        liquidFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        beamPulse: {
          '0%, 100%': { opacity: '0.35', filter: 'blur(3px)' },
          '50%': { opacity: '0.9', filter: 'blur(1px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      boxShadow: {
        'glass-glow': '0 8px 32px 0 rgba(0, 246, 255, 0.15)',
        'cyan-glow': '0 0 25px rgba(0, 246, 255, 0.45)',
        'purple-glow': '0 0 25px rgba(168, 85, 247, 0.45)',
        'orange-glow': '0 0 25px rgba(255, 107, 53, 0.45)',
      }
    },
  },
  plugins: [],
}
