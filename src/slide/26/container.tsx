import React from 'react';
import { Filter, CheckCircle2, ShieldCheck, ArrowRight, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="text-center mb-1.5 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* Top 4 Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 shrink-0">
        {slideData.summaryStats.map((stat, idx) => (
          <div
            key={idx}
            className="py-1.5 px-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center"
          >
            <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              {stat.label}
            </span>
            <div className="text-base sm:text-lg font-black text-blue-600 dark:text-cyan-400 tabular-nums leading-tight my-0.5">
              {stat.value}
            </div>
            <span className="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium leading-none">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Main Split: Left = 6 Funnel Stages (5 Cols), Right = 10 Objective Evidence Criteria (7 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 items-stretch min-h-0">
        {/* Left Column: 6 Funnel Stages */}
        <div className="lg:col-span-5 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div className="mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                {language === 'en' ? '6-Stage Funnel Qualification' : '6 Tahapan Funnel Penjualan'}
              </h3>
            </div>
            <span className="text-[9.5px] font-bold text-blue-600 dark:text-cyan-400 tabular-nums">
              10% → 100%
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-1.5">
            {slideData.funnelStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-1.5 px-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-2"
              >
                <div className="min-w-[42px] px-1 py-0.5 rounded-md bg-blue-600 text-white font-black text-[9px] text-center shrink-0">
                  {stage.probability}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                      {stage.stage}: {stage.name}
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    {stage.evidenceRequirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 10 Objective Evidence Criteria */}
        <div className="lg:col-span-7 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div className="mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                {language === 'en' ? '10 Evidence-Based Forecasting Criteria' : '10 Kriteria Bukti Objektif Forecasting'}
              </h3>
            </div>
            <span className="text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400">
              Wajib Terverifikasi
            </span>
          </div>

          {/* 10 Criteria in 2 columns of 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 flex-1 items-stretch">
            {slideData.criteria.map((crit) => (
              <div
                key={crit.number}
                className="p-1.5 px-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-400 text-[8.5px] font-black flex items-center justify-center shrink-0">
                      {crit.number}
                    </span>
                    <h4 className="text-[9.5px] font-black text-slate-900 dark:text-white truncate">
                      {crit.criterion}
                    </h4>
                  </div>
                  <p className="text-[8.5px] text-slate-500 dark:text-slate-400 leading-tight">
                    {crit.description}
                  </p>
                </div>
                <div className="mt-1 pt-0.5 border-t border-slate-100 dark:border-slate-800 text-[8px] font-bold text-blue-600 dark:text-cyan-400 truncate">
                  ✓ {crit.verificationMethod}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
