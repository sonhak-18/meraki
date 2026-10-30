# Meraki (Μεράκι)

> *"Melakukan sesuatu dengan segenap jiwa, cinta, dan kreativitas: menitipkan sebagian kecil dari diri kita pada apa pun yang kita sentuh dan bangun."*

Meraki adalah sudut kecil di belantara internet tempat kami pulang dan berteduh. Sebuah ruang hening untuk merawat kisah cinta yang tumbuh perlahan, catatan refleksi harian, karya serta eksplorasi kode yang kami bangun, dan potret-potret visual yang enggan kami biarkan pudar ditelan waktu.

Situs ini dirajut di atas Astro dengan fondasi tema editorial AstroSage, diatur agar menghasilkan lembaran statis murni yang ringan dibaca dan siap menetap di Cloudflare Pages.

---

## Ruang Cerita

Di sini, setiap tulisan dan potret menemukan tempat singgahnya masing-masing:

1. **Kisah Kita & Cinta** (`tags: ["cinta"]`): Rekaman perjalanan dua hati yang belajar saling memahami. Tentang tawa di sore hari, percakapan panjang kala malam tiba, dan janji sederhana untuk terus melangkah berdampingan.
2. **Catatan Pribadi** (`tags: ["personal"]`): Lembar refleksi diri, pemikiran yang mengalir tanpa tergesa, serta catatan hidup yang kami tulis dengan jujur.
3. **Karya & Proyek** (`tags: ["project"]`): Dokumentasi dari apa yang kami ciptakan: baris kode, eksplorasi desain, dan rasa ingin tahu yang diwujudkan menjadi karya nyata.
4. **Galeri & Potret** (`/gallery`): Tangkapan rana kamera dari sudut-sudut kota yang pernah kami lewati, senja yang kami pandangi bersama, dan detik-detik berharga yang kami abadikan.

---

## Fondasi dan Sentuhan Visual

- **Arsitektur**: Astro 7 dengan output statis murni tanpa beban server.
- **Tipografi & Rasa Kertas**: Tipografi Newsreader Serif yang teduh (lengkap dengan aksen Yunani `Μεράκι`), JetBrains Mono untuk label, dan palet warna kertas hangat (*warm paper*) yang nyaman di mata.
- **Keintiman & Aksesibilitas**: Memenuhi standar kontras WCAG AAA, navigasi keyboard yang mulus, dan tata letak yang nyaman disimak lewat layar ponsel maupun laptop.
- **Pencarian Teks**: Pagefind untuk pencarian statis lokal yang cepat dalam Bahasa Indonesia.
- **Antarmuka Pengisian (GUI)**:
  - **Keystatic**: Dashboard visual lokal di rute `/keystatic` saat menulis di laptop.
  - **Sveltia CMS**: Antarmuka ringan berbasis web di rute `/admin` untuk menulis langsung dari peramban ponsel atau gawai mana pun melalui GitHub.
- **Pelabuhan Deploy**: Cloudflare Pages / Cloudflare Workers Static Assets.

---

## Menyalakan Rumah Ini di Komputer Lokal

### 1. Prasyarat
- Node.js versi 22.12 atau yang lebih baru
- `pnpm` (disarankan versi 10 ke atas)

Bila belum memasang `pnpm`, jalankan perintah berikut:
```bash
npm install -g --allow-scripts=pnpm pnpm
```

### 2. Unduh Repositori dan Pasang Kebutuhan
```bash
git clone https://github.com/sonhak-18/meraki.git
cd meraki
pnpm install
```

### 3. Jalankan Ruang Kerja
```bash
pnpm dev
```
Setelah berjalan:
- Kunjungi beranda web: `http://localhost:4321`
- Kunjungi meja tulis Keystatic: `http://localhost:4321/keystatic`

---

## Panduan Mengisi Cerita Lewat Antarmuka Visual

Kamu tidak perlu menyunting berkas Markdown secara manual. Dua meja tulis visual sudah disiapkan:

### Pilihan 1: Menulis Melalui Keystatic (Lokal di Laptop)
1. Jalankan `pnpm dev` pada terminal.
2. Buka tautan `http://localhost:4321/keystatic` di peramban.
3. Pilih menu **Tulisan & Kisah**.
4. Klik tombol **Create Entry**, lalu lengkapi judul, ringkasan, tanggal, tag (misalnya `cinta`, `personal`, atau `project`), serta isi cerita pada editor visual yang tersedia.
5. Simpan tulisan. Berkas cerita akan otomatis tercipta di dalam folder `apps/demo/src/content/posts/`.

### Pilihan 2: Menulis Melalui Sveltia CMS (Daring via Ponsel atau Peramban Mana Pun)
1. Setelah blog ini diterbitkan ke Cloudflare Pages, buka alamat:
   `https://domain-kamu.pages.dev/admin`
2. Masuk menggunakan akun GitHub milikmu.
3. Tulis cerita baru atau sisipkan foto kenangan langsung dari ponsel.
4. Begitu kamu menekan **Publish**, Sveltia CMS akan mengirimkan komit ke cabang `main` di GitHub, lalu Cloudflare Pages akan membangun ulang situs secara otomatis.

---

## Panduan Menerbitkan ke Cloudflare Pages

Langkah termudah dan paling stabil adalah menghubungkan repositori GitHub ke Cloudflare Pages:

1. Simpan dan kirim seluruh berkas ke GitHub:
   ```bash
   git add .
   git commit -m "feat: merajut ruang blog Meraki"
   git push origin main
   ```
2. Kunjungi dashboard Cloudflare di `dash.cloudflare.com`.
3. Masuk ke bagian **Workers & Pages** -> **Create application** -> Tab **Pages** -> **Connect to Git**.
4. Tautkan repositori **`sonhak-18/meraki`**.
5. Atur konfigurasi build sebagai berikut:
   - **Framework preset**: `Astro`
   - **Build command**: `pnpm build`
   - **Build output directory**: `apps/demo/dist`
   - **Root directory**: `/` (biarkan kosong atau tanda garis miring)
6. Tekan **Save and Deploy**. Cloudflare akan merangkai situs dan memberikan alamat web yang langsung dapat diakses siapa saja.

Bila ingin menerbitkan langsung melalui terminal:
```bash
pnpm build
pnpm --filter @astro-sage/demo exec wrangler deploy
```

---

## Peta Berkas dan Ruang

```text
meraki/
├── apps/
│   └── demo/                         # Rumah utama situs
│       ├── DESIGN.md                 # Jiwa desain, palet warna, dan ritme
│       ├── keystatic.config.ts       # Pengaturan meja tulis Keystatic
│       ├── sage.config.ts            # Profil web, judul, dan konfigurasi tema
│       ├── wrangler.jsonc            # Konfigurasi Cloudflare Pages / Workers
│       ├── public/
│       │   └── admin/                # Meja tulis Sveltia CMS daring
│       └── src/
│           ├── content/
│           │   ├── pages/about.md    # Lembar cerita tentang ruang Meraki
│           │   └── posts/            # Kumpulan naskah dan artikel
│           └── pages/
│               └── gallery.astro     # Halaman Galeri & Potret (/gallery)
├── packages/
│   └── astro-sage/                   # Mesin integrasi tema editorial
├── package.json
└── README.md
```

---

## Lisensi
Situs dan karya ini dilindungi di bawah [MIT License](LICENSE).
