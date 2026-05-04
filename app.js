/* eslint-env browser */
/* global window, document, SITE_DATA */

(function () {
  const data = window.SITE_DATA;
  if (!data) return;

  const STORAGE_CART = "dpi.cart";

  // Foto per produk (by id). Pemetaan eksplisit biar tidak tertukar.
  const PRODUCT_IMAGES = {
    // Daging segar / frozen
    "kambing-1kg": "/assets/daging-mentah-1.jpg",
    "kambing-5kg": "/assets/daging-mentah-2.jpg",
    "sapi-1kg": "/assets/daging-mentah-1.jpg",
    "sapi-5kg": "/assets/daging-mentah-2.jpg",
    "tulang-iga": "/assets/iga-mentah.jpg",
    "jeroan-paket": "/assets/jeroan.jpg",
    // Sate & olahan siap bakar
    "sate-kambing-5": "/assets/sate-mentah.jpg",
    "sate-kambing-10": "/assets/sate-mentah.jpg",
    "sate-kambing-25": "/assets/sate-mentah.jpg",
    "sate-kambing-bumbu-25": "/assets/sate-mentah.jpg",
    "sate-kambing-50": "/assets/sate-mentah.jpg",
    "sate-kambing-100": "/assets/sate-mentah.jpg",
    "sate-buntel-kambing": "/assets/sate-mentah.jpg",
    "gulai-kambing-1kg": "/assets/daging-mentah-2.jpg",
    "tongseng-kambing-1kg": "/assets/daging-mentah-1.jpg",
    // Aqiqah / kekah
    "kekah-perempuan": "/assets/kambing-hidup.jpg",
    "kekah-laki-standar": "/assets/kambing-hidup.jpg",
    "kekah-laki-premium": "/assets/kambing-hidup.jpg",
  };

  // Fallback jika produk baru ditambahkan tapi belum ada di mapping
  const FALLBACK_IMAGE = {
    daging: "/assets/daging-mentah-1.jpg",
    sate: "/assets/sate-mentah.jpg",
    kekah: "/assets/kambing-hidup.jpg",
  };

  const state = {
    cart: loadCart(),
    activeKategori: data.kategori[0].id,
  };

  // ---------- Helpers ----------

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_CART) || "{}");
    } catch {
      return {};
    }
  }

  function saveCart() {
    localStorage.setItem(STORAGE_CART, JSON.stringify(state.cart));
  }

  function rupiah(n) {
    return "Rp " + Number(n || 0).toLocaleString("id-ID");
  }

  function findProduct(id) {
    for (const kat of data.kategori) {
      const list = data.produk[kat.id] || [];
      const p = list.find((x) => x.id === id);
      if (p) return { ...p, kategori: kat.id };
    }
    return null;
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") {
        node.addEventListener(k.slice(2).toLowerCase(), v);
      } else if (v !== null && v !== undefined && v !== false) {
        node.setAttribute(k, v === true ? "" : v);
      }
    }
    for (const child of [].concat(children)) {
      if (child === null || child === undefined || child === false) continue;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }

  function toast(msg, ms = 1800) {
    const t = el("div", { class: "toast" }, msg);
    document.getElementById("toast-host").appendChild(t);
    setTimeout(() => t.remove(), ms);
  }

  function buildWaUrl(text) {
    const phone = (data.contact.whatsapp || "").replace(/\D/g, "");
    const t = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${t}`;
  }

  // ---------- Rendering ----------

  function renderHero() {
    document.getElementById("heroHeadline").textContent = data.hero.headline;
    document.getElementById("heroSub").textContent = data.hero.sub;

    const badgesEl = document.getElementById("heroBadges");
    badgesEl.innerHTML = "";
    for (const b of data.hero.badges || []) {
      badgesEl.appendChild(
        el("span", {
          class: "bg-white/15 ring-1 ring-white/30 backdrop-blur px-3 py-1 rounded-full text-xs font-medium",
        }, b)
      );
    }

    const heroWaText = `Halo *${data.brand.name}*, saya tertarik dengan produk Anda. Boleh info lebih lanjut?`;
    document.getElementById("heroWaBtn").href = buildWaUrl(heroWaText);
    document.getElementById("topWaBtn").href = buildWaUrl(heroWaText);
    document.getElementById("topWaPhone").textContent = data.contact.whatsappDisplay || "";

    const tanyaHargaBtn = document.getElementById("tanyaHargaBtn");
    if (tanyaHargaBtn) {
      tanyaHargaBtn.href = buildWaUrl(
        `Halo *${data.brand.name}*, saya mau tanya harga update hari ini untuk:\n- ...\n\nMohon infonya, terima kasih 🙏`
      );
    }

    // Floating WA + mobile bar
    const fab = document.getElementById("waFab");
    if (fab) fab.href = buildWaUrl(heroWaText);
    const mbWa = document.getElementById("mbWa");
    if (mbWa) mbWa.href = buildWaUrl(heroWaText);
  }

  function renderPromo() {
    const bar = document.getElementById("promoBar");
    if (!bar) return;
    const promo = data.promo || {};
    if (!promo.enabled || !promo.text) return;
    document.getElementById("promoText").textContent = promo.text;
    const cta = document.getElementById("promoCta");
    cta.textContent = promo.cta || "Tanya Sekarang →";
    cta.href = buildWaUrl(
      `Halo *${data.brand.name}*, saya tertarik dengan ${promo.text}. Boleh info lebih lanjut?`
    );
    bar.classList.remove("hidden");
  }

  function renderStats() {
    const grid = document.getElementById("statsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    for (const s of data.stats || []) {
      grid.appendChild(
        el("div", { class: "stat-card" }, [
          el("div", { class: "stat-num text-base sm:text-lg md:text-xl" }, s.number),
          el("div", { class: "stat-lab" }, s.label),
        ])
      );
    }
  }

  function renderUsps() {
    const grid = document.getElementById("uspGrid");
    if (!grid) return;
    grid.innerHTML = "";
    for (const u of data.usps || []) {
      grid.appendChild(
        el("div", { class: "usp-card flex items-start gap-4" }, [
          el("div", { class: "usp-icon" }, u.icon),
          el("div", {}, [
            el("h3", { class: "font-display font-bold text-gray-900 leading-tight" }, u.title),
            el("p", { class: "mt-1 text-sm text-gray-600 leading-snug" }, u.desc),
          ]),
        ])
      );
    }
  }

  function renderCaraPesan() {
    const grid = document.getElementById("caraGrid");
    if (!grid) return;
    grid.innerHTML = "";
    for (const c of data.cara || []) {
      grid.appendChild(
        el("div", { class: "step-card" }, [
          el("div", { class: "step-num" }, String(c.step)),
          el("div", { class: "text-3xl mb-2" }, c.icon),
          el("h3", { class: "font-display font-bold text-lg text-gray-900" }, c.title),
          el("p", { class: "mt-1 text-sm text-gray-600 leading-relaxed" }, c.desc),
        ])
      );
    }
  }

  function renderKategoriTabs() {
    const wrap = document.getElementById("kategoriTabs");
    wrap.innerHTML = "";
    for (const kat of data.kategori) {
      const isActive = state.activeKategori === kat.id;
      const btn = el(
        "button",
        {
          class: `px-4 py-2 rounded-full text-sm font-semibold transition border ${
            isActive
              ? "bg-brand-700 text-white border-brand-700"
              : "bg-white text-gray-700 border-gray-200 hover:border-brand-300"
          }`,
          onclick: () => {
            state.activeKategori = kat.id;
            renderKategoriTabs();
            renderProductGrid();
          },
        },
        kat.label
      );
      wrap.appendChild(btn);
    }
  }

  function renderProductGrid() {
    const grid = document.getElementById("produkGrid");
    grid.innerHTML = "";
    const list = data.produk[state.activeKategori] || [];

    list.forEach((p) => {
      const img = PRODUCT_IMAGES[p.id] || FALLBACK_IMAGE[state.activeKategori] || "";
      const qty = state.cart[p.id] || 0;
      const tagClass = p.tag && /best/i.test(p.tag)
        ? "absolute top-3 left-3 badge badge-amber"
        : "absolute top-3 left-3 badge";
      const card = el("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col" }, [
        el("div", { class: "relative" }, [
          el("img", { class: "product-img w-full", src: img, alt: p.name, loading: "lazy" }),
          p.tag ? el("span", { class: tagClass }, p.tag) : null,
          el("span", { class: "absolute top-3 right-3 badge-halal" }, "✓ HALAL"),
        ]),
        el("div", { class: "p-4 flex-1 flex flex-col" }, [
          el("h3", { class: "font-display font-bold text-gray-900 leading-tight" }, p.name),
          el("p", { class: "text-sm text-gray-600 mt-1.5 flex-1" }, p.desc),
          el("div", { class: "mt-3 flex items-center justify-between" }, [
            el("div", { class: "text-brand-800 font-display font-bold text-lg" }, [
              rupiah(p.price),
              el("span", { class: "text-xs text-gray-400 align-top ml-0.5", title: "Harga dapat berubah mengikuti harga pasar" }, "*"),
            ]),
            qty > 0
              ? el("div", { class: "flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1" }, [
                  el("button", {
                    class: "w-7 h-7 rounded-full bg-white border border-gray-200 font-bold text-gray-700",
                    onclick: () => updateQty(p.id, -1),
                    "aria-label": "Kurangi",
                  }, "−"),
                  el("span", { class: "min-w-[1.5rem] text-center font-semibold" }, String(qty)),
                  el("button", {
                    class: "w-7 h-7 rounded-full bg-brand-700 text-white font-bold",
                    onclick: () => updateQty(p.id, +1),
                    "aria-label": "Tambah",
                  }, "+"),
                ])
              : el("button", {
                  class: "bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-3 py-1.5 rounded-md",
                  onclick: (ev) => { spawnGoatBurst(ev.currentTarget); updateQty(p.id, +1); },
                }, "+ Tambah"),
          ]),
        ]),
      ]);
      grid.appendChild(card);
    });
  }

  // Spawn 1-3 🐐 emoji yang melayang naik dari posisi tombol, untuk efek tambah-cart yang fun.
  function spawnGoatBurst(targetEl) {
    if (!targetEl || !targetEl.getBoundingClientRect) return;
    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top;
    const emojis = ["🐐", "🐐", "✨"];
    emojis.forEach((em, i) => {
      const node = document.createElement("span");
      node.className = "goat-burst";
      node.textContent = em;
      node.style.left = cx + "px";
      node.style.top = cy + "px";
      // Drift kiri/kanan biar gak numpuk
      const drift = (i - 1) * 18 + (Math.random() * 10 - 5);
      node.style.setProperty("--gx", drift + "px");
      node.style.animationDelay = (i * 0.08) + "s";
      document.body.appendChild(node);
      setTimeout(() => node.remove(), 1200);
    });
  }

  function updateQty(id, delta) {
    const current = state.cart[id] || 0;
    const next = Math.max(0, current + delta);
    if (next === 0) delete state.cart[id];
    else state.cart[id] = next;
    saveCart();
    renderProductGrid();
    renderCart();
  }

  function renderCart() {
    const list = document.getElementById("cartList");
    list.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    const ids = Object.keys(state.cart);
    if (ids.length === 0) {
      list.appendChild(el("div", { class: "py-3 text-sm text-gray-500 italic" }, "Keranjang kosong. Pilih produk di atas."));
    } else {
      for (const id of ids) {
        const p = findProduct(id);
        if (!p) continue;
        const qty = state.cart[id];
        const sub = qty * p.price;
        total += sub;
        itemCount += qty;
        list.appendChild(
          el("div", { class: "py-2.5 flex items-center gap-3" }, [
            el("div", { class: "flex-1 min-w-0" }, [
              el("div", { class: "font-medium text-gray-900 truncate" }, p.name),
              el("div", { class: "text-xs text-gray-500" }, `${rupiah(p.price)} × ${qty}`),
            ]),
            el("div", { class: "flex items-center gap-2 bg-gray-100 rounded-full px-1.5 py-0.5" }, [
              el("button", {
                class: "w-6 h-6 rounded-full bg-white border border-gray-200 font-bold text-gray-700 text-sm",
                onclick: () => updateQty(id, -1),
              }, "−"),
              el("span", { class: "min-w-[1rem] text-center text-sm font-semibold" }, String(qty)),
              el("button", {
                class: "w-6 h-6 rounded-full bg-brand-700 text-white font-bold text-sm",
                onclick: () => updateQty(id, +1),
              }, "+"),
            ]),
            el("div", { class: "w-24 text-right font-semibold text-gray-900 text-sm" }, rupiah(sub)),
          ])
        );
      }
    }

    document.getElementById("cartTotal").textContent = rupiah(total);

    const fab = document.getElementById("cartFab");
    const mbBadge = document.getElementById("mbCartBadge");
    if (itemCount > 0) {
      fab.classList.remove("hidden");
      document.getElementById("cartFabCount").textContent = String(itemCount);
      document.getElementById("cartFabTotal").textContent = rupiah(total);
      if (mbBadge) {
        mbBadge.textContent = String(itemCount);
        mbBadge.classList.remove("hidden");
      }
    } else {
      fab.classList.add("hidden");
      if (mbBadge) mbBadge.classList.add("hidden");
    }
  }

  function renderTesti() {
    const wrap = document.getElementById("testiGrid");
    wrap.innerHTML = "";
    for (const t of data.testimonials || []) {
      wrap.appendChild(
        el("div", { class: "bg-white rounded-xl border border-gray-100 shadow-sm p-5" }, [
          el("div", { class: "text-yellow-500 mb-1" }, "★★★★★"),
          el("p", { class: "text-gray-700" }, `"${t.text}"`),
          el("div", { class: "mt-3 text-sm font-semibold text-gray-900" }, t.name),
        ])
      );
    }
  }

  function renderFaq() {
    const wrap = document.getElementById("faqList");
    wrap.innerHTML = "";
    for (const f of data.faq || []) {
      const det = el("details", { class: "bg-white rounded-lg border border-gray-200" }, [
        el("summary", { class: "flex items-center justify-between gap-3 px-4 py-3 font-medium text-gray-900" }, [
          el("span", {}, f.q),
          el("span", { class: "chevron text-brand-700" }, "▾"),
        ]),
        el("div", { class: "px-4 pb-4 text-gray-700 text-sm" }, f.a),
      ]);
      wrap.appendChild(det);
    }
  }

  function renderLokasi() {
    document.getElementById("alamatLine").textContent = data.brand.address;
    document.getElementById("jamBuka").textContent = data.brand.operationalHours;
    document.getElementById("areaKirim").textContent = data.brand.deliveryArea;
    const wa = document.getElementById("footWa");
    wa.href = buildWaUrl(`Halo ${data.brand.name}, saya ingin bertanya.`);
    wa.textContent = data.contact.whatsappDisplay || "";
    const igEl = document.getElementById("footIg");
    igEl.textContent = data.brand.instagram || "-";
    if (data.brand.instagramUrl) igEl.href = data.brand.instagramUrl;

    const fbEl = document.getElementById("footFb");
    if (fbEl) {
      fbEl.textContent = data.brand.facebook || "-";
      if (data.brand.facebookUrl) fbEl.href = data.brand.facebookUrl;
    }

    const bigIg = document.getElementById("bigIgBtn");
    if (bigIg && data.brand.instagramUrl) bigIg.href = data.brand.instagramUrl;
    const bigFb = document.getElementById("bigFbBtn");
    if (bigFb && data.brand.facebookUrl) bigFb.href = data.brand.facebookUrl;

    document.getElementById("bigWaBtn").href = buildWaUrl(`Halo ${data.brand.name}, saya ingin bertanya.`);

    // Maps embed: pakai koordinat presisi kalau ada, fallback ke query alamat.
    let mapsSrc;
    if (typeof data.brand.mapsLat === "number" && typeof data.brand.mapsLng === "number") {
      mapsSrc = `https://www.google.com/maps?q=${data.brand.mapsLat},${data.brand.mapsLng}&z=18&output=embed`;
    } else {
      const q = encodeURIComponent(data.brand.mapsQuery || data.brand.address);
      mapsSrc = `https://www.google.com/maps?q=${q}&output=embed`;
    }
    document.getElementById("mapsFrame").src = mapsSrc;

    const mapsLinkEl = document.getElementById("mapsLink");
    if (mapsLinkEl) {
      const href = data.brand.mapsLink
        || (typeof data.brand.mapsLat === "number"
          ? `https://www.google.com/maps/search/?api=1&query=${data.brand.mapsLat},${data.brand.mapsLng}`
          : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.brand.mapsQuery || data.brand.address)}`);
      mapsLinkEl.href = href;
    }
  }

  function renderTentang() {
    // Section "Tentang Pak Irfan" disisipkan otomatis sebelum #lokasi (kalau ada foto)
    if (document.getElementById("tentangSection")) return;
    const lokasi = document.getElementById("lokasi");
    if (!lokasi) return;
    const tentang = el("section", { id: "tentangSection", class: "max-w-6xl mx-auto px-4 py-12 sm:py-16" }, [
      el("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center" }, [
        el("div", { class: "order-2 md:order-1" }, [
          el("h2", { class: "font-display text-2xl sm:text-3xl font-bold text-gray-900" }, "Tentang Pak Irfan"),
          el("p", { class: "mt-3 text-gray-700 leading-relaxed" },
            "Saya, Pak Irfan, asli warga Desa Pliken, Kecamatan Kembaran, Kabupaten Banyumas. Sudah bertahun-tahun melayani kebutuhan daging segar, sate siap bakar, dan paket aqiqah/kekah untuk warga Banyumas, Purwokerto, dan sekitarnya."
          ),
          el("p", { class: "mt-3 text-gray-700 leading-relaxed" },
            "Komitmen saya: 100% halal, daging pilihan, harga jujur. Insya Allah amanah, on time, dan bumbu khas rumahan yang sudah dipercaya banyak pelanggan."
          ),
          el("a", {
            href: buildWaUrl(`Halo Pak Irfan, saya ingin bertanya tentang produk.`),
            target: "_blank",
            rel: "noopener",
            class: "mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg",
          }, [
            (function(){
              const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              s.setAttribute("class", "icon");
              const u = document.createElementNS("http://www.w3.org/2000/svg", "use");
              u.setAttribute("href", "#i-wa");
              s.appendChild(u);
              return s;
            })(),
            "Hubungi Pak Irfan",
          ]),
        ]),
        el("div", { class: "order-1 md:order-2" }, [
          el("img", {
            src: "/assets/pak-irfan.jpg",
            alt: "Pak Irfan",
            class: "w-full max-w-sm mx-auto rounded-2xl shadow-lg border-4 border-white",
            loading: "lazy",
          }),
          el("div", { class: "text-center text-sm text-gray-500 mt-3" }, "Pak Irfan, pemilik Daging Pak Irfan — Pliken, Kembaran"),
        ]),
      ]),
    ]);
    lokasi.parentNode.insertBefore(tentang, lokasi);
  }

  function renderFooter() {
    document.getElementById("year").textContent = String(new Date().getFullYear());
    document.getElementById("footName").textContent = data.brand.fullName || data.brand.name;
    document.title = `${data.brand.fullName || data.brand.name} | Banyumas`;
  }

  // ---------- Order form ----------

  function buildOrderText(form) {
    const ids = Object.keys(state.cart);
    const lines = [];
    lines.push(`*PESANAN BARU — ${data.brand.fullName || data.brand.name}*`);
    lines.push("");
    lines.push("👤 Data pemesan:");
    lines.push(`Nama   : ${form.name || "-"}`);
    lines.push(`HP/WA  : ${form.phone || "-"}`);
    lines.push(`Alamat : ${form.address || "-"}`);
    if (form.date) lines.push(`Tanggal: ${form.date}${form.time ? " " + form.time : ""}`);
    lines.push("");
    lines.push("🛒 Pesanan:");
    if (ids.length === 0) {
      lines.push("(belum ada item — saya ingin tanya dulu)");
    } else {
      let total = 0;
      ids.forEach((id, i) => {
        const p = findProduct(id);
        if (!p) return;
        const qty = state.cart[id];
        const sub = qty * p.price;
        total += sub;
        lines.push(`${i + 1}. ${p.name}`);
        lines.push(`   ${rupiah(p.price)} × ${qty} = ${rupiah(sub)}`);
      });
      lines.push("");
      lines.push(`TOTAL (estimasi*): ${rupiah(total)}`);
      lines.push("*) harga & ongkir dikonfirmasi ulang sesuai harga pasar.");
    }
    if (form.notes) {
      lines.push("");
      lines.push("📝 Catatan:");
      lines.push(form.notes);
    }
    lines.push("");
    lines.push("Mohon konfirmasi harga, ketersediaan & ongkir ya. Terima kasih 🙏");
    return lines.join("\n");
  }

  function bindForm() {
    const form = document.getElementById("orderForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const obj = Object.fromEntries(fd.entries());
      if (!obj.name || !obj.phone || !obj.address) {
        toast("Lengkapi nama, HP, dan alamat dulu");
        return;
      }
      const text = buildOrderText(obj);
      const url = buildWaUrl(text);
      // Buka di tab baru — di HP ini akan langsung ke aplikasi WhatsApp
      window.open(url, "_blank");
      toast("Membuka WhatsApp...");
    });
  }

  // ---------- Init ----------

  renderHero();
  renderPromo();
  renderStats();
  renderUsps();
  renderCaraPesan();
  renderKategoriTabs();
  renderProductGrid();
  renderCart();
  renderTesti();
  renderFaq();
  renderLokasi();
  renderTentang();
  renderFooter();
  bindForm();
})();
