import React from 'react';
import { Users, Award, Target, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
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

      {/* Top 4 Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 shrink-0">
        {slideData.summaryStats.map((stat, idx) => (
          <div
            key={idx}
            className="py-1.5 px-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xs text-center flex flex-col justify-center"
          >
            <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              {stat.label}
            </span>
            <div className="text-base sm:text-lg font-black text-blue-600 dark:text-cyan-400 tabular-nums leading-tight my-0.5">
              {stat.value}
            </div>
            <span className="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium leading-none">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>

      {/* 6 Team Member Cards (3x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 flex-1 items-stretch mb-1">
        {slideData.teamMembers.map((member) => {
          const isLeader = member.status === 'leadership';

          return (
            <div
              key={member.id}
              className={`p-3 sm:p-3.5 rounded-2xl border shadow-2xs flex flex-col justify-between transition-all duration-200 ${
                isLeader
                  ? 'bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border-blue-300 dark:border-cyan-500/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/60'
              }`}
            >
              <div>
                {/* Header: Name, Role & Badge */}
                <div className="flex items-start justify-between gap-2 pb-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="min-w-0">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md inline-block mb-1 ${
                        isLeader
                          ? 'bg-blue-600 text-white'
                          : member.status === 'existing'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-600 text-white'
                      }`}
                    >
                      {member.badge}
                    </span>
                    <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                      {member.name}
                    </h3>
                    <p className="text-[10px] text-blue-600 dark:text-cyan-400 font-semibold truncate">
                      {member.roleTitle}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    {isLeader ? <ShieldCheck size={16} /> : <UserCheck size={16} />}
                  </div>
                </div>

                {/* Focus */}
                <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-snug mb-2 font-normal">
                  {member.focus}
                </p>

                {/* Deliverables */}
                <div className="space-y-1 mb-2">
                  <span className="text-[8.5px] font-black uppercase text-slate-400 block tracking-wider">
                    {language === 'en' ? 'Core Deliverables:' : 'Tanggung Jawab Utama:'}
                  </span>
                  {member.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1 text-[9.5px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={10} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Metrics Footer */}
              <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[9.5px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-between">
                <span className="text-slate-400 uppercase text-[8.5px]">KPI:</span>
                <span className="text-blue-600 dark:text-cyan-400 truncate max-w-[200px] text-right">{member.kpiMetrics}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
