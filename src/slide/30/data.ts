import { useLanguage } from '@/contexts/LanguageContext';

export interface BankCaseRule {
  id: string;
  category: string;
  SLA: string;
  title: string;
  desc: string;
  mandatoryFocus: string;
}

export interface BankCaseAnatomy {
  step: string;
  name: string;
  detail: string;
}

export interface BankCaseObjective {
  title: string;
  metric: string;
  desc: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Regulasi & Sistem Bank Case (Rekap Proyek Berhasil & Gagal)",
  subtitle: "Kewajiban Dokumentasi Pasca-Tender bagi Seluruh Sales Sebagai Institutional Memory dan Pembelajaran Tim",
  summaryStats: [
    { label: "Cakupan Rekapitulasi", value: "100% Proyek B2B", desc: "Wajib untuk proyek Berhasil & Gagal" },
    { label: "Batas Waktu Input", value: "Maksimal H+3", desc: "Pasca keputusan PO / pengumuman tender" },
    { label: "Struktur Dokumen", value: "6 Unsur Baku", desc: "Dari profil produk hingga akar masalah" },
    { label: "Forum Evaluasi", value: "2 Minggu Sekali", desc: "Dibedah di sesi Product Knowledge" }
  ],
  regulationsTitle: "3 Regulasi Utama Kepatuhan Bank Case Sales",
  regulations: [
    {
      id: "won-case-rule",
      category: "Proyek Berhasil (Won Case)",
      SLA: "Wajib H+3 Pasca PO",
      title: "Standarisasi Formula Kemenangan Multi-Pilar",
      desc: "Dokumentasikan kombinasi 3 Pilar Produk yang menang, argumen pemikat C-Level, dan struktur margin yang dicapai.",
      mandatoryFocus: "Output: Cetak biru kemenangan (Winning Playbook) untuk akun sejenis di 6 vertikal industri."
    },
    {
      id: "lost-case-rule",
      category: "Proyek Gagal / Kalah (Lost Case)",
      SLA: "Wajib H+3 Pasca Pengumuman",
      title: "Audit Akar Masalah Tanpa Budaya Menyalahkan",
      desc: "Audit objektif penyebab kekalahan: perang harga komoditas, terlambat masuk tender, atau opsi White Label/IP belum ada.",
      mandatoryFocus: "Output: Rumusan tindakan korektif agar tim tidak mengulangi kesalahan yang sama."
    },
    {
      id: "governance-rule",
      category: "Kepatuhan CRM & Insentif",
      SLA: "Audit Bulanan",
      title: "Integrasi Langsung dengan KPI & Komisi",
      desc: "Kelengkapan Bank Case di CRM menjadi syarat kepatuhan sales (KPI 5%) dan bahan wajib evaluasi mingguan.",
      mandatoryFocus: "Output: 0% proyek menguap tanpa jejak pembelajaran (Zero Knowledge Loss)."
    }
  ] as BankCaseRule[],
  anatomyTitle: "6 Unsur Wajib dalam Rekapan Bank Case",
  anatomyItems: [
    {
      step: "01",
      name: "Identitas Proyek & Pilar Produk",
      detail: "Kode kasus, vertikal industri, nilai penawaran, % Gross Margin, dan rincian produk (Existing / Pengembangan / Ekspansi)."
    },
    {
      step: "02",
      name: "Kebutuhan & Ekspektasi Klien",
      detail: "Masalah utama yang ingin diselesaikan klien serta kriteria penilaian utama dari Economic & Technical Buyer."
    },
    {
      step: "03",
      name: "Peta Kompetitor & Harga Lawan",
      detail: "Siapa kompetitor yang dihadapi (Tier 1 / 2 / 3), manuver harga mereka, serta paket produk yang ditawarkan lawan."
    },
    {
      step: "04",
      name: "Evaluasi Arsitektur Solusi DMS",
      detail: "Respons klien terhadap proposal DMS: keunggulan mana yang diapresiasi dan bagian mana yang dinilai kurang kompetitif."
    },
    {
      step: "05",
      name: "Akar Masalah / Faktor Penentu",
      detail: "Bedah jujur faktor kunci kemenangan (Winning Factor) atau titik kritis penyebab kekalahan (Failure Trigger)."
    },
    {
      step: "06",
      name: "Lesson Learned & Koreksi Taktik",
      detail: "Perbaikan konkret pada strategi bundling, skema komersial (OPEX/SaaS), atau pembaruan Sales Battle Card."
    }
  ] as BankCaseAnatomy[],
  objectivesTitle: "Tujuan Strategis Bank Case bagi DMS",
  objectives: [
    {
      title: "Bahan Utama Product Knowledge",
      metric: "Track B • 2-Mingguan",
      desc: "Studi kasus nyata pada pelatihan 2-mingguan agar seluruh tim belajar dari situasi riil."
    },
    {
      title: "Mempertajam Sales Battle Card",
      metric: "Anti-Price War",
      desc: "Ubah alasan kekalahan masa lalu menjadi argumen penangkal keberatan (objection handling) teruji."
    },
    {
      title: "Akselerasi Sales Baru (Hunter)",
      metric: "Onboarding 2x Cepat",
      desc: "Bantu sales baru memahami pola kemenangan dan jebakan pasar tanpa trial-and-error."
    },
    {
      title: "Kalibrasi Fokus 3 Pilar Produk",
      metric: "Margin > 42%",
      desc: "Bukti empiris bahwa bundel Ekspansi Produk Baru menghasilkan win-rate dan margin lebih tinggi."
    }
  ] as BankCaseObjective[]
};

export const slideDataEn = {
  sectionBadge: "Part 4 • Team & Sales Management",
  title: "Bank Case Regulation & System (Win/Loss Project Repository)",
  subtitle: "Mandatory Post-Deal Documentation Across All Sales Reps Serving as Institutional Memory and Team Enablement",
  summaryStats: [
    { label: "Repository Scope", value: "100% B2B Deals", desc: "Mandatory for both Won & Lost deals" },
    { label: "Submission SLA", value: "Max D+3", desc: "Post PO issuance or tender outcome" },
    { label: "Standard Structure", value: "6 Core Elements", desc: "From product mix to root-cause analysis" },
    { label: "Review Forum", value: "Bi-Weekly", desc: "Dissected in Product Knowledge sessions" }
  ],
  regulationsTitle: "3 Core Bank Case Compliance Regulations",
  regulations: [
    {
      id: "won-case-rule",
      category: "Successful Deals (Won Case)",
      SLA: "Mandatory D+3 Post-PO",
      title: "Standardizing Multi-Pillar Winning Formulas",
      desc: "Archive every won deal: the exact 3-Pillar mix, C-Level winning arguments, and realized gross margins.",
      mandatoryFocus: "Output: Replicable Winning Playbook for similar accounts across 6 verticals."
    },
    {
      id: "lost-case-rule",
      category: "Failed Tenders (Lost Case)",
      SLA: "Mandatory D+3 Post-Result",
      title: "No-Blame Root Cause Post-Mortem Audit",
      desc: "Audit deal loss reasons: commodity price trap, late RFP entry, or lack of White Label/IP alternatives.",
      mandatoryFocus: "Output: Concrete corrective tactics preventing repeated commercial mistakes."
    },
    {
      id: "governance-rule",
      category: "CRM & Incentive Governance",
      SLA: "Monthly Audit",
      title: "Direct Integration with KPIs & Commission Release",
      desc: "CRM Bank Case logging is tied to the 5% CRM KPI weight and reviewed weekly by the Sales Manager.",
      mandatoryFocus: "Output: Zero lost institutional knowledge across the sales organization."
    }
  ] as BankCaseRule[],
  anatomyTitle: "6 Mandatory Elements of a Bank Case Record",
  anatomyItems: [
    {
      step: "01",
      name: "Project Identity & Product Pillars",
      detail: "Case ID, industry vertical, deal value, % Gross Margin, and product mix (Existing / Development / Expansion)."
    },
    {
      step: "02",
      name: "Client Needs & Buyer Criteria",
      detail: "Core business pain points and primary evaluation metrics of the Economic and Technical Buyers."
    },
    {
      step: "03",
      name: "Competitor Map & Pricing",
      detail: "Competing vendors (Tier 1 / 2 / 3), their pricing maneuvers, and competing solution architecture."
    },
    {
      step: "04",
      name: "DMS Solution Evaluation",
      detail: "Client feedback on DMS's proposal: which strengths resonated and which areas lacked competitiveness."
    },
    {
      step: "05",
      name: "Root Cause / Decisive Factor",
      detail: "Candid breakdown of the decisive Winning Factor or the specific Failure Trigger."
    },
    {
      step: "06",
      name: "Lesson Learned & Playbook Update",
      detail: "Actionable adjustments to product bundling, OPEX/SaaS commercial terms, or Sales Battle Cards."
    }
  ] as BankCaseAnatomy[],
  objectivesTitle: "Strategic Objectives of the Bank Case System",
  objectives: [
    {
      title: "Fuels Product Knowledge",
      metric: "Track B • Bi-Weekly",
      desc: "Provides real-world field cases for bi-weekly team training so reps learn from actual market outcomes."
    },
    {
      title: "Sharpens Sales Battle Cards",
      metric: "Anti-Price War",
      desc: "Converts past tender objections into battle-tested counter-arguments for field negotiations."
    },
    {
      title: "Accelerates New Hire Ramp-Up",
      metric: "2x Faster Onboarding",
      desc: "Enables new B2B Hunters to grasp winning patterns and market traps without painful trial-and-error."
    },
    {
      title: "Validates 3-Pillar Strategy",
      metric: "> 42% Blended Margin",
      desc: "Empirical proof that New Product Expansion bundles deliver superior win-rates and margins."
    }
  ] as BankCaseObjective[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 30,
  "folder": "30",
  "sectionId": 3,
  "navTitle": {
    "in": "Regulasi Bank Case",
    "en": "Bank Case Regulation"
  },
  "headerTitle": {
    "in": "Regulasi Bank Case",
    "en": "Bank Case Regulation"
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
