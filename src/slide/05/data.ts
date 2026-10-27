import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  badge: "Bagian 1 • Fondasi & Analisa Pasar",
  title: "Peluang Pasar & Segmentasi Sasaran Potensial B2B",
  subtitle: "Pemetaan Segmen Sasaran Berbasis Kombinasi Existing Product, Pengembangan Produk, dan Ekspansi Produk Baru DMS",
  targetClusters: [
    {
      segment: "ISP Regional, Telco & Kontraktor Jaringan",
      examples: "ISP Lokal, Operator FTTH, Kontraktor Infrastruktur, Kawasan",
      need: "Pasokan rutin GPON OLT/ONT, kabel ADSS & Dropwire, aksesori fiber, serta platform ACS terpusat.",
      painPoint: "Rantai pasok optik sering terputus dan manajemen ribuan ONT pelanggan masih manual tanpa ACS.",
      dealType: "REPEAT",
      dealValue: "80–350M",
      potensi: "Tinggi",
      fitDetail: "Existing (OLT/ONT/ADSS/Dropwire/ACS) + Ekspansi Middleware"
    },
    {
      segment: "Manufaktur (Kawasan Industri) & Logistik",
      examples: "Pabrik Cikarang/Karawang, Gudang Otomasi, Smelter & Energi",
      need: "Solusi ICT terintegrasi, Server & Data Center, serta otomasi pabrik via IoT Dashboard & AI/Robotics.",
      painPoint: "Ketergantungan pada vendor terpisah dan tingginya kerugian akibat pemantauan fasilitas yang belum terotomasi.",
      dealType: "KONTRAK",
      dealValue: "200–750M",
      potensi: "Sangat Tinggi",
      fitDetail: "Pengembangan (ICT & DC) + Ekspansi (AI/Robotics & IoT Dashboard)"
    },
    {
      segment: "Perbankan, Korporasi & Instansi Pendidikan",
      examples: "HQ Perbankan/Fintech, BUMN, Universitas, RS & Gedung Kantor",
      need: "Pengadaan Laptop/Server, White Label IFP/AIO, Smart Display, lisensi Software Principal & Cybersecurity.",
      painPoint: "Mahalnya perangkat bermerek konvensional serta tingginya risiko serangan siber dan kepatuhan data.",
      dealType: "ARR",
      dealValue: "150–500M",
      potensi: "Sangat Tinggi",
      fitDetail: "Existing (Smart Display) + Ekspansi (IT White Label, SW & Cyber)"
    },
    {
      segment: "Ritel (Multi Cabang), Hospitality & Properti Komersial",
      examples: "Jaringan Hotel/Resort, Mall, Ritel F&B, Apartemen & Gedung",
      need: "Digital Signage Oxygen, Videotron White Label, 4K Android TV STB kamar hotel, dan Custom Software.",
      painPoint: "Promosi visual cabang belum terpusat dan sistem hiburan kamar terfragmentasi dengan lisensi mahal.",
      dealType: "ARR",
      dealValue: "60–300M",
      potensi: "Tinggi",
      fitDetail: "Existing (4K STB & Display) + Pengembangan (Signage Oxygen) + Videotron"
    }
  ],
  icpCriteria: [
    { label: "Skala Operasional", requirement: "Korporasi, ISP, kawasan industri, atau jaringan bisnis dengan 3–50+ lokasi" },
    { label: "Belanja TI & Infrastruktur", requirement: "Anggaran pengadaan / langganan Rp 20 juta – Rp 100 juta+ / bulan" },
    { label: "Pengambil Keputusan", requirement: "CIO / Direktur TI, VP Operations, Procurement Head, & Building Management" },
    { label: "Potensi Multi-Pilar", requirement: "Memiliki kebutuhan lintas Existing Product, Pengembangan ICT/Signage/DC, hingga Ekspansi IT/SW/AI" }
  ]
};

export const slideDataEn = {
  "badge": "Part 1 • Foundation & Market Analysis",
  "title": "Market Opportunities & B2B Target Segmentation",
  "subtitle": "Target Segment Mapping Grounded in DMS Existing Products, Product Development, and New Product Expansion",
  "targetClusters": [
    {
      "segment": "Regional ISPs, Telcos & Network Contractors",
      "examples": "Local ISPs, FTTH Operators, Infrastructure Contractors, Industrial Parks",
      "need": "Recurring supply of GPON OLT/ONT, ADSS & Dropwire cables, fiber accessories, and centralized ACS platform.",
      "painPoint": "Inconsistent optical hardware supply chains and manual provisioning of thousands of subscriber ONTs without ACS.",
      "dealType": "REPEAT",
      "dealValue": "80–350M",
      "potensi": "High",
      "fitDetail": "Existing (OLT/ONT/ADSS/Dropwire/ACS) + Middleware Expansion"
    },
    {
      "segment": "Manufacturing (Industrial Estates) & Logistics",
      "examples": "Cikarang/Karawang Plants, Automated Warehouses, Mining & Energy",
      "need": "Turnkey ICT Solutions, Server & Data Center infrastructure, and factory automation powered by IoT Dashboards & AI/Robotics.",
      "painPoint": "Vendor fragmentation and high operational losses from unautomated plant utility monitoring.",
      "dealType": "CONTRACT",
      "dealValue": "200–750M",
      "potensi": "Very High",
      "fitDetail": "Development (ICT & DC) + Expansion (AI/Robotics & IoT Dashboard)"
    },
    {
      "segment": "Banking, Corporations & Educational Institutions",
      "examples": "Banking/Fintech HQs, SOEs, Universities, Hospitals & Office Towers",
      "need": "All-Brand Laptops, Servers, White Label IFP/AIO, Smart Displays, Principal Software Licensing & Cybersecurity.",
      "painPoint": "High procurement costs of traditional branded hardware alongside rising cyber threats and data compliance mandates.",
      "dealType": "ARR",
      "dealValue": "150–500M",
      "potensi": "Very High",
      "fitDetail": "Existing (Smart Display) + Expansion (White Label IT, SW & Cyber)"
    },
    {
      "segment": "Retail (Multi-Branch), Hospitality & Commercial Property",
      "examples": "Hotel/Resort Chains, Shopping Malls, F&B Chains, Apartments & Towers",
      "need": "Oxygen Digital Signage, White Label Videotron, 4K Android TV STB for hospitality, and Custom Software.",
      "painPoint": "Uncoordinated branch visual media and fragmented property entertainment systems with high recurring costs.",
      "dealType": "ARR",
      "dealValue": "60–300M",
      "potensi": "High",
      "fitDetail": "Existing (4K STB & Display) + Dev (Oxygen Signage) + Videotron"
    }
  ],
  "icpCriteria": [
    {
      "label": "Operational Scale",
      "requirement": "Enterprises, ISPs, industrial estates, or commercial chains with 3–50+ sites"
    },
    {
      "label": "Monthly IT & Infra Spend",
      "requirement": "Procurement / subscription budget of IDR 20M – IDR 100M+ / month"
    },
    {
      "label": "Key Decision Makers",
      "requirement": "CIO / IT Director, VP Operations, Procurement Head, & Building Management"
    },
    {
      "label": "Multi-Pillar Potential",
      "requirement": "Strong cross-sell fit across Existing Products, ICT/Signage/DC Dev, and IT/SW/AI Expansion"
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
  "slideNumber": 5,
  "folder": "05",
  "sectionId": 1,
  "navTitle": {
    "in": "Peluang & Segmentasi",
    "en": "Opportunities & Segments"
  },
  "headerTitle": {
    "in": "Peluang & Segmentasi",
    "en": "Market Opportunities"
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
