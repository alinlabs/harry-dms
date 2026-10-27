import { useLanguage } from '@/contexts/LanguageContext';

export interface BuyerPersona {
  id: string;
  badge: string;
  title: string;
  role: string;
  priorityConcern: string;
  triggerEvent: string;
  dmsPitchStrategy: string;
  objectionHandling: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Penetrasi Pasar & Pemetaan Industri",
  title: "Ideal Customer Profile (ICP) & Buyer Persona B2B",
  subtitle: "Pemetaan Karakteristik 4 Pengambil Keputusan Kunci Korporasi, Pemicu Transaksi, dan Strategi Penetrasi Konsultatif",
  personas: [
    {
      id: "cio",
      badge: "Technical Buyer",
      title: "Chief Information Officer / Head of IT",
      role: "Penanggung Jawab Arsitektur, Kinerja Jaringan, & Keamanan Sistem",
      priorityConcern: "Keandalan konektivitas, zero single point of failure, integrasi lancar multi-vendor, & SLA MTTR <2 jam.",
      triggerEvent: "Jaringan sering down, biaya lisensi naik tajam, audit kepatuhan siber, atau ekspansi cabang baru.",
      dmsPitchStrategy: "Arsitektur 3 Pilar: backbone optik andal, otomatisasi provisioning ACS, & proteksi cybersecurity terkelola.",
      objectionHandling: "Garansi resmi, buffer stok suku cadang lokal, dan komitmen SLA mengikat tanpa lempar tanggung jawab."
    },
    {
      id: "procurement",
      badge: "Economic Buyer",
      title: "Head of Procurement & Commercial",
      role: "Pengendali Anggaran CAPEX/OPEX, Tender & Efisiensi Biaya",
      priorityConcern: "Kesesuaian anggaran, transparansi harga, opsi OPEX/Managed Service, dan skala diskon volume.",
      triggerEvent: "Tender tahunan, mandat CFO pangkas OPEX 20%, atau renegotiation kontrak vendor petahana.",
      dmsPitchStrategy: "Paket bundling 3 pilar, opsi White Label (hemat 20-30%), dan fleksibilitas skema pembayaran bertahap.",
      objectionHandling: "Buktikan TCO 3 tahun lebih hemat hingga 35% dibanding pembelian komoditas terpisah."
    },
    {
      id: "operations",
      badge: "User Buyer",
      title: "Head of Operations & Facilities",
      role: "Pengelola Operasional Gedung, Pabrik, & Kepuasan Pengguna",
      priorityConcern: "Operasional harian bebas kendala, perangkat andal, respon teknis cepat, dan pemantauan terpusat.",
      triggerEvent: "Komplain tenant atas WiFi lambat, titik perangkat sering rusak, atau renovasi gedung.",
      dmsPitchStrategy: "Smart Display Solution, Digital Signage Oxygen terpusat, dan telemetri IoT Dashboard fasilitas.",
      objectionHandling: "Tim teknis dedicated, training operator gratis, dan monitoring real-time via satu dashboard."
    },
    {
      id: "c-level",
      badge: "Strategic Buyer",
      title: "CEO / Managing Director / Owner",
      role: "Pemimpin Arah Bisnis, Pertumbuhan Pendapatan, & Reputasi Perusahaan",
      priorityConcern: "Diferensiasi pasar, modernisasi citra korporat, kepatuhan regulasi, dan ROI terukur.",
      triggerEvent: "Inisiatif transformasi digital, peresmian fasilitas/kampus baru, atau target efisiensi tahunan.",
      dmsPitchStrategy: "One Trusted Partner: integrasi satu pintu dari infrastruktur fiber hingga AI & otomasi cerdas.",
      objectionHandling: "Rekam jejak ekosistem telekomunikasi nasional, stabilitas finansial, dan roadmap jangka panjang."
    }
  ] as BuyerPersona[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Market Penetration & Industry Mapping",
  title: "Ideal Customer Profile (ICP) & B2B Buyer Personas",
  subtitle: "Mapping 4 Key Corporate Decision Makers, Purchase Triggers, and Consultative Value Positioning Strategies",
  personas: [
    {
      id: "cio",
      badge: "Technical Buyer",
      title: "Chief Information Officer / Head of IT",
      role: "Custodian of Architecture, Network Uptime & Cyber Resilience",
      priorityConcern: "High network availability, zero single points of failure, multi-vendor integration, & sub-2-hour MTTR SLAs.",
      triggerEvent: "Recurring outages, surging license renewals, mandatory cyber compliance audits, or branch rollouts.",
      dmsPitchStrategy: "3-Pillar integration: resilient optical backhaul, automated ACS provisioning, and managed cybersecurity.",
      objectionHandling: "Local spare part guarantees, vendor-neutral accountability, and strict SLA contractual indemnities."
    },
    {
      id: "procurement",
      badge: "Economic Buyer",
      title: "Head of Procurement & Commercial",
      role: "Guardian of CAPEX/OPEX Efficiency, Tender Rules & Contract Margins",
      priorityConcern: "Budget compliance, transparent pricing structures, OPEX/Managed Service terms, and volume discounts.",
      triggerEvent: "Annual tenders, executive mandates to reduce OPEX by 20%, or incumbent contract renegotiations.",
      dmsPitchStrategy: "End-to-end bundling discounts, high-margin White Label alternatives, and flexible payment plans.",
      objectionHandling: "Demonstrate a verified 3-year TCO advantage delivering up to 35% overall savings."
    },
    {
      id: "operations",
      badge: "User Buyer",
      title: "Head of Operations & Facilities",
      role: "Manager of Building Systems, Plant Operations & User Satisfaction",
      priorityConcern: "Frictionless daily operations, low device failure rates, rapid dispatch support, and unified control.",
      triggerEvent: "Tenant complaints regarding WiFi bottlenecks, device failures, or facility renovations.",
      dmsPitchStrategy: "Smart Display Solutions, centralized Oxygen Digital Signage, and facility IoT telemetry dashboards.",
      objectionHandling: "Dedicated on-call engineers, complimentary operator training, and unified dashboard reporting."
    },
    {
      id: "c-level",
      badge: "Strategic Buyer",
      title: "CEO / Managing Director / Owner",
      role: "Visionary for Revenue Growth, Corporate Brand Equity & Compliance",
      priorityConcern: "Market differentiation, modern corporate image, risk mitigation, and proven ROI.",
      triggerEvent: "Enterprise digital transformation initiatives, new campus launches, or board-level efficiency audits.",
      dmsPitchStrategy: "One Trusted Partner: single-window integration from fiber infrastructure all the way to AI.",
      objectionHandling: "Strategic telecom group backing, proven balance-sheet resilience, and a joint long-term technology roadmap."
    }
  ] as BuyerPersona[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 9,
  folder: "09",
  sectionId: 1,
  navTitle: {
    in: "ICP & Buyer Persona",
    en: "ICP & Buyer Persona"
  },
  headerTitle: {
    in: "Ideal Customer Profile (ICP) & Buyer Persona B2B",
    en: "Ideal Customer Profile (ICP) & B2B Buyer Personas"
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
