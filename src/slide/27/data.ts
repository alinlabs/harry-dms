import { useLanguage } from '@/contexts/LanguageContext';

export interface KnowledgeTrack {
  cadence: string;
  title: string;
  focus: string;
  curriculum: string[];
}

export interface KnowledgePillar {
  title: string;
  desc: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Product Knowledge Sharing: Kurikulum Pembinaan 2-Mingguan",
  subtitle: "Membangun Keunggulan Kompetitif Tim Sales Melalui Pemahaman Mendalam 3 Pilar Produk dan Simulasi Aplikasi Komersial Lapangan",
  summaryMetrics: [
    { label: "Siklus Pembinaan", value: "2 Minggu", desc: "Sesi Rutin Berkelanjutan" },
    { label: "Cakupan Materi", value: "3 Pilar Produk", desc: "Existing, Dev, & Ekspansi" },
    { label: "Format Pelatihan", value: "Dual-Track", desc: "Teori Teknis & Simulasi Praktik" },
    { label: "Tolok Ukur", value: "100% Lulus", desc: "Sertifikasi Internal Produk" }
  ],
  tracks: [
    {
      cadence: "Minggu Ganjil • Sesi 1",
      title: "Technical Product Mastery & Positioning",
      focus: "Penguasaan Spesifikasi Teknis, Fitur Unggulan & SLA Produk",
      curriculum: [
        "Bedah 8 Existing Product: arsitektur GPON OLT/ONT, standar kabel ADSS/dropwire, & ACS.",
        "Arsitektur 3 Produk Pengembangan: ICT Solution, Data Center Tier-3, & Oxygen Signage.",
        "Diferensiasi lini Ekspansi: White Label (IFP, PC AIO, Videotron), Software, Cyber, & AI.",
        "Monetisasi Solusi IoT: Dashboard, Middleware, & Automasi Industri berbasis SaaS/MRR."
      ]
    },
    {
      cadence: "Minggu Genap • Sesi 2",
      title: "Commercial Application, Pitching & Roleplay",
      focus: "Simulasi Presentasi Nilai Bisnis, Negosiasi C-Level & Objection Handling",
      curriculum: [
        "Simulasi pitch proposal nilai bisnis (Value Proposition) di hadapan Direksi/C-Level.",
        "Teknik Objection Handling: atasi perang harga komoditas dengan bukti SLA < 2 jam.",
        "Penyusunan paket bundel 3 Pilar Produk untuk menjaga Gross Margin ≥ 35%.",
        "Bedah kasus nyata lapangan (Won Case & Lost Case) dari repositori Bank Case DMS."
      ]
    }
  ] as KnowledgeTrack[],
  knowledgePillars: [
    {
      title: "Sales Battle Cards",
      desc: "Lembar panduan komparasi keunggulan DMS vs kompetitor untuk seluruh produk."
    },
    {
      title: "Industry Playbooks",
      desc: "Skenario penetrasi Land & Expand di 6 vertikal industri sasaran B2B."
    },
    {
      title: "C-Level Mentoring",
      desc: "Supervisi dan pendampingan langsung penutupan transaksi oleh Harry Gultom."
    },
    {
      title: "Objection Guide",
      desc: "Panduan baku menjawab keraguan teknis, reputasi brand, dan persaingan harga."
    }
  ] as KnowledgePillar[]
};

export const slideDataEn = {
  sectionBadge: "Part 4 • Team & Sales Management",
  title: "Product Knowledge Sharing: Bi-Weekly Enablement Curriculum",
  subtitle: "Empowering Sales Engineering Excellence via 3-Pillar Product Mastery and Real-World Commercial Simulation",
  summaryMetrics: [
    { label: "Cadence", value: "Bi-Weekly", desc: "Continuous Enablement Track" },
    { label: "Portfolio Scope", value: "3 Pillars", desc: "Existing, Dev & Expansion" },
    { label: "Structure", value: "Dual-Track", desc: "Technical Theory & Live Roleplay" },
    { label: "Standard", value: "100% Pass", desc: "Internal Certification Benchmark" }
  ],
  tracks: [
    {
      cadence: "Odd Weeks • Track 1",
      title: "Technical Product Mastery & Positioning",
      focus: "Deep Specifications, Competitive Differentiators & Delivery SLAs",
      curriculum: [
        "Mastery of 8 Existing Products: GPON OLT/ONT, ADSS/dropwire, and ACS provisioning.",
        "3 Development lines: turnkey ICT Solutions, Tier-3 Data Center, and Oxygen Signage.",
        "Expansion portfolio: White Label hardware (IFP, AIO, Videotron), Software, Cyber, & AI.",
        "IoT Solution monetization: Dashboards & Middleware under recurring SaaS/MRR."
      ]
    },
    {
      cadence: "Even Weeks • Track 2",
      title: "Commercial Application, Pitching & Roleplay",
      focus: "Executive Value Storytelling, C-Level Negotiation & Objection Handling",
      curriculum: [
        "Executive business case simulations delivering value pitches to C-Level buyers.",
        "Objection handling: defeating commodity pricing with proven sub-2-hour SLAs.",
        "Hands-on cross-pillar solution bundling maintaining Gross Margin ≥ 35%.",
        "Dissecting field case studies directly from the DMS Won/Lost Bank Case repository."
      ]
    }
  ] as KnowledgeTrack[],
  knowledgePillars: [
    {
      title: "Sales Battle Cards",
      desc: "One-page cheat sheets summarizing competitive edges against market incumbents."
    },
    {
      title: "Industry Playbooks",
      desc: "Step-by-step Land & Expand blueprints tailored to 6 B2B vertical segments."
    },
    {
      title: "C-Level Mentoring",
      desc: "Direct deal accompaniment and strategic negotiation guidance by Harry Gultom."
    },
    {
      title: "Objection Guide",
      desc: "Standardized scripts addressing technical doubts, brand credibility, and pricing."
    }
  ] as KnowledgePillar[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 27,
  folder: "27",
  sectionId: 3,
  navTitle: {
    in: "Product Knowledge",
    en: "Product Knowledge"
  },
  headerTitle: {
    in: "Product Knowledge Sharing: Kurikulum Pembinaan 2-Mingguan",
    en: "Product Knowledge Sharing: Bi-Weekly Enablement Curriculum"
  },
  category: {
    in: "Team",
    en: "Team"
  },
  section: {
    in: "Team",
    en: "Team"
  }
};
