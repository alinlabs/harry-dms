import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { BookOpen, CheckCircle2, FolderGit2, FileText, UserCheck, HelpCircle } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const pillarIcons = [FolderGit2, FileText, UserCheck, HelpCircle];

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

      {/* Top 4 Summary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 shrink-0">
        {slideData.summaryMetrics.map((item, idx) => (
          <div
            key={idx}
            className="py-1.5 px-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center"
          >
            <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              {item.label}
            </span>
            <div className="text-base sm:text-lg font-black text-blue-600 dark:text-cyan-400 tabular-nums leading-tight my-0.5">
              {item.value}
            </div>
            <span className="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium leading-none">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* 2 Dual-Track Training Columns (Direct Display, No Click Required) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-stretch mb-2">
        {slideData.tracks.map((track, idx) => {
          return (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
            >
              <div>
                {/* Header: Badge Minggu Ganjil/Genap hingga Fokus Rata Tengah */}
                <div className="text-center mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex justify-center mb-1.5">
                    <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-600 dark:bg-blue-600 text-white shadow-2xs">
                      {track.cadence}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight mb-1 text-center">
                    {track.title}
                  </h3>
                  <p className="text-[10.5px] text-blue-600 dark:text-cyan-400 font-bold text-center m-0">
                    {language === "en" ? "Focus: " : "Fokus: "}{track.focus}
                  </p>
                </div>

                {/* Curriculum Bullet Points */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">
                    {language === "en" ? "Curriculum & Discussion Syllabus:" : "Materi & Silabus Pembahasan:"}
                  </span>
                  {track.curriculum.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-1.5 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={12} className="text-blue-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 Knowledge Enablement Pillars Bar */}
      <div className="p-2.5 px-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          {slideData.knowledgePillars.map((pil, pIdx) => {
            const Icon = pillarIcons[pIdx] || BookOpen;

            return (
              <div key={pIdx} className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 flex items-start gap-2">
                <div className="p-1 rounded bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5">
                  <Icon size={12} />
                </div>
                <div>
                  <span className="font-bold text-[10.5px] text-slate-900 dark:text-white block leading-tight">
                    {pil.title}
                  </span>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 m-0">
                    {pil.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Container;
