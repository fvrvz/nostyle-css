import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@nuxt/content",
      {
        build: {
          markdown: {
            highlight: {
              theme: {
                default: "github-light",
                dark: "github-dark",
              },
              // langs: [
              //   "html",
              //   "css",
              //   "scss",
              //   "javascript",
              //   "typescript",
              //   "bash",
              //   "json",
              //   "vue",
              // ],
            },
          },
        },
      },
    ],
  ],
  ssr: false,
  css: ["@fayso/nostyle-css/css", "~/assets/main.css"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "github-pages",
  },
});
