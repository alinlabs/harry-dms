import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { motion } from 'framer-motion';
import { useSlideData } from './data';
import { YearlyPerformanceChart } from './YearlyPerformanceChart';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  return (
    <div className="w-full flex-1 flex flex-col justify-center py-2 max-w-6xl mx-auto px-2 select-text">
      {/* Header Slide */}
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-1">
          {slideData.subtitle}
        </p>
      </div>

      {/* 1. BAGIAN ATAS: Header Tolak Ukur Berada di Luar Card (Tanpa bullet di kiri, teks verifikasi abu biasa tanpa badge) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2 px-1">
        <div>
          <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
            {language === "en" ? "Industry Benchmarks & Market Scale Baseline (Audited IDX Public Data)" : "Tolak Ukur Industri & Landasan Skala Pasar (Audited Data Publik BEI)"}
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {language === "en" ? "Financial data from MTDL, MSTI, MORA, and MLPT as objective references to establish DMS baseline revenue and targets." : "Data finansial MTDL, MSTI, MORA, dan MLPT sebagai acuan objektif dalam menentukan baseline omzet dan target DMS."}
          </p>
        </div>
        <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 shrink-0">
          {language === "en" ? "Verified Public Data" : "Data Publik Terverifikasi"}
        </span>
      </div>

      {/* Card Hanya Berisi Chart */}
      <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-5">
        <div className="h-44 sm:h-52 w-full">
          <YearlyPerformanceChart data={slideData.realIndustryBenchmark} />
        </div>
      </div>

      {/* 2. BAGIAN BAWAH: 8 Area Pemetaan & Penyelarasan Strategis */}
      <div>
        {/* Sub-Header Area Pemetaan (Ukuran persis sama dengan judul tolak ukur, Propercase, tanpa icon di kiri) */}
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
            {language === "en" ? "8 Strategic Mapping & Alignment Areas (Day 1–30)" : "8 Area Pemetaan & Penyelarasan Strategis (Hari 1–30)"}
          </h3>
          <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 hidden sm:inline">
            {language === "en" ? "Focus: Protect Core Revenue & Validate Operating Capacity" : "Fokus: Mempertahankan omzet inti & validasi kapasitas"}
          </span>
        </div>

        {/* Grid 8 Cards - Format seperti Slide 2: Badge lebih besar & sejajar 2 baris teks (Tag + Judul) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {slideData.mappingAreas.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/70 shadow-xs flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header Card: Badge angka sejajar vertikal dengan 2 teks (kategori di atas, judul di bawah) */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-xs font-black shrink-0">
                    {item.id}
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[10px] font-normal text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-tight">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white leading-snug mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Deskripsi */}
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
