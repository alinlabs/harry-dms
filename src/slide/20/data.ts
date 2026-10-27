import { useLanguage } from '@/contexts/LanguageContext';

export interface OpportunityVsFocusStat {
  name: string;
  fokus: number;
  opportunity: number;
  margin: number;
}

export interface MarginalGrowthCurvePoint {
  period: string;
  withExpansion: number;
  withoutExpansion: number;
  expansionShare: number;
}

export interface ProductStatisticalRow {
  id: string;
  productLine: string;
  categoryType: 'Ekspansi (Prioritas Utama)' | 'Pengembangan' | 'Existing' | 'Expansion (Top Priority)' | 'Development';
  focusScore: number;
  opportunityScore: number;
  grossMarginPct: number;
  marginalMultiplier: string;
  roleNote: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Portofolio Produk (4/4)",
  title: "Statistik Fokus Produk vs Opportunity & Akselerasi Pertumbuhan Marginal",
  subtitle: "Mengutamakan Ekspansi Produk Baru untuk Menopang dan Mendorong Percepatan Pertumbuhan Marginal Perusahaan",
  strategicThesis: "Existing Product menjaga arus kas dasar namun terancam perang harga (margin 18%–25%). Prioritas pada Ekspansi (White Label, Software, AI, dan IoT SaaS) meningkatkan Gross Margin secara sehat hingga 40%–50% dan melipatgandakan laba marginal 2,0x.",
  headlineStats: [
    {
      label: "Pertumbuhan Marginal (Dengan Ekspansi)",
      value: "+45.0%",
      delta: "+22% vs Baseline",
      sub: "Didorong Software, AI, White Label & Solusi IoT"
    },
    {
      label: "Stagnasi Margin (Tanpa Ekspansi)",
      value: "18.5%",
      delta: "-5.5% Tergerus Price War",
      sub: "Jika hanya mengandalkan komoditas Existing"
    },
    {
      label: "Skor Opportunity Ekspansi Produk",
      value: "94 / 100",
      delta: "Tertinggi di Pasar B2B",
      sub: "Permintaan tinggi solusi ber-IP & Managed Service"
    },
    {
      label: "Multiplier Laba Kotor (GP Multiplier)",
      value: "2.0x Lipat",
      delta: "Akselerator Laba Bersih",
      sub: "Pertumbuhan realistis kontribusi laba per kontrak"
    }
  ],
  chartFocusTitle: "Perbandingan Fokus Strategis vs Market Opportunity & Gross Margin (%)",
  chartFocusSub: "Korelasi peningkatan porsi fokus pada Ekspansi Produk terhadap besarnya peluang pasar dan margin",
  focusVsOpportunityData: [
    {
      name: "Existing (FTTH/OLT/Kabel)",
      fokus: 55,
      opportunity: 62,
      margin: 22
    },
    {
      name: "Pengembangan (ICT/Oxygen/DC)",
      fokus: 78,
      opportunity: 82,
      margin: 38
    },
    {
      name: "Ekspansi: IT & White Label",
      fokus: 90,
      opportunity: 88,
      margin: 46
    },
    {
      name: "Ekspansi: SW, Cyber, AI & IP",
      fokus: 96,
      opportunity: 94,
      margin: 62
    }
  ] as OpportunityVsFocusStat[],
  chartGrowthTitle: "Proyeksi Percepatan Pertumbuhan Marginal Perusahaan (%)",
  chartGrowthSub: "Simulasi kurva Gross Margin Blended: Mengutamakan Ekspansi Produk vs Hanya Produk Existing",
  marginalGrowthTrend: [
    { period: "Q1 (Baseline)", withExpansion: 24, withoutExpansion: 24, expansionShare: 15 },
    { period: "Q2", withExpansion: 31, withoutExpansion: 23, expansionShare: 28 },
    { period: "Q3", withExpansion: 39, withoutExpansion: 21, expansionShare: 42 },
    { period: "Q4", withExpansion: 48, withoutExpansion: 20, expansionShare: 55 },
    { period: "Thn 2 (H1)", withExpansion: 55, withoutExpansion: 19, expansionShare: 65 },
    { period: "Thn 2 (H2)", withExpansion: 62, withoutExpansion: 18.5, expansionShare: 75 }
  ] as MarginalGrowthCurvePoint[],
  tableTitle: "Matriks Statistik Kuantitatif: Fokus Produk terhadap Opportunity & Kontribusi Marginal",
  statisticalRows: [
    {
      id: "stat-1",
      productLine: "Solusi IoT (Dashboard, Middleware, Automasi) & SaaS",
      categoryType: "Ekspansi (Prioritas Utama)",
      focusScore: 96,
      opportunityScore: 95,
      grossMarginPct: 55,
      marginalMultiplier: "2.2x",
      roleNote: "Pendorong utama percepatan margin & recurring revenue (MRR) bebas perang harga"
    },
    {
      id: "stat-2",
      productLine: "Software Principal, Custom Dev, Cybersecurity & AI/Robotics",
      categoryType: "Ekspansi (Prioritas Utama)",
      focusScore: 92,
      opportunityScore: 91,
      grossMarginPct: 48,
      marginalMultiplier: "2.0x",
      roleNote: "Solusi bernilai tambah tinggi dengan switching cost kuat di akun enterprise"
    },
    {
      id: "stat-3",
      productLine: "IT Product & White Label (IFP, PC AIO, Videotron, Server)",
      categoryType: "Ekspansi (Prioritas Utama)",
      focusScore: 88,
      opportunityScore: 87,
      grossMarginPct: 42,
      marginalMultiplier: "1.7x",
      roleNote: "Kendali penuh struktur harga & margin di atas rata-rata distribusi hardware biasa"
    },
    {
      id: "stat-4",
      productLine: "ICT Investment, Media Digital Signage (Oxygen) & Data Center",
      categoryType: "Pengembangan",
      focusScore: 78,
      opportunityScore: 82,
      grossMarginPct: 35,
      marginalMultiplier: "1.4x",
      roleNote: "Penopang kontrak korporasi multi-tahun & sinergi infrastruktur grup"
    },
    {
      id: "stat-5",
      productLine: "8 Produk Existing (OLT, ONT, ADSS, Dropwire, ACS, Smart Display, STB)",
      categoryType: "Existing",
      focusScore: 55,
      opportunityScore: 62,
      grossMarginPct: 22,
      marginalMultiplier: "1.0x",
      roleNote: "Penjaga arus kas harian (cashflow baseline) & pembuka pintu akun B2B"
    }
  ] as ProductStatisticalRow[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Product Portfolio (4/4)",
  title: "Product Focus vs. Opportunity Statistics & Marginal Growth Acceleration",
  subtitle: "Prioritizing New Product Expansion to Sustain and Accelerate Corporate Marginal Growth",
  strategicThesis: "Existing products secure baseline cashflow but face price wars (18%–25% margins). Prioritizing Expansion (White Label, Software, AI, and IoT SaaS) propels healthy Gross Margins up to 40%–50% and accelerates marginal profit efficiency by 2.0x.",
  headlineStats: [
    {
      label: "Marginal Growth (With Expansion)",
      value: "+45.0%",
      delta: "+22% vs Baseline",
      sub: "Driven by Software, AI, White Label & IoT Solutions"
    },
    {
      label: "Margin Stagnation (Without Expansion)",
      value: "18.5%",
      delta: "-5.5% Price War Erosion",
      sub: "If relying solely on commodity Existing lines"
    },
    {
      label: "Expansion Opportunity Index",
      value: "94 / 100",
      delta: "Highest in B2B Market",
      sub: "Surging enterprise demand for IP & Managed Services"
    },
    {
      label: "Gross Profit Multiplier",
      value: "2.0x Multiple",
      delta: "Net Margin Accelerator",
      sub: "Realistic profit contribution per corporate deal"
    }
  ],
  chartFocusTitle: "Strategic Focus vs. Market Opportunity & Gross Margin (%)",
  chartFocusSub: "Correlation between prioritizing Product Expansion and capturing higher market opportunity & margins",
  focusVsOpportunityData: [
    {
      name: "Existing (FTTH/OLT/Cable)",
      fokus: 55,
      opportunity: 62,
      margin: 22
    },
    {
      name: "Development (ICT/Oxygen/DC)",
      fokus: 78,
      opportunity: 82,
      margin: 38
    },
    {
      name: "Expansion: IT & White Label",
      fokus: 90,
      opportunity: 88,
      margin: 46
    },
    {
      name: "Expansion: SW, Cyber, AI & IP",
      fokus: 96,
      opportunity: 94,
      margin: 62
    }
  ] as OpportunityVsFocusStat[],
  chartGrowthTitle: "Corporate Marginal Growth Acceleration Trajectory (%)",
  chartGrowthSub: "Blended Gross Margin simulation: Prioritizing Product Expansion vs. Existing Products Only",
  marginalGrowthTrend: [
    { period: "Q1 (Base)", withExpansion: 24, withoutExpansion: 24, expansionShare: 15 },
    { period: "Q2", withExpansion: 31, withoutExpansion: 23, expansionShare: 28 },
    { period: "Q3", withExpansion: 39, withoutExpansion: 21, expansionShare: 42 },
    { period: "Q4", withExpansion: 48, withoutExpansion: 20, expansionShare: 55 },
    { period: "Yr 2 (H1)", withExpansion: 55, withoutExpansion: 19, expansionShare: 65 },
    { period: "Yr 2 (H2)", withExpansion: 62, withoutExpansion: 18.5, expansionShare: 75 }
  ] as MarginalGrowthCurvePoint[],
  tableTitle: "Quantitative Statistical Matrix: Product Focus vs. Opportunity & Marginal Impact",
  statisticalRows: [
    {
      id: "stat-1",
      productLine: "IoT Solutions (Dashboard, Middleware, Automation) & SaaS",
      categoryType: "Expansion (Top Priority)",
      focusScore: 96,
      opportunityScore: 95,
      grossMarginPct: 55,
      marginalMultiplier: "2.2x",
      roleNote: "Primary driver of marginal growth acceleration & price-war-immune MRR"
    },
    {
      id: "stat-2",
      productLine: "Principal Software, Custom Dev, Cybersecurity & AI/Robotics",
      categoryType: "Expansion (Top Priority)",
      focusScore: 92,
      opportunityScore: 91,
      grossMarginPct: 48,
      marginalMultiplier: "2.0x",
      roleNote: "High value-add digital solutions with strong enterprise switching costs"
    },
    {
      id: "stat-3",
      productLine: "IT Products & White Label (IFP, AIO PC, Videotron, Server)",
      categoryType: "Expansion (Top Priority)",
      focusScore: 88,
      opportunityScore: 87,
      grossMarginPct: 42,
      marginalMultiplier: "1.7x",
      roleNote: "Full pricing & margin control outperforming standard hardware reselling"
    },
    {
      id: "stat-4",
      productLine: "ICT Investment, Digital Signage (Oxygen) & Data Center",
      categoryType: "Development",
      focusScore: 78,
      opportunityScore: 82,
      grossMarginPct: 35,
      marginalMultiplier: "1.4x",
      roleNote: "Sustains multi-year corporate contracts & group infrastructure synergy"
    },
    {
      id: "stat-5",
      productLine: "8 Existing Products (OLT, ONT, ADSS, Dropwire, ACS, Smart Display, STB)",
      categoryType: "Existing",
      focusScore: 55,
      opportunityScore: 62,
      grossMarginPct: 22,
      marginalMultiplier: "1.0x",
      roleNote: "Maintains daily baseline cashflow & initial B2B account entry"
    }
  ] as ProductStatisticalRow[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 20,
  "folder": "20",
  "sectionId": 2,
  "navTitle": {
    "in": "Produk Target",
    "en": "Product Targets"
  },
  "headerTitle": {
    "in": "Produk Target",
    "en": "Product Targets"
  },
  "category": {
    in: "Product",
    en: "Product"
  },
  "section": {
    in: "Product",
    en: "Product"
  }
};
