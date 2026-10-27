import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  badge: "Bagian 1 • Ringkasan Eksekutif",
  title: "Ringkasan Eksekutif & 5 Prioritas Strategis",
  subtitle: "Rencana Strategis Sales Manager IT & FTTH PT. Digital Multi Sinergy 2026–2027 Berbasis 3 Pilar Produk",
  vision: "Membangun mesin penjualan B2B disiplin tinggi melalui sinergi 3 Pilar Produk: amankan likuiditas via 8 Existing Product, eskalasi skala via 3 lini Pengembangan, dan lipatgandakan pertumbuhan marginal lewat Ekspansi Produk Baru bebas perang harga.",
  priorities: [
    {
      id: 1,
      title: "Sistem Sales Management & Proteksi Margin",
      desc: "Membangun tata kelola penjualan berdisiplin tinggi: KPI berbasis Gross Profit, validasi forecast 10 kriteria bukti objektif, dan proteksi margin dari perang harga komoditas.",
      metric: "100% Disiplin KPI & Validasi Pipeline 10 Kriteria",
      tag: "Tim & Sales",
      iconType: "target"
    },
    {
      id: 2,
      title: "Pengembangan Tim & Formasi Spesialis",
      desc: "Meningkatkan kapabilitas konsultatif 2 sales existing, merekrut 2 B2B Hunter untuk new logo enterprise, dan 1 Marketing spesialis lead generation (Formasi 6 Personel).",
      metric: "Formasi Lengkap 6 Personel Berdaya Saing",
      tag: "Tim & Sales",
      iconType: "users"
    },
    {
      id: 3,
      title: "Penetrasi 6 Vertikal & Eskalasi Produk Pengembangan",
      desc: "Penetrasi 6 vertikal sasaran dengan memadukan 8 Existing Product bersama 3 lini Pengembangan: ICT Solution, Media Signage Oxygen, dan Data Center.",
      metric: "Penetrasi 6 Vertikal B2B & Sinergi Signage Oxygen",
      tag: "Penetrasi Pasar",
      iconType: "layers"
    },
    {
      id: 4,
      title: "Prioritas Ekspansi Produk Baru",
      desc: "Memaksimalkan penetrasi IT White Label (IFP/AIO/Videotron), Software & Cybersecurity, AI/Robotics, dan IoT SaaS untuk lonjakan margin +62%.",
      metric: "Akselerasi Pertumbuhan Marginal +62% & SaaS MRR",
      tag: "Ekspansi Produk",
      iconType: "shield"
    },
    {
      id: 5,
      title: "Akselerasi Go to Growth & Eksekusi Roadmap",
      desc: "Transisi terukur dari proyek jual-putus menuju recurring revenue (SaaS & Managed Services) lewat Roadmap 60 Hari (2026) dan Roadmap 1 Tahun (2027).",
      metric: "Transformasi Menuju Recurring Revenue & Margin Tinggi",
      tag: "Target & Roadmap",
      iconType: "zap"
    }
  ]
};

export const slideDataEn = {
  "badge": "Part 1 • Executive Summary",
  "title": "Executive Summary & 5 Strategic Priorities",
  "subtitle": "Strategic Business Plan for Sales Manager IT & FTTH PT. Digital Multi Sinergy 2026–2027 Grounded in the 3 Product Pillars",
  "vision": "Building a disciplined B2B commercial engine across 3 Product Pillars: secure cashflow via 8 Existing Products, scale contract value via 3 Development lines, and accelerate marginal growth through price-war-immune New Product Expansion.",
  "priorities": [
    {
      "id": 1,
      "title": "Measurable Sales Governance & Margin Protection",
      "desc": "High-discipline commercial governance: Gross Profit-weighted KPIs, 10-criteria evidence-based forecasting, and strict defense against commodity price wars.",
      "metric": "100% KPI Discipline & 10-Criteria Forecast Validation",
      "tag": "Team & Sales",
      "iconType": "target"
    },
    {
      "id": 2,
      "title": "Team Upskilling & Tactical Formation",
      "desc": "Upskilling 2 existing reps into consultative sellers, recruiting 2 dedicated B2B Hunters for new enterprise logos, and 1 B2B Marketing Specialist (6-person formation).",
      "metric": "Full Formation of 6 High-Caliber Personnel",
      "tag": "Team & Sales",
      "iconType": "users"
    },
    {
      "id": 3,
      "title": "6-Vertical Penetration & Development Escalation",
      "desc": "Penetrating 6 target verticals by bundling 8 Existing Products with 3 Development lines: ICT Solutions, Oxygen Digital Signage, and Data Center.",
      "metric": "6 B2B Verticals & Oxygen Digital Signage Synergy",
      "tag": "Market Penetration",
      "iconType": "layers"
    },
    {
      "id": 4,
      "title": "Prioritizing New Product Expansion",
      "desc": "Prioritizing New Product Expansion (White Label IFP/AIO/Videotron, Software, Cybersecurity, AI, and IoT SaaS) to drive +62% marginal growth.",
      "metric": "+62% Marginal Growth Acceleration & SaaS MRR",
      "tag": "Product Expansion",
      "iconType": "shield"
    },
    {
      "id": 5,
      "title": "Accelerating Go to Growth & Roadmap Execution",
      "desc": "Executing a structured shift from one-time projects to recurring revenue (SaaS & Managed Services) via 60-Day (2026) and 1-Year (2027) Roadmaps.",
      "metric": "Transition to High-Margin Recurring Revenue",
      "tag": "Targets & Roadmap",
      "iconType": "zap"
    }
  ]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 2,
  "folder": "02",
  "sectionId": 1,
  "navTitle": {
    "in": "Ringkasan Eksekutif",
    "en": "Executive Summary"
  },
  "headerTitle": {
    "in": "Ringkasan Eksekutif",
    "en": "Executive Summary"
  },
  "category": {
    in: "Strategi",
    en: "Strategy"
  },
  "section": {
    in: "Strategi",
    en: "Strategy"
  }
};
