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

export interface MonthlyRevenueChartProps {
  data: Array<{
    name: string;
    '2023': number;
    '2024': number;
    '2025': number;
  }>;
  animationDuration?: number;
  play?: boolean;
}

export const MonthlyRevenueChart: React.FC<MonthlyRevenueChartProps> = ({ 
  data, 
  animationDuration = 2500, 
  play = true 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipText = isDark ? '#f1f5f9' : '#0f172a';

  const shouldAnimate = play && animationDuration > 0;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ 
          backgroundColor: tooltipBg, 
          borderColor: tooltipBorder, 
          borderWidth: 1,
          borderRadius: '12px', 
          padding: '12px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          color: tooltipText,
          minWidth: '160px',
          fontFamily: "'Inter', sans-serif",
        }}>
          <p className="font-bold text-sm mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4 text-xs mb-2 last:mb-0">
              <div className="flex items-center gap-2">
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: entry.color }} />
                <span className="font-medium" style={{ color: textColor }}>{entry.name}</span>
              </div>
              <span className="font-bold">
                Rp {(entry.value / 1000000000).toFixed(2)} M
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        key={play ? 'playing' : 'idle'}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="color2025" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
        
        <XAxis 
          dataKey="name" 
          stroke={textColor} 
          tick={{ fontSize: 12, fontWeight: 500 }}
          tickMargin={10}
          axisLine={false}
          tickLine={false}
        />
        
        <YAxis 
          stroke={textColor} 
          tickFormatter={(value) => `${(value / 1000000000).toFixed(0)} M`}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: textColor, strokeWidth: 1, strokeDasharray: '4 4' }} />
        
        <Legend 
            verticalAlign="top" 
            height={36} 
            iconType="circle"
            wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingBottom: '10px' }}
        />
        
        {/* 2023 - Historical Context (Gray, Dashed Line) */}
        <Line 
          type="monotone" 
          dataKey="2023" 
          stroke="#94a3b8" 
          name="2023"
          strokeWidth={2} 
          strokeDasharray="4 4"
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0, stroke: 'none' }} 
          animationDuration={animationDuration}
          isAnimationActive={shouldAnimate}
        />

        {/* 2024 - Recent Past (Light Blue, Solid Line) */}
        <Line 
          type="monotone" 
          dataKey="2024" 
          stroke="#60a5fa" 
          name="2024"
          strokeWidth={2} 
          dot={{ r: 3 }} 
          activeDot={{ r: 6, strokeWidth: 0, stroke: 'none' }} 
          animationDuration={animationDuration}
          isAnimationActive={shouldAnimate}
        />

        {/* 2025 - Current Performance (Primary Blue, Thick Line + Gradient Area) */}
        <Area 
            type="monotone" 
            dataKey="2025" 
            stroke="none" 
            fillOpacity={1} 
            fill="url(#color2025)" 
            animationDuration={animationDuration}
            isAnimationActive={shouldAnimate}
        />
        <Line 
          type="monotone" 
          dataKey="2025" 
          stroke="#3b82f6" 
          name="2025"
          strokeWidth={4} 
          dot={{ r: 4, strokeWidth: 2, stroke: isDark ? '#1e293b' : '#fff' }} 
          activeDot={{ r: 7, strokeWidth: 0, stroke: 'none' }} 
          filter="drop-shadow(0px 2px 4px rgba(59, 130, 246, 0.3))"
          animationDuration={animationDuration}
          isAnimationActive={shouldAnimate}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default React.memo(MonthlyRevenueChart);
