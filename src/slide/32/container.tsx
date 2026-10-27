import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { 
  DollarSign, 
  Receipt, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Car, 
  Coffee, 
  Smartphone, 
  FileCheck2 
} from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const remIcons = [DollarSign, TrendingUp, Award, ShieldCheck];
  const reimbIcons = [Car, Coffee, Smartphone, FileCheck2];

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
        {slideData.summaryStats.map((item, idx) => (
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

      {/* Main 2-Column Split: Remunerasi (Left) & Reimbursement (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 items-stretch mb-2">
        {/* Left Column: 4 Komponen Remunerasi */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="mb-2 text-center">
              <h3 className="text-xs sm:text-[12.5px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {language === "en" ? "Remuneration Package & Margin Commission Structure" : "Struktur Paket Remunerasi & Komisi Laba"}
              </h3>
            </div>

            <div className="space-y-2">
              {slideData.remunerationComponents.map((item, idx) => {
                const IconComp = remIcons[idx] || DollarSign;

                return (
                  <div
                    key={item.id}
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80"
                  >
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <IconComp size={11} />
                        </div>
                        <h4 className="text-xs font-black text-slate-900 dark:text-white leading-tight truncate">
                          {item.component}
                        </h4>
                      </div>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                        {item.nature}
                      </span>
                    </div>

                    <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug font-normal pl-6">
                      {item.desc}
                    </p>

                    <div className="mt-1 flex items-center gap-1 pl-6 text-[9.5px] text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 size={10} className="shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Ketentuan Kebijakan Reimbursement */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="mb-2 text-center">
              <h3 className="text-xs sm:text-[12.5px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {language === "en" ? "Operational Reimbursement Policy & Governance" : "Tata Kelola & Ketentuan Reimbursement Operasional"}
              </h3>
            </div>

            <div className="space-y-2">
              {slideData.reimbursementRules.map((rule, idx) => {
                const IconComp = reimbIcons[idx] || Receipt;

                return (
                  <div
                    key={rule.id}
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80"
                  >
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <IconComp size={11} />
                        </div>
                        <h4 className="text-xs font-black text-slate-900 dark:text-white leading-tight truncate">
                          {rule.category}
                        </h4>
                      </div>
                    </div>

                    <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug font-normal pl-6">
                      {rule.policy}
                    </p>

                    <div className="mt-1 flex items-center gap-1 pl-6 text-[9.5px] text-blue-600 dark:text-blue-400 font-bold">
                      <span>{rule.condition}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Governance Motto Banner */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs shrink-0 mt-2 flex items-center gap-2">
        <ShieldCheck size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
        <p className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 leading-snug font-medium m-0">
          <strong className="text-blue-900 dark:text-cyan-300 font-black">Prinsip Tata Kelola: </strong>
          {slideData.governanceMotto}
        </p>
      </div>
    </div>
  );
};

export default Container;
