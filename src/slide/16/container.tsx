import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Target, TrendingUp } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const data = useSlideData();

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="text-center mb-3 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {data.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {data.subtitle}
        </p>
      </div>

      {/* 3 Columns for the 3 Development Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 items-stretch my-1">
        {data.items.map((item) => (
          <div
            key={item.id}
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category */}
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 block mb-1">
                {item.category}
              </span>

              {/* Title & Overview */}
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug mb-2">
                {item.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item.overview}
              </p>

              {/* Strategi & Nilai Potensi */}
              <div className="space-y-2.5 mb-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                  <div className="flex items-center gap-1.5 text-[11px] font-black text-blue-700 dark:text-cyan-300 mb-0.5">
                    <Target size={13} className="shrink-0" />
                    <span>{language === 'en' ? 'Development Strategy:' : 'Strategi Pengembangan:'}</span>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                    {item.commercialStrategy}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                  <div className="flex items-center gap-1.5 text-[11px] font-black text-emerald-700 dark:text-emerald-300 mb-0.5">
                    <TrendingUp size={13} className="shrink-0" />
                    <span>{language === 'en' ? 'Market Value Potential:' : 'Nilai Potensi Pasar:'}</span>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                    {item.valuePotential}
                  </p>
                </div>
              </div>

              {/* Key Value Drivers */}
              <div className="space-y-1.5">
                {item.keyValueDrivers.map((drv, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{drv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-semibold">
                {language === 'en' ? 'Revenue Model:' : 'Model Pendapatan:'}
              </span>
              <span className="font-black text-blue-600 dark:text-cyan-400">
                {item.revenueModel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
