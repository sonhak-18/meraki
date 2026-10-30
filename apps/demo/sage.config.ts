import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: "https://meraki-blog.pages.dev/",
    title: "Meraki",
    description:
      "Arsip kisah cinta kita berdua, catatan hidup, karya, dan potret momen berharga.",
    author: "Kita",
    profile: "https://meraki-blog.pages.dev/about",
    ogImage: "default-og.jpg",
    lang: "id",
    timezone: "Asia/Jakarta",
    dir: "ltr",
  },
  home: {
    title: "Meraki (Μεράκι)",
    intro:
      "Ruang hangat untuk merawat kisah cinta kita berdua, catatan perjalanan hidup, hal-hal yang sedang kita bangun, dan potret memori yang tak ingin kita lupakan.",
  },
  comments: {
    provider: false,
  },
  posts: { perPage: 8, perIndex: 6, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: false,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [],
});
