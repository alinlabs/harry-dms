import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, LayoutGrid 
} from 'lucide-react';
import DmsLogo from './DmsLogo';

import { useLanguage, Language } from '../contexts/LanguageContext';
import {
  getSidebarSections,
  getCoverSlideInfo,
  TOTAL_SLIDES,
} from '../slide/registry';

export interface SlideItem {
  id: number;
  slideNumber?: number;
  folder?: string;
  sectionId?: number;
  title: string;
  navTitle?: string;
  category?: string;
  section?: string;
}

export const getSections = (lang: Language | 'id' = 'in') => getSidebarSections(lang);
export const SECTIONS = getSections('id');

interface SidebarProps {
  mode?: 'docked' | 'drawer';
  isOpen?: boolean;
  onClose?: () => void;
  currentSlide?: number;
  onSelectSlide?: (index: number) => void;
  onJumpToSlide?: (index: number) => void;
  onStartPresentation?: () => void;
  onExitPresentation?: () => void;
  slides?: SlideItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  mode = 'docked',
  isOpen = false,
  onClose = () => {},
  currentSlide = 0,
  onSelectSlide,
  onJumpToSlide,
}) => {
  const { language } = useLanguage();
  const sections = useMemo(() => getSidebarSections(language), [language]);
  const coverSlide = useMemo(() => getCoverSlideInfo(language), [language]);

  // Open state for each dropdown section - default ALL opened
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    getSidebarSections(language).forEach(s => {
      initial[s.id] = true;
    });
    return initial;
  });

  // Automatically expand current section when slide changes
  useEffect(() => {
    const activeSection = sections.find(s => s.steps.some(st => st.index === currentSlide));
    if (activeSection) {
      setOpenSections(prev => {
        if (prev[activeSection.id]) {
          return prev;
        }
        return { ...prev, [activeSection.id]: true };
      });
    }
  }, [currentSlide, sections]);

  const toggleSection = (id: number) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSlideClick = (index: number) => {
    if (onSelectSlide) {
      onSelectSlide(index);
    } else if (onJumpToSlide) {
      onJumpToSlide(index);
    }
    if (mode === 'drawer' && onClose) {
      onClose();
    }
  };

  const sidebarContent = (
    <aside 
      className={`w-72 sm:w-80 flex-shrink-0 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-20 relative font-sans select-none h-full ${
        mode === 'drawer' ? 'h-screen fixed top-0 left-0 bottom-0 z-50' : 'h-full'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <DmsLogo size="sm" showText={true} subtitle="WINNING THE MARKET" />
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Tutup Ikhtisar Sidebar"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Navigation List - Standard Sidebar Menu with Accordion Dropdowns */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 no-scrollbar">
        {/* Top Cover / Dashboard Item */}
        {coverSlide && (
          <button
            onClick={() => handleSlideClick(coverSlide.index)}
            className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-colors text-left group ${
              currentSlide === coverSlide.index
                ? 'bg-blue-50/90 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 font-semibold'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <LayoutGrid 
                size={18} 
                className={`shrink-0 ${
                  currentSlide === coverSlide.index 
                    ? 'text-blue-600 dark:text-cyan-400' 
                    : 'text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400'
                }`} 
              />
              <span className="text-sm truncate">{coverSlide.name}</span>
            </div>
            <span className="text-[10px] font-bold tabular-nums text-slate-400 dark:text-slate-500 shrink-0">
              {coverSlide.folder}
            </span>
          </button>
        )}

        {/* Category Header */}
        <div className="px-3 pt-3 pb-1">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
            {language === 'en' ? `Presentation Structure (${TOTAL_SLIDES} Slides)` : `Struktur Presentasi (${TOTAL_SLIDES} Slide)`}
          </span>
        </div>

        {/* Dropdown Section Menus */}
        <div className="space-y-0.5">
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = !!openSections[section.id];
            const isSectionActive = section.steps.some(s => s.index === currentSlide);

            return (
              <div key={section.id} className="py-0.5">
                {/* Main Section Header with Dropdown Chevron */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors text-left group ${
                    isSectionActive
                      ? 'bg-slate-100/90 dark:bg-slate-800/90 text-blue-600 dark:text-cyan-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon 
                      size={18} 
                      className={`shrink-0 ${
                        isSectionActive 
                          ? 'text-blue-600 dark:text-cyan-400' 
                          : 'text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400'
                      }`} 
                    />
                    <span className="text-sm truncate">{section.title}</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-cyan-400' : 'text-slate-400'
                    }`} 
                  />
                </button>

                {/* Dropdown Child Items with Timeline Line & Dots */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="relative ml-5 pl-5 border-l border-slate-200 dark:border-slate-800 my-1 space-y-0.5">
                        {section.steps.map((step) => {
                          const isStepActive = currentSlide === step.index;

                          return (
                            <button
                              key={step.index}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSlideClick(step.index);
                              }}
                              className={`w-full flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs text-left transition-all relative ${
                                isStepActive
                                  ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 font-bold'
                                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60 font-medium'
                              }`}
                            >
                              {/* Dot on the timeline connector */}
                              <span 
                                className={`absolute -left-[24px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 transition-colors ${
                                  isStepActive 
                                    ? 'bg-blue-600 border-white dark:border-slate-900 ring-2 ring-blue-500/30' 
                                    : 'bg-slate-300 dark:bg-slate-600 border-white dark:border-slate-900'
                                }`} 
                              />
                              <span className="truncate flex-1">{step.name}</span>
                              <span className={`text-[10px] tabular-nums shrink-0 ${
                                isStepActive
                                  ? 'text-blue-600 dark:text-cyan-400 font-bold'
                                  : 'text-slate-400 dark:text-slate-500 font-semibold'
                              }`}>
                                {step.folder}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Presenter Info - Sejajar dengan BottomAction (Tanpa circle image) */}
      <div className="h-[57px] sm:h-[60px] px-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center">
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs font-bold text-slate-900 dark:text-white truncate leading-tight">
            Harry Gultom
          </span>
          <span className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 tracking-wider truncate">
            {language === 'en' ? 'Candidate Sales Manager IT & FTTH' : 'Kandidat Sales Manager IT & FTTH'}
          </span>
        </div>
      </div>
    </aside>
  );

  if (mode === 'docked') {
    return sidebarContent;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Transparent Backdrop to close when clicking outside without darkening screen */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-transparent z-40 pointer-events-auto"
          />
          {/* Animated Drawer */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 left-0 bottom-0 z-50"
          >
            {sidebarContent}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
