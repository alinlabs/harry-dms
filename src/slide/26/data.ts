import { useLanguage } from '@/contexts/LanguageContext';

export interface FunnelStage {
  stage: string;
  name: string;
  probability: string;
  evidenceRequirement: string;
}

export interface ForecastCriterion {
  number: number;
  criterion: string;
  description: string;
  verificationMethod: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Pipeline & Forecast: 10 Kriteria Bukti Objektif & Funnel Validasi",
  subtitle: "Menghapus Estimasi Subjektif Melalui 10 Kriteria Bukti Terverifikasi dan 6 Tahapan Funnel Penjualan Berdisiplin",
  summaryStats: [
    { label: "Kriteria Validasi", value: "10 Kriteria", desc: "Bukti Objektif Wajib Terpenuhi" },
    { label: "Tahapan Funnel", value: "6 Tahap", desc: "Dari Prospek hingga Closed Won" },
    { label: "Coverage Ratio", value: "Min. 3x", desc: "Kecukupan Pipeline terhadap Kuota" },
    { label: "Toleransi Forecast", value: "< 10%", desc: "Batas Deviasi Prediksi Closing" }
  ],
  funnelStages: [
    {
      stage: "Stage 1",
      name: "Lead & Discovery",
      probability: "10%",
      evidenceRequirement: "Klien terverifikasi di 6 vertikal dan kebutuhan awal TIK terkonfirmasi."
    },
    {
      stage: "Stage 2",
      name: "APN & Technical PoC",
      probability: "25%",
      evidenceRequirement: "Dokumen APN disetujui Sales Manager & uji teknis/PoC dijadwalkan."
    },
    {
      stage: "Stage 3",
      name: "Solution Proposal (SPH)",
      probability: "50%",
      evidenceRequirement: "SPH resmi multi-pilar diterbitkan dengan perhitungan Gross Margin ≥ 35%."
    },
    {
      stage: "Stage 4",
      name: "Shortlist & C-Level Review",
      probability: "75%",
      evidenceRequirement: "DMS masuk 2 besar tender dan presentasi C-Level bersama Harry Gultom tuntas."
    },
    {
      stage: "Stage 5",
      name: "Procurement & Contract",
      probability: "90%",
      evidenceRequirement: "Negosiasi komersial selesai, draft kontrak/SLA disetujui legal & procurement."
    },
    {
      stage: "Stage 6",
      name: "Closed Won & PO Issued",
      probability: "100%",
      evidenceRequirement: "Surat Perintah Kerja (SPK) / Purchase Order resmi terbit & rekap Bank Case H+3."
    }
  ] as FunnelStage[],
  criteria: [
    {
      number: 1,
      criterion: "Identitas Klien & Sektor Terverifikasi",
      description: "Nama perusahaan, skala bisnis, dan vertikal industri jelas serta tervalidasi di CRM.",
      verificationMethod: "Profil Akun CRM & Legalitas"
    },
    {
      number: 2,
      criterion: "Pain Points & Kebutuhan Riil Spesifik",
      description: "Masalah teknis atau operasional klien teridentifikasi secara tertulis dalam dokumen APN.",
      verificationMethod: "Audit APN Blok 1"
    },
    {
      number: 3,
      criterion: "Kesesuaian Solusi 3 Pilar Produk",
      description: "Portofolio yang diajukan menjawab kebutuhan nyata (Existing, Pengembangan, atau Ekspansi).",
      verificationMethod: "Mapping Solusi APN"
    },
    {
      number: 4,
      criterion: "Kepastian Alokasi Anggaran (Budget)",
      description: "Klien mengonfirmasi keberadaan pos anggaran CAPEX atau OPEX yang dialokasikan.",
      verificationMethod: "Verifikasi Pengadaan Klien"
    },
    {
      number: 5,
      criterion: "Peta Stakeholder & DMU Lengkap",
      description: "Akses komunikasi terjalin dengan Economic Buyer, Technical Buyer, dan User Buyer.",
      verificationMethod: "Peta Stakeholder APN"
    },
    {
      number: 6,
      criterion: "Proposal Komersial Resmi (SPH)",
      description: "Dokumen penawaran harga resmi dengan rincian spesifikasi dan SLA telah diterima klien.",
      verificationMethod: "Surat Penawaran Harga (SPH)"
    },
    {
      number: 7,
      criterion: "Validasi Gross Margin (≥ 35%)",
      description: "Perhitungan profitabilitas kotor diverifikasi langsung oleh Sales Manager.",
      verificationMethod: "Simulasi P&L Deal"
    },
    {
      number: 8,
      criterion: "Jadwal Closing yang Disepakati",
      description: "Linimasa pengadaan dan batas waktu keputusan disetujui bersama oleh kedua belah pihak.",
      verificationMethod: "Timeline Jadwal Pengadaan"
    },
    {
      number: 9,
      criterion: "Pemetaan Kompetitor & Diferensiasi",
      description: "Identifikasi vendor petahana/kompetitor dan keunggulan pembeda DMS yang ditonjolkan.",
      verificationMethod: "Analisis Kompetitif APN"
    },
    {
      number: 10,
      criterion: "Rencana Aksi & Keterlibatan Leadership",
      description: "Langkah lanjutan terjadwal dengan PIC jelas serta supervisi penutupan oleh Harry Gultom.",
      verificationMethod: "Action Plan 90 Hari"
    }
  ] as ForecastCriterion[]
};

export const slideDataEn = {
  sectionBadge: "Part 4 • Team & Sales Management",
  title: "Pipeline & Forecast: 10 Objective Evidence Criteria & Funnel Rigor",
  subtitle: "Eliminating Guesswork via 10 Verified Objective Evidence Milestones and a Structured 6-Stage Commercial Funnel",
  summaryStats: [
    { label: "Validation Criteria", value: "10 Checkpoints", desc: "Mandatory Objective Evidence Rules" },
    { label: "Funnel Stages", value: "6 Stages", desc: "From Lead Discovery to Closed Won" },
    { label: "Coverage Ratio", value: "Min. 3x", desc: "Healthy Pipeline-to-Quota Ratio" },
    { label: "Forecast Tolerance", value: "< 10%", desc: "Maximum Predictable Variance" }
  ],
  funnelStages: [
    {
      stage: "Stage 1",
      name: "Lead & Discovery",
      probability: "10%",
      evidenceRequirement: "Enterprise logo verified within 6 target verticals with confirmed initial ICT requirements."
    },
    {
      stage: "Stage 2",
      name: "APN & Technical PoC",
      probability: "25%",
      evidenceRequirement: "Account Planning Note approved by Sales Manager & technical proof-of-concept scheduled."
    },
    {
      stage: "Stage 3",
      name: "Solution Proposal (SPH)",
      probability: "50%",
      evidenceRequirement: "Multi-pillar formal quote issued maintaining verified Gross Margin ≥ 35%."
    },
    {
      stage: "Stage 4",
      name: "Shortlist & C-Level Review",
      probability: "75%",
      evidenceRequirement: "DMS shortlisted in top 2 bidders and C-Level presentation completed with Harry Gultom."
    },
    {
      stage: "Stage 5",
      name: "Procurement & Contract",
      probability: "90%",
      evidenceRequirement: "Commercial negotiation finalized, master service agreement and SLA approved by legal."
    },
    {
      stage: "Stage 6",
      name: "Closed Won & PO Issued",
      probability: "100%",
      evidenceRequirement: "Binding Purchase Order/Contract received and logged into DMS Bank Case within D+3."
    }
  ] as FunnelStage[],
  criteria: [
    {
      number: 1,
      criterion: "Verified Account & Industry Profile",
      description: "Company identity, operational scale, and vertical clearly registered in CRM.",
      verificationMethod: "CRM Account Profile"
    },
    {
      number: 2,
      criterion: "Specific Documented Client Pain Points",
      description: "Operational or network bottlenecks validated in writing within the APN.",
      verificationMethod: "APN Section 1 Audit"
    },
    {
      number: 3,
      criterion: "3-Pillar Solution Architecture Fit",
      description: "Proposed solutions genuinely match needs (Existing, Development, or Expansion).",
      verificationMethod: "APN Solution Matrix"
    },
    {
      number: 4,
      criterion: "Confirmed Budgetary Allocation",
      description: "Client explicitly confirms active CAPEX or OPEX procurement budget.",
      verificationMethod: "Client Budget Confirmation"
    },
    {
      number: 5,
      criterion: "Decision Making Unit (DMU) Access",
      description: "Active engagement with Economic, Technical, and User Buyers.",
      verificationMethod: "APN DMU Stakeholder Map"
    },
    {
      number: 6,
      criterion: "Formal Commercial Proposal (SPH)",
      description: "Official quotation with transparent pricing, delivery, and SLA submitted.",
      verificationMethod: "Formal Proposal Issued"
    },
    {
      number: 7,
      criterion: "Gross Margin Validation (≥ 35%)",
      description: "Underlying unit economics and gross profit validated by Sales Manager.",
      verificationMethod: "Deal Margin P&L Model"
    },
    {
      number: 8,
      criterion: "Mutual Closing Timeline & Milestones",
      description: "Agreed evaluation, committee review, and purchase decision calendar.",
      verificationMethod: "Mutual Procurement Schedule"
    },
    {
      number: 9,
      criterion: "Competitor Strategy & Value Defense",
      description: "Incumbents mapped out with DMS value differentiation clearly articulated.",
      verificationMethod: "Competitive Battle Plan"
    },
    {
      number: 10,
      criterion: "Leadership Accompaniment & Action Plan",
      description: "Clear next steps assigned with executive deal closing support from Harry Gultom.",
      verificationMethod: "90-Day Account Roadmap"
    }
  ] as ForecastCriterion[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 26,
  folder: "26",
  sectionId: 3,
  navTitle: {
    in: "Pipeline & Forecast",
    en: "Pipeline & Forecast"
  },
  headerTitle: {
    in: "Pipeline & Forecast: 10 Kriteria Bukti Objektif & Funnel Validasi",
    en: "Pipeline & Forecast: 10 Objective Evidence Criteria & Funnel Rigor"
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
