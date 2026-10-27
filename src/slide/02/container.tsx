import React from 'react';
import { Shield, Target, Users, Zap, Layers } from 'lucide-react';
import { useSlideData } from './data';

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  users: Users,
  layers: Layers,
  shield: Shield,
  zap: Zap,
};

export const Container: React.FC = () => {
  const slideData = useSlideData();
  // Split into 3 top cards and 2 bottom cards for symmetrical executive layout
  const topPriorities = slideData.priorities.slice(0, 3);
  const bottomPriorities = slideData.priorities.slice(3, 5);

  const renderCard = (item: typeof slideData.priorities[0]) => {
    const Icon = iconMap[item.iconType] || Target;
    return (
      <div
        key={item.id}
        className="relative pt-9 pb-4 px-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between text-center select-text transition-all hover:border-blue-500/60"
      >
        {/* Card pembungkus icon warna biru floating 50% di luar, 50% di dalam, rata tengah, icon putih */}
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <Icon size={22} className="text-white" />
        </div>

        <div>
          {/* Judul Card - Rata Tengah (Tanpa teks abu-abu tag) */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-2 text-center">
            {item.title}
          </h3>

          {/* Deskripsi - Rata Tengah */}
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-center">
            {item.desc}
          </p>
        </div>

        {/* Footer Card Metric - Rata Tengah */}
        <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-center">
          <span className="text-blue-600 dark:text-cyan-400 font-semibold text-[11px] block">
            {item.metric}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-center py-2 max-w-6xl mx-auto px-2">
      {/* Header Slide */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-1">
          {slideData.subtitle}
        </p>
      </div>

      {/* Grid Card-Card dengan ruang untuk icon floating */}
      <div className="flex flex-col gap-9 w-full pt-3">
        {/* Baris Atas: 3 Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-9 w-full">
          {topPriorities.map(renderCard)}
        </div>

        {/* Baris Bawah: 2 Card Terpusat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-9 w-full max-w-4xl mx-auto">
          {bottomPriorities.map(renderCard)}
        </div>
      </div>

      {/* Pernyataan Strategis Sales Manager di Paling Bawah */}
      <div className="mt-8 text-center px-4 max-w-4xl mx-auto select-text">
        <p className="text-xs sm:text-[13px] font-medium text-slate-500 dark:text-slate-400 italic leading-relaxed">
          "{slideData.vision}"
        </p>
      </div>
    </div>
  );
};

export default Container;
