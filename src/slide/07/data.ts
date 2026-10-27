import { useLanguage } from '@/contexts/LanguageContext';
export interface DimensionScore {
  label: string;
  score: number;
  max: number;
}

export interface PlayerDetail {
  id: string;
  name: string;
  brand: string;
  shortName: string;
  role: string;
  location: string;
  highlight?: boolean;
  score: number; // e.g. 96
  decisionMaker: string;
  keunggulan: string[];
  gap: string[];
  salesAction: string;
  dimensions: DimensionScore[];
  // Orbital coordinates for mind-map placement (angle in degrees, radius orbit level 1 or 2)
  angle: number;
  orbitLevel: 1 | 2;
}

export interface TierConfig {
  id: string;
  tierNumber: string;
  tierTag: string;
  title: string;
  centerLabel: string;
  centerSub: string;
  accentColor: string; // hex
  themeBg: string;
  themeBorder: string;
  themeGlow: string;
  badgeClass: string;
  characteristics: string;
  marketApproach: string;
  quote: string;
  players: PlayerDetail[];
}

export const slide07DataId = {
  badge: "Bagian 2 • Posisi & Keunggulan Kompetitif",
  title: "Filter & Analisa Lanskap 3-Tier Kompetitor FTTH & Telco",
  subtitle: "Hasil Turunan Matriks Analisis SWOT Slide 6: Klasifikasi 3 Tingkatan Kompetitor dengan Taktik Penetrasi Pasar Khusus PT DMS",

  tiers: [
    {
      id: "tier-1",
      tierNumber: "Tier 1",
      tierTag: "The Backbone & National Scale",
      title: "Raksasa Infrastruktur & Telco Operator",
      centerLabel: "Telco Tier-1",
      centerSub: "National Backbone",
      accentColor: "#ef4444", // Rose / Red
      themeBg: "from-rose-500/10 via-slate-900 to-slate-950",
      themeBorder: "border-rose-500/40",
      themeGlow: "rgba(239, 68, 68, 0.4)",
      badgeClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
      characteristics: "Memiliki jaringan backbone nasional/global, kapitalisasi pasar triliunan rupiah, kendali last-mile masif, serta integrasi layanan Fixed-Mobile Convergence (FMC) atau infrastruktur publik.",
      marketApproach: "Penetrasi pasar massal ritel (B2C) & tender mega-proyek pemerintah/BUMN (B2G/B2B skala besar).",
      quote: '"DMS tidak bersaing frontal di level kepemilikan kabel laut dan backbone nasional, melainkan merebut celah inefisiensi birokrasi raksasa telco dengan respon solusi terpadu SLA < 2 jam."',
      players: [
        {
          id: "telkom",
          name: "PT Telkom Indonesia Tbk",
          brand: "Telkom Group",
          shortName: "Telkom",
          role: "Market Share Leader & National Backbone Owner",
          location: "Jakarta • IDX: TLKM",
          score: 96,
          decisionMaker: "VP Enterprise Network & GM Procurement Division",
          dimensions: [
            { label: "Skala Backbone & Kabel Laut", score: 20, max: 20 },
            { label: "Penetrasi Ritel (B2C FTTH)", score: 20, max: 20 },
            { label: "Kelincahan Solusi B2B Kustom", score: 11, max: 20 },
            { label: "Kecepatan Respon & Fleksibilitas", score: 10, max: 20 },
            { label: "Kesesuaian Sinergi Hardware DMS", score: 18, max: 20 }
          ],
          keunggulan: [
            "Penguasa pangsa pasar FTTH terbesar di Indonesia (IndiHome + Telkomsel One) dengan jutaan home-pass.",
            "Kepemilikan backbone fiber optik kabel darat dan kabel laut antarpulau terlengkap se-Indonesia.",
            "Dukungan modal BUMN tanpa batas dan akses prioritas ke proyek infrastruktur strategis nasional (PSN)."
          ],
          gap: [
            "Birokrasi procurement dan eskalasi penanganan gangguan B2B berlapis, sangat lambat untuk tenant enterprise.",
            "Paket layanan sangat rigid, tidak fleksibel dalam mengakomodasi kustomisasi hardware atau spesifikasi tier-3.",
            "Penanganan onsite untuk insiden darurat di gedung komersial seringkali melewati target SLA 4-8 jam."
          ],
          salesAction: "Fokus penetrasi pada segmen perkantoran dan tenant komersial yang frustrasi dengan lambatnya SLA Telkom: sediakan paket managed services last-mile terpadu dengan backup failover otomatis.",
          angle: 320,
          orbitLevel: 1
        },
        {
          id: "ioh",
          name: "PT Indosat Tbk",
          brand: "Indosat HiFi",
          shortName: "IOH",
          role: "Tier-1 Telco & Gigabit Broadband Challenger",
          location: "Jakarta • IDX: ISAT",
          score: 91,
          decisionMaker: "Head of FTTH Rollout & B2B Solutions Director",
          dimensions: [
            { label: "Skala Jaringan Nasional", score: 18, max: 20 },
            { label: "Agresivitas Ekspansi Gigabit", score: 18, max: 20 },
            { label: "Kelincahan Solusi B2B Kustom", score: 13, max: 20 },
            { label: "Kelengkapan Portofolio IoT/Signage", score: 11, max: 20 },
            { label: "Peluang Kemitraan Suplai Hardware", score: 17, max: 20 }
          ],
          keunggulan: [
            "Penyatuan kekuatan Indosat & Tri menciptakan basis pelanggan seluler 100+ juta dan ekosistem B2B solid.",
            "Layanan Indosat HiFi agresif menawarkan kecepatan broadband gigabit dengan promosi bundling FMC terjangkau.",
            "Infrastruktur core network mutakhir dengan kesiapan arsitektur 5G dan cloud-native backhaul."
          ],
          gap: [
            "Jangkauan kabel fiber last-mile fisik belum merata di luar kota-kota tier-1, tertinggal jauh dari Telkom.",
            "Fokus utama korporasi masih terpusat pada revenue seluler mobile, bukan integrasi sistem perangkat fisik indoor.",
            "Kurang memiliki lini pengadaan hardware signage interaktif dan mini data center turnkey untuk korporasi."
          ],
          salesAction: "Posisikan DMS sebagai mitra pengadaan hardware jaringan pasif/aktif (ODP, drop cable, ONT) untuk mempercepat deployment home-pass IOH HiFi di cluster perumahan & apartemen.",
          angle: 68,
          orbitLevel: 1
        },
        {
          id: "xl-linknet",
          name: "PT XL Axiata Tbk",
          brand: "XL Link Net",
          shortName: "XL / LinkNet",
          role: "FMC Giant & Cable-FTTH Synergy",
          location: "Jakarta • IDX: EXCL",
          score: 89,
          decisionMaker: "VP Home Broadband & Head of Corporate Procurement",
          dimensions: [
            { label: "Penetrasi Home-Pass Urban", score: 18, max: 20 },
            { label: "Konvergensi Fixed-Mobile (FMC)", score: 17, max: 20 },
            { label: "Kelincahan Respon Proyek Khusus", score: 12, max: 20 },
            { label: "Kelengkapan Solusi Turnkey B2B", score: 12, max: 20 },
            { label: "Potensi Sinergi Integrasi DMS", score: 16, max: 20 }
          ],
          keunggulan: [
            "Sinergi Link Net (First Media) dengan XL Axiata menghadirkan penetrasi jaringan fiber kabel solid di Jabodetabek & Surabaya.",
            "Pelopor integrasi layanan Fixed-Mobile Convergence (XL SATU) untuk segmen perumahan premium.",
            "Memiliki brand recognition tinggi di segmen hiburan residensial dan internet kabel apartemen."
          ],
          gap: [
            "Proses integrasi infrastruktur HFC ke full-FTTH masih membutuhkan investasi capex besar dan waktu transisi.",
            "Layanan korporat enterprise cenderung terpusat pada bandwidth pipa, minim sentuhan solusi signage atau server mini.",
            "Penanganan komplain operasional di kawasan residensial padat kerap terkendala izin lintasan lingkungan."
          ],
          salesAction: "Tawarkan suplai material jaringan FTTH terstandarisasi dan solusi signage komersial untuk outlet retail & partner center XL-Link Net di seluruh Indonesia.",
          angle: 145,
          orbitLevel: 2
        },
        {
          id: "icon-plus",
          name: "PT Indonesia Comnets Plus",
          brand: "ICONNET",
          shortName: "Icon+",
          role: "State-Owned ROW Infrastructure & Power-Grid Fiber",
          location: "Jakarta • Anak Usaha PT PLN (Persero)",
          score: 88,
          decisionMaker: "Direktur Jaringan & GM ICT Infrastructure",
          dimensions: [
            { label: "Right-of-Way Tiang Transmisi", score: 20, max: 20 },
            { label: "Cakupan Geografis Pelosok", score: 17, max: 20 },
            { label: "Kelincahan Kustomisasi B2B", score: 11, max: 20 },
            { label: "Pilihan Ekosistem Display/Signage", score: 10, max: 20 },
            { label: "Peluang Suplai Hardware Turnkey", score: 18, max: 20 }
          ],
          keunggulan: [
            "Memanfaatkan jalur hak lintas (Right-of-Way) tiang dan transmisi listrik PLN tanpa biaya sewa izin galian tanah.",
            "Mampu menjangkau pelosok pedesaan dan daerah terpencil yang tidak dijangkau operator fiber swasta komersial.",
            "Sinergi BUMN kuat dengan tarif layanan yang sangat kompetitif di segmen pasar menengah-bawah."
          ],
          gap: [
            "Portofolio terbatas pada konektivitas pipa data murni, tidak memiliki kapabilitas custom digital signage atau IoT enterprise.",
            "Kualitas sambungan last-mile sering bergantung pada kondisi tiang listrik lokal yang rentan cuaca dan kabel semrawut.",
            "Dukungan teknis B2B memiliki birokrasi khas BUMN dengan waktu penanganan yang panjang."
          ],
          salesAction: "Gandeng klien pengguna ICONNET untuk suplai perangkat jaringan aktif (managed switch, enterprise router) serta bangun display digital signage terintegrasi yang tidak disediakan Icon Plus.",
          angle: 225,
          orbitLevel: 2
        }
      ]
    },
    {
      id: "tier-2",
      tierNumber: "Tier 2",
      tierTag: "The Mid-Tier / Network Enablers",
      title: "Pemain Menengah, Wholesale Open-Access & Regional Challenger",
      centerLabel: "Wholesale & ISP",
      centerSub: "Network Enablers",
      accentColor: "#0284c7", // Blue / Sky
      themeBg: "from-sky-500/10 via-slate-900 to-slate-950",
      themeBorder: "border-sky-500/40",
      themeGlow: "rgba(2, 132, 199, 0.4)",
      badgeClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
      characteristics: "Fokus jaringan wholesale open access, ISP regional/nasional, dan pengembang fiber independen di kota-kota besar.",
      marketApproach: "Penyewaan core fiber antarkota, kemitraan ISP, serta broadband simetris korporasi/komersial.",
      quote: '"Moratelindo (Oxygen.id) adalah mitra sinergi strategis DMS: memadukan backbone serat optik Tier-2 dengan kelincahan suplai hardware & DC DMS."',
      players: [
        {
          id: "moratelindo",
          name: "PT Mora Telematika Indonesia Tbk",
          brand: "Oxygen.id",
          shortName: "Oxygen.id",
          role: "Strategic Synergy Partner • Backbone & Enterprise ISP",
          location: "Jakarta • IDX: MORA",
          score: 95,
          highlight: true,
          decisionMaker: "VP Enterprise & Wholesale Solutions / Direktur Operasional",
          dimensions: [
            { label: "Kapasitas Backbone & Metro-E", score: 19, max: 20 },
            { label: "Kehandalan Simetris 1:1", score: 19, max: 20 },
            { label: "Sinergi Strategis Bersama DMS", score: 20, max: 20 },
            { label: "Kecepatan Respon B2B Partner", score: 18, max: 20 },
            { label: "Kelengkapan Ekosistem Bersama", score: 19, max: 20 }
          ],
          keunggulan: [
            "Pemilik jaringan serat optik submarine & terrestrial terbesar kedua di Indonesia (Batam-Dumai-Malaka, Jawa Bali).",
            "Layanan Oxygen.id terbukti unggul dengan koneksi simetris 1:1 murni, latensi rendah, dan SLA enterprise 99.8%.",
            "Struktur kemitraan B2B yang terbuka dan mendukung sinergi langsung dengan mitra integrator solusi seperti DMS."
          ],
          gap: [
            "Fokus utama pada layer pipa bandwidth dan jaringan transmisi, bukan penyediaan hardware mini PC, display, atau signage komersial.",
            "Membutuhkan mitra eksekutor lokal yang lincah untuk handle instalasi cabling dalam gedung dan pengadaan server modular."
          ],
          salesAction: "SINERGI UTAMA DMS: Posisikan DMS sebagai mitra perpanjangan tangan Oxygen.id untuk pengadaan total ICT Solution (hardware, data center mini, digital signage) di setiap gedung komersial.",
          angle: 15,
          orbitLevel: 1
        },
        {
          id: "biznet",
          name: "PT Supra Primatama Nusantara",
          brand: "Biznet Networks",
          shortName: "Biznet",
          role: "High-Speed Fiber Specialist & Independent Carrier",
          location: "Jakarta • Private National",
          score: 90,
          decisionMaker: "Head of Corporate Sales & Senior Procurement Manager",
          dimensions: [
            { label: "Kualitas Kabel Fiber Mutakhir", score: 19, max: 20 },
            { label: "Brand Equity Segmen Komersial", score: 18, max: 20 },
            { label: "Keterbukaan Open-Access Wholesale", score: 11, max: 20 },
            { label: "Kelincahan Kustomisasi Proyek", score: 13, max: 20 },
            { label: "Peluang Integrasi Hardware Eksternal", score: 14, max: 20 }
          ],
          keunggulan: [
            "Infrastruktur Biznet Fiber mutakhir dengan alokasi bandwidth simetris tinggi dan latensi sangat rendah.",
            "Reputasi sangat kuat di kalangan perkantoran swasta, software house, UKM kreatif, dan apartemen kelas menengah ke atas.",
            "Jaringan fiber mandiri yang terus berekspansi ke pulau Jawa, Bali, Sumatra, dan Kalimantan."
          ],
          gap: [
            "Skema harga relatif premium dengan komitmen kontrak yang ketat bagi pelanggan korporat.",
            "Menutup jaringan untuk sistem wholesale open-access pihak ketiga (ekosistem closed-loop).",
            "Hanya menjual konektivitas internet murni, menolak penyediaan hardware kustom seperti interactive kiosk atau signage display."
          ],
          salesAction: "Bidik gedung yang sudah memakai Biznet tetapi membutuhkan pengadaan perangkat keras (server rak, signage, smart room control) yang ditolak oleh Biznet.",
          angle: 95,
          orbitLevel: 1
        },
        {
          id: "fiberstar",
          name: "PT Mega Akses Persada",
          brand: "FiberStar",
          shortName: "FiberStar",
          role: "100% Neutral Wholesale Open-Access Operator",
          location: "Jakarta • Salim Group Affiliate",
          score: 87,
          decisionMaker: "VP Wholesale Carrier & Partner Network Director",
          dimensions: [
            { label: "Netralitas Jaringan Open-Access", score: 20, max: 20 },
            { label: "Cakupan Kota & Kawasan Industri", score: 17, max: 20 },
            { label: "Layanan Direct End-User Enterprise", score: 10, max: 20 },
            { label: "Penyediaan Solusi ICT Terpadu", score: 10, max: 20 },
            { label: "Potensi Jalur Last-Mile DMS", score: 17, max: 20 }
          ],
          keunggulan: [
            "Model bisnis 100% netral tanpa menjual retail B2C mandiri, menjadi tulang punggung bagi puluhan ISP di Indonesia.",
            "Telah menggelar jaringan fiber di lebih dari 135 kota/kabupaten dengan jutaan home-passed.",
            "Dukungan kuat ekosistem konglomerasi Salim Group untuk perizinan kawasan pemukiman & komersial."
          ],
          gap: [
            "Tidak memiliki interaksi atau produk untuk end-user korporasi langsung (hanya menyewakan core fiber ke ISP).",
            "Tidak menyediakan perangkat active equipment terminal atau solusi signage/data center bagi pengguna akhir."
          ],
          salesAction: "Manfaatkan sewa core fiber netral FiberStar sebagai jalur last-mile alternatif di kawasan industri di mana rute Oxygen.id belum tergelar.",
          angle: 172,
          orbitLevel: 2
        },
        {
          id: "myrepublic",
          name: "PT Innovate Mas Indonesia",
          brand: "MyRepublic",
          shortName: "MyRepublic",
          role: "Urban High-Speed Broadband & Streaming Challenger",
          location: "Jakarta • Sinarmas Group Affiliate",
          score: 84,
          decisionMaker: "Enterprise Business Director & Network Operations Manager",
          dimensions: [
            { label: "Daya Saing Harga & Kecepatan", score: 18, max: 20 },
            { label: "Penetrasi Urban Jabodetabek", score: 17, max: 20 },
            { label: "Kesiapan Proyek B2B Kompleks", score: 12, max: 20 },
            { label: "Kelengkapan Hardware ICT & Signage", score: 10, max: 20 },
            { label: "Peluang Turnkey Integration", score: 15, max: 20 }
          ],
          keunggulan: [
            "Strategi harga agresif tanpa fair usage policy (FUP) yang sangat populer di kalangan prosumer dan UMKM perkotaan.",
            "Penetrasi padat di cluster perumahan modern dan sentra bisnis baru di kota metropolitan.",
            "Brand image dinamis, modern, dan didukung ekosistem Sinarmas Group."
          ],
          gap: [
            "Portofolio enterprise B2B belum sekuat kompetitor tier-1 dan minim pengalaman tender B2G/BUMN berskala besar.",
            "Fokus utama teralokasi pada volume langganan ritel, bukan custom system integration."
          ],
          salesAction: "Menjadi mitra integrasi hardware bagi klien enterprise MyRepublic yang memerlukan setup ruang rapat pintar, display signage, dan ruang server modular.",
          angle: 252,
          orbitLevel: 2
        },
        {
          id: "surge",
          name: "PT Solusi Sinergi Digital Tbk",
          brand: "Surge / Starlite",
          shortName: "Surge",
          role: "Railway Fiber Backbone & Edge Infrastructure Disruptor",
          location: "Jakarta • IDX: WIFI",
          score: 83,
          decisionMaker: "Chief Technology Officer & Head of Infrastructure",
          dimensions: [
            { label: "Akses Jalur Rel Kereta Api (ROW)", score: 20, max: 20 },
            { label: "Efisiensi Biaya Bandwidth Mid-Mile", score: 17, max: 20 },
            { label: "Kelengkapan Jaringan Last-Mile", score: 11, max: 20 },
            { label: "Solusi B2B Customized", score: 13, max: 20 },
            { label: "Sinergi Edge Advertising & Display", score: 18, max: 20 }
          ],
          keunggulan: [
            "Menguasai hak lintas serat optik sepanjang rel kereta api PT KAI melintasi seluruh jalur strategis Pulau Jawa.",
            "Mengembangkan konsep Edge Data Center di stasiun transit dan layanan internet berbasis Fixed Wireless Access (FWA).",
            "Memiliki unit bisnis media digital luar ruang di lingkungan transportasi publik."
          ],
          gap: [
            "Ketergantungan geografis pada koridor rel kereta api; membutuhkan vendor last-mile pihak ketiga untuk masuk ke gedung kantor pusat kota.",
            "Kapasitas operasional untuk deployment hardware kustom di properti perkantoran swasta masih terbatas."
          ],
          salesAction: "Sinergikan keahlian DMS dalam digital signage display dan mini server modular untuk dipasang di fasilitas komersial stasiun dan titik transit Surge.",
          angle: 348,
          orbitLevel: 1
        }
      ]
    },
    {
      id: "tier-3",
      tierNumber: "Tier 3",
      tierTag: "The Niche & Support Ecosystem",
      title: "Spesialis Integrator, Suplier Perangkat & Solusi Last-Mile",
      centerLabel: "Integrator & Niche",
      centerSub: "Solusi & PT DMS",
      accentColor: "#10b981", // Emerald / Green
      themeBg: "from-emerald-500/10 via-slate-900 to-slate-950",
      themeBorder: "border-emerald-500/40",
      themeGlow: "rgba(16, 185, 129, 0.4)",
      badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      characteristics: "Skala lincah (boutique/mid-size), fokus pada solusi ICT spesifik, suplai perangkat, data center modular, atau digital signage.",
      marketApproach: "Penjualan solusi terpadu B2B, suplai turnkey hardware pasif/aktif, dan pemeliharaan berkala SLA <2 jam.",
      quote: '"DMS menetapkan standar tertinggi di Tier-3: bukan sekadar penarik kabel, melainkan Pemimpin Solusi Terpadu 3-Pilar berkecepatan respon unggul."',
      players: [
        {
          id: "dms",
          name: "PT Digital Multi Sinergy",
          brand: "PT DMS (Target Leader)",
          shortName: "DMS",
          role: "Enterprise ICT Solution & Turnkey Hardware Leader",
          location: "Jakarta • Core System Integrator & Hardware Supplier",
          score: 98,
          highlight: true,
          decisionMaker: "Direktur Utama / Harry Gultom (VP Sales & Business Development)",
          dimensions: [
            { label: "Kelengkapan 4 Pilar Portofolio", score: 20, max: 20 },
            { label: "Kecepatan Respon SLA Onsite (<2 Jam)", score: 20, max: 20 },
            { label: "Sinergi Strategis Oxygen.id", score: 20, max: 20 },
            { label: "Fleksibilitas Kustomisasi B2B", score: 19, max: 20 },
            { label: "Kemampuan Turnkey Hardware Supply", score: 19, max: 20 }
          ],
          keunggulan: [
            "PORTFOLIO TERPADU 4 PILAR: ICT Solution, Suplai Perangkat Telekomunikasi, Modular Data Center, dan Interactive Digital Signage.",
            "SLA ONSITE TERCEPAT < 2 JAM: Tim teknisi berdedikasi tinggi dengan buffer stock hardware pengganti siap pakai di lokasi.",
            "SINERGI RESMI OXYGEN.ID: Jaminan keandalan backbone fiber optik tier-1 tanpa margin ganda yang membebani klien.",
            "PENYEDIAAN TURNKEY HARDWARE: Menguasai rantai pasok material pasif (kabel, ODP) hingga perangkat aktif (switch, router, server, display kiosk)."
          ],
          gap: [
            "Penyebaran branding di kota tier-2/3 di luar Jabodetabek masih dalam proses akselerasi pipeline tahun 2026.",
            "Bergantung pada backbone pihak ketiga (Oxygen.id) untuk konektivitas inter-island."
          ],
          salesAction: "MENANGKAN KONTRAK KORPORAT: Ajukan proposal 'One-Stop Solution' komprehensif ke manajemen gedung komersial, bank BUMN, dan kawasan industri yang menuntut single-point-of-contact dan SLA responsif.",
          angle: 42,
          orbitLevel: 1
        },
        {
          id: "cbn",
          name: "PT Cyberindo Aditama",
          brand: "CBN Fiber",
          shortName: "CBN",
          role: "Boutique ISP & High-Density Cluster Operator",
          location: "Jakarta • Private Boutique Carrier",
          score: 86,
          decisionMaker: "Head of Infrastructure & Corporate Relations Manager",
          dimensions: [
            { label: "Kualitas Koneksi Klaster Mewah", score: 18, max: 20 },
            { label: "Fasilitas Data Center (Cyber 2)", score: 18, max: 20 },
            { label: "Kelincahan Suplai Hardware Turnkey", score: 12, max: 20 },
            { label: "Kecepatan Respon SLA Lapangan", score: 14, max: 20 },
            { label: "Peluang Sub-Integrasi DMS", score: 16, max: 20 }
          ],
          keunggulan: [
            "Pelopor internet di Indonesia dengan loyalitas pelanggan sangat tinggi pada klaster residensial mewah dan gedung perkantoran prestisius.",
            "Memiliki ekosistem data center ternama (Cyber 2 Tower Kuningan) dengan interkoneksi langsung ke IIX/OIXP.",
            "Fokus pada kualitas premium dan kestabilan transmisi korporat berkelas."
          ],
          gap: [
            "Ekspansi jaringan kabel last-mile lambat dan terbatas pada kantong-kantong elit perkotaan.",
            "Harga paket layanan enterprise tergolong mahal dan tidak menyediakan paket hardware signage.",
            "Kapasitas tim instalasi fisik terbatas untuk proyek turnkey terdistribusi nasional."
          ],
          salesAction: "Tawarkan DMS sebagai kontraktor instalasi cabling dalam gedung dan suplier perangkat aktif/pasif berstandar tinggi untuk proyek ekspansi klaster CBN.",
          angle: 198,
          orbitLevel: 1
        },
        {
          id: "regional-isp",
          name: "PT Bali Towerindo Sentra Tbk",
          brand: "Regional Fiber Providers",
          shortName: "BaliFiber / Mega",
          role: "Localized Fiber Providers & Regional Champions",
          location: "Bandung, Bali, Bogor • Regional Operators",
          score: 80,
          decisionMaker: "General Manager Regional Operations & Technical Lead",
          dimensions: [
            { label: "Penguasaan Pasar Komunitas Lokal", score: 18, max: 20 },
            { label: "Kelincahan Mediasi Perizinan Daerah", score: 18, max: 20 },
            { label: "Ketahanan Finansial Capex Hardware", score: 10, max: 20 },
            { label: "Kelengkapan Solusi Data Center", score: 9, max: 20 },
            { label: "Kebutuhan Suplai Perangkat DMS", score: 19, max: 20 }
          ],
          keunggulan: [
            "Sangat dominan di wilayah geografis spesifik (misal BaliFiber di Bali, Megavision di Bandung/Bogor) berkat kedekatan lokal.",
            "Pengurusan izin lintasan kabel tingkat RT/RW dan pemda setempat jauh lebih lancar dibanding operator nasional.",
            "Struktur harga paket bulanan ramah untuk segmen perumahan lokal."
          ],
          gap: [
            "Skala permodalan terbatas; sering kesulitan mendanai pembelian hardware jaringan impor dalam jumlah besar.",
            "Infrastruktur tidak terhubung secara nasional dan sangat rentan putus jika sewa jalur backbone utama bermasalah.",
            "Tidak memiliki solusi terintegrasi untuk kebutuhan display digital atau mini data center korporasi."
          ],
          salesAction: "Posisikan DMS sebagai Suplier Perangkat Telekomunikasi tangan pertama (distributor resmi hardware) dengan skema pembayaran fleksibel guna menekan beban belanja modal mereka.",
          angle: 288,
          orbitLevel: 2
        },
        {
          id: "subcon",
          name: "PT Mitra Konstruksi Telekomunikasi Indonesia",
          brand: "Local Rollout Subcons",
          shortName: "Subcon Lokal",
          role: "Physical Cable Pulling & Civil Works Contractors",
          location: "Multi-Kota • Civil & Deployment Vendors",
          score: 72,
          decisionMaker: "Project Director / Mandor Lapangan FTTH",
          dimensions: [
            { label: "Kekuatan Pasukan Lapangan Fisik", score: 18, max: 20 },
            { label: "Fleksibilitas Jam Kerja Lapangan", score: 17, max: 20 },
            { label: "Sertifikasi Standar Enterprise ICT", score: 8, max: 20 },
            { label: "Kepemilikan Lisensi & Solusi Terpadu", score: 7, max: 20 },
            { label: "Kemampuan Pengadaan Hardware Aktif", score: 8, max: 20 }
          ],
          keunggulan: [
            "Biaya jasa tenaga kerja penarikan kabel fisik dan galian tiang sangat murah dan kompetitif.",
            "Memiliki ratusan pekerja lapangan yang siap dikerahkan secara serentak untuk proyek fisik massal.",
            "Luwes beradaptasi dengan kondisi lapangan dan kendala ormas/warga setempat."
          ],
          gap: [
            "Hanya mampu mengerjakan pekerjaan fisik kasar (penarikan kabel, splicing, pasang ODP); tidak memiliki keahlian integrasi sistem ICT.",
            "Tidak memiliki lisensi ISP atau izin telekomunikasi resmi dari Kominfo.",
            "Margin keuntungan sangat tipis dan tidak memiliki modal untuk mendanai pengadaan perangkat aktif atau server data center."
          ],
          salesAction: "DMS bertindak sebagai Kontraktor Utama (Prime Integrator): DMS mengunci kontrak bernilai tinggi (hardware, sistem, SLA) dan mensub-kontrakkan pekerjaan penarikan fisik kasar kepada subcon lokal ini.",
          angle: 120,
          orbitLevel: 2
        }
      ]
    }
  ] as TierConfig[]
};

export const slideData = slide07DataId;

export const slide07DataEn = {
  "badge": "Part 2 • Positioning & Competitive Advantage",
  "title": "3-Tier FTTH & Telecom Competitor Landscape Analysis",
  "subtitle": "Derived from Slide 6 SWOT Matrix: 3-Tier Competitor Classification with Targeted Market Penetration Tactics for PT DMS",
  "tiers": [
    {
      "id": "tier-1",
      "tierNumber": "Tier 1",
      "tierTag": "The Backbone & National Scale",
      "title": "Infrastructure Giants & Telco Operators",
      "centerLabel": "Telco Tier-1",
      "centerSub": "National Backbone",
      "accentColor": "#ef4444",
      "themeBg": "from-rose-500/10 via-slate-900 to-slate-950",
      "themeBorder": "border-rose-500/40",
      "themeGlow": "rgba(239, 68, 68, 0.4)",
      "badgeClass": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
      "characteristics": "Owns national and inter-island backbone fiber, trillion-rupiah market capitalization, massive last-mile home-passes, and converged fixed-mobile (FMC) enterprise infrastructure.",
      "marketApproach": "Mass retail market penetration (B2C) and large-scale government/SOE mega tenders (B2G/B2B conglomerates).",
      "quote": "\"DMS does not compete head-on at the subsea cable and national backbone ownership level. Instead, we capture the inefficiency gaps of telco giants by delivering rapid turnkey solutions with <2-hour onsite SLAs.\"",
      "players": [
        {
          "id": "telkom",
          "name": "PT Telkom Indonesia Tbk",
          "brand": "Telkom Group",
          "shortName": "Telkom",
          "role": "Market Share Leader & National Backbone Owner",
          "location": "Jakarta • IDX: TLKM",
          "score": 96,
          "decisionMaker": "VP Enterprise Network & GM Procurement Division",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 20,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 20,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 11,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 10,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 13,
              "max": 20
            }
          ],
          "keunggulan": [
            "Dominant optical fiber infrastructure across Indonesia, including subsea cables and thousands of central offices.",
            "Unrivaled brand trust across government (B2G), state-owned enterprises, and national banking networks.",
            "Comprehensive bundled portfolio ranging from enterprise cellular to Tier IV hyperscale data center facilities."
          ],
          "gap": [
            "Slow multi-tier ticketing bureaucratic escalation, with MTTR averaging 8 to 48 hours for mid-market accounts.",
            "Rigid standard contract templates with zero room for customized commercial SLA addendums.",
            "Focus concentrated heavily on consumer mass volume (B2C) and high-value sovereign state tenders."
          ],
          "salesAction": "Pitch to mid-market enterprise tenants in commercial buildings where Telkom's support responsiveness is sluggish, offering dedicated Account Managers and guaranteed <2-hour onsite SLAs.",
          "angle": 315,
          "orbitLevel": 1
        },
        {
          "id": "ioh",
          "name": "PT Indosat Tbk",
          "brand": "Indosat Ooredoo Hutchison",
          "shortName": "IOH",
          "role": "Converged Telco Challenger & Digital Infrastructure Provider",
          "location": "Jakarta • IDX: ISAT",
          "score": 88,
          "decisionMaker": "Head of Enterprise Regional Sales & B2B Solutions",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 17,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 16,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 13,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 14,
              "max": 20
            }
          ],
          "keunggulan": [
            "Extensive mobile enterprise customer base and high-speed converged Fixed-Mobile packages.",
            "Aggressive enterprise data center and sovereign AI cloud strategic partnerships with global OEMs.",
            "Strong brand recognition and attractive bundled corporate pricing structures."
          ],
          "gap": [
            "Fixed fiber-to-the-home last-mile coverage is still fragmented compared to incumbent backbone scale.",
            "Relies heavily on third-party fiber infrastructure leasing in non-metro commercial clusters.",
            "Account management heavily incentivized on mobile post-paid quotas rather than custom ICT hardware."
          ],
          "salesAction": "Position DMS as a specialized turnkey ICT partner delivering in-building active switching, Wi-Fi 6, and local data center rack deployment.",
          "angle": 45,
          "orbitLevel": 1
        },
        {
          "id": "xl-linknet",
          "name": "PT XL Axiata Tbk",
          "brand": "XL Axiata / Link Net",
          "shortName": "XL/Link",
          "role": "Integrated Mobile & Fiber Optic Enterprise Powerhouse",
          "location": "Jakarta • IDX: EXCL",
          "score": 86,
          "decisionMaker": "Director of Corporate Strategy & Enterprise Solutions",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 16,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 17,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 13,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 12,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 13,
              "max": 20
            }
          ],
          "keunggulan": [
            "Deep urban optical fiber and HFC network reach spanning Greater Jakarta, Surabaya, and Bandung.",
            "ServeCo and FiberCo organizational restructuring streamlining enterprise delivery.",
            "Synergized consumer and corporate FMC packages (XL SATU B2B)."
          ],
          "gap": [
            "Complex ongoing structural migration from legacy coaxial HFC to pure FTTH architecture.",
            "Post-merger integration challenges creating occasional customer support coordination delays.",
            "Limited turnkey active hardware integration beyond standard routers and ONT terminal boxes."
          ],
          "salesAction": "Target Grade-B and Grade-C office buildings facing sluggish migration delays, delivering instant symmetric FTTH and managed SD-WAN.",
          "angle": 135,
          "orbitLevel": 1
        },
        {
          "id": "icon-plus",
          "name": "PT Indonesia Comnets Plus",
          "brand": "PLN Icon Plus",
          "shortName": "ICON+",
          "role": "Right-of-Way Utility Fiber Operator & Smart Grid Specialist",
          "location": "Jakarta • Subsid. PT PLN",
          "score": 84,
          "decisionMaker": "Head of Enterprise Government & Industrial Solutions",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 18,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 15,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 12,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 11,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 12,
              "max": 20
            }
          ],
          "keunggulan": [
            "Exclusive Right-of-Way across millions of PLN electricity poles reaching every industrial park and remote district.",
            "High-voltage electrical transmission optical ground wire (OPGW) backbone network.",
            "Preferred enterprise supplier status for PLN group subsidiaries and government smart grid projects."
          ],
          "gap": [
            "Bureaucratic state-owned operational workflows with extended commercial proposal turnaround times.",
            "Strict focus on raw utility connectivity with low appetite for custom digital signage or micro DCs.",
            "Field maintenance priority tied to electricity grid operations rather than commercial enterprise SLAs."
          ],
          "salesAction": "Partner with commercial industrial tenants who have ICON+ fiber at the gate, providing active inside-plant cabling, switches, and managed cybersecurity.",
          "angle": 225,
          "orbitLevel": 1
        }
      ]
    },
    {
      "id": "tier-2",
      "tierNumber": "Tier 2",
      "tierTag": "Wholesale, Metro Fiber & Corporate Specialists",
      "title": "Wholesale Players, Regional ISPs & Fiber Specialists",
      "centerLabel": "Fiber Tier-2",
      "centerSub": "Wholesale & Metro",
      "accentColor": "#0284c7",
      "themeBg": "from-sky-500/10 via-slate-900 to-slate-950",
      "themeBorder": "border-sky-500/40",
      "themeGlow": "rgba(2, 132, 199, 0.4)",
      "badgeClass": "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
      "characteristics": "Owns high-quality metro fiber networks, carrier-neutral data centers, aggressive corporate sales teams, and agile mid-market customer support.",
      "marketApproach": "B2B commercial corporate accounts, multi-tenant office buildings, wholesale carrier backhaul, and Tier-1 urban residential enclaves.",
      "quote": "\"Tier 2 is DMS's primary strategic partner ecosystem (especially Moratelindo / Oxygen.id). We combine their high-capacity transport with our turnkey hardware integration.\"",
      "players": [
        {
          "id": "mora",
          "name": "PT Mora Telematika Indonesia Tbk",
          "brand": "Moratelindo / Oxygen.id",
          "shortName": "Oxygen.id",
          "role": "Independent Fiber Backbone & Strategic Ecosystem Partner",
          "location": "Jakarta • IDX: MORA",
          "score": 90,
          "decisionMaker": "VP Wholesale Carrier & Head of Corporate B2B Sales",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 18,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 15,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 17,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 16,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 15,
              "max": 20
            }
          ],
          "keunggulan": [
            "Comprehensive national optical fiber backbone, submarine cables, and dense commercial building in-building penetration.",
            "High-availability carrier-neutral Tier III data center facilities across major metro hubs.",
            "True 1:1 symmetric enterprise bandwidth with robust peering and low regional latency."
          ],
          "gap": [
            "Focus primarily centered on connectivity transport rather than end-to-end active enterprise system integration.",
            "Requires local channel partners to service complex customized multi-branch hardware deployments.",
            "Secondary presence in non-metro tier-3 regional districts."
          ],
          "salesAction": "Primary Synergy: Utilize Moratelindo/Oxygen.id optical transport while DMS supplies active network switches, Wi-Fi 6, data center racks, and dedicated onsite SLAs.",
          "angle": 16,
          "orbitLevel": 2
        },
        {
          "id": "biznet",
          "name": "PT Supra Primatama Nusantara",
          "brand": "Biznet Networks",
          "shortName": "Biznet",
          "role": "Premium Corporate Fiber & Cloud Pioneer",
          "location": "Jakarta • Private",
          "score": 87,
          "decisionMaker": "Head of Corporate Commercial & Enterprise Solution Architect",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 17,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 17,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 15,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 15,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 14,
              "max": 20
            }
          ],
          "keunggulan": [
            "State-of-the-art Biznet Fiber network covering Java, Bali, Sumatra, Kalimantan, and Sulawesi.",
            "Tier III data centers and proprietary cloud computing platform (Biznet Gio).",
            "Premium corporate brand equity and reliable symmetric network performance."
          ],
          "gap": [
            "Premium price tier with limited willingness to discount for mid-tier commercial building tenants.",
            "Rigid standard service catalog with low appetite for custom hardware leasing or CAPEX-to-OPEX conversions.",
            "Strict automated contract renewals with high early-termination penalty clauses."
          ],
          "salesAction": "Target cost-conscious enterprise accounts seeking premium reliability without high brand markups, offering flexible commercial financing and bundling.",
          "angle": 105,
          "orbitLevel": 2
        },
        {
          "id": "fiberstar",
          "name": "PT Mega Akses Persada",
          "brand": "FiberStar",
          "shortName": "FiberStar",
          "role": "Carrier-Neutral Open-Access Wholesale Infrastructure Provider",
          "location": "Jakarta • Salim Group",
          "score": 85,
          "decisionMaker": "Head of Carrier Sales & Partner Ecosystem",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 17,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 14,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 12,
              "max": 20
            }
          ],
          "keunggulan": [
            "100% neutral open-access model trusted by over 50 ISPs across Indonesia.",
            "Extensive national network with millions of home-passes across hundreds of cities.",
            "Strong financial backing from conglomerate parent group ensuring aggressive network rollout."
          ],
          "gap": [
            "Zero direct enterprise B2B sales presence; operates strictly as a wholesale backhaul provider.",
            "Does not bundle active network hardware, firewalls, or application layer managed services.",
            "End-customer experience entirely dependent on the quality of downstream ISP service providers."
          ],
          "salesAction": "Partner with FiberStar open-access footprint in areas where Oxygen.id has not yet deployed, allowing DMS to deliver end-to-end solutions seamlessly.",
          "angle": 160,
          "orbitLevel": 2
        },
        {
          "id": "myrepublic",
          "name": "PT Innovate Mas Indonesia",
          "brand": "MyRepublic",
          "shortName": "MyRepublic",
          "role": "High-Density Urban Broadband & Shophouse Specialist",
          "location": "Jakarta • Sinar Mas Group",
          "score": 82,
          "decisionMaker": "Head of B2B Commercial & Small Business Solutions",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 14,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 18,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 13,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 12,
              "max": 20
            }
          ],
          "keunggulan": [
            "Strong competitive pricing and aggressive residential/SME shophouse sales presence.",
            "High customer satisfaction among gaming, creative agency, and startup communities.",
            "Fast deployment turnarounds in high-density urban residential and retail strips."
          ],
          "gap": [
            "Limited footprint in Tier-1 Grade-A central business district corporate office towers.",
            "Lacks dedicated Tier III enterprise data center colocation facilities.",
            "Support structure optimized for consumer tickets rather than mission-critical enterprise SLAs."
          ],
          "salesAction": "Compete directly in commercial office complexes by offering enterprise-grade dedicated leased lines, 99.8% SLA guarantees, and on-site support.",
          "angle": 200,
          "orbitLevel": 2
        },
        {
          "id": "surge",
          "name": "PT Solusi Sinergi Digital Tbk",
          "brand": "Surge / Telemedia",
          "shortName": "Surge",
          "role": "Transit Right-of-Way Fiber & Edge Infrastructure Challenger",
          "location": "Jakarta • IDX: WIFI",
          "score": 81,
          "decisionMaker": "VP Infrastructure Partnerships & Telecom Strategy",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 16,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 13,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 12,
              "max": 20
            }
          ],
          "keunggulan": [
            "Exclusive optical fiber deployment along Java railway tracks with ultra-low inter-city latency.",
            "Distributed edge data center pods deployed directly at train stations across Java.",
            "Agile capital markets backing with innovative affordable community bandwidth programs."
          ],
          "gap": [
            "Limited last-mile connectivity into downtown commercial office towers off railway routes.",
            "High operational dependence on local last-mile access partners.",
            "Relatively nascent enterprise corporate account management track record."
          ],
          "salesAction": "Utilize Surge's low-latency inter-city transport for multi-city branch interconnects while DMS delivers last-mile campus networking.",
          "angle": 288,
          "orbitLevel": 2
        }
      ]
    },
    {
      "id": "tier-3",
      "tierNumber": "Tier 3",
      "tierTag": "Agility Challengers, System Integrators & Local Rollout",
      "title": "Turnkey Solution Integrators, Regional ISPs & Contractors",
      "centerLabel": "Agility Tier-3",
      "centerSub": "Turnkey & Agility",
      "accentColor": "#10b981",
      "themeBg": "from-emerald-500/10 via-slate-900 to-slate-950",
      "themeBorder": "border-emerald-500/40",
      "themeGlow": "rgba(16, 185, 129, 0.4)",
      "badgeClass": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      "characteristics": "High operational agility, direct C-level decision making, customized solution bundling, localized technical support, and rapid field deployment.",
      "marketApproach": "Multi-tenant office buildings, regional industrial estates, boutique retail chains, and turnkey enterprise ICT projects.",
      "quote": "\"PT Digital Multi Sinergy (DMS) leads Tier 3 by delivering the perfect sweet spot: telco-grade fiber backhaul paired with agile, personalized, <2-hour onsite engineering support.\"",
      "players": [
        {
          "id": "pt-dms",
          "name": "PT Digital Multi Sinergy",
          "brand": "PT DMS (The Challenger)",
          "shortName": "PT DMS",
          "role": "Turnkey ICT Integrator, FTTH B2B, Active Hardware & Data Center",
          "location": "Jakarta • Strategic Growth Plan 2026-2027",
          "score": 92,
          "highlight": true,
          "decisionMaker": "Harry Gultom — Candidate Sales Manager IT & FTTH",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 15,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 14,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 20,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 20,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 20,
              "max": 20
            }
          ],
          "keunggulan": [
            "End-to-end turnkey portfolio: FTTH B2B, dedicated leased lines, active enterprise networking, data center colocation, and digital displays.",
            "Guaranteed <2-hour onsite emergency technical response across Greater Jakarta and key industrial corridors.",
            "Direct WhatsApp and phone access to dedicated Account Managers without bureaucratic call center menus.",
            "Flexible commercial terms: CAPEX purchase or OPEX Hardware-as-a-Service (HaaS) monthly subscription.",
            "Official strategic synergy with Moratelindo (Oxygen.id) backed by tier-1 global OEM deal registration."
          ],
          "gap": [
            "Does not operate proprietary subsea cables (neutralized via strategic wholesale fiber agreements).",
            "Brand equity in early-stage growth phase (overcome by reference client wins and high field responsiveness)."
          ],
          "salesAction": "Primary Market Play: Position DMS as the most agile, dependable single-window partner for commercial buildings, industrial estates, and retail chains.",
          "angle": 0,
          "orbitLevel": 3
        },
        {
          "id": "cbn",
          "name": "PT Cyberindo Aditama",
          "brand": "CBN Fiber",
          "shortName": "CBN",
          "role": "Established Premium Corporate ISP & Data Center Specialist",
          "location": "Jakarta • Pioneer ISP",
          "score": 85,
          "decisionMaker": "Head of Corporate Business Development",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 15,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 16,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 16,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 15,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 15,
              "max": 20
            }
          ],
          "keunggulan": [
            "Long-standing reputation for premium network stability and enterprise customer service.",
            "High-spec Tier III data centers (Nexcenter) with direct international peering exchange links.",
            "Comprehensive corporate security and cloud disaster recovery service offerings."
          ],
          "gap": [
            "Relatively rigid pricing with premium markup; less competitive in budget-conscious mid-market segments.",
            "Rollout expansion slower in secondary emerging industrial zones.",
            "Hardware procurement often outsourced to third parties without integrated maintenance bundling."
          ],
          "salesAction": "Target mid-tier enterprise prospects finding CBN pricing cost-prohibitive, offering identical symmetric performance at 15-25% more competitive rates.",
          "angle": 90,
          "orbitLevel": 3
        },
        {
          "id": "regional-isp",
          "name": "PT Bali Towerindo Sentra Tbk",
          "brand": "BaliFiber / Regional ISPs",
          "shortName": "BaliFiber",
          "role": "Micro-Cell Pole Infrastructure & Regional FTTH Provider",
          "location": "Bali & Jakarta • IDX: BALI",
          "score": 79,
          "decisionMaker": "Head of Corporate Sales & Telecommunication Infrastructure",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 14,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 15,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 14,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 13,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 11,
              "max": 20
            }
          ],
          "keunggulan": [
            "Extensive micro-cell pole and street-furniture infrastructure in Bali and Jakarta.",
            "Strong relationships with local municipal governments and tourist resort developments.",
            "Solid fiber distribution in dense tourist and retail shopping corridors."
          ],
          "gap": [
            "Limited national footprint outside Bali and specific Jakarta municipal zones.",
            "Lacks enterprise IT hardware staging, server rack colocation, and digital signage integration.",
            "Vulnerable to national telco price cuts in urban retail districts."
          ],
          "salesAction": "Pitch integrated turnkey ICT packages to hospitality chains and national commercial property operators needing cross-island coverage.",
          "angle": 180,
          "orbitLevel": 3
        },
        {
          "id": "subcon",
          "name": "PT Mitra Konstruksi Telekomunikasi Indonesia",
          "brand": "Rollout Subcontractors",
          "shortName": "Subcons",
          "role": "Civil Construction, Fiber Splicing & Pole Installation Contractor",
          "location": "Regional Field Hubs • Private",
          "score": 68,
          "decisionMaker": "Managing Director & Project Field Coordinator",
          "dimensions": [
            {
              "label": "Backbone & Subsea Scale",
              "score": 10,
              "max": 20
            },
            {
              "label": "Retail Reach (B2C FTTH)",
              "score": 11,
              "max": 20
            },
            {
              "label": "Custom B2B Solution Agility",
              "score": 11,
              "max": 20
            },
            {
              "label": "Response Speed & Flexibility",
              "score": 13,
              "max": 20
            },
            {
              "label": "Active IT Hardware Delivery",
              "score": 8,
              "max": 20
            }
          ],
          "keunggulan": [
            "Very low labor costs for physical trenching, pole planting, and optical cable pulling.",
            "Hundreds of field technicians ready for rapid manual deployment across regional territories.",
            "High adaptability in navigating local community and municipal permit clearances."
          ],
          "gap": [
            "Limited strictly to rough physical labor; lacks ICT system integration, IP routing, and enterprise SLA expertise.",
            "No official ISP license or Ministry of Communication regulatory permits.",
            "Thin profit margins and no capital to finance active IT hardware appliances or server infrastructure."
          ],
          "salesAction": "DMS acts as Prime Integrator: securing high-value turnkey enterprise contracts (hardware, SLAs, systems) while subcontracting physical cable pulling to local teams.",
          "angle": 270,
          "orbitLevel": 3
        }
      ]
    }
  ]
};

export const getSlide07Data = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slide07DataEn : slide07DataId);

export function useSlide07Data() {
  const { language } = useLanguage();
  return language === 'en' ? slide07DataEn : slide07DataId;
}

export const slide07Data = slide07DataId;
export default slide07Data;

export const slideMeta = {
  "slideNumber": 7,
  "folder": "07",
  "sectionId": 1,
  "navTitle": {
    "in": "Kompetitor 3-Tier",
    "en": "3-Tier Competitors"
  },
  "headerTitle": {
    "in": "Kompetitor 3-Tier",
    "en": "3-Tier Competitors"
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
