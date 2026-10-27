import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import DmsLogo from '../../components/DmsLogo';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto font-sans text-slate-800 dark:text-slate-100 select-text">
      {/* Brand Logo with Glow */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-5 flex flex-col items-center relative"
      >
        <div className="absolute inset-0 bg-blue-500/20 dark:bg-cyan-500/20 rounded-full blur-2xl scale-125 pointer-events-none" />
        <DmsLogo size="lg" showText={false} />
      </motion.div>

      {/* Company Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-slate-700 dark:text-slate-300 mb-2"
      >
        {slideData.company}
      </motion.div>

      {/* Slogan / Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
      >
        {slideData.headline}
        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-normal">
          {slideData.subHeadline}
        </span>
      </motion.h1>

      {/* Quote Harry Gultom - Clean Typography without Cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-2xl mx-auto mb-6 flex flex-col items-center"
      >
        <Quote size={20} className="text-blue-500/60 dark:text-cyan-400/60 mb-2 rotate-180" />
        <p className="text-sm sm:text-base md:text-lg italic text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          "{slideData.quote}"
        </p>
      </motion.div>

      {/* Author - Clean Centered */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
          {slideData.author}
        </div>
      </motion.div>
    </div>
  );
};

export default Container;
