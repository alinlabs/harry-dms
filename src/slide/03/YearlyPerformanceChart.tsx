import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface YearlyPerformanceChartProps {
  data: Array<{
    year: string;
    revenue: number;
    change: string;
  }>;
  animationDuration?: number;
  play?: boolean;
}

export const YearlyPerformanceChart: React.FC<YearlyPerformanceChartProps> = ({ 
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

  const colors = ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa']; 

  const shouldAnimate = play && animationDuration > 0;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataItem = payload[0].payload;
      const isPositive = dataItem.change && dataItem.change.startsWith('+');
      return (
        <div style={{ 
          backgroundColor: tooltipBg, 
          borderColor: tooltipBorder, 
          borderWidth: 1,
          borderRadius: '12px', 
          padding: '12px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          color: tooltipText,
          fontFamily: "'Inter', sans-serif",
        }}>
          <p className="font-bold text-sm mb-1">{label}</p>
          <p className="font-bold text-blue-600 dark:text-blue-400 mb-1">
            Rp {(dataItem.revenue / 1000000000000).toFixed(2)} Triliun ({(dataItem.revenue / 1000000000000).toFixed(2)} T)
          </p>
          {dataItem.change && dataItem.change !== '–' && (
            <p className={`text-xs font-bold px-2 py-0.5 rounded inline-block ${
              isPositive 
                ? 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                : 'text-slate-700 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}>
               {dataItem.change}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const renderTrendLabel = (props: any) => {
    const { x, y, index } = props;
    const changeText = data[index]?.change;
    
    if (!changeText || changeText === '–') return null;

    const isPositive = changeText.startsWith('+');
    const boxWidth = changeText.length > 10 ? 84 : 74;
    const boxHeight = 24;
    const fillColor = isPositive 
      ? (isDark ? "#064e3b" : "#ecfdf5") 
      : (isDark ? "#1e293b" : "#f1f5f9");
    const strokeColor = isPositive 
      ? (isDark ? "#059669" : "#10b981") 
      : (isDark ? "#475569" : "#94a3b8");
    const textColor = isPositive 
      ? (isDark ? "#6ee7b7" : "#047857") 
      : (isDark ? "#cbd5e1" : "#475569");

    return (
      <g>
        <line x1={x} y1={y} x2={x} y2={y - 12} stroke={strokeColor} strokeWidth={1} strokeDasharray="2 2" />
        <rect 
          x={x - (boxWidth / 2)} 
          y={y - 12 - boxHeight} 
          width={boxWidth} 
          height={boxHeight} 
          rx="6" 
          fill={fillColor} 
          stroke={strokeColor} 
          strokeWidth="1"
          opacity={0.95}
        />
        <text 
          x={x} 
          y={y - 12 - (boxHeight / 2)} 
          fill={textColor} 
          textAnchor="middle" 
          dominantBaseline="middle"
          fontSize={10.5} 
          fontWeight="bold"
        >
          {changeText}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        key={play ? 'playing' : 'idle'}
        data={data}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 10,
        }}
        barSize={60}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
        
        <XAxis 
          dataKey="year" 
          stroke={textColor} 
          tick={{ fontSize: 13, fontWeight: 600 }}
          axisLine={false}
          tickLine={false}
        />
        
        <YAxis 
          stroke={textColor} 
          tickFormatter={(value) => `${(value / 1000000000000).toFixed(0)} T`}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          domain={[0, (dataMax: number) => Math.ceil(dataMax * 1.2)]}
        />
        
        <Tooltip content={<CustomTooltip />} cursor={{ fill: isDark ? '#334155' : '#f1f5f9', opacity: 0.4 }} />
        
        <Bar 
          dataKey="revenue" 
          radius={[8, 8, 0, 0]} 
          animationDuration={animationDuration}
          isAnimationActive={shouldAnimate}
          activeBar={false} 
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} strokeWidth={0} />
          ))}
          <LabelList 
            dataKey="revenue" 
            position="insideTop" 
            offset={10}
            formatter={(value: number) => `Rp ${(value / 1000000000000).toFixed(2)} T`}
            style={{ fill: '#ffffff', fontSize: 12, fontWeight: 700, textShadow: '0px 1px 2px rgba(0,0,0,0.4)' }}
          />
        </Bar>

        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#3b82f6" 
          strokeWidth={2.5}
          strokeDasharray="4 4"
          dot={{ r: 5, fill: "#3b82f6", stroke: isDark ? "#1e293b" : "#fff", strokeWidth: 2 }}
          activeDot={{ r: 7, strokeWidth: 0, stroke: 'none' }}
          animationDuration={animationDuration}
          isAnimationActive={shouldAnimate}
        >
          <LabelList content={renderTrendLabel} />
        </Line>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default React.memo(YearlyPerformanceChart);
