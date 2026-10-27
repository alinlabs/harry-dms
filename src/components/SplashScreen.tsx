import { useLanguage } from '../contexts/LanguageContext';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DmsLogo from './DmsLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

const TOTAL_DURATION_MS = 3800;

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(100, (elapsed / TOTAL_DURATION_MS) * 100);
      setProgress(currentPct);

      if (elapsed >= TOTAL_DURATION_MS) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 120);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-brand-900 text-slate-900 dark:text-white flex items-center justify-center overflow-hidden transition-colors duration-500 select-text">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-blue-700/10 dark:bg-blue-900/25 rounded-full blur-[130px] transition-colors duration-500" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] bg-slate-900/10 dark:bg-indigo-950/40 rounded-full blur-[130px] transition-colors duration-500" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center text-center px-4 w-full relative z-10 max-w-4xl"
      >
        {/* Brand Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 flex flex-col items-center relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 dark:bg-cyan-500/20 rounded-full blur-2xl scale-125 pointer-events-none" />
          <DmsLogo size="lg" showText={false} />
        </motion.div>

        {/* Company Header - Warna Hitam */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-black dark:text-white mb-2.5"
        >
          PT. DIGITAL MULTI SINERGY
        </motion.div>

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3"
        >
          DRIVING THE GROWTH
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300">
            WINNING THE MARKET
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-medium mb-4"
        >
          {language === 'en' ? 'Empowering Modern Enterprises with High-Availability FTTH, Mission-Critical Data Centers, and Integrated IT Ecosystems.' : 'Menjawab Kebutuhan Korporasi Modern Melalui Solusi FTTH Berkeandalan Tinggi, Infrastruktur Data Center, dan Ekosistem IT Terintegrasi.'}
        </motion.p>

        {/* Presenter Name: By Harry Gultom */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 tracking-wide mt-2"
        >
          By Harry Gultom
        </motion.div>
      </motion.div>

      {/* Loading line indicator at the very bottom of the screen */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-1 sm:h-1.5 bg-slate-100 dark:bg-slate-800/60 z-50 overflow-hidden">
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
