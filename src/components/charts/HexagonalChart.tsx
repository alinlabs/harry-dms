import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface HexagonalDataPoint {
  subject: string;
  value: number;
  fullMark?: number;
}

export interface HexagonalChartProps {
  data: HexagonalDataPoint[];
  seriesName?: string;
  color?: string;
  strokeColor?: string;
  fillOpacity?: number;
  height?: number | string;
  formatTooltip?: (val: number, subject: string) => string;
  className?: string;
}

export const HexagonalChart: React.FC<HexagonalChartProps> = ({
  data,
  seriesName = 'Skor',
  color = '#3b82f6',
  strokeColor,
  fillOpacity = 0.5,
  height = 320,
  formatTooltip,
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const gridColor = isDark ? '#334155' : '#cbd5e1';
  const textColor = isDark ? '#94a3b8' : '#475569';
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipText = isDark ? '#f1f5f9' : '#0f172a';

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const val = item.value;
      const displayVal = formatTooltip ? formatTooltip(val, item.payload?.subject) : val;
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
          <p className="font-bold text-xs mb-1">{item.payload?.subject}</p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: color }} />
            <span style={{ color: textColor }}>{seriesName}:</span>
            <span className="font-bold">{displayVal}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke={gridColor} strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="subject"
            stroke={textColor}
            tick={{ fontSize: 11, fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 'auto']}
            stroke={gridColor}
            tick={{ fontSize: 10, fill: textColor }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name={seriesName}
            dataKey="value"
            stroke={strokeColor || color}
            fill={color}
            fillOpacity={fillOpacity}
            dot={{ r: 3, fill: color }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HexagonalChart;
