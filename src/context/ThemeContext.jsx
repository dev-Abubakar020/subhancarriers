import React, { createContext, useContext, useState, useEffect } from 'react';

export const colorPalettes = [
  {
    id: 'amber',
    name: 'Amber Flame',
    badge: 'Classic Freight',
    accent: '#FF8A00',
    accentHover: '#EA580C',
    accentGlow: 'rgba(255, 138, 0, 0.45)',
    secondary: '#1D4ED8',
    secondaryHover: '#1E40AF',
    highlight: '#14B8A6',
    previewGradient: 'from-amber-500 to-blue-600',
  },
  {
    id: 'emerald',
    name: 'Emerald Fleet',
    badge: 'Eco Logistics',
    accent: '#10B981',
    accentHover: '#059669',
    accentGlow: 'rgba(16, 185, 129, 0.45)',
    secondary: '#0F766E',
    secondaryHover: '#115E59',
    highlight: '#06B6D4',
    previewGradient: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    badge: 'High-Tech Telematics',
    accent: '#06B6D4',
    accentHover: '#0891B2',
    accentGlow: 'rgba(6, 182, 212, 0.45)',
    secondary: '#2563EB',
    secondaryHover: '#1D4ED8',
    highlight: '#8B5CF6',
    previewGradient: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'ruby',
    name: 'Sunset Ruby',
    badge: 'Expedited Hot-Shot',
    accent: '#F43F5E',
    accentHover: '#E11D48',
    accentGlow: 'rgba(244, 63, 94, 0.45)',
    secondary: '#BE123C',
    secondaryHover: '#9F1239',
    highlight: '#F59E0B',
    previewGradient: 'from-rose-500 to-amber-500',
  },
  {
    id: 'violet',
    name: 'Royal Violet',
    badge: 'Premium Haulage',
    accent: '#8B5CF6',
    accentHover: '#7C3AED',
    accentGlow: 'rgba(139, 92, 246, 0.45)',
    secondary: '#4F46E5',
    secondaryHover: '#4338CA',
    highlight: '#EC4899',
    previewGradient: 'from-purple-500 to-indigo-600',
  },
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('subhan_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Accent Color Palette ID
  const [accentId, setAccentId] = useState(() => {
    const saved = localStorage.getItem('subhan_accent_color');
    return saved || 'amber';
  });

  const activePalette = colorPalettes.find(p => p.id === accentId) || colorPalettes[0];

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('subhan_theme', theme);
  }, [theme]);

  // Apply active accent colors to CSS variables on root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-accent', activePalette.accent);
    root.style.setProperty('--color-accent-hover', activePalette.accentHover);
    root.style.setProperty('--color-accent-glow', activePalette.accentGlow);
    root.style.setProperty('--color-secondary', activePalette.secondary);
    root.style.setProperty('--color-secondary-hover', activePalette.secondaryHover);
    root.style.setProperty('--color-highlight', activePalette.highlight);
    localStorage.setItem('subhan_accent_color', accentId);
  }, [accentId, activePalette]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setAccentColor = (id) => {
    setAccentId(id);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark: theme === 'dark',
        accentId,
        setAccentColor,
        activePalette,
        colorPalettes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
