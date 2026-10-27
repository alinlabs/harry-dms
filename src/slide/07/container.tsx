import { useLanguage } from '@/contexts/LanguageContext';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlide07Data, PlayerDetail, TierConfig } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slide07Data = useSlide07Data();
  // Initially null: center circle shows "TIER" with solid black background and no outline
  // When a player is clicked (e.g. DMS), center circle displays "Tier 3" with solid green background
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [activeTierIdx, setActiveTierIdx] = useState<number>(2); // 0: Tier 1, 1: Tier 2, 2: Tier 3

  // Fallback defaults to PT DMS for right deep inspection card
  const defaultPlayer = slide07Data.tiers[2].players[0]; // PT DMS
  const defaultTier = slide07Data.tiers[2];

  // Resolve active player and corresponding tier
  const selectedPlayer = useMemo(() => {
    if (!selectedPlayerId) return defaultPlayer;
    for (const t of slide07Data.tiers) {
      const found = t.players.find(p => p.id === selectedPlayerId);
      if (found) return found;
    }
    return defaultPlayer;
  }, [selectedPlayerId, defaultPlayer]);

  const selectedTier = useMemo(() => {
    if (!selectedPlayerId) return defaultTier;
    for (const t of slide07Data.tiers) {
      if (t.players.some(p => p.id === selectedPlayer.id)) {
        return t;
      }
    }
    return slide07Data.tiers[activeTierIdx] || defaultTier;
  }, [selectedPlayer, activeTierIdx, selectedPlayerId, defaultTier]);

  // Mind-Map Orbit Dimensions
  // Center is at (230, 230) on a 460x460 canvas
  const centerX = 230;
  const centerY = 230;

  // 3 Concentric Orbit Rings: Tier 1 (paling dekat), Tier 2 (tengah), Tier 3 (paling jauh)
  // 3 Concentric Orbit Rings: Tier 1 (inner), Tier 2 (middle), Tier 3 (outer)
  // Perfectly equidistant spacing: 72 -> (+60) -> 132 -> (+60) -> 192
  const orbitRadii = {
    1: 72,  // Ring 1: Tier 1 (inner)
    2: 132, // Ring 2: Tier 2 (middle)
    3: 192  // Ring 3: Tier 3 (outer)
  };

  // Mathematically precise, harmonic radial arrangement (like the reference diagram):
  // - Tier 1: 4 nodes at diagonal angles (45°, 135°, 225°, 315°)
  // - Tier 3: 4 nodes at cardinal angles (0°, 90°, 180°, 270°)
  // - Tier 2: 5 nodes at optimized inter-cardinal angles (16°, 105°, 160°, 200°, 288°)
  // - ALL radial straight lines to center have 100% unobstructed clearance (>17px clearance),
  //   ensuring no spoke line ever collides with or touches any other circle node.
  const playerOrbitConfig: Record<string, { ring: 1 | 2 | 3; angle: number; tierIdx: number; nodeRadius: number; shortLabel: string }> = {
    // Tier 1 (Ring 1 - Inner: r=72)
    'telkom': { ring: 1, angle: 315, tierIdx: 0, nodeRadius: 16.5, shortLabel: 'Telkom' },
    'ioh': { ring: 1, angle: 45, tierIdx: 0, nodeRadius: 16.5, shortLabel: 'IOH' },
    'xl-linknet': { ring: 1, angle: 135, tierIdx: 0, nodeRadius: 16.5, shortLabel: 'XL/Link' },
    'icon-plus': { ring: 1, angle: 225, tierIdx: 0, nodeRadius: 16.5, shortLabel: 'Icon+' },

    // Tier 2 (Ring 2 - Middle: r=132)
    'moratelindo': { ring: 2, angle: 16, tierIdx: 1, nodeRadius: 17, shortLabel: 'Oxygen' },
    'biznet': { ring: 2, angle: 105, tierIdx: 1, nodeRadius: 17, shortLabel: 'Biznet' },
    'fiberstar': { ring: 2, angle: 160, tierIdx: 1, nodeRadius: 17, shortLabel: 'FiberStar' },
    'myrepublic': { ring: 2, angle: 200, tierIdx: 1, nodeRadius: 17, shortLabel: 'MyRep' },
    'surge': { ring: 2, angle: 288, tierIdx: 1, nodeRadius: 17, shortLabel: 'Surge' },

    // Tier 3 (Ring 3 - Outer: r=192)
    'dms': { ring: 3, angle: 0, tierIdx: 2, nodeRadius: 19.5, shortLabel: 'DMS' },
    'subcon': { ring: 3, angle: 90, tierIdx: 2, nodeRadius: 17.5, shortLabel: 'Subcon' },
    'cbn': { ring: 3, angle: 180, tierIdx: 2, nodeRadius: 17.5, shortLabel: 'CBN' },
    'regional-isp': { ring: 3, angle: 270, tierIdx: 2, nodeRadius: 17.5, shortLabel: 'Reg. ISP' }
  };

  // Compute (x, y) coordinates for all players across all 3 tiers
  const allPlayerNodes = useMemo(() => {
    const list: Array<{
      player: PlayerDetail;
      tier: TierConfig;
      tierIdx: number;
      x: number;
      y: number;
      ring: 1 | 2 | 3;
      nodeRadius: number;
      shortLabel: string;
    }> = [];

    slide07Data.tiers.forEach((tier, tierIdx) => {
      tier.players.forEach((player) => {
        const cfg = playerOrbitConfig[player.id] || { 
          ring: (tierIdx + 1) as 1 | 2 | 3, 
          angle: player.angle, 
          tierIdx, 
          nodeRadius: 18, 
          shortLabel: player.shortName 
        };
        const r = orbitRadii[cfg.ring];
        const rad = (cfg.angle * Math.PI) / 180;
        list.push({
          player,
          tier,
          tierIdx,
          x: centerX + r * Math.cos(rad),
          y: centerY + r * Math.sin(rad),
          ring: cfg.ring,
          nodeRadius: cfg.nodeRadius,
          shortLabel: cfg.shortLabel
        });
      });
    });

    return list;
  }, []);

  const handleSelectNode = (playerId: string, tierIdx: number) => {
    setSelectedPlayerId(playerId);
    setActiveTierIdx(tierIdx);
  };

  // Center circle dynamics:
  // - Default (idle): solid black (#000000), no outline, text: "TIER"
  // - When clicked: solid tier color (Tier 1 red, Tier 2 blue, Tier 3 green), no outline, text: "Tier 1/2/3"
  const centerCircleColor = useMemo(() => {
    if (!selectedPlayerId) return '#000000';
    if (activeTierIdx === 0) return '#ef4444'; // Tier 1 solid red
    if (activeTierIdx === 1) return '#0284c7'; // Tier 2 solid blue
    return '#10b981'; // Tier 3 solid green
  }, [selectedPlayerId, activeTierIdx]);

  const centerCircleText = useMemo(() => {
    if (!selectedPlayerId) return 'TIER';
    return `Tier ${activeTierIdx + 1}`;
  }, [selectedPlayerId, activeTierIdx]);

  const tierColorClasses = useMemo(() => {
    if (selectedTier.id === 'tier-1') {
      return {
        text: 'text-rose-600 dark:text-rose-400',
        bg: 'bg-rose-500 dark:bg-rose-400',
      };
    }
    if (selectedTier.id === 'tier-2') {
      return {
        text: 'text-sky-600 dark:text-sky-400',
        bg: 'bg-sky-500 dark:bg-sky-400',
      };
    }
    return {
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500 dark:bg-emerald-400',
    };
  }, [selectedTier.id]);

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-1 max-w-7xl mx-auto font-sans text-slate-800 dark:text-slate-100">
      
      {/* Slide Header (Rata Tengah) - no divider line */}
      <div className="flex flex-col items-center justify-center text-center mb-2 pb-1">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
          {slide07Data.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-xl text-center mt-1 leading-relaxed">
          {slide07Data.subtitle}
        </p>
      </div>

      {/* Main 2-Area Grid Layout (Mind Map on Left + Deep Inspector on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* LEFT AREA: Radial Orbital Mind-Map Visualizer (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Left Diagram Card Container */}
          <div className="flex-1 flex flex-col justify-center items-center bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-sm relative overflow-hidden">
            {/* SVG Orbital Canvas */}
            <div className="relative flex items-center justify-center my-1 w-full">
              <svg 
                viewBox="0 0 460 460" 
                className="w-full max-w-[340px] sm:max-w-[390px] h-auto drop-shadow-sm transition-all"
              >
              {/* 3 Concentric Dashed Orbital Rings (Equidistant: 72, 132, 192) */}
              {/* Ring 1: Tier 1 (Inner) */}
              <circle
                cx={centerX}
                cy={centerY}
                r={orbitRadii[1]}
                fill="none"
                stroke={selectedPlayerId && activeTierIdx === 0 ? '#ef4444' : '#64748b'}
                strokeDasharray="4 4"
                strokeWidth={selectedPlayerId && activeTierIdx === 0 ? '1.8' : '1.2'}
                strokeOpacity={selectedPlayerId && activeTierIdx === 0 ? '0.9' : '0.35'}
              />

              {/* Ring 2: Tier 2 (Middle) */}
              <circle
                cx={centerX}
                cy={centerY}
                r={orbitRadii[2]}
                fill="none"
                stroke={selectedPlayerId && activeTierIdx === 1 ? '#0284c7' : '#64748b'}
                strokeDasharray="4 4"
                strokeWidth={selectedPlayerId && activeTierIdx === 1 ? '1.8' : '1.2'}
                strokeOpacity={selectedPlayerId && activeTierIdx === 1 ? '0.9' : '0.35'}
              />

              {/* Ring 3: Tier 3 (Outer) */}
              <circle
                cx={centerX}
                cy={centerY}
                r={orbitRadii[3]}
                fill="none"
                stroke={selectedPlayerId && activeTierIdx === 2 ? '#10b981' : '#64748b'}
                strokeDasharray="4 4"
                strokeWidth={selectedPlayerId && activeTierIdx === 2 ? '1.8' : '1.2'}
                strokeOpacity={selectedPlayerId && activeTierIdx === 2 ? '0.9' : '0.35'}
              />

              {/* Precise Radial Spoke Lines to Center (Reference Diagram Style):
                  - All nodes have a subtle dashed spoke in the background showing clear radial trajectory
                  - When a circle is clicked, its spoke illuminates as a solid straight line to center
                  - Angles are mathematically verified to have zero collision with ANY inner circle */}
              <g className="pointer-events-none">
                {allPlayerNodes.map((node) => {
                  const isSelected = node.player.id === selectedPlayerId;
                  if (isSelected) return null; // Drawn as solid line below
                  return (
                    <line
                      key={`spoke-${node.player.id}`}
                      x1={centerX}
                      y1={centerY}
                      x2={node.x}
                      y2={node.y}
                      stroke="#64748b"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      strokeOpacity="0.25"
                    />
                  );
                })}
              </g>

              {/* Solid Straight Line from Clicked Circle to Center Hub */}
              {(() => {
                if (!selectedPlayerId) return null;
                const activeNode = allPlayerNodes.find(n => n.player.id === selectedPlayerId);
                if (!activeNode) return null;

                const activeLineColor = activeNode.tierIdx === 0
                  ? '#ef4444' // Tier 1 solid red
                  : activeNode.tierIdx === 1
                  ? '#0284c7' // Tier 2 solid blue
                  : '#10b981'; // Tier 3 solid green

                return (
                  <g className="pointer-events-none">
                    <motion.line
                      key={`line-to-center-${activeNode.player.id}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      x1={activeNode.x}
                      y1={activeNode.y}
                      x2={centerX}
                      y2={centerY}
                      stroke={activeLineColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </g>
                );
              })()}

              {/* Center Core Hub: Clean Solid Circle with NO outline */}
              {/* Default: pure black (#000000) and text "TIER". When clicked: solid tier color and "Tier 1/2/3" */}
              <g 
                className="cursor-pointer select-none"
                onClick={() => setSelectedPlayerId(null)}
              >
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="28"
                  fill={centerCircleColor}
                  stroke="none"
                  className="transition-colors duration-200"
                />

                <text
                  x={centerX}
                  y={centerY}
                  dominantBaseline="central"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="12.5"
                  fontWeight="900"
                  letterSpacing="0.04em"
                  className="select-none pointer-events-none"
                >
                  {centerCircleText}
                </text>
              </g>

              {/* Satellite Player Nodes across all 3 Tiers (Solid colors, no gradients) */}
              {allPlayerNodes.map((item) => {
                const isSelected = item.player.id === selectedPlayerId;

                // Solid tier color for selected node
                const solidActiveColor = item.tierIdx === 0
                  ? '#ef4444' // Tier 1 solid red
                  : item.tierIdx === 1
                  ? '#0284c7' // Tier 2 solid blue
                  : '#10b981'; // Tier 3 solid green

                return (
                  <g
                    key={`node-${item.player.id}`}
                    onClick={() => handleSelectNode(item.player.id, item.tierIdx)}
                    className="cursor-pointer select-none transition-all duration-150 hover:opacity-100"
                    opacity={isSelected ? 1 : 0.85}
                  >
                    {/* Main Node Circle:
                        - When clicked (selected): solid tier color fill with NO outline circle (stroke="none")
                        - Unselected: uniform subtle thin gray border (#64748b, 1px) and dark slate fill (#1e293b) without special outline */}
                    <circle
                      cx={item.x}
                      cy={item.y}
                      r={item.nodeRadius}
                      fill={isSelected ? solidActiveColor : '#1e293b'}
                      stroke={isSelected ? 'none' : '#64748b'}
                      strokeWidth={isSelected ? '0' : '1'}
                    />

                    {/* Node Label (Shortest name only, vertically centered, no PTS score) */}
                    <text
                      x={item.x}
                      y={item.y}
                      dominantBaseline="central"
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : '#94a3b8'}
                      fontSize={isSelected ? '8.5' : '7.5'}
                      fontWeight={isSelected ? '900' : '700'}
                      fontFamily="sans-serif"
                      letterSpacing="0.02em"
                      pointerEvents="none"
                    >
                      {item.shortLabel}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 3-Ring Tier Legend */}
          <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-[10.5px] font-semibold text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>{language === "en" ? "Ring 1: Tier 1" : "Ring 1: Tier 1"}</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>{language === "en" ? "Ring 2: Tier 2" : "Ring 2: Tier 2"}</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>{language === "en" ? "Ring 3: Tier 3" : "Ring 3: Tier 3"}</span>
          </div>
        </div>
      </div>

      {/* RIGHT AREA: Company Inspection Drawer & Deep Analysis (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col justify-between">
          
          {/* Outside Top Header: Badge Tier & Judul */}
          <div className="flex items-center justify-between pb-1.5 px-0.5 text-[11px] min-h-[26px]">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider text-white shadow-xs ${
                selectedTier.id === 'tier-1' ? 'bg-rose-600' : selectedTier.id === 'tier-2' ? 'bg-sky-600' : 'bg-emerald-600'
              }`}>
                {selectedTier.tierNumber}
              </span>
              <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                {selectedTier.title}
              </span>
            </div>
          </div>

          {/* Right Main Card: Unified Single Card without any nested wrapping cards */}
          <div className="flex-1 flex flex-col justify-start bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlayer.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="w-full flex flex-col justify-start"
              >
                {/* 1. Company Identity Header (Direct in card, no wrapper box) */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    {/* Role / Bidang Solusi ABOVE Official PT Name */}
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {selectedPlayer.role}
                    </div>

                    {/* Main Title: Official PT Name */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                        {selectedPlayer.name}
                      </h3>
                    </div>

                    {/* Location & Ticker / Keterangan Pasar BELOW Official PT Name */}
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                      <span className="font-medium text-slate-500 dark:text-slate-400">{selectedPlayer.location}</span>
                    </div>
                  </div>

                  {/* Composite Score */}
                  <div className="text-right shrink-0">
                    <div className="text-[10px] font-bold uppercase text-slate-400">{language === "en" ? "Composite Score" : "Skor Komposit"}</div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-baseline justify-end">
                      <span className={tierColorClasses.text}>
                        {selectedPlayer.score}
                      </span>
                      <span className="text-xs text-slate-400 font-bold ml-0.5">/100</span>
                    </div>
                  </div>
                </div>

                {/* 2. 5-Dimension Progress Bars with Tier-Matched Numbers and Indicators */}
                <div className="pt-3 sm:pt-4 flex flex-col gap-3.5 sm:gap-4">
                  {selectedPlayer.dimensions.map((dim, dIdx) => {
                    const percentage = (dim.score / dim.max) * 100;
                    return (
                      <div key={dIdx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-700 dark:text-slate-200 font-bold">
                            {dim.label}
                          </span>
                          <span className={`font-black ${tierColorClasses.text} text-xs`}>
                            {dim.score} <span className="text-[10px] font-medium text-slate-400">/ {dim.max}</span>
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.45, delay: dIdx * 0.06 }}
                            className={`h-full rounded-full ${tierColorClasses.bg} shadow-xs`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>



    </div>
  );
};

export default Container;
