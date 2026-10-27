import { useLanguage } from '@/contexts/LanguageContext';

export interface GapItemSummary {
  id: string;
  number: number;
  category: string;
  source: string;
  severity: number;
  title: string;
  problem: string;
  affectedClients: string;
}

export interface SolutionItemSummary {
  id: number;
  number: number;
  metric: string;
  gapReference: string;
  category: string;
  title: string;
  solution: string;
  impact: string;
}

export interface GapSolutionPair {
  id: number;
  gap: GapItemSummary;
  solution: SolutionItemSummary;
}

export const slide08DataId = {
  badge: "Bagian 2 • Posisi & Keunggulan",
  title: "Temuan Gap Pasar & 5 Pilar Solusi DMS",
  subtitle: "Pemetaan Langsung 5 Celah Kritis Kompetitor Konvensional (Kiri) dan Solusi 3 Pilar Portofolio PT Digital Multi Sinergy (Kanan)",
  leftColumnTitle: "5 TEMUAN GAP PASAR",
  rightColumnTitle: "5 PILAR SOLUSI DMS",
  summarizedGaps: [
    {
      id: "gap-1",
      number: 1,
      category: "Operasional & SLA",
      source: "Tier 1 Telco",
      severity: 94,
      title: "Birokrasi & Respon Lambat",
      problem: "MTTR 8–48 jam akibat antrean terpusat dan manajemen CPE manual.",
      affectedClients: "Tenant Gedung, ISP & Korporasi"
    },
    {
      id: "gap-2",
      number: 2,
      category: "Portofolio Produk",
      source: "Distributor & ISP",
      severity: 89,
      title: "Portofolio Terpisah & Price War",
      problem: "Jual komoditas lepas tanpa integrasi ICT, Signage, DC, Software & AI.",
      affectedClients: "Properti, RS & Kawasan Industri"
    },
    {
      id: "gap-3",
      number: 3,
      category: "Tata Kelola Layanan",
      source: "Multi-Vendor",
      severity: 92,
      title: "Saling Lempar Tanggung Jawab",
      problem: "Konflik koordinasi antar vendor hardware, jaringan, dan software.",
      affectedClients: "Building Management & IT Enterprise"
    },
    {
      id: "gap-4",
      number: 4,
      category: "Diferensiasi Teknis",
      source: "Subkon & Reseller",
      severity: 85,
      title: "Tanpa White Label & Ekspansi Produk",
      problem: "Bergantung pada perang harga komoditas tanpa software mandiri.",
      affectedClients: "Industri, Edukasi & Enterprise"
    },
    {
      id: "gap-5",
      number: 5,
      category: "Model Komersial",
      source: "Vendor Konvensional",
      severity: 88,
      title: "Jual-Putus & Beban CAPEX",
      problem: "Transaksi proyek kaku tanpa opsi SaaS atau Managed Services.",
      affectedClients: "Korporasi Fokus OPEX & Multi-Cabang"
    }
  ] as GapItemSummary[],
  summarizedPillars: [
    {
      id: 1,
      number: 1,
      metric: "< 2 Jam + ACS",
      gapReference: "Solusi Gap 1",
      category: "SLA & Otomasi",
      title: "Respon <2 Jam & Otomasi ACS",
      solution: "Tim teknis dedikasi & ACS untuk konfigurasi ribuan ONT/STB instan.",
      impact: "Downtime turun 75% & NOC efisien."
    },
    {
      id: 2,
      number: 2,
      metric: "3 Pilar Produk",
      gapReference: "Solusi Gap 2",
      category: "Ekosistem Lengkap",
      title: "Sinergi 3 Pilar Portofolio",
      solution: "Integrasi Existing (FTTH/OLT/ONT), Pengembangan (ICT/Signage/DC) & Ekspansi.",
      impact: "Satu mitra terpadu infrastruktur & digital."
    },
    {
      id: 3,
      number: 3,
      metric: "1 Pintu Kontak",
      gapReference: "Solusi Gap 3",
      category: "Akuntabilitas 360°",
      title: "Single Point of Contact",
      solution: "Kendali penuh End-to-End dari fiber optik, IT hardware, hingga software.",
      impact: "MTTR 90 menit tanpa lempar tanggung jawab."
    },
    {
      id: 4,
      number: 4,
      metric: "White Label & IP",
      gapReference: "Solusi Gap 4",
      category: "Margin & Inovasi",
      title: "White Label & Ekspansi Solusi",
      solution: "Produk White Label (IFP, AIO, Videotron) & IP mandiri (IoT, Middleware).",
      impact: "Bebas price war & margin perusahaan naik."
    },
    {
      id: 5,
      number: 5,
      metric: "SaaS & Managed",
      gapReference: "Solusi Gap 5",
      category: "Model Pendapatan",
      title: "Transisi ke Recurring Revenue",
      solution: "Kombinasi pengadaan fleksibel dengan langganan SaaS & Managed Services.",
      impact: "Pendapatan berulang (MRR/ARR) stabil."
    }
  ] as SolutionItemSummary[],
  pairs: [] as GapSolutionPair[]
};

slide08DataId.pairs = slide08DataId.summarizedGaps.map((gap, index) => ({
  id: index + 1,
  gap,
  solution: slide08DataId.summarizedPillars[index]
}));

export const slide08DataEn = {
  badge: "Part 2 • Positioning & Advantage",
  title: "Market Gap Findings & DMS 5 Solution Pillars",
  subtitle: "Direct Mapping of 5 Critical Competitor Gaps (Left) and PT Digital Multi Sinergy's 3-Pillar Portfolio Solutions (Right)",
  leftColumnTitle: "5 MARKET GAP FINDINGS",
  rightColumnTitle: "5 DMS SOLUTION PILLARS",
  summarizedGaps: [
    {
      id: "gap-1",
      number: 1,
      category: "Operations & SLA",
      source: "Tier 1 Telcos",
      severity: 94,
      title: "Bureaucracy & Slow Response",
      problem: "8–48h MTTR from central queues and manual CPE management.",
      affectedClients: "Building Tenants, ISPs & Enterprises"
    },
    {
      id: "gap-2",
      number: 2,
      category: "Product Portfolio",
      source: "Distributors & ISPs",
      severity: 89,
      title: "Fragmented Portfolio & Price War",
      problem: "Isolated hardware sales without ICT, Signage, DC, Software & AI.",
      affectedClients: "Real Estate, Hospitals & Industrial"
    },
    {
      id: "gap-3",
      number: 3,
      category: "Service Governance",
      source: "Multi-Vendor",
      severity: 92,
      title: "Multi-Vendor Blame-Shifting",
      problem: "Coordination conflicts across hardware, network, and software vendors.",
      affectedClients: "Building Mgmt & Enterprise IT"
    },
    {
      id: "gap-4",
      number: 4,
      category: "Tech Differentiation",
      source: "Subcons & Resellers",
      severity: 85,
      title: "No White Label & No Expansion",
      problem: "Trapped in commodity price wars without proprietary software.",
      affectedClients: "Industrial, Education & Enterprises"
    },
    {
      id: "gap-5",
      number: 5,
      category: "Commercial Model",
      source: "Project Vendors",
      severity: 88,
      title: "One-Off Sales & Heavy CAPEX",
      problem: "Rigid project transactions without SaaS or Managed Services.",
      affectedClients: "OPEX-Focused & Multi-Branch Firms"
    }
  ] as GapItemSummary[],
  summarizedPillars: [
    {
      id: 1,
      number: 1,
      metric: "< 2h + ACS",
      gapReference: "Solves Gap 1",
      category: "SLA & Automation",
      title: "<2h Response & ACS Automation",
      solution: "Dedicated engineers & ACS for instant remote ONT/STB provisioning.",
      impact: "75% less downtime & efficient NOC."
    },
    {
      id: 2,
      number: 2,
      metric: "3 Product Pillars",
      gapReference: "Solves Gap 2",
      category: "Full Ecosystem",
      title: "3-Pillar Portfolio Synergy",
      solution: "Integrates Existing (FTTH/OLT), Dev (ICT/Signage/DC) & Expansion lines.",
      impact: "One unified infrastructure & digital partner."
    },
    {
      id: 3,
      number: 3,
      metric: "1 Contact Window",
      gapReference: "Solves Gap 3",
      category: "360° Accountability",
      title: "Single Point of Contact",
      solution: "Full end-to-end control from optical fiber and hardware to software.",
      impact: "90-min MTTR with zero blame-shifting."
    },
    {
      id: 4,
      number: 4,
      metric: "White Label & IP",
      gapReference: "Solves Gap 4",
      category: "Margin & Innovation",
      title: "White Label & Ekspansi Solusi",
      solution: "White Label hardware (IFP, AIO, Videotron) & proprietary IoT/Middleware.",
      impact: "Escapes price wars & boosts margins."
    },
    {
      id: 5,
      number: 5,
      metric: "SaaS & Managed",
      gapReference: "Solves Gap 5",
      category: "Revenue Model",
      title: "Shift to Recurring Revenue",
      solution: "Flexible deployment paired with SaaS subscriptions & Managed Services.",
      impact: "Predictable, growing MRR/ARR stream."
    }
  ] as SolutionItemSummary[],
  pairs: [] as GapSolutionPair[]
};

slide08DataEn.pairs = slide08DataEn.summarizedGaps.map((gap, index) => ({
  id: index + 1,
  gap,
  solution: slide08DataEn.summarizedPillars[index]
}));

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slide08DataEn : slide08DataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slide08DataEn : slide08DataId;
}

export const useSlide08Data = useSlideData;
export const slide08Data = slide08DataId;
export const slideData = slide08DataId;
export default slide08Data;

export const slideMeta = {
  "slideNumber": 8,
  "folder": "08",
  "sectionId": 1,
  "navTitle": {
    "in": "Gap & Solusi",
    "en": "Gaps & Solutions"
  },
  "headerTitle": {
    "in": "Gap & Solusi",
    "en": "Gaps & Solutions"
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
