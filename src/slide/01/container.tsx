import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Users } from 'lucide-react';
import { LottiePlayer } from '@/components/LottiePlayer';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const SHOW_LOTTIE_ON_COVER = false;
  const pillarIcons = [Compass, Layers, Users];

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 md:space-y-7 w-full min-h-[65vh] px-4 py-2">
      {/* Main Title: Driving The Growth / Winning The Market */}
      <div className="relative max-w-5xl">
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight select-none"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 pb-1">
            {slideData.titleLine1 || "Driving The Growth"}
          </span>
          <span className="block text-slate-900 dark:text-white">
            {slideData.titleLine2 || "Winning The Market"}
          </span>
        </motion.h1>
      </div>

      {/* Subtitle / Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
      >
        {slideData.subtitle}
      </motion.p>

      {/* 3 Pillar Cards: Strategy, Product, Team */}
      <motion.div 
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl pt-2 items-stretch"
      >
        {slideData.pillars.map((pillar, idx) => {
          const Icon = pillarIcons[idx] || Compass;
          const isHighlight = idx === 1;

          return (
            <div key={idx} className="flex flex-col items-center justify-center w-full">
              {SHOW_LOTTIE_ON_COVER && idx === 0 && (
                <div className="w-24 h-24 sm:w-28 sm:h-28 -mb-2 flex items-center justify-center relative z-10">
                  <LottiePlayer
                    className="w-full h-full"
                    title="Konektivitas FTTH Handal"
                  />
                </div>
              )}

              <div 
                className={`p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm text-center flex flex-col items-center justify-center hover:border-blue-500/40 transition-all hover:scale-[1.02] w-full min-h-[145px] h-full ${
                  isHighlight ? 'border-blue-500/40 shadow-blue-500/5 bg-gradient-to-b from-blue-50/40 via-white/80 to-white/90 dark:from-blue-950/20 dark:via-slate-900/60 dark:to-slate-900/80' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-2.5 border border-blue-100 dark:border-blue-800/40">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-blue-600 dark:text-cyan-400 mb-1.5 font-bold text-sm sm:text-base text-center">
                  {pillar.label}
                </div>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed text-center">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Presenter Footer Attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium"
      >
        <span>Presented by</span>
        <span className="font-bold text-slate-800 dark:text-slate-200">{slideData.presenter.name}</span>
        <span className="text-slate-300 dark:text-slate-600">•</span>
        <span>{slideData.presenter.role}</span>
      </motion.div>
    </div>
  );
};

export default Container;
