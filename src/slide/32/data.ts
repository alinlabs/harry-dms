import { useLanguage } from '@/contexts/LanguageContext';
export interface RemunerationItem {
  id: string;
  component: string;
  nature: string;
  desc: string;
  highlight: string;
}

export interface ReimbursementRule {
  id: string;
  category: string;
  policy: string;
  condition: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Remunerasi & Reimbursement",
  subtitle: "Struktur Kompensasi Berbasis Laba Kotor (Gross Profit) dan Tata Kelola Biaya Operasional Penjualan Terkendali",
  summaryStats: [
    { label: "Skema Komisi", value: "GP-Linked", desc: "Berbasis realisasi laba kotor" },
    { label: "Tier Komisi", value: "3 Tingkat", desc: "Premium, Standard, & Critical" },
    { label: "Akselerator", value: "1.25x – 1.5x", desc: "Bonus pencapaian kuota >100%" },
    { label: "Audit Biaya", value: "SOP H+7", desc: "Pre-approval & nota transaksi sah" }
  ],
  remunerationComponents: [
    {
      id: "base-salary",
      component: "Gaji Pokok (Base Salary)",
      nature: "Tetap",
      desc: "Kompensasi dasar bulanan kompetitif sesuai grading jabatan, pengalaman B2B, dan kompetensi teknis.",
      highlight: "Memberikan stabilitas finansial bagi operasional sales"
    },
    {
      id: "gp-commission",
      component: "Komisi Penjualan Berbasis Margin Kotor (GP-Linked)",
      nature: "Komisi GP",
      desc: "Dihitung dari realisasi Gross Profit (bukan omzet) agar sales menjaga harga dan menolak diskon berlebih.",
      highlight: "3 Tier: Premium (>45% GP), Standard (30-45%), Critical"
    },
    {
      id: "accelerator",
      component: "Bonus Akselerator Triwulanan (Quarterly Accelerator)",
      nature: "Pencapaian",
      desc: "Pengali komisi (1.25x – 1.5x) saat pencapaian kuota kuartal melampaui 100%.",
      highlight: "Memacu percepatan closing deal di akhir periode kuartal"
    },
    {
      id: "annual-bonus",
      component: "Bonus Kinerja Tahunan (Annual Performance Bonus)",
      nature: "Tahunan",
      desc: "Apresiasi tahunan bagi kontribusi laba kotor tertinggi, retensi akun terbaik, dan disiplin CRM.",
      highlight: "Mengunci retensi talenta sales terbaik untuk jangka panjang"
    }
  ],
  reimbursementRules: [
    {
      id: "transport",
      category: "Transportasi & Operasional Meeting",
      policy: "Penggantian bensin, tol, dan parkir sesuai rute visit klien terverifikasi di CRM.",
      condition: "Wajib melampirkan log visit CRM & e-toll receipt"
    },
    {
      id: "entertainment",
      category: "Jamuan Klien (Client Entertainment)",
      policy: "Wajib pre-approval Sales Manager dengan plafon pagu berbasis potensi transaksi.",
      condition: "Wajib melampirkan struk resmi & daftar peserta meeting"
    },
    {
      id: "communication",
      category: "Komunikasi & Kuota Data",
      policy: "Tunjangan pulsa/internet bulanan sesuai tingkat mobilitas dan tanggung jawab akun.",
      condition: "Diberikan rutin bulanan sesuai tunjangan operasional"
    },
    {
      id: "governance",
      category: "Plafon & Batas Pengajuan (SLA H+7)",
      policy: "Klaim maksimal H+7 kerja setelah transaksi dengan bukti asli yang sah.",
      condition: "Pengeluaran tanpa pre-approval tidak dapat direimburse"
    }
  ],
  governanceMotto: "Sales didukung penuh dengan fasilitas operasional yang layak untuk memenangkan deal, sementara perusahaan terjamin dari pengeluaran tanpa otorisasi."
};

export const slideDataEn = {
  "sectionBadge": "Part 4 • Team & Sales Management",
  "title": "Remuneration & Operational Reimbursement Policy",
  "subtitle": "Gross Profit-Linked Incentive Compensation Structure Paired with Disciplined Operational Expense Governance",
  "summaryStats": [
    {
      "label": "Commission Model",
      "value": "GP-Linked",
      "desc": "Protecting profit margins"
    },
    {
      "label": "Target Margin",
      "value": "> 35% Blended",
      "desc": "Hardware & recurring fiber"
    },
    {
      "label": "Payout Cadence",
      "value": "Monthly",
      "desc": "Post customer cash collection"
    },
    {
      "label": "Reimbursement",
      "value": "Strict ROI",
      "desc": "Clear governance & receipts"
    }
  ],
  "remunerationComponents": [
    {
      "id": 1,
      "component": "Base Salary (Fixed Retainer)",
      "nature": "Fixed Monthly",
      "desc": "Competitive baseline salary ensuring financial security, reviewed annually based on KPI attainment.",
      "highlight": "Benchmarked against top-tier Jakarta telecommunications standards"
    },
    {
      "id": 2,
      "component": "Gross Profit Linked Commission",
      "nature": "Variable Monthly",
      "desc": "Paid directly on realized Gross Profit (GP) of closed deals, encouraging reps to protect profit margins.",
      "highlight": "Paid directly upon client's verified invoice payment (Cash-in-Bank)"
    },
    {
      "id": 3,
      "component": "Over-Achievement Accelerator Bonus",
      "nature": "Quarterly Accelerator",
      "desc": "Commission multiplier (1.25x to 1.5x) unlocked when a rep exceeds 100% of their quarterly quota target.",
      "highlight": "Incentivizes top performers to aggressively exceed baseline targets"
    },
    {
      "id": 4,
      "component": "Annual Commercial Super-Bonus",
      "nature": "Annual Lump-Sum",
      "desc": "Year-end profit-sharing bonus for highest gross profit contribution, strong retention, and CRM discipline.",
      "highlight": "Rewards long-term team retention and corporate alignment"
    }
  ],
  "reimbursementRules": [
    {
      "id": 1,
      "category": "Client Entertainment & Business Meals",
      "policy": "Pre-approved budget limits per meeting based on account potential and seniority.",
      "condition": "Mandatory meeting minutes, verified business cards, and official itemized tax receipts."
    },
    {
      "id": 2,
      "category": "Operational Transportation & Tolls",
      "policy": "Reimbursement for fuel, tolls, and taxis incurred during CRM-verified client site visits.",
      "condition": "GPS travel logs matching recorded CRM client meeting schedule."
    },
    {
      "id": 3,
      "category": "Technical Survey & Field Inspection",
      "policy": "Safety gear, building entry permits, and test consumables during site surveys.",
      "condition": "Submitted alongside signed Technical Site Survey Report (TSSR)."
    },
    {
      "id": 4,
      "category": "Tender Document & Legal Fees",
      "policy": "Tender bond administrative fees, legal notarizations, and official printings.",
      "condition": "Approved by Sales Manager with valid verified commercial tender registration numbers."
    }
  ],
  "governanceMotto": "Compensation Principle: Pay generously for profitable, collected commercial revenue; maintain zero tolerance for wasteful unverified operational expenses."
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 32,
  "folder": "32",
  "sectionId": 3,
  "navTitle": {
    "in": "Remunerasi Tim",
    "en": "Team Remuneration"
  },
  "headerTitle": {
    "in": "Remunerasi Tim",
    "en": "Team Remuneration"
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
