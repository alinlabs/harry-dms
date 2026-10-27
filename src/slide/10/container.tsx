import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Slide Header */}
      <div className="text-center mb-1.5 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* Top 4 Key Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 shrink-0">
        {slideData.keyMetrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="py-1.5 px-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center"
          >
            <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              {metric.label}
            </span>
            <div className="text-base sm:text-lg font-black text-blue-600 dark:text-cyan-400 tabular-nums leading-tight my-0.5">
              {metric.value}
            </div>
            <span className="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium leading-none">
              {metric.desc}
            </span>
          </div>
        ))}
      </div>

      {/* 8 B2B Sales Playbooks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 flex-1 items-stretch">
        {slideData.playbooks.map((pb) => (
          <div
            key={pb.id}
            className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
          >
            {/* Card Content */}
            <div>
              {/* Badge: Category in Blue (Unified Style) */}
              <div className="mb-2">
                <span className="inline-block text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  {pb.tag}
                </span>
              </div>

              {/* Playbook Title */}
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug mb-1.5">
                {pb.title}
              </h3>

              {/* Concise Description */}
              <p className="text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {pb.desc}
              </p>
            </div>

            {/* Card Footer: Highlight Hook with Blue Checkmark */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-bold">
              <CheckCircle2 size={13} className="text-blue-500 dark:text-cyan-400 shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 truncate">
                {pb.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
