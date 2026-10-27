import { useLanguage } from '@/contexts/LanguageContext';

export interface TeamMember {
  id: string;
  name: string;
  roleTitle: string;
  badge: string;
  status: "existing" | "new_hire" | "leadership";
  focus: string;
  deliverables: string[];
  kpiMetrics: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Formasi Tim Sales & Marketing (6 Personel)",
  subtitle: "Komposisi 6 Personel Terpadu dalam Formasi 3 Pilar Produk (Existing, Pengembangan & Ekspansi)",
  summaryStats: [
    { label: "Total Formasi Tim", value: "6 Personel", desc: "Harry (1) • Existing (3) • New (1) • Mkt (1)" },
    { label: "Pembagian Fokus", value: "3 Pilar Produk", desc: "Existing, Pengembangan, & Ekspansi" },
    { label: "Fokus Akuisisi", value: "Hunter & Marketing", desc: "Penetrasi B2B & Lead Engine" },
    { label: "Target Akuisisi", value: "8–12 Akun / Bln", desc: "Prospek lintas 3 pilar produk" }
  ],
  teamMembers: [
    {
      id: "harry",
      name: "Harry Gultom (1)",
      roleTitle: "Sales Manager IT & FTTH",
      badge: "Sales Leadership & Strategy",
      status: "leadership" as const,
      focus: "Orkestrasi penjualan 3 Pilar Produk, kawal pencapaian margin +40%, dan supervisi closing C-Level.",
      deliverables: [
        "Jaga keseimbangan arus kas Existing dan lonjakan margin lini Ekspansi.",
        "Buka akses C-Level untuk deal strategis ICT, Data Center, Software, & AI.",
        "Kemitraan principal, lini White Label, dan evaluasi 10 kriteria forecast."
      ],
      kpiMetrics: "Target Margin (+40%), Omzet & GP, Pipeline 3x"
    },
    {
      id: "existing-1",
      name: "Sales Existing 1",
      roleTitle: "Account Specialist (Existing Product & Repeat Volume)",
      badge: "Sales Existing (1/3) • Pilar 1",
      status: "existing" as const,
      focus: "Amankan arus kas dasar dan repeat order 8 Existing Product FTTH & IT pada akun aktif.",
      deliverables: [
        "Kelola akun B2B/ISP aktif dengan target retensi klien > 95%.",
        "Genjot repeat order rutin kabel ADSS, dropwire, aksesoris, OLT, & ONT.",
        "Perluas adopsi Automatic Configuration Server (ACS) dan 4K STB."
      ],
      kpiMetrics: "Retensi Akun > 95%, Repeat Order 8 Existing Product"
    },
    {
      id: "existing-2",
      name: "Sales Existing 2",
      roleTitle: "Account Specialist (Pengembangan Produk & Cross-Sell)",
      badge: "Sales Existing (2/3) • Pilar 2",
      status: "existing" as const,
      focus: "Eskalasi ARPA klien via cross-selling 3 lini Pengembangan: ICT, Oxygen Signage, dan Data Center.",
      deliverables: [
        "Cross-selling Media Digital Signage (Oxygen) & Smart Display ke tenant.",
        "Konversi klien jaringan ke kontrak turnkey ICT Solution multi-tahun.",
        "Tawarkan layanan rak Data Center untuk dongkrak nilai kontrak."
      ],
      kpiMetrics: "Kenaikan ARPA +40%, Kontrak ICT / Signage Oxygen / DC"
    },
    {
      id: "existing-3",
      name: "Sales Existing 3",
      roleTitle: "Account Specialist (Key Account Retention & Upsell)",
      badge: "Sales Existing (3/3) • Pilar 1 & 2",
      status: "existing" as const,
      focus: "Optimalisasi retensi akun strategis, pembaruan kontrak SLA, dan dorong volume repeat order bernilai tinggi.",
      deliverables: [
        "Kawal retensi & pembaruan kontrak pemeliharaan serta SLA akun kunci.",
        "Cross-selling portofolio FTTH, STB 4K, dan otomasi ACS ke klien berjalan.",
        "Amankan kontrak Managed Service tahunan untuk stabilitas recurring revenue."
      ],
      kpiMetrics: "Retensi Akun > 95%, Pembaruan Kontrak 100%, Upsell Volume"
    },
    {
      id: "new-hunter",
      name: "Sales New 1 (B2B Hunter)",
      roleTitle: "B2B Account Executive (Ekspansi IT, White Label & AI)",
      badge: "Sales New (1/1) • Pilar 3 Ekspansi",
      status: "new_hire" as const,
      focus: "Akuisisi new logo korporasi via hardware IT, White Label DMS, lisensi Software, Cyber, dan solusi AI.",
      deliverables: [
        "Akuisisi new logo B2B via hardware IT korporasi dan lini White Label DMS.",
        "Penetrasi lisensi Software Principal, Custom Dev, dan Cybersecurity.",
        "Buka peluang proyek AI/Robotics & komersialisasi solusi SaaS."
      ],
      kpiMetrics: "2–3 New Logo / Bln, Margin Lini White Label & AI > 45%"
    },
    {
      id: "marketing",
      name: "Marketing New 1 (Spesialis B2B)",
      roleTitle: "B2B Lead Generation & Portfolio Enabler",
      badge: "Marketing New (1/1) • Lead Engine 3 Pilar",
      status: "new_hire" as const,
      focus: "Motor lead engine B2B, sales battle card 3 pilar, dan pencapaian 25+ MQL bulanan.",
      deliverables: [
        "Hasilkan 25+ Marketing Qualified Leads (MQL) per bulan lintas 3 pilar.",
        "Susun katalog visual & Sales Battle Card untuk seluruh lini produk.",
        "Eksekusi kampanye digital B2B terarah dan koordinasi demo day solusi."
      ],
      kpiMetrics: "Kontribusi Pipeline 30%+, 25+ MQL / Bln, Sales Kit 3 Pilar"
    }
  ],
  corePrinciple: "Formasi 6 personel: 1 Harry Gultom (Sales Manager) memimpin 3 Sales Existing menjaga kas & eskalasi Pengembangan (ICT, Signage Oxygen, DC), didukung 1 Sales New (Hunter) & 1 Marketing New memacu Ekspansi New Logo & Solusi IP untuk percepatan laba marginal."
};

export const slideDataEn = {
  "sectionBadge": "Part 4 • Team & Sales Management",
  "title": "Sales & Marketing Team Formation (6 Personnel)",
  "subtitle": "Integrated 6-Personnel Team Structure Executing the 3 Product Pillars (Existing, Development & Expansion)",
  "summaryStats": [
    {
      "label": "Total Team Formation",
      "value": "6 Personnel",
      "desc": "Harry (1) • Existing (3) • New (1) • Mkt (1)"
    },
    {
      "label": "Portfolio Alignment",
      "value": "3 Product Pillars",
      "desc": "Existing, Development, & Expansion"
    },
    {
      "label": "Acquisition Focus",
      "value": "Hunters & Marketing",
      "desc": "B2B Penetration & Lead Engine"
    },
    {
      "label": "Acquisition Target",
      "value": "8–12 Accounts/Mo",
      "desc": "Verified multi-pillar leads"
    }
  ],
  "teamMembers": [
    {
      "id": "harry",
      "name": "Harry Gultom (1)",
      "roleTitle": "Sales Manager IT & FTTH",
      "badge": "Sales Leadership & Strategy",
      "status": "leadership",
      "focus": "Orchestrating 3-Pillar execution, driving target +40% margin, and leading C-Level closings.",
      "deliverables": [
        "Balance Existing Product cashflow with high-margin Expansion growth.",
        "Open C-Level doors for strategic ICT, Data Center, Software, & AI deals.",
        "Secure principal partnerships, White Label lines, & 10-criteria reviews."
      ],
      "kpiMetrics": "Target Margin (+40%), Revenue & GP, 3x Pipeline"
    },
    {
      "id": "existing-1",
      "name": "Sales Existing 1",
      "roleTitle": "Account Specialist (Existing Products & Repeat Volume)",
      "badge": "Sales Existing (1/3) • Pillar 1",
      "status": "existing",
      "focus": "Securing baseline cashflow and repeat orders across 8 Existing FTTH & IT Products on active accounts.",
      "deliverables": [
        "Manage active B2B/ISP accounts targeting client retention > 95%.",
        "Drive monthly repeat orders for ADSS cables, dropwire, OLTs, and ONTs.",
        "Expand Automatic Configuration Server (ACS) and 4K STB adoption."
      ],
      "kpiMetrics": ">95% Account Retention, Repeat Volume on 8 Products"
    },
    {
      "id": "existing-2",
      "name": "Sales Existing 2",
      "roleTitle": "Account Specialist (Product Development & Cross-Sell)",
      "badge": "Sales Existing (2/3) • Pillar 2",
      "status": "existing",
      "focus": "Escalating client ARPA by cross-selling 3 Development lines: ICT, Oxygen Signage, and Data Center.",
      "deliverables": [
        "Cross-sell Oxygen Signage & Smart Displays to enterprise tenants.",
        "Upgrade network buyers into multi-year turnkey ICT contracts.",
        "Pitch Data Center colocation to grow Average Revenue Per Account."
      ],
      "kpiMetrics": "+40% ARPA Expansion, ICT / Oxygen Signage / DC Deals"
    },
    {
      "id": "existing-3",
      "name": "Sales Existing 3",
      "roleTitle": "Account Specialist (Key Account Retention & Upsell)",
      "badge": "Sales Existing (3/3) • Pillars 1 & 2",
      "status": "existing",
      "focus": "Optimizing strategic account retention, SLA contract renewals, and driving high-volume repeat orders.",
      "deliverables": [
        "Safeguard retention and SLA renewals for corporate & Tier-2 ISP accounts.",
        "Cross-sell FTTH products, 4K STBs, and ACS automation into active accounts.",
        "Secure annual Managed Service agreements for stable recurring revenue."
      ],
      "kpiMetrics": ">95% Retention, 100% Contract Renewal, Upsell Volume"
    },
    {
      "id": "new-hunter",
      "name": "Sales New 1 (B2B Hunter)",
      "roleTitle": "B2B Account Executive (IT Expansion, White Label & AI)",
      "badge": "Sales New (1/1) • Pillar 3 Expansion",
      "status": "new_hire",
      "focus": "Acquiring corporate new logos via IT hardware, DMS White Label, Software licenses, Cyber, and AI.",
      "deliverables": [
        "Acquire enterprise new logos via corporate IT hardware and DMS White Label.",
        "Penetrate Principal Software licensing, Custom Dev, and Cybersecurity.",
        "Pioneer AI/Robotics project deals and monetize SaaS contracts."
      ],
      "kpiMetrics": "2–3 New Logos / Mo, >45% White Label & AI Line Margin"
    },
    {
      "id": "marketing",
      "name": "Marketing New 1 (B2B Specialist)",
      "roleTitle": "B2B Lead Generation & Portfolio Enabler",
      "badge": "Marketing New (1/1) • 3-Pillar Lead Engine",
      "status": "new_hire",
      "focus": "Powering B2B lead generation, 3-pillar battle cards, and delivering 25+ MQLs monthly.",
      "deliverables": [
        "Generate 25+ Marketing Qualified Leads (MQLs) monthly across 3 pillars.",
        "Produce visual catalogs & Battle Cards across all product lines.",
        "Execute targeted B2B digital campaigns and coordinate executive demos."
      ],
      "kpiMetrics": "30%+ Pipeline Contribution, 25+ MQLs/Mo, 3-Pillar Kit"
    }
  ],
  "corePrinciple": "6-personnel synergy: 1 Harry Gultom (Sales Manager) leads 3 Sales Existing securing cashflow & scaling Development (ICT, Signage Oxygen, DC), supported by 1 Sales New (Hunter) & 1 Marketing New accelerating New Logo Expansion & IP solutions for marginal profit growth."
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 24,
  "folder": "24",
  "sectionId": 3,
  "navTitle": {
    "in": "Formasi Tim Sales",
    "en": "Sales Team Formation"
  },
  "headerTitle": {
    "in": "Formasi Tim Sales",
    "en": "Sales Team Formation"
  },
  "category": {
    in: "Team",
    en: "Team"
  },
  "section": {
    in: "Team",
    en: "Team"
  }
};
