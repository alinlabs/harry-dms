import { useLanguage } from '../../contexts/LanguageContext';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export interface BudgetItem {
  name: string;
  amount: number;
}

const defaultData: BudgetItem[] = [
  { name: 'HR & Talent', amount: 45 },
  { name: 'Marketing', amount: 30 },
  { name: 'Ops Tech', amount: 25 },
  { name: 'Sales Tools', amount: 20 },
];

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export const BudgetChart: React.FC<{ data?: BudgetItem[] }> = ({ data = defaultData }) => {
  const { language } = useLanguage();
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
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={true} vertical={false} />
          <XAxis type="number" stroke={textColor} />
          <YAxis dataKey="name" type="category" stroke={textColor} width={100} />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, color: tooltipText, borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: tooltipText }}
            formatter={(val: any) => [`${val}%`, language === 'en' ? 'Allocation' : 'Alokasi']}
          />
          <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-2">{language === "en" ? "Estimated Budget Allocation Breakdown" : "Estimasi Pembagian Alokasi Anggaran"}</p>
    </div>
  );
};

export default BudgetChart;
