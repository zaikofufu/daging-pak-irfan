/* eslint-env browser */
/* Konfigurasi & data toko. Edit file ini untuk update brand, kontak, paket, dan menu. */

window.SITE_DATA = {
  brand: {
    name: "Daging Pak Irfan",
    tagline: "Halal & Segar",
    fullName: "Daging Pak Irfan — Halal & Segar",
    address: "Desa Pliken, Kec. Kembaran, Kab. Banyumas, Jawa Tengah",
    deliveryArea: "Banyumas, Purwokerto, dan sekitarnya",
    operationalHours: "Setiap hari, 06.00 – 21.00 WIB",
    instagram: "@irfanbongel",
    instagramUrl: "https://www.instagram.com/irfanbongel/",
    facebook: "facebook.com/irfan.bongel.3",
    facebookUrl: "https://www.facebook.com/irfan.bongel.3",
    // Lokasi presisi (USMAN Jagal kambing, Pliken, Kembaran, Banyumas)
    mapsLat: -7.4319344,
    mapsLng: 109.2904214,
    mapsLink: "https://www.google.com/maps/search/?api=1&query=-7.4319344,109.2904214",
    mapsQuery: "Desa Pliken, Kecamatan Kembaran, Kabupaten Banyumas",
  },
  contact: {
    // Format internasional tanpa "+" (Indonesia: 62 + nomor tanpa 0 di depan)
    whatsapp: "6285786254044",
    // Format yang akan ditampilkan di halaman
    whatsappDisplay: "0857-8625-4044",
    email: "halo@dagingpakirfan.example",
  },
  hero: {
    headline: "Aqiqah Berkah, Sate yang Gak Prengus",
    sub: "Daging pilihan dari Pliken, Banyumas — halal, amanah, on-time. Dipercaya keluarga Banyumas–Purwokerto untuk aqiqah, hajatan, dan stok dapur sehari-hari.",
    badges: [
      "100% Halal",
      "Daging Pilihan Pak Irfan",
      "Bumbu Khas Rumahan",
      "Antar Banyumas & Purwokerto",
    ],
  },
  // Banner promo di atas header (kosongkan teks untuk menyembunyikan)
  promo: {
    enabled: true,
    text: "🔥 Promo Aqiqah: Konsultasi menu & survey lokasi GRATIS via WhatsApp",
    cta: "Tanya Sekarang",
  },
  // Stat / trust counter (di bawah hero). Edit angkanya kalau lo punya data lebih akurat.
  stats: [
    { number: "500+", label: "Keluarga Terlayani" },
    { number: "Sejak 2019", label: "Pengalaman" },
    { number: "100%", label: "Halal & Higienis" },
    { number: "Banyumas–Purwokerto", label: "Area Antar" },
  ],
  // USP — "Mengapa Pilih Pak Irfan?"
  usps: [
    { icon: "🐐", title: "Kambing Pilihan", desc: "Dari kandang sendiri di Pliken. Sehat, gak prengus, ditimbang jujur." },
    { icon: "🔪", title: "Halal & Higienis", desc: "Pemotongan sesuai syariat oleh juru sembelih berpengalaman. Bisa disaksikan langsung." },
    { icon: "🚚", title: "Antar Banyumas–Purwokerto", desc: "Free ongkir radius dekat. Untuk luar area, ongkir sesuai jarak." },
    { icon: "🌶️", title: "Bumbu Khas Rumahan", desc: "Resep keluarga, tinggal bakar atau panaskan. Dijamin enak buat acara & makan keluarga." },
    { icon: "📞", title: "Konfirmasi Cepat", desc: "WA dijawab dalam jam buka. Diskusi paket aqiqah & hajatan langsung sama Pak Irfan." },
    { icon: "💯", title: "Harga Jujur", desc: "Harga net, gak ada biaya tersembunyi. Konfirmasi harga update sesuai harga pasar." },
  ],
  // Cara Pesan — 3 langkah
  cara: [
    { step: 1, icon: "📱", title: "Pilih Produk", desc: "Klik tombol +Tambah pada produk yang lo butuh, atau langsung WA kalau mau pesan custom." },
    { step: 2, icon: "💬", title: "Konfirmasi via WhatsApp", desc: "Klik 'Kirim Pesanan via WhatsApp'. Kami balas konfirmasi harga, ketersediaan & ongkir." },
    { step: 3, icon: "🚚", title: "Antar / Diambil", desc: "Pesanan diantar ke alamat lo (area Banyumas–Purwokerto), atau diambil di Pliken." },
  ],
  // Kategori produk
  kategori: [
    { id: "daging", label: "Daging Segar / Frozen" },
    { id: "sate", label: "Sate & Olahan Siap Bakar" },
    { id: "kekah", label: "Paket Aqiqah / Kekah" },
  ],
  produk: {
    daging: [
      {
        id: "kambing-1kg",
        name: "Daging Kambing Segar — 1 kg",
        price: 145000,
        desc: "Daging kambing pilihan, baru dipotong hari itu. Bisa request bagian (paha, iga, has dalam).",
        tag: "Best Seller",
      },
      {
        id: "kambing-5kg",
        name: "Daging Kambing Segar — 5 kg",
        price: 700000,
        desc: "Hemat untuk acara/pengajian. Free packing, bisa request potong sesuai kebutuhan.",
        tag: "Hemat",
      },
      {
        id: "sapi-1kg",
        name: "Daging Sapi Segar — 1 kg",
        price: 135000,
        desc: "Sapi lokal pilihan. Bisa request bagian (sandung lamur, has, semur, rendang).",
        tag: null,
      },
      {
        id: "sapi-5kg",
        name: "Daging Sapi Segar — 5 kg",
        price: 650000,
        desc: "Untuk hajatan / stok freezer keluarga.",
        tag: null,
      },
      {
        id: "tulang-iga",
        name: "Tulang Iga Sapi — 1 kg",
        price: 95000,
        desc: "Cocok untuk sup iga, sop konro, atau iga bakar.",
        tag: null,
      },
      {
        id: "jeroan-paket",
        name: "Paket Jeroan Kambing",
        price: 85000,
        desc: "Hati, babat, paru, jantung. Cocok untuk gulai jeroan / tongseng.",
        tag: null,
      },
    ],
    sate: [
      {
        id: "sate-kambing-5",
        name: "Sate Kambing Siap Bakar — 5 Tusuk",
        price: 30000,
        desc: "Porsi mini, cocok buat coba dulu atau makan sendiri.",
        tag: "Porsi Mini",
      },
      {
        id: "sate-kambing-10",
        name: "Sate Kambing Siap Bakar — 10 Tusuk",
        price: 55000,
        desc: "Daging kambing pilihan, sudah dibumbui rempah, tinggal dibakar.",
        tag: "Best Seller",
      },
      {
        id: "sate-kambing-25",
        name: "Sate Kambing Siap Bakar — 25 Tusuk",
        price: 130000,
        desc: "Hemat untuk keluarga. Sudah dibumbui, tinggal dibakar.",
        tag: "Hemat",
      },
      {
        id: "sate-kambing-bumbu-25",
        name: "Sate Kambing Bumbu Komplit — 25 Tusuk",
        price: 150000,
        desc: "25 tusuk + bumbu kacang & kecap siap saji. Tinggal bakar dan sajikan.",
        tag: "Bumbu Komplit",
      },
      {
        id: "sate-kambing-50",
        name: "Sate Kambing Siap Bakar — 50 Tusuk",
        price: 250000,
        desc: "Cocok untuk acara kecil / arisan. Termasuk bumbu kacang & kecap.",
        tag: "Acara",
      },
      {
        id: "sate-kambing-100",
        name: "Sate Kambing Siap Bakar — 100 Tusuk",
        price: 480000,
        desc: "Paket besar untuk hajatan / pengajian. Free pengantaran area Banyumas–Purwokerto.",
        tag: "Hajatan",
      },
      {
        id: "sate-buntel-kambing",
        name: "Sate Buntel Kambing — 5 Buntel",
        price: 75000,
        desc: "Daging kambing cincang dibungkus lemak, dibumbui rempah khas Jawa Tengah. Tinggal dibakar.",
        tag: "Khas Jateng",
      },
      {
        id: "gulai-kambing-1kg",
        name: "Gulai Kambing Siap Saji — 1 kg",
        price: 130000,
        desc: "Gulai kambing siap saji, kuah santan rempah khas.",
        tag: null,
      },
      {
        id: "tongseng-kambing-1kg",
        name: "Tongseng Kambing Siap Saji — 1 kg",
        price: 125000,
        desc: "Tongseng kambing pedas-manis, daging empuk.",
        tag: null,
      },
    ],
    kekah: [
      {
        id: "kekah-perempuan",
        name: "Paket Aqiqah Bayi Perempuan",
        price: 2400000,
        desc: "1 ekor kambing pilihan (± 18-22 kg). Termasuk pemotongan sesuai syariat, masakan (sate/gulai/tongseng), dan 50 nasi box.",
        tag: null,
      },
      {
        id: "kekah-laki-standar",
        name: "Paket Aqiqah Bayi Laki-laki (Standar)",
        price: 4700000,
        desc: "2 ekor kambing pilihan. Termasuk pemotongan, masakan, 100 nasi box, dan risalah aqiqah.",
        tag: "Best Seller",
      },
      {
        id: "kekah-laki-premium",
        name: "Paket Aqiqah Bayi Laki-laki (Premium)",
        price: 6200000,
        desc: "2 ekor kambing premium + nasi box premium 100 pax + buah & kue + dokumentasi foto.",
        tag: "Premium",
      },
    ],
  },
  testimonials: [
    {
      name: "Bu Tebok, Purwokerto",
      text: "Aqiqah anak kedua pakai paket Standar, daging empuk, masakannya enak, on time. Recommended!",
    },
    {
      name: "Pak Suduri, Sokaraja",
      text: "Pesan sate 50 tusuk untuk arisan, semua suka. Bumbunya khas rumahan.",
    },
    {
      name: "Mbak Sunya, Kembaran",
      text: "Daging kambing & sapinya segar, nggak prengus. Pesan rutin tiap minggu.",
    },
  ],
  faq: [
    {
      q: "Apakah kambing dipotong sesuai syariat?",
      a: "Iya. Kambing dipotong oleh petugas yang sudah berpengalaman dan kami sediakan video/foto pemotongan sebagai bukti jika diminta.",
    },
    {
      q: "Berapa lama sebelum hari H saya harus pesan?",
      a: "Untuk paket aqiqah/kekah, idealnya minimal H-3. Untuk daging segar dan sate siap bakar, H-1 sudah cukup (selama stok masih ada).",
    },
    {
      q: "Area pengiriman ke mana saja?",
      a: "Banyumas, Purwokerto, dan sekitarnya. Untuk luar area bisa kirim dengan biaya tambahan — hubungi WhatsApp untuk konfirmasi.",
    },
    {
      q: "Pembayaran bagaimana?",
      a: "DP minimal 50% via transfer bank. Pelunasan bisa saat pengiriman atau sebelum hari H.",
    },
    {
      q: "Bisa pesan hari ini langsung kirim?",
      a: "Untuk daging segar dan sate siap bakar bisa, asal stok masih ada. Hubungi WhatsApp dulu untuk konfirmasi sebelum pesan mendadak.",
    },
  ],
};
