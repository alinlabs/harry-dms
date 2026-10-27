import { useLanguage } from '@/contexts/LanguageContext';

export interface ExistingProductItem {
  id: string;
  number: number;
  name: string;
  category: string;
  imageUrl?: string;
  imagePlaceholderLabel: string;
  strategy: string;
  valuePotential: string;
  targetMarket: string;
  revenueType: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Portofolio Produk (1/4)",
  title: "Existing Product: Strategi & Nilai Potensi Pasar",
  subtitle: "8 Produk Portofolio Eksisting PT Digital Multi Sinergy yang Siap Dimonetisasi Cepat Melalui Strategi Bundling & Volume B2B",
  summaryStats: [
    { label: "Total Lini Produk", value: "8 Produk", desc: "Siap jual sejak Hari ke-1" },
    { label: "Fokus Komersial", value: "Quick Win", desc: "Likuiditas & penetrasi cepat" },
    { label: "Strategi Utama", value: "Bundling B2B", desc: "Infrastruktur + CPE + Display" },
    { label: "Potensi Pendapatan", value: "Volume & Repeat", desc: "Run-rate proyek & recurring" }
  ],
  products: [
    {
      id: "smart-display",
      number: 1,
      name: "Smart Display Solution",
      category: "Visual & Collaboration",
      imageUrl: "/gambar/smart-display-solution.png",
      imagePlaceholderLabel: "Space Gambar: Smart Display Solution",
      strategy: "Penetrasi ruang rapat eksekutif, lobi gedung komersial, ruang kontrol, dan institusi pendidikan modern sebagai pintu masuk ekosistem B2B.",
      valuePotential: "Margin per unit tinggi dengan potensi cross-selling konektivitas gedung dan kontrak pemeliharaan tahunan.",
      targetMarket: "Korporasi, Gedung Perkantoran & Edukasi",
      revenueType: "High-Margin Project & Bundling"
    },
    {
      id: "fiber-accessories",
      number: 2,
      name: "Fiber Optics Accessories",
      category: "Optical Infrastructure",
      imageUrl: "/gambar/fiber-optics-accessories.png",
      imagePlaceholderLabel: "Space Gambar: Fiber Optics Accessories",
      strategy: "Menjadi pemasok utama kebutuhan rutin rollout jaringan, pemeliharaan gedung, serta ekspansi ISP regional dan kontraktor telekomunikasi.",
      valuePotential: "Perputaran kas cepat (fast-moving consumables) dengan tingkat pembelian berulang (repeat order) yang konsisten setiap bulan.",
      targetMarket: "ISP, Kontraktor Jaringan & Building Management",
      revenueType: "High-Frequency Repeat Order"
    },
    {
      id: "acs-server",
      number: 3,
      name: "Automatic Configuration Server",
      category: "Network Management",
      imageUrl: "/gambar/automatic-configuration-server.png",
      imagePlaceholderLabel: "Space Gambar: Automatic Configuration Server",
      strategy: "Menawarkan solusi pengelolaan, provisioning, dan pemantauan ribuan perangkat ONT/router secara otomatis dari satu dashboard terpusat.",
      valuePotential: "Menciptakan penguncian ekosistem (strategic lock-in) dan potensi pendapatan lisensi/dukungan teknis berulang (MRR).",
      targetMarket: "Operator FTTH, ISP & Kawasan Mandiri",
      revenueType: "Strategic Lock-in & Recurring SLA"
    },
    {
      id: "dropwire-cable",
      number: 4,
      name: "Dropwire 1–12 Core",
      category: "Last-Mile Connectivity",
      imageUrl: "/gambar/9589120bc710646f816258e6ff55dadb-removebg-preview.png",
      imagePlaceholderLabel: "Space Gambar: Dropwire 1–12 Core",
      strategy: "Mendukung percepatan aktivasi sambungan pelanggan akhir (last-mile) di gedung bertingkat, ruko komersial, dan klaster bisnis.",
      valuePotential: "Permintaan bervolume masif yang tumbuh berbanding lurus dengan jumlah penambahan titik pelanggan baru.",
      targetMarket: "Proyek FTTH, Kawasan Komersial & Properti",
      revenueType: "High-Volume Rollout Supply"
    },
    {
      id: "adss-cable",
      number: 5,
      name: "ADSS Cable: All Core and Tube",
      category: "Backbone Distribution",
      imageUrl: "/gambar/adds-cable-all-core-and-tube.png",
      imagePlaceholderLabel: "Space Gambar: ADSS Cable All Core & Tube",
      strategy: "Menyasar proyek pembangunan jalur tulang punggung (backbone) antar-kawasan industri, perkebunan, kampus, dan jaringan kota.",
      valuePotential: "Nilai transaksi per kontrak sangat besar (big-ticket infrastructure deal) sebagai fondasi proyek jangka panjang.",
      targetMarket: "Kawasan Industri, Telco & Infrastruktur",
      revenueType: "Large-Scale Infrastructure Contract"
    },
    {
      id: "gpon-epon-olt",
      number: 6,
      name: "GPON and EPON OLT",
      category: "Core Optical Distribution",
      imageUrl: "/gambar/gpon-and-epon-olt.png",
      imagePlaceholderLabel: "Space Gambar: GPON & EPON OLT",
      strategy: "Memasang perangkat sentral distribusi optik di gedung perkantoran, hotel, dan kawasan industri sebagai pusat layanan multi-tenant.",
      valuePotential: "Investasi jangkar (anchor product): setiap 1 unit OLT yang terjual membuka potensi penjualan ratusan hingga ribuan unit ONT.",
      targetMarket: "Gedung Multi-Tenant, Hospitality & ISP",
      revenueType: "Anchor Ecosystem Enabler"
    },
    {
      id: "gpon-ont-router",
      number: 7,
      name: "GPON ONT 2.4G & 5G Powerful WiFi Router",
      category: "Customer Premises Equipment",
      imageUrl: "/gambar/gpon-ont-2.4g-5g-powerful-wiFi router.png",
      imagePlaceholderLabel: "Space Gambar: GPON ONT 2.4G & 5G WiFi",
      strategy: "Paket bundel wajib di setiap titik instalasi pelanggan baru maupun program upgrade kapasitas WiFi korporasi dan apartemen.",
      valuePotential: "Volume penjualan ribuan unit dengan potensi skema sewa perangkat bulanan (Device-as-a-Service) bersama layanan internet.",
      targetMarket: "Tenant Kantor, Apartemen, Hotel & UKM",
      revenueType: "Mass Volume & Bundled CPE"
    },
    {
      id: "android-tv-stb",
      number: 8,
      name: "4K Android TV Set Top Box",
      category: "Smart Hospitality & Media",
      imageUrl: "/gambar/4k-android-tv-set-top-box.png",
      imagePlaceholderLabel: "Space Gambar: 4K Android TV Set Top Box",
      strategy: "Transformasi layar kamar hotel, rumah sakit, dan ruang tunggu korporasi menjadi sarana hiburan pintar sekaligus informasi interaktif.",
      valuePotential: "Meningkatkan nilai rata-rata kontrak per kamar/titik (ARPU booster) pada paket konektivitas hospitality dan properti.",
      targetMarket: "Hotel, Rumah Sakit, Apartemen & Lounge",
      revenueType: "Value-Added Hospitality Bundle"
    }
  ] as ExistingProductItem[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Product Portfolio (1/4)",
  title: "Existing Products: Market Strategy & Value Potential",
  subtitle: "8 Existing Portfolio Products of PT Digital Multi Sinergy Ready for Immediate B2B Monetization via Strategic Bundling",
  summaryStats: [
    { label: "Total Product Lines", value: "8 Products", desc: "Ready to sell from Day 1" },
    { label: "Commercial Focus", value: "Quick Wins", desc: "Immediate cashflow & reach" },
    { label: "Core Strategy", value: "B2B Bundling", desc: "Infrastructure + CPE + Display" },
    { label: "Revenue Potential", value: "Volume & Repeat", desc: "Project run-rate & recurring" }
  ],
  products: [
    {
      id: "smart-display",
      number: 1,
      name: "Smart Display Solution",
      category: "Visual & Collaboration",
      imageUrl: "/gambar/smart-display-solution.png",
      imagePlaceholderLabel: "Image Space: Smart Display Solution",
      strategy: "Penetrate executive boardrooms, commercial building lobbies, command centers, and modern education as a B2B entry anchor.",
      valuePotential: "High unit margins with strong cross-selling potential for building connectivity and annual maintenance contracts.",
      targetMarket: "Enterprises, Office Towers & Education",
      revenueType: "High-Margin Project & Bundling"
    },
    {
      id: "fiber-accessories",
      number: 2,
      name: "Fiber Optics Accessories",
      category: "Optical Infrastructure",
      imageUrl: "/gambar/fiber-optics-accessories.png",
      imagePlaceholderLabel: "Image Space: Fiber Optics Accessories",
      strategy: "Serve as the primary supply partner for routine network rollouts, building maintenance, and regional ISP expansions.",
      valuePotential: "Fast-moving cashflow generator with consistent monthly repeat orders from active deployment partners.",
      targetMarket: "ISPs, Network Contractors & Building Mgmt",
      revenueType: "High-Frequency Repeat Order"
    },
    {
      id: "acs-server",
      number: 3,
      name: "Automatic Configuration Server",
      category: "Network Management",
      imageUrl: "/gambar/automatic-configuration-server.png",
      imagePlaceholderLabel: "Image Space: Automatic Configuration Server",
      strategy: "Centralized provisioning, monitoring, and automated management of thousands of ONTs.",
      valuePotential: "Strategic ecosystem retention and recurring annual license/SLA revenue (MRR).",
      targetMarket: "FTTH Operators, ISPs & Campuses",
      revenueType: "Strategic Lock-in & Recurring SLA"
    },
    {
      id: "dropwire-cable",
      number: 4,
      name: "Dropwire 1–12 Core",
      category: "Last-Mile Connectivity",
      imageUrl: "/gambar/9589120bc710646f816258e6ff55dadb-removebg-preview.png",
      imagePlaceholderLabel: "Image Space: Dropwire 1–12 Core",
      strategy: "Accelerate last-mile activations in commercial towers, shophouses, and business parks.",
      valuePotential: "Massive volume demand scaling directly with new customer activation counts.",
      targetMarket: "FTTH Projects, Commercial Estates & Property",
      revenueType: "High-Volume Rollout Supply"
    },
    {
      id: "adss-cable",
      number: 5,
      name: "ADSS Cable: All Core and Tube",
      category: "Backbone Distribution",
      imageUrl: "/gambar/adds-cable-all-core-and-tube.png",
      imagePlaceholderLabel: "Image Space: ADSS Cable All Core & Tube",
      strategy: "Self-supporting optical backbone deployment for industrial estates, campuses, and metro routes.",
      valuePotential: "High-ticket contract value serving as the long-term infrastructure foundation.",
      targetMarket: "Industrial Parks, Telcos & Infrastructure",
      revenueType: "Large-Scale Infrastructure Contract"
    },
    {
      id: "gpon-epon-olt",
      number: 6,
      name: "GPON and EPON OLT",
      category: "Core Optical Distribution",
      imageUrl: "/gambar/gpon-and-epon-olt.png",
      imagePlaceholderLabel: "Image Space: GPON & EPON OLT",
      strategy: "Deploy optical distribution hubs in commercial towers, hotels, and business parks.",
      valuePotential: "Anchor product: every OLT deployed unlocks hundreds of downstream ONT sales.",
      targetMarket: "Multi-Tenant Buildings, Hospitality & ISPs",
      revenueType: "Anchor Ecosystem Enabler"
    },
    {
      id: "gpon-ont-router",
      number: 7,
      name: "GPON ONT 2.4G & 5G Powerful WiFi Router",
      category: "Customer Premises Equipment",
      imageUrl: "/gambar/gpon-ont-2.4g-5g-powerful-wiFi router.png",
      imagePlaceholderLabel: "Image Space: GPON ONT 2.4G & 5G WiFi",
      strategy: "Standard bundle for new customer turn-ups and corporate WiFi capacity upgrades.",
      valuePotential: "Mass volume with Device-as-a-Service monthly rental options alongside bandwidth.",
      targetMarket: "Office Tenants, Condos, Hotels & SMBs",
      revenueType: "Mass Volume & Bundled CPE"
    },
    {
      id: "android-tv-stb",
      number: 8,
      name: "4K Android TV Set Top Box",
      category: "Smart Hospitality & Media",
      imageUrl: "/gambar/4k-android-tv-set-top-box.png",
      imagePlaceholderLabel: "Image Space: 4K Android TV Set Top Box",
      strategy: "Upgrade hotel rooms, hospitals, and lounges into interactive digital experience hubs.",
      valuePotential: "Boosts per-room/unit contract value (ARPU booster) across hospitality packages.",
      targetMarket: "Hotels, Hospitals, Condos & Lounges",
      revenueType: "Value-Added Hospitality Bundle"
    }
  ] as ExistingProductItem[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 15,
  "folder": "15",
  "sectionId": 2,
  "navTitle": {
    "in": "Existing Product",
    "en": "Existing Products"
  },
  "headerTitle": {
    "in": "Existing Product",
    "en": "Existing Products"
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
