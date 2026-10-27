# Rencana Eksekusi & Perancangan 4 Slide Baru: APN (Account Planning Note) & Bank Case

Dokumen ini memuat rencana arsitektur, penempatan urutan halaman, pemetaan pergeseran direktori (*slide shifting*), serta rancangan detail isi untuk **4 slide tambahan** pada presentasi strategi penjualan **PT Digital Multi Sinergy (DMS)**. Seluruh materi diselaraskan dengan **Strategi 3 Pilar Produk** (*Existing Product*, *Pengembangan Produk*, serta *Ekspansi Produk Baru & Internal IP*) dan **6 Segmen Vertikal Pelanggan B2B**.

---

## 1. Ringkasan Penambahan 4 Slide Baru

| Kode | Nama Navigasi Sidebar (`in` / `en`) | Judul Utama Slide | Fokus & Tujuan Strategis |
| :--- | :--- | :--- | :--- |
| **Slide Baru 1** | **Regulasi & Kerangka APN** / *APN Regulation & Framework* | **Regulasi & Standar APN (Account Planning Note)** | Menetapkan regulasi wajib bagi Sales & Marketing (6 personel) dalam membedah akun B2B sebelum pitching: definisi APN, 7 unsur wajib APN, alur persetujuan, serta tujuannya untuk mendorong *cross-selling* 3 Pilar Produk & mencegah kunjungan tanpa arah. |
| **Slide Baru 2** | **Detail Contoh APN** / *APN Implementation Example* | **Bedah Contoh Implementasi APN (Akun Strategis B2B)** | Menampilkan simulasi konkret dokumen APN nyata pada akun korporasi/kawasan industri, memetakan profil klien, *pain points*, strategi *Land & Expand* lintas 3 Pilar Produk, peta *Decision Making Unit (DMU)*, target *Gross Margin*, dan rencana aksi 90 hari. |
| **Slide Baru 3** | **Regulasi Bank Case** / *Bank Case Regulation* | **Regulasi & Sistem Bank Case (Rekap Proyek Berhasil & Gagal)** | Menetapkan kewajiban tata kelola bagi seluruh sales untuk mendokumentasikan setiap proyek (*Won Case* maupun *Lost/Failed Case*) ke dalam repositori terpusat sebagai *institutional memory*, bahan evaluasi 2-mingguan, dan penyempurnaan *Sales Battle Card*. |
| **Slide Baru 4** | **Detail Contoh Bank Case** / *Bank Case Examples* | **Detail Contoh Rekapan Bank Case (Studi Kasus Berhasil vs Gagal)** | Menyajikan perbandingan berdampingan (*side-by-side*) rekapan **Proyek Berhasil (Won Case)** berkat solusi terintegrasi 3 Pilar & *Internal IP* melawan **Proyek Gagal (Lost Case)** akibat jebakan *price war* komoditas tunggal, lengkap dengan akar masalah (*root cause*) dan strategi korektif. |

---

## 2. Rekomendasi Posisi Urutan & Alasan Penempatan

Keempat slide baru ini merupakan instrumen operasional, regulasi kedisiplinan tim, dan manajemen pengetahuan penjualan. Oleh karena itu, posisi paling tepat dan mengalir secara naratif adalah di dalam **Bagian 4 • Tim & Sales Management (`sectionId: 4`)**, tepat **setelah Slide 22 (`Product Knowledge`) dan sebelum `Remunerasi Tim`**:

1. **Slide 19 — Formasi Tim Sales (6 Personel)**: Menjelaskan *siapa* tim yang mengeksekusi (Harry 1, Sales Existing 2, Sales New 2, Marketing 1).
2. **Slide 20 — Sales Management & KPI**: Menjelaskan *bagaimana kinerja tim diukur* (bobot KPI 100% berbasis Omzet, Gross Profit >35%, dan disiplin CRM).
3. **Slide 21 — Pipeline & Forecast**: Menjelaskan *10 kriteria bukti objektif* untuk memvalidasi peluang di dalam funnel.
4. **Slide 22 — Product Knowledge**: Menjelaskan *kurikulum pembinaan 2-mingguan* untuk menguasai 3 Pilar Produk DMS.
5. **Slide 23 [SLIDE BARU 1] — Regulasi & Kerangka APN**: Menjelaskan *instrumen wajib perencanaan akun (Account Planning Note)* agar penguasaan produk dari Slide 22 diterjemahkan menjadi peta jalan penetrasi di setiap akun pelanggan.
6. **Slide 24 [SLIDE BARU 2] — Detail Contoh APN**: Menunjukkan *bukti konkret/contoh pengisian APN* pada pelanggan sasaran DMS.
7. **Slide 25 [SLIDE BARU 3] — Regulasi Bank Case**: Menjelaskan *kewajiban dokumentasi hasil akhir eksekusi lapangan (proyek berhasil maupun gagal)* agar pengalaman lapangan kembali memperkaya sesi *Product Knowledge Sharing*.
8. **Slide 26 [SLIDE BARU 4] — Detail Contoh Bank Case**: Menunjukkan *bukti konkret/contoh rekapan Bank Case* (1 proyek menang & 1 proyek kalah beserta tindak lanjut perbaikannya).
9. **Slide 27 (Geser dari 23) — Remunerasi Tim**: Menutup Bagian 4 dengan struktur insentif/komisi bagi tim yang menjalankan seluruh disiplin di atas.

---

## 3. Tabel Pemetaan Urutan & Pergeseran Slide (`28 Slide` $\rightarrow$ `32 Slide`)

Dengan disisipkannya **4 slide baru pada urutan 23, 24, 25, dan 26**, maka:
- **Slide `01` s/d `22`**: **TETAP** (tidak mengalami pergeseran nomor).
- **Slide `23` s/d `26`**: **DIISI OLEH 4 SLIDE BARU** (APN & Bank Case).
- **Slide `23` s/d `28` (Lama)**: **BERGESER NAIK +4 NOMOR** menjadi **Slide `27` s/d `32`**.

| Urutan Baru | Folder Baru | Urutan Lama | Folder Lama | Status Perubahan | Bagian (`sectionId`) | Nama di Sidebar (`navTitle.in`) |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **01** | `src/slide/01` | 01 | `01` | Tetap | Sec 0 • Cover | Cover & Hero Utama |
| **02** | `src/slide/02` | 02 | `02` | Tetap | Sec 1 • Fondasi | Ringkasan Eksekutif |
| **03** | `src/slide/03` | 03 | `03` | Tetap | Sec 1 • Fondasi | Kondisi Pasar Saat Ini |
| **04** | `src/slide/04` | 04 | `04` | Tetap | Sec 1 • Fondasi | Tren Pasar ICT & FTTH |
| **05** | `src/slide/05` | 05 | `05` | Tetap | Sec 1 • Fondasi | Peluang & Segmentasi |
| **06** | `src/slide/06` | 06 | `06` | Tetap | Sec 2 • Keunggulan | Kuadran Kompetisi |
| **07** | `src/slide/07` | 07 | `07` | Tetap | Sec 2 • Keunggulan | Kompetitor 3-Tier |
| **08** | `src/slide/08` | 08 | `08` | Tetap | Sec 2 • Keunggulan | Gap & Solusi |
| **09** | `src/slide/09` | 09 | `09` | Tetap | Sec 3 • Penetrasi | Existing Product |
| **10** | `src/slide/10` | 10 | `10` | Tetap | Sec 3 • Penetrasi | Pengembangan Produk |
| **11** | `src/slide/11` | 11 | `11` | Tetap | Sec 3 • Penetrasi | Ekspansi Produk |
| **12** | `src/slide/12` | 12 | `12` | Tetap | Sec 3 • Penetrasi | Produk Target |
| **13** | `src/slide/13` | 13 | `13` | Tetap | Sec 3 • Penetrasi | 6 Vertikal Industri |
| **14** | `src/slide/14` | 14 | `14` | Tetap | Sec 3 • Penetrasi | Solusi Pain-Points |
| **15** | `src/slide/15` | 15 | `15` | Tetap | Sec 3 • Penetrasi | Peta Sebaran Nasional |
| **16** | `src/slide/16` | 16 | `16` | Tetap | Sec 3 • Penetrasi | 8 Sales Playbooks |
| **17** | `src/slide/17` | 17 | `17` | Tetap | Sec 3 • Penetrasi | ICP & Buyer Persona |
| **18** | `src/slide/18` | 18 | `18` | Tetap | Sec 3 • Penetrasi | Sinergi Oxygen & IP |
| **19** | `src/slide/19` | 19 | `19` | Tetap | Sec 4 • Tim & Sales | Formasi Tim Sales |
| **20** | `src/slide/20` | 20 | `20` | Tetap | Sec 4 • Tim & Sales | Sales Management & KPI |
| **21** | `src/slide/21` | 21 | `21` | Tetap | Sec 4 • Tim & Sales | Pipeline & Forecast |
| **22** | `src/slide/22` | 22 | `22` | Tetap | Sec 4 • Tim & Sales | Product Knowledge |
| **23** | `src/slide/23` | — | **BARU** | **Slide Baru 1** | **Sec 4 • Tim & Sales** | **Regulasi & Kerangka APN** |
| **24** | `src/slide/24` | — | **BARU** | **Slide Baru 2** | **Sec 4 • Tim & Sales** | **Detail Contoh APN** |
| **25** | `src/slide/25` | — | **BARU** | **Slide Baru 3** | **Sec 4 • Tim & Sales** | **Regulasi Bank Case** |
| **26** | `src/slide/26` | — | **BARU** | **Slide Baru 4** | **Sec 4 • Tim & Sales** | **Detail Contoh Bank Case** |
| **27** | `src/slide/27` | 23 | `23` | **Geser (+4)** | Sec 4 • Tim & Sales | Remunerasi Tim |
| **28** | `src/slide/28` | 24 | `24` | **Geser (+4)** | Sec 5 • Target | Target Penjualan |
| **29** | `src/slide/29` | 25 | `25` | **Geser (+4)** | Sec 5 • Target | Roadmap 90 Hari |
| **30** | `src/slide/30` | 26 | `26` | **Geser (+4)** | Sec 5 • Target | Roadmap 1 Tahun |
| **31** | `src/slide/31` | 27 | `27` | **Geser (+4)** | Sec 5 • Target | Strategi Go to Growth |
| **32** | `src/slide/32` | 28 | `28` | **Geser (+4)** | Sec 6 • Penutup | Komitmen Eksekusi |

---

## 4. Perencanaan Detail Isi & Struktur Visual 4 Slide Baru

Seluruh konten pada keempat slide baru ini dirancang agar **100% terhubung** dengan portofolio produk DMS dan profil pelanggan yang sudah ada di aplikasi:
- **Pilar 1 (8 Existing Product)**: *Smart Display Solution, Fiber Optics Accessories, Automatic Configuration Server (ACS), Dropwire 1–12 Core, ADSS Cable All Core & Tube, GPON & EPON OLT, GPON ONT 2.4G & 5G WiFi Router, 4K Android TV STB*.
- **Pilar 2 (3 Produk Pengembangan)**: *ICT Solution & Investment, Media Digital — Digital Signage (produk Oxygen), Data Center*.
- **Pilar 3 (3 Kategori Ekspansi & Internal IP)**: *IT Product (Laptop All Brand, Server, White Label: IFP, PC AIO, Videotron, Digital Signage), Software (Software Principal, Custom Software Dev, Cybersecurity), AI & Robotics, serta Internal IP (IoT Dashboard, Middleware, Automasi Industri menuju SaaS/Managed Services)*.
- **6 Segmen Pelanggan B2B**: *Kawasan Industri & Manufaktur, Properti Komersial & High-Rise, Perbankan & Finansial, Hospitality & Ritel Modern, Rumah Sakit & Edukasi, serta ISP Regional & Kontraktor*.

---

### A. Slide Baru 1 (Slide 23): Regulasi & Kerangka APN (*Account Planning Note*)

#### 1. Tujuan & Pesan Utama Slide
Menegaskan bahwa di bawah kepemimpinan Sales Manager (Harry Gultom), **tidak ada aktivitas *pitching* atau pengajuan proposal besar tanpa APN (*Account Planning Note*) yang tervalidasi**. Baik *Sales Existing (2)*, *Sales New / Hunter (2)*, maupun *Marketing (1)* wajib memahami cara kerja APN sebagai dokumen hidup (*living blueprint*) untuk membedah akun pelanggan dan memaksimalkan potensi penjualan lintas 3 Pilar Produk.

#### 2. Struktur Komponen & Isi Data (`src/slide/23/data.ts` & `container.tsx`)
- **4 Kartu Statistik Ringkas (Top Summary Bar)**:
  1. `Kewajiban Regulasi`: **100% Akun B2B** (*Wajib APN sebelum tahap Proposal/SPH*).
  2. `Struktur Dokumen`: **7 Unsur Wajib** (*Standar anatomi pemetaan akun DMS*).
  3. `Cakupan Portofolio`: **3 Pilar Produk** (*Wajib memetakan Existing, Dev, & Ekspansi*).
  4. `Siklus Pembaruan`: **Review Mingguan** (*Dikalibrasi setiap evaluasi pipeline*).
- **Bagian Kiri — Regulasi & Peran Tim dalam APN (Aturan Main Sales & Marketing)**:
  - **Peran Marketing (1)**: Menyusun *Pre-APN Intelligence* (data profil industri, berita ekspansi klien, estimasi skala gedung/pabrik) saat menyerahkan MQL ke Sales.
  - **Peran Sales Existing (2)**: Wajib memiliki APN aktif pada seluruh akun eksisting untuk memetakan peluang *upselling* dari *Existing Product* (kabel/OLT/ONT/ACS) menuju *Pengembangan Produk* (ICT Solution, Signage Oxygen, Data Center).
  - **Peran Sales New / Hunter (2)**: Wajib menyusun APN pada setiap prospek *new logo* di 6 vertikal industri dengan mengutamakan penetrasi *Ekspansi Produk Baru* (White Label IFP/AIO/Videotron, Custom Software, Cybersecurity, AI/Robotics) & *Internal IP*.
  - **Peran Sales Manager (Harry)**: Mengaudit kualitas APN, memvalidasi perhitungan *Gross Margin* ($\ge 35\%$), dan memimpin penetrasi *C-Level* sesuai peta stakeholder di APN.
- **Bagian Kanan — 7 Unsur Wajib di Dalam APN DMS**:
  1. **Profil Akun & Skala Bisnis**: Identitas korporasi, vertikal industri, jumlah cabang/gedung/pabrik, dan estimasi anggaran IT/infrastruktur tahunan.
  2. **Audit Infrastruktur Eksisting & Pain Points**: Kondisi jaringan/perangkat klien saat ini, vendor petahana (*incumbent*), serta masalah kritis (MTTR lambat, biaya CAPEX tinggi, sistem belum terintegrasi).
  3. **Peta Pengambil Keputusan (*Decision Making Unit / DMU*)**: Pemetaan *Economic Buyer* (CEO/CFO), *Technical Buyer* (CIO/IT Manager), *User Buyer* (Building/Ops Manager), dan *Champion* internal.
  4. **Matriks Solusi 3 Pilar Produk (*Land, Expand, Accelerate*)**:
     - *Entry / Land*: Produk pembuka pintu (misal: *Existing Product* OLT/ONT, ADSS/Dropwire, Smart Display, atau White Label IFP).
     - *Expand*: Eskalasi ke *ICT Solution, Media Digital Signage (Oxygen), atau Data Center*.
     - *Margin Booster*: Penguncian *Custom Software, Cybersecurity, AI/Robotics, atau SaaS IoT Dashboard*.
  5. **Analisis Kompetitor & Strategi Diferensiasi**: Siapa lawan di akun tersebut (Tier-1 Telco / Distributor komoditas) dan senjata pembeda DMS (SLA $<2$ jam, White Label, tanpa *finger-pointing*).
  6. **Proyeksi Nilai Kontrak, Gross Profit & Skema Komersial**: Target omzet (*One-Time* vs *Recurring MRR/ARR*) dan simulasi persentase laba kotor.
  7. **Rencana Aksi (*Action Plan*) & Kalender Eksekusi**: Langkah konkret berbatas waktu (*next steps*), PIC, dan kebutuhan dukungan *C-Level* / *Pre-Sales*.
- **Bottom Banner (Tujuan Utama Regulasi APN)**:
  - *"APN mengubah pola kerja sales dari sekadar 'penjual barang komoditas reaktif' menjadi 'penasihat strategis B2B' yang mampu mengekstraksi potensi maksimal 3 Pilar Produk di setiap akun pelanggan."*

---

### B. Slide Baru 2 (Slide 24): Detail Contoh Implementasi APN (*Studi Kasus Akun Nyata*)

#### 1. Tujuan & Pesan Utama Slide
Memberikan contoh visual dan tekstual yang konkret tentang **seperti apa isi lembar APN yang sudah terisi lengkap** sesuai standar PT Digital Multi Sinergy, sehingga manajemen dan tim sales melihat langsung bagaimana 1 akun korporasi dapat menghasilkan pendapatan berlapis dari *Existing Product*, *Pengembangan Produk*, hingga *Ekspansi Produk Baru & Internal IP*.

#### 2. Struktur Komponen & Isi Data (`src/slide/24/data.ts` & `container.tsx`)
- **Interactive Account Selector (2 Tab Contoh APN Berbeda Vertikal)**:
  - **Tab Contoh 1 (Fokus Kawasan Industri & Manufaktur)**: `APN-2026-IND-014 • PT Kawasan Industri Terpadu Nusantara (35 Tenant Pabrik)`.
  - **Tab Contoh 2 (Fokus Properti Komersial & Hospitality)**: `APN-2026-PRP-029 • Grup Properti Mixed-Use & Jaringan Hotel Bintang 4 (8 Lokasi)`.
- **Isi Detail Dokumen Contoh APN (Ditampilkan dalam Format Lembar Kerja Eksekutif 6 Blok)**:
  1. **Header Dokumen APN**: Nomor APN, PIC Sales (*Sales New 1 / Sales Existing 2*), Supervisor (*Harry Gultom*), Status Pipeline (*Stage 3 — Technical PoC & Proposal*), Target Closing (*Q2 2026*), Estimasi Total Kontrak & Target *Gross Profit* (**44% GP**).
  2. **Blok 1 — Kondisi Saat Ini & Pain Points Klien**:
     - Jaringan antar-pabrik/gedung masih terpisah-pisah dengan 4 vendor berbeda (sering terjadi *finger-pointing* saat gangguan).
     - Pengelolaan ratusan titik perangkat CPE/ONT dilakukan manual tanpa *Automatic Configuration Server (ACS)*.
     - Layar informasi lobi/kawasan masih statis dan pemantauan utilitas listrik/lingkungan pabrik belum memiliki *IoT Dashboard* terpusat.
  3. **Blok 2 — Pemetaan Stakeholder (DMU Mapping)**:
     - *Direktur Operasional / CFO* (Fokus: Efisiensi OPEX, kepastian SLA, dan skema *Managed Services*).
     - *GM IT & Infrastruktur* (Fokus: Otomasi ACS, keamanan siber *Cybersecurity*, dan reliabilitas *Data Center*).
     - *Procurement Manager* (Fokus: Efisiensi harga pengadaan perangkat lewat opsi *White Label* IFP/PC AIO/Videotron).
  4. **Blok 3 — Strategi Penetrasi 3 Pilar Produk DMS pada Akun Ini**:
     - **Tahap 1 — Pilar Existing Product (Pintu Masuk / Quick Win)**: Pengadaan *ADSS Cable, Dropwire 1–12 Core, GPON OLT, ONT WiFi 5G*, serta implementasi *Automatic Configuration Server (ACS)* dan *Smart Display Solution*.
     - **Tahap 2 — Pilar Pengembangan Produk (Upselling Ekosistem)**: Kontrak *ICT Solution & Investment* terkelola, penempatan *Media Digital — Digital Signage (produk Oxygen)* di area komersial/lobi, serta *backup* ke *Data Center* DMS.
     - **Tahap 3 — Pilar Ekspansi Produk & Internal IP (Akselerator Margin & MRR)**: Pengadaan ruang rapat dengan *White Label IFP & Videotron*, proteksi *Cybersecurity*, serta langganan bulanan (*SaaS*) *Internal IP IoT Dashboard & Automasi Industri*.
  5. **Blok 4 — Strategi Mengalahkan Kompetitor Petahana**:
     - Menghindari perang harga kabel/perangkat lepas dengan mengunci paket *Bundling End-to-End* + *Single Point of Contact* + opsi pembayaran bertahap/*Managed Service*.
  6. **Blok 5 — Rencana Aksi Terjadwal (30–60–90 Hari di Akun)**:
     - Minggu 1–2: Audit teknis & demo *ACS + Smart Display / Signage Oxygen*.
     - Minggu 3–4: Presentasi *C-Level* bersama Harry Gultom untuk skema *IoT Dashboard SaaS & Cybersecurity*.
     - Minggu 5–6: Finalisasi SPH multi-pilar, negosiasi kontrak tahunan, dan penerbitan PO.

---

### C. Slide Baru 3 (Slide 25): Regulasi & Sistem Bank Case (*Sales Win/Loss Repository*)

#### 1. Tujuan & Pesan Utama Slide
Menetapkan regulasi bahwa **setiap peluang proyek yang selesai—baik Berhasil Menang (*Won Case*) maupun Gagal/Kalah (*Lost Case*)—wajib direkap ke dalam DMS Bank Case maksimal H+3 setelah keputusan tender/klien keluar**. Tujuannya adalah memastikan perusahaan tidak kehilangan pengetahuan lapangan (*zero knowledge loss*), tidak mengulangi kesalahan yang sama, dan memiliki perpustakaan studi kasus nyata untuk melatih tim.

#### 2. Struktur Komponen & Isi Data (`src/slide/25/data.ts` & `container.tsx`)
- **4 Kartu Statistik Ringkas (Top Summary Bar)**:
  1. `Cakupan Rekapitulasi`: **100% Deal (Won & Lost)** (*Wajib untuk seluruh tender/proyek B2B*).
  2. `Batas Waktu Rekap`: **SLA Maks. H+3** (*Pasca PO terbit atau pengumuman kalah*).
  3. `Struktur Rekap`: **6 Unsur Standar** (*Dari konteks produk hingga lesson learned*).
  4. `Siklus Bedah Kasus`: **2 Minggu Sekali** (*Terintegrasi di sesi Product Knowledge Sharing*).
- **Bagian Kiri — Regulasi Kepatuhan Bank Case (SOP Wajib Tim Sales)**:
  1. **Kewajiban Rekap Proyek Berhasil (*Won Case*)**: Mendokumentasikan kombinasi produk 3 Pilar yang berhasil memikat klien, argumen nilai tambah yang mengalahkan kompetitor, struktur harga/margin yang disetujui, serta alasan klien memilih DMS.
  2. **Kewajiban Rekap Proyek Gagal (*Lost / Failed Case*)**: Dilarang menyembunyikan kekalahan tender; sales wajib mencatat secara jujur mengapa proyek gagal (apakah kalah harga komoditas, terlambat masuk sebelum spesifikasi terkunci, kurangnya dukungan produk White Label/IP, atau isu teknis) tanpa budaya menyalahkan (*no-blame learning culture*).
  3. **Integrasi dengan Remunerasi & CRM**: Kelengkapan pengisian APN dan Bank Case menjadi bagian dari komponen **KPI Disiplin CRM & Tata Kelola (5%)** serta syarat pencairan insentif kuartalan.
- **Bagian Tengah — 6 Unsur Wajib dalam Setiap Rekapan Bank Case**:
  1. **Identitas Proyek & Profil Pelanggan**: Kode kasus, vertikal industri, nilai proyek, dan lini produk yang ditawarkan (Existing / Pengembangan / Ekspansi).
  2. **Kronologi & Tantangan Klien**: Kebutuhan awal klien dan *pain points* utama yang ingin diselesaikan.
  3. **Kompetitor & Manuver Lawan**: Siapa kompetitor yang dihadapi, strategi harga mereka, dan penawaran lawan.
  4. **Evaluasi Penawaran DMS**: Apa yang ditawarkan DMS dan bagaimana respons *Decision Maker* terhadap solusi tersebut.
  5. **Analisis Akar Masalah / Faktor Penentu (*Root Cause Analysis*)**: Faktor kunci penyebab menang (*Winning Factor*) atau penyebab gagal (*Failure Trigger*).
  6. **Pembelajaran & Tindakan Korektif (*Lesson Learned & Playbook Update*)**: Rumusan taktik baru agar kasus serupa di masa depan dapat dimenangkan dengan margin sehat.
- **Bagian Kanan / Bawah — 4 Tujuan Strategis Bank Case bagi Perusahaan**:
  - **Memperkuat Kurikulum Product Knowledge**: Menjadi bahan studi kasus nyata pada sesi *Track B (Win-Loss Review)* setiap 2 minggu.
  - **Mempertajam Sales Battle Card**: Mengubah pengalaman kekalahan masa lalu menjadi argumen *Objection Handling* yang ampuh.
  - **Akselerasi Onboarding Sales Baru**: Mempercepat kesiapan *Sales New 1 & 2 (Hunter)* memahami pola pasar tanpa harus mengalami kegagalan dari nol.
  - **Kalibrasi Strategi 3 Pilar Produk**: Memberi masukan berbasis data kepada manajemen mengenai produk mana yang paling efektif mendongkrak *win-rate* dan *gross margin*.

---

### D. Slide Baru 4 (Slide 26): Detail Contoh Rekapan Bank Case (*Proyek Berhasil vs Proyek Gagal*)

#### 1. Tujuan & Pesan Utama Slide
Menampilkan contoh nyata pengisian **Bank Case** secara berdampingan (*side-by-side*) antara **1 Kasus Proyek Berhasil (*Won Case*)** dan **1 Kasus Proyek Gagal (*Lost Case*)** pada portofolio DMS. Slide ini membuktikan bagaimana pergeseran dari penjualan komoditas tunggal ke penjualan **Solusi Terintegrasi 3 Pilar + Ekspansi/Internal IP** secara langsung mengubah kekalahan menjadi kemenangan bermargin tinggi.

#### 2. Struktur Komponen & Isi Data (`src/slide/26/data.ts` & `container.tsx`)
- **Layout 2 Kolom Komparatif Mendalam (*Side-by-Side Case Study Cards*)**:
  - **KOLOM KIRI (HIJAU EMERALD) — CONTOH BANK CASE #1: PROYEK BERHASIL (`BC-2026-WON-008`)**:
    - **Judul Kasus**: *Modernisasi Infrastruktur Jaringan, Digital Signage & Sistem Monitoring Terpadu Gedung Perkantoran & Ritel*.
    - **Segmen & Nilai**: Vertikal Properti Komersial & Hospitality • Nilai Kontrak **Rp 2,4 Miliar** • Gross Margin **46%** • Skema **Hybrid (CAPEX + 36 Bulan MRR)**.
    - **Portofolio DMS yang Ditawarkan (Sinergi 3 Pilar)**:
      - *Existing*: GPON OLT, ONT WiFi 5G, ADSS/Dropwire, & *Automatic Configuration Server (ACS)*.
      - *Pengembangan*: *Media Digital — Digital Signage (produk Oxygen)* untuk 45 titik layar direktori/iklan gedung & integrasi *ICT Solution*.
      - *Ekspansi & IP*: *White Label Interactive Flat Panel (IFP)* ruang meeting eksekutif + langganan *Internal IP IoT Building Dashboard*.
    - **Kompetitor yang Dikalahkan**: ISP Tier-1 (mahal & kaku) serta 2 vendor hardware terpisah.
    - **Faktor Kunci Kemenangan (*Winning Factors*)**:
      1. Klien menolak mengurus 3 vendor berbeda; DMS menang mutlak karena menawarkan *Single Point of Contact* dari kabel fiber hingga software layar & IoT.
      2. Penggunaan lini *White Label IFP* dan *Signage Oxygen* memberikan efisiensi TCO 22% bagi klien namun tetap menjaga margin kotor DMS di angka 46%.
    - **Replikasi Strategi (*Playbook Takeaway*)**: Jadikan paket *"Smart Building 3-Pillar Bundle"* sebagai standar penawaran untuk seluruh pengelola gedung & rumah sakit.

  - **KOLOM KANAN (MERAH ROSE / AMBER) — CONTOH BANK CASE #2: PROYEK GAGAL & EVALUASI (`BC-2026-LOST-003`)**:
    - **Judul Kasus**: *Tender Pengadaan Kabel Fiber Optik, OLT/ONT, dan Laptop Operasional Pabrik Manufaktur*.
    - **Segmen & Nilai**: Vertikal Manufaktur • Estimasi Nilai **Rp 1,1 Miliar** • Margin Tertekan **14%** • Skema **Jual-Putus (One-Time Hardware Only)**.
    - **Portofolio yang Ditawarkan Saat Itu**: Hanya menawarkan perangkat lepas (*Dropwire, ADSS Cable, OLT/ONT*, dan *Laptop All Brand*) secara satuan mengikuti daftar belanja (*BoQ*) tender.
    - **Kompetitor Pemenang**: Subkontraktor / Reseller Tier-3 yang membanting harga (*price dumping*) dengan margin di bawah 8%.
    - **Analisis Akar Masalah Kegagalan (*Root Cause Analysis*)**:
      1. **Masuk Terlambat (Reaktif)**: Tim sales baru masuk saat RFP sudah terbit, sehingga spesifikasi dikunci pada harga komoditas termurah.
      2. **Tanpa Diferensiasi Nilai Tambah**: Tidak menyertakan *ACS*, *White Label*, ataupun solusi *Custom Software / IoT Dashboard*, sehingga DMS dinilai setara dengan toko perangkat biasa.
      3. **Terjebak Skema Jual-Putus**: Tidak menawarkan opsi *Managed Services* atau efisiensi OPEX kepada Direktur Keuangan klien.
    - **Tindakan Korektif & Aturan Baru (*Corrective Action Plan*)**:
      1. **Larangan Mengikuti Tender Komoditas Murni dengan Banting Harga**: Wajib melakukan *re-framing* kebutuhan klien menggunakan APN sebelum tender keluar.
      2. **Strategi Bundling Pengunci (*Trojan Horse*)**: Setiap penawaran perangkat IT/FTTH wajib disertai diferensiasi *White Label (IFP/PC AIO/Videotron)*, otomasi *ACS*, atau modul *Internal IP (IoT/Middleware)* yang tidak dimiliki reseller Tier-3.

---

## 5. Sinkronisasi dengan Slide Lain di Dalam Aplikasi

Agar kehadiran 4 slide baru ini benar-benar menyatu dengan keseluruhan alur cerita presentasi:
1. **Sinkronisasi dengan Slide 19 (`Formasi Tim Sales`) & Slide 20 (`Sales Management & KPI`)**:
   - Kepatuhan penyusunan **APN** dan pengisian **Bank Case** menjadi indikator ukur nyata pada KPI **CRM & Reporting Discipline (5%)** serta **Pipeline & Forecast Accuracy (15%)**.
2. **Sinkronisasi dengan Slide 21 (`Pipeline & Forecast — 10 Kriteria`)**:
   - Dokumen **APN** berfungsi sebagai lembar kerja utama untuk memenuhi Kriteria 01 s/d 10 (validasi *pain points*, kalkulasi *Gross Profit*, pemetaan kompetitor, dan *action item*).
3. **Sinkronisasi dengan Slide 22 (`Product Knowledge`)**:
   - Rekapan dari **Bank Case** (Slide 25 & 26) menjadi materi bedah kasus wajib pada **Track B (Minggu Genap: Win-Loss Review & Simulasi C-Level)** di Slide 22.
4. **Sinkronisasi dengan Slide 29 (`Roadmap 90 Hari` — geser dari Slide 25)**:
   - Pada Fase 1 (Hari 1–30), standardisasi template **APN** dan peluncuran repositori **Bank Case** menjadi salah satu *deliverable* tata kelola tim sales.

---

## 6. Rencana Langkah Eksekusi Teknis (Sesuai `EXECUTE_STANDARD.md`)

Ketika rencana ini disetujui untuk dieksekusi, langkah-langkah teknis yang akan dijalankan secara atomik adalah:

1. **Tahap 1 — Reverse-Order Folder Shifting (`28` $\rightarrow$ `32`)**:
   - Menggeser folder slide eksisting dari nomor tertinggi ke terendah agar tidak terjadi tabrakan file:
     - `src/slide/28` $\rightarrow$ `src/slide/32` (*Komitmen Eksekusi*)
     - `src/slide/27` $\rightarrow$ `src/slide/31` (*Strategi Go to Growth*)
     - `src/slide/26` $\rightarrow$ `src/slide/30` (*Roadmap 1 Tahun*)
     - `src/slide/25` $\rightarrow$ `src/slide/29` (*Roadmap 90 Hari*)
     - `src/slide/24` $\rightarrow$ `src/slide/28` (*Target Penjualan*)
     - `src/slide/23` $\rightarrow$ `src/slide/27` (*Remunerasi Tim*)
2. **Tahap 2 — Pembuatan 4 Folder Slide Baru (`23`, `24`, `25`, `26`)**:
   - Membangun masing-masing paket 4 berkas standar (`data.ts`, `container.tsx`, `utils.ts`, `index.tsx`) untuk:
     - `src/slide/23/` (**Regulasi & Kerangka APN**)
     - `src/slide/24/` (**Detail Contoh APN**)
     - `src/slide/25/` (**Regulasi Bank Case**)
     - `src/slide/26/` (**Detail Contoh Bank Case**)
   - Seluruh data tersedia lengkap dalam 2 bahasa (**Bahasa Indonesia `id`** dan **Bahasa Inggris `en`**) serta responsif untuk tema **Light / Dark Mode**.
3. **Tahap 3 — Sinkronisasi Otomatis Single Source of Truth (`sync-slides.cjs`)**:
   - Menjalankan `node scripts/sync-slides.cjs` untuk memperbarui seluruh `slideMeta.slideNumber`, `slideMeta.folder`, dan men-generate ulang `src/slide/registry.ts`.
   - Dengan demikian, **Sidebar**, **Header**, **App Router**, **Print Document**, dan **Validasi Parameter URL (`?page=1` s/d `32`)** otomatis tersinkronisasi 100%.
4. **Tahap 4 — Verifikasi Ganda (`Check + Lint + Build`)**:
   - Menjalankan `npm run check`, `npm run lint` (`tsc --noEmit`), dan `npm run build` (`compile_applet`) untuk memastikan tidak ada error kompilasi maupun ketidaksinkronan urutan.
