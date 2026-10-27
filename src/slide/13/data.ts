import { useLanguage } from '@/contexts/LanguageContext';

export interface QuarterMilestone {
  quarter: string;
  title: string;
  targetARR: string;
  focus: string;
  milestones: string[];
}

export const slideDataId = {
  title: "Roadmap 1 Tahun (2027): Eskalasi 3 Pilar Produk & Pertumbuhan Marginal",
  subtitle: "Tonggak Capaian Triwulanan sepanjang Tahun 2027 (Q1–Q4 2027) dari Fondasi Existing Product Menuju Dominasi Ekspansi & Recurring Revenue",
  quarters: [
    {
      quarter: "Q1 2027 (Jan – Mar)",
      title: "Eksekusi Backlog & Eskalasi Existing Product",
      targetARR: "Akselerasi Q1 2027",
      focus: "Konversi pipeline 2026, repeat order 8 Existing Product, dan duet Hunter & Marketing.",
      milestones: [
        "Konversi backlog proposal 2026 jadi kontrak OLT/ONT, ADSS, ACS, dan Smart Display.",
        "Rutinitas review APN mingguan, Bank Case H+3, dan pelatihan produk 2-mingguan.",
        "Akuisisi 25+ MQL/bulan untuk pembukaan akun baru di 6 vertikal industri."
      ]
    },
    {
      quarter: "Q2 2027 (Apr – Jun)",
      title: "Komersialisasi 3 Produk Pengembangan",
      targetARR: "+30% Nilai Kontrak",
      focus: "Penetrasi ICT Solution & Investment, Oxygen Signage, dan layanan Data Center.",
      milestones: [
        "Rollout komersial Oxygen Signage & Smart Display di gedung, ritel, dan hotel.",
        "Closing kontrak turnkey ICT Solution & Investment serta layanan Data Center.",
        "Penetrasi tender IT Product & White Label (IFP, PC AIO, Videotron)."
      ]
    },
    {
      quarter: "Q3 2027 (Jul – Sep)",
      title: "Akselerasi Ekspansi (SW, Cyber & AI)",
      targetARR: "+48% Pertumbuhan Marginal",
      focus: "Ekspansi Software Principal, Custom Software, Cybersecurity, serta AI & Robotics.",
      milestones: [
        "Closing lisensi Software Principal, Custom Software, dan solusi Cybersecurity.",
        "Implementasi solusi AI & Robotics di manufaktur dan kawasan industri.",
        "Tingkatkan porsi White Label hardware untuk jaga Gross Margin > 45%."
      ]
    },
    {
      quarter: "Q4 2027 (Okt – Des)",
      title: "Skalabilitas Solusi IoT & Recurring SaaS",
      targetARR: "+62% Pertumbuhan Marginal",
      focus: "Monetisasi penuh solusi IoT Dashboard & Automasi via SaaS & Managed Services.",
      milestones: [
        "Skalabilitas komersial solusi IoT & automasi berbasis langganan SaaS/MRR.",
        "Kunci >85% perpanjangan kontrak tahunan lintas 3 Pilar Produk.",
        "Validasi capaian pertumbuhan marginal +62% dan susun roadmap ekspansi 2028."
      ]
    }
  ] as QuarterMilestone[]
};

export const slideDataEn = {
  "title": "1-Year Roadmap (2027): 3-Pillar Product Escalation & Marginal Growth",
  "subtitle": "Full-Year 2027 Quarterly Milestones (Q1–Q4 2027) Moving from Existing Product Cashflow to High-Margin Expansion & Recurring Revenue",
  "quarters": [
    {
      "quarter": "Q1 2027 (Jan – Mar)",
      "title": "Backlog Conversion & Existing Product Escalation",
      "targetARR": "Q1 2027 Acceleration",
      "focus": "Converting late-2026 APN backlog, scaling repeat orders on 8 Existing Products, and Hunter-Marketing sync.",
      "milestones": [
        "Convert 2026 backlog into contracts for OLT/ONT, ADSS, ACS, and Smart Display.",
        "Establish weekly APN reviews, D+3 Bank Case audits, and bi-weekly product training.",
        "Generate 25+ MQLs/month to acquire new enterprise logos across 6 verticals."
      ]
    },
    {
      "quarter": "Q2 2027 (Apr – Jun)",
      "title": "Scaling 3 Product Development Lines",
      "targetARR": "+30% Contract Value",
      "focus": "Scaling ICT Solutions & Investment, Oxygen Signage, and Data Center services.",
      "milestones": [
        "Commercial rollout of Oxygen Signage & Smart Displays across towers, retail, and hospitality.",
        "Close enterprise contracts for ICT Solutions, Investment projects, and Data Center racks.",
        "Win tenders for IT Products and White Label hardware (IFP, PC AIO, Videotron)."
      ]
    },
    {
      "quarter": "Q3 2027 (Jul – Sep)",
      "title": "Accelerating Product Expansion (SW, Cyber & AI)",
      "targetARR": "+48% Marginal Growth",
      "focus": "Scaling Principal Software, Custom Development, Cybersecurity, and AI & Robotics.",
      "milestones": [
        "Close high-margin contracts for Principal Software, Custom Dev, and Cybersecurity.",
        "Deploy practical AI & Robotics solutions in manufacturing and logistics estates.",
        "Scale White Label hardware adoption, securing blended Gross Margin > 45%."
      ]
    },
    {
      "quarter": "Q4 2027 (Oct – Dec)",
      "title": "IoT Solution Scaling & SaaS Recurring Revenue",
      "targetARR": "+62% Marginal Growth",
      "focus": "Full monetization of IoT Dashboards & Automation via SaaS & Managed Services.",
      "milestones": [
        "Scale DMS IoT & automation subscriptions with recurring SaaS/MRR contracts.",
        "Lock in >85% annual contract renewals across all 3 Product Pillars.",
        "Validate full-year +62% marginal growth and finalize the 2028 national expansion plan."
      ]
    }
  ] as QuarterMilestone[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 13,
  "folder": "13",
  "sectionId": 1,
  "navTitle": {
    "in": "Roadmap 1 Tahun (2027)",
    "en": "1-Year Roadmap (2027)"
  },
  "headerTitle": {
    "in": "Roadmap 1 Tahun (2027)",
    "en": "1-Year Roadmap (2027)"
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
