const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

const shouldPurge = process.env.NOSTYLE_PURGE === "1";

const plugins = [postcssImport(), autoprefixer()];

if (shouldPurge) {
  plugins.push(
    purgecss({
      content: [
        "./**/*.{html,js,jsx,ts,tsx,vue,md}",
        "../docs-site-nuxt/**/*.{html,js,jsx,ts,tsx,vue,md}"
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      safelist: {
        standard: [/^btn/, /^card$/, /^badge/, /^badge-/, /^md:/]
      }
    }),
    cssnano({ preset: "default" })
  );
}

module.exports = { plugins };
