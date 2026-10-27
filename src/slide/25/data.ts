import { useLanguage } from '@/contexts/LanguageContext';

export interface KPIItem {
  id: string;
  category: string;
  title: string;
  weight: string;
  desc: string;
  metricCriteria: string;
}

export interface ReviewCadence {
  period: string;
  focus: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Sales Management & KPI: Disiplin Kinerja Berbasis Bukti",
  subtitle: "Sistem Tata Kelola Penjualan Terstruktur: Bobot KPI 100% Berorientasi Gross Profit, Akurasi Forecast & Disiplin CRM",
  summaryMetrics: [
    { label: "Total Bobot KPI", value: "100%", desc: "6 Pilar Penilaian Kinerja" },
    { label: "Batas Minimum GP", value: "≥ 35%", desc: "Gross Margin per Kontrak" },
    { label: "Kecukupan Funnel", value: "Min. 3x", desc: "Coverage Kuota Pipeline" },
    { label: "Forecasting", value: "10 Kriteria", desc: "Validasi Bukti Objektif" }
  ],
  kpiItems: [
    {
      id: "revenue",
      category: "Kinerja Finansial (35%)",
      title: "Revenue Achievement",
      weight: "35%",
      desc: "Pencapaian target omzet bulanan dan kuartalan lintas 3 Pilar Produk.",
      metricCriteria: "Realisasi Omzet terhadap Kuota Target Bulanan / Kuartalan"
    },
    {
      id: "margin",
      category: "Profitabilitas (25%)",
      title: "Gross Profit & Margin",
      weight: "25%",
      desc: "Menjaga batas profitabilitas kotor transaksi untuk cegah erosi harga komoditas.",
      metricCriteria: "Rasio Margin Kotor Riil (Gross Profit Margin) ≥ 35%"
    },
    {
      id: "pipeline",
      category: "Akurasi Prediksi (15%)",
      title: "Pipeline & Forecasting",
      weight: "15%",
      desc: "Validasi funnel dengan 10 kriteria bukti objektif dan kecukupan kuota min. 3x.",
      metricCriteria: "Akurasi Prediksi Closing & Coverage Pipeline ≥ 3x Kuota"
    },
    {
      id: "new-logo",
      category: "Ekspansi Pasar (10%)",
      title: "New Customer Acquisition",
      weight: "10%",
      desc: "Akuisisi klien baru (New Logo) di 6 vertikal via kolaborasi Hunter dan Marketing.",
      metricCriteria: "Penambahan Akun Baru B2B Terverifikasi per Bulan"
    },
    {
      id: "retention",
      category: "Retensi & Upselling (10%)",
      title: "Existing Account Growth",
      weight: "10%",
      desc: "Retensi akun aktif FTTH/ICT serta eskalasi cross-selling produk baru.",
      metricCriteria: "Tingkat Retensi Akun ≥ 95% & Peningkatan ARPA / Cross-Sell"
    },
    {
      id: "crm",
      category: "Kedisiplinan Operasional (5%)",
      title: "CRM & Reporting Discipline",
      weight: "5%",
      desc: "Pencatatan harian CRM, pembuatan dokumen APN, dan pelaporan Bank Case H+3.",
      metricCriteria: "Pembaruan CRM Harian, APN Lengkap & Bank Case Tepat Waktu"
    }
  ] as KPIItem[],
  managerKPIs: [
    "Pencapaian omzet & batas profitabilitas margin kotor seluruh tim sales",
    "Kecukupan coverage pipeline minimal 3x target kuota berjalan",
    "Akurasi sales forecast berbasis 10 kriteria bukti objektif",
    "Supervisi negosiasi C-Level dan penutupan kontrak multi-pilar"
  ],
  cadence: [
    { period: "Harian (Daily)", focus: "Aktivitas prospek, follow-up klien, meeting, & update CRM" },
    { period: "Mingguan (Weekly)", focus: "Review pipeline, validasi forecast 10 kriteria & deal berisiko" },
    { period: "Bulanan (Monthly)", focus: "Audit performa KPI, laba kotor, retensi akun & komisi sales" }
  ] as ReviewCadence[]
};

export const slideDataEn = {
  sectionBadge: "Part 4 • Team & Sales Management",
  title: "Sales Management & KPI: Evidence-Based Governance",
  subtitle: "Structured Sales Performance System: 100% KPI Balanced Across Gross Margin, Forecast Rigor & CRM Discipline",
  summaryMetrics: [
    { label: "Total KPI Weight", value: "100%", desc: "6 Performance Evaluation Pillars" },
    { label: "Gross Margin Floor", value: "≥ 35%", desc: "Gross Profit per Contract" },
    { label: "Funnel Coverage", value: "Min. 3x", desc: "Quota Coverage Multiplier" },
    { label: "Forecasting", value: "10 Criteria", desc: "Objective Evidence Validation" }
  ],
  kpiItems: [
    {
      id: "revenue",
      category: "Financial Performance (35%)",
      title: "Revenue Achievement",
      weight: "35%",
      desc: "Attainment of monthly and quarterly quota milestones across the 3 Product Pillars.",
      metricCriteria: "Contract Revenue Realization vs Quota Targets"
    },
    {
      id: "margin",
      category: "Profitability (25%)",
      title: "Gross Profit & Margin",
      weight: "25%",
      desc: "Enforcing minimum gross profit margins to prevent commodity price wars.",
      metricCriteria: "Realized Blended Gross Profit Margin ≥ 35%"
    },
    {
      id: "pipeline",
      category: "Predictive Rigor (15%)",
      title: "Pipeline & Forecasting",
      weight: "15%",
      desc: "Funnel qualification using 10 objective criteria and maintaining min. 3x quota coverage.",
      metricCriteria: "Forecast Closing Accuracy & ≥ 3x Pipeline Quota Coverage"
    },
    {
      id: "new-logo",
      category: "Market Expansion (10%)",
      title: "New Customer Acquisition",
      weight: "10%",
      desc: "Winning new enterprise logos across 6 priority verticals via Hunter-Marketing synergy.",
      metricCriteria: "Net New Verified B2B Enterprise Logos per Month"
    },
    {
      id: "retention",
      category: "Retention & Expansion (10%)",
      title: "Existing Account Growth",
      weight: "10%",
      desc: "Active account retention and expanding client ARPA via cross-selling.",
      metricCriteria: "Active Account Retention ≥ 95% & ARPA Expansion"
    },
    {
      id: "crm",
      category: "Operational Rigor (5%)",
      title: "CRM & Reporting Discipline",
      weight: "5%",
      desc: "Daily CRM logging, pre-pitch APN preparation, and D+3 Bank Case completion.",
      metricCriteria: "Daily CRM Updates, APN Completion & Timely Bank Cases"
    }
  ] as KPIItem[],
  managerKPIs: [
    "Team-wide quota revenue and gross profit margin attainment",
    "Overall pipeline health and maintaining ≥ 3x qualified quota coverage",
    "Forecast accuracy verified by 10 objective evidence checkpoints",
    "C-Level deal accompaniment, high-stakes negotiation, and closing"
  ],
  cadence: [
    { period: "Daily Standup", focus: "Prospecting velocity, client meetings, & CRM updates" },
    { period: "Weekly Calibration", focus: "Pipeline health, 10-criteria forecast check, & at-risk deals" },
    { period: "Monthly Audit", focus: "KPI audit, gross margins, new logo conversion, & commissions" }
  ] as ReviewCadence[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 25,
  folder: "25",
  sectionId: 3,
  navTitle: {
    in: "Sales Management & KPI",
    en: "Sales Management & KPI"
  },
  headerTitle: {
    in: "Sales Management & KPI: Disiplin Kinerja Berbasis Bukti",
    en: "Sales Management & KPI: Evidence-Based Governance"
  },
  category: {
    in: "Team",
    en: "Team"
  },
  section: {
    in: "Team",
    en: "Team"
  }
};
