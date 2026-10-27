import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface GrowthDataPoint {
  name: string;
  revenue: number;
  profit: number;
}

const defaultData: GrowthDataPoint[] = [
  { name: '2023', revenue: 4000, profit: 240 },
  { name: '2024', revenue: 3000, profit: 139 },
  { name: '2025 (Est)', revenue: 4500, profit: 300 },
  { name: '2026 (Target)', revenue: 7800, profit: 900 },
];

export const GrowthChart: React.FC<{ data?: GrowthDataPoint[] }> = ({ data = defaultData }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#94a3b8" : "#64748b";
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipText = isDark ? '#f1f5f9' : '#0f172a';

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis dataKey="name" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip 
            contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, color: tooltipText, borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: tooltipText }}
          />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Revenue" />
          <Area type="monotone" dataKey="profit" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Profit" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex gap-6 justify-center mt-4 text-sm text-slate-500 dark:text-slate-300">
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-500 rounded-full"></div> Revenue</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded-full"></div> Profit</div>
      </div>
    </div>
  );
};

export default GrowthChart;
