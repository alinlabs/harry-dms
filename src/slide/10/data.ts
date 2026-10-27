import { useLanguage } from '@/contexts/LanguageContext';

export interface PlaybookMetric {
  label: string;
  value: string;
  desc: string;
}

export interface PlaybookItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  highlight: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Penetrasi Pasar & Pemetaan Industri",
  title: "8 B2B Sales Playbooks: Land, Develop & Expand",
  subtitle: "Skenario Taktis Penetrasi Pasar B2B Berdasarkan Sinergi 3 Pilar Produk dan Kebutuhan Spesifik 6 Vertikal Industri",
  keyMetrics: [
    { label: "Skenario Penjualan", value: "8 Playbooks", desc: "Strategi Bundling Teruji" },
    { label: "Pintu Masuk (Land)", value: "Quick Wins", desc: "Arus Kas Existing Product" },
    { label: "Eskalasi (Develop)", value: "Cross-Sell", desc: "Pengembangan ICT & Oxygen" },
    { label: "Kunci Margin (Expand)", value: "High-Margin", desc: "Software, AI & Solusi IoT" }
  ],
  playbooks: [
    {
      id: 1,
      tag: "Playbook 1 • Land (FTTH)",
      title: "Bundling Kabel ADSS/Dropwire & GPON OLT/ONT",
      desc: "Penetrasi operator FTTH, ISP regional, dan kawasan komersial via paket komplit kabel & CPE bergaransi resmi.",
      highlight: "Pintu Masuk Tercepat dengan Perputaran Arus Kas Tinggi"
    },
    {
      id: 2,
      tag: "Playbook 2 • Lock-in (ACS)",
      title: "Otomatisasi Provisioning ACS Server",
      desc: "Kunci kontrak jangka panjang ISP dengan lisensi ACS untuk otomatisasi manajemen ribuan router pelanggan.",
      highlight: "Menghilangkan Switching Cost & Menciptakan Retensi > 95%"
    },
    {
      id: 3,
      tag: "Playbook 3 • Visual (Display)",
      title: "Smart Display & STB 4K Hospitality",
      desc: "Menyasar hotel, resort, dan rumah sakit dengan layar interaktif kamar, IPTV 4K Android STB, dan WiFi 5G.",
      highlight: "Tingkat Kepuasan Tamu Naik & Tiket Gangguan Turun Drastis"
    },
    {
      id: 4,
      tag: "Playbook 4 • Media (Signage)",
      title: "Digital Signage Oxygen di Lobi & Ritel",
      desc: "Pemasangan Digital Signage Oxygen di lobi gedung dan gerai ritel modern dengan model langganan CMS bulanan.",
      highlight: "Membangun Pendapatan Berulang (MRR) Berbasis Iklan & Konten"
    },
    {
      id: 5,
      tag: "Playbook 5 • Cloud (DC/ICT)",
      title: "ICT Solution & Colocation Data Center",
      desc: "Konversi sewa bandwidth korporasi menjadi kontrak multi-tahun ICT Managed Services & colocation Data Center.",
      highlight: "Menaikkan Nilai Rata-rata Kontrak (ARPA) hingga 3x Lipat"
    },
    {
      id: 6,
      tag: "Playbook 6 • Hardware (White Label)",
      title: "White Label IFP & PC All-in-One",
      desc: "Pengadaan ruang rapat dan kelas interaktif melalui IFP & PC AIO White Label DMS dengan margin tinggi.",
      highlight: "Gross Margin Proyek Terjaga Sehat di Atas 45%"
    },
    {
      id: 7,
      tag: "Playbook 7 • Cyber (Security)",
      title: "Managed Cybersecurity & Principal SW",
      desc: "Proteksi perbankan, fintech, dan manufaktur via firewall terkelola, endpoint security, dan lisensi resmi.",
      highlight: "Menjawab Kepatuhan Regulasi OJK & Mengunci Retainer Tahunan"
    },
    {
      id: 8,
      tag: "Playbook 8 • Expand (AI/IoT)",
      title: "IoT Dashboard SaaS & Automasi AI",
      desc: "Penerapan solusi DMS berupa IoT Dashboard utilitas fasilitas dan asisten AI berbasis langganan tahunan.",
      highlight: "Transformasi Penuh Menuju Software Recurring Revenue"
    }
  ] as PlaybookItem[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Market Penetration & Industry Mapping",
  title: "8 B2B Sales Playbooks: Land, Develop & Expand",
  subtitle: "Tactical B2B Penetration Blueprints Leveraging 3-Pillar Synergies Across 6 Target Industry Verticals",
  keyMetrics: [
    { label: "Sales Scenarios", value: "8 Playbooks", desc: "Field-Proven Bundling Tactics" },
    { label: "Door Opener (Land)", value: "Quick Wins", desc: "Existing Product Velocity" },
    { label: "Escalation (Develop)", value: "Cross-Sell", desc: "ICT & Oxygen Signage Growth" },
    { label: "Margin Driver (Expand)", value: "High-Margin", desc: "Software, AI & Solusi IoT" }
  ],
  playbooks: [
    {
      id: 1,
      tag: "Playbook 1 • Land (FTTH)",
      title: "Bundled ADSS/Dropwire & GPON OLT/ONT",
      desc: "Penetrate regional ISPs, FTTH operators, and developers with turnkey cabling and CPE packages.",
      highlight: "Fastest Cashflow Door Opener with High Repeat Frequency"
    },
    {
      id: 2,
      tag: "Playbook 2 • Lock-in (ACS)",
      title: "Automated ACS Server Provisioning",
      desc: "Lock in regional ISP accounts by embedding centralized ACS router management licenses.",
      highlight: "Zero Switching Incentive & Preserving Retention > 95%"
    },
    {
      id: 3,
      tag: "Playbook 3 • Visual (Display)",
      title: "Hospitality Smart Display & 4K STB",
      desc: "Target hotels, resorts, and clinics with interactive guestroom infotainment, 4K STBs, and dual-band WiFi.",
      highlight: "Elevating Guest Satisfaction & Eliminating Service Tickets"
    },
    {
      id: 4,
      tag: "Playbook 4 • Media (Signage)",
      title: "Oxygen Digital Signage in Corporate Lobbies",
      desc: "Deploy Oxygen Digital Signage across office lobbies and retail storefronts under recurring CMS plans.",
      highlight: "Generating Predictable MRR through Managed Advertising & CMS"
    },
    {
      id: 5,
      tag: "Playbook 5 • Cloud (DC/ICT)",
      title: "Turnkey ICT Solutions & DC Colocation",
      desc: "Convert basic enterprise bandwidth accounts into multi-year managed network and data center contracts.",
      highlight: "Expanding Average Revenue Per Account (ARPA) by up to 3x"
    },
    {
      id: 6,
      tag: "Playbook 6 • Hardware (White Label)",
      title: "DMS White Label IFP & All-in-One PCs",
      desc: "Equip boardrooms and training halls with DMS-branded Interactive Flat Panels and AIO PCs at higher margins.",
      highlight: "Securing Blended Hardware Gross Margins Above 45%"
    },
    {
      id: 7,
      tag: "Playbook 7 • Cyber (Security)",
      title: "Managed Cybersecurity & Principal Software",
      desc: "Shield banking, fintech, and manufacturing networks with managed threat detection and compliant software.",
      highlight: "Ensuring Regulatory Compliance & Multi-Year Security Retainers"
    },
    {
      id: 8,
      tag: "Playbook 8 • Expand (AI/IoT)",
      title: "IoT Dashboard SaaS & Enterprise AI Automation",
      desc: "Deploy proprietary DMS IoT telemetry for building utilities and custom AI workflow automation.",
      highlight: "Completing the Transformation to High-Margin Recurring SaaS"
    }
  ] as PlaybookItem[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 10,
  folder: "10",
  sectionId: 1,
  navTitle: {
    in: "8 Sales Playbooks",
    en: "8 Sales Playbooks"
  },
  headerTitle: {
    in: "8 B2B Sales Playbooks: Land, Develop & Expand",
    en: "8 B2B Sales Playbooks: Land, Develop & Expand"
  },
  category: {
    in: "Strategi",
    en: "Strategy"
  },
  section: {
    in: "Strategi",
    en: "Strategy"
  }
};
