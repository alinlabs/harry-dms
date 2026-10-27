import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart, LineChart } from '@/components/charts';
import { TrendingUp } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const data = useSlideData();

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

      {/* Top Statistical Summary Strip (Tabular Numbers, Analytical Metrics) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-slate-200 dark:border-slate-800 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 bg-slate-50/60 dark:bg-slate-900/50 mb-2 shrink-0">
        {data.headlineStats.map((stat, idx) => {
          const isWarning = idx === 1;
          return (
            <div key={idx} className="py-1.5 px-3 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">
                  {stat.label}
                </span>
                <span
                  className={`text-[9px] font-black px-1.5 py-0.5 rounded tabular-nums shrink-0 ${
                    isWarning
                      ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                      : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  {stat.delta}
                </span>
              </div>
              <div
                className={`text-lg sm:text-xl font-black tabular-nums leading-tight my-0.5 ${
                  isWarning
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-blue-600 dark:text-cyan-400'
                }`}
              >
                {stat.value}
              </div>
              <span className="text-[9.5px] text-slate-500 dark:text-slate-400 truncate">
                {stat.sub}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main Two Interactive Statistical Charts (Left: Focus vs Opportunity vs Margin BarChart, Right: Marginal Growth Trajectory LineChart) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch my-1">
        {/* LEFT CHART (6 Cols): Product Focus vs Market Opportunity & Gross Margin */}
        <div className="lg:col-span-6 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="mb-1">
            <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
              {data.chartFocusTitle}
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">
              {data.chartFocusSub}
            </p>
          </div>

          <div className="flex-1 min-h-[185px] flex items-center">
            <BarChart
              data={data.focusVsOpportunityData}
              xKey="name"
              height={190}
              series={[
                {
                  key: 'fokus',
                  name: language === 'en' ? 'Product Focus (%)' : 'Fokus Produk (%)',
                  color: '#2563eb',
                },
                {
                  key: 'opportunity',
                  name: language === 'en' ? 'Market Opportunity (%)' : 'Opportunity Pasar (%)',
                  color: '#06b6d4',
                },
                {
                  key: 'margin',
                  name: language === 'en' ? 'Gross Margin (%)' : 'Gross Margin (%)',
                  color: '#10b981',
                },
              ]}
              formatYAxis={(v) => `${v}%`}
              formatTooltip={(v) => `${v}%`}
            />
          </div>
        </div>

        {/* RIGHT CHART (6 Cols): Marginal Growth Acceleration Trajectory */}
        <div className="lg:col-span-6 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="mb-1">
            <h3 className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white leading-tight">
              {data.chartGrowthTitle}
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">
              {data.chartGrowthSub}
            </p>
          </div>

          <div className="flex-1 min-h-[185px] flex items-center">
            <LineChart
              data={data.marginalGrowthTrend}
              xKey="period"
              height={190}
              series={[
                {
                  key: 'withExpansion',
                  name:
                    language === 'en'
                      ? 'Prioritizing Product Expansion (Margin %)'
                      : 'Mengutamakan Ekspansi Produk (Margin %)',
                  color: '#10b981',
                  type: 'area',
                  strokeWidth: 3,
                },
                {
                  key: 'withoutExpansion',
                  name:
                    language === 'en'
                      ? 'Existing Commodity Only (Margin %)'
                      : 'Hanya Produk Existing (Margin %)',
                  color: '#ef4444',
                  type: 'line',
                  dashed: true,
                  strokeWidth: 2,
                },
              ]}
              formatYAxis={(v) => `${v}%`}
              formatTooltip={(v) => `${v}%`}
            />
          </div>
        </div>
      </div>

      {/* Quantitative Statistical Matrix Table (Bukan Card-Card, Murni Tabel Statistik & Bar Indikator) */}
      <div className="mt-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 overflow-hidden shrink-0">
        <div className="px-3 py-1.5 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp size={13} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {data.tableTitle}
            </span>
          </div>
          <span className="text-[9.5px] font-bold text-emerald-700 dark:text-emerald-400">
            {language === 'en'
              ? 'Priority: Product Expansion Drives Marginal Growth'
              : 'Prioritas Utama: Ekspansi Produk Menopang Pertumbuhan Marginal'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[10.5px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[9.5px] font-black uppercase text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-900/40">
                <th className="py-1.5 px-3">{language === 'en' ? 'Product Portfolio Line' : 'Lini Portofolio Produk'}</th>
                <th className="py-1.5 px-2">{language === 'en' ? 'Priority Category' : 'Kategori Prioritas'}</th>
                <th className="py-1.5 px-2 w-28">{language === 'en' ? 'Focus Index' : 'Indeks Fokus'}</th>
                <th className="py-1.5 px-2 w-28">{language === 'en' ? 'Opportunity' : 'Opportunity'}</th>
                <th className="py-1.5 px-2 text-right">{language === 'en' ? 'Gross Margin' : 'Gross Margin'}</th>
                <th className="py-1.5 px-2 text-center">{language === 'en' ? 'Multiplier' : 'Multiplier'}</th>
                <th className="py-1.5 px-3">{language === 'en' ? 'Marginal Growth Impact' : 'Dampak Pertumbuhan Marginal'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
              {data.statisticalRows.map((row) => {
                const isExpansion =
                  row.categoryType.includes('Ekspansi') || row.categoryType.includes('Expansion');
                const isDev =
                  row.categoryType.includes('Pengembangan') || row.categoryType.includes('Development');

                return (
                  <tr
                    key={row.id}
                    className={
                      isExpansion
                        ? 'bg-emerald-50/30 dark:bg-emerald-950/15 font-medium'
                        : 'hover:bg-slate-50/60 dark:hover:bg-slate-800/40'
                    }
                  >
                    <td className="py-1.5 px-3 font-bold text-slate-900 dark:text-white">
                      {row.productLine}
                    </td>
                    <td className="py-1.5 px-2">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wide ${
                          isExpansion
                            ? 'bg-emerald-600 text-white'
                            : isDev
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {row.categoryType}
                      </span>
                    </td>
                    {/* Focus Progress Bar */}
                    <td className="py-1.5 px-2 tabular-nums">
                      <div className="flex items-center gap-1.5">
                        <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 dark:bg-cyan-400 rounded-full"
                            style={{ width: `${row.focusScore}%` }}
                          />
                        </div>
                        <span className="font-black text-slate-800 dark:text-slate-200 w-7 text-right">
                          {row.focusScore}%
                        </span>
                      </div>
                    </td>
                    {/* Opportunity Progress Bar */}
                    <td className="py-1.5 px-2 tabular-nums">
                      <div className="flex items-center gap-1.5">
                        <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cyan-500 rounded-full"
                            style={{ width: `${row.opportunityScore}%` }}
                          />
                        </div>
                        <span className="font-black text-slate-800 dark:text-slate-200 w-7 text-right">
                          {row.opportunityScore}%
                        </span>
                      </div>
                    </td>
                    <td className="py-1.5 px-2 text-right font-black tabular-nums text-emerald-600 dark:text-emerald-400">
                      {row.grossMarginPct}%
                    </td>
                    <td className="py-1.5 px-2 text-center font-black tabular-nums text-blue-600 dark:text-cyan-400">
                      {row.marginalMultiplier}
                    </td>
                    <td className="py-1.5 px-3 text-[10px] text-slate-600 dark:text-slate-300">
                      {row.roleNote}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Container;
