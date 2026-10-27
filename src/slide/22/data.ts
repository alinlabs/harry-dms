import { useLanguage } from '@/contexts/LanguageContext';

export interface PainPointSolution {
  id: string;
  industry: string;
  painPoints: string[];
  dmsSolution: string[];
  businessImpact: string;
  dealSize: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Penetrasi Pasar & Pemetaan Industri",
  title: "Fokus Solusi & Penjawab Pain-Points Industri",
  subtitle: "Mengonversi Tantangan Operasional Klien Menjadi Kontrak Multi-Pilar (Existing, Pengembangan & Ekspansi Produk)",
  items: [
    {
      id: "mfg-sol",
      industry: "Kawasan Industri, Manufaktur & Logistik",
      painPoints: [
        "Jaringan antarpabrik tidak stabil dan setting perangkat masih manual tanpa ACS",
        "Monitoring utilitas pabrik dan gudang belum terintegrasi dashboard real-time",
        "Pengadaan server dan perangkat terpisah antar-vendor menaikkan biaya"
      ],
      dmsSolution: [
        "Existing: ADSS Cable, Dropwire, GPON OLT/ONT & manajemen otomatis ACS",
        "Pengembangan: ICT Solution & Investment serta layanan Data Center",
        "Ekspansi Produk: Server, AI/Robotics & IoT Dashboard Automasi"
      ],
      businessImpact: "Meniadakan downtime pabrik, mengotomasi alur operasional, dan mengunci recurring SaaS bernilai tinggi.",
      dealSize: "Rp 25 Juta – Rp 95 Juta / Bulan (MRR + Project)"
    },
    {
      id: "fin-sol",
      industry: "Korporasi, Perbankan & Edukasi",
      painPoints: [
        "Risiko ancaman siber dan kepatuhan wajib Data Center lokal (OJK/BI)",
        "Biaya pengadaan laptop dan interactive display merek komoditas sangat mahal",
        "Sistem internal kaku membutuhkan custom software dan middleware integrasi"
      ],
      dmsSolution: [
        "Existing: Smart Display ruang rapat & jaringan GPON ONT Dual-Band",
        "Pengembangan: Layanan Data Center andal & managed ICT solutions",
        "Ekspansi & IP: Laptop All Brand, Server, White Label IFP/AIO, Custom SW & Cyber"
      ],
      businessImpact: "Penuhi audit keamanan siber, hemat belanja TI lewat White Label, dan pacu laba marginal DMS.",
      dealSize: "Rp 35 Juta – Rp 120 Juta / Bulan (ARR / Bundling)"
    },
    {
      id: "hosp-sol",
      industry: "Hospitality, Ritel Multi-Cabang & F&B",
      painPoints: [
        "TV kamar dan WiFi tamu belum terpusat serta sulit dimonitor real-time",
        "Promosi visual di cabang ritel masih manual tanpa CMS Digital Signage",
        "Pengadaan layar dan POS kasir membebani CAPEX jika dibeli putus"
      ],
      dmsSolution: [
        "Existing: 4K Android TV STB, GPON ONT Dual-Band WiFi & Smart Display",
        "Pengembangan: Media Digital Signage (Oxygen) dengan CMS terpusat",
        "Ekspansi & IP: White Label Videotron/AIO/Signage & Software cabang"
      ],
      businessImpact: "Tingkatkan kepuasan tamu/pelanggan dan amankan recurring subscription (MRR) lintas cabang.",
      dealSize: "Rp 15 Juta – Rp 60 Juta / Bulan (MRR Multi-Outlet)"
    },
    {
      id: "prop-sol",
      industry: "Gedung Komersial, Properti & ISP Regional",
      painPoints: [
        "Infrastruktur kabel optik butuh pasokan cepat dan manajemen ONT terpusat",
        "Gedung perlu modernisasi signage publik dan dashboard utilitas gedung",
        "Perang harga (price war) margin tipis jika hanya menjual pipa bandwidth"
      ],
      dmsSolution: [
        "Existing: Fiber Accessories, ADSS, Dropwire, GPON OLT/ONT & ACS",
        "Pengembangan: ICT Solution, Media Digital Signage (Oxygen) & Data Center",
        "Ekspansi & IP: White Label Videotron, Cyber, & IoT Smart Building Dashboard"
      ],
      businessImpact: "Ubah transaksi komoditas satu kali jadi kemitraan strategis berulang dengan margin berlipat.",
      dealSize: "Rp 40 Juta – Rp 150 Juta / Bulan (Total Building / ISP)"
    }
  ]
};

export const slideDataEn = {
  "sectionBadge": "Part 3 • Market Penetration & Industry Mapping",
  "title": "Solution Focus & Industry Pain-Point Resolvers",
  "subtitle": "Converting Client Operational Challenges into Multi-Pillar Contracts (Existing, Development & Expansion Products)",
  "items": [
    {
      "id": "mfg-sol",
      "industry": "Industrial Estates, Manufacturing & Logistics",
      "painPoints": [
        "Unstable inter-plant networks with manual device provisioning lacking ACS",
        "Plant and warehouse telemetry unintegrated without unified IoT dashboards",
        "Costly fragmented procurement of servers and hardware across vendors"
      ],
      "dmsSolution": [
        "Existing: ADSS Cable, 1–12 Core Dropwire, GPON OLT/ONT & ACS automation",
        "Development: Turnkey ICT Solution & Investment with Data Center hosting",
        "Product Expansion: Servers, AI & Robotics, plus IoT Dashboards"
      ],
      "businessImpact": "Eliminates plant downtime, automates operations, and generates high-margin SaaS/MRR contracts.",
      "dealSize": "IDR 25M – IDR 95M / Month (MRR + Project)"
    },
    {
      "id": "fin-sol",
      "industry": "Corporations, Banking & Education Institutions",
      "painPoints": [
        "Cybersecurity threats and strict local Data Center compliance mandates",
        "High procurement costs of commodity branded laptops and displays",
        "Rigid legacy systems requiring custom application and middleware integration"
      ],
      "dmsSolution": [
        "Existing: Boardroom Smart Displays & GPON dual-band ONT access",
        "Development: High-reliability Data Center services & managed ICT",
        "Expansion & IP: All-Brand Laptops, Servers, White Label IFP/AIO, Custom SW & Cyber"
      ],
      "businessImpact": "Ensures regulatory compliance, optimizes client IT budgets via White Label, and expands margins.",
      "dealSize": "IDR 35M – IDR 120M / Month (ARR / Bundling)"
    },
    {
      "id": "hosp-sol",
      "industry": "Hospitality, Multi-Branch Retail & F&B",
      "painPoints": [
        "Fragmented hotel in-room TV and guest WiFi lacking central management",
        "Manual visual promotions across store networks without cloud Digital Signage",
        "Heavy upfront CAPEX when purchasing commercial screens and POS terminals"
      ],
      "dmsSolution": [
        "Existing: 4K Android TV STBs, Dual-Band WiFi ONTs, ACS & Smart Displays",
        "Development: Digital Media Signage (Oxygen) with centralized CMS",
        "Expansion & IP: White Label Videotron/AIO/Signage & custom branch software"
      ],
      "businessImpact": "Elevates guest experience across all locations while locking in multi-branch recurring revenue (MRR).",
      "dealSize": "IDR 15M – IDR 60M / Month (Multi-Outlet MRR)"
    },
    {
      "id": "prop-sol",
      "industry": "Commercial Property, Towers & Regional ISPs",
      "painPoints": [
        "In-building fiber demands reliable components and automated ONT control",
        "High-rises require modernized public signage and smart building telemetry",
        "Severe margin erosion when competing solely on raw bandwidth price wars"
      ],
      "dmsSolution": [
        "Existing: Complete Fiber Accessories, ADSS, Dropwire, GPON OLT/ONT & ACS",
        "Development: ICT Solutions, Digital Media Signage (Oxygen) & Data Center",
        "Expansion & IP: White Label Videotron, Cyber, & IoT Smart Building Dashboard"
      ],
      "businessImpact": "Transforms one-off commodity transactions into high-margin recurring strategic partnerships.",
      "dealSize": "IDR 40M – IDR 150M / Month (Total Building / ISP)"
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
  "slideNumber": 22,
  "folder": "22",
  "sectionId": 2,
  "navTitle": {
    "in": "Solusi Pain-Points",
    "en": "Pain-Points Solutions"
  },
  "headerTitle": {
    "in": "Solusi Pain-Points",
    "en": "Pain-Points Solutions"
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
