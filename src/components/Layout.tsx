import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';
import Header from './Header';
import Sidebar, { SlideItem } from './Sidebar';
import BottomAction from './BottomAction';

interface LayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  title: string;
  sectionTitle?: string;
  slides?: SlideItem[];
  onSelectSlide?: (index: number) => void;
  onExitPresentation?: () => void;
  initialSidebarOpen?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  nextSlide, 
  prevSlide,
  title,
  sectionTitle,
  slides = [],
  onSelectSlide = () => {},
  onExitPresentation,
  initialSidebarOpen = true,
}) => {
  const { isLocked } = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialSidebarOpen);
  const [isFullView, setIsFullView] = useState(false);
  const mainScrollRef = useRef<HTMLElement | null>(null);

  // Pastikan setiap kali berpindah slide (dari Sidebar, Next, Prev, atau Keyboard), posisi scroll selalu kembali ke paling atas
  useLayoutEffect(() => {
    const resetScrollToTop = () => {
      if (mainScrollRef.current) {
        mainScrollRef.current.scrollTop = 0;
        mainScrollRef.current.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        const nestedScrollables = mainScrollRef.current.querySelectorAll<HTMLElement>('[class*="overflow-y-auto"], [class*="overflow-auto"]');
        nestedScrollables.forEach((el) => {
          el.scrollTop = 0;
        });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScrollToTop();
    const rafId = window.requestAnimationFrame(resetScrollToTop);
    const timerId = window.setTimeout(resetScrollToTop, 60);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timerId);
    };
  }, [currentSlide]);

  // Sync with fullscreen change and Escape key
  useEffect(() => {
    const handleFullscreenChange = () => {
      const inFullscreen = !!document.fullscreenElement;
      setIsFullView(inFullscreen);
      if (inFullscreen) {
        setIsSidebarOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullView) {
        setIsFullView(false);
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullView]);

  const handleToggleFullView = () => {
    setIsFullView((prev) => {
      const next = !prev;
      if (next) {
        setIsSidebarOpen(false);
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
      return next;
    });
  };

  // Logic untuk navigasi klik area dominan luar konten
  const handleScreenClick = (e: React.MouseEvent) => {
    // Block interaction if locked or sidebar open
    if (isLocked || (isSidebarOpen && !isFullView)) return;

    // Jangan trigger navigasi jika user sedang memblok/menyeleksi teks
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      return;
    }

    const target = e.target as HTMLElement;

    // 1. Cek apakah yang diklik adalah elemen interaktif spesifik
    const isInteractive = 
      target.closest('button') || 
      target.closest('a') || 
      target.closest('input') || 
      target.closest('.recharts-wrapper') ||
      target.closest('aside') ||
      target.closest('footer');

    if (isInteractive) return;

    // 2. Cek apakah klik terjadi di dalam area konten utama
    if (target.closest('.main-content-wrapper')) {
      return;
    }

    const width = window.innerWidth;
    const clickX = e.clientX;

    // Dominan Kanan = Next, Dominan Kiri = Prev
    if (clickX > width / 2) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div 
      className={`relative h-screen w-full bg-white dark:bg-brand-900 text-slate-900 dark:text-white overflow-hidden flex transition-colors duration-500 ${isLocked ? 'cursor-wait pointer-events-none' : 'cursor-default'}`}
      onClick={handleScreenClick}
    >
      {/* Background Ambience - Deep Blue & Navy only, no amber/yellow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-blue-700/10 dark:bg-blue-900/25 rounded-full blur-[130px] transition-colors duration-500" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] bg-slate-900/10 dark:bg-indigo-950/40 rounded-full blur-[130px] transition-colors duration-500" />
      </div>

      {/* KIRI: Unified Sidebar (full height 100vh) - Tersembunyi saat Full View aktif */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && !isFullView && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-screen flex-shrink-0 z-30 overflow-hidden border-r border-slate-200 dark:border-slate-800"
          >
            <Sidebar
              mode="docked"
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              slides={slides}
              currentSlide={currentSlide}
              onSelectSlide={(index) => {
                onSelectSlide(index);
              }}
              onStartPresentation={() => setIsSidebarOpen(false)}
              onExitPresentation={onExitPresentation}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* KANAN: Main Layout Area (Header, Slide Content, and BottomAction) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10 w-full min-w-0">
        {/* Top Header - Bersih konsisten tanpa bullet status atau banner pratinjau */}
        <Header 
          title={title}
          sectionTitle={sectionTitle} 
          onExitPresentation={onExitPresentation} 
          isLocked={isLocked}
          onOpenSidebar={() => {
            if (isFullView) {
              setIsFullView(false);
              if (document.fullscreenElement && document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
              }
            }
            setIsSidebarOpen(prev => !prev);
          }}
          isFullView={isFullView}
          onToggleFullView={handleToggleFullView}
        />

        {/* Slide Content Area - Scrollable (Always starts from top on slide change) */}
        <main
          ref={mainScrollRef}
          className="flex-1 relative z-10 w-full overflow-y-auto no-scrollbar"
        >
          <div className={`min-h-full flex flex-col items-center justify-start ${isFullView ? 'p-2 sm:p-4 md:p-6' : 'p-3 sm:p-6 md:p-8'}`}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} 
              onAnimationStart={() => {
                if (mainScrollRef.current) {
                  mainScrollRef.current.scrollTop = 0;
                }
              }}
              className="w-full max-w-[1600px] mx-auto my-auto flex flex-col justify-start main-content-wrapper"
            >
              {children}
            </motion.div>
          </div>
        </main>

        {/* Bottom Action Bar - Menampilkan full controls saat mode normal, dan hanya progress line per page saat full view */}
        <BottomAction
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={nextSlide}
          onPrev={prevSlide}
          onOpenSidebar={() => {
            if (isFullView) {
              setIsFullView(false);
              if (document.fullscreenElement && document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
              }
            }
            setIsSidebarOpen(prev => !prev);
          }}
          onExitPresentation={onExitPresentation}
          currentTitle={title}
          isLocked={isLocked}
          isFullView={isFullView}
        />
      </div>
    </div>
  );
};

export default Layout;
