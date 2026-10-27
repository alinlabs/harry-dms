import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { FileCheck2, Users, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
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

      {/* Main Split Content: Left = Regulasi Peran Tim, Right = 7 Unsur Wajib APN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 items-stretch min-h-0">
        {/* Left Column (5 Cols): Regulasi Peran 6 Personel */}
        <div className="lg:col-span-5 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div className="mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                {slideData.leftPanelTitle}
              </h3>
            </div>
            <span className="text-[9.5px] font-bold text-blue-600 dark:text-cyan-400 tabular-nums">
              6 Personel
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-2">
            {slideData.roleRules.map((item) => (
              <div
                key={item.id}
                className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </span>
                  <span className="text-[9.5px] font-bold text-blue-600 dark:text-cyan-400 shrink-0 tabular-nums">
                    {item.personnel}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mb-0.5 leading-snug">
                  {item.mandateTitle}
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-snug mb-1">
                  {item.regulation}
                </p>
                <div className="flex items-center gap-1 text-[9.5px] text-emerald-700 dark:text-emerald-400 font-bold">
                  <CheckCircle2 size={11} className="shrink-0" />
                  <span>{language === 'en' ? 'Mandatory Output:' : 'Output Wajib:'} {item.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (7 Cols): 7 Unsur Wajib APN */}
        <div className="lg:col-span-7 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div className="mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers size={15} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
                {slideData.rightPanelTitle}
              </h3>
            </div>
            <span className="text-[9.5px] font-bold text-indigo-600 dark:text-indigo-400">
              {language === 'en' ? 'Standard Blueprint' : 'Standar Baku DMS'}
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-1.5">
            {slideData.apnElements.map((el) => (
              <div
                key={el.number}
                className="px-2.5 py-1.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-[10px] font-black flex items-center justify-center shrink-0 tabular-nums">
                    {el.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <h4 className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">
                        {el.title}
                      </h4>
                      <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold">
                        · {el.scope}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                      {el.desc}
                    </p>
                  </div>
                </div>
                <div className="sm:w-36 shrink-0 text-right">
                  <span className="text-[9.5px] font-bold text-blue-700 dark:text-cyan-300">
                    {el.outputMetric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Purpose Banner */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs shrink-0 mt-1.5 flex items-center gap-2">
        <ShieldCheck size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
        <p className="text-[10px] sm:text-[10.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium m-0">
          {slideData.purposeBanner}
        </p>
      </div>
    </div>
  );
};

export default Container;
