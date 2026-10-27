import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Filter, 
  Compass, 
  Info,
  DollarSign
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  useSlideData, 
  INDUSTRY_FILTERS, 
  PRODUCT_FILTERS, 
  STATUS_FILTERS, 
  getStatusCategory,
  TargetEnterpriseHotspot 
} from './data';
import LeafletIndonesiaMap from './LeafletIndonesiaMap';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();

  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>('bpks-sabang-freetrade');
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [filterCategory, setFilterCategory] = useState<'industry' | 'product' | 'status'>('industry');

  // Active hotspot to display in the right card (hovered takes priority, then selected, fallback to first)
  const activeHotspotId = hoveredHotspotId || selectedHotspotId;
  const activeHotspot: TargetEnterpriseHotspot = 
    slideData.hotspots.find((h) => h.id === activeHotspotId) || 
    slideData.hotspots[0];

  const getStatusBadgeColor = (stage: string) => {
    const cat = getStatusCategory(stage);
    switch (cat) {
      case 'negosiasi_closing':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
      case 'proposal_rfp':
        return 'bg-blue-500/15 text-blue-700 dark:text-cyan-400 border-blue-500/30';
      case 'survey_poc':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30';
      case 'lead':
      default:
        return 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30';
    }
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

      {/* Top 4 Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2 shrink-0">
        {slideData.nationalSummary.map((stat, idx) => (
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

      {/* Main Split Grid: Left (7 Cols) = Map, Right (5 Cols) = Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 items-stretch min-h-0 mb-1">
        {/* Left Column (7 Cols): Interactive Leaflet Map */}
        <div className="lg:col-span-7 flex flex-col h-full min-h-[440px] sm:min-h-[460px]">
          {/* Quick Industry Filter Tabs Pill Bar */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1.5 mb-1 shrink-0">
            <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
              <Filter size={11} className="text-blue-600 dark:text-cyan-400" />
              {language === 'en' ? 'Filter:' : 'Kluster:'}
            </span>
            {INDUSTRY_FILTERS.map((ind) => {
              const isSelected = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustry(ind.id);
                    setFilterCategory('industry');
                  }}
                  className={`text-[9.5px] font-bold px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/60'
                  }`}
                >
                  {ind.label}
                </button>
              );
            })}
          </div>

          {/* Interactive Map Component Container */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800 shadow-2xs min-h-[400px]">
            <LeafletIndonesiaMap
              hotspots={slideData.hotspots}
              selectedHotspotId={selectedHotspotId}
              hoveredHotspotId={hoveredHotspotId}
              onSelectHotspot={setSelectedHotspotId}
              onHoverHotspot={setHoveredHotspotId}
              selectedIndustry={selectedIndustry}
              selectedProduct={selectedProduct}
              selectedStatus={selectedStatus}
              filterCategory={filterCategory}
              onSelectFilterCategory={setFilterCategory}
            />
          </div>
        </div>

        {/* Right Column (5 Cols): Card Detail Prospek & Akun Terpilih */}
        <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between h-full min-h-[440px]">
          <div>
            {/* Header: Name, City & Badge */}
            <div className="pb-2.5 mb-2.5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between gap-1.5 mb-1">
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {activeHotspot.industryLabel}
                </span>
                <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadgeColor(activeHotspot.pipelineStage)}`}>
                  {activeHotspot.pipelineStage}
                </span>
              </div>

              <h3 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white leading-snug">
                {activeHotspot.name}
              </h3>

              <div className="flex items-center gap-1.5 text-[10.5px] text-blue-600 dark:text-cyan-400 font-bold mt-1">
                <MapPin size={12} className="shrink-0" />
                <span>{activeHotspot.locationCity}</span>
              </div>
            </div>

            {/* 3 Key Financial & Scale Metrics */}
            <div className="grid grid-cols-3 gap-1.5 mb-2.5">
              <div className="p-2 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/50 text-center">
                <span className="text-[8.5px] font-bold uppercase text-emerald-700 dark:text-emerald-400 block leading-tight">
                  {language === 'en' ? 'Est. Annual' : 'Est. Kontrak / Thn'}
                </span>
                <span className="text-xs sm:text-[12.5px] font-black text-emerald-800 dark:text-emerald-300 tabular-nums block mt-0.5">
                  {activeHotspot.estAnnualContract}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/50 text-center">
                <span className="text-[8.5px] font-bold uppercase text-blue-700 dark:text-cyan-400 block leading-tight">
                  {language === 'en' ? 'Monthly MRR' : 'Est. MRR Bulanan'}
                </span>
                <span className="text-xs sm:text-[12.5px] font-black text-blue-800 dark:text-cyan-300 tabular-nums block mt-0.5">
                  {activeHotspot.estMonthlyMRR}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-center">
                <span className="text-[8.5px] font-bold uppercase text-slate-500 dark:text-slate-400 block leading-tight">
                  {language === 'en' ? 'Account Scope' : 'Skala Akun'}
                </span>
                <span className="text-[11px] sm:text-xs font-black text-slate-800 dark:text-slate-200 block mt-0.5 truncate">
                  {activeHotspot.targetAccountsCount}
                </span>
              </div>
            </div>

            {/* Target Solution Pillar */}
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 mb-2.5">
              <span className="text-[8.5px] font-black uppercase text-slate-400 dark:text-slate-500 block tracking-wider mb-0.5">
                {language === 'en' ? 'Target Solution:' : 'Pilar Solusi Sasaran:'}
              </span>
              <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-slate-900 dark:text-white">
                <Layers size={13} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>{activeHotspot.primaryProductLabel}</span>
              </div>
            </div>

            {/* Pain Point & Solution Details */}
            <div className="space-y-2">
              {/* Pain Point */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/25 border border-amber-200/60 dark:border-amber-900/40">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-amber-800 dark:text-amber-400 mb-0.5">
                  <AlertTriangle size={12} className="shrink-0" />
                  <span>{language === 'en' ? 'Client Core Pain Point' : 'Tantangan Operasional Klien'}</span>
                </div>
                <p className="text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300 leading-snug m-0">
                  {activeHotspot.keyPainPoint}
                </p>
              </div>

              {/* DMS Solution Fit */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/25 border border-blue-200/60 dark:border-blue-900/40">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-800 dark:text-cyan-400 mb-0.5">
                  <CheckCircle2 size={12} className="shrink-0" />
                  <span>{language === 'en' ? 'DMS Multi-Pillar Solution' : 'Solusi Multi-Pilar DMS'}</span>
                </div>
                <p className="text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300 leading-snug m-0">
                  {activeHotspot.dmsSolutionFit}
                </p>
              </div>

              {/* Competitive Edge */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/25 border border-purple-200/60 dark:border-purple-900/40">
                <div className="flex items-center gap-1.5 text-[10px] font-black text-purple-800 dark:text-purple-400 mb-0.5">
                  <ShieldCheck size={12} className="shrink-0" />
                  <span>{language === 'en' ? 'Competitive Advantage vs Competitors' : 'Keunggulan Kompetitif vs Petahana'}</span>
                </div>
                <p className="text-[9.5px] sm:text-[10px] text-slate-700 dark:text-slate-300 leading-snug m-0">
                  {activeHotspot.competitiveEdge}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Card Helper Note */}
          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <Info size={11} className="text-blue-500" />
              {language === 'en' ? 'Click any pin marker on the map to inspect account' : 'Klik pin koordinat di peta untuk membedah akun'}
            </span>
            <span className="font-mono font-bold text-blue-600 dark:text-cyan-400">
              {activeHotspot.shortName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
