import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Theme, getCachedTheme, setCachedTheme, DEFAULT_THEME } from '../utils/urlManager';

export type { Theme };

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode; initialTheme?: Theme }> = ({ 
  children,
  initialTheme
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    return initialTheme || getCachedTheme() || DEFAULT_THEME;
  });

  useEffect(() => {
    if (initialTheme && initialTheme !== theme) {
      setThemeState(initialTheme);
    }
  }, [initialTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
    setCachedTheme(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};