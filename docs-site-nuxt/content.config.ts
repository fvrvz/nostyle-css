import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**",
      schema: z.object({
        previews: z
          .array(
            z.object({
              title: z.string(),
              code: z.string(),
            }),
          )
          .optional(),
      }),
    }),
  },
});
