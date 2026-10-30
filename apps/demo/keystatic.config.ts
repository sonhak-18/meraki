import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Tulisan & Kisah",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Judul" } }),
        description: fields.text({
          label: "Deskripsi Singkat",
          multiline: true,
        }),
        pubDatetime: fields.date({
          label: "Tanggal Publikasi",
          defaultValue: { kind: "today" },
        }),
        tags: fields.multiselect({
          label: "Tag / Kategori",
          options: [
            { label: "Cinta (Kisah Kita Berdua)", value: "cinta" },
            { label: "Personal (Catatan Hidup)", value: "personal" },
            { label: "Project (Karya & Teknologi)", value: "project" },
            { label: "Foto (Potret & Galeri)", value: "foto" },
            { label: "Refleksi (Renungan)", value: "refleksi" },
          ],
          defaultValue: ["cinta"],
        }),
        featured: fields.checkbox({
          label: "Tampilkan di Beranda (Featured)",
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: "Draft (belum dipublish)",
          defaultValue: false,
        }),
        content: fields.mdx({
          label: "Isi Cerita / Artikel",
        }),
      },
    }),
  },
});
