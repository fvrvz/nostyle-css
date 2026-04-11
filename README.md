<div align="center">

# NoStyle CSS

**A lightweight, utility-first CSS framework with zero JavaScript.**

Use it like Tailwind — ship it lean. Built for developers who want clean defaults without the bloat.

[![CI](https://github.com/fvrvz/nostyle-css/actions/workflows/ci.yml/badge.svg)](https://github.com/fvrvz/nostyle-css/actions/workflows/ci.yml)
[![Deploy](https://github.com/fvrvz/nostyle-css/actions/workflows/deploy-pages.yml/badge.svg)](https://fvrvz.github.io/nostyle-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Documentation](https://fvrvz.github.io/nostyle-css) · [Report Bug](https://github.com/fvrvz/nostyle-css/issues) · [Request Feature](https://github.com/fvrvz/nostyle-css/issues)

</div>

---

## Features

- **Utility-first** — Tailwind-like class API (`.flex`, `.gap-4`, `.text-lg`, `.rounded-lg`, …)
- **Zero JavaScript** — pure CSS, works everywhere
- **Tree-shakeable** — PurgeCSS integration strips unused classes in production
- **Modular imports** — import only base, utilities, or components
- **CSS variables** — easy theming with `--ns-*` tokens (light + dark mode)
- **Tiny footprint** — full build ~8 KB gzip, treeshaken even smaller
- **PostCSS pipeline** — autoprefixer + cssnano included

## Quick Start

### Install

```bash
npm install nostyle-css
# or
pnpm add nostyle-css
```

### Import

```ts
// Full framework (recommended)
import "nostyle-css";

// Or selective imports
import "nostyle-css/base"; // reset + CSS variables
import "nostyle-css/utilities"; // utility classes
import "nostyle-css/components"; // btn, card, badge, input, etc.
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://fvrvz.github.io/nostyle-css/static/css/nostyle.css"
/>
```

## Usage

```html
<div class="container flex flex-col gap-4 p-6">
  <h1 class="text-2xl font-bold tracking-tight">Hello NoStyle</h1>
  <p class="text-muted text-sm">Lightweight and clean.</p>
  <button class="btn btn-primary">Get Started</button>
</div>
```

## What's Included

| Category       | Classes                                                               |
| -------------- | --------------------------------------------------------------------- |
| **Layout**     | `container`, `flex`, `grid`, `gap-*`, `items-*`, `justify-*`          |
| **Spacing**    | `p-*`, `px-*`, `py-*`, `m-*`, `mt-*`, `mb-*`, `mx-auto`               |
| **Typography** | `text-xs` → `text-4xl`, `font-bold`, `tracking-*`, `uppercase`        |
| **Colors**     | `text-body`, `text-muted`, `text-primary`, `bg-surface`, `bg-primary` |
| **Borders**    | `border`, `rounded`, `rounded-lg`, `shadow`, `shadow-sm`              |
| **Components** | `btn`, `btn-primary`, `card`, `badge`, `input`, `panel`, `prose`      |
| **Responsive** | `md:grid-cols-1`, `md:hidden`                                         |

## Project Structure

```
nostyle-css/
├── nostyle/               # CSS framework package
│   ├── src/               # Source CSS (base, utilities, components)
│   ├── dist/              # Built output
│   └── postcss.config.cjs # PostCSS + PurgeCSS pipeline
├── docs-site-nuxt/        # Documentation site (Nuxt 4 + @nuxt/content)
├── .github/workflows/     # CI/CD (build, deploy, publish)
└── Dockerfile             # Multi-stage Docker build (dev/build/production)
```

## Development

### Prerequisites

- [pnpm](https://pnpm.io/) >= 10

### Setup

```bash
git clone https://github.com/fvrvz/nostyle-css.git
cd nostyle-css
pnpm install
```

### Scripts

```bash
pnpm run build        # Build NoStyle CSS + Nuxt docs
pnpm run dev          # Start Nuxt docs dev server
pnpm run build:css    # Build only the CSS framework
pnpm run preview      # Preview production docs build
pnpm run generate     # Static generate docs for deployment
```

### Docker

```bash
docker build --target build -t nostyle-build .
docker build --target production -t nostyle-prod .
docker run --rm -p 8080:80 nostyle-prod
```

## Tree-shaking

NoStyle uses PostCSS + PurgeCSS to strip unused classes:

```bash
cd nostyle
NOSTYLE_PURGE=1 postcss src/index.css -o dist/nostyle.treeshake.css
```

Or use the built-in script:

```bash
pnpm run build:css
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## Author

**Faraaz Khan** — [@FaraazKhhan](https://github.com/FaraazKhhan)

- LinkedIn: [FaraazKhhan](https://linkedin.com/in/FaraazKhhan)
- Ko-fi: [FaySo](https://ko-fi.com/FaySo)

> Powered by **FaySo** 🚀

## License

[MIT](LICENSE) © Faraaz Khan
