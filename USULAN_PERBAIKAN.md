# Usulan Perbaikan — Daging Pak Irfan

Audit + rekomendasi berdasarkan riset 5 site aqiqah/butcher Indonesia yang konversi tinggi (Family Aqiqah, Aqiqah Mustopa, Warung Aqiqah, dll) + best practice landing page makanan UMKM.

---

## 1. AUDIT: yang udah BAGUS di site lo sekarang

- Layout clean, mobile-first
- 3 kategori tab jelas (Daging / Sate / Aqiqah)
- Foto produk asli (bukan stok) — trust signal kuat
- Form pesanan ke WA otomatis dengan item + total — udah pro
- Section "Tentang Pak Irfan" — personal touch, relate banget di Banyumas
- Google Maps presisi ke USMAN Jagal Kambing — pelanggan gampang nemu
- Disclaimer harga "berubah sesuai harga pasar" — jujur & profesional
- Logo asli WA/IG/FB di tombol — clean look
- Galeri 6 foto

---

## 2. KELEMAHAN UTAMA (urut by impact)

1. **Belum ada Floating WhatsApp Button** di pojok kanan bawah — ini WAJIB buat site Indonesia, bisa naikkin konversi sampai 20%
2. **Hero copy generic** — "Daging Kambing & Sapi Pilihan" gak punya hook unik
3. **Belum ada trust counters** (X keluarga terlayani / Y tahun pengalaman) — kompetitor semua punya
4. **"Mengapa Pilih Kami" missing** — 4-6 USP kunci dengan icon
5. **"Cara Pesan" flow missing** — 3 langkah visual (Pilih → Konfirmasi → Antar)
6. **Sertifikat Halal MUI** belum di-highlight (kalau ada)
7. **Promo / urgency banner** missing — "Free Ongkir radius X km" / "Promo Aqiqah minggu ini"
8. **Sticky bottom bar mobile** missing — CTA tetep keliatan walau scroll
9. **Footer minimalis** — bisa lebih informative
10. **Color: dominan merah-abu** — kurang warm, bisa tambah accent kuning/mustard biar khas Indonesia

---

## 3. RENCANA — 3 TIER

### TIER A — HIGH IMPACT (gua kerjain dalam 1 deploy)

| # | Fitur | Nilai |
|---|---|---|
| A1 | **Floating WA button** kanan bawah dengan animasi subtle bouncing | konversi naik 15-20% |
| A2 | **Hero copy upgrade**: hook lebih kuat + 3 trust badge di bawah | first impression |
| A3 | **Trust counters** above-the-fold: keluarga terlayani / tahun pengalaman / kota antar / halal MUI | trust signal aqiqah |
| A4 | **"Mengapa Pilih Pak Irfan?" section** dengan 4-6 USP icon | differentiator |
| A5 | **"Cara Pesan" 3 langkah visual** (Pilih → Konfirmasi → Antar/Diambil) | reduce friction |
| A6 | **Sticky bottom bar mobile** — "Pesan via WA — 0857..." selalu visible | conversion |
| A7 | **Promo / urgency banner** atas hero — bisa diatur di data.js | sales hook |
| A8 | **Color refresh**: tambah accent kuning mustard untuk badge harga/promo, cream background section, hijau halal mini-badge per produk | appetite + Indo feel |

### TIER B — MEDIUM IMPACT (kalau lo OK, deploy ke-2)

| # | Fitur | Nilai |
|---|---|---|
| B1 | **Expansi paket Aqiqah** → 6-9 paket (kombinasi 30/50/100 box × Standar/Spesial) | range pricing wider |
| B2 | **Pilihan menu masakan untuk aqiqah** (sate/gulai/tongseng/rendang) — pelanggan pilih saat pesan | personalization |
| B3 | **Section "Acara yang sudah dilayani"** — kalau lo punya foto acara aqiqah/hajatan, gua tampilkan di carousel | social proof visual |
| B4 | **Counter animation** — angka jalan 0 → target pas user scroll | wow factor |
| B5 | **Lightbox galeri** — klik foto, fullscreen popup | UX polish |
| B6 | **Footer expanded** — link cepat, social, copyright, tagline | profesional |

### TIER C — BIG (long-term, kalau usaha makin besar)

| # | Fitur | Nilai |
|---|---|---|
| C1 | **Sertifikat Halal MUI** scan + di-highlight | wajib untuk aqiqah serius |
| C2 | **Schema.org LocalBusiness** + Google Business Profile link | SEO lokal Banyumas |
| C3 | **PWA — install ke HP** | return customer tinggal buka icon |
| C4 | **Map area pengiriman** dengan radius dari Pliken | clarity ongkir |
| C5 | **Newsletter / WA broadcast subscribe** | retention |
| C6 | **Open Graph image** — preview cantik pas dishare di WA/FB | viral potential |

---

## 4. STRATEGI WARNA & KATA-KATA

### Warna baru (rekomendasi):
- **Merah brand** (existing) — selera makan, trust, premium
- **Kuning mustard #f59e0b** (NEW accent) — cerah, hangat, "best seller" badge, harga promo
- **Hijau halal #16a34a** (NEW kecil) — badge "100% Halal" di setiap produk
- **Cream #fef3c7 / #fffaf3** (existing background, perluasan ke section info)
- **Hindari**: biru/ungu/abu pucat (terlalu corporate, gak food-appropriate)

### Kata-kata yang lebih kuat (proposed):

| Sekarang | Upgrade |
|---|---|
| "Daging Kambing & Sapi Pilihan, Halal & Segar" | "**Aqiqah Berkah, Sate yang Gak Prengus** — Daging Pilihan dari Pliken, Banyumas" |
| "Pesan via WhatsApp" | "Pesan Sekarang via WhatsApp" / "🔥 Hubungi Pak Irfan Langsung" |
| (sub kosong) | "Halal · Amanah · On-time — sudah dipercaya ratusan keluarga Banyumas–Purwokerto" |
| (USP kosong) | "Kambing pilihan dari kandang sendiri", "Bumbu khas rumahan", "Antar gratis area Banyumas-Purwokerto", "Konfirmasi WA dijawab cepat" |

### Urgency / Promo phrases (rotasi):
- "Pesan H-3 untuk acara akhir minggu"
- "Promo aqiqah minggu ini: Free 30 nasi box"
- "Khusus pelanggan baru: konsultasi gratis via WA"

---

## 5. CARA EKSEKUSI

Jawab di chat, pilih:
- **"Gas Tier A semua"** → gua kerjain semua quick wins, 1 deploy (paling rekomen)
- **"Tier A + B"** → gas all-in, 2 deploy
- **"Tier A + B + C"** → bener-bener pro, butuh data tambahan dari lo (sertifikat, foto acara, dll)
- **"Cherry-pick"** → lo kasih nomor item yang lo mau (cth: A1, A4, A6, B1)
- **"Coba kasih liat dulu beberapa, baru gua pilih"** → gua bikin satu-dua dulu sebagai sample

Yang gua butuhin dari lo (kalau ada, biar isi nya akurat):
- Tahun mulai usaha (buat "Sejak 20XX")
- Estimasi keluarga terlayani / kambing per bulan / jumlah acara aqiqah pernah dihandle
- Sertifikat Halal MUI (kalau ada, kirim foto)
- Foto acara aqiqah yang pernah dihandle (dapur, packing, tamu) — buat social proof
- Promo yang lagi running (kalau ada)
- Mau pakai radius berapa km untuk "free ongkir"?
