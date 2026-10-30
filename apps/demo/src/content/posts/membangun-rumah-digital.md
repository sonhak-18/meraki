---
title: "Membangun Rumah Digital: Di Balik Blog Meraki"
description: "Catatan teknis singkat tentang bagaimana web ini dirancang: Astro, Cloudflare Pages, tipografi warm paper, dan CMS GUI."
pubDatetime: 2026-10-27T14:30:00Z
featured: true
tags: ["project", "teknis"]
---

Saat pertama kali merencanakan blog ini, ada dua syarat utama yang kami sepakati:
1. Desainnya harus tenang, estetik, dan nyaman dibaca berlama-lama (tidak ada iklan berkedip, tidak ada popup pop-up yang mengganggu).
2. Pengisian kontennya harus mudah, bisa ditulis lewat antarmuka grafis (GUI) tanpa harus selalu membuka terminal atau text editor.

## Tumpukan Teknologi (Tech Stack)

Berikut adalah fondasi yang kami gunakan:

- **Astro (Astro Sage)**: Framework web yang sangat ringan dan menghasilkan output HTML statis murni. Kecepatan muat halaman sangat instan karena tidak mengirim JavaScript berlebih ke browser.
- **Tipografi Editorial**: Menggunakan kombinasi font serif bernuansa kertas (*warm paper palette*) yang dirancang khusus untuk kenyamanan membaca tulisan panjang.
- **Cloudflare Pages**: Tempat rumah digital ini menetap. Setiap kali ada cerita atau foto baru yang disimpan, Cloudflare secara otomatis memperbarui situs ini ke seluruh jaringan edge global mereka.
- **Keystatic & CMS Admin**: Antarmuka visual yang memungkinkan kami menulis draft dan mempublikasikan tulisan layaknya menggunakan aplikasi catatan modern.

```bash
# Perintah untuk menjalankan ruang kerja ini secara lokal
pnpm dev
```

Bagi kami, membangun web ini adalah bentuk lain dari merawat hubungan kami: merancang rumah bersama, memilih warna cat dindingnya, dan memastikan pintunya selalu terbuka hangat bagi siapa pun yang bertamu.
