import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Language, getCachedLang, setCachedLang, DEFAULT_LANG } from '../utils/urlManager';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language | 'id') => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; initialLang?: Language }> = ({ 
  children,
  initialLang
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return initialLang || getCachedLang() || DEFAULT_LANG;
  });

  useEffect(() => {
    if (initialLang && initialLang !== language) {
      setLanguageState(initialLang);
    }
  }, [initialLang]);

  useEffect(() => {
    setCachedLang(language);
  }, [language]);

  const setLanguage = (lang: Language | 'id') => {
    const normalized: Language = lang === 'id' ? 'in' : lang;
    setLanguageState(normalized);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'in' ? 'en' : 'in'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
