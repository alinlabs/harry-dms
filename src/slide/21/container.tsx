import React from 'react';
import { Factory, Landmark, Hotel, ShoppingBag, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSlideData } from './data';

const industryIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  manufacturing: Factory,
  financial: Landmark,
  hospitality: Hotel,
  retail: ShoppingBag,
  property: Building2,
  education: GraduationCap,
};

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

      {/* 6 Industry Verticals (2 rows x 3 columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 flex-1 items-stretch my-1">
        {slideData.industries.map((ind) => {
          const Icon = industryIcons[ind.id] || Building2;

          return (
            <div
              key={ind.id}
              className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon, Name & Market Share */}
                <div className="flex items-start justify-between gap-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 block leading-tight">
                        {ind.badge} • {ind.targetAccountCount}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                        {ind.name}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 font-black text-[10px] tabular-nums shrink-0">
                    {ind.marketShare}
                  </span>
                </div>

                {/* Primary Need */}
                <div className="mb-2">
                  <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider mb-0.5">
                    {language === 'en' ? 'Core Need:' : 'Kebutuhan Utama:'}
                  </span>
                  <p className="text-[10px] sm:text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug">
                    {ind.primaryNeed}
                  </p>
                </div>

                {/* Product Fit (3 Pillars) */}
                <div className="space-y-1 mb-2">
                  <span className="text-[9px] font-black uppercase text-slate-400 block tracking-wider">
                    {language === 'en' ? '3-Pillar Synergy Fit:' : 'Kombinasi 3 Pilar Produk:'}
                  </span>
                  {ind.productFit.map((fit, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={11} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-tight">{fit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Drivers */}
              <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mt-1">
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider block">
                  {language === 'en' ? 'Value Driver:' : 'Faktor Pendorong Nilai:'}
                </span>
                <span className="text-[9.5px] text-slate-600 dark:text-slate-300 font-medium leading-tight block mt-0.5">
                  {ind.keyDrivers}
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
