import { useLanguage } from '@/contexts/LanguageContext';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick, X, ShieldCheck, AlertCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [hoveredCompanyId, setHoveredCompanyId] = useState<string | null>(null);
  // Default: ALL 4 quadrants are selected
  const [activeQuadrants, setActiveQuadrants] = useState<string[]>(['q_so', 'q_wo', 'q_wt', 'q_st']);

  const handleToggleQuadrant = (qId: string) => {
    // Jika semua kuadran sedang aktif (default), klik salah satu tab langsung memfokuskan kuadran tersebut
    if (activeQuadrants.length === 4) {
      setActiveQuadrants([qId]);
      return;
    }

    // Jika tab tersebut sedang menjadi satu-satunya yang fokus, klik lagi untuk melepas (kembali ke semua kuadran)
    if (activeQuadrants.length === 1 && activeQuadrants.includes(qId)) {
      setActiveQuadrants(['q_so', 'q_wo', 'q_wt', 'q_st']);
      return;
    }

    // Toggle multi-select bebas
    if (activeQuadrants.includes(qId)) {
      const next = activeQuadrants.filter(id => id !== qId);
      setActiveQuadrants(next.length === 0 ? ['q_so', 'q_wo', 'q_wt', 'q_st'] : next);
    } else {
      setActiveQuadrants([...activeQuadrants, qId]);
    }
  };

  const selectedCompany = selectedCompanyId
    ? slideData.companies.find(c => c.id === selectedCompanyId) || null
    : null;

  const activeGuidelineCompanies = slideData.companies.filter(
    c => c.id === selectedCompanyId || c.id === hoveredCompanyId
  );

  return (
    <div className="w-full flex-1 flex flex-col justify-between max-w-7xl mx-auto font-sans select-text">
      {/* Header Slide */}
      <div className="text-center mb-1.5 shrink-0">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-0.5 leading-snug">
          {slideData.subtitle}
        </p>
      </div>

      {/* Main Kuadran View: Canvas di Kiri & Inspector Card di Kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 min-h-0">
        {/* Left: 2D Canvas Kuadran SWOT (Tinggi & Flex Full ke Bawah) */}
        <div className="lg:col-span-8 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden h-full">
          {/* Top Toolbar within Canvas: Filter by SWOT Quadrant (Tanpa Tab Semua, Warna Aktif vs Abu saat Tidak Dipilih) */}
          <div className="flex items-center justify-between mb-2 z-10 text-xs flex-wrap gap-1.5 shrink-0">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
              Filter Kuadran:
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {[
                { 
                  id: 'q_so', 
                  label: 'Kuadran I',
                  activeColor: 'bg-emerald-600 text-white shadow-xs'
                },
                { 
                  id: 'q_wo', 
                  label: 'Kuadran II',
                  activeColor: 'bg-cyan-600 text-white shadow-xs'
                },
                { 
                  id: 'q_wt', 
                  label: 'Kuadran III',
                  activeColor: 'bg-amber-500 text-white shadow-xs'
                },
                { 
                  id: 'q_st', 
                  label: 'Kuadran IV',
                  activeColor: 'bg-purple-600 text-white shadow-xs'
                }
              ].map(item => {
                const isSelected = activeQuadrants.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleToggleQuadrant(item.id)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? item.activeColor
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quadrant Background Watermarks: Hanya teks di tengah "KUADRAN I" s/d "KUADRAN IV" tanpa teks penjelasan lainnya */}
          <div className="absolute inset-0 top-8 grid grid-cols-2 grid-rows-2 pointer-events-none">
            {/* Top-Left: Kuadran II */}
            <div className="border-r border-b border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center p-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-slate-300/70 dark:text-slate-700/60 uppercase select-none">
                KUADRAN II
              </span>
            </div>

            {/* Top-Right: Kuadran I */}
            <div className="border-b border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center p-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-slate-300/70 dark:text-slate-700/60 uppercase select-none">
                KUADRAN I
              </span>
            </div>

            {/* Bottom-Left: Kuadran III */}
            <div className="border-r border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center p-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-slate-300/70 dark:text-slate-700/60 uppercase select-none">
                KUADRAN III
              </span>
            </div>

            {/* Bottom-Right: Kuadran IV */}
            <div className="flex items-center justify-center p-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-slate-300/70 dark:text-slate-700/60 uppercase select-none">
                KUADRAN IV
              </span>
            </div>
          </div>

          {/* Coordinate Plane Area with Pins & S-O-W-T Axis Extremities (Luas dan Tinggi) */}
          <div className="relative w-full flex-1 min-h-[420px] sm:min-h-[460px] my-auto px-4">
            {/* Center Axes Lines */}
            <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-slate-300 dark:bg-slate-700 pointer-events-none" />
            <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-slate-300 dark:bg-slate-700 pointer-events-none" />

            {/* Ujung Sumbu Atas: O (Opportunities / Peluang) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-900">
                O
              </div>
            </div>

            {/* Ujung Sumbu Bawah: T (Threats / Ancaman) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-black text-sm flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-900">
                T
              </div>
            </div>

            {/* Ujung Sumbu Kiri: W (Weaknesses / Kelemahan) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center pointer-events-none">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-900">
                W
              </div>
            </div>

            {/* Ujung Sumbu Kanan: S (Strengths / Kekuatan) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center pointer-events-none">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-900">
                S
              </div>
            </div>

            {/* SVG Canvas for Guidelines and Synergy Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="synergyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Synergistic Connection Line from Oxygen.id to DMS in Kuadran I */}
              <line
                x1="65%"
                y1="36%"
                x2="80%"
                y2="22%"
                stroke={activeQuadrants.includes('q_so') ? "url(#synergyGrad)" : "#94a3b8"}
                strokeOpacity={activeQuadrants.includes('q_so') ? 1 : 0.25}
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />

              {/* Garis Titik-Titik Putus-Putus Abu-Abu ke Sumbu (Muncul saat hover & klik) */}
              {activeGuidelineCompanies.map((c) => {
                const svgY = 100 - c.y;
                return (
                  <g key={`guidelines-${c.id}`} className="transition-opacity duration-200">
                    {/* Garis putus-putus horizontal dari bullet ke sumbu vertikal (x=50%) */}
                    <line
                      x1={`${c.x}%`}
                      y1={`${svgY}%`}
                      x2="50%"
                      y2={`${svgY}%`}
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="opacity-80 dark:opacity-70"
                    />
                    {/* Garis putus-putus vertikal dari bullet ke sumbu horizontal (y=50%) */}
                    <line
                      x1={`${c.x}%`}
                      y1={`${svgY}%`}
                      x2={`${c.x}%`}
                      y2="50%"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="opacity-80 dark:opacity-70"
                    />
                    {/* Titik perpotongan di sumbu */}
                    <circle
                      cx="50%"
                      cy={`${svgY}%`}
                      r="2.5"
                      fill="#94a3b8"
                      className="opacity-90 dark:opacity-80"
                    />
                    <circle
                      cx={`${c.x}%`}
                      cy="50%"
                      r="2.5"
                      fill="#94a3b8"
                      className="opacity-90 dark:opacity-80"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Plotted Pins: Semua titik tetap tampil, jika kuadran tidak dipilih maka bullets menjadi abu */}
            {slideData.companies.map((c) => {
              const isSelected = selectedCompanyId === c.id;
              const isHovered = hoveredCompanyId === c.id;
              const isDMS = !!c.isDMS;
              const isQuadrantActive = activeQuadrants.includes(c.swotQuadrant);

              // Tentukan warna bullet: jika kuadran tidak dipilih, warna abu-abu
              let bulletBg = '';
              if (!isQuadrantActive) {
                bulletBg = 'bg-slate-400 dark:bg-slate-600 opacity-35';
              } else if (isDMS) {
                bulletBg = 'bg-emerald-500 ring-2 ring-emerald-400 opacity-100';
              } else if (c.swotQuadrant === 'q_so') {
                bulletBg = 'bg-emerald-600 opacity-100';
              } else if (c.swotQuadrant === 'q_wo') {
                bulletBg = 'bg-cyan-600 opacity-100';
              } else if (c.swotQuadrant === 'q_wt') {
                bulletBg = 'bg-amber-500 opacity-100';
              } else {
                bulletBg = 'bg-purple-600 opacity-100';
              }

              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCompanyId(c.id)}
                  onMouseEnter={() => setHoveredCompanyId(c.id)}
                  onMouseLeave={() => setHoveredCompanyId(null)}
                  style={{ left: `${c.x}%`, bottom: `${c.y}%` }}
                  className="absolute -translate-x-1/2 translate-y-1/2 cursor-pointer z-20 flex flex-col items-center select-none"
                  title={`${c.name} - Klik untuk melihat detail`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 shadow-md transition-all duration-200 ${bulletBg} ${
                      isSelected
                        ? 'ring-4 ring-offset-2 ring-blue-500 dark:ring-cyan-400 z-30 scale-125 !opacity-100'
                        : isHovered
                          ? 'ring-2 ring-offset-1 ring-slate-400 dark:ring-slate-500 scale-110 !opacity-100'
                          : ''
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Company Inspector Card (Full ke Bawah Sejajar Canvas) */}
        <div className="lg:col-span-4 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-full overflow-hidden">
          {selectedCompany ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCompany.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col h-full overflow-hidden"
              >
                <div className="overflow-y-auto no-scrollbar space-y-2.5 pr-0.5 pb-2">
                  {/* Top Bar with SWOT Badge & Close Button */}
                  <div className="flex items-center justify-between pb-0.5">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10.5px] font-black uppercase tracking-wider border ${
                        selectedCompany.swotQuadrant === 'q_so'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/60'
                          : selectedCompany.swotQuadrant === 'q_wo'
                            ? 'bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-700/60'
                            : selectedCompany.swotQuadrant === 'q_wt'
                              ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700/60'
                              : 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-700/60'
                      }`}
                    >
                      {selectedCompany.swotQuadrant === 'q_so'
                        ? 'KUADRAN I'
                        : selectedCompany.swotQuadrant === 'q_wo'
                          ? 'KUADRAN II'
                          : selectedCompany.swotQuadrant === 'q_wt'
                            ? 'KUADRAN III'
                            : 'KUADRAN IV'}
                    </span>
                    <button
                      onClick={() => setSelectedCompanyId(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      title="Tutup detail"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  {/* Company Name & Strategic Role */}
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight">
                      {selectedCompany.name}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {selectedCompany.role}
                    </p>
                  </div>

                  {/* 4-Box SWOT Analysis List (Vertikal) */}
                  <div className="flex flex-col gap-2">
                    {/* Strengths */}
                    <div className="p-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-600 text-white shadow-xs">
                      <div className="flex items-center gap-1.5 text-white text-[10px] font-black uppercase mb-1">
                        <ShieldCheck size={12} className="text-white shrink-0" />
                        <span>{language === "en" ? "Strengths (S)" : "Kekuatan (S)"}</span>
                      </div>
                      <p className="text-[10.5px] text-white leading-relaxed font-medium">
                        {selectedCompany.strengths}
                      </p>
                    </div>

                    {/* Weaknesses */}
                    <div className="p-2.5 rounded-xl bg-amber-500 dark:bg-amber-600 text-white shadow-xs">
                      <div className="flex items-center gap-1.5 text-white text-[10px] font-black uppercase mb-1">
                        <AlertTriangle size={12} className="text-white shrink-0" />
                        <span>{language === "en" ? "Weaknesses (W)" : "Kelemahan (W)"}</span>
                      </div>
                      <p className="text-[10.5px] text-white leading-relaxed font-medium">
                        {selectedCompany.weaknesses}
                      </p>
                    </div>

                    {/* Opportunities */}
                    <div className="p-2.5 rounded-xl bg-blue-600 dark:bg-blue-600 text-white shadow-xs">
                      <div className="flex items-center gap-1.5 text-white text-[10px] font-black uppercase mb-1">
                        <TrendingUp size={12} className="text-white shrink-0" />
                        <span>{language === "en" ? "Opportunities (O)" : "Peluang (O)"}</span>
                      </div>
                      <p className="text-[10.5px] text-white leading-relaxed font-medium">
                        {selectedCompany.opportunities}
                      </p>
                    </div>

                    {/* Threats */}
                    <div className="p-2.5 rounded-xl bg-rose-600 dark:bg-rose-600 text-white shadow-xs">
                      <div className="flex items-center gap-1.5 text-white text-[10px] font-black uppercase mb-1">
                        <AlertCircle size={12} className="text-white shrink-0" />
                        <span>{language === "en" ? "Threats (T)" : "Ancaman (T)"}</span>
                      </div>
                      <p className="text-[10.5px] text-white leading-relaxed font-medium">
                        {selectedCompany.threats}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Tampilan Default Sebelum Titik Diklik */
            <div className="flex flex-col justify-start text-center h-full p-1 overflow-y-auto no-scrollbar space-y-3">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50/90 dark:bg-blue-950/50 border border-blue-200/70 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2 mt-1 shadow-xs">
                  <MousePointerClick size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {language === "en" ? "SWOT Strategic Analysis Matrix" : "Analisis Strategis Matriks SWOT"}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                  {language === "en" ? "Click any point on the quadrant map to inspect internal factors (S-W), external factors (O-T), and strategic operational plans." : "Klik pada salah satu titik di peta kuadran untuk menampilkan analisis faktor internal (S-W), eksternal (O-T), dan strategi operasionalnya."}
                </p>
              </div>

              {/* 4 Kuadran Strategi SWOT Cards */}
              <div className="w-full pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-left">
                <span className="font-black text-slate-400 dark:text-slate-500 uppercase text-[9px] tracking-wider mb-0.5">
                  {language === "en" ? "4 Strategy Quadrants:" : "4 Kuadran Strategi:"}
                </span>
                
                {/* Kuadran I */}
                <div
                  onClick={() => handleToggleQuadrant('q_so')}
                  className={`p-2.5 rounded-xl shadow-xs flex flex-col text-left cursor-pointer transition-all ${
                    activeQuadrants.includes('q_so')
                      ? 'bg-emerald-600 text-white hover:opacity-95'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                  title="Klik untuk fokus/toggle Kuadran I"
                >
                  <span className="font-bold text-xs uppercase tracking-wide leading-tight">
                    KUADRAN I (S.O)
                  </span>
                  <span className="text-[11px] font-medium leading-tight mt-0.5 opacity-90">
                    {language === "en" ? "Aggressive / Growth" : "Agresif / Pertumbuhan"}
                  </span>
                </div>

                {/* Kuadran II */}
                <div
                  onClick={() => handleToggleQuadrant('q_wo')}
                  className={`p-2.5 rounded-xl shadow-xs flex flex-col text-left cursor-pointer transition-all ${
                    activeQuadrants.includes('q_wo')
                      ? 'bg-cyan-600 text-white hover:opacity-95'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                  title="Klik untuk fokus/toggle Kuadran II"
                >
                  <span className="font-bold text-xs uppercase tracking-wide leading-tight">
                    KUADRAN II (W.O)
                  </span>
                  <span className="text-[11px] font-medium leading-tight mt-0.5 opacity-90">
                    {language === "en" ? "Reorientation / Alliances" : "Reorientasi / Aliansi"}
                  </span>
                </div>

                {/* Kuadran III */}
                <div
                  onClick={() => handleToggleQuadrant('q_wt')}
                  className={`p-2.5 rounded-xl shadow-xs flex flex-col text-left cursor-pointer transition-all ${
                    activeQuadrants.includes('q_wt')
                      ? 'bg-amber-500 dark:bg-amber-600 text-white hover:opacity-95'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                  title="Klik untuk fokus/toggle Kuadran III"
                >
                  <span className="font-bold text-xs uppercase tracking-wide leading-tight">
                    KUADRAN III (W.T)
                  </span>
                  <span className="text-[11px] font-medium leading-tight mt-0.5 opacity-90">
                    Defensif / Niche
                  </span>
                </div>

                {/* Kuadran IV */}
                <div
                  onClick={() => handleToggleQuadrant('q_st')}
                  className={`p-2.5 rounded-xl shadow-xs flex flex-col text-left cursor-pointer transition-all ${
                    activeQuadrants.includes('q_st')
                      ? 'bg-purple-600 text-white hover:opacity-95'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                  title="Klik untuk fokus/toggle Kuadran IV"
                >
                  <span className="font-bold text-xs uppercase tracking-wide leading-tight">
                    KUADRAN IV (S.T)
                  </span>
                  <span className="text-[11px] font-medium leading-tight mt-0.5 opacity-90">
                    Diversifikasi / Kompetitif
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
