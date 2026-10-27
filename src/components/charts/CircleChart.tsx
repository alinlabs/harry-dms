import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface CircleChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface CircleChartProps {
  data: CircleChartDataPoint[];
  donut?: boolean;
  innerRadius?: number | string;
  outerRadius?: number | string;
  centerLabel?: string;
  centerValue?: string | number;
  height?: number | string;
  showLegend?: boolean;
  formatValue?: (value: number) => string;
  colors?: string[];
  className?: string;
}

const DEFAULT_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#64748b'];

export const CircleChart: React.FC<CircleChartProps> = ({
  data,
  donut = true,
  innerRadius = 60,
  outerRadius = 95,
  centerLabel,
  centerValue,
  height = 300,
  showLegend = true,
  formatValue,
  colors = DEFAULT_COLORS,
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipText = isDark ? '#f1f5f9' : '#0f172a';
  const strokeColor = isDark ? '#0f172a' : '#ffffff';

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const displayVal = formatValue ? formatValue(item.value) : item.value;
      return (
        <div style={{
          backgroundColor: tooltipBg,
          borderColor: tooltipBorder,
          borderWidth: 1,
          borderRadius: '10px',
          padding: '8px 12px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.15)',
          color: tooltipText,
          fontSize: '12px',
          fontFamily: "'Inter', sans-serif",
        }}>
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: item.payload?.color || colors[item.payload?.index % colors.length] }}
            />
            <span className="font-semibold">{item.name}:</span>
            <span className="font-bold">{displayVal}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          {showLegend && (
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }}
            />
          )}
          <Pie
            data={data}
            cx="50%"
            cy={donut && (centerLabel || centerValue) ? '46%' : '50%'}
            innerRadius={donut ? innerRadius : 0}
            outerRadius={outerRadius}
            paddingAngle={donut ? 3 : 0}
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={`slice-${index}`}
                fill={entry.color || colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Label for Donut Mode */}
      {donut && (centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
          {centerValue !== undefined && (
            <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              {centerValue}
            </span>
          )}
          {centerLabel && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {centerLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CircleChart;
