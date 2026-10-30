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
        tags: fields.array(fields.text({ label: "Tag / Kategori" }), {
          label: "Tag (misal: cinta, personal, project, foto)",
          itemLabel: props => props.value || "Tag",
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
