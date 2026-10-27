import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, ShieldCheck, Cpu, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const data = useSlideData();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Monitor className="w-5 h-5 text-blue-600 dark:text-cyan-400" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2:
      default:
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="text-center mb-1.5 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {data.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-4xl mx-auto mt-0.5 leading-snug">
          {data.subtitle}
        </p>
      </div>

      {/* 3 Pillar Synergy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 items-stretch min-h-0 my-1.5">
        {data.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between transition-all duration-200 hover:border-blue-400 dark:hover:border-cyan-500/60"
          >
            <div>
              {/* Pillar Header with Icon & Tag */}
              <div className="flex items-start justify-between gap-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/40">
                    {pillar.tag}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-snug mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-[10px] sm:text-[10.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {pillar.desc}
              </p>

              {/* Key Features */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  {language === 'en' ? 'Core Capabilities & Deliverables:' : 'Fitur Kunci & Keunggulan:'}
                </span>
                {pillar.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-1.5 text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={12} className="text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sales Approach Banner */}
      <div className="p-2.5 px-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs shrink-0 mt-1 flex items-center gap-2.5 shadow-2xs">
        <div className="p-1.5 rounded-lg bg-blue-600 text-white shrink-0">
          <Sparkles size={14} />
        </div>
        <p className="text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-200 leading-snug font-medium m-0">
          <strong className="text-blue-900 dark:text-cyan-300 font-black">
            {language === 'en' ? 'Synergy Strategy: ' : 'Pendekatan Komersial: '}
          </strong>
          {data.salesApproach}
        </p>
      </div>
    </div>
  );
};

export default Container;
