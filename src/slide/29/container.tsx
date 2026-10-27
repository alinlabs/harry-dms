import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Calendar, 
  AlertCircle, 
  Users, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Briefcase 
} from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const doc = slideData.apnDocument;

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      {/* Title Header */}
      <div className="text-center mb-1.5 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* Account Profile Bar (Crisp Light & Dark Adaptive) */}
      <div className="p-2.5 px-3.5 rounded-xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border border-blue-200/90 dark:border-blue-900/60 mb-2 shrink-0 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white shadow-2xs">
            <FileText size={16} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 text-[9.5px]">
              <span className="font-mono font-bold text-blue-700 dark:text-cyan-400 bg-blue-100/80 dark:bg-cyan-950/60 px-1.5 py-0.2 rounded border border-blue-200 dark:border-cyan-800/60">
                {doc.docCode}
              </span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="font-semibold text-slate-600 dark:text-slate-300">{doc.vertical}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="font-bold text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-200 dark:border-amber-800/60">
                {doc.pipelineStage}
              </span>
            </div>
            <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight mt-0.5">
              {doc.accountName}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[9.5px] text-slate-600 dark:text-slate-300">
          <div className="bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">{language === 'en' ? 'Sales Team:' : 'Tim PIC:'} </span>
            <strong className="text-slate-900 dark:text-white font-bold">{doc.picSales}</strong>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Supervisor: </span>
            <strong className="text-blue-700 dark:text-cyan-400 font-bold">{doc.supervisor}</strong>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 font-bold">
            <span>{doc.targetClose}</span>
          </div>
        </div>
      </div>

      {/* Main 12-Col Grid Mapping All 7 APN Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 flex-1 items-stretch min-h-0">
        {/* LEFT COLUMN (5 Cols): Unsur 01, 02, 03 */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2">
          {/* Unsur 01: Profil Akun & Anggaran */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                {doc.element01.number}
              </span>
              <h4 className="text-[10.5px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                <Briefcase size={11} className="text-blue-600 dark:text-cyan-400" />
                {doc.element01.title}
              </h4>
            </div>
            <div className="space-y-1 text-[9.5px] leading-snug">
              <div className="flex items-start justify-between gap-2 bg-slate-50 dark:bg-slate-800/60 p-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 font-medium">{language === 'en' ? 'Scale' : 'Skala'}:</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold text-right">{doc.element01.facilityScale}</span>
              </div>
              <div className="flex items-start justify-between gap-2 bg-blue-50/70 dark:bg-blue-950/40 p-1.5 rounded-lg border border-blue-100 dark:border-blue-900/60">
                <span className="text-blue-700 dark:text-cyan-400 font-medium">{language === 'en' ? 'Budget' : 'Anggaran'}:</span>
                <span className="text-blue-800 dark:text-blue-200 font-black text-right">{doc.element01.budgetCycle}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[9px] pt-0.5 leading-tight">
                <strong className="text-slate-800 dark:text-slate-200">{language === 'en' ? 'Core Need:' : 'Kebutuhan:'}</strong> {doc.element01.summary}
              </p>
            </div>
          </div>

          {/* Unsur 02: Audit Infrastruktur & Pain Points */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                  {doc.element02.number}
                </span>
                <h4 className="text-[10.5px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                  <AlertCircle size={11} className="text-rose-600 dark:text-rose-400" />
                  {doc.element02.title}
                </h4>
              </div>
              <span className="text-[8.5px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-900/60">
                {language === 'en' ? 'Incumbent:' : 'Petahana:'} 4 Vendor
              </span>
            </div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400 mb-1 leading-tight">
              {doc.element02.incumbentStatus}
            </div>
            <div className="space-y-1">
              {doc.element02.painPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[9px] bg-rose-50/50 dark:bg-rose-950/30 p-1 rounded-md border border-rose-100/80 dark:border-rose-900/50 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0" />
                  <div>
                    <strong className="text-rose-900 dark:text-rose-300 font-bold">{pt.issue}: </strong>
                    <span className="text-slate-700 dark:text-slate-300">{pt.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unsur 03: Peta Pengambil Keputusan (DMU Mapping) */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                {doc.element03.number}
              </span>
              <h4 className="text-[10.5px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                <Users size={11} className="text-indigo-600 dark:text-indigo-400" />
                {doc.element03.title}
              </h4>
            </div>
            <div className="space-y-1.5 flex-1 flex flex-col justify-between">
              {doc.element03.stakeholders.map((st, idx) => (
                <div
                  key={idx}
                  className="p-1.5 px-2 rounded-lg bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="font-black text-slate-900 dark:text-white">{st.position}</span>
                    <span className="font-bold text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-1 rounded border border-blue-200/60 dark:border-blue-800/60">
                      {st.role}
                    </span>
                  </div>
                  <div className="text-[8.5px] text-slate-600 dark:text-slate-300 leading-tight mt-0.5">
                    <span className="text-slate-400 dark:text-slate-500 font-medium">{language === 'en' ? 'Pain Point:' : 'Fokus:'}</span> {st.concern}
                  </div>
                  <div className="text-[8.5px] text-emerald-800 dark:text-emerald-300 font-bold leading-tight mt-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{language === 'en' ? 'DMS Angle:' : 'Solusi DMS:'}</span> {st.dmsApproach}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (7 Cols): Unsur 04, 05, 06, 07 */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-2">
          {/* Unsur 04: Matriks Solusi 3 Pilar (Land & Expand) */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                  {doc.element04.number}
                </span>
                <h4 className="text-[10.5px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                  <Layers size={11} className="text-blue-600 dark:text-cyan-400" />
                  {doc.element04.title}
                </h4>
              </div>
              <span className="text-[8.5px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800/60">
                Land, Expand & Scale
              </span>
            </div>
            <div className="space-y-1.5">
              {doc.element04.pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-1.5 px-2 rounded-lg bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between text-[9.5px]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.2 rounded border border-blue-200 dark:border-blue-800/60">
                        {p.phase}
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{p.pillarName}</span>
                    </div>
                    <span className="font-black text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-800/60 tabular-nums">
                      {p.valueAndMargin}
                    </span>
                  </div>
                  <div className="text-[9px] font-bold text-slate-800 dark:text-slate-100 leading-tight mt-1">
                    {p.products}
                  </div>
                  <div className="text-[8.5px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    <strong className="text-slate-700 dark:text-slate-300">{language === 'en' ? 'Goal:' : 'Target:'}</strong> {p.objective}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unsur 05 & Unsur 06 Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Unsur 05: Intelijen Kompetitor & Diferensiasi */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 pb-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                    {doc.element05.number}
                  </span>
                  <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                    <ShieldCheck size={11} className="text-blue-600 dark:text-cyan-400" />
                    {doc.element05.title}
                  </h4>
                </div>
                <div className="text-[8.5px] text-slate-500 dark:text-slate-400 mb-1 leading-tight">
                  <strong className="text-slate-700 dark:text-slate-300">{language === 'en' ? 'Rivals:' : 'Kompetitor:'}</strong> {doc.element05.competitors}
                </div>
                <div className="bg-blue-50/70 dark:bg-blue-950/40 p-1.5 rounded-md border border-blue-200/70 dark:border-blue-900/60 mb-1 text-[9px] text-blue-950 dark:text-blue-200 font-bold leading-tight">
                  {doc.element05.dmsEdge}
                </div>
                <p className="text-[8.5px] text-slate-600 dark:text-slate-300 font-medium leading-snug">
                  {doc.element05.strategy}
                </p>
              </div>
            </div>

            {/* Unsur 06: Simulasi Finansial Kontrak */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1 pb-1 border-b border-slate-100 dark:border-slate-800">
                <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                  {doc.element06.number}
                </span>
                <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                  <DollarSign size={11} className="text-emerald-600 dark:text-emerald-400" />
                  {doc.element06.title}
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-1.5 my-0.5">
                <div className="p-1.5 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-center">
                  <span className="text-[7.5px] text-blue-600 dark:text-cyan-400 block uppercase font-bold">
                    {language === 'en' ? 'Contract Value' : 'Total Kontrak'}
                  </span>
                  <span className="text-[11px] font-black text-blue-800 dark:text-blue-200 tabular-nums">
                    {doc.element06.totalContractValue}
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-900/60 text-center">
                  <span className="text-[7.5px] text-emerald-600 dark:text-emerald-400 block uppercase font-bold">
                    Gross Margin
                  </span>
                  <span className="text-[11px] font-black text-emerald-800 dark:text-emerald-200 tabular-nums">
                    {doc.element06.grossProfit}
                  </span>
                </div>
              </div>
              <div className="p-1.5 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 text-[8.5px] text-slate-700 dark:text-slate-300 leading-tight">
                <strong className="text-indigo-700 dark:text-indigo-300 font-bold">{doc.element06.recurringRevenue}</strong> • {doc.element06.commercialScheme}
              </div>
            </div>
          </div>

          {/* Unsur 07: Rencana Aksi (Action Plan) & Jadwal Closing */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[9.5px] font-black flex items-center justify-center shrink-0">
                  {doc.element07.number}
                </span>
                <h4 className="text-[10.5px] font-black text-slate-900 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                  <TrendingUp size={11} className="text-emerald-600 dark:text-emerald-400" />
                  {doc.element07.title}
                </h4>
              </div>
              <span className="text-[8.5px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                {doc.targetClose}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {doc.element07.milestones.map((ms, idx) => (
                <div
                  key={idx}
                  className="p-1.5 px-2 rounded-lg bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[8.5px] font-black text-blue-700 dark:text-cyan-400 mb-0.5">
                      <Calendar size={10} />
                      <span>{ms.period}</span>
                    </div>
                    <p className="text-[8.5px] text-slate-800 dark:text-slate-200 font-bold leading-tight mb-1">
                      {ms.action}
                    </p>
                  </div>
                  <span className="text-[8px] text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-1 bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    <CheckCircle2 size={9} className="text-emerald-600 dark:text-emerald-400" />
                    {ms.pic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
