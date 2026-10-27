import React from 'react';
import { AlertTriangle, CheckCircle2, Building2 } from 'lucide-react';
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

      {/* 4 Industry Pain-Point & Solution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 flex-1 items-stretch">
        {slideData.items.map((item) => (
          <div
            key={item.id}
            className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 pb-1.5 mb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Building2 size={13} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                    {item.industry}
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 font-black text-[9.5px] tabular-nums shrink-0">
                  {item.dealSize}
                </span>
              </div>

              {/* Two Columns inside Card: Pain Points vs DMS Solutions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
                {/* Pain Points */}
                <div className="p-2 rounded-xl bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/15">
                  <div className="flex items-center gap-1 text-[9.5px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
                    <AlertTriangle size={11} />
                    <span>{language === 'en' ? 'Client Challenges' : 'Tantangan Klien'}</span>
                  </div>
                  <div className="space-y-1">
                    {item.painPoints.map((pt, idx) => (
                      <div key={idx} className="text-[9.5px] text-slate-600 dark:text-slate-300 leading-tight flex items-start gap-1">
                        <span className="text-rose-500 font-bold shrink-0">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DMS Solutions */}
                <div className="p-2 rounded-xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/15">
                  <div className="flex items-center gap-1 text-[9.5px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                    <CheckCircle2 size={11} />
                    <span>{language === 'en' ? 'DMS Solutions' : 'Solusi DMS'}</span>
                  </div>
                  <div className="space-y-1">
                    {item.dmsSolution.map((sol, idx) => (
                      <div key={idx} className="text-[9.5px] text-slate-700 dark:text-slate-200 font-medium leading-tight flex items-start gap-1">
                        <CheckCircle2 size={10} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Business Impact */}
            <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800/80 text-[9.5px] text-slate-600 dark:text-slate-300 leading-tight">
              <strong className="text-blue-600 dark:text-cyan-400">
                {language === 'en' ? 'Business & Financial Impact: ' : 'Dampak Finansial / Bisnis: '}
              </strong>
              {item.businessImpact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
