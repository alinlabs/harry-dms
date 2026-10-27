import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useSlide08Data } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slide08Data = useSlide08Data();

  // Warna badge tingkat keparahan sesuai desain asli Slide 08
  const severityBadge = (score: number) => {
    if (score >= 90) {
      return 'bg-red-600 text-white shadow-xs';
    }
    if (score >= 85) {
      return 'bg-orange-500 text-white shadow-xs';
    }
    return 'bg-[#ca8a04] dark:bg-[#d97706] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] shadow-xs';
  };

  const summarizedGaps = slide08Data.summarizedGaps || [];
  const summarizedPillars = slide08Data.summarizedPillars || [];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Slide Header (Rata Tengah - Persis Desain Asli) */}
      <div className="flex flex-col items-center justify-center text-center mb-2 pb-0.5">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slide08Data.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl text-center mt-0.5 leading-relaxed">
          {slide08Data.subtitle}
        </p>
      </div>

      {/* Column Subheaders: Kiri = List Gap, Kanan = List Solusi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3.5 mb-1.5">
        <div className="px-3 py-1.5 rounded-lg bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/50 flex items-center">
          <div className="flex items-center gap-2">
            <AlertTriangle size={14} className="text-rose-600 dark:text-rose-400 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-wider text-rose-800 dark:text-rose-300">
              {slide08Data.leftColumnTitle}
            </span>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/50 flex items-center">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
              {slide08Data.rightColumnTitle}
            </span>
          </div>
        </div>
      </div>

      {/* 5 Baris Sejajar: Kiri = Card Gap Pasar, Kanan = Card Solusi DMS */}
      <div className="flex-1 flex flex-col justify-between gap-2 my-0.5">
        {summarizedGaps.map((gap, idx) => {
          const pillar = summarizedPillars[idx];

          return (
            <div
              key={gap.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3.5 items-stretch"
            >
              {/* KIRI: Card Gap Pasar (Desain Card Slide 08) */}
              <div className="p-2.5 sm:px-3 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                {/* Badge Intensitas, Kategori & Sumber */}
                <div className="sm:w-32 shrink-0 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[9.5px] font-black tracking-wide tabular-nums ${severityBadge(
                        gap.severity
                      )}`}
                    >
                      {language === 'en'
                        ? `Intensity ${gap.severity}%`
                        : `Intensitas ${gap.severity}%`}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                    {gap.category}
                  </div>
                  <div className="text-[9px] text-slate-400 dark:text-slate-500 leading-tight">
                    {language === 'en' ? 'Source: ' : 'Sumber: '}
                    <span className="font-medium text-slate-500 dark:text-slate-400">
                      {gap.source}
                    </span>
                  </div>
                </div>

                {/* Ringkasan Masalah & Klien Terdampak */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mb-0.5">
                    {gap.title}
                  </h4>
                  <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mb-0.5">
                    {gap.problem}
                  </p>
                  <div className="text-[9.5px] text-slate-400 flex flex-wrap items-center gap-1 leading-tight">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">
                      {language === 'en' ? 'Affected:' : 'Terdampak:'}
                    </span>
                    <span className="text-rose-600 dark:text-rose-400 font-medium">
                      {gap.affectedClients}
                    </span>
                  </div>
                </div>
              </div>

              {/* KANAN: Card Solusi DMS (Desain Card Slide 09) */}
              {pillar && (
                <div className="p-2.5 sm:px-3 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  {/* Badge Metrik Hijau, Kategori & Referensi Gap */}
                  <div className="sm:w-32 shrink-0 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="px-2 py-0.5 rounded-md text-[9.5px] font-black tracking-wide bg-emerald-600 text-white shadow-xs tabular-nums">
                        {pillar.metric}
                      </span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                      {pillar.category}
                    </div>
                    <div className="text-[9px] text-slate-400 dark:text-slate-500 leading-tight">
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">
                        {pillar.gapReference}
                      </span>
                    </div>
                  </div>

                  {/* Ringkasan Solusi & Dampak Klien */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug mb-0.5">
                      {pillar.title}
                    </h4>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug mb-0.5">
                      {pillar.solution}
                    </p>
                    <div className="text-[9.5px] text-slate-400 flex flex-wrap items-center gap-1 leading-tight">
                      <span className="font-semibold text-slate-500 dark:text-slate-400">
                        {language === 'en' ? 'Impact:' : 'Dampak:'}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {pillar.impact}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
