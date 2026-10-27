import { useLanguage } from '@/contexts/LanguageContext';
export interface CompanyPoint {
  id: string;
  name: string;
  shortName: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  swotQuadrant: 'q_so' | 'q_wo' | 'q_wt' | 'q_st';
  swotCode: 'S-O' | 'W-O' | 'W-T' | 'S-T';
  swotTitle: string;
  x: number; // 0 to 100: Faktor Internal (Kelemahan -> Kekuatan Solusi & Agilitas)
  y: number; // 0 to 100: Faktor Eksternal (Ancaman -> Peluang Pasar B2B FTTH)
  role: string;
  desc: string;
  strengths: string;
  weaknesses: string;
  opportunities: string;
  threats: string;
  swotStrategy: string;
  isDMS?: boolean;
  isPartner?: boolean;
}

export interface QuadrantDefinition {
  id: 'q_so' | 'q_wo' | 'q_wt' | 'q_st';
  swotCode: 'S-O' | 'W-O' | 'W-T' | 'S-T';
  name: string;
  title: string;
  badge: string;
  color: string;
  borderColor: string;
  bgLight: string;
  bgDark: string;
  coreTheme: string;
  desc: string;
  strategicNote: string;
}

export const slideDataId = {
  badge: "Bagian 2 • Posisi & Keunggulan",
  title: "Matriks Analisis Strategi SWOT Lanskap Kompetisi ICT & FTTH",
  subtitle: "Evaluasi Posisi Pemain Berdasarkan Faktor Internal (Kekuatan & Kelemahan) serta Faktor Eksternal (Peluang & Ancaman Pasar) — Diturunkan Menjadi 3 Tier di Halaman 7",
  xAxisLabel: "Faktor Internal: Kelemahan (Modal/Aset Fisik Terbatas) ➔ Kekuatan (Agilitas & Turnkey ICT)",
  yAxisLabel: "Faktor Eksternal: Ancaman (Perang Tarif Komoditas) ➔ Peluang (B2B Managed Services & FTTH)",
  
  quadrants: [
    {
      id: "q_so",
      swotCode: "S-O",
      name: "Kuadran I: Strategi S-O (Agresif / Pertumbuhan)",
      title: "Strategi S-O: Agresif (Growth & Expansion)",
      badge: "Strengths - Opportunities",
      color: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-300 dark:border-emerald-700",
      bgLight: "bg-emerald-500/5",
      bgDark: "dark:bg-emerald-950/20",
      coreTheme: "PT DMS (Target) & Sinergi Oxygen.id",
      desc: "Solusi ICT terpadu, respons onsite <2 jam, dan integrasi turnkey untuk menangkap digitalisasi enterprise dan gedung komersial.",
      strategicNote: "Sweet spot DMS: Bersinergi dengan pemilik backbone (Oxygen.id) sebagai turnkey solution integrator tanpa beban capex kabel laut."
    },
    {
      id: "q_wo",
      swotCode: "W-O",
      name: "Kuadran II: Strategi W-O (Reorientasi / Aliansi)",
      title: "Strategi W-O: Reorientasi (Turnaround & Sinergi)",
      badge: "Weaknesses - Opportunities",
      color: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-300 dark:border-cyan-700",
      bgLight: "bg-cyan-500/5",
      bgDark: "dark:bg-cyan-950/20",
      coreTheme: "Wholesale Open-Access & Challengers",
      desc: "Mengatasi keterbatasan modal backbone mandiri dengan memanfaatkan model wholesale open-access, kemitraan jalur khusus, dan bundling layanan.",
      strategicNote: "Pemain wholesale & open access memperluas jangkauan via aliansi netral, membuka potensi kolaborasi suplai perangkat dengan DMS."
    },
    {
      id: "q_wt",
      swotCode: "W-T",
      name: "Kuadran III: Strategi W-T (Defensif / Niche Survival)",
      title: "Strategi W-T: Defensif (Survival & Niche)",
      badge: "Weaknesses - Threats",
      color: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-300 dark:border-amber-700",
      bgLight: "bg-amber-500/5",
      bgDark: "dark:bg-amber-950/20",
      coreTheme: "Subcon Rollout & Local ISPs",
      desc: "Menghadapi modal terbatas dan ancaman perang tarif penarikan kabel fisik serta komoditisasi bandwidth yang menekan margin.",
      strategicNote: "Subkon kabel fisik rentan perang harga. DMS membedakan diri dengan naik kelas menjadi System Integrator hardware, data center & signage."
    },
    {
      id: "q_st",
      swotCode: "S-T",
      name: "Kuadran IV: Strategi S-T (Diversifikasi)",
      title: "Strategi S-T: Diversifikasi (Competitive Defense)",
      badge: "Strengths - Threats",
      color: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-300 dark:border-purple-700",
      bgLight: "bg-purple-500/5",
      bgDark: "dark:bg-purple-950/20",
      coreTheme: "National Backbone Giants (Telco BUMN/Konglomerasi)",
      desc: "Memanfaatkan aset skala nasional dan jutaan home-pass untuk meredam perang tarif ritel via diversifikasi FMC & enterprise besar.",
      strategicNote: "Raksasa nasional unggul aset namun lambat birokrasi. DMS mengisi celah respon cepat B2B enterprise tanpa bertarung di perang kabel."
    }
  ] as QuadrantDefinition[],

  companies: [
    // Kuadran I: S-O (Agresif & Sinergi Pertumbuhan) -> X > 50, Y > 50
    {
      id: "dms",
      name: "PT Digital Multi Sinergy (DMS)",
      shortName: "PT DMS (Target)",
      tier: "Tier 3",
      swotQuadrant: "q_so",
      swotCode: "S-O",
      swotTitle: "Kuadran I: S-O (Strategi Agresif & Sinergi Pertumbuhan)",
      x: 80,
      y: 78,
      isDMS: true,
      role: "Turnkey ICT Solution Integrator, Hardware Pasif/Aktif, Data Center & Digital Signage",
      desc: "Solusi ICT satu pintu berkecepatan tinggi dengan SLA onsite < 2 jam, penyedia material pasif/aktif FTTH, rack server/data center, dan solusi enterprise terpadu.",
      strengths: "Kecepatan eksekusi onsite <2 jam, fleksibilitas penawaran kustom B2B, bundling hardware turnkey, dan kelincahan tim teknis tanpa birokrasi berjenjang.",
      weaknesses: "Ketiadaan kepemilikan backbone kabel laut/antarpulau mandiri (diatasi sempurna melalui kemitraan strategis).",
      opportunities: "Lonjakan kebutuhan tenant multi-cabang, digital signage ritel/F&B, dan infrastruktur edge computing di gedung-gedung komersial.",
      threats: "Perang harga komoditas bandwidth pipa internet mentah murni jika tidak dibundling dengan nilai tambah IT.",
      swotStrategy: "Strategi S-O: Maksimalkan sinergi dengan Oxygen.id untuk mengunci pasar captive gedung komersial dan tawarkan bundling hardware turnkey terintegrasi."
    },
    {
      id: "mora",
      name: "PT Mora Telematika Indonesia Tbk (Moratelindo / Oxygen.id)",
      shortName: "Moratelindo / Oxygen.id",
      tier: "Tier 2",
      swotQuadrant: "q_so",
      swotCode: "S-O",
      swotTitle: "Kuadran I: S-O (Strategi Agresif & Sinergi Pertumbuhan)",
      x: 65,
      y: 64,
      isPartner: true,
      role: "Backbone Fiber Optik Mandiri & Ekosistem Sinergi Strategis Utama DMS",
      desc: "Tulang punggung konektivitas fiber optik ribuan kilometer di gedung-gedung komersial, interkoneksi data center nasional, dan mitra ekosistem strategis DMS.",
      strengths: "Jaringan fiber optik mandiri, interkoneksi data center nasional, penetrasi gedung komersial masif, dan bandwidth simetris 1:1.",
      weaknesses: "Brand awareness segmen ritel belum semasif Telkom di pelosok residential sekunder.",
      opportunities: "Permintaan konektivitas simetris B2B enterprise dan kemitraan integrasi solusi lokal turnkey.",
      threats: "Perang diskon bandwidth korporasi dari raksasa incumbent telco.",
      swotStrategy: "Strategi S-O: Perkuat penetrasi B2B di gedung tergelar dengan kolaborasi turnkey ICT bersama PT DMS."
    },

    // Kuadran II: W-O (Reorientasi & Sinergi Aliansi) -> X < 50, Y > 50
    {
      id: "fiberstar",
      name: "PT Mega Akses Persada (FiberStar)",
      shortName: "FiberStar",
      tier: "Tier 2",
      swotQuadrant: "q_wo",
      swotCode: "W-O",
      swotTitle: "Kuadran II: W-O (Strategi Reorientasi & Kemitraan Netral)",
      x: 38,
      y: 76,
      role: "Infrastruktur Fiber Optik Wholesale Open-Access Netral Terluas",
      desc: "Fokus murni pada penggelaran jaringan fiber optik netral tanpa menjual layanan ritel sendiri, menjadi backbone bagi puluhan ISP di Indonesia.",
      strengths: "Model open-access netral, dipercaya puluhan ISP tanpa konflik kepentingan bisnis ritel.",
      weaknesses: "Bergantung pada volume penjualan ISP mitra, tidak memiliki relasi kepemilikan langsung ke end-user korporat.",
      opportunities: "Tren migrasi ISP lokal ke sewa jaringan open-access demi efisiensi capex infrastruktur.",
      threats: "Konsolidasi operator besar yang membangun jaringan last-mile mandiri secara tertutup.",
      swotStrategy: "Strategi W-O: Menangkap peluang lonjakan ISP regional dengan ekspansi jalur sewa serat optik netral terintegrasi."
    },
    {
      id: "surge",
      name: "PT Solusi Sinergi Digital Tbk (Surge / Starlite)",
      shortName: "Surge / Starlite",
      tier: "Tier 2",
      swotQuadrant: "q_wo",
      swotCode: "W-O",
      swotTitle: "Kuadran II: W-O (Strategi Reorientasi & Koridor Rel)",
      x: 26,
      y: 68,
      role: "Penyedia Konektivitas Jalur Kereta Api & Edge Data Center Terdistribusi",
      desc: "Menggelar kabel fiber optik di sepanjang jalur rel PT KAI pulau Jawa untuk menyediakan konektivitas terjangkau dan edge computing.",
      strengths: "Right-of-Way unik di sepanjang jalur kereta api pulau Jawa, latensi rendah antarkota.",
      weaknesses: "Keterbatasan jaringan distribusi last-mile di luar koridor rel kereta api.",
      opportunities: "Kebutuhan konektivitas terjangkau di kota tier-2 dan tier-3 sepanjang pulau Jawa.",
      threats: "Ketergantungan kontrak konsesi hak lintas dengan operator transportasi rel publik.",
      swotStrategy: "Strategi W-O: Menjalin aliansi dengan ISP lokal untuk mendistribusikan bandwidth dari koridor rel ke pelanggan akhir."
    },
    {
      id: "myrep",
      name: "MyRepublic Indonesia",
      shortName: "MyRepublic",
      tier: "Tier 2",
      swotQuadrant: "q_wo",
      swotCode: "W-O",
      swotTitle: "Kuadran II: W-O (Strategi Reorientasi & Penetrasi Urban)",
      x: 44,
      y: 60,
      role: "Penyedia Layanan Broadband Agresif untuk Segmen Urban & Gamer",
      desc: "Menawarkan koneksi internet kecepatan tinggi tanpa FUP dan latensi rendah untuk residensial perkotaan dan small-medium business.",
      strengths: "Branding kuat di kalangan gamer dan profesional muda, paket fleksibel tanpa batas kuota (no FUP).",
      weaknesses: "Ketiadaan kabel laut mandiri antarpulau, capex penggelaran fisik mandiri terbatas.",
      opportunities: "Pertumbuhan ekosistem gaming, kreator digital, dan kerja jarak jauh di kota-kota besar.",
      threats: "Perang harga paket murah dari operator raksasa FMC.",
      swotStrategy: "Strategi W-O: Memanfaatkan jaringan wholesale pihak ketiga untuk penetrasi cepat tanpa beban capex fisik berlebih."
    },
    {
      id: "cbn",
      name: "PT Cyberindo Aditama (CBN Fiber)",
      shortName: "CBN Fiber",
      tier: "Tier 3",
      swotQuadrant: "q_wo",
      swotCode: "W-O",
      swotTitle: "Kuadran II: W-O (Strategi Reorientasi & Niche Butik B2B)",
      x: 34,
      y: 82,
      role: "Penyedia Internet Butik Korporasi & Data Center Komersial",
      desc: "Dikenal dengan keandalan koneksi korporat ber-SLA tinggi dan kepemilikan fasilitas data center tier-3 di kota-kota utama.",
      strengths: "Reputasi kualitas jaringan korporat yang stabil dan layanan pelanggan butik responsif.",
      weaknesses: "Cakupan jaringan last-mile fisik terbatas pada kawasan bisnis tertentu.",
      opportunities: "Kebutuhan hybrid cloud dan konektivitas korporat berlatensi ultra-rendah.",
      threats: "Penetrasi agresif paket enterprise berdiskon tinggi dari operator Tier 1.",
      swotStrategy: "Strategi W-O: Mengoptimalkan aliansi jaringan dan fokus pada niche korporat berstandar keandalan ketat."
    },

    // Kuadran III: W-T (Defensif / Niche Survival) -> X < 50, Y < 50
    {
      id: "subcon",
      name: "Sub-contractor / Local FTTH Rollout Partners",
      shortName: "Local FTTH Rollout Subcon",
      tier: "Tier 3",
      swotQuadrant: "q_wt",
      swotCode: "W-T",
      swotTitle: "Kuadran III: W-T (Strategi Defensif & Efisiensi Operasional)",
      x: 18,
      y: 22,
      role: "Pelaksana Konstruksi Sipil, Penarikan Kabel Fisik & Pemasangan ODP",
      desc: "Kontraktor pelaksana penggelaran kabel dan tiang di lapangan berdasarkan order kerja tender operator telekomunikasi.",
      strengths: "Ketersediaan tenaga kerja lapangan berbiaya rendah dan pemahaman perizinan lokal RT/RW.",
      weaknesses: "Margin sangat tipis, tidak memiliki recurring revenue, ketergantungan 100% pada tender proyek.",
      opportunities: "Program akselerasi pemerataan jaringan broadband pemerintah.",
      threats: "Pemotongan budget proyek dari operator, penundaan termin pembayaran tender fisik murni.",
      swotStrategy: "Strategi W-T: Efisiensi biaya tenaga kerja dan bertahan pada proyek penggelaran klaster lokal."
    },
    {
      id: "regional-isps",
      name: "Regional ISPs (Megavision, BaliFiber, Bnetfit, dll.)",
      shortName: "Regional ISPs",
      tier: "Tier 3",
      swotQuadrant: "q_wt",
      swotCode: "W-T",
      swotTitle: "Kuadran III: W-T (Strategi Defensif & Retensi Klaster Lokal)",
      x: 30,
      y: 34,
      role: "Penyedia Broadband Berfokus pada Klaster Komunitas Wilayah Tertentu",
      desc: "Menyediakan layanan internet untuk perumahan dan bisnis lokal di wilayah geografi tertentu seperti Bali, Bandung, atau Bogor.",
      strengths: "Kedekatan komunitas lokal, dukungan teknis setempat yang mudah dihubungi.",
      weaknesses: "Keterbatasan modal ekspansi, biaya sewa bandwidth transit / IP transit relatif tinggi.",
      opportunities: "Kawasan perumahan baru di pinggiran kota yang belum dimasuki pemain besar.",
      threats: "Ekspansi jaringan IndiHome atau XL First Media yang masuk membawa paket perang tarif.",
      swotStrategy: "Strategi W-T: Menjaga loyalitas pelanggan lokal melalui layanan personal dan efisiensi transit."
    },

    // Kuadran IV: S-T (Diversifikasi FMC & Enterprise) -> X > 50, Y < 50
    {
      id: "telkom",
      name: "PT Telkom Indonesia Tbk / IndiHome / Telkomsel",
      shortName: "Telkom / IndiHome",
      tier: "Tier 1",
      swotQuadrant: "q_st",
      swotCode: "S-T",
      swotTitle: "Kuadran IV: S-T (Strategi Diversifikasi Portofolio FMC)",
      x: 92,
      y: 34,
      role: "Raksasa Penguasa Backbone Nasional, Spektrum Seluler & Jutaan Pelanggan",
      desc: "Penguasa pangsa pasar terbesar dengan kepemilikan kabel laut darat terlengkap dan penetrasi Fixed-Mobile Convergence (FMC) terluas di Indonesia.",
      strengths: "Modal BUMN raksasa, jaringan kabel laut & darat nasional terlengkap, basis pelanggan terbesar.",
      weaknesses: "Birokrasi penawaran kustom B2B lambat dan bertingkat, ticket size penawaran sangat besar.",
      opportunities: "Proyek digitalisasi BUMN dan inisiatif Smart City skala nasional.",
      threats: "Komoditisasi margin ritel, persaingan harga ISP swasta, churn pelanggan fixed broadband.",
      swotStrategy: "Strategi S-T: Diversifikasi portofolio ke FMC (Telkomsel One) dan managed cloud B2B untuk menahan erosi margin pipa."
    },
    {
      id: "ioh",
      name: "PT Indosat Ooredoo Hutchison (IOH / Indosat HiFi)",
      shortName: "IOH / Indosat HiFi",
      tier: "Tier 1",
      swotQuadrant: "q_st",
      swotCode: "S-T",
      swotTitle: "Kuadran IV: S-T (Strategi Diversifikasi Gigabit Broadband)",
      x: 84,
      y: 40,
      role: "Operator Telco Terkonsolidasi dengan Agresivitas FMC & Gigabit Fiber",
      desc: "Kekuatan sinergi jaringan seluler berskala masif dengan percepatan penetrasi FTTH gigabit untuk pelanggan rumah dan enterprise.",
      strengths: "Basis pelanggan seluler ratusan juta, skala ekonomi besar pasca merger.",
      weaknesses: "Jaringan last-mile fiber mandiri masih dalam tahap percepatan ekspansi.",
      opportunities: "Cross-selling paket FMC kepada basis pelanggan pascabayar seluler korporat.",
      threats: "Perang tarif paket data seluler dan fixed broadband di kota-kota besar.",
      swotStrategy: "Strategi S-T: Diversifikasi paket bundling seluler + fixed broadband terpadu untuk retensi pelanggan."
    },
    {
      id: "xl",
      name: "PT XL Axiata Tbk / Link Net (XL SATU / First Media)",
      shortName: "XL Axiata / Link Net",
      tier: "Tier 1",
      swotQuadrant: "q_st",
      swotCode: "S-T",
      swotTitle: "Kuadran IV: S-T (Strategi Diversifikasi FMC & HFC-to-FTTH)",
      x: 78,
      y: 36,
      role: "Kekuatan Sinergi Kabel Fiber Optik HFC/FTTH & Seluler FMC",
      desc: "Integrasi Link Net (First Media) ke dalam ekosistem XL Axiata memperkuat kapasitas jaringan rumah dan korporasi berkecepatan tinggi.",
      strengths: "Jaringan kabel HFC/FTTH matang di kawasan residensial premium Jabodetabek dan Surabaya.",
      weaknesses: "Proses transisi integrasi organisasi dan migrasi teknologi kabel lama ke FTTH murni.",
      opportunities: "Penetrasi segmen keluarga menengah ke atas dengan penawaran paket hiburan + internet cepat.",
      threats: "Peningkatan persaingan tarif dari ISP baru yang memasang tarif flat agresif.",
      swotStrategy: "Strategi S-T: Mengalihkan basis pelanggan TV kabel ke FTTH fiber optic murni dan layanan FMC."
    },
    {
      id: "pln",
      name: "PT Indonesia Comnets Plus (PLN Icon Plus / ICONNET)",
      shortName: "PLN Icon Plus",
      tier: "Tier 1",
      swotQuadrant: "q_st",
      swotCode: "S-T",
      swotTitle: "Kuadran IV: S-T (Strategi Diversifikasi Hak Lintas RoW Tiang)",
      x: 68,
      y: 26,
      role: "Pemanfaatan Right-of-Way Tiang Listrik PLN Seluruh Indonesia",
      desc: "Menggelar kabel fiber optik langsung pada infrastruktur ketenagalistrikan tiang PLN hingga ke pelosok nusantara.",
      strengths: "Hak lintas (RoW) tiang listrik tanpa hambatan perizinan pemda, jangkauan geografis tak tertandingi.",
      weaknesses: "Kapasitas dukungan teknis purna jual B2B enterprise belum selincah ISP swasta butik.",
      opportunities: "Elektrifikasi digital dan smart metering PLN di seluruh nusantara.",
      threats: "Perang harga broadband murah di area rural dan komoditisasi layanan.",
      swotStrategy: "Strategi S-T: Memanfaatkan tiang PLN untuk penetrasi fixed broadband nasional sambil diversifikasi solusi smart grid."
    }
  ] as CompanyPoint[],

  strategicInsights: [
    {
      title: "1. Kuadran I (S-O Agresif): Formula Sinergi Bersama Oxygen.id",
      desc: "Memadukan backbone Moratelindo (Oxygen.id) dan kelincahan integrasi turnkey DMS untuk merebut digitalisasi tenant gedung komersial."
    },
    {
      title: "2. Hindari Jebakan Kuadran III (W-T Defensif) Subcon Fisik Murni",
      desc: "Subkon galian kabel terjebak margin tipis. DMS naik kelas menjadi System Integrator penyedia hardware, data center & signage."
    },
    {
      title: "3. Jembatan Analisis ke Halaman 7 (Filter 3-Tier)",
      desc: "Hasil evaluasi SWOT 4 Kuadran dikelompokkan menjadi 3 Tier Kompetitor pada Halaman 7 untuk perumusan taktik penjualan terarah."
    }
  ]
};

export const slideDataEn = {
  "badge": "Part 2 • Positioning & Competitive Advantage",
  "title": "SWOT Strategy Analysis Matrix: ICT & FTTH Competition",
  "subtitle": "Market Positioning Evaluation Based on Internal Factors (Strengths & Weaknesses) and External Factors (Opportunities & Threats) — Mapped into 3 Tiers on Slide 7",
  "xAxisLabel": "Internal Factors: Weaknesses (Limited Capital/Physical Assets) ➔ Strengths (Agility & Turnkey ICT)",
  "yAxisLabel": "External Factors: Threats (Commodity Bandwidth Price Wars) ➔ Opportunities (B2B Managed Services & FTTH)",
  "quadrants": [
    {
      "id": "q_so",
      "swotCode": "S-O",
      "name": "Quadrant I: S-O Strategy (Aggressive / Growth)",
      "title": "S-O Strategy: Aggressive (Growth & Expansion)",
      "badge": "Strengths - Opportunities",
      "color": "text-emerald-600 dark:text-emerald-400",
      "borderColor": "border-emerald-300 dark:border-emerald-700",
      "bgLight": "bg-emerald-500/5",
      "bgDark": "dark:bg-emerald-950/20",
      "coreTheme": "PT DMS (Target) & Oxygen.id Strategic Synergy",
      "desc": "Integrated ICT solutions, rapid <2h onsite response, and turnkey agility to capture enterprise and commercial building demand.",
      "strategicNote": "PT DMS Sweet Spot: Partner with fiber backbone leaders (Oxygen.id) as a nimble turnkey integrator without subsea capex burdens."
    },
    {
      "id": "q_wo",
      "swotCode": "W-O",
      "name": "Quadrant II: W-O Strategy (Turnaround / Alliance)",
      "title": "W-O Strategy: Turnaround (Partnerships & Alliances)",
      "badge": "Weaknesses - Opportunities",
      "color": "text-sky-600 dark:text-sky-400",
      "borderColor": "border-sky-300 dark:border-sky-700",
      "bgLight": "bg-sky-500/5",
      "bgDark": "dark:bg-sky-950/20",
      "coreTheme": "Wholesale Open-Access & Niche Fiber Networks",
      "desc": "Overcome backbone capex constraints by leveraging neutral wholesale models, dedicated rights-of-way, and service bundling.",
      "strategicNote": "Wholesale open-access providers seek downstream partners. DMS collaborates with them for enterprise last-mile hardware delivery."
    },
    {
      "id": "q_wt",
      "swotCode": "W-T",
      "name": "Quadrant III: W-T Strategy (Defensive / Niche Retention)",
      "title": "W-T Strategy: Defensive (Retention & Value Protection)",
      "badge": "Weaknesses - Threats",
      "color": "text-amber-600 dark:text-amber-400",
      "borderColor": "border-amber-300 dark:border-amber-700",
      "bgLight": "bg-amber-500/5",
      "bgDark": "dark:bg-amber-950/20",
      "coreTheme": "Subcon Rollout & Local Regional ISPs",
      "desc": "Constrained by working capital and severe cable price wars eroding operating margins.",
      "strategicNote": "Cable subcons face race-to-the-bottom pricing. DMS differentiates by elevating into a System Integrator delivering hardware, DCs & signage."
    },
    {
      "id": "q_st",
      "swotCode": "S-T",
      "name": "Quadrant IV: S-T Strategy (Diversification / Competitive Defense)",
      "title": "S-T Strategy: Diversification (Competitive Defense)",
      "badge": "Strengths - Threats",
      "color": "text-purple-600 dark:text-purple-400",
      "borderColor": "border-purple-300 dark:border-purple-700",
      "bgLight": "bg-purple-500/5",
      "bgDark": "dark:bg-purple-950/20",
      "coreTheme": "National Backbone Giants (State-Owned Telcos / Conglomerates)",
      "desc": "Leverage vast nationwide assets and millions of home-passes to mitigate retail margin compression via FMC and enterprise deals.",
      "strategicNote": "National incumbents possess massive scale but slow bureaucracy. DMS captures enterprise accounts via fast, dedicated onsite service."
    }
  ],
  "companies": [
    {
      "id": "dms",
      "name": "PT Digital Multi Sinergy (DMS)",
      "shortName": "PT DMS (Target)",
      "tier": "Tier 3",
      "swotQuadrant": "q_so",
      "swotCode": "S-O",
      "swotTitle": "Quadrant I: S-O (Aggressive Strategy & Growth Synergy)",
      "x": 80,
      "y": 78,
      "isDMS": true,
      "role": "Turnkey ICT Solution Integrator, Active/Passive Hardware, Data Center & Digital Signage",
      "desc": "High-velocity single-window ICT partner delivering <2-hour onsite SLAs, FTTH optical materials, server rack colocation, and integrated enterprise solutions.",
      "strengths": "Under 2-hour onsite engineering response, flexible custom B2B pricing, turnkey hardware bundling, and lean decision-making free of bureaucratic delays.",
      "weaknesses": "No proprietary subsea or inter-island fiber backbone (effectively solved via strategic partnership with Moratelindo).",
      "opportunities": "Surging enterprise demand across multi-branch retail/F&B, commercial digital displays, and edge computing in Grade-A office towers.",
      "threats": "Commodity raw bandwidth price slashing if sold purely as dumb pipes without managed IT value additions.",
      "swotStrategy": "S-O Strategy: Maximize Oxygen.id synergy to secure commercial building captive tenants and bundle complete turnkey IT hardware packages."
    },
    {
      "id": "mora",
      "name": "PT Mora Telematika Indonesia Tbk (Moratelindo / Oxygen.id)",
      "shortName": "Moratelindo / Oxygen.id",
      "tier": "Tier 2",
      "swotQuadrant": "q_so",
      "swotCode": "S-O",
      "swotTitle": "Quadrant I: S-O (Aggressive Strategy & Growth Synergy)",
      "x": 65,
      "y": 64,
      "isPartner": true,
      "role": "Independent Fiber Backbone & Core Strategic Synergy Partner for DMS",
      "desc": "National backbone spanning tens of thousands of kilometers connecting commercial buildings, data center hubs, and key enterprise corridors.",
      "strengths": "Extensive fiber backbone, national data center interconnects, massive commercial building reach, and 1:1 true symmetric bandwidth.",
      "weaknesses": "Retail brand recognition still lagging behind state-owned incumbents in secondary residential clusters.",
      "opportunities": "Corporate B2B demand for symmetric leased lines and high-margin local turnkey system integration partnerships.",
      "threats": "Price aggressive competition from mobile operators bundling discounted fixed broadband (FMC).",
      "swotStrategy": "S-O Strategy: Harness Moratelindo's high-capacity transport infrastructure while DMS delivers localized, rapid-response enterprise solutions."
    },
    {
      "id": "fiberstar",
      "name": "PT Mega Akses Persada (FiberStar)",
      "shortName": "FiberStar (MAP)",
      "tier": "Tier 2",
      "swotQuadrant": "q_wo",
      "swotCode": "W-O",
      "swotTitle": "Quadrant II: W-O (Turnaround & Wholesale Open-Access)",
      "x": 42,
      "y": 60,
      "role": "Nationwide Neutral Open-Access Wholesale Fiber Infrastructure Provider",
      "desc": "Pure-play open-access wholesale provider leasing fiber optic network capacity to dozens of ISPs without retail B2C conflicts.",
      "strengths": "Neutral open-access business model, trusted by dozens of competing ISPs without retail conflict of interest.",
      "weaknesses": "Lacks direct touchpoints with end-enterprise clients and does not supply active IT hardware or customized application software.",
      "opportunities": "Expanding home-pass networks to suburban growth corridors and high-density industrial parks.",
      "threats": "Heavy capital expenditure depreciation and dependence on ISP tenants' solvency and billing discipline.",
      "swotStrategy": "W-O Strategy: Maintain pure carrier-neutral open-access model and collaborate with regional system integrators."
    },
    {
      "id": "surge",
      "name": "PT Solusi Sinergi Digital Tbk (Surge / Starlite)",
      "shortName": "Surge (WIFI)",
      "tier": "Tier 2",
      "swotQuadrant": "q_wo",
      "swotCode": "W-O",
      "swotTitle": "Quadrant II: W-O (Turnaround & Wholesale Open-Access)",
      "x": 38,
      "y": 55,
      "role": "Railway Right-of-Way Fiber Carrier & Distributed Edge Data Center Provider",
      "desc": "Unique optical fiber network deployed along PT KAI railway corridors across Java, bundled with edge computing pods at train stations.",
      "strengths": "Exclusive railway Right-of-Way (RoW) across Java, low inter-city latency, and rapid edge data center deployment.",
      "weaknesses": "Last-mile reach away from railway lines remains thin; relies heavily on third-party local access providers.",
      "opportunities": "Surging edge data center demand and Tier-2 city internet breakout points along transit corridors.",
      "threats": "High trackside maintenance risks and vulnerability to regional fiber cuts during railway civil works.",
      "swotStrategy": "W-O Strategy: Partner with local access partners to route railway fiber backhaul into nearby industrial estates and smart cities."
    },
    {
      "id": "myrep",
      "name": "MyRepublic Indonesia",
      "shortName": "MyRepublic",
      "tier": "Tier 2",
      "swotQuadrant": "q_st",
      "swotCode": "S-T",
      "swotTitle": "Quadrant IV: S-T (Diversification & Competitive Defense)",
      "x": 58,
      "y": 42,
      "role": "Aggressive High-Speed Broadband Provider for Urban & Gaming Segments",
      "desc": "High-speed broadband provider targeting urban tech enthusiasts, gamers, and small-to-medium enterprises (SME/SMB).",
      "strengths": "Strong brand awareness among gaming communities and digital professionals; transparent low-latency peering.",
      "weaknesses": "Enterprise corporate team is relatively small; primarily focused on mass retail subscription volume.",
      "opportunities": "Penetrating SME shophouse clusters and coworking spaces demanding high-speed internet without complex IT SLAs.",
      "threats": "Price wars against incumbent telcos offering ultra-cheap entry-level FMC packages.",
      "swotStrategy": "S-T Strategy: Defend urban high-ARPU subscriber base with specialized low-latency gaming and home-office features."
    },
    {
      "id": "cbn",
      "name": "PT Cyberindo Aditama (CBN Fiber)",
      "shortName": "CBN Fiber",
      "tier": "Tier 2",
      "swotQuadrant": "q_st",
      "swotCode": "S-T",
      "swotTitle": "Quadrant IV: S-T (Diversification & Competitive Defense)",
      "x": 62,
      "y": 48,
      "role": "Boutique Corporate ISP & Commercial Data Center Facility Provider",
      "desc": "Pioneer corporate ISP in Indonesia with strong presence in commercial business hubs, data centers (Nexcenter), and premium enterprise accounts.",
      "strengths": "Solid enterprise corporate reputation, premium international peering, and high-spec colocation data center facilities.",
      "weaknesses": "Premium pricing model limits penetration in budget-sensitive mid-market commercial segments.",
      "opportunities": "Upselling private cloud, cyber security, and disaster recovery services to existing blue-chip corporate accounts.",
      "threats": "Aggressive enterprise pricing from telco conglomerates bundling mobile data and discounted fiber.",
      "swotStrategy": "S-T Strategy: Focus on premium corporate clients requiring enterprise SLA commitments and multi-cloud interconnection."
    },
    {
      "id": "subcon",
      "name": "Sub-contractor / Local FTTH Rollout Partners",
      "shortName": "Rollout Subcons",
      "tier": "Tier 3",
      "swotQuadrant": "q_wt",
      "swotCode": "W-T",
      "swotTitle": "Quadrant III: W-T (Defensive & Low-Margin Rollout)",
      "x": 25,
      "y": 22,
      "role": "Civil Construction, Physical Cable Pulling, Splicing & ODP Rollout",
      "desc": "Local labor teams executing physical fiber deployment, pole erection, and optical distribution box (ODP) splicing.",
      "strengths": "Low labor deployment costs, flexible field crew scaling, and familiarity with local village/neighborhood permits.",
      "weaknesses": "Thin single-digit gross margins, zero system integration capabilities, and vulnerability to payment delays from main contractors.",
      "opportunities": "Participating in national fiber rollout tenders as specialized field engineering subcontractors.",
      "threats": "Intense price bidding among dozens of competing local subcons eroding operating margins.",
      "swotStrategy": "W-T Strategy: Partner with established integrators like DMS as reliable labor partners while DMS handles engineering & high-value equipment."
    },
    {
      "id": "regional-isps",
      "name": "Regional ISPs (Megavision, BaliFiber, Bnetfit, etc.)",
      "shortName": "Regional ISPs",
      "tier": "Tier 3",
      "swotQuadrant": "q_wt",
      "swotCode": "W-T",
      "swotTitle": "Quadrant III: W-T (Defensive & Niche Clustering)",
      "x": 30,
      "y": 32,
      "role": "Community-Focused Broadband Providers in Specific Regional Clusters",
      "desc": "Local and provincial ISPs servicing localized residential pockets, resorts, and commercial zones outside primary metro hubs.",
      "strengths": "Deep localized market presence, fast local grassroots sales channels, and personalized customer relationships.",
      "weaknesses": "Limited working capital, dependence on upstream IP transit wholesalers, and lack of enterprise IT hardware portfolio.",
      "opportunities": "Capturing regional industrial growth centers and tourist destinations overlooked by national telcos.",
      "threats": "Aggressive territorial expansion by national incumbents rolling out subsidized fiber poles into regional areas.",
      "swotStrategy": "W-T Strategy: Protect profitable local clusters and collaborate with DMS for specialized hardware supply and data center colocation."
    },
    {
      "id": "telkom",
      "name": "PT Telkom Indonesia Tbk / IndiHome / Telkomsel",
      "shortName": "Telkom Group",
      "tier": "Tier 1",
      "swotQuadrant": "q_st",
      "swotCode": "S-T",
      "swotTitle": "Quadrant IV: S-T (Diversification & Incumbent Defense)",
      "x": 75,
      "y": 45,
      "role": "National Telecom Incumbent: Backbone, Cellular Spectrum & Massive Enterprise Reach",
      "desc": "Dominant state-owned telecommunications enterprise controlling nationwide subsea cables, terrestrial fiber, and enterprise public accounts.",
      "strengths": "Vast nationwide fiber infrastructure, massive balance sheet, universal brand awareness, and dominant B2G government market share.",
      "weaknesses": "Multi-tier bureaucratic ticketing, slow customized onsite response for mid-market accounts, and rigid contract templates.",
      "opportunities": "Dominating government smart city mega-projects and nationwide 5G fixed-wireless convergence.",
      "threats": "Overhead cost burdens, legacy copper/ADSL migration expenses, and agile private players capturing enterprise building pockets.",
      "swotStrategy": "S-T Strategy: Push nationwide FMC and enterprise cloud solutions while DMS wins agile mid-market accounts via rapid onsite execution."
    },
    {
      "id": "ioh",
      "name": "PT Indosat Ooredoo Hutchison (IOH / Indosat HiFi)",
      "shortName": "IOH (Indosat)",
      "tier": "Tier 1",
      "swotQuadrant": "q_st",
      "swotCode": "S-T",
      "swotTitle": "Quadrant IV: S-T (Diversification & Incumbent Defense)",
      "x": 70,
      "y": 40,
      "role": "Consolidated Telco Giant with Aggressive FMC & Gigabit Fiber Expansion",
      "desc": "Major private telecommunications operator expanding rapidly into fiber-to-the-home (Indosat HiFi) and enterprise cloud AI ecosystems.",
      "strengths": "Strong enterprise mobile client base, aggressive consumer FMC packaging, and high-profile global cloud/AI principal partnerships.",
      "weaknesses": "Fixed fiber footprint still secondary to Telkom; relies heavily on third-party fiber infrastructure leasing.",
      "opportunities": "Cross-selling fixed FTTH connections to existing enterprise corporate post-paid accounts.",
      "threats": "Intense price competition in mobile data and subscriber churn in prepaid consumer broadband.",
      "swotStrategy": "S-T Strategy: Accelerate enterprise fiber rollout in Tier-1 metros and bundle corporate mobile data plans with office connectivity."
    },
    {
      "id": "xl",
      "name": "PT XL Axiata Tbk / Link Net (XL SATU / First Media)",
      "shortName": "XL Axiata / Link Net",
      "tier": "Tier 1",
      "swotQuadrant": "q_st",
      "swotCode": "S-T",
      "swotTitle": "Quadrant IV: S-T (Diversification & Incumbent Defense)",
      "x": 68,
      "y": 38,
      "role": "Integrated Mobile & Fixed Broadband Powerhouse (XL SATU / First Media)",
      "desc": "Major converged telecom player combining XL's nationwide cellular network with Link Net's extensive urban HFC/FTTH enterprise footprint.",
      "strengths": "Dense commercial and residential cable network in Greater Jakarta and Surabaya; pioneer in converged triple-play bundling.",
      "weaknesses": "Ongoing structural network migration from legacy coaxial HFC to pure fiber optic FTTH.",
      "opportunities": "Leveraging Link Net's ServeCo-FiberCo transformation to expand enterprise business connectivity.",
      "threats": "High churn rates in urban residential markets due to aggressive fiber price discounting by newer entrants.",
      "swotStrategy": "S-T Strategy: Focus on enterprise building connectivity and FMC enterprise packages across major urban metropolitan centres."
    },
    {
      "id": "pln",
      "name": "PT Indonesia Comnets Plus (PLN Icon Plus / ICONNET)",
      "shortName": "PLN Icon Plus",
      "tier": "Tier 1",
      "swotQuadrant": "q_st",
      "swotCode": "S-T",
      "swotTitle": "Quadrant IV: S-T (Diversification & Incumbent Defense)",
      "x": 72,
      "y": 35,
      "role": "Electricity Pole Right-of-Way Giant Across Indonesia",
      "desc": "State-owned electricity telecom subsidiary deploying fiber optics directly along PLN power poles and substations across the archipelago.",
      "strengths": "Universal Right-of-Way across millions of PLN electricity poles reaching remote residential and industrial zones.",
      "weaknesses": "Field technical support and SLAs for corporate enterprise accounts remain inconsistent compared to dedicated telcos.",
      "opportunities": "Smart grid telecommunications, remote substation connectivity, and green energy telemetry for industrial estates.",
      "threats": "High maintenance complexity balancing electricity grid safety standards with telecommunications service uptime.",
      "swotStrategy": "S-T Strategy: Deploy massive rural and suburban fiber broadband utilizing existing electricity distribution assets."
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
  "slideNumber": 6,
  "folder": "06",
  "sectionId": 1,
  "navTitle": {
    "in": "Kuadran Kompetisi",
    "en": "Competition Quadrant"
  },
  "headerTitle": {
    "in": "Kuadran Kompetisi",
    "en": "Competition Quadrant"
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
