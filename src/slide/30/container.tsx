import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { BookOpen, ShieldAlert, ClipboardList, Award, CheckCircle2 } from 'lucide-react';
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

      {/* Main Content: 12-Col Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 items-stretch min-h-0">
        {/* Left Column (5 Cols): 3 Regulasi Utama Kepatuhan Bank Case */}
        <div className="lg:col-span-5 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div className="mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                {slideData.regulationsTitle}
              </h3>
            </div>
            <span className="text-[9.5px] font-bold text-blue-600 dark:text-cyan-400">
              SOP Wajib
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-2">
            {slideData.regulations.map((reg) => (
              <div
                key={reg.id}
                className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400 uppercase tracking-wide">
                    {reg.category}
                  </span>
                  <span className="text-[9.5px] font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                    {reg.SLA}
                  </span>
                </div>
                <h4 className="text-[11px] font-black text-slate-900 dark:text-white leading-snug mb-1">
                  {reg.title}
                </h4>
                <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-snug mb-1.5">
                  {reg.desc}
                </p>
                <div className="text-[9.5px] font-bold text-emerald-700 dark:text-emerald-400 flex items-start gap-1 leading-tight">
                  <CheckCircle2 size={11} className="shrink-0 mt-0.5" />
                  <span>{reg.mandatoryFocus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (7 Cols): 6 Unsur Bank Case & 4 Tujuan Strategis */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-2.5">
          {/* Top Box: 6 Unsur Wajib Dokumentasi Bank Case */}
          <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex-1 flex flex-col justify-between">
            <div className="mb-1.5 pb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ClipboardList size={15} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                  {slideData.anatomyTitle}
                </h3>
              </div>
              <span className="text-[9.5px] font-bold text-indigo-600 dark:text-indigo-400">
                6 Parameter Evaluasi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 items-stretch">
              {slideData.anatomyItems.map((item) => (
                <div
                  key={item.step}
                  className="p-2 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-2"
                >
                  <span className="w-5 h-5 rounded-md bg-indigo-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-[10.5px] font-black text-slate-900 dark:text-white leading-tight mb-0.5">
                      {item.name}
                    </h4>
                    <p className="text-[9.5px] text-slate-600 dark:text-slate-300 leading-snug">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Box: 4 Tujuan Strategis Bank Case */}
          <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
            <div className="mb-1.5 pb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                  {slideData.objectivesTitle}
                </h3>
              </div>
              <span className="text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400">
                Continuous Learning Loop
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {slideData.objectives.map((obj, oIdx) => (
                <div
                  key={oIdx}
                  className="p-2 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40"
                >
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10.5px] font-black text-slate-900 dark:text-white">
                      {obj.title}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
                      {obj.metric}
                    </span>
                  </div>
                  <p className="text-[9.5px] text-slate-600 dark:text-slate-300 leading-tight">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
