import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Menu, X, Check, Maximize2, Minimize2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import DmsLogo from './DmsLogo';

interface HeaderProps {
  title?: string;
  sectionTitle?: string;
  onExitPresentation?: () => void;
  isLocked?: boolean;
  onOpenSidebar?: () => void;
  isFullView?: boolean;
  onToggleFullView?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  sectionTitle,
  onExitPresentation,
  isLocked = false,
  onOpenSidebar,
  isFullView,
  onToggleFullView,
}) => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const gearButtonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Monitor fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Close popup when clicking outside or pressing Escape
  useEffect(() => {
    if (!isSettingsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        gearButtonRef.current &&
        !gearButtonRef.current.contains(event.target as Node)
      ) {
        setIsSettingsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSettingsOpen]);

  return (
    <header className="h-16 w-full z-40 bg-transparent shrink-0 px-4 sm:px-8 md:px-12 relative">
      <div className="h-full w-full max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Left Side: Brand Logo & Company Title with Section Subtitle (tightened spacing) */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <DmsLogo size="sm" showText={false} />
          <div className="min-w-0 flex flex-col justify-center">
            <h1 className="font-black text-slate-900 dark:text-white text-xs md:text-sm leading-tight tracking-tight truncate">
              PT. DIGITAL MULTI SINERGY
            </h1>
            {sectionTitle && (
              <span className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide truncate mt-0.5 leading-none">
                {sectionTitle}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: [icon perluas] [icon gear] | [icon menu hamburger] */}
        <div className={`relative flex items-center gap-1.5 sm:gap-2 ${isLocked ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
          {/* 1. Icon Perluas (Fullscreen / Full View / Expand) */}
          {(() => {
            const isFull = isFullView !== undefined ? isFullView : isFullscreen;
            return (
              <button
                onClick={() => {
                  if (onToggleFullView) {
                    onToggleFullView();
                  } else {
                    handleToggleFullscreen();
                  }
                }}
                className={`p-2.5 rounded-xl border transition-all backdrop-blur-sm shadow-sm cursor-pointer ${
                  isFull
                    ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-400 dark:border-blue-500 text-blue-600 dark:text-cyan-400 ring-2 ring-blue-500/20'
                    : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300'
                }`}
                title={isFull ? (language === 'en' ? 'Exit Full View' : 'Perkecil Layar') : (language === 'en' ? 'Full View' : 'Perluas Layar')}
                aria-label={isFull ? (language === 'en' ? 'Exit Full View' : 'Perkecil Layar') : (language === 'en' ? 'Full View' : 'Perluas Layar')}
              >
                {isFull ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            );
          })()}

          {/* 2. Icon Gear (Opens Settings Popup) */}
          <button
            ref={gearButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setIsSettingsOpen((prev) => !prev);
            }}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer backdrop-blur-sm shadow-sm ${
              isSettingsOpen
                ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-400 dark:border-blue-500 text-blue-600 dark:text-cyan-400 ring-2 ring-blue-500/20'
                : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
            title={language === 'en' ? 'Settings (Theme & Language)' : 'Pengaturan (Tema & Bahasa)'}
            aria-label={language === 'en' ? 'Settings' : 'Pengaturan'}
          >
            <Settings 
              size={18} 
              className={`transition-transform duration-300 ${isSettingsOpen ? 'rotate-90 text-blue-600 dark:text-cyan-400' : ''}`} 
            />
          </button>

          {/* 3. Icon Menu Hamburger (Opens / Toggles Sidebar) */}
          {(onOpenSidebar || onExitPresentation) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenSidebar) {
                  onOpenSidebar();
                } else if (onExitPresentation) {
                  onExitPresentation();
                }
              }}
              className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-slate-700 dark:text-slate-200 backdrop-blur-sm shadow-sm cursor-pointer"
              title={language === 'en' ? 'Open / Close Sidebar' : 'Buka / Tutup Sidebar'}
              aria-label={language === 'en' ? 'Sidebar Menu' : 'Menu Hamburger'}
            >
              <Menu size={18} />
            </button>
          )}

          {/* Popup Menu (Tema & Bahasa) */}
          <AnimatePresence>
            {isSettingsOpen && (
              <motion.div
                ref={popupRef}
                initial={{ opacity: 0, scale: 0.94, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 8 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute right-0 top-full mt-2.5 w-72 sm:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 z-50 select-none text-slate-900 dark:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Popup Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                      <Settings size={15} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-tight leading-none text-slate-900 dark:text-white">
                        {language === 'en' ? 'Settings' : 'Pengaturan'}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {language === 'en' ? 'Theme & Language' : 'Tema & Bahasa'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Tutup"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Section 1: Pengaturan Tema */}
                <div className="pt-3 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {language === 'en' ? 'Display Theme' : 'Tema Tampilan'}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 capitalize">
                      {theme === 'dark' ? (language === 'en' ? 'Dark Mode' : 'Mode Gelap') : (language === 'en' ? 'Light Mode' : 'Mode Terang')}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Light Mode Button */}
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        theme === 'light'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20'
                          : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200/80 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{language === 'en' ? 'Light' : 'Terang'}</span>
                    </button>

                    {/* Dark Mode Button */}
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        theme === 'dark'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20'
                          : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200/80 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{language === 'en' ? 'Dark' : 'Gelap'}</span>
                    </button>
                  </div>
                </div>

                {/* Section 2: Pengaturan Bahasa */}
                <div className="pt-3 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {language === 'en' ? 'Language' : 'Bahasa Dokumen'}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 uppercase">
                      {language === 'en' ? 'English' : 'Bahasa Indonesia'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Bahasa Indonesia Button */}
                    <button
                      onClick={() => setLanguage('in')}
                      className={`flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        language === 'in'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20'
                          : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200/80 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>Indonesia</span>
                    </button>

                    {/* English Button */}
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        language === 'en'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20'
                          : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-200/80 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>English</span>
                    </button>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Check size={11} className="text-emerald-500" />
                    {language === 'en' ? 'Auto-saved' : 'Tersimpan otomatis'}
                  </span>
                  <span>DMS v2.6</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
