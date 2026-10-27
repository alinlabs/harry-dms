# Panduan & Spesifikasi Lottie Animation di Google AI Studio
*(Dokumentasi Terus Disempurnakan — Versi Pembaruan Kinetic Line & Anti-Mengambang)*

Dokumen ini menjelaskan integrasi animasi Lottie di aplikasi web (React), standar kualitas animasi berbasis **Element Kinetic Motion** (anti-mengambang/anti-bobbing), bedah struktur JSON Bodymovin v5.5.2, serta cara memandu (prompting) Google AI Studio untuk membuat animasi outline Lottie berkualitas tinggi.

---

## 1. Kebutuhan Library untuk Lottie di Web

**Apakah perlu library?**
**Ya, sangat wajib.** File `.json` Lottie berisi instruksi matematis kurva Bézier, keyframe timing, dan vektor layer. Browser membutuhkan runtime engine untuk menginterpretasikan JSON menjadi rendering canvas/SVG interaktif.

### Library & Komponen Player yang Terpasang
Paket **`lottie-react`** telah diinstal pada project ini (`npm install lottie-react`).

Untuk menghindari masalah CORS di environment iFrame/proxy dan mematuhi aturan aksesibilitas WCAG 2.2.2 (Level A) tanpa peringatan console:
1. **Bundled JSON Import (Anti-CORS / Anti-Fetch Lag):**
   File JSON diimpor langsung dalam JavaScript (`import homeLottieData from '../assets/home-lottie.json'`). Data dimasukkan langsung ke memori bundler, sehingga tidak ada request HTTP `fetch()`, zero CORS issue, dan animasi tampil instan.
2. **Penyelesaian Peringatan WCAG 2.2.2 (Level A):**
   Peringatan `[lottie-react] this animation starts by itself...` muncul jika `autoplay={true}` pada animasi yang berulang lebih dari 5 detik tanpa kontrol jeda. Solusinya:
   - Tidak menyalakan `autoplay` langsung di deklarasi props (`autoplay={false}`).
   - Menjalankan pemutaran saat komponen siap (`ready`).
   - Menyediakan affordance jeda (*pause affordance*), misalnya tombol kontrol atau aksi klik untuk mem-pause/play animasi.

### Komponen Siap Pakai (`src/components/LottiePlayer.tsx`):
```tsx
import React from 'react';
import { LottiePlayer } from '@/components/LottiePlayer';

export const MyComponent: React.FC = () => {
  return (
    <div className="w-24 h-24">
      {/* Menggunakan data bundled, bebas peringatan WCAG, dan ada micro-pause control */}
      <LottiePlayer 
        className="w-full h-full" 
        title="Konektivitas FTTH Handal"
      />
    </div>
  );
};
```

---

## 2. Prinsip Utama Desain Lottie: Anti-Mengambang (*Grounded Kinetic*)

Berdasarkan evaluasi visual, animasi yang sekadar menganimasikan posisi sumbu Y keseluruhan objek (`ks.p` naik-turun looping) terlihat murahan, mengambang seperti balon (*floating/bobbing*), dan tidak profesional.

### Standar Kualitas Baru:
1. **Objek Utama Kokoh di Tempat (*Grounded Base*):**
   - Bangunan rumah, tanah/fondasi, rack server, atau bodi utama perangkat memiliki koordinat posisi statis (`"a": 0, "k": [240, 240, 0]`).
   - Tidak ada animasi goyang/mengambang pada struktur pokok.
2. **Gerakan Berada di Level Elemen (*Element-Level Kinetics*):**
   - **Gelombang Wi-Fi / Radio:** Menggunakan 3 arc konsentris bertingkat yang memancar keluar secara bergantian (*staggered scale & opacity fade*).
   - **Kabel Fiber Optik:** Garis kabel masuk dari luar ke dalam rumah dengan partikel pulsa cahaya (*optical data pulse*) yang meluncur di sepanjang jalur kabel.
   - **Indikator Status (LED):** Titik lampu router/modem di jendela berkedip cepat (*heartbeat pulse*) menandakan transmisi data aktif.
   - **Garis Gambar (*Trim Path*):** Menggunakan operator `"ty": "tm"` untuk garis yang tergambar dinamis.

---

## 3. Bedah Struktur JSON Bodymovin v5.5.2

### A. Root Metadata
```json
{
  "v": "5.5.2",
  "fr": 20,             // Frame Rate (20 fps)
  "ip": 0,              // In-point (frame 0)
  "op": 60,             // Out-point (frame 60 = 3 detik loop sempurna)
  "w": 480,             // Canvas Width
  "h": 480,             // Canvas Height
  "nm": "house_ftth_kinetic_outline",
  "ddd": 0,
  "layers": [...]
}
```

### B. Daftar Layer Berdasarkan Hirarki (Z-Order):
1. **`Wi-Fi Radiation Waves` (Layer 8, 7, 6):** Arc gelombang sinyal dengan animasi skala (`s`) dan transparansi (`o`) bertingkat.
2. **`Antenna Emitter Node` (Layer 5):** Titik simpul di ujung tiang antena atap yang berdenyut lembut.
3. **`Modem Optical LED Activity` (Layer 4):** Titik lampu status konektivitas di jendela rumah yang berkedip aktif (Cyan Glow `#06b6d4`).
4. **`Solid House Structure` (Layer 3):** Rangka outline atap, dinding, jendela, pintu, dan tiang antena (Statis & kokoh, tebal 18px).
5. **`Fiber Data Packet Traveling` (Layer 2):** Pulsa data optik bergerak dari ujung kabel luar ke dalam terminal modem (`p` ber-keyframe).
6. **`Grounded Foundation & Fiber` (Layer 1):** Garis tanah horizontal dan jalur kabel masuk (*ingress cable*).

---

## 4. Formula Gerakan Elemen (*Kinetic Formulas*)

### 1. Staggered Wi-Fi Wave Radiation (Gelombang Bertingkat)
Agar gelombang memancar secara alami:
- **Wave 1 (Kecil):** Aktif frame 0 - 35 (Skala 75% -> 125%, Opacity 30% -> 100% -> 30%)
- **Wave 2 (Sedang):** Aktif frame 15 - 48 (Delay 15 frame, Opacity puncak di frame 35)
- **Wave 3 (Besar):** Aktif frame 25 - 58 (Delay 25 frame, Opacity puncak di frame 45)
Hasilnya adalah efek riak sinyal kontinu tanpa terputus.

### 2. Fiber Data Pulse Translation (Pulsa Data Mengalir)
Posisi pulsa cahaya bergerak mengikuti segmen koordinat kabel:
```json
"p": {
  "a": 1,
  "k": [
    { "t": 0, "s": [70, 410, 0], "e": [130, 410, 0] },
    { "t": 25, "s": [130, 410, 0], "e": [150, 410, 0] },
    { "t": 35, "s": [150, 410, 0], "e": [150, 370, 0] },
    { "t": 60, "s": [150, 370, 0] }
  ]
}
```

### 3. Modem LED Status Blink (Kedip Aktif)
Perubahan opacity berulang dari 20% ke 100% setiap 15 frame memberikan kesan transmisi data berkecepatan tinggi.

---

## 5. Generator Skrip Mandiri (`scripts/generate_lottie.cjs`)

Project ini dilengkapi skrip generator otomatis di `scripts/generate_lottie.cjs` yang mematuhi standar *Element Kinetic Motion*.

### Menjalankan Generator:
```bash
node scripts/generate_lottie.cjs
```

### Output File Otomatis:
- `public/home-lottie.json`: File utama animasi rumah + wifi FTTH terpasang di cover aplikasi.
- `public/outline-home-generated.json`: Template outline rumah terverifikasi.
- `public/outline-signal-generated.json`: Template standalone pemancar sinyal nirkabel.

---

## 6. Template Prompt untuk Google AI Studio / Pembuatan Lottie Baru

Gunakan instruksi terstruktur ini setiap kali meminta pembuatan animasi Lottie baru agar hasilnya selalu presisi dan tidak mengambang:

```markdown
Buatkan sebuah file animasi Lottie dalam format JSON murni (Bodymovin v5.5.2) untuk: [NAMA ICON / TOPIK, contoh: Rumah FTTH dengan Sinyal Wi-Fi / Tower BTS 5G / Router Mesh].

Spesifikasi Gerakan Wajib (DISIPLIN ANTI-MENGAMBANG):
1. DILARANG membuat objek utama mengambang naik-turun (posisi Y objek utama harus statis di tempat).
2. Gerakan WAJIB berupa kinetika elemen internal yang detail:
   - Garis sinyal memancar secara bertingkat (staggered waves dengan skala dan transparansi looping).
   - Jalur kabel data memiliki pulsa partikel cahaya yang mengalir masuk.
   - Lampu indikator hardware berkedip aktif menandakan status koneksi.
3. Dimensi canvas: 480x480, 60 frame (20 fps), durasi loop tepat 3 detik.
4. Gaya visual: Outline stroke bersih (lebar 14-18px), ujung garis bulat ("lc": 2, "lj": 2), tanpa fill hitam pekat.
5. Warna: Kombinasi Biru (#2563eb / [0.145, 0.388, 0.922, 1]), Cyan (#06b6d4 / [0.024, 0.714, 0.831, 1]), dan Dark Slate (#1e293b / [0.118, 0.161, 0.231, 1]).
6. Format Output: HANYA berikan raw JSON yang valid tanpa markdown codeblock atau teks pengantar.
```

---

## 7. Catatan Pembaruan & Mekanisme yang Terus Disempurnakan
- **Rev 1.0:** Inisialisasi library `lottie-react` dan bedah struktur file mentah.
- **Rev 2.0:** Eliminasi whole-object hovering (`ks.p` bobbing). Penambahan arsitektur *Element Kinetics* (concentric wave propagation, fiber ingress line, traveling data packet, and active hardware status LED). Pembaruan otomatis script dan dokumentasi.
