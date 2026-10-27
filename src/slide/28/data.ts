import { useLanguage } from '@/contexts/LanguageContext';

export interface APNRoleRule {
  id: string;
  role: string;
  personnel: string;
  mandateTitle: string;
  regulation: string;
  deliverable: string;
}

export interface APNElement {
  number: number;
  title: string;
  scope: string;
  desc: string;
  outputMetric: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Regulasi & Standar APN (Account Planning Note)",
  subtitle: "Menetapkan Regulasi Wajib Penyusunan APN Sebelum Pitching untuk Memaksimalkan Penjualan 3 Pilar Produk dan Mencegah Kunjungan Tanpa Arah",
  summaryStats: [
    { label: "Kewajiban Regulasi", value: "100% Akun B2B", desc: "Wajib APN Sebelum Proposal / SPH" },
    { label: "Struktur Dokumen", value: "7 Unsur Wajib", desc: "Standar Anatomi Pemetaan Akun" },
    { label: "Cakupan Portofolio", value: "3 Pilar Produk", desc: "Existing, Dev & Ekspansi" },
    { label: "Siklus Kalibrasi", value: "Review Mingguan", desc: "Evaluasi Bersama Sales Manager" }
  ],
  leftPanelTitle: "Regulasi & Pembagian Peran 6 Personel dalam APN",
  roleRules: [
    {
      id: "mkt",
      role: "Marketing Specialist",
      personnel: "1 Personel",
      mandateTitle: "Pre-APN Intelligence & Riset Akun Awal",
      regulation: "Riset profil industri, skala fasilitas, dan alokasi capex sebelum serah terima MQL ke tim sales.",
      deliverable: "Dossier Profil Perusahaan & Skala Capex"
    },
    {
      id: "existing",
      role: "Sales Existing (Account Specialist)",
      personnel: "3 Personel",
      mandateTitle: "Audit Akun Aktif & Cross-Selling 3 Pilar",
      regulation: "Wajib APN aktif di akun berjalan guna petakan upsell dari kabel/OLT ke ICT, Signage, & Data Center.",
      deliverable: "Peta Akun Aktif & Rencana Upsell Tahunan"
    },
    {
      id: "hunter",
      role: "Sales New (B2B Hunter)",
      personnel: "1 Personel",
      mandateTitle: "Penetrasi Akun Baru (New Logo Acquisition)",
      regulation: "Dilarang kirim SPH tanpa APN lengkap yang memetakan DMU dan mengutamakan White Label & Software/AI.",
      deliverable: "APN Terverifikasi Sebelum Tahap SPH/Tender"
    },
    {
      id: "manager",
      role: "Sales Manager (Harry Gultom)",
      personnel: "Leadership",
      mandateTitle: "Audit Kualitas, Validasi Margin & C-Level Closing",
      regulation: "Audit validitas APN, tegakkan Gross Margin ≥ 35%, dan pimpin penetrasi langsung ke C-Level.",
      deliverable: "Approval APN Resmi & Supervisi C-Level"
    }
  ] as APNRoleRule[],
  rightPanelTitle: "7 Unsur Wajib di Dalam Dokumen APN PT Digital Multi Sinergy",
  apnElements: [
    {
      number: 1,
      title: "Profil Akun & Skala Bisnis",
      scope: "Legalitas & Fasilitas",
      desc: "Identitas korporasi, vertikal industri, jumlah cabang, dan estimasi anggaran IT tahunan.",
      outputMetric: "Kapasitas & Alokasi Anggaran"
    },
    {
      number: 2,
      title: "Audit Infrastruktur & Pain Points",
      scope: "Kondisi Eksisting",
      desc: "Kondisi jaringan eksisting, vendor petahana, dan masalah kritis (MTTR, biaya, vendor terpisah).",
      outputMetric: "Akar Masalah Operasional Klien"
    },
    {
      number: 3,
      title: "Peta Stakeholder (DMU Mapping)",
      scope: "Economic, Tech & User",
      desc: "Pemetaan Economic Buyer (CFO), Technical Buyer (CIO), dan User Buyer (Operations).",
      outputMetric: "Akses Kontak Pengambil Keputusan"
    },
    {
      number: 4,
      title: "Matriks Solusi 3 Pilar Produk",
      scope: "Land, Develop & Expand",
      desc: "Strategi pembuka (Existing FTTH), eskalasi kontrak (Pengembangan), dan pengunci margin (Software/AI).",
      outputMetric: "Sinergi 3 Pilar Produk DMS"
    },
    {
      number: 5,
      title: "Analisis Kompetitor & Diferensiasi",
      scope: "Komparasi Lawan",
      desc: "Pemetaan vendor lawan dan strategi keunggulan DMS (SLA < 2 jam, White Label, single contact).",
      outputMetric: "Taktik Mengalahkan Petahana"
    },
    {
      number: 6,
      title: "Proyeksi Nilai Kontrak & Margin",
      scope: "Finansial & P&L",
      desc: "Target omzet (One-Time vs MRR) dengan komitmen batas profitabilitas Gross Margin ≥ 35%.",
      outputMetric: "Target Omzet & Gross Margin ≥ 35%"
    },
    {
      number: 7,
      title: "Rencana Aksi 90 Hari & Kalender",
      scope: "Eksekusi Berbatas Waktu",
      desc: "Linimasa mingguan, PIC penanggung jawab, dan jadwal pendampingan C-Level oleh Sales Manager.",
      outputMetric: "Milestones Jelas & PIC Terikat"
    }
  ] as APNElement[],
  purposeBanner: "APN mentransformasi tim dari penjual komoditas reaktif menjadi penasihat strategis B2B yang mengekstraksi potensi 3 Pilar Produk di setiap akun."
};

export const slideDataEn = {
  sectionBadge: "Part 4 • Team & Sales Management",
  title: "APN Governance & Standard Framework",
  subtitle: "Establishing Mandatory Account Planning Notes (APN) Before Commercial Pitching to Maximize 3-Pillar Synergy and Prevent Aimless Sales Visits",
  summaryStats: [
    { label: "Governance Mandate", value: "100% B2B Accounts", desc: "Mandatory APN Before Formal SPH" },
    { label: "Document Anatomy", value: "7 Mandatory Elements", desc: "Standardized Account Blueprint" },
    { label: "Portfolio Scope", value: "3 Product Pillars", desc: "Existing, Dev & Expansion" },
    { label: "Calibration Cycle", value: "Weekly Calibration", desc: "Review with Sales Manager" }
  ],
  leftPanelTitle: "6-Personnel Team Roles & Governance in APN",
  roleRules: [
    {
      id: "mkt",
      role: "Marketing Specialist",
      personnel: "1 Personnel",
      mandateTitle: "Pre-APN Intelligence & Early Account Research",
      regulation: "Synthesize industry profile, facility scale, and capex signals prior to handing MQLs to sales.",
      deliverable: "Company Profile Dossier & Scale Audit"
    },
    {
      id: "existing",
      role: "Sales Existing (Account Specialist)",
      personnel: "3 Personnel",
      mandateTitle: "Active Account Audit & 3-Pillar Cross-Selling",
      regulation: "Maintain active APNs across accounts to map upsell paths from fiber/OLT to ICT, Signage, & DC.",
      deliverable: "Active Account Map & Annual Upsell Plan"
    },
    {
      id: "hunter",
      role: "Sales New (B2B Hunter)",
      personnel: "1 Personnel",
      mandateTitle: "New Logo Conquest & Enterprise Expansion",
      regulation: "No proposal issuance without an approved APN mapping DMUs and leading with White Label & Software/AI.",
      deliverable: "Verified APN Before Quotation/Tender"
    },
    {
      id: "manager",
      role: "Sales Manager (Harry Gultom)",
      personnel: "Leadership",
      mandateTitle: "Quality Audit, Margin Gatekeeper & C-Level Closing",
      regulation: "Audit APN rigor, enforce ≥ 35% Gross Profit hurdle rate, and lead executive C-Level deal negotiations.",
      deliverable: "Formal APN Sign-off & C-Level Closing"
    }
  ] as APNRoleRule[],
  rightPanelTitle: "7 Mandatory Building Blocks of the DMS APN Document",
  apnElements: [
    {
      number: 1,
      title: "Account Profile & Commercial Scale",
      scope: "Legal & Facility Audit",
      desc: "Corporate identity, industry segment, multi-branch footprint, and estimated annual IT capex.",
      outputMetric: "Commercial Capacity & Budget Scope"
    },
    {
      number: 2,
      title: "Current Infrastructure & Core Pain Points",
      scope: "Existing Operations",
      desc: "Incumbent vendor contracts, network setup, and operational pain points (MTTR, cost, siloes).",
      outputMetric: "Operational Root Causes"
    },
    {
      number: 3,
      title: "Decision Making Unit (DMU Mapping)",
      scope: "Economic, Tech & User",
      desc: "Mapping Economic Buyers (CFO), Technical Buyers (CIO), and User Buyers (Operations).",
      outputMetric: "Decision Maker Access Channels"
    },
    {
      number: 4,
      title: "3-Pillar Solution Matrix",
      scope: "Land, Develop & Expand",
      desc: "Door opener (Existing FTTH), contract expansion (ICT/Signage), and recurring lock-in (Software/AI).",
      outputMetric: "DMS 3-Pillar Solution Synergy"
    },
    {
      number: 5,
      title: "Competitive Analysis & Differentiation Edge",
      scope: "Rival Comparison",
      desc: "Competing bidders and DMS counter-measures (sub-2-hour SLA, White Label branding, single contact).",
      outputMetric: "Incumbent Displacement Tactic"
    },
    {
      number: 6,
      title: "Contract Valuation & Gross Margin Model",
      scope: "Financial & Deal P&L",
      desc: "Forecasting transaction mix (One-Time capex vs MRR/ARR) adhering to Gross Margins ≥ 35%.",
      outputMetric: "Revenue Target & Gross Margin ≥ 35%"
    },
    {
      number: 7,
      title: "90-Day Timebound Execution Action Plan",
      scope: "Timebound Cadence",
      desc: "Weekly milestones, named PIC responsibilities, and C-Level accompaniment by Harry Gultom.",
      outputMetric: "Clear Milestones & Accountable PICs"
    }
  ] as APNElement[],
  purposeBanner: "APN elevates sales from commodity vendors to consultative B2B advisors unlocking the full potential of the 3 Product Pillars in every account."
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 28,
  folder: "28",
  sectionId: 3,
  navTitle: {
    in: "Regulasi & Kerangka APN",
    en: "APN Regulation & Framework"
  },
  headerTitle: {
    in: "Regulasi & Standar APN (Account Planning Note)",
    en: "APN Governance & Standard Framework"
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
