import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Image as ImageIcon, TrendingUp, Target } from 'lucide-react';
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

      {/* 8 Existing Products Grid (4x2 di layar besar) dengan Mockup 16:9 Full Width Edge-to-Edge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 flex-1 items-stretch my-1">
        {data.products.map((prod) => (
          <div
            key={prod.id}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-400 dark:hover:border-cyan-500/60 transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Mockup Container: 16:9 Aspect Ratio, Full Width Kanan-Kiri */}
            <div className="w-full aspect-video bg-gradient-to-b from-slate-100/90 to-slate-200/60 dark:from-slate-800/90 dark:to-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden flex items-center justify-center shrink-0 p-2">
              {prod.imageUrl ? (
                <img
                  src={encodeURI(prod.imageUrl)}
                  alt={prod.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to non-space version if needed
                    const target = e.currentTarget;
                    if (target.src.includes('wiFi%20router')) {
                      target.src = '/gambar/gpon-ont-2.4g-5g-powerful-wifi-router.png';
                    }
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center px-3 py-2 w-full h-full">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-1">
                    <ImageIcon size={15} />
                  </div>
                  <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 leading-tight">
                    {prod.imagePlaceholderLabel}
                  </span>
                  <span className="text-[8px] font-medium text-slate-400/80 dark:text-slate-600 mt-0.5 tracking-wider uppercase">
                    Format 16:9 Mockup
                  </span>
                </div>
              )}
            </div>

            {/* Content Body dengan Padding Konsisten */}
            <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
              <div>
                {/* Product Title (Tanpa badge #01 dan tanpa teks di atas mockup) */}
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug mb-2">
                  {prod.name}
                </h3>

                {/* Strategy & Value Potential */}
                <div className="space-y-1.5 text-[9.5px] sm:text-[10px] leading-snug">
                  <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-200 mb-0.5">
                      <Target size={11} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                      <span>{language === 'en' ? 'Commercial Strategy:' : 'Strategi Komersial:'}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
                      {prod.strategy}
                    </p>
                  </div>

                  <div className="p-1.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/25 border border-emerald-100/80 dark:border-emerald-900/40">
                    <div className="flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-300 mb-0.5">
                      <TrendingUp size={11} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{language === 'en' ? 'Value Potential:' : 'Nilai Potensi:'}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
                      {prod.valuePotential}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Target & Revenue Model */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] text-slate-500 dark:text-slate-400 gap-1">
                <span className="truncate font-semibold text-slate-700 dark:text-slate-300">
                  {prod.targetMarket}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 font-bold shrink-0">
                  {prod.revenueType.split('&')[0].trim()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
