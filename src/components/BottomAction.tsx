import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BottomActionProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onOpenSidebar?: () => void;
  onExitPresentation?: () => void;
  currentTitle?: string;
  isLocked?: boolean;
  isFullView?: boolean;
}

export const BottomAction: React.FC<BottomActionProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onOpenSidebar,
  isLocked = false,
  isFullView = false,
}) => {
  const { language } = useLanguage();
  const progressPercentage = Math.round(((currentSlide + 1) / totalSlides) * 100);
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - 1;

  if (isFullView) {
    return (
      <footer 
        className="w-full shrink-0 z-40 bg-transparent select-none transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Line per page tetap ada di full view */}
        <div className="w-full h-1 bg-slate-200/80 dark:bg-slate-800 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </footer>
    );
  }

  return (
    <footer 
      className="w-full shrink-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800/80 shadow-[0_-4px_25px_rgba(0,0,0,0.06)] select-none transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Slide Progress Bar */}
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-[1600px] mx-auto py-2.5 flex items-center justify-between">
          {/* KIRI: Tombol Sebelumnya */}
          <button
            onClick={onPrev}
            disabled={isFirstSlide || isLocked}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              isFirstSlide || isLocked
                ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-blue-400 active:scale-95'
            }`}
            title={language === 'en' ? "Previous Slide (Left Arrow)" : "Halaman Sebelumnya (Panah Kiri)"}
          >
            <ChevronLeft size={18} />
            <span>{language === 'en' ? 'Previous' : 'Sebelumnya'}</span>
          </button>

          {/* TENGAH: Format angka halaman tanpa card atau badge dengan font teks normal */}
          <div 
            onClick={onOpenSidebar}
            className="cursor-pointer text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            title={language === 'en' ? "Click to open slide outline" : "Klik untuk membuka Ikhtisar Slide"}
          >
            <span>{currentSlide + 1}/{totalSlides}</span>
          </div>

          {/* KANAN: Tombol Berikutnya */}
          <button
            onClick={onNext}
            disabled={isLocked}
            className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-md active:scale-95 ${
              isLastSlide
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
            }`}
            title={isLastSlide ? (language === 'en' ? "Finish Presentation" : "Selesai Presentasi") : (language === 'en' ? "Next Slide (Right Arrow / Space)" : "Halaman Berikutnya (Panah Kanan / Spasi)")}
          >
            <span>{isLastSlide ? (language === 'en' ? 'Finish' : 'Selesai') : (language === 'en' ? 'Next' : 'Berikutnya')}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default BottomAction;
