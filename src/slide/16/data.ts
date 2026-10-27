import { useLanguage } from '@/contexts/LanguageContext';

export interface DevelopmentProductItem {
  id: string;
  number: number;
  name: string;
  category: string;
  readinessStage: string;
  imageUrl?: string;
  imagePlaceholderLabel: string;
  overview: string;
  commercialStrategy: string;
  valuePotential: string;
  keyValueDrivers: string[];
  revenueModel: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Portofolio Produk (2/4)",
  title: "Pengembangan Produk: Solusi ICT, Media Digital & Data Center",
  subtitle: "3 Pilar Produk & Layanan yang Sedang Dikembangkan untuk Memperluas Nilai Kontrak Korporasi dan Pendapatan Berulang",
  items: [
    {
      id: "ict-solution-investment",
      number: 1,
      name: "ICT Solution & Investment",
      category: "Solusi Terintegrasi & Kemitraan Investasi",
      readinessStage: "Tahap Pengembangan Bisnis",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: ICT Solution & Investment",
      overview: "Solusi ICT terintegrasi dan skema kemitraan investasi bersama (co-investment/BOT) untuk gedung dan kawasan industri.",
      commercialStrategy: "Mitra pembiayaan & instalasi infrastruktur jangka panjang tanpa membebani CAPEX awal klien.",
      valuePotential: "Kontrak multi-tahun bernilai besar sekaligus mengamankan hak pengelolaan jaringan eksklusif kawasan.",
      keyValueDrivers: [
        "Model kemitraan investasi bersama (Build-Operate-Transfer / Revenue Sharing)",
        "Penguncian kontrak eksklusif multi-tahun di kawasan komersial & industri",
        "Transformasi dari penjual perangkat menjadi mitra strategis infrastruktur"
      ],
      revenueModel: "Kontrak Jangka Panjang & Bagi Hasil Investasi"
    },
    {
      id: "media-digital-signage",
      number: 2,
      name: "Media Digital — Digital Signage (Termasuk Produk Oxygen)",
      category: "Commercial Digital Media & Oxygen Ecosystem",
      readinessStage: "Tahap Pengembangan & Integrasi Grup",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: Media Digital — Digital Signage & Oxygen",
      overview: "Solusi media digital komersial dan penempatan produk Oxygen dalam ekosistem signage terkelola.",
      commercialStrategy: "Integrasikan pipa internet Oxygen dengan layar signage terpusat di lobi gedung, mal, RS, dan ritel.",
      valuePotential: "Dual recurring revenue: langganan bulanan layar + konektivitas dan monetisasi slot media digital.",
      keyValueDrivers: [
        "Penempatan strategis produk Oxygen dalam paket bundel Media Digital & Signage",
        "Manajemen konten terpusat untuk jaringan cabang ritel & lobi gedung",
        "Peningkatan nilai tambah (ARPU) bagi pelanggan konektivitas korporat"
      ],
      revenueModel: "Bundling Langganan Bulanan (MRR) & Managed Media"
    },
    {
      id: "data-center-dev",
      number: 3,
      name: "Data Center",
      category: "Infrastruktur Penyimpanan & Komputasi",
      readinessStage: "Tahap Pengembangan Layanan",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: Layanan Data Center",
      overview: "Layanan penempatan server, kolokasi rak, dan komputasi aman untuk kebutuhan data korporasi.",
      commercialStrategy: "Targetkan korporasi, perbankan, dan institusi kesehatan dengan jaminan daya andal dan fiber interkoneksi langsung.",
      valuePotential: "Pendapatan sewa berulang (MRR) 1–3 tahun dengan retensi pelanggan sangat tinggi (sticky base).",
      keyValueDrivers: [
        "Peluang pasar besar didorong regulasi kedaulatan & perlindungan data lokal",
        "Sinergi langsung dengan jalur konektivitas leased line menuju fasilitas Data Center",
        "Pendapatan sewa ruang rak, daya, dan layanan pengelolaan berkelanjutan"
      ],
      revenueModel: "Sewa Berulang Multi-Tahun (High-Retention MRR)"
    }
  ] as DevelopmentProductItem[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Product Portfolio (2/4)",
  title: "Product Development: ICT Solutions, Digital Media & Data Center",
  subtitle: "3 Product & Service Lines Under Development to Expand Enterprise Contract Value and Recurring Revenue Streams",
  items: [
    {
      id: "ict-solution-investment",
      number: 1,
      name: "ICT Solution & Investment",
      category: "Integrated Solutions & Co-Investment",
      readinessStage: "Business Development Stage",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: ICT Solution & Investment",
      overview: "End-to-end ICT solutions with turnkey co-investment/BOT financing models for commercial estates and campuses.",
      commercialStrategy: "Long-term infrastructure deployment partner eliminating upfront client CAPEX constraints.",
      valuePotential: "High-value multi-year contracts securing exclusive estate-wide network operating rights.",
      keyValueDrivers: [
        "Co-investment & revenue-sharing partnership models (BOT / Managed OPEX)",
        "Multi-year exclusive service lock-in across commercial and industrial zones",
        "Elevates DMS from hardware vendor to strategic infrastructure partner"
      ],
      revenueModel: "Multi-Year Contracts & Investment Revenue Share"
    },
    {
      id: "media-digital-signage",
      number: 2,
      name: "Digital Media — Digital Signage (Including Oxygen Products)",
      category: "Commercial Digital Media & Oxygen Ecosystem",
      readinessStage: "Internal Alignment & Development Stage",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: Digital Media — Digital Signage & Oxygen",
      overview: "Commercial digital media platform integrating Oxygen bandwidth within managed interactive signage networks.",
      commercialStrategy: "Bundle Oxygen connectivity with cloud CMS signage across towers, hospitals, malls, and retail chains.",
      valuePotential: "Dual recurring revenue: monthly display + bandwidth subscriptions plus commercial ad media monetization.",
      keyValueDrivers: [
        "Strategic placement of Oxygen products within Digital Media & Signage bundles",
        "Centralized content management for multi-branch retail and building lobbies",
        "Significant ARPU expansion across corporate connectivity subscribers"
      ],
      revenueModel: "Monthly Bundled Subscription (MRR) & Managed Media"
    },
    {
      id: "data-center-dev",
      number: 3,
      name: "Data Center",
      category: "Compute & Colocation Infrastructure",
      readinessStage: "Service Expansion Stage",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: Data Center Services",
      overview: "Secure server colocation, rack hosting, and private cloud computing facilities.",
      commercialStrategy: "Target enterprise, banking, and healthcare clients requiring local compliance and dedicated fiber interconnects.",
      valuePotential: "High-retention 1–3 year Monthly Recurring Revenue (MRR) with minimal customer churn.",
      keyValueDrivers: [
        "Strong market tailwinds driven by domestic data sovereignty regulations",
        "Direct cross-selling synergy with dedicated leased-line fiber connectivity",
        "Predictable recurring revenue from rack space, power, and managed hands"
      ],
      revenueModel: "Multi-Year Recurring Rental (High-Retention MRR)"
    }
  ] as DevelopmentProductItem[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 16,
  "folder": "16",
  "sectionId": 2,
  "navTitle": {
    "in": "Pengembangan Produk",
    "en": "Product Development"
  },
  "headerTitle": {
    "in": "Pengembangan Produk",
    "en": "Product Development"
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
