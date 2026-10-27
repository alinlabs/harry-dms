import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { UserCheck, Shield, Building, CreditCard } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const icons = [UserCheck, Shield, Building, CreditCard];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="text-center mb-2 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* 4 Persona Cards: 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-stretch">
        {slideData.personas.map((persona, idx) => {
          const IconComp = icons[idx] || UserCheck;

          return (
            <div
              key={persona.id}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5"
            >
              {/* Card Header: Text kecil bold biru tanpa badge + Icon kanan sedikit lebih besar */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {/* Teks kecil bold biru tanpa badge */}
                    <span className="text-[10px] sm:text-[10.5px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider block mb-0.5">
                      {persona.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-tight">
                      {persona.title}
                    </h3>
                    <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      {persona.role}
                    </p>
                  </div>
                  {/* Icon di kanan sedikit lebih besar */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <IconComp size={20} />
                  </div>
                </div>
              </div>

              {/* 4 Mini Cards dalam susunan 2 Kolom Kiri - Kanan (Semua card putih border abu tipis, teks abu tidak bold) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 items-stretch">
                {/* 1. Fokus & Prioritas: Judul Merah */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-0.5">
                      {language === "en" ? "Focus & Priorities:" : "Fokus & Prioritas:"}
                    </span>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-normal leading-snug">
                      {persona.priorityConcern}
                    </p>
                  </div>
                </div>

                {/* 2. {language === "en" ? "Purchase Triggers:" : "Trigger Pembelian:"} Judul Oren */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-0.5">
                      {language === "en" ? "Purchase Triggers:" : "Trigger Pembelian:"}
                    </span>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-normal leading-snug">
                      {persona.triggerEvent}
                    </p>
                  </div>
                </div>

                {/* 3. Strategi Pitching: Kiri, Judul Biru, Tanpa Icon */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 block mb-0.5">
                      {language === "en" ? "DMS Pitch Strategy:" : "Strategi Pitching DMS:"}
                    </span>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-normal leading-snug">
                      {persona.dmsPitchStrategy}
                    </p>
                  </div>
                </div>

                {/* 4. {language === "en" ? "Objection Handling:" : "Penanganan Keberatan:"} Kanan, Judul Hijau, Tanpa Icon */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                      {language === "en" ? "Objection Handling:" : "Penanganan Keberatan:"}
                    </span>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-normal leading-snug">
                      {persona.objectionHandling}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
