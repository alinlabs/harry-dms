import { useLanguage } from '@/contexts/LanguageContext';

export interface GrowthPillar {
  pillar: string;
  focus: string;
  description: string;
  actionItems: string[];
}

export const slideDataId = {
  title: "Strategi Go to Growth: Sinergi 3 Pilar Produk & Konsistensi Eksekusi",
  subtitle: "Menopang dan Mempercepat Pertumbuhan Marginal Perusahaan Melalui Transisi Menuju Ekspansi Produk & Recurring Revenue",
  growthPrinciple: "Prinsip Go to Growth 3 Pilar Produk",
  rationale: "Pertumbuhan marginal berkelanjutan diraih melalui orkestrasi 3 pilar: menjaga kas lewat 8 Existing Product, memperbesar kontrak via 3 Produk Pengembangan (ICT, Oxygen Signage, Data Center), serta menggenjot Ekspansi Produk Baru (White Label, Software, AI, IoT SaaS) guna menghindari perang harga komoditas.",
  strategicPillars: [
    {
      pillar: "Pilar 1: Fondasi Kas & Repeat Order (Existing)",
      focus: "Cashflow & Penetrasi Cepat",
      description: "Optimalisasi 8 produk eksisting siap jual sebagai mesin arus kas harian dan pembuka pintu klien B2B/ISP.",
      actionItems: [
        "Jaga volume repeat order kabel ADSS, dropwire, aksesoris, OLT, & ONT WiFi",
        "Kunci retensi operasional klien lewat integrasi Automatic Configuration Server (ACS)",
        "Bundling Smart Display & 4K STB untuk penetrasi korporat dan hospitality"
      ]
    },
    {
      pillar: "Pilar 2: Eskalasi Kontrak Terintegrasi (Pengembangan)",
      focus: "Upselling & Sinergi Grup",
      description: "Meningkatkan nilai rata-rata kontrak (ARPA) lewat 3 lini pengembangan bisnis bernilai tambah tinggi.",
      actionItems: [
        "Perluas proyek turnkey ICT Solution & Investment dengan kontrak tahunan",
        "Akselerasi penempatan Media Digital Signage (sinergi produk Oxygen)",
        "Cross-selling infrastruktur dan rak Data Center untuk beban kerja kritis klien"
      ]
    },
    {
      pillar: "Pilar 3: Akselerasi Margin Tinggi (Ekspansi & IP)",
      focus: "Margin Tinggi & Recurring SaaS",
      description: "Fokus pada inovasi produk baru dan software mandiri untuk keluar dari perang harga dan melipatgandakan laba.",
      actionItems: [
        "Penetrasi hardware IT & diferensiasi White Label (IFP, PC AIO, Videotron)",
        "Ekspansi Software Principal, Custom Software Dev, Cyber, & AI/Robotics",
        "Komersialisasi solusi IoT Dashboard & Automasi menuju model SaaS/MRR"
      ]
    }
  ],
  foundations: [
    {
      title: "Bebas Perang Harga",
      desc: "Beralih dari komoditas kabel lepas menuju solusi bernilai tambah: White Label, Software, & AI."
    },
    {
      title: "Transformasi ke MRR",
      desc: "Dorong recurring revenue lewat SaaS, lisensi tahunan, CMS Signage, & Managed Services."
    },
    {
      title: "Disiplin Pipeline",
      desc: "Validasi forecast dengan 10 kriteria bukti dan kawal Gross Margin setiap transaksi."
    },
    {
      title: "Sinergi 6 Personel",
      desc: "Kolaborasi duet Hunter, Account Manager, dan Marketing didukung infrastruktur grup."
    }
  ]
};

export const slideDataEn = {
  "title": "Go to Growth Strategy: 3-Pillar Product Synergy & Execution Discipline",
  "subtitle": "Sustaining and Accelerating Corporate Marginal Growth by Transitioning Toward Product Expansion & Recurring Revenue",
  "growthPrinciple": "The 3-Pillar Go to Growth Principle",
  "rationale": "Sustainable marginal growth is achieved by orchestrating 3 pillars: securing liquidity via 8 Existing Products, expanding contract scale through 3 Development lines (ICT, Oxygen Signage, Data Center), and driving New Product Expansion (White Label, Software, AI, IoT SaaS) to bypass commodity price wars.",
  "strategicPillars": [
    {
      "pillar": "Pillar 1: Cashflow & Repeat Order Base (Existing)",
      "focus": "Cashflow & Fast Entry",
      "description": "Maximizing 8 ready-to-sell products as daily cashflow engines and initial entry points for B2B/ISPs.",
      "actionItems": [
        "Sustain repeat orders across ADSS, dropwire, fiber accessories, OLT, & ONTs",
        "Lock in client retention via Automatic Configuration Server (ACS) integration",
        "Bundle Smart Display Solutions & 4K STBs for corporate and hotel accounts"
      ]
    },
    {
      "pillar": "Pillar 2: Ecosystem & Contract Escalation (Development)",
      "focus": "Upselling & Group Synergy",
      "description": "Elevating Average Revenue Per Account (ARPA) through 3 high-value business development lines.",
      "actionItems": [
        "Scale turnkey ICT Solutions & Investment with multi-year managed contracts",
        "Accelerate commercial deployment of Digital Media Signage (Oxygen synergy)",
        "Cross-sell Data Center infrastructure and colocation for critical workloads"
      ]
    },
    {
      "pillar": "Pillar 3: Marginal Growth Acceleration (Expansion & IP)",
      "focus": "High Margin & Recurring SaaS",
      "description": "Prioritizing high-margin innovations and proprietary IP to bypass price wars and multiply gross profit.",
      "actionItems": [
        "Scale IT Products and White Label hardware (IFP, PC AIO, Videotron)",
        "Expand high-margin lines: Principal Software, Custom Dev, Cyber, & AI",
        "Monetize IoT Dashboards & Automation via recurring SaaS/MRR"
      ]
    }
  ],
  "foundations": [
    {
      "title": "Escaping Price Wars",
      "desc": "Shifting from commodity hardware to White Label, Software, AI, and IoT solutions."
    },
    {
      "title": "Shift to Recurring MRR",
      "desc": "Driving monthly revenue through SaaS, annual licenses, CMS, & Managed Services."
    },
    {
      "title": "Pipeline Discipline",
      "desc": "Enforcing 10-criteria evidence-based forecasting and gross margin protection."
    },
    {
      "title": "6-Person Synergy",
      "desc": "Coordinated execution across Hunters, Account Managers, and Marketing."
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
  "slideNumber": 14,
  "folder": "14",
  "sectionId": 1,
  "navTitle": {
    "in": "Strategi Go to Growth",
    "en": "Go to Growth Strategy"
  },
  "headerTitle": {
    "in": "Strategi Go to Growth",
    "en": "Go to Growth Strategy"
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
