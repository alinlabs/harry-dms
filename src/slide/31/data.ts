import { useLanguage } from '@/contexts/LanguageContext';

export interface BankCaseElementEntry {
  step: string;
  elementName: string;
  content: string;
  subHighlight?: string;
}

export interface StructuredBankCaseExample {
  caseCode: string;
  status: 'WON' | 'LOST';
  statusLabel: string;
  projectTitle: string;
  clientSegment: string;
  picTeam: string;
  dealValue: string;
  grossMargin: string;
  commercialModel: string;
  // 6 Unsur Wajib Sesuai Slide 25 (01 s/d 06)
  elements: BankCaseElementEntry[];
}

export const slideDataId = {
  sectionBadge: "Bagian 4 • Tim & Sales Management",
  title: "Detail Contoh Rekapan Bank Case (Sesuai 6 Unsur Baku DMS)",
  subtitle: "Perbandingan Lengkap 6 Unsur Rekapan antara Proyek Berhasil (Won Case) vs Proyek Gagal (Lost Case)",
  wonCase: {
    caseCode: "BC-2026-WON-008",
    status: "WON" as const,
    statusLabel: "CONTOH 1 • PROYEK BERHASIL (WON CASE)",
    projectTitle: "Modernisasi Jaringan Fiber, Digital Signage & Sistem Monitoring Gedung Perkantoran & Ritel",
    clientSegment: "Properti Komersial & Hospitality (Gedung 28 Lantai)",
    picTeam: "Harry Gultom + Sales Existing 2 + Sales New 1",
    dealValue: "Rp 2,40 Miliar",
    grossMargin: "46% Gross Margin",
    commercialModel: "Hybrid (CAPEX + 36 Bln MRR)",
    elements: [
      {
        step: "01",
        elementName: "Identitas Proyek & Pilar Produk",
        content: "Bundel 3 Pilar: Existing (GPON OLT, ONT 5G, ADSS, ACS) + Pengembangan (Oxygen Signage 45 titik & ICT) + Ekspansi & IP (White Label IFP, Cyber, & SaaS IoT Building Dashboard).",
        subHighlight: "Nilai: Rp 2,40 Miliar · Gross Margin: 46% · Kontrak MRR 36 Bulan"
      },
      {
        step: "02",
        elementName: "Kebutuhan & Ekspektasi Klien",
        content: "Pengelola butuh pembaruan jaringan tenant, signage direktori komersial lobi, dan monitoring utilitas gedung dalam 1 kontrak.",
        subHighlight: "Kriteria Utama DMU: Single Point of Contact, SLA <2 Jam, & efisiensi OPEX"
      },
      {
        step: "03",
        elementName: "Peta Kompetitor & Harga Lawan",
        content: "Lawan ISP Tier-1 (hanya pipa bandwidth Rp 1,9 M, SLA 12 jam) dan 2 vendor layar terpisah tanpa koordinasi.",
        subHighlight: "Kelemahan Lawan: Solusi terfragmentasi & biaya total (TCO) 22% lebih mahal"
      },
      {
        step: "04",
        elementName: "Evaluasi Arsitektur Solusi DMS",
        content: "Direksi mengapresiasi manajemen otomatis ratusan ONT via ACS, kualitas signage Oxygen, dan 1 pintu akuntabilitas DMS.",
        subHighlight: "Skor Evaluasi Teknis & Komersial Klien: 92/100 (Peringkat 1)"
      },
      {
        step: "05",
        elementName: "Akar Masalah / Faktor Penentu Kemenangan",
        content: "Kemenangan dikunci lewat APN dini, eliminasi multivendor, serta White Label IFP + IoT Dashboard penjaga margin 46%.",
        subHighlight: "Winning Factor: Sinergi 3 Pilar Produk + Diferensiasi White Label & IP"
      },
      {
        step: "06",
        elementName: "Lesson Learned & Koreksi Taktik",
        content: "Standarisasi paket 'Smart Building 3-Pillar Bundle' ke seluruh prospek properti/RS untuk kunci margin >42% dan MRR.",
        subHighlight: "Tindak Lanjut: Diadopsi ke dalam Sales Battle Card Kuartal berjalan"
      }
    ]
  } as StructuredBankCaseExample,
  lostCase: {
    caseCode: "BC-2026-LOST-003",
    status: "LOST" as const,
    statusLabel: "CONTOH 2 • PROYEK GAGAL / KALAH (LOST CASE)",
    projectTitle: "Tender Pengadaan Kabel Fiber Optik, Perangkat OLT/ONT & Laptop Operasional Pabrik",
    clientSegment: "Manufaktur Menengah (Kawasan Industri Bekasi)",
    picTeam: "Sales Existing 1 (Sebelum Disiplin APN)",
    dealValue: "Rp 1,10 Miliar (Lepas)",
    grossMargin: "14% (Tertekan Price War)",
    commercialModel: "Jual-Putus (One-Time Project)",
    elements: [
      {
        step: "01",
        elementName: "Identitas Proyek & Pilar Produk",
        content: "Hanya tawarkan komoditas lepas Pilar 1 (ADSS, Dropwire, OLT/ONT) dan Laptop standar tanpa produk Pengembangan atau IP.",
        subHighlight: "Nilai: Rp 1,10 Miliar · Estimasi Margin Tertekan: 14% · Jual-Putus"
      },
      {
        step: "02",
        elementName: "Kebutuhan & Ekspektasi Klien",
        content: "Pabrik butuh fiber antargudang & laptop staf; karena hanya lewat Purchasing, kriteria dinilai semata dari harga terendah.",
        subHighlight: "Kriteria Evaluasi Klien Saat Itu: 100% Harga Barang Termurah (Lowest Bid)"
      },
      {
        step: "03",
        elementName: "Peta Kompetitor & Harga Lawan",
        content: "Menghadapi 4 subkon/reseller Tier-3 lokal yang membanting harga (price dumping) dengan margin kotor < 8% tanpa SLA.",
        subHighlight: "Manuver Lawan: Diskon ekstrem komoditas kabel & perangkat lepas"
      },
      {
        step: "04",
        elementName: "Evaluasi Arsitektur Solusi DMS",
        content: "DMS dinilai sama dengan toko perangkat biasa karena tidak menampilkan ACS, opsi White Label, atau solusi software.",
        subHighlight: "Respons Klien: 'Spesifikasi barang sama, harga DMS lebih tinggi 9%'"
      },
      {
        step: "05",
        elementName: "Akar Masalah Penyebab Kegagalan",
        content: "1) Masuk reaktif pasca-RFP; 2) Tidak temui IT Manager/CFO; 3) Terjebak jual-putus komoditas tanpa diferensiasi White Label/IP.",
        subHighlight: "Failure Trigger: Tanpa APN, Tanpa Diferensiasi IP/White Label, & Price War"
      },
      {
        step: "06",
        elementName: "Lesson Learned & Koreksi Taktik",
        content: "Wajib susun APN pra-tender: sisipkan otomasi ACS, tawarkan White Label (PC AIO/IFP), dan bundel Managed Service / IoT.",
        subHighlight: "Aturan Baru: Dilarang ikut tender komoditas murni tanpa bundel nilai tambah"
      }
    ]
  } as StructuredBankCaseExample,
  bottomTakeaway: "Keselarasan 6 Unsur Bank Case: Bukti nyata mengapa komoditas lepas kalah di margin 14%, sedangkan eksekusi 3 Pilar & Ekspansi Produk memenangkan kontrak di margin 46%."
};

export const slideDataEn = {
  sectionBadge: "Part 4 • Team & Sales Management",
  title: "Detailed Bank Case Examples (Aligned with the 6 Standard Elements)",
  subtitle: "Complete 6-Element Side-by-Side Comparison Between a Won Multi-Pillar Project and a Lost Commodity Tender",
  wonCase: {
    caseCode: "BC-2026-WON-008",
    status: "WON" as const,
    statusLabel: "EXAMPLE 1 • SUCCESSFUL PROJECT (WON CASE)",
    projectTitle: "Fiber Network, Digital Signage & Integrated Monitoring Modernization for Commercial Tower",
    clientSegment: "Commercial Real Estate & Hospitality (28-Story Tower)",
    picTeam: "Harry Gultom + Sales Existing 2 + Sales New 1",
    dealValue: "IDR 2.40 Billion",
    grossMargin: "46% Gross Margin",
    commercialModel: "Hybrid (CAPEX + 36-Mo MRR)",
    elements: [
      {
        step: "01",
        elementName: "Project Identity & Product Pillars",
        content: "3-Pillar Bundle: Existing (GPON OLT, 5G WiFi ONT, ADSS, ACS) + Development (Oxygen Signage 45 points & ICT) + Expansion & IP (White Label IFP, Cyber, & IoT SaaS).",
        subHighlight: "Value: IDR 2.40B · Gross Margin: 46% · 36-Month MRR Contract"
      },
      {
        step: "02",
        elementName: "Client Needs & Buyer Criteria",
        content: "Client required zero-downtime tenant upgrades, commercial lobby signage monetization, and centralized utility monitoring under one SLA contract.",
        subHighlight: "Core DMU Criteria: Single Point of Contact, <2h SLA, & OPEX efficiency"
      },
      {
        step: "03",
        elementName: "Competitor Map & Pricing",
        content: "Faced a Tier-1 Telco (quoting bandwidth alone at IDR 1.9B with 12h SLA) plus 2 separate AV/IT hardware resellers with uncoordinated quotes.",
        subHighlight: "Competitor Gap: Fragmented solutions & 22% higher Total Cost of Ownership"
      },
      {
        step: "04",
        elementName: "DMS Solution Architecture Evaluation",
        content: "Client BoD praised centralized ACS automation for hundreds of ONTs, visual quality of Oxygen Signage & IFP, and 1-stop DMS accountability.",
        subHighlight: "Client Technical & Commercial Score: 92/100 (Ranked #1)"
      },
      {
        step: "05",
        elementName: "Root Cause / Decisive Winning Factor",
        content: "Secured early via APN, eliminated multi-vendor friction, and leveraged White Label IFP + IoT Dashboard to protect 46% Gross Margin.",
        subHighlight: "Winning Factor: 3-Pillar Synergy + White Label & Value-Added Differentiation"
      },
      {
        step: "06",
        elementName: "Lesson Learned & Playbook Update",
        content: "Standardize 'Smart Building 3-Pillar Bundle' as mandatory template across all towers/hospitals to lock in >42% margins and recurring MRR.",
        subHighlight: "Action Taken: Codified into the Q2 Sales Battle Card repository"
      }
    ]
  } as StructuredBankCaseExample,
  lostCase: {
    caseCode: "BC-2026-LOST-003",
    status: "LOST" as const,
    statusLabel: "EXAMPLE 2 • FAILED TENDER (LOST CASE)",
    projectTitle: "Optical Fiber Cable, OLT/ONT Hardware & Operational Laptop Procurement Tender",
    clientSegment: "Mid-Market Manufacturing Plant (Bekasi Industrial Estate)",
    picTeam: "Sales Existing 1 (Prior to APN Governance)",
    dealValue: "IDR 1.10 Billion (Missed)",
    grossMargin: "14% (Price-War Compressed)",
    commercialModel: "One-Off Hardware Sale",
    elements: [
      {
        step: "01",
        elementName: "Project Identity & Product Pillars",
        content: "Quoted isolated Pillar 1 commodities (ADSS, Dropwire, OLT/ONT) and Laptops following RFP BoQ, omitting Development and White Label/IP lines.",
        subHighlight: "Value: IDR 1.10B · Compressed Margin: 14% · One-Time Transaction"
      },
      {
        step: "02",
        elementName: "Client Needs & Buyer Criteria",
        content: "Factory needed inter-warehouse fiber and PCs; engaged only Purchasing staff, so evaluation was reduced 100% to lowest unit price.",
        subHighlight: "Client Evaluation Metric at the Time: 100% Lowest Unit Price Bid"
      },
      {
        step: "03",
        elementName: "Competitor Map & Pricing",
        content: "Competed against 4 local Tier-3 resellers price dumping at <8% gross margin without post-sales SLA guarantees.",
        subHighlight: "Competitor Maneuver: Extreme unit price discounting on commodity cables"
      },
      {
        step: "04",
        elementName: "DMS Solution Architecture Evaluation",
        content: "DMS was perceived as a generic trader because it omitted ACS automation, lower-TCO White Label hardware, and software value.",
        subHighlight: "Client Feedback: 'Identical hardware specs, DMS price is 9% higher'"
      },
      {
        step: "05",
        elementName: "Root Cause Failure Analysis",
        content: "1) Entered reactively post-RFP; 2) Failed to engage IT Manager/CFO; 3) Trapped in commodity price war without White Label/IP options.",
        subHighlight: "Failure Trigger: No APN, Zero IP/White Label Differentiation, & Price War"
      },
      {
        step: "06",
        elementName: "Lesson Learned & Playbook Update",
        content: "Mandate early APN re-framing: embed ACS automation, offer White Label (AIO/IFP), and bundle Managed Services / IoT to disqualify brokers.",
        subHighlight: "New Rule: Prohibited from bidding pure commodity BoQs without value bundles"
      }
    ]
  } as StructuredBankCaseExample,
  bottomTakeaway: "6-Element Bank Case Alignment: Proves empirically why isolated commodity bids lose at 14% margin, whereas 3-Pillar & Product Expansion execution wins at 46% margin."
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 31,
  "folder": "31",
  "sectionId": 3,
  "navTitle": {
    "in": "Detail Contoh Bank Case",
    "en": "Bank Case Examples"
  },
  "headerTitle": {
    "in": "Detail Contoh Bank Case",
    "en": "Bank Case Examples"
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
