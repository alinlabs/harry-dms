import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';
import { useSlideData, StructuredBankCaseExample } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();

  const renderStructuredCase = (record: StructuredBankCaseExample) => {
    const isWon = record.status === 'WON';

    return (
      <div
        className={`p-2.5 sm:p-3 rounded-2xl border shadow-2xs flex flex-col justify-between ${
          isWon
            ? 'bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-900/60'
            : 'bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-900/60'
        }`}
      >
        {/* Top Case Header */}
        <div
          className={`px-2.5 py-1.5 rounded-xl mb-1.5 flex flex-wrap items-center justify-between gap-2 ${
            isWon
              ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60'
              : 'bg-rose-50/90 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-800/60'
          }`}
        >
          <div className="flex items-center gap-1.5">
            {isWon ? (
              <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <XCircle size={14} className="text-rose-600 dark:text-rose-400 shrink-0" />
            )}
            <span
              className={`text-[10px] font-black uppercase tracking-wide ${
                isWon ? 'text-emerald-800 dark:text-emerald-300' : 'text-rose-800 dark:text-rose-300'
              }`}
            >
              {record.statusLabel}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9.5px] font-bold">
            <span className="font-mono text-slate-500 dark:text-slate-400">{record.caseCode}</span>
            <span>·</span>
            <span className={isWon ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}>
              {record.grossMargin}
            </span>
          </div>
        </div>

        {/* Project Title & Meta */}
        <div className="mb-1.5">
          <h3 className="text-[11.5px] sm:text-xs font-black text-slate-900 dark:text-white leading-snug">
            {record.projectTitle}
          </h3>
          <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
            {record.clientSegment} · <strong className="text-slate-700 dark:text-slate-300">{record.picTeam}</strong>
          </div>
        </div>

        {/* 6 Mandatory Elements List (01 to 06) */}
        <div className="flex-1 flex flex-col justify-between gap-1.5">
          {record.elements.map((el) => (
            <div
              key={el.step}
              className="p-1.5 px-2 rounded-xl bg-slate-50/80 dark:bg-slate-800/45 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-2"
            >
              <span
                className={`w-5 h-5 rounded-md text-white text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5 tabular-nums ${
                  isWon ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
              >
                {el.step}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-[10px] font-black text-slate-900 dark:text-white leading-tight">
                    {el.elementName}
                  </h4>
                  {el.subHighlight && (
                    <span
                      className={`text-[8.5px] font-bold ${
                        isWon
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-rose-700 dark:text-rose-400'
                      }`}
                    >
                      {el.subHighlight}
                    </span>
                  )}
                </div>
                <p className="text-[9.5px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                  {el.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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

      {/* Side-by-Side Comparison: Left = Won Case (01-06), Right = Lost Case (01-06) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 items-stretch min-h-0">
        {renderStructuredCase(slideData.wonCase)}
        {renderStructuredCase(slideData.lostCase)}
      </div>

      {/* Bottom Takeaway Banner */}
      <div className="p-2 px-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-xs shrink-0 mt-1.5 flex items-center gap-2">
        <ShieldCheck size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
        <p className="text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300 leading-snug font-medium m-0">
          {slideData.bottomTakeaway}
        </p>
      </div>
    </div>
  );
};

export default Container;
