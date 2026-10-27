import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { Calendar, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
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

      {/* 4 Quarters Grid (Langsung Ditampilkan Semua Tanpa Klik) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 flex-1 items-stretch mb-2">
        {slideData.quarters.map((q, idx) => {
          return (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
            >
              <div>
                {/* Header: Quarter Badge & Target Capaian */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-600 text-white shadow-2xs">
                    {q.quarter}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    {q.targetARR}
                  </span>
                </div>

                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight mb-1">
                  {q.title}
                </h3>

                <p className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                  <strong className="text-blue-600 dark:text-cyan-400 font-bold">{language === "en" ? "Focus: " : "Fokus: "}</strong>
                  {q.focus}
                </p>

                {/* Milestones Kunci */}
                <div className="space-y-1 mb-2">
                  <span className="text-[8.5px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">
                    {language === "en" ? "Key Milestones:" : "Milestones Kunci:"}
                  </span>
                  {q.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-1.5 text-[10px] sm:text-[10.5px] text-slate-700 dark:text-slate-300 leading-tight">
                      <CheckCircle2 size={11} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-justify">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Step Indicator */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                <span>{language === "en" ? `Quarter ${idx + 1} of 4` : `Triwulan ${idx + 1} dari 4`}</span>
                <span className="font-bold text-blue-600 dark:text-cyan-400">{language === "en" ? "FY 2027" : "Tahun 2027"}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Annual Target Summary Bar */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs shrink-0 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <TrendingUp size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
          <span className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 font-medium">
            <strong className="text-blue-900 dark:text-cyan-300 font-black">{language === "en" ? "Full-Year 2027 Target:" : "Sasaran Tahunan 2027:"} </strong>
            {language === "en"
              ? "Achieve commercial revenue growth across all 3 Product Pillars with +62% marginal profit acceleration and >35% Gross Margin."
              : "Pencapaian pertumbuhan komersial lintas 3 Pilar Produk dengan akselerasi pertumbuhan marginal +62% dan rasio laba kotor > 35%."}
          </span>
        </div>
        <span className="text-[9.5px] font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-2 py-0.5 rounded-md shrink-0">
          {language === "en" ? "Full Year 2027" : "Tahun Penuh 2027"}
        </span>
      </div>
    </div>
  );
};

export default Container;
