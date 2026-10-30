import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineSageCollections } from "astro-sage/content";
import config from "../sage.config";

const sageCollections = defineSageCollections({
  author: config.site.author,
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    location: z.string().default("Suatu Tempat"),
    image: z.string().optional(),
    caption: z.string().optional(),
    aspect: z.string().default("aspect-4/3"),
  }),
});

export const collections = {
  ...sageCollections,
  gallery,
};
