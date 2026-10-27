import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe2, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  return (
    <div className="w-full flex-1 flex flex-col justify-center py-2 max-w-6xl mx-auto px-2 select-text">
      {/* Header Slide */}
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-1">
          {slideData.subtitle}
        </p>
      </div>

      {/* Top Market Metrics Grid (Full Blue with White Text) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        {slideData.marketMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-4.5 rounded-2xl bg-blue-600 dark:bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-blue-600/30"
          >
            <div>
              {/* Baris Angka Nilai di kiri dan Badge sejajar di kanan di bagian paling atas */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
                  {metric.value}
                </div>
                <div className="text-right shrink-0">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-xs sm:text-sm font-black tracking-tight inline-flex items-center shadow-xs">
                    {metric.trend}
                  </span>
                </div>
              </div>

              {/* Teks label kini berada di atas deskripsi */}
              <span className="text-[11px] font-bold text-blue-100 uppercase tracking-wider block mb-1">
                {metric.label}
              </span>
            </div>

            <p className="text-xs text-blue-100/90 font-medium leading-relaxed">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>

      {/* 4 Macro Trends Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
        {slideData.macroDrivers.map((driver, idx) => {
          const icons = [Globe2, Layers, ShieldCheck, Cpu];
          const IconComp = icons[idx % icons.length];

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header Card: Ikon di kiri sejajar dengan 2 teks (tag abu tipis di atas, judul di bawah), angka pertumbuhan biru di kanan */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-bold">
                      <IconComp size={19} />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="text-[10px] font-normal text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-tight">
                        {driver.tag}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
                        {driver.title}
                      </h3>
                    </div>
                  </div>

                  {/* Pertumbuhan di paling kanan dengan warna biru */}
                  <span className="text-xs sm:text-[13px] font-bold text-blue-600 dark:text-cyan-400 flex items-center shrink-0 ml-2">
                    <TrendingUp size={14} className="mr-1 text-blue-600 dark:text-cyan-400" />
                    {driver.growth}
                  </span>
                </div>

                {/* Deskripsi */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {driver.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
