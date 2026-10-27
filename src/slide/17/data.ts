import { useLanguage } from '@/contexts/LanguageContext';

export interface ExpansionCategoryItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  imageUrl?: string;
  imagePlaceholderLabel: string;
  productScope: string[];
  strategy: string;
  valuePotential: string;
  revenueTransformation: string;
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Portofolio Produk (3/4)",
  title: "Ekspansi Produk Baru & Diferensiasi Solusi",
  subtitle: "Inovasi Lini Produk Baru di Luar Portofolio Eksisting untuk Menghindari Persaingan Harga (Price War) & Mendorong Recurring Revenue",
  items: [
    {
      id: "it-product-expansion",
      code: "C.1",
      name: "IT Product & White Label Solution",
      subtitle: "Perangkat Komputasi Korporat & Lini Merek Mandiri (White Label)",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: IT Product, Server & White Label (IFP, PC AIO, Videotron)",
      productScope: [
        "Laptop All Brand & Enterprise Server untuk pengadaan korporasi",
        "White Label: Interactive Flat Panel (IFP) & PC All-in-One (AIO)",
        "Videotron & Digital Signage lini khusus bernilai tambah"
      ],
      strategy: "Cross-selling perangkat IT korporasi dan pasarkan produk White Label DMS untuk kendali margin penuh.",
      valuePotential: "Lini White Label menghasilkan margin jauh lebih tebal dibanding distribusi komoditas biasa.",
      revenueTransformation: "Bundling Perangkat + Kontrak Pemeliharaan / Sewa OPEX"
    },
    {
      id: "software-cybersecurity",
      code: "C.2",
      name: "Software & Cybersecurity",
      subtitle: "Lisensi Principal, Custom Development & Keamanan Siber",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: Software Principal, Custom Dev & Cybersecurity",
      productScope: [
        "Penjualan lisensi software resmi dari Principal global",
        "Custom Software Development sesuai alur bisnis spesifik klien",
        "Solusi Cybersecurity untuk proteksi jaringan & data korporasi"
      ],
      strategy: "Jawab kebutuhan transformasi digital dan kepatuhan siber klien jaringan lewat konsultasi solusi.",
      valuePotential: "Margin jasa software tinggi tanpa COGS fisik, menciptakan biaya peralihan vendor yang kuat.",
      revenueTransformation: "Lisensi Tahunan, Retainer Maintenance & Managed Security"
    },
    {
      id: "ai-robotics",
      code: "C.3",
      name: "AI & Robotics",
      subtitle: "Solusi Otomasi Cerdas Berbasis Artificial Intelligence & Robotika",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: AI & Robotics Enterprise Solution",
      productScope: [
        "Solusi analitik cerdas & automasi proses berbasis AI",
        "Integrasi perangkat robotika untuk efisiensi operasional industri & gedung",
        "Smart monitoring & prediktif pemeliharaan infrastruktur"
      ],
      strategy: "Solusi terapan AI & Robotika untuk efisiensi SDM di kawasan industri, logistik, dan properti cerdas.",
      valuePotential: "Posisikan DMS sebagai inovator teknologi masa depan bernilai kontrak strategis C-Level.",
      revenueTransformation: "High-Value Solution Project & AI Subscription"
    },
    {
      id: "market-differentiation-ip",
      code: "D",
      name: "Diferensiasi Pasar & Inovasi Solusi",
      subtitle: "Strategi Anti-Price War Menuju SaaS & Managed Services",
      imageUrl: "",
      imagePlaceholderLabel: "Space Gambar: Solusi Pintar (IoT Dashboard, Middleware, Industrial Automation)",
      productScope: [
        "Pengembangan Internal Intellectual Property (IP): IoT Dashboard, Middleware & Automasi Industri",
        "Mengurangi ketergantungan pada perang harga (price war) produk komoditas",
        "Transformasi model bisnis dari One-Time Project menuju Recurring Revenue"
      ],
      strategy: "Bangun IP software internal (IoT/Middleware) membungkus hardware menjadi satu solusi eksklusif non-komparabel.",
      valuePotential: "Meningkatkan valuasi perusahaan dan membangun recurring revenue (SaaS) bulanan yang stabil.",
      revenueTransformation: "One-Time Project ➔ SaaS & Managed Services (MRR)"
    }
  ] as ExpansionCategoryItem[]
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Product Portfolio (3/4)",
  title: "New Product Expansion & Solution Differentiation",
  subtitle: "Innovative Product Lines Beyond Existing Portfolio to Escape Commodity Price Wars & Drive Recurring Revenue",
  items: [
    {
      id: "it-product-expansion",
      code: "C.1",
      name: "IT Product & White Label Solutions",
      subtitle: "Corporate Computing Hardware & Proprietary White Label Lines",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: IT Products, Servers & White Label (IFP, AIO, Videotron)",
      productScope: [
        "All-Brand Laptops & Enterprise Servers for corporate procurement",
        "White Label: Interactive Flat Panels (IFP) & All-in-One (AIO) PCs",
        "Videotron & specialized Digital Signage product lines"
      ],
      strategy: "Cross-sell corporate IT hardware and deploy DMS White Label products for full margin and pricing control.",
      valuePotential: "White Label lines generate significantly thicker gross margins than commodity distribution.",
      revenueTransformation: "Hardware Bundling + OPEX Leasing / Maintenance"
    },
    {
      id: "software-cybersecurity",
      code: "C.2",
      name: "Software & Cybersecurity",
      subtitle: "Principal Licensing, Custom Development & Cyber Protection",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: Principal Software, Custom Dev & Cybersecurity",
      productScope: [
        "Authorized software licensing from global Principals",
        "Custom Software Development tailored to client workflows",
        "Enterprise Cybersecurity solutions for network and data protection"
      ],
      strategy: "Serve client digital transformation and compliance needs via consultative software and cyber selling.",
      valuePotential: "High service margins with zero physical COGS, building insurmountable vendor switching costs.",
      revenueTransformation: "Annual Licensing, Retainer Support & Managed Security"
    },
    {
      id: "ai-robotics",
      code: "C.3",
      name: "AI & Robotics",
      subtitle: "Intelligent Automation Powered by AI & Robotics",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: AI & Robotics Enterprise Solutions",
      productScope: [
        "AI-powered analytics and workflow automation solutions",
        "Robotics integration for industrial, logistics, and smart building efficiency",
        "Predictive infrastructure monitoring and smart operations"
      ],
      strategy: "Deploy applied AI & Robotics to optimize manpower in industrial estates, logistics, and smart buildings.",
      valuePotential: "Elevates DMS to a high-tech innovator, securing high-ticket strategic C-suite agreements.",
      revenueTransformation: "High-Value Solution Projects & AI Subscriptions"
    },
    {
      id: "market-differentiation-ip",
      code: "D",
      name: "Market Differentiation & Solution Innovation",
      subtitle: "Anti-Price War Strategy Transitioning to SaaS & Managed Services",
      imageUrl: "",
      imagePlaceholderLabel: "Image Space: Smart Solutions (IoT Dashboard, Middleware, Automation)",
      productScope: [
        "Internal Intellectual Property (IP): IoT Dashboards, Middleware & Industrial Automation",
        "Eliminates dependency on commodity hardware price wars",
        "Shifts business model from One-Time Projects to Recurring Revenue"
      ],
      strategy: "Build proprietary software IP wrapping hardware and pipe into an exclusive, uncommoditized turnkey solution.",
      valuePotential: "Drives corporate enterprise valuation while locking in predictable monthly SaaS recurring revenue.",
      revenueTransformation: "One-Time Project ➔ SaaS & Managed Services (MRR)"
    }
  ] as ExpansionCategoryItem[]
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 17,
  "folder": "17",
  "sectionId": 2,
  "navTitle": {
    "in": "Ekspansi Produk",
    "en": "Product Expansion"
  },
  "headerTitle": {
    "in": "Ekspansi Produk",
    "en": "Product Expansion"
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
