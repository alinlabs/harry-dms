import { useLanguage } from '@/contexts/LanguageContext';

export interface APNStakeholder {
  role: string;
  position: string;
  concern: string;
  dmsApproach: string;
}

export interface APNPillar {
  phase: string;
  pillarName: string;
  products: string;
  valueAndMargin: string;
  objective: string;
}

export interface APNMilestone {
  period: string;
  action: string;
  pic: string;
}

export interface APNSingleExample {
  docCode: string;
  accountName: string;
  vertical: string;
  picSales: string;
  supervisor: string;
  pipelineStage: string;
  targetClose: string;
  // Unsur 01: Profil Akun, Skala & Kapasitas Anggaran
  element01: {
    number: string;
    title: string;
    facilityScale: string;
    budgetCycle: string;
    summary: string;
  };
  // Unsur 02: Audit Infrastruktur Eksisting & Pain Points
  element02: {
    number: string;
    title: string;
    incumbentStatus: string;
    painPoints: { issue: string; impact: string }[];
  };
  // Unsur 03: Peta Pengambil Keputusan (DMU Mapping)
  element03: {
    number: string;
    title: string;
    stakeholders: APNStakeholder[];
  };
  // Unsur 04: Matriks Solusi 3 Pilar Produk (Land & Expand)
  element04: {
    number: string;
    title: string;
    pillars: APNPillar[];
  };
  // Unsur 05: Intelijen Kompetitor & Strategi Diferensiasi
  element05: {
    number: string;
    title: string;
    competitors: string;
    dmsEdge: string;
    strategy: string;
  };
  // Unsur 06: Simulasi Nilai Kontrak, Gross Profit & MRR
  element06: {
    number: string;
    title: string;
    totalContractValue: string;
    grossProfit: string;
    recurringRevenue: string;
    commercialScheme: string;
  };
  // Unsur 07: Rencana Aksi (Action Plan) & Jadwal Closing
  element07: {
    number: string;
    title: string;
    milestones: APNMilestone[];
  };
}

export const slideDataId = {
  sectionBadge: "Bagian 3 • Team & Sales Execution",
  title: "Detail Lembar Kerja APN (Simulasi Akun B2B)",
  subtitle: "Simulasi 7 Unsur Wajib APN DMS Lintas 3 Pilar Produk: Ringkas, Terukur & Berorientasi Closing",
  apnDocument: {
    docCode: "APN-DMS-2026-IND-014",
    accountName: "PT Kawasan Industri Nusantara (35 Pabrik Tenant & Command Center)",
    vertical: "Kawasan Industri & Properti Komersial",
    picSales: "Sales New 1 (Hunter) + Sales Existing 1 & 2",
    supervisor: "Harry Gultom (Sales Manager)",
    pipelineStage: "Stage 3 • PoC & SPH",
    targetClose: "Target Q2 2026",
    element01: {
      number: "01",
      title: "Profil & Anggaran Akun",
      facilityScale: "420 Hektar • 35 Tenant Pabrik • 1 Command Center",
      budgetCycle: "Rp 5,2 Miliar (Alokasi CAPEX/OPEX Digitalisasi Q2)",
      summary: "Modernisasi tulang punggung fiber, display komando kawasan, dan otomasi perangkat CPE tenant."
    },
    element02: {
      number: "02",
      title: "Audit Infrastruktur & Pain Points",
      incumbentStatus: "4 Vendor Terpecah (ISP Tier-1, Subkon Kabel, 2 Vendor Hardware)",
      painPoints: [
        { issue: "MTTR Lambat (>24 Jam)", impact: "Saling lempar tanggung jawab (finger-pointing) saat koneksi down." },
        { issue: "350+ ONT Manual", impact: "Belum ada Automatic Configuration Server (ACS); konfigurasi memakan waktu." },
        { issue: "Nol Pusat Kendali Visual", impact: "Belum punya videotron pusat komando & tanpa perlindungan OT/IT siber." }
      ]
    },
    element03: {
      number: "03",
      title: "Peta Pengambil Keputusan (DMU)",
      stakeholders: [
        {
          role: "Economic Buyer",
          position: "Direktur Ops & CFO",
          concern: "Efisiensi OPEX & kepastian SLA <2 jam",
          dmsApproach: "Skema Managed Service 36 bulan (ringan CAPEX)"
        },
        {
          role: "Technical Buyer",
          position: "GM IT & Infrastruktur",
          concern: "Keandalan fiber & sentralisasi ACS",
          dmsApproach: "Live PoC ACS terpusat + GPON OLT redundan"
        },
        {
          role: "Procurement",
          position: "Head of Procurement",
          concern: "Harga kompetitif & garansi 1 pintu",
          dmsApproach: "Bundling White Label IFP/Videotron hemat 22% TCO"
        }
      ]
    },
    element04: {
      number: "04",
      title: "Matriks Solusi 3 Pilar (Land & Expand)",
      pillars: [
        {
          phase: "Pilar 1 (Land)",
          pillarName: "Produk Eksisting",
          products: "ADSS Cable, Dropwire, GPON OLT, ONT 5G WiFi & ACS",
          valueAndMargin: "Rp 1,15 M (GP 32%)",
          objective: "Kuasai jaringan fisik & kunci manajemen CPE via ACS."
        },
        {
          phase: "Pilar 2 (Expand)",
          pillarName: "Pengembangan Produk",
          products: "Media Digital Signage (Oxygen) 20 Titik + DC Backup",
          valueAndMargin: "Rp 1,20 M (GP 41%)",
          objective: "Jadikan Signage media komersial kawasan & integrasi server."
        },
        {
          phase: "Pilar 3 (Scale)",
          pillarName: "Ekspansi Produk Baru",
          products: "White Label IFP/Videotron & IoT Estate Dashboard (SaaS)",
          valueAndMargin: "Rp 1,50 M (GP 56%)",
          objective: "Kunci kontrak berlangganan 36 bulan dengan margin tertinggi."
        }
      ]
    },
    element05: {
      number: "05",
      title: "Kompetitor & Diferensiasi DMS",
      competitors: "ISP Tier-1 (birokrasi lambat & mahal) + Pedagang Kabel (jual putus tanpa SLA)",
      dmsEdge: "Turnkey Solution 1 Pintu + SLA Onsite <2 Jam + Hemat 22% TCO",
      strategy: "Menolak perang harga kabel; mengunci klien dengan solusi terintegrasi 3 Pilar + kontrak jangka panjang."
    },
    element06: {
      number: "06",
      title: "Simulasi Finansial Kontrak",
      totalContractValue: "Rp 3,85 M",
      grossProfit: "44% Blended (Rp 1,69 M)",
      recurringRevenue: "42% Porsi MRR",
      commercialScheme: "30% CAPEX Awal + 70% Kontrak Berlangganan 36 Bulan"
    },
    element07: {
      number: "07",
      title: "Rencana Aksi & Jadwal Closing",
      milestones: [
        { period: "W1–W2", action: "Site survey fiber & PoC ACS + demo Signage Oxygen", pic: "Sales Existing + Tech Team" },
        { period: "W3–W4", action: "Presentasi BoD: Simulasi TCO White Label & IoT Dashboard", pic: "Harry G. + Sales New 1" },
        { period: "W5–W6", action: "Finalisasi SPH, verifikasi 10 kriteria & penandatanganan PO", pic: "Harry G. + Sales New 1" }
      ]
    }
  } as APNSingleExample
};

export const slideDataEn = {
  sectionBadge: "Part 3 • Team & Sales Execution",
  title: "APN Account Plan Blueprint (B2B Account)",
  subtitle: "Real 7-Element APN Simulation Across 3 Product Pillars: Concise, Actionable & Closing-Driven",
  apnDocument: {
    docCode: "APN-DMS-2026-IND-014",
    accountName: "PT Nusantara Industrial Estate (35 Factory Tenants & Command Center)",
    vertical: "Industrial Estate & Commercial Property",
    picSales: "Sales New 1 (Hunter) + Sales Existing 1 & 2",
    supervisor: "Harry Gultom (Sales Manager)",
    pipelineStage: "Stage 3 • PoC & Proposal",
    targetClose: "Target Q2 2026",
    element01: {
      number: "01",
      title: "Account Profile & Budget",
      facilityScale: "420 Hectares • 35 Tenant Factories • 1 Command Center",
      budgetCycle: "IDR 5.2 Billion (Q2 Digitalization CAPEX/OPEX)",
      summary: "Backbone fiber modernization, command center visual display, and centralized CPE automation."
    },
    element02: {
      number: "02",
      title: "Infrastructure Audit & Pain Points",
      incumbentStatus: "4 Fragmented Vendors (Tier-1 Telco, Cable Subcon, 2 Hardware Brokers)",
      painPoints: [
        { issue: "Slow MTTR (>24h)", impact: "Cross-vendor blame game during outages; no unified SLA." },
        { issue: "350+ Manual ONTs", impact: "Lacks Automatic Configuration Server (ACS); slow deployment." },
        { issue: "No Command Display", impact: "Zero centralized videotron display & vulnerable OT/IT endpoints." }
      ]
    },
    element03: {
      number: "03",
      title: "Decision Making Unit (DMU)",
      stakeholders: [
        {
          role: "Economic Buyer",
          position: "Ops Director & CFO",
          concern: "OPEX optimization & guaranteed <2h SLA",
          dmsApproach: "36-month Managed Service model (CAPEX relief)"
        },
        {
          role: "Technical Buyer",
          position: "GM IT & Infrastructure",
          concern: "Fiber reliability & centralized ACS automation",
          dmsApproach: "Live PoC of centralized ACS + redundant OLT"
        },
        {
          role: "Procurement",
          position: "Head of Procurement",
          concern: "Fair hardware pricing & 1-window warranty",
          dmsApproach: "White Label IFP/Videotron bundle (22% TCO savings)"
        }
      ]
    },
    element04: {
      number: "04",
      title: "3-Pillar Solution Matrix (Land & Expand)",
      pillars: [
        {
          phase: "Pillar 1 (Land)",
          pillarName: "Existing Products",
          products: "ADSS Cable, Dropwire, GPON OLT, 5G WiFi ONT & ACS",
          valueAndMargin: "IDR 1.15B (32% GP)",
          objective: "Secure physical fiber infrastructure & lock CPE management."
        },
        {
          phase: "Pillar 2 (Expand)",
          pillarName: "Product Development",
          products: "Digital Signage Media (Oxygen) 20 Units + DC Backup",
          valueAndMargin: "IDR 1.20B (41% GP)",
          objective: "Establish digital signage revenue network & data integration."
        },
        {
          phase: "Pillar 3 (Scale)",
          pillarName: "New Product Expansion",
          products: "White Label IFP/Videotron & IoT Estate Dashboard (SaaS)",
          valueAndMargin: "IDR 1.50B (56% GP)",
          objective: "Lock high-margin 36-month subscription recurring revenue."
        }
      ]
    },
    element05: {
      number: "05",
      title: "Competitor Intel & DMS Edge",
      competitors: "Tier-1 Telco (slow, rigid, costly) + Cable Dealers (box movers without SLA)",
      dmsEdge: "Turnkey 1-Stop SLA <2h + 22% TCO Savings",
      strategy: "Reject commodity cable price wars; secure client via end-to-end 3-Pillar ecosystem & recurring SLA."
    },
    element06: {
      number: "06",
      title: "Commercial & Financial Simulation",
      totalContractValue: "IDR 3.85B",
      grossProfit: "44% Blended (IDR 1.69B)",
      recurringRevenue: "42% MRR Share",
      commercialScheme: "30% Upfront CAPEX + 70% 36-Month Subscription"
    },
    element07: {
      number: "07",
      title: "Action Plan & Closing Schedule",
      milestones: [
        { period: "W1–W2", action: "Fiber route survey & PoC ACS + Oxygen Signage demo", pic: "Sales Existing + Tech Team" },
        { period: "W3–W4", action: "BoD Pitch: White Label TCO model & IoT Dashboard", pic: "Harry G. + Sales New 1" },
        { period: "W5–W6", action: "Finalize proposal, 10-criteria check & PO signoff", pic: "Harry G. + Sales New 1" }
      ]
    }
  } as APNSingleExample
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  "slideNumber": 29,
  "folder": "29",
  "sectionId": 3,
  "navTitle": {
    "in": "Detail Contoh APN",
    "en": "APN Implementation Example"
  },
  "headerTitle": {
    "in": "Detail Contoh APN",
    "en": "APN Implementation Example"
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
