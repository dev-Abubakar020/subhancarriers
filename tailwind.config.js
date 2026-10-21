/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F3A',
          50: '#F0F4F9',
          100: '#DEE7F2',
          200: '#BCCEE4',
          300: '#8FB0D3',
          400: '#5A8CC0',
          500: '#346DAA',
          600: '#1D4F88',
          700: '#143864',
          800: '#0B1F3A',
          900: '#071426',
          950: '#040B15',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #1D4ED8)',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: 'var(--color-secondary, #3B82F6)',
          600: 'var(--color-secondary, #1D4ED8)',
          700: 'var(--color-secondary-hover, #1E40AF)',
          800: '#1E3A8A',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #FF8A00)',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          400: '#FB923C',
          500: 'var(--color-accent, #FF8A00)',
          600: 'var(--color-accent-hover, #EA580C)',
          700: '#C2410C',
        },
        highlight: {
          DEFAULT: 'var(--color-highlight, #14B8A6)',
          50: '#F0FDFA',
          100: '#CCFBF1',
          400: '#2DD4BF',
          500: 'var(--color-highlight, #14B8A6)',
          600: '#0D9488',
        },
        surface: {
          light: '#F5F7FA',
          card: '#FFFFFF',
          dark: '#071426',
          cardDark: '#0E2340',
          subtle: '#EDF2F7',
          subtleDark: '#11294A',
        },
        heading: '#0F172A',
        body: '#475569',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 31, 58, 0.06), 0 2px 6px -1px rgba(11, 31, 58, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(11, 31, 58, 0.08), 0 4px 12px -2px rgba(11, 31, 58, 0.04)',
        'glow-accent': '0 0 25px -3px var(--color-accent-glow, rgba(255, 138, 0, 0.45))',
        'glow-secondary': '0 0 25px -3px rgba(29, 78, 216, 0.4)',
        'glow-primary': '0 10px 30px -5px rgba(11, 31, 58, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1F3A 0%, #0E2A52 50%, var(--color-secondary, #1D4ED8) 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0B1F3A 0%, #071527 100%)',
        'accent-gradient': 'linear-gradient(135deg, var(--color-accent, #FF8A00) 0%, var(--color-accent-hover, #FF6B00) 100%)',
        'subtle-gradient': 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 247, 250, 0.95) 100%)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        roadDash: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'road-dash': 'roadDash 4s linear infinite',
      }
    },
  },
  plugins: [],
}
