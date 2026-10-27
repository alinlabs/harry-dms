import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { TrendingUp, Target, Repeat, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const icons = [Target, Repeat, TrendingUp];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="text-center mb-1.5 shrink-0">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[10px] font-bold text-blue-700 dark:text-cyan-400 mb-1">
          <Sparkles size={11} />
          <span>{language === "en" ? "Tangible Growth Focus: Optimism & Execution Consistency" : "Fokus Pertumbuhan Nyata: Optimisme & Konsistensi"}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* Rationale Notice */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 mb-2 shrink-0 flex items-center gap-2">
        <TrendingUp size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
        <p className="text-[10px] sm:text-[10.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium m-0">
          <strong className="text-blue-900 dark:text-cyan-300 font-black">{slideData.growthPrinciple}: </strong>
          {slideData.rationale}
        </p>
      </div>

      {/* 3 Strategic Pillars Grid (Direct Display) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 flex-1 items-stretch mb-2">
        {slideData.strategicPillars.map((p, idx) => {
          const IconComp = icons[idx];

          return (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-600 text-white shadow-2xs">
                    {p.focus}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <IconComp size={13} />
                  </div>
                </div>

                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight mb-1.5">
                  {p.pillar}
                </h3>

                <p className="text-[10px] sm:text-[10.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-2 text-justify">
                  {p.description}
                </p>

                {/* Action Items List */}
                <div className="space-y-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                  {p.actionItems.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-1.5 text-[9.5px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={11} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 text-[8.5px] text-slate-400 font-bold">
                {language === "en" ? `Growth Pillar #${idx + 1}` : `Pilar Growth #${idx + 1}`}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 Pondasi Utama Konsistensi Growth */}
      <div className="p-2.5 px-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-1.5 mb-1.5">
          <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {language === "en" ? "4 Core Foundations of Execution Consistency & Discipline:" : "4 Pondasi Utama Konsistensi & Eksekusi Disiplin:"}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {slideData.foundations.map((f, idx) => (
            <div key={idx} className="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 flex flex-col gap-0.5">
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-900 dark:text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>{f.title}</span>
              </div>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight m-0">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
