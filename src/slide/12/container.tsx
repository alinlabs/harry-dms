import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Slide Header */}
      <div className="text-center mb-2 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* 2 Months Grid (November 2026 & Desember 2026) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1 items-stretch mb-2">
        {slideData.phases.map((ph) => {
          return (
            <div
              key={ph.id}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
            >
              <div>
                {/* Header: Badge Periode & Bulan */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-2xs flex items-center gap-1.5">
                    <Calendar size={12} />
                    {ph.period}
                  </span>
                  <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400">
                    {language === "en" ? `Phase 0${ph.id} / 02` : `Fase 0${ph.id} / 02`}
                  </span>
                </div>

                <h3 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white leading-snug mb-1">
                  {ph.theme}
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {ph.summary}
                </p>

                {/* 4 Deliverables Kunci */}
                <div className="space-y-2 mb-2">
                  <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    {language === "en" ? "Action Plan & Deliverables:" : "Rencana Aksi & Deliverables:"}
                  </span>
                  {ph.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-justify">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Utama Footer */}
              <div className="mt-2 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[8.5px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">
                  {language === "en" ? "Success Metrics (KPI):" : "Tolok Ukur Keberhasilan (KPI):"}
                </span>
                <span className="text-[10.5px] font-bold text-emerald-600 dark:text-emerald-400 block">
                  {ph.kpiHighlight}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Principle Banner */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs shrink-0 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
          <span className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 font-medium">
            <strong className="text-blue-900 dark:text-cyan-300 font-black">{language === "en" ? "Year-End Execution Principle:" : "Prinsip Eksekusi Akhir Tahun:"} </strong>
            {language === "en"
              ? "Maximize November–December 2026 cash velocity and lock in APN-verified enterprise pipelines entering 2027."
              : "Memaksimalkan arus kas November–Desember 2026 dan mengunci pipeline korporasi berbasis APN sebelum memasuki tahun 2027."}
          </span>
        </div>
        <span className="text-[9.5px] font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-2.5 py-0.5 rounded-md shrink-0">
          60 Hari (Nov – Des 2026)
        </span>
      </div>
    </div>
  );
};

export default Container;
