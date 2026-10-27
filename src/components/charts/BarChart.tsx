import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface BarChartSeries {
  key: string;
  name?: string;
  color?: string;
  radius?: [number, number, number, number];
}

export interface BarChartProps {
  data: any[];
  xKey: string;
  series?: BarChartSeries[];
  // If single series with individual cell colors:
  singleKey?: string;
  cellColors?: string[];
  layout?: 'horizontal' | 'vertical';
  height?: number | string;
  showGrid?: boolean;
  showLegend?: boolean;
  formatXAxis?: (val: any) => string;
  formatYAxis?: (val: any) => string;
  formatTooltip?: (val: any, name: string) => string;
  className?: string;
}

const DEFAULT_BAR_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];

export const BarChart: React.FC<BarChartProps> = ({
  data,
  xKey,
  series,
  singleKey,
  cellColors,
  layout = 'horizontal',
  height = 320,
  showGrid = true,
  showLegend = true,
  formatXAxis,
  formatYAxis,
  formatTooltip,
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const isVertical = layout === 'vertical';
  const gridColor = isDark ? '#334155' : '#e2e8f0';
  const textColor = isDark ? '#94a3b8' : '#64748b';
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipText = isDark ? '#f1f5f9' : '#0f172a';

  const effectiveSeries: BarChartSeries[] = series || (singleKey ? [{ key: singleKey, name: singleKey }] : []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: tooltipBg,
          borderColor: tooltipBorder,
          borderWidth: 1,
          borderRadius: '12px',
          padding: '10px 14px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.15)',
          color: tooltipText,
          minWidth: '140px',
          fontFamily: "'Inter', sans-serif",
        }}>
          <p className="font-bold text-xs mb-2 border-b border-slate-200 dark:border-slate-700/60 pb-1.5">{label}</p>
          {payload.map((entry: any, index: number) => {
            const displayVal = formatTooltip 
              ? formatTooltip(entry.value, entry.name) 
              : entry.value?.toLocaleString();
            return (
              <div key={index} className="flex items-center justify-between gap-4 text-xs mb-1 last:mb-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.fill }} />
                  <span style={{ color: textColor }}>{entry.name}</span>
                </div>
                <span className="font-bold">{displayVal}</span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          layout={layout}
          margin={{ top: 15, right: 20, left: isVertical ? 30 : 0, bottom: 5 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              horizontal={true}
              vertical={isVertical}
            />
          )}

          {isVertical ? (
            <>
              <XAxis type="number" stroke={textColor} tick={{ fontSize: 12 }} tickFormatter={formatXAxis} />
              <YAxis
                dataKey={xKey}
                type="category"
                stroke={textColor}
                tick={{ fontSize: 12 }}
                tickFormatter={formatYAxis}
                width={90}
              />
            </>
          ) : (
            <>
              <XAxis
                dataKey={xKey}
                stroke={textColor}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickMargin={8}
                tickFormatter={formatXAxis}
              />
              <YAxis
                stroke={textColor}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={formatYAxis}
              />
            </>
          )}

          <Tooltip content={<CustomTooltip />} cursor={{ fill: isDark ? '#334155' : '#f1f5f9', opacity: 0.4 }} />

          {showLegend && effectiveSeries.length > 1 && (
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingBottom: '8px' }}
            />
          )}

          {effectiveSeries.map((s, idx) => {
            const baseColor = s.color || DEFAULT_BAR_COLORS[idx % DEFAULT_BAR_COLORS.length];
            const defaultRadius: [number, number, number, number] = isVertical ? [0, 6, 6, 0] : [6, 6, 0, 0];
            return (
              <Bar
                key={s.key}
                dataKey={s.key}
                name={s.name || s.key}
                fill={baseColor}
                radius={s.radius || defaultRadius}
              >
                {cellColors &&
                  data.map((_, cIdx) => (
                    <Cell
                      key={`cell-${cIdx}`}
                      fill={cellColors[cIdx % cellColors.length]}
                    />
                  ))}
              </Bar>
            );
          })}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
