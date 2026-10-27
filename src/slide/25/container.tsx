import React from 'react';
import { Target, TrendingUp, ShieldCheck, CheckCircle2, Clock, Calendar, Award } from 'lucide-react';
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

      {/* Main Grid: Left (7 Cols) = 6 KPI Pillars (3x2 or 2x3 grid), Right (5 Cols) = Cadence & Manager Role */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 flex-1 items-stretch min-h-0 mb-1.5">
        {/* Left Column (7 Cols): 6 KPI Metrics */}
        <div className="lg:col-span-7 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div className="mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                {language === 'en' ? '6 Individual Sales KPI Pillars' : '6 Pilar Penilaian Kinerja Sales'}
              </h3>
            </div>
            <span className="text-[9.5px] font-bold text-blue-600 dark:text-cyan-400">
              {language === 'en' ? '100% Weighted' : 'Total Bobot 100%'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
            {slideData.kpiItems.map((kpi) => (
              <div
                key={kpi.id}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate">
                      {kpi.category}
                    </span>
                    <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/50 tabular-nums shrink-0">
                      {kpi.weight}
                    </span>
                  </div>
                  <h4 className="text-[11px] font-black text-slate-900 dark:text-white leading-tight mb-1">
                    {kpi.title}
                  </h4>
                  <p className="text-[9.5px] text-slate-600 dark:text-slate-300 leading-snug">
                    {kpi.desc}
                  </p>
                </div>
                <div className="mt-1.5 pt-1 border-t border-slate-200/50 dark:border-slate-700/50 text-[8.5px] text-emerald-700 dark:text-emerald-400 font-bold leading-tight flex items-start gap-1">
                  <CheckCircle2 size={10} className="shrink-0 mt-0.5" />
                  <span>{kpi.metricCriteria}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (5 Cols): Review Cadence & Sales Manager Mandate */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2">
          {/* Review Cadence */}
          <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex-1 flex flex-col justify-between">
            <div className="mb-1.5 pb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                  {language === 'en' ? 'Review & Governance Cadence' : 'Ritme & Siklus Evaluasi'}
                </h3>
              </div>
              <span className="text-[9.5px] font-bold text-indigo-600 dark:text-indigo-400">
                Daily • Weekly • Monthly
              </span>
            </div>

            <div className="space-y-1.5 flex-1 flex flex-col justify-between">
              {slideData.cadence.map((cad, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-2"
                >
                  <div className="w-5 h-5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-black text-slate-900 dark:text-white block leading-tight">
                      {cad.period}
                    </span>
                    <p className="text-[9px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5 m-0">
                      {cad.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Manager Supervisory Focus */}
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/40 dark:from-slate-900 dark:to-blue-950/30 border border-blue-200/70 dark:border-cyan-500/30 shadow-2xs shrink-0">
            <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-blue-100 dark:border-slate-800">
              <Award size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
              <h4 className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'en' ? 'Sales Manager Core Accountabilities' : 'Tanggung Jawab Sales Manager (Harry Gultom)'}
              </h4>
            </div>
            <div className="space-y-1">
              {slideData.managerKPIs.map((item, mIdx) => (
                <div key={mIdx} className="flex items-start gap-1.5 text-[9px] text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={11} className="text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Principle Banner */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs shrink-0 flex items-center gap-2">
        <ShieldCheck size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
        <p className="text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300 leading-snug font-medium m-0">
          <strong className="text-blue-900 dark:text-cyan-300 font-black">Prinsip Manajemen: </strong>
          {language === 'en'
            ? 'Accountability is built on verifiable evidence. Performance is celebrated on realized Gross Margin, not unsubstantiated pipeline optimism.'
            : 'Akuntabilitas dibangun di atas bukti terverifikasi. Kinerja dihargai berdasarkan realisasi Laba Kotor (Gross Margin), bukan optimisme pipeline tanpa dasar.'}
        </p>
      </div>
    </div>
  );
};

export default Container;
