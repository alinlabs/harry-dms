import { useLanguage } from '../contexts/LanguageContext';
import React from 'react';
import DmsLogo from './DmsLogo';

export const PrintDocument: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="p-8 max-w-[210mm] mx-auto bg-white text-slate-900 print-wrapper font-sans text-sm leading-relaxed">
      {/* HEADER */}
      <div className="flex justify-between items-center border-b-2 border-slate-900 pb-4 mb-6">
        <DmsLogo size="md" />
        <div className="text-right">
          <div className="font-extrabold text-base uppercase tracking-tight text-slate-900">
            PT. DIGITAL MULTI SINERGY
          </div>
          <div className="text-xs text-slate-600 font-semibold">
            Strategic Business Plan 2026–2027
          </div>
          <div className="text-[11px] text-blue-700 font-bold">
            Presenter: Harry Gultom — Candidate Sales Manager IT &amp; FTTH
          </div>
        </div>
      </div>

      {/* 1. EXECUTIVE SUMMARY */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          {language === 'en' ? '1. Executive Summary & 5 Strategic Priorities' : '1. Executive Summary & 5 Prioritas Strategis'}
        </h2>
        <p className="text-slate-700 mb-3 text-justify">
          Sebagai kandidat Sales Manager IT &amp; FTTH PT. Digital Multi Sinergy (DMS), fokus utama Harry Gultom adalah membangun sistem penjualan B2B yang berdisiplin tinggi, memperkuat bisnis inti konektivitas fiber optik (FTTH &amp; leased line gedung) dan data center, serta mentransformasikan DMS menjadi penyedia solusi ICT menyeluruh (Konektivitas FTTH, Hardware TIK, Data Center, DMS SecureNet™, DMS SovereignCloud™, dan DMS EnterpriseAI™).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">1. Sistem Sales Management:</span>
            <p className="text-slate-600 mt-0.5">Menerapkan KPI, forecasting akurat, pipeline transparan, dan target terukur.</p>
          </div>
          <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">2. Pengembangan &amp; Rekrutmen Tim:</span>
            <p className="text-slate-600 mt-0.5">Kembangkan 2 sales existing + rekrut 1 sales new (B2B Hunter) &amp; 1 marketing spesialis.</p>
          </div>
          <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">3. Ekosistem Kemitraan:</span>
            <p className="text-slate-600 mt-0.5">Mempererat relasi principal, distributor, reseller, SI, dan klien enterprise.</p>
          </div>
          <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">4. Portofolio Solusi Baru:</span>
            <p className="text-slate-600 mt-0.5">Pengembangan lini produk ber-brand: DMS SecureNet™, DMS SovereignCloud™, dan DMS EnterpriseAI™.</p>
          </div>
        </div>
      </section>

      {/* 2. KONDISI AWAL & AUDIT 30 HARI */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          {language === 'en' ? '2. Market Baseline & 30-Day Commercial Audit' : '2. Kondisi dan Posisi Pasar Saat Ini & Audit 30 Hari'}
        </h2>
        <p className="text-slate-700 mb-2 text-justify">
          Prinsip dasar: <em>"Protect the core while building new revenue streams"</em>. Mengidentifikasi bisnis inti yang telah menghasilkan pendapatan (konektivitas dan leased line gedung bertingkat), mempertahankan pelanggan aktif, dan menggali peluang cross-selling.
        </p>
        <div className="text-xs grid grid-cols-2 gap-2">
          <ul className="list-disc pl-4 space-y-1 text-slate-700">
            <li>Produk &amp; layanan aktual yang menghasilkan margin</li>
            <li>Omzet &amp; gross profit setiap lini bisnis</li>
            <li>Pelanggan aktif, dorman &amp; pipeline peluang</li>
            <li>Kontrak berjalan, proyek gedung &amp; tender</li>
          </ul>
          <ul className="list-disc pl-4 space-y-1 text-slate-700">
            <li>Hubungan principal &amp; distributor yang tersedia</li>
            <li>Kemampuan teknis instalasi &amp; purnajual</li>
            <li>Struktur harga, margin &amp; reimbursement</li>
            <li>Posisi strategis dalam ekosistem Moratelindo / MoraRepublic</li>
          </ul>
        </div>
      </section>

      {/* 3. TREN PASAR ICT & FTTH 2026-2027 */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          {language === 'en' ? '3. ICT & FTTH Market Dynamics 2026–2027' : '3. Tren Pasar ICT & FTTH 2026–2027'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">Konektivitas Simetris &amp; FTTH Bisnis:</span>
            <p className="text-slate-600 mt-0.5">Pergeseran ke rasio upload/download 1:1 untuk kelancaran sinkronisasi cloud data center &amp; video conference.</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">Kedaulatan Data (UU PDP):</span>
            <p className="text-slate-600 mt-0.5">Kebutuhan data center lokal &amp; Virtual Private Cloud bersertifikasi yurisdiksi Indonesia.</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">Managed SASE &amp; AI Workflow:</span>
            <p className="text-slate-600 mt-0.5">Proteksi siber per cabang terkelola penuh (OpEx) serta otomatisasi dokumen tender &amp; pemantauan AIOps.</p>
          </div>
        </div>
      </section>

      {/* 4. PELUANG PASAR & 5 KLASTER INDUSTRI */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          {language === 'en' ? '4. B2B Market Opportunities & 6 Target Industry Verticals' : '4. Peluang Pasar B2B & 5 Klaster Industri Sasaran'}
        </h2>
        <div className="p-2.5 bg-blue-50/70 border border-blue-200 rounded text-xs mb-2">
          <strong>Ukuran Pasar (TAM/SAM/SOM):</strong> TAM Indonesia Rp 85,4 T &bull; SAM Mid-Market Jangkauan Fiber Rp 8,2 T &bull; Target SOM Realistis DMS Rp 35–60 Miliar (Horizon 12–24 bulan).
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">1. Kawasan Industri &amp; Manufaktur:</span>
            <p className="text-slate-600 mt-0.5">Leased line simetris, Private Cloud, SLA 99.8% (Cikarang, Karawang, Kendal, Gresik).</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">2. Gedung Komersial Multi-Tenant:</span>
            <p className="text-slate-600 mt-0.5">Konsesi fiber gedung eksklusif &amp; captive broadband perkantoran komersial.</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">3. Korporasi Multi-Cabang &amp; Ritel:</span>
            <p className="text-slate-600 mt-0.5">DMS SecureNet™ (SASE per cabang) dengan single dashboard monitoring pusat.</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">4. Perbankan Daerah &amp; Hospitality:</span>
            <p className="text-slate-600 mt-0.5">Kepatuhan UU PDP (DMS SovereignCloud™) &amp; high-density Wi-Fi perhotelan.</p>
          </div>
        </div>
      </section>

      {/* 5. PETA PERSAINGAN PASAR IT & FTTH NASIONAL */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          5. Peta Persaingan Pasar IT &amp; FTTH Nasional &amp; Posisi DMS
        </h2>
        <div className="grid grid-cols-3 gap-2 text-xs mb-2">
          <div className="border border-purple-200 bg-purple-50/40 p-2 rounded">
            <div className="font-bold text-purple-900 mb-0.5">Tier 1: National Behemoths</div>
            <p className="text-[11px] text-slate-600 mb-1">Perusahaan Tbk/BUMN, backbone nasional, kontrak ratusan miliar.</p>
            <div className="text-[10px] text-slate-700">
              <div><strong>IT SI:</strong> Telkomsigma, Multipolar, MII (Metrodata), Lintasarta</div>
              <div><strong>FTTH:</strong> IndiHome/Telkomsel, First Media/XL, MyRepublic, Iconnet</div>
            </div>
          </div>
          <div className="border border-blue-200 bg-blue-50/40 p-2 rounded">
            <div className="font-bold text-blue-900 mb-0.5">Tier 2: Scale-Up &amp; Specialists</div>
            <p className="text-[11px] text-slate-600 mb-1">Skala menengah-atas, kemitraan prinsipal global, penetrasi kota besar.</p>
            <div className="text-[10px] text-slate-700">
              <div><strong>IT SI:</strong> NetSolution, Indocyber, Mitrais, Sagara Tech</div>
              <div><strong>FTTH:</strong> Biznet Home, CBN, FiberStar, Surge/Starlite</div>
            </div>
          </div>
          <div className="border border-emerald-200 bg-emerald-50/40 p-2 rounded">
            <div className="font-bold text-emerald-900 mb-0.5">Tier 3: Agile &amp; Local Challengers</div>
            <p className="text-[11px] text-slate-600 mb-1">Perusahaan privat, lincah, fleksibel harga, subkontraktor/dealer.</p>
            <div className="text-[10px] text-slate-700">
              <div><strong>IT SI:</strong> <span className="font-bold text-emerald-700">PT Digital Multi Sinergy (DMS)</span>, Nusa Network, Porta Nusa</div>
              <div><strong>FTTH:</strong> Fiberone, Sparta Enterprise, Tayoh Sarana Sukses</div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-700">
          <strong>Analisa Kuadran Posisi DMS:</strong> Saat ini DMS berada di Kuadran 3 (Agile Challenger, X:33, Y:35). Melalui strategi solusi bundling 3-Layer (FTTH + Managed SASE + Sovereign Cloud + Enterprise AI), DMS melompat ke Kuadran Solusi Terpadu (Tier 2, X:58, Y:68) dalam horizon 1–5 tahun, dan resmi bertransformasi ke Kuadran National Leaders (Tier 1, X:84, Y:86) setelah tahun ke-5.
        </div>
      </section>

      {/* 6. VISI SOLUSI ICT 3-LAYER */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          6. Visi Solusi ICT &amp; FTTH 3-Layer Terintegrasi
        </h2>
        <div className="space-y-1.5 text-xs">
          <div className="p-2 bg-blue-50 border-l-4 border-blue-600">
            <span className="font-bold text-blue-900">Layer 1 — Core Business:</span> Konektivitas, Leased Line, Broadband Korporasi, Internet Gedung Bertingkat &amp; Data Center.
          </div>
          <div className="p-2 bg-indigo-50 border-l-4 border-indigo-600">
            <span className="font-bold text-indigo-900">Layer 2 — Managed Security &amp; Cloud:</span> DMS SecureNet™ (Managed SASE) &amp; DMS SovereignCloud™ (Private Cloud &amp; DRaaS).
          </div>
          <div className="p-2 bg-cyan-50 border-l-4 border-cyan-600">
            <span className="font-bold text-cyan-900">Layer 3 — Digital Solutions:</span> DMS EnterpriseAI™ (AIOps, CogniDoc, CogniSearch &amp; Workflow Automation).
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-2 italic">
          Multi-Revenue Stream: 1 Pelanggan = Multiple revenue streams (Perangkat keras + Konektivitas berkala + Lisensi software + SLA Pemeliharaan).
        </p>
      </section>

      {/* 7. STRUKTUR TIM & SALES MANAGEMENT */}
      <section className="mb-6">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          7. Struktur Tim (5 Personel) &amp; Bobot KPI Sales
        </h2>
        <p className="text-xs text-slate-700 mb-2">
          Formasi: Harry (Sales Manager) + 2 Sales Existing + 1 Sales New (B2B Hunter Wajib Rekrut) + 1 Marketing (Wajib Rekrut).
        </p>
        <div className="overflow-x-auto text-xs">
          <table className="w-full border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-left font-bold text-slate-700">
                <th className="p-1.5 border border-slate-200">Komponen KPI</th>
                <th className="p-1.5 border border-slate-200 text-center">Bobot</th>
                <th className="p-1.5 border border-slate-200">Fokus Pengukuran</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-1.5 border border-slate-200">Revenue Achievement</td><td className="p-1.5 border border-slate-200 text-center font-bold">35%</td><td className="p-1.5 border border-slate-200">Pencapaian target nominal omzet penjualan</td></tr>
              <tr><td className="p-1.5 border border-slate-200">Gross Profit &amp; Margin</td><td className="p-1.5 border border-slate-200 text-center font-bold">25%</td><td className="p-1.5 border border-slate-200">Kualitas margin keuntungan bersih per transaksi</td></tr>
              <tr><td className="p-1.5 border border-slate-200">Pipeline &amp; Forecasting</td><td className="p-1.5 border border-slate-200 text-center font-bold">15%</td><td className="p-1.5 border border-slate-200">Kecukupan pipeline (min 3x target) &amp; akurasi forecast</td></tr>
              <tr><td className="p-1.5 border border-slate-200">New Customer Acquisition</td><td className="p-1.5 border border-slate-200 text-center font-bold">10%</td><td className="p-1.5 border border-slate-200">Penambahan new logo akun pelanggan korporasi baru</td></tr>
              <tr><td className="p-1.5 border border-slate-200">Existing Account Growth</td><td className="p-1.5 border border-slate-200 text-center font-bold">10%</td><td className="p-1.5 border border-slate-200">Cross-sell &amp; up-sell DMS SecureNet™, SovereignCloud™ &amp; EnterpriseAI™</td></tr>
              <tr><td className="p-1.5 border border-slate-200">CRM &amp; Reporting Discipline</td><td className="p-1.5 border border-slate-200 text-center font-bold">5%</td><td className="p-1.5 border border-slate-200">Kedisiplinan input deal, 10 data deal &amp; laporan harian</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. ROADMAP: 90 HARI, 1 TAHUN, 5 TAHUN & GO TO TIER 1 */}
      <section className="mb-4">
        <h2 className="text-lg font-black uppercase text-blue-900 border-b border-slate-300 pb-1 mb-2">
          8. Roadmap Eksekusi: 90 Hari, 1 Tahun, 5 Tahun &amp; Transformasi Tier 1
        </h2>
        
        {/* 90 Days */}
        <div className="mb-2">
          <span className="text-[11px] font-bold uppercase text-blue-800 tracking-wider">A. Roadmap 90 Hari Pertama</span>
          <div className="grid grid-cols-3 gap-2 text-xs mt-1">
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">
              <span className="font-bold text-slate-900">Hari 1–30: Foundation &amp; Audit</span>
              <p className="text-slate-600 mt-0.5">Audit 8 area kritis FTTH &amp; data center, penetapan KPI tim, kriteria forecast, dan rekrutmen B2B Hunter.</p>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">
              <span className="font-bold text-slate-900">Hari 31–60: Execution &amp; Pilot</span>
              <p className="text-slate-600 mt-0.5">Pendampingan C-level, deal registration prinsipal, kampanye bundling FTTH + DMS SecureNet™, pilot SovereignCloud™ &amp; EnterpriseAI™.</p>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">
              <span className="font-bold text-slate-900">Hari 61–90: Scale &amp; Optimize</span>
              <p className="text-slate-600 mt-0.5">Audit target Q1, konversi pilot berbayar, standardisasi repeatable sales play, dan penguncian SLA tahunan recurring MRR.</p>
            </div>
          </div>
        </div>

        {/* 1 Year & 5 Years & Tier 1 */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">Roadmap 1 Tahun (Year 1)</span>
            <p className="text-slate-600 mt-0.5">Kuartal I–IV: Konsolidasi finansial, peluncuran resmi 3 brand (DMS SecureNet™, SovereignCloud™, EnterpriseAI™), dan realisasi target tahunan.</p>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded">
            <span className="font-bold text-slate-900">Roadmap 5 Tahun (Year 1–5)</span>
            <p className="text-slate-600 mt-0.5">Tahun 1 (Fondasi) &rarr; Tahun 2 (Ekspansi Regional) &rarr; Tahun 3 (Dominasi Cloud &amp; MRR) &rarr; Tahun 4 (AI Enterprise) &rarr; Tahun 5 (Maturitas Tata Kelola).</p>
          </div>
          <div className="p-2 bg-blue-50 border border-blue-200 rounded">
            <span className="font-bold text-blue-900">Go to Tier 1 (&gt; 5 Tahun)</span>
            <p className="text-blue-700 mt-0.5">Dimulai resmi setelah 5 tahun: Masuk megaproyek nasional, ekspansi FTTH &amp; edge cloud lintas pulau, serta kesiapan tata kelola IPO.</p>
          </div>
        </div>
      </section>

      {/* SIGN OFF */}
      <div className="border-t border-slate-300 pt-4 flex justify-between items-end text-xs text-slate-600">
        <div>
          <div>Dokumen Rencana Bisnis Strategis 2026–2027</div>
          <div className="font-semibold text-slate-800">PT. Digital Multi Sinergy</div>
        </div>
        <div className="text-right">
          <div className="font-bold text-slate-900">Harry Gultom</div>
          <div>Candidate Sales Manager IT &amp; FTTH — PT. Digital Multi Sinergy</div>
        </div>
      </div>
    </div>
  );
};

export default PrintDocument;
