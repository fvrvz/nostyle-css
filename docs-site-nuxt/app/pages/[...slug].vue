<script setup lang="ts">
/**
 * [...slug].vue — Dynamic doc page renderer.
 *
 * Renders markdown via ContentRenderer, plus:
 * - UiPreview cards from frontmatter `previews` array
 * - Full install guide with CodeTabs on the Installation page
 */
definePageMeta({ layout: "default" });

const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useHead({ title: page.value?.title });

const previews = computed(() => page.value?.previews || []);
const isInstallPage = computed(() => page.value?.title === "Installation");

/* ── Install page data ── */
const pkgManagerTabs = [
  { label: "npm", code: "npm install nostyle-css" },
  { label: "pnpm", code: "pnpm add nostyle-css" },
  { label: "yarn", code: "yarn add nostyle-css" },
  { label: "bun", code: "bun add nostyle-css" },
];

const cdnTabs = [
  {
    label: "index.html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/nostyle-css/dist/nostyle.css"
  />
  <title>My App</title>
</head>
<body>
  <button class="btn btn-primary">Hello NoStyle</button>
</body>
</html>`,
  },
];

const viteSetupTabs = [
  {
    label: "main.ts",
    code: `// main.ts
import "nostyle-css";

// or import selectively:
// import "nostyle-css/base";
// import "nostyle-css/utilities";
// import "nostyle-css/components";`,
  },
  {
    label: "App.vue",
    code: `<template>
  <div class="container py-8">
    <h1 class="text-2xl font-bold mb-4">My App</h1>
    <button class="btn btn-primary">Get Started</button>
  </div>
</template>`,
  },
];

const nuxtSetupTabs = [
  {
    label: "nuxt.config.ts",
    code: `// nuxt.config.ts
export default defineNuxtConfig({
  css: ["nostyle-css"],
});`,
  },
  {
    label: "app.vue",
    code: `<template>
  <div class="container py-8">
    <h1 class="text-2xl font-bold mb-4">My Nuxt App</h1>
    <button class="btn btn-primary">Get Started</button>
  </div>
</template>`,
  },
];

const nextSetupTabs = [
  {
    label: "layout.tsx",
    code: `// app/layout.tsx
import "nostyle-css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,
  },
  {
    label: "page.tsx",
    code: `// app/page.tsx
export default function Home() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">My Next App</h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
}`,
  },
];

const postcssTab = [
  {
    label: "postcss.config.js",
    code: `// postcss.config.js
module.exports = require("nostyle-css/postcss");`,
  },
];

const selectiveImportTabs = [
  {
    label: "main.ts",
    code: `// Full import (everything)
import "nostyle-css";

// Or import selectively:
import "nostyle-css/base";       // reset + CSS variables
import "nostyle-css/utilities";  // utility classes
import "nostyle-css/components"; // btn, card, badge, input, etc.`,
  },
  {
    label: "treeshake.ts",
    code: `// For production — PurgeCSS-optimised build
import "nostyle-css/css/treeshake";`,
  },
];

const purgecssTab = [
  {
    label: "postcss.config.js",
    code: `// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.{html,vue,jsx,tsx}"],
      safelist: ["btn", "card", "badge", /^btn-/, /^text-/],
    }),
  ],
};`,
  },
];
</script>

<template>
  <article v-if="page" class="docs-article prose">
    <ContentRenderer :value="page" />

    <!-- ── Installation guide sections ── -->
    <template v-if="isInstallPage">
      <h2>Package Manager</h2>
      <p>Install via your preferred package manager:</p>
      <CodeTabs :tabs="pkgManagerTabs" />

      <h2>CDN (No Build Step)</h2>
      <p>Drop a single <code>&lt;link&gt;</code> tag into your HTML:</p>
      <CodeTabs :tabs="cdnTabs" />

      <h2>Vite / Vue</h2>
      <p>Import in your entry file and start using classes:</p>
      <CodeTabs :tabs="viteSetupTabs" />

      <h2>Nuxt</h2>
      <p>Register as a global CSS source in your Nuxt config:</p>
      <CodeTabs :tabs="nuxtSetupTabs" />

      <h2>Next.js</h2>
      <p>Import in your root layout:</p>
      <CodeTabs :tabs="nextSetupTabs" />

      <h2>Imports</h2>
      <p>Import everything at once, or pick only what you need:</p>
      <CodeTabs :tabs="selectiveImportTabs" />

      <h2>PostCSS Integration</h2>
      <p>Use NoStyle's PostCSS config for full control:</p>
      <CodeTabs :tabs="postcssTab" />

      <h2>PurgeCSS (Tree-shaking)</h2>
      <p>Strip unused classes in production for minimal CSS:</p>
      <CodeTabs :tabs="purgecssTab" />
    </template>

    <!-- ── Previews from frontmatter ── -->
    <template v-if="previews.length">
      <h2>Examples</h2>
      <UiPreview
        v-for="p in previews"
        :key="p.title"
        :title="p.title"
        :code="p.code"
      />
    </template>
  </article>
</template>
