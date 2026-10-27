# Standar Eksekusi Prompt & Arsitektur Proyek (AI Studio Build Standard)

Dokumen ini merupakan panduan acuan standar (*standard operating guideline*) untuk menganalisis, memperbarui, mengeksekusi prompt, serta memelihara aplikasi web modern di lingkungan Google AI Studio Build.

---

## 1. Prinsip Utama Eksekusi Prompt

1. **Analisa Menyeluruh Sebelum Tindakan (*Read & Analyze First*)**:
   - Pahami konteks aplikasi, dependencies yang sudah terpasang, serta struktur routing/komponen.
   - Lakukan pemeriksaan skill (*Skill Check*) untuk memastikan apakah terdapat modul khusus yang relevan.
2. **Otomasi Berbasis Skrip (*Script Automation*)**:
   - Untuk tugas massal (migrasi folder, audit file, analisis metrik, batch replace), gunakan skrip terstandar (`.cjs`, `.js`, `.sh`, `.py`).
   - Setiap skrip harus bersifat **idempoten** (aman dijalankan berulang kali tanpa merusak kode).
3. **Arsitektur Bersih & Standar (`/src` Layout)**:
   - Semua kode aplikasi React, styling, context, hooks, dan tipe data WAJIB berada di dalam direktori `src/`.
   - File konfigurasi (Vite, TypeScript, package.json) berada di root level.
4. **Verifikasi Ganda (*Dual Verification*)**:
   - Setiap perubahan kode harus diverifikasi melalui linting/typechecking (`npm run lint` / `tsc --noEmit`) dan build produksi (`npm run build`).

---

## 2. Struktur Direktori Standar Modern

```
/
├── .gitignore
├── EXECUTE_STANDARD.md         # Dokumen panduan standar (file ini)
├── README.md
├── index.html                  # Entry point HTML utama (menunjuk ke /src/index.tsx)
├── metadata.json               # Konfigurasi AI Studio Applet
├── package.json                # Dependencies, devDependencies, dan custom scripts
├── tsconfig.json               # Konfigurasi TypeScript dan path alias (@ -> ./src)
├── vite.config.ts              # Konfigurasi bundling Vite & alias
│
├── scripts/                    # Direktori otomasi & pemeliharaan proyek
│   ├── build-check.sh          # Pipeline verifikasi lengkap (struktur + lint + build)
│   ├── verify-structure.cjs    # Script verifikasi integritas file & direktori
│   ├── create_slides.cjs       # Script generator arsitektur per-slide
│   ├── fix_containers.py       # Script pembersihan container & hooks
│   └── analyze_project.py      # Script Python audit metrik & statistik kode
│
└── src/                        # Semua source code aplikasi
    ├── App.tsx                 # Root component aplikasi (Navigation, Slide state, Views)
    ├── index.tsx               # Entry point React (ReactDOM.createRoot)
    ├── index.css               # Styling global Tailwind & CSS overrides
    ├── types.ts                # Definisi interface, types, dan enums TypeScript
    ├── lib/                    # Helper & utility umum (cn() helper)
    ├── contexts/               # State management (Navigation, Theme, Language)
    │
    ├── components/             # HANYA komponen global: Header, Layout, UI Atomik
    │   ├── Header.tsx          # Global top header & navigation controls
    │   ├── Layout.tsx          # Shell navigasi & layout slide
    │   ├── DashboardOverview.tsx # Tampilan katalog / overview slide
    │   ├── IntroSequence.tsx   # Intro opening sequence (dengan skip button)
    │   ├── PrintDocument.tsx   # Cetak/Export dokumen
    │   ├── charts/             # Reusable Global Chart UI Primitives:
    │   │   ├── CircleChart.tsx # Generic Donut/Pie/Progress circle chart UI
    │   │   ├── LineChart.tsx   # Generic Multi-Line & Area curve chart UI
    │   │   ├── HexagonalChart.tsx # Generic Radar / Hexagon spider chart UI
    │   │   ├── BarChart.tsx    # Generic Vertical & Horizontal Bar chart UI
    │   │   └── index.ts        # Barrel export untuk semua chart global
    │   └── ui/                 # UI atomik: CountUp, StepWrapper, StepIntro
    │
    └── slide/                  # Arsitektur 31 Slide Mandiri (Setiap folder memiliki data.ts, container.tsx, utils.ts, index.tsx)
        ├── 01/                 # Slide 01: Cover & Opening (PT Digital Multi Sinergy 2026-2027)
        ├── 02/                 # Slide 02: Ringkasan Eksekutif & 5 Prioritas Strategis Harry Gultom
        ├── 03/                 # Slide 03: Kondisi & Posisi Pasar Saat Ini Serta Audit 30 Hari
        ├── 04/                 # Slide 04: Tren Pasar ICT, FTTH & Bandwidth Korporasi 2026–2027
        ├── 05/                 # Slide 05: Peluang Pasar & Segmentasi Sasaran Potensial B2B
        ├── 06/                 # Slide 06: Pemetaan Kompetitor 3-Tier & Matriks Kuadran 2D
        ├── 07/                 # Slide 07: Analisa Benchmark Pemain Tier 1 (MTDL, MSTI, MORA, MLPT)
        ├── 08/                 # Slide 08: Analisa Tier 2 & Evaluasi Kesenjangan DMS
        ├── 09/                 # Slide 09: 5 Pilar Keunggulan Kompetitif DMS
        ├── 10/                 # Slide 10: Portofolio Inti Siap Jual (Core Ready-to-Sell: FTTH, Leased Line, DC, IT HW)
        ├── 11/                 # Slide 11: Matriks Segmentasi 6 Vertikal Industri B2B (Manufaktur, Finansial, Hospitality, dsb)
        ├── 12/                 # Slide 12: Fokus Solusi & Penjawab Pain-Points Industri
        ├── 13/                 # Slide 13: Peta Sebaran Titik Penetrasi Nasional Se-Indonesia (Interactive Map)
        ├── 14/                 # Slide 14: B2B Sales Playbook & Skema Penjualan Terarah (Bundling & Lock-in)
        ├── 15/                 # Slide 15: Ideal Customer Profile (ICP) & Buyer Persona B2B (C-Level, IT, Property, Finance)
        ├── 16/                 # Slide 16: Sinergi Infrastruktur Oxygen.id & Saluran Kemitraan
        ├── 17/                 # Slide 17: Formasi Tim Sales & Marketing (5 Personel)
        ├── 18/                 # Slide 18: Sales Management & Bobot KPI Terukur
        ├── 19/                 # Slide 19: Pipeline Governance & 10 Kriteria Validasi Forecast
        ├── 20/                 # Slide 20: Product Knowledge Sharing & Program Pelatihan Rutin
        ├── 21/                 # Slide 21: Skema Remunerasi Berbasis Margin & Kebijakan Reimbursement
        ├── 22/                 # Slide 22: Target Penjualan: Skenario Menengah vs Agresif
        ├── 23/                 # Slide 23: Roadmap 90 Hari Pertama (Fase 1, 2, 3)
        ├── 24/                 # Slide 24: Roadmap 1 Tahun (2026–2027: Q1 s/d Q4)
        ├── 25/                 # Slide 25: Roadmap 5 Tahun (2026–2030: Tahun 1 s/d 5)
        ├── 26/                 # Slide 26: Transformasi Menuju Tier 1 (Go to Tier 1 Pasca-5 Tahun)
        ├── 27/                 # Slide 27: Visi Solusi Jangka Panjang: Arsitektur ICT & FTTH 3-Layer
        ├── 28/                 # Slide 28: Portofolio Ekspansi 1: DMS SecureNet™ (Managed SD-WAN & SASE)
        ├── 29/                 # Slide 29: Portofolio Ekspansi 2: DMS SovereignCloud™ (Private DC & DRaaS)
        ├── 30/                 # Slide 30: Portofolio Ekspansi 3: DMS EnterpriseAI™ (Intelligent Workflow & AIOps)
        └── 31/                 # Slide 31: Matriks Solusi Komprehensif & Transformasi Menuju Pemain Tier 1 Nasional
```

---

## 3. Standar Penggunaan Script Otomasi

Dalam pengembangan dan pembaruan, pengembang atau AI agent dapat membuat dan mengeksekusi skrip berikut:

### A. Format `.cjs` / `.js` (Node.js Automation)
*Cocok untuk: Manipulasi struktur berkas, pemeriksaan file JSON, validasi sintaks, dan migrasi.*
- **Karakteristik**: Berjalan langsung di runtime Node.js tanpa kompilasi tambahan.
- **Standar Template**:
```javascript
const fs = require('fs');
const path = require('path');

function execute() {
  console.log('[INFO] Memulai eksekusi task...');
  // Logika manipulasi file
}

execute();
```

### B. Format `.sh` (Bash Pipeline)
*Cocok untuk: Menggabungkan beberapa langkah command line (test -> lint -> build) secara berurutan.*
- **Karakteristik**: Cepat, exit otomatis jika terjadi kegagalan (`set -e`).
- **Standar Template**:
```bash
#!/usr/bin/env bash
set -e

echo "1. Menjalankan verifikasi struktur..."
node scripts/verify-structure.cjs

echo "2. Menjalankan linting..."
npm run lint

echo "3. Menjalankan build..."
npm run build
```

### C. Format `.py` (Python Utilities)
*Cocok untuk: Analisis data, metrik kode sumber, pelaporan, dan parsing format kompleks.*
- **Karakteristik**: Standard library yang kaya (`os`, `json`, `pathlib`).
- **Standar Template**:
```python
#!/usr/bin/env python3
import os
import json
from pathlib import Path

def main():
    print("[INFO] Analisis codebase...")

if __name__ == '__main__':
    main()
```

---

## 3.1 Studi Kasus: Mengapa Pembuatan container.tsx & Slide Baru Wajib Menggunakan Script

### Latar Belakang Kasus
Pada arsitektur presentasi modular di mana setiap slide memiliki direktori tersendiri (`src/slide/01` s/d `src/slide/24`), penambahan slide baru di tengah urutan dan penggeseran nomor folder (*slide shifting*) merupakan skenario yang sering terjadi (contoh: penambahan Slide 04 & 05 yang menggeser nomor slide 05 menjadi 06, 06 menjadi 07, dan seterusnya).

### Perbandingan Efisiensi Eksekusi

| Parameter | Pendekatan Manual (Per-File Tool Calls) | Pendekatan Script Otomasi (`run_command`) |
|---|---|---|
| **Jumlah Tool Calls** | 15–30 panggilan individual (`write_to_file`, `move`, `replace_file_content`) | **1–2 eksekusi script** (`node scripts/scaffold_slide.cjs`) |
| **Waktu Eksekusi** | Lambat (banyak roundtrip jaringan & pemrosesan token) | **Instan (< 2 detik)** langsung di sistem lokal |
| **Konsumsi Token** | Sangat besar (ribuan token untuk mengirim kode berulang per file) | **Sangat hemat** (hanya mengeksekusi perintah CLI) |
| **Integritas Shifting** | Rawan tabrakan folder (*folder collision / overwrite*) jika urutan keliru | **Aman & Atomik** berkat algoritma *reverse-order loop* |
| **Keseragaman UI** | Rentan inkonsistensi styling Tailwind & import | **100% Konsisten** mengikuti template `container.tsx` standar |

### Aturan Baku Eksekusi Slide Baru:
1. **Dilarang keras** membuat berkas `data.ts`, `container.tsx`, `index.tsx`, dan `utils.ts` secara manual satu per satu lewat tool penulisan jika jumlah slide yang dibuat/digeser $\ge 2$.
2. **Wajib memanfaatkan / membuat script generator** di `scripts/scaffold_slide.cjs` atau skrip batch Node.js/Python yang membuat paket 4-berkas slide secara serentak.
3. **Wajib menerapkan Reverse-Order Shifting**: Ketika menggeser folder direktori, eksekusi pemindahan harus berjalan dari nomor indeks tertinggi menuju indeks terendah (misal: `22 -> 24`, `21 -> 23`, `...`, `05 -> 06`) agar direktori tujuan dipastikan kosong dan tidak saling menimpa.

---

## 3.2 Standar Arsitektur 4-Berkas & Template `container.tsx`

Setiap folder slide di `/src/slide/XX/` wajib memiliki 4 berkas dengan spesifikasi:

1. **`data.ts`**:
   - Mendefinisikan tipe data/interface TypeScript (`export interface ...`).
   - Menyimpan seluruh data teks, metrik, angka tabular, dan konfigurasi slide tanpa markup JSX.
2. **`container.tsx`**:
   - Menerima prop opsional `SlideContainerProps` (`initialStep?: number`).
   - Menyertakan header standar: badge bagian/kategori, judul utama (h2), dan deskripsi konteks.
   - Menyediakan interaktivitas (tab/view switchers, card selection, atau filter interaktif).
   - Mematuhi *Frontend Design Constitution*: bebas *pill badge sandwich*, menggunakan `tabular-nums` untuk angka, dan mendukung transisi Tailwind dark/light mode.
3. **`utils.ts`**:
   - Menyimpan fungsi murni kalkulasi data atau helper formatting (contoh: `getSlideItemCount()`).
4. **`index.tsx`**:
   - Entry point modul dengan barrel export standar:
   ```typescript
   import Container from './container';
   export { slideData } from './data';
   export default Container;
   ```

### Script Standar yang Tersedia: `scripts/scaffold_slide.cjs`
Untuk men-generate slide baru atau menggeser urutan secara otomatis, jalankan:
```bash
# Contoh 1: Membuat slide baru nomor 25
node scripts/scaffold_slide.cjs --number 25 --title "Analisis Portofolio" --section "Bagian 6 • Target"

# Contoh 2: Menggeser folder slide mulai indeks 04 ke atas sebelum menyisipkan slide baru
node scripts/scaffold_slide.cjs --shift-from 04
```

---

## 4. Alur Kerja Standar (Workflow 5 Tahap)

Saat menerima perintah perbaikan atau fitur baru:

1. **Fase 1: Tinjau & Identifikasi**
   - Periksa file terkait dengan `view_file`. Jangan membuat asumsi sebelum melihat kode aktual.
2. **Fase 2: Kelola Library & Dependencies**
   - Pasang library yang diperlukan menggunakan tool instalasi resmi (`install_applet_package`).
   - Pastikan tipe data TypeScript pendukung (misal `@types/react`, `@types/node`) selalu tersedia.
3. **Fase 3: Pembuatan Script / Otomasi (Jika Perlu)**
   - Jika perubahan menyangkut banyak file atau struktur direktori, buat skrip di folder `scripts/` dan jalankan via `run_command`.
4. **Fase 4: Penulisan Kode yang Lengkap**
   - Tulis kode secara utuh dan bersih.
   - Hindari placeholder yang belum terimplementasi.
   - Pastikan path import menggunakan `@/` atau relative path yang valid terhadap `src/`.
5. **Fase 5: Validasi Akhir**
   - Jalankan `npm run lint` (TypeScript typecheck).
   - Jalankan `npm run build` / `compile_applet`.
   - Pastikan seluruh proses sukses dengan exit code 0.

---

## 5. Daftar Perintah CLI Penting

| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Menjalankan Vite development server di port 3000 |
| `npm run build` | Menjalankan bundling produksi Vite (`dist/`) |
| `npm run lint` | Melakukan typecheck menyeluruh menggunakan `tsc --noEmit` |
| `npm run check` | Memeriksa integritas direktori, urutan sekuensial `01..NN`, dan sinkronisasi `slideMeta` |
| `npm run sync` / `node scripts/sync-slides.cjs` | Menormalisasi urutan folder `src/slide/01..NN`, memperbarui `slideMeta` di setiap `data.ts`, dan men-generate ulang `src/slide/registry.ts` agar Sidebar, App, dan URL 100% sinkron |
| `node scripts/sync-slides.cjs --move <FROM> <TO>` | Memindahkan slide nomor `<FROM>` ke urutan `<TO>` secara atomik (otomatis menggeser folder, nomor slide, dan Sidebar) |
| `node scripts/sync-slides.cjs --swap <A> <B>` | Menukar posisi Slide `<A>` dengan Slide `<B>` secara langsung |
| `node scripts/sync-slides.cjs --remove <NUM>` | Menghapus Slide `<NUM>` dan merapatkan kembali nomor folder serta menu Sidebar |
| `node scripts/scaffold_slide.cjs` | Generator otomatis scaffolding 4-berkas slide (`container.tsx`, `data.ts`, `utils.ts`, `index.tsx`) & reverse shifting |
| `bash scripts/build-check.sh` | Menjalankan seluruh rangkaian pengecekan (Check + Lint + Build) |
| `python3 scripts/analyze_project.py` | Menampilkan ringkasan statistik dan metrik file dalam `src/` |

---

## 6. Checklist Pembaruan Selanjutnya

- [ ] Urutan slide, judul Sidebar, dan nomor folder halaman WAJIB tersinkronisasi melalui `src/slide/registry.ts` dan `node scripts/sync-slides.cjs`
- [ ] Penambahan / pergeseran / pemindahan slide wajib menggunakan `scripts/sync-slides.cjs` atau `scripts/scaffold_slide.cjs`
- [ ] Seluruh komponen baru ditempatkan di `src/components/` atau `src/slide/XX/`
- [ ] Interface data baru didaftarkan di `src/types.ts` atau `src/slide/XX/data.ts`
- [ ] Penggabungan class Tailwind menggunakan `cn()` dari `src/lib/utils.ts`
- [ ] `npm run lint` dan `compile_applet` berjalan tanpa error
- [ ] Metadata di `metadata.json` dan `index.html` tetap sinkron
