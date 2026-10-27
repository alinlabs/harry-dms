import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { 
  CheckCircle2, 
  Scale, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';
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

      {/* 2 Scenarios Side-by-Side (Langsung Ditampilkan, Tanpa Perlu Klik) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 items-stretch mb-2">
        {slideData.scenarios.map((sc, idx) => {
          const isBlue = sc.theme === 'blue';

          return (
            <div
              key={idx}
              className={`p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border shadow-2xs flex flex-col justify-between transition-all duration-200 ${
                isBlue 
                  ? 'border-blue-200 dark:border-blue-900/60 hover:border-blue-500/50 hover:shadow-blue-500/5' 
                  : 'border-emerald-200 dark:border-emerald-900/60 hover:border-emerald-500/50 hover:shadow-emerald-500/5'
              }`}
            >
              <div>
                {/* Header: Badge & Nama Skenario */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isBlue 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {sc.badge}
                  </span>
                  {isBlue ? (
                    <Scale size={16} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                  ) : (
                    <TrendingUp size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  )}
                </div>

                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight mb-1">
                  {sc.name}
                </h3>
                <p className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug mb-2.5">
                  {sc.desc}
                </p>

                {/* 4 Quantitative Target Metrics Grid (Jelas Angka & Persentasenya) */}
                <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                  {sc.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className={`p-2 rounded-xl border flex flex-col justify-center text-center ${
                        isBlue
                          ? 'bg-blue-50/60 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/40'
                          : 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/40'
                      }`}
                    >
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block leading-tight">
                        {m.label}
                      </span>
                      <div
                        className={`text-sm sm:text-base font-black tabular-nums my-0.5 leading-tight ${
                          isBlue 
                            ? 'text-blue-600 dark:text-cyan-400' 
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        {m.value}
                      </div>
                      <span className="text-[8.5px] text-slate-500 dark:text-slate-400 font-medium leading-none">
                        {m.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Asumsi & Rencana Eksekusi Ringkas */}
                <div className="space-y-1 mb-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    {language === "en" ? "Assumptions & Execution Strategy:" : "Asumsi & Strategi Eksekusi:"}
                  </span>
                  {sc.assumptions.map((assump, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-1.5 text-[10px] sm:text-[10.5px] text-slate-700 dark:text-slate-300 leading-tight">
                      <CheckCircle2 
                        size={11} 
                        className={`shrink-0 mt-0.5 ${
                          isBlue 
                            ? 'text-blue-600 dark:text-cyan-400' 
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`} 
                      />
                      <span className="font-medium text-justify">{assump}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dampak Finansial Footer */}
              <div
                className={`mt-2 pt-1.5 border-t text-[9.5px] font-bold leading-tight ${
                  isBlue
                    ? 'border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-cyan-300'
                    : 'border-emerald-100 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                }`}
              >
                <span className="opacity-75 font-normal">{language === "en" ? "Financial Impact:" : "Dampak Finansial:"} </span>
                {sc.financialImpact}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Principle & Accountability Notice */}
      <div className="p-2 px-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs shrink-0 flex items-center gap-2">
        <AlertCircle size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
        <p className="text-[10px] sm:text-[10.5px] text-amber-900 dark:text-amber-200 leading-snug font-medium m-0">
          <strong className="font-black">{language === "en" ? "Accountability Principle:" : "Prinsip Akuntabilitas:"} </strong>
          {slideData.auditCaveat}
        </p>
      </div>
    </div>
  );
};

export default Container;
