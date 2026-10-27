import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Slide01 from '../slide/01';

interface DashboardOverviewProps {
  onStartPresentation: () => void;
  onJumpToSlide: (index: number, step?: number) => void;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ onStartPresentation, onJumpToSlide }) => {
  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans overflow-hidden">
      {/* Unified Sidebar Navigation Component (Exact Match with Image) */}
      <Sidebar 
        mode="docked" 
        onJumpToSlide={onJumpToSlide} 
        onStartPresentation={onStartPresentation} 
      />

      {/* Main Content Area (Opening Preview) */}
      <main className="flex-1 relative overflow-hidden flex flex-col bg-white dark:bg-brand-950 shadow-2xl z-10">
        {/* Ambience Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[140px] transition-colors duration-500" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-100 dark:bg-cyan-500/10 rounded-full blur-[140px] transition-colors duration-500" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Top Bar Preview Status */}
          <div className="h-16 border-b border-slate-100/60 dark:border-slate-800/60 flex items-center justify-between px-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                PT. Digital Multi Sinergy — Strategic Plan Ready
              </span>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Presenter: Harry Gultom (Sales Manager IT &amp; FTTH)
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6 md:p-10 overflow-y-auto no-scrollbar">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl"
            >
              <Slide01 />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardOverview;
