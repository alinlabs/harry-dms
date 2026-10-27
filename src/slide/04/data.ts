import { useLanguage } from '@/contexts/LanguageContext';
export const slideDataId = {
  badge: "Bagian 1 • Fondasi & Analisa Pasar",
  title: "Tren Pasar ICT, FTTH & Keamanan Siber 2026–2027",
  subtitle: "Dinamika Makro ICT: Lonjakan Konektivitas Andal, Desentralisasi Komputasi, dan Kepatuhan Regulasi Keamanan Data",
  macroDrivers: [
    {
      title: "Hyper-Connected Enterprise & FTTH B2B",
      growth: "+28% YoY",
      tag: "Connectivity Shift",
      desc: "Migrasi masif kantor cabang dan ritel ke Dedicated FTTH + SD-WAN ber-SLA 99.5%+ demi operasional tanpa henti."
    },
    {
      title: "Data Sovereignty & Edge Infrastructure",
      growth: "+32% Adopsi",
      tag: "Regulasi UU PDP",
      desc: "Kewajiban penyimpanan data lokal mendorong lonjakan kebutuhan Private Cloud lokal dan edge data center di Indonesia."
    },
    {
      title: "Managed Cybersecurity & SASE (Zero-Trust)",
      growth: "+45% Belanja TI",
      tag: "Cyber Resilience",
      desc: "Maraknya ancaman siber mendorong korporasi beralih ke Firewall-as-a-Service (FWaaS) dan endpoint security berbasis OPEX."
    },
    {
      title: "AI-Driven Automation & Operational Efficiency",
      growth: "+50% Proyek AI",
      tag: "Efisiensi Operasional",
      desc: "Kebutuhan otomatisasi dokumen (IDP OCR), pemantauan AIOps, dan asisten cerdas untuk memangkas OPEX perusahaan."
    }
  ],
  marketMetrics: [
    { label: "Pasar ICT Indonesia 2026", value: "Rp 320 T", trend: "+11.8% CAGR", detail: "Didorong transformasi digital enterprise & belanja infrastruktur telco." },
    { label: "Alokasi IT Managed Services", value: "38.5%", trend: "Naik dari 24%", detail: "Pergeseran paradigma dari jual-putus perangkat ke langganan terkelola berkala." },
    { label: "Biaya Downtime Jaringan Cabang", value: "Rp 85 Jt/Jam", trend: "Kritis", detail: "Mendorong permintaan koneksi redundan berkeandalan tinggi Oxygen.id + DMS." }
  ],
  implicationForDMS: "Momentum strategis DMS untuk beralih dari suplier kabel/hardware menjadi mitra solusi terpadu ICT & FTTH bernilai tambah tinggi."
};

export const slideDataEn = {
  "badge": "Part 1 • Foundation & Market Analysis",
  "title": "ICT, FTTH & Cybersecurity Market Trends 2026–2027",
  "subtitle": "National ICT Macro Dynamics: Surging Bandwidth Demand, Decentralized Computing, and Data Protection Compliance",
  "marketMetrics": [
    {
      "label": "Enterprise FTTH Growth",
      "value": "+24.8%",
      "trend": "CAGR 2026–2027",
      "detail": "Surging demand for symmetric fiber connectivity and dedicated high-availability bandwidth."
    },
    {
      "label": "Cybersecurity & SASE",
      "value": "+38.5%",
      "trend": "High Demand",
      "detail": "Shift from conventional firewalls to managed SD-WAN, Zero Trust, and OPEX-based security services."
    },
    {
      "label": "Edge DC & Sovereign Cloud",
      "value": "+31.2%",
      "trend": "Mandatory PDP",
      "detail": "Data Protection Law (UU PDP) mandates local data residency in certified Indonesian Tier III facilities."
    }
  ],
  "macroDrivers": [
    {
      "title": "Hyper-Connected Enterprise & B2B FTTH",
      "growth": "+28% YoY",
      "tag": "Bandwidth Upgrade",
      "desc": "Mass migration from consumer broadband to dedicated B2B FTTH with 99.8%+ SLA guarantees."
    },
    {
      "title": "Data Sovereignty & Edge Infrastructure",
      "growth": "+32% Adoption",
      "tag": "Regulatory Compliance",
      "desc": "Mandatory local data residency drives rapid adoption of private sovereign clouds and colocation facilities."
    },
    {
      "title": "Managed Cybersecurity & SASE (Zero-Trust)",
      "growth": "+45% IT Spend",
      "tag": "Cyber Resilience",
      "desc": "Escalating ransomware threats compel mid-market enterprises to adopt managed firewall (FWaaS) and SD-WAN."
    },
    {
      "title": "AI-Driven Automation & Operational Efficiency",
      "growth": "+50% AI Projects",
      "tag": "Smart Business",
      "desc": "Enterprises demand automated IT workflows, AIOps network optimization, and smart IoT telemetry."
    }
  ],
  "implicationForDMS": "DMS's strategic window to expand beyond hardware supply into a trusted managed ICT & FTTH partner solving enterprise efficiency and compliance."
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 4,
  "folder": "04",
  "sectionId": 1,
  "navTitle": {
    "in": "Tren Pasar ICT & FTTH",
    "en": "ICT & FTTH Trends"
  },
  "headerTitle": {
    "in": "Tren Pasar ICT & FTTH",
    "en": "ICT & FTTH Trends"
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
