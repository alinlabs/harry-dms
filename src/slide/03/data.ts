import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  badge: "Bagian 1 • Fondasi & Analisa Pasar",
  title: "Kondisi dan Posisi Pasar Saat Ini",
  subtitle: "Audit 30 Hari Pertama: Mengamankan Likuiditas 8 Existing Product Serta Menyiapkan Akselerasi Pengembangan & Ekspansi",
  mappingAreas: [
    { 
      id: 1, 
      title: "Audit 8 Existing Product", 
      focus: "Audit stok, perputaran kas, dan volume penjualan 8 lini hardware FTTH, ACS & Smart Display.", 
      category: "Existing" 
    },
    { 
      id: 2, 
      title: "Kesiapan 3 Produk Pengembangan", 
      focus: "Evaluasi kesiapan komersial ICT Solution, Media Digital Signage (Oxygen), dan Data Center.", 
      category: "Pengembangan" 
    },
    { 
      id: 3, 
      title: "Peluang Ekspansi Produk Baru", 
      focus: "Pemetaan pasar untuk IT White Label, Software Principal/Custom, Cybersecurity, AI & Solusi IoT.", 
      category: "Ekspansi" 
    },
    { 
      id: 4, 
      title: "Omzet & Pertumbuhan Marginal", 
      focus: "Pemetaan margin kotor per lini produk untuk menggeser bauran dari komoditas ke solusi bernilai tambah.", 
      category: "Finansial" 
    },
    { 
      id: 5, 
      title: "Basis Pelanggan & Cross-Selling", 
      focus: "Klasifikasi akun aktif/dormant sebagai pintu masuk cross-selling dari Existing ke Pengembangan & Ekspansi.", 
      category: "Pelanggan" 
    },
    { 
      id: 6, 
      title: "Kemitraan Principal & White Label", 
      focus: "Evaluasi relasi principal software/IT, skema OEM White Label (IFP, AIO, Videotron), dan proteksi deal.", 
      category: "Kemitraan" 
    },
    { 
      id: 7, 
      title: "Kapabilitas Delivery & Managed SLA", 
      focus: "Kesiapan presales, implementasi ICT/DC, developer custom software/IoT, serta komitmen SLA berkala.", 
      category: "Operasional" 
    },
    { 
      id: 8, 
      title: "Sinergi Media Digital Oxygen", 
      focus: "Penyelarasan penempatan Oxygen pada Media Digital Signage dan integrasi sinergi ekosistem grup.", 
      category: "Ekosistem" 
    }
  ],
  realIndustryBenchmark: [
    { year: "MTDL (Metrodata)", revenue: 25150000000000, change: "+13.8% YoY" },
    { year: "MSTI (Mastersystem)", revenue: 5362000000000, change: "+27.6% YoY" },
    { year: "MORA (Moratelindo)", revenue: 3978000000000, change: "Audited 2024" },
    { year: "MLPT (Multipolar)", revenue: 3730000000000, change: "+13.1% YoY" }
  ]
};

export const slideDataEn = {
  "badge": "Part 1 • Operational Foundation",
  "title": "Current Market Conditions & Positioning",
  "subtitle": "First 30-Day Audit Foundation: Protecting 8 Existing Lines While Preparing Development & Expansion Acceleration",
  "baselineNote": "DMS operates across 3 strategic product pillars. The 30-day focus audits existing cashflow lines while accelerating high-margin expansion.",
  "realIndustryBenchmark": [
    { year: "MTDL (Metrodata)", revenue: 25150000000000, change: "+13.8% YoY" },
    { year: "MSTI (Mastersystem)", revenue: 5362000000000, change: "+27.6% YoY" },
    { year: "MORA (Moratelindo)", revenue: 3978000000000, change: "Audited 2024" },
    { year: "MLPT (Multipolar)", revenue: 3730000000000, change: "+13.1% YoY" }
  ],
  "mappingAreas": [
    {
      "id": 1,
      "category": "Existing",
      "title": "Audit 8 Existing Products",
      "focus": "Audit inventory, cash velocity, and sales volume across 8 FTTH lines, ACS & Smart Displays."
    },
    {
      "id": 2,
      "category": "Development",
      "title": "Readiness of 3 Dev Lines",
      "focus": "Assess commercial readiness of ICT Solutions, Oxygen Digital Signage, and Data Center."
    },
    {
      "id": 3,
      "category": "Expansion",
      "title": "New Product Expansion Scope",
      "focus": "Map market readiness for White Label IT, Software, Cybersecurity, AI & IoT Solutions."
    },
    {
      "id": 4,
      "category": "Financials",
      "title": "Revenue & Marginal Growth",
      "focus": "Map gross margins across product lines to shift mix from commodities to high-margin solutions."
    },
    {
      "id": 5,
      "category": "Accounts",
      "title": "Customer Base & Cross-Selling",
      "focus": "Classify active/dormant accounts for cross-selling from Existing to Development & Expansion."
    },
    {
      "id": 6,
      "category": "Principals",
      "title": "Principal & White Label Partners",
      "focus": "Evaluate software principal tiers, OEM White Label supply (IFP, AIO, Videotron), and deal registration."
    },
    {
      "id": 7,
      "category": "Operations",
      "title": "Delivery & Managed SLA Capacity",
      "focus": "Verify presales, ICT/DC engineers, software/IoT developers, and recurring SLA readiness."
    },
    {
      "id": 8,
      "category": "Ecosystem",
      "title": "Oxygen Digital Media Synergy",
      "focus": "Align Oxygen placement within Digital Media Signage and maximize group ecosystem synergy."
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
  "slideNumber": 3,
  "folder": "03",
  "sectionId": 1,
  "navTitle": {
    "in": "Kondisi Pasar Saat Ini",
    "en": "Current Market Position"
  },
  "headerTitle": {
    "in": "Kondisi Pasar Saat Ini",
    "en": "Current Market Position"
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
