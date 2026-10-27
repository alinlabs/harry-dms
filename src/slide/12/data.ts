import { useLanguage } from '@/contexts/LanguageContext';

export interface Phase60 {
  id: number;
  period: string;
  monthLabel: string;
  theme: string;
  summary: string;
  deliverables: string[];
  kpiHighlight: string;
}

export const slideDataId = {
  title: "Roadmap 60 Hari (November – Desember 2026): Fondasi Akhir Tahun & Quick Wins",
  subtitle: "Rencana Aksi Fokus 2 Bulan Penutup Tahun 2026 untuk Mengamankan Arus Kas Existing Product & Mengunci Pipeline 2027",
  phases: [
    {
      id: 1,
      period: "Bulan 1 • November 2026 (Hari 1 – 30)",
      monthLabel: "November 2026",
      theme: "Audit 3 Pilar, Tata Kelola APN & Quick Wins Pipeline",
      summary: "Audit 8 Existing Product, validasi 3 lini Pengembangan, aktivasi APN & Bank Case, serta genjot repeat order cepat.",
      deliverables: [
        "Audit omzet, stok, dan margin 8 Existing Product FTTH & IT.",
        "Validasi kesiapan komersial 3 lini Pengembangan (ICT, Oxygen Signage, Data Center).",
        "Aktivasi regulasi APN, repositori Bank Case, dan penyelarasan formasi 6 personel tim.",
        "Eksekusi Quick Win bundling OLT/ONT, kabel ADSS, ACS, dan Smart Display untuk arus kas."
      ],
      kpiHighlight: "100% Audit 3 Pilar, Standar APN Aktif & Quick Win Pipeline November"
    },
    {
      id: 2,
      period: "Bulan 2 • Desember 2026 (Hari 31 – 60)",
      monthLabel: "Desember 2026",
      theme: "Closing Akhir Tahun, Penetrasi Pengembangan & Kunci Pipeline 2027",
      summary: "Serap budget flush akhir tahun korporasi via bundel Pengembangan & Ekspansi serta kunci pipeline Q1 2027.",
      deliverables: [
        "Penetrasi pengadaan akhir tahun IT Product & White Label (IFP, PC AIO, Videotron).",
        "Rilis proposal terpadu Oxygen Signage, ICT Solution, & Data Center pada 30+ akun prioritas.",
        "Pendampingan Sales Manager untuk negosiasi C-Level deal Custom Software & Cyber.",
        "Kunci backlog pipeline minimal 3x kuota menyambut Kuartal I 2027."
      ],
      kpiHighlight: "Target Penutup 2026 Tercapai & Backlog Pipeline Q1 2027 Terkunci"
    }
  ] as Phase60[]
};

export const slideDataEn = {
  "title": "60-Day Roadmap (November – December 2026): Year-End Foundation & Quick Wins",
  "subtitle": "Focused 2-Month Year-End Action Plan Securing Existing Product Cashflow & Locking in the 2027 Commercial Pipeline",
  "phases": [
    {
      "id": 1,
      "period": "Month 1 • November 2026 (Days 1 – 30)",
      "monthLabel": "November 2026",
      "theme": "3-Pillar Portfolio Audit, APN Governance & Pipeline Quick Wins",
      "summary": "Commercial audit of 8 Existing Products, readiness of 3 Development lines, mandatory APN rollout, and fast repeat orders.",
      "deliverables": [
        "Audit revenue, stock, and margins across 8 Existing FTTH & IT Products.",
        "Verify commercial readiness of 3 Development lines (ICT, Oxygen Signage, Data Center).",
        "Enforce APN governance, Bank Case repository, and 6-personnel team alignment.",
        "Execute Quick Win bundles (OLT/ONT, ADSS cable, ACS, Smart Display) for immediate cash velocity."
      ],
      "kpiHighlight": "100% 3-Pillar Audit, Active APN Governance & November Pipeline Wins"
    },
    {
      "id": 2,
      "period": "Month 2 • December 2026 (Days 31 – 60)",
      "monthLabel": "December 2026",
      "theme": "Year-End Closing Surge, Development Penetration & 2027 Pipeline Lock-In",
      "summary": "Capture year-end corporate budget flush via Development & Expansion bundles while securing Q1 2027 backlog.",
      "deliverables": [
        "Capture corporate year-end budget flush via IT Products & White Label hardware.",
        "Deploy APN-led proposals for Oxygen Signage, ICT Solutions, & Data Centers across 30+ accounts.",
        "Sales Manager direct C-Level accompaniment on Software & Cyber enterprise deals.",
        "Lock in 3x qualified pipeline backlog entering Quarter I 2027."
      ],
      "kpiHighlight": "Year-End 2026 Target Achieved & Q1 2027 Pipeline Locked"
    }
  ] as Phase60[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 12,
  "folder": "12",
  "sectionId": 1,
  "navTitle": {
    "in": "Roadmap 60 Hari",
    "en": "60-Day Roadmap"
  },
  "headerTitle": {
    "in": "Roadmap 60 Hari (Nov–Des 2026)",
    "en": "60-Day Roadmap (Nov–Dec 2026)"
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
