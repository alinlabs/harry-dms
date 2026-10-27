import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Target, TrendingUp, Sparkles } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const data = useSlideData();

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="text-center mb-1.5 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {data.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {data.subtitle}
        </p>
      </div>

      {/* 2x2 Grid for C.1, C.2, C.3 and D (Market Differentiation & Value-Added Solutions) - Pure Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-stretch my-1">
        {data.items.map((item) => {
          const isDifferentiationCard = item.code === 'D';

          return (
            <div
              key={item.id}
              className={`p-3.5 sm:p-4 rounded-2xl border shadow-2xs transition-all flex flex-col justify-between ${
                isDifferentiationCard
                  ? 'bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border-blue-300 dark:border-cyan-500/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/60'
              }`}
            >
              <div>
                {/* Category Code & Subtitle */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-bold text-blue-600 dark:text-cyan-400 truncate block">
                    {item.subtitle}
                  </span>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/40 shrink-0">
                    {item.code}
                  </span>
                </div>

                {/* Main Name */}
                <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-tight mb-2">
                  {item.name}
                </h3>

                {/* Product Scope Bullet List */}
                <div className="space-y-1.5 mb-3 bg-slate-50/80 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/70">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    {language === 'en' ? 'Product Scope & Offerings:' : 'Cakupan Produk & Solusi:'}
                  </span>
                  {item.productScope.map((sc, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-200 leading-snug">
                      <CheckCircle2 size={13} className="text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{sc}</span>
                    </div>
                  ))}
                </div>

                {/* Strategy & Value Potential Two Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-700 dark:text-cyan-300 mb-1">
                      <Target size={12} className="shrink-0" />
                      <span>{language === 'en' ? 'Strategy:' : 'Strategi Komersial:'}</span>
                    </div>
                    <p className="text-[10px] sm:text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                      {item.strategy}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/25 border border-emerald-100 dark:border-emerald-900/40">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-700 dark:text-emerald-300 mb-1">
                      <TrendingUp size={12} className="shrink-0" />
                      <span>{language === 'en' ? 'Value Potential:' : 'Potensi Nilai & Margin:'}</span>
                    </div>
                    <p className="text-[10px] sm:text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                      {item.valuePotential}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer: Revenue Transformation / Business Model */}
              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-1 text-[10px]">
                <span className="text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1">
                  <Sparkles size={11} className="text-blue-500" />
                  {language === 'en' ? 'Business Model Direction:' : 'Arah Model Bisnis:'}
                </span>
                <span className="font-black text-blue-600 dark:text-cyan-400">
                  {item.revenueTransformation}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
