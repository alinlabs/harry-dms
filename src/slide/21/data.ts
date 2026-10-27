import { useLanguage } from '@/contexts/LanguageContext';

export interface IndustryVertical {
  id: string;
  name: string;
  badge: string;
  priority: string;
  marketShare: string;
  targetAccountCount: string;
  primaryNeed: string;
  productFit: string[];
  keyDrivers: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Penetrasi Pasar & Pemetaan Industri",
  title: "Matriks Segmentasi 6 Vertikal Industri B2B",
  subtitle: "Pemetaan Penetrasi 6 Sektor Prioritas dengan Kombinasi Existing Product, Pengembangan Produk, dan Ekspansi Produk Baru",
  industries: [
    {
      id: "manufacturing",
      name: "Manufaktur & Kawasan Industri",
      badge: "Prioritas Tier 1",
      priority: "Sangat Tinggi",
      marketShare: "30%",
      targetAccountCount: "60+ Pabrik & Tenant",
      primaryNeed: "Fiber optik kawasan, ICT pabrik, serta otomasi berbasis IoT Dashboard & AI/Robotika.",
      productFit: [
        "Existing: ADSS Cable, Dropwire, OLT/ONT & ACS",
        "Pengembangan: ICT Solution & Data Center",
        "Ekspansi: Server, AI/Robotics & IoT Dashboard"
      ],
      keyDrivers: "Cegah downtime produksi dan percepat efisiensi otomasi pabrik."
    },
    {
      id: "financial",
      name: "Finansial, Banking & Fintech",
      badge: "Prioritas Tier 1",
      priority: "Sangat Tinggi",
      marketShare: "25%",
      targetAccountCount: "35+ HQ & Cabang",
      primaryNeed: "Data Center andal, Cybersecurity terkelola, dan pengadaan PC/Server cabang.",
      productFit: [
        "Existing: Smart Display Solution & GPON ONT WiFi",
        "Pengembangan: Data Center & ICT Solution",
        "Ekspansi: Cybersecurity, Software Principal & Server"
      ],
      keyDrivers: "Kepatuhan audit OJK/BI dan modernisasi kantor cabang digital."
    },
    {
      id: "hospitality",
      name: "Hospitality, Hotel & Resort",
      badge: "Prioritas Tier 2",
      priority: "Tinggi",
      marketShare: "18%",
      targetAccountCount: "45+ Hotel & Resort",
      primaryNeed: "Hiburan kamar interaktif (STB), WiFi kamar terintegrasi, dan signage lobi.",
      productFit: [
        "Existing: 4K Android TV STB, GPON ONT 5G & Smart Display",
        "Pengembangan: Media Digital — Digital Signage (Oxygen)",
        "Ekspansi: White Label Videotron & Custom Software PMS"
      ],
      keyDrivers: "Tingkatkan kepuasan tamu dan kelola konten promosi properti secara terpusat."
    },
    {
      id: "retail",
      name: "Ritel Multi-Cabang & F&B Chain",
      badge: "Prioritas Tier 2",
      priority: "Tinggi",
      marketShare: "12%",
      targetAccountCount: "80+ Gerai Cabang",
      primaryNeed: "Signage promo terpusat, PC AIO/kasir cabang, dan otomasi jaringan via ACS.",
      productFit: [
        "Existing: GPON ONT WiFi Router & ACS Management",
        "Pengembangan: Media Digital — Digital Signage (Oxygen)",
        "Ekspansi: White Label PC AIO/Signage & Custom Software"
      ],
      keyDrivers: "Standarisasi promosi digital ratusan gerai berbasis langganan SaaS efisien."
    },
    {
      id: "property",
      name: "Properti Komersial & Gedung Kantor",
      badge: "Prioritas Strategis",
      priority: "Tinggi",
      marketShare: "10%",
      targetAccountCount: "25+ Gedung Bertingkat",
      primaryNeed: "In-building fiber network, direktori digital lobi, dan IoT Smart Building.",
      productFit: [
        "Existing: Fiber Accessories, Dropwire, OLT & Smart Display",
        "Pengembangan: ICT Solution, Signage (Oxygen) & Data Center",
        "Ekspansi: Videotron White Label & IoT Dashboard"
      ],
      keyDrivers: "Tingkatkan nilai sewa gedung dan buka skema bagi hasil jangka panjang."
    },
    {
      id: "education",
      name: "Edukasi, Kampus & Kesehatan",
      badge: "Prioritas Tier 3",
      priority: "Menengah",
      marketShare: "5%",
      targetAccountCount: "20+ Kampus & RS",
      primaryNeed: "Interactive display (IFP), perangkat komputasi, dan sistem informasi kampus/RS.",
      productFit: [
        "Existing: Smart Display Solution & Jaringan GPON FTTH",
        "Pengembangan: ICT Solution & Data Center",
        "Ekspansi: White Label IFP/PC AIO, Laptop All Brand & Custom SW"
      ],
      keyDrivers: "Modernisasi fasilitas kampus/RS tanpa beban merek komoditas mahal."
    }
  ] as IndustryVertical[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Market Penetration & Industry Mapping",
  title: "Segmentation Matrix Across 6 B2B Industry Verticals",
  subtitle: "Penetrating 6 Priority Sectors Through the Synergy of Existing Products, Product Development, and New Product Expansion",
  industries: [
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Estates",
      badge: "Tier 1 Priority",
      priority: "Very High",
      marketShare: "30%",
      targetAccountCount: "60+ Plants & Tenants",
      primaryNeed: "Estate fiber backbones, plant ICT, and IoT/AI industrial automation.",
      productFit: [
        "Existing: ADSS Cable, Dropwire, OLT/ONT & ACS",
        "Development: ICT Solution & Data Center",
        "Expansion: Enterprise Servers, AI/Robotics & IoT SaaS"
      ],
      keyDrivers: "Eliminate line downtime and drive smart factory automation."
    },
    {
      id: "financial",
      name: "Financial, Banking & Fintech",
      badge: "Tier 1 Priority",
      priority: "Very High",
      marketShare: "25%",
      targetAccountCount: "35+ HQs & Branches",
      primaryNeed: "Reliable Data Center hosting, managed Cybersecurity, and branch IT computing.",
      productFit: [
        "Existing: Smart Display Solution & GPON ONT WiFi",
        "Development: Data Center & ICT Solution",
        "Expansion: Cybersecurity, Principal Software & Servers"
      ],
      keyDrivers: "Regulatory data compliance (OJK/BI) and digital branch modernization."
    },
    {
      id: "hospitality",
      name: "Hospitality, Hotels & Resorts",
      badge: "Tier 2 Priority",
      priority: "High",
      marketShare: "18%",
      targetAccountCount: "45+ Hotels & Resorts",
      primaryNeed: "Interactive in-room IPTV (STB), high-density guest WiFi, and lobby signage.",
      productFit: [
        "Existing: 4K Android TV STB, GPON ONT 5G & Smart Display",
        "Development: Digital Media — Digital Signage (Oxygen)",
        "Expansion: White Label Videotron & Custom PMS Software"
      ],
      keyDrivers: "Enhance guest satisfaction and centralize property promo management."
    },
    {
      id: "retail",
      name: "Multi-Store Retail & F&B Chains",
      badge: "Tier 2 Priority",
      priority: "High",
      marketShare: "12%",
      targetAccountCount: "80+ Store Locations",
      primaryNeed: "Centralized promo signage, branch POS/AIO hardware, and ACS automation.",
      productFit: [
        "Existing: GPON ONT WiFi Routers & ACS Management",
        "Development: Digital Media — Digital Signage (Oxygen)",
        "Expansion: White Label PC AIO/Signage & Custom Software"
      ],
      keyDrivers: "Standardize nationwide in-store promos with scalable recurring SaaS."
    },
    {
      id: "property",
      name: "Commercial Real Estate & High-Rise",
      badge: "Strategic Priority",
      priority: "High",
      marketShare: "10%",
      targetAccountCount: "25+ High-Rise Towers",
      primaryNeed: "In-building fiber distribution, lobby digital directories, and IoT building telemetry.",
      productFit: [
        "Existing: Fiber Accessories, Dropwire, OLT & Smart Display",
        "Development: ICT Solution, Signage (Oxygen) & Data Center",
        "Expansion: White Label Videotron & IoT Dashboard"
      ],
      keyDrivers: "Boost commercial property value and secure long-term revenue share."
    },
    {
      id: "education",
      name: "Education, Campuses & Healthcare",
      badge: "Tier 3 Priority",
      priority: "Medium",
      marketShare: "5%",
      targetAccountCount: "20+ Campuses & Hospitals",
      primaryNeed: "Interactive flat panels (IFP), medical/staff hardware, and campus portals.",
      productFit: [
        "Existing: Smart Display Solution & GPON FTTH Network",
        "Development: ICT Solution & Data Center",
        "Expansion: White Label IFP/PC AIO, All-Brand Laptops & Custom SW"
      ],
      keyDrivers: "Modernize classrooms and clinics without expensive brand lock-in."
    }
  ] as IndustryVertical[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 21,
  folder: "21",
  sectionId: 2,
  navTitle: {
    in: "6 Vertikal Industri",
    en: "6 Industry Verticals"
  },
  headerTitle: {
    in: "Matriks Segmentasi 6 Vertikal Industri B2B",
    en: "Segmentation Matrix Across 6 B2B Industry Verticals"
  },
  category: {
    in: "Product",
    en: "Product"
  },
  section: {
    in: "Product",
    en: "Product"
  }
};
