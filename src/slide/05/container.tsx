import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { motion } from 'framer-motion';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  return (
    <div className="w-full flex-1 flex flex-col justify-center py-2 max-w-6xl mx-auto px-2 select-text">
      {/* Header Slide */}
      <div className="text-center mb-3.5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-1">
          {slideData.subtitle}
        </p>
      </div>

      {/* 4 Target Clusters (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
        {slideData.targetClusters.map((cluster, idx) => {
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header Card: Line 1 Judul Utama Tebal & Line 2 Contoh Langsung Tipis dengan Jarak Sangat Rapat */}
                <div className="flex items-start justify-between gap-2.5 mb-2.5">
                  <div className="flex flex-col justify-center min-w-0 pr-1">
                    {/* Line 1: Judul Utama Tebal & Besar */}
                    <h3 className="text-sm sm:text-[15px] md:text-base font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                      {cluster.segment}
                    </h3>
                    {/* Line 2: Contoh Langsung Kecil Tipis Menempel Rapat di Bawah Judul */}
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal mt-0 leading-normal">
                      {cluster.examples}
                    </p>
                  </div>

                  {/* Deal Size: 2 line, rata kanan, tanpa badge, angka M berwarna hijau #059669 */}
                  <div className="text-right flex flex-col items-end shrink-0 pl-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                      {cluster.dealType}
                    </span>
                    <span className="text-xs sm:text-sm md:text-[15px] font-extrabold text-[#059669] leading-tight mt-0.5 whitespace-nowrap">
                      {cluster.dealValue}
                    </span>
                  </div>
                </div>

                {/* 2 Blok Informasi: Kebutuhan Solusi & Pain Point Kritis dengan teks deskripsi rata tengah */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
                  {/* Kebutuhan Solusi - Card Hijau, Teks Putih, Rata Tengah */}
                  <div className="p-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-700 text-white shadow-xs">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider block text-center mb-1">
                      {language === "en" ? "SOLUTION NEEDS" : "KEBUTUHAN SOLUSI"}
                    </span>
                    <p className="text-[11px] text-white/95 font-medium leading-relaxed text-center">
                      {cluster.need}
                    </p>
                  </div>

                  {/* Pain Point Kritis - Card Merah, Teks Putih, Rata Tengah */}
                  <div className="p-2.5 rounded-xl bg-red-600 dark:bg-red-700 text-white shadow-xs">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider block text-center mb-1">
                      {language === "en" ? "CRITICAL PAIN POINT" : "PAIN POINT KRITIS"}
                    </span>
                    <p className="text-[11px] text-white/95 font-medium leading-relaxed text-center">
                      {cluster.painPoint}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer: {language === "en" ? "Potential:" : "Potensi :"} Tinggi di kiri, teks solusi di kanannya berwarna abu */}
              <div className="pt-0.5 flex items-center justify-between text-[11px] gap-2">
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{language === "en" ? "Potential:" : "Potensi :"}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {cluster.potensi}
                  </span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 font-medium text-right">
                  {cluster.fitDetail}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ICP Section: Judul langsung di layout luar card berwarna hitam/dark */}
      <div className="mb-2">
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
          {language === "en" ? "Ideal Customer Profile (ICP) Criteria" : "Kriteria Profil Pelanggan Ideal (ICP - Ideal Customer Profile)"}
        </h4>
      </div>

      {/* 4 Card Terpisah dari Kiri ke Kanan: Judul Bold & Rata Tengah, Deskripsi Rata Tengah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {slideData.icpCriteria.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col items-center justify-center text-center"
          >
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-1 block text-center">
              {item.label}
            </span>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-center">
              {item.requirement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
