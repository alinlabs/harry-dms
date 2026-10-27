import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface LineChartSeries {
  key: string;
  name?: string;
  color?: string;
  type?: 'line' | 'area';
  strokeWidth?: number;
  dashed?: boolean;
}

export interface LineChartProps {
  data: any[];
  xKey: string;
  series: LineChartSeries[];
  height?: number | string;
  showGrid?: boolean;
  showLegend?: boolean;
  formatYAxis?: (val: number) => string;
  formatTooltip?: (val: number, name: string) => string;
  className?: string;
}

const DEFAULT_LINE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

export const LineChart: React.FC<LineChartProps> = ({
  data,
  xKey,
  series,
  height = 320,
  showGrid = true,
  showLegend = true,
  formatYAxis,
  formatTooltip,
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const gridColor = isDark ? '#334155' : '#e2e8f0';
  const textColor = isDark ? '#94a3b8' : '#64748b';
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipText = isDark ? '#f1f5f9' : '#0f172a';

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
          minWidth: '150px',
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
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
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
        <ComposedChart
          data={data}
          margin={{ top: 15, right: 20, left: 0, bottom: 5 }}
        >
          <defs>
            {series.map((s, idx) => {
              const color = s.color || DEFAULT_LINE_COLORS[idx % DEFAULT_LINE_COLORS.length];
              return (
                <linearGradient key={`grad-${s.key}`} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.0} />
                </linearGradient>
              );
            })}
          </defs>

          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />}

          <XAxis
            dataKey={xKey}
            stroke={textColor}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickMargin={8}
          />

          <YAxis
            stroke={textColor}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: textColor, strokeWidth: 1, strokeDasharray: '3 3' }} />

          {showLegend && (
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingBottom: '8px' }}
            />
          )}

          {series.map((s, idx) => {
            const color = s.color || DEFAULT_LINE_COLORS[idx % DEFAULT_LINE_COLORS.length];
            const name = s.name || s.key;
            if (s.type === 'area') {
              return (
                <React.Fragment key={s.key}>
                  <Area
                    type="monotone"
                    dataKey={s.key}
                    stroke="none"
                    fill={`url(#grad-${s.key})`}
                    name={name}
                  />
                  <Line
                    type="monotone"
                    dataKey={s.key}
                    stroke={color}
                    name={name}
                    strokeWidth={s.strokeWidth || 3}
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                </React.Fragment>
              );
            }
            return (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={color}
                name={name}
                strokeWidth={s.strokeWidth || 2.5}
                strokeDasharray={s.dashed ? '4 4' : undefined}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
