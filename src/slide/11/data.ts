import { useLanguage } from '@/contexts/LanguageContext';

export interface ScenarioTarget {
  name: string;
  badge: string;
  theme: 'blue' | 'emerald';
  desc: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  assumptions: string[];
  financialImpact: string;
}

export const slideDataId = {
  title: "Proyeksi Target Penjualan: Skenario Menengah vs Skenario Agresif",
  subtitle: "Model Proyeksi Berbasis Sinergi 3 Pilar Produk (Existing, Pengembangan & Akselerasi Ekspansi Produk Baru)",
  auditCaveat: "Target nominal final dikalibrasi pasca-audit 30 hari pertama berdasarkan verifikasi run-rate 8 Existing Product, kesiapan 3 lini Pengembangan, dan penetrasi Ekspansi.",
  scenarios: [
    {
      name: "Skenario Menengah (Fondasi Existing & Pengembangan)",
      badge: "Target Konservatif",
      theme: "blue" as const,
      desc: "Perputaran kas stabil dari 8 Existing Product (FTTH, OLT/ONT, ACS, Display, STB) didukung penetrasi bertahap 3 lini Pengembangan (ICT, Signage Oxygen, Data Center).",
      metrics: [
        { label: "Pertumbuhan Omzet", value: "+22% – 28%", detail: "Didominasi Existing & Dev" },
        { label: "Target Margin GP", value: "30% – 36%", detail: "Gross profit terjaga sehat" },
        { label: "Retensi & Repeat", value: "> 95%", detail: "Repeat order OLT/ONT/Fiber" },
        { label: "Akun Baru (Logo)", value: "2 – 3 Akun", detail: "Per bulan / tim" }
      ],
      assumptions: [
        "Penjualan rutin 8 Existing Product menjaga arus kas operasional tetap positif.",
        "Cross-selling Media Signage Oxygen, ICT Solution, & Data Center ke 20% akun aktif.",
        "Penetrasi awal IT Product (Laptop, Server, & White Label IFP/AIO) pada proyek berjalan.",
        "Disiplin kontrol modal kerja ketat dengan uang muka (DP) perangkat minimal 30%."
      ],
      financialImpact: "Arus kas aman dan likuid, dengan pertumbuhan marginal moderat akibat porsi komoditas yang masih dominan."
    },
    {
      name: "Skenario Agresif (Prioritas Ekspansi Produk Baru)",
      badge: "Akselerasi Pertumbuhan Marginal",
      theme: "emerald" as const,
      desc: "Akselerasi agresif Ekspansi Produk Baru (White Label, Software/Cyber, AI/Robotics, dan IoT Dashboard SaaS) di atas fondasi Existing & Pengembangan.",
      metrics: [
        { label: "Pertumbuhan Marginal", value: "+48% – 62%", detail: "Lonjakan laba kotor (GP)" },
        { label: "Target Margin GP", value: "42% – 58%", detail: "Didorong SW, Cyber, AI & IP" },
        { label: "Porsi Recurring MRR", value: "> 55%", detail: "SaaS, CMS Signage & Managed" },
        { label: "Akun Baru (Logo)", value: "4 – 6 Akun", detail: "Per bulan lintas 3 pilar" }
      ],
      assumptions: [
        "Akselerasi lini White Label (IFP, PC AIO, Videotron, Signage) bebas dari perang harga.",
        "Penutupan kontrak bernilai tinggi: Software Principal, Custom Software, & Cybersecurity.",
        "Komersialisasi AI & Robotics serta solusi IoT Dashboard & Middleware berbasis SaaS/MRR.",
        "Sinergi penuh Media Signage Oxygen, ICT Solution, dan Data Center untuk kontrak multi-tahun."
      ],
      financialImpact: "Mendorong akselerasi pertumbuhan marginal perusahaan hingga +62% sekaligus menciptakan pendapatan berulang (MRR) jangka panjang."
    }
  ]
};

export const slideDataEn = {
  "title": "Sales Target Projections: Moderate vs Aggressive Scenarios",
  "subtitle": "Projection Model Grounded in 3-Pillar Product Synergy (Existing, Development & New Product Expansion Acceleration)",
  "auditCaveat": "Final nominal targets will be calibrated post 30-day audit based on verified run-rate of 8 Existing Products, 3 Development lines, and Expansion traction.",
  "scenarios": [
    {
      "name": "Moderate Scenario (Existing & Development Foundation)",
      "badge": "Conservative Baseline",
      "theme": "blue",
      "desc": "Steady cash velocity from 8 Existing Products (FTTH, OLT/ONT, ACS, Display, STB) paired with gradual growth in 3 Development lines (ICT, Oxygen Signage, DC).",
      "metrics": [
        {
          "label": "Revenue Growth",
          "value": "+22% – 28%",
          "detail": "Anchored by Existing & Dev"
        },
        {
          "label": "Target Gross Margin",
          "value": "30% – 36%",
          "detail": "Healthy baseline margin"
        },
        {
          "label": "Retention & Repeat",
          "value": "> 95%",
          "detail": "Repeat OLT/ONT/Fiber orders"
        },
        {
          "label": "New Enterprise Logos",
          "value": "2 – 3 Accounts",
          "detail": "Per month / team"
        }
      ],
      "assumptions": [
        "Consistent sales of 8 Existing Products maintain positive monthly operating cashflow.",
        "Cross-selling Oxygen Digital Signage, ICT Solutions, & Data Center to 20% of active accounts.",
        "Initial introduction of IT Products (Laptops, Servers, & White Label IFP/AIO) into active projects.",
        "Strict working capital discipline with minimum 30% upfront hardware down-payments."
      ],
      "financialImpact": "Highly stable cashflow with moderate marginal growth due to higher commodity mix."
    },
    {
      "name": "Aggressive Scenario (Prioritizing New Product Expansion)",
      "badge": "Marginal Growth Acceleration",
      "theme": "emerald",
      "desc": "Aggressive expansion of New Products (White Label IT, Software/Cyber, AI/Robotics, and IoT SaaS) atop Existing & Development foundations.",
      "metrics": [
        {
          "label": "Marginal Growth",
          "value": "+48% – 62%",
          "detail": "Gross profit acceleration"
        },
        {
          "label": "Target Gross Margin",
          "value": "42% – 58%",
          "detail": "Driven by SW, Cyber, AI & IP"
        },
        {
          "label": "Recurring MRR Share",
          "value": "> 55%",
          "detail": "SaaS, Signage CMS & Managed"
        },
        {
          "label": "New Enterprise Logos",
          "value": "4 – 6 Accounts",
          "detail": "Per month across 3 pillars"
        }
      ],
      "assumptions": [
        "Accelerated deployment of White Label lines (IFP, PC AIO, Videotron, Signage) insulated from price wars.",
        "High-margin Principal Software, Custom Software Development, and Cybersecurity contract closures.",
        "Commercialization of AI & Robotics plus IoT Dashboards & Middleware via SaaS/MRR.",
        "Full synergy of Oxygen Digital Signage, ICT Solutions, and Data Center locking in multi-year contracts."
      ],
      "financialImpact": "Accelerates corporate marginal profit growth (+62%) while building compounding multi-year recurring revenue."
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
  "slideNumber": 11,
  "folder": "11",
  "sectionId": 1,
  "navTitle": {
    "in": "Target Penjualan",
    "en": "Sales Targets"
  },
  "headerTitle": {
    "in": "Target Penjualan",
    "en": "Sales Targets"
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
