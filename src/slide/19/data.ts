import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  badge: "Bagian 3 • Penetrasi Pasar & Pemetaan Industri",
  title: "Sinergi Media Digital (Oxygen), Software & Solusi Pintar",
  subtitle: "Integrasi Produk Pengembangan (Media Digital Signage Oxygen & ICT/DC) dengan Ekspansi Software, Cybersecurity & AI untuk Recurring Revenue",
  pillars: [
    {
      title: "Media Digital — Digital Signage (Oxygen) & White Label",
      icon: "monitor",
      tag: "Pengembangan & Ekspansi Visual",
      desc: "Sinergi produk Oxygen dalam lini Media Digital Signage bersama Smart Display dan White Label (Videotron & IFP) untuk lobi korporat, ritel, dan hotel.",
      keyFeatures: [
        "Produk Oxygen sebagai motor utama Media Digital Signage",
        "Bundling Smart Display & 4K STB untuk ekosistem layar B2B",
        "Diferensiasi White Label: IFP, PC AIO, Videotron, & Signage kustom",
        "Monetisasi berulang via langganan CMS dan slot media iklan"
      ]
    },
    {
      title: "Software Principal, Custom Dev & Cybersecurity",
      icon: "shield",
      tag: "Ekspansi Produk Margin Tinggi",
      desc: "Perluasan ke lisensi software principal, custom development proses bisnis, dan keamanan siber terkelola bermargin tinggi.",
      keyFeatures: [
        "Lisensi resmi principal global dengan perpanjangan tahunan",
        "Custom Software Development untuk digitalisasi proses bisnis klien",
        "Solusi Cybersecurity menyeluruh: proteksi jaringan & endpoint",
        "Rasio Gross Margin 50%–65% tanpa beban perang harga hardware"
      ]
    },
    {
      title: "AI, Robotics & Automasi Industri",
      icon: "credit-card",
      tag: "Akselerator Pertumbuhan Marginal",
      desc: "Pengembangan IP internal (IoT Dashboard, Middleware, Automasi) dan solusi AI/Robotika untuk transformasi menuju model SaaS & Managed Services.",
      keyFeatures: [
        "Solusi Cerdas: IoT Dashboard, Middleware, & Automasi Industri",
        "Solusi analitik AI dan Robotika efisiensi operasional pabrik",
        "Transformasi dari proyek jual-putus ke Recurring SaaS/MRR",
        "Hambatan pindah vendor tinggi untuk lompatan margin marginal"
      ]
    }
  ],
  salesApproach: "Eksekusi terpadu 3 Pilar: buka akun via Existing Product, perbesar kontrak via Pengembangan (ICT, Oxygen Signage, DC), dan kunci margin tinggi via Ekspansi (White Label, Software/Cyber, AI & IP)."
};

export const slideDataEn = {
  "badge": "Part 3 • Market Penetration & Industry Mapping",
  "title": "Digital Media (Oxygen), Software & Smart Solutions Synergy",
  "subtitle": "Integrating Product Development (Oxygen Digital Signage & ICT/DC) with Software, Cybersecurity & AI Expansion for Recurring Revenue",
  "pillars": [
    {
      "title": "Digital Media — Digital Signage (Oxygen) & White Label",
      "icon": "Monitor",
      "tag": "Visual Dev & Expansion",
      "desc": "Oxygen product synergy in Digital Media Signage paired with Smart Displays and White Label hardware (IFP & Videotron).",
      "keyFeatures": [
        "Oxygen as the primary connectivity engine for Digital Signage",
        "Bundled Smart Displays & 4K STBs for turnkey B2B screens",
        "White Label hardware differentiation (IFP, PC AIO, Videotron)",
        "Recurring revenue via cloud CMS subscriptions and ad slots"
      ]
    },
    {
      "title": "Principal Software, Custom Dev & Cybersecurity",
      "icon": "Shield",
      "tag": "High-Margin Product Expansion",
      "desc": "Expanding into high-margin global principal software licenses, custom application development, and managed cybersecurity.",
      "keyFeatures": [
        "Authorized principal software licensing with annual renewals",
        "Custom Software Development tailored to enterprise workflows",
        "End-to-end Cybersecurity: perimeter defense and endpoint security",
        "Gross margins of 50%–65% insulated from hardware commoditization"
      ]
    },
    {
      "title": "AI, Robotics & Industrial Automation",
      "icon": "CreditCard",
      "tag": "Marginal Growth Accelerator",
      "desc": "Advanced IoT Dashboards, Middleware, Automation, and AI/Robotics driving transition into SaaS & Managed Services.",
      "keyFeatures": [
        "Smart Solutions: IoT Dashboards, integration Middleware, & Automation",
        "Applied AI analytics and Robotics for logistics and factories",
        "Business model evolution to compounding Recurring SaaS/MRR",
        "High vendor switching costs powering marginal growth surge"
      ]
    }
  ],
  "salesApproach": "Unified 3-Pillar execution: land via Existing Products, expand scope via Development (ICT, Oxygen Signage, DC), and lock high margin via Expansion (White Label, Software/Cyber, AI & IP)."
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 19,
  "folder": "19",
  "sectionId": 2,
  "navTitle": {
    "in": "Sinergi Oxygen & IP",
    "en": "Oxygen & IP Synergy"
  },
  "headerTitle": {
    "in": "Sinergi Oxygen & IP",
    "en": "Oxygen & IP Synergy"
  },
  "category": {
    in: "Product",
    en: "Product"
  },
  "section": {
    in: "Product",
    en: "Product"
  }
};
