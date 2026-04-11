<script setup lang="ts">
import {
  ArrowRight,
  Code,
  Coffee,
  Feather,
  Heart,
  Palette,
  TreePine,
  Zap
} from "@lucide/vue";

definePageMeta({ layout: false });

useHead({ title: "NoStyle CSS — Lightweight Utility-First CSS Framework" });

const features = [
  {
    icon: Feather,
    title: "Lightweight",
    desc: "Full build ~8 KB gzip. No JavaScript runtime.",
  },
  {
    icon: TreePine,
    title: "Tree-shakeable",
    desc: "PurgeCSS strips unused classes in production.",
  },
  {
    icon: Palette,
    title: "Themeable",
    desc: "CSS variables with built-in dark mode support.",
  },
  {
    icon: Zap,
    title: "Utility-first",
    desc: "Tailwind-like API — flex, gap, text-lg, rounded.",
  },
  {
    icon: Code,
    title: "Modular Imports",
    desc: "Import only base, utilities, or components.",
  },
  {
    icon: ArrowRight,
    title: "PostCSS Pipeline",
    desc: "Autoprefixer + cssnano included out of the box.",
  },
];

const landingCodeTabs = [
  {
    label: "dashboard.html",
    code: `<div class="container p-8 flex flex-col gap-6">

  <!-- Page header -->
  <div class="flex items-center justify-between">
    <h1 class="text-2xl font-bold tracking-tight m-0">Dashboard</h1>
    <span class="text-xs font-semibold text-success uppercase tracking-wide">● Live</span>
  </div>

  <!-- Stats grid -->
  <div class="grid grid-cols-2 gap-4">
    <div class="card p-4 rounded-xl flex flex-col gap-2">
      <p class="text-xs text-muted uppercase tracking-wide m-0">Users</p>
      <p class="text-3xl font-bold text-primary m-0">1,234</p>
    </div>
    <div class="card p-4 rounded-xl flex flex-col gap-2">
      <p class="text-xs text-muted uppercase tracking-wide m-0">Revenue</p>
      <p class="text-3xl font-bold text-success m-0">$8,492</p>
    </div>
  </div>

  <!-- Input + button row -->
  <div class="flex gap-3">
    <input class="input" placeholder="Search..." />
    <button class="btn btn-primary">Search</button>
    <button class="btn btn-secondary">Export</button>
  </div>

</div>`,
  },
];
</script>

<template>
  <div>
    <SiteHeader />

    <!-- Hero -->
    <section class="hero-section py-20 md:p-4">
      <div class="container text-center flex flex-col items-center gap-6">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-alt border text-xs font-semibold text-primary uppercase tracking-wide"
        >
          <Zap :size="13" /> v2.0 — Utility-First
        </div>
        <h1
          class="hero-title text-5xl font-bold tracking-tight md:text-2xl m-0"
        >
          Clean CSS.<br />Zero Bloat.
        </h1>
        <p class="text-lg text-muted max-w-2xl m-0 md:text-center">
          A lightweight, utility-first CSS framework with no JavaScript. Use it
          like Tailwind — ship it lean. Built for developers who want clean
          defaults without the bloat.
        </p>
        <div class="flex items-center gap-3 mt-2 sm:flex-col sm:w-full">
          <NuxtLink
            to="/docs/installation"
            class="btn btn-primary inline-flex items-center gap-2 px-6 py-3 text-base"
          >
            Get Started <ArrowRight :size="16" />
          </NuxtLink>
          <a
            href="https://github.com/fvrvz/nostyle-css"
            target="_blank"
            rel="noreferrer"
            class="btn btn-secondary inline-flex items-center gap-2 px-6 py-3 text-base"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub
          </a>
        </div>

        <!-- Install snippet -->
        <div
          class="install-snippet card rounded-lg px-6 py-3 mt-4 inline-flex items-center gap-3 text-sm"
        >
          <code class="text-primary">npm install @fayso/nostyle-css</code>
        </div>
      </div>
    </section>

    <!-- Features grid -->
    <section class="py-16 md:p-4">
      <div class="container">
        <h2 class="text-2xl font-bold text-center mb-3 tracking-tight">
          Why NoStyle?
        </h2>
        <p class="text-center text-muted mb-12 text-sm">
          Everything you need. Nothing you don't.
        </p>
        <div class="grid grid-cols-3 gap-6 md:grid-cols-1">
          <div
            v-for="f in features"
            :key="f.title"
            class="feature-card card p-6 rounded-xl flex flex-col gap-4"
          >
            <div class="flex items-center gap-3">
              <div class="feature-icon-wrap">
                <component :is="f.icon" :size="22" :stroke-width="1.8" />
              </div>
              <h3 class="text-base font-semibold m-0 tracking-tight">
                {{ f.title }}
              </h3>
            </div>
            <p class="text-sm text-muted m-0 leading-tight">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Code preview -->
    <section class="py-16 bg-surface-alt md:p-4">
      <div class="container max-w-4xl">
        <h2 class="text-2xl font-bold text-center mb-3 tracking-tight">
          Write Familiar Classes
        </h2>
        <p class="text-center text-muted mb-8">
          If you know Tailwind, you already know NoStyle.
        </p>
        <CodeTabs :tabs="landingCodeTabs" />
      </div>
    </section>

    <!-- About the Developer -->
    <section class="py-16 md:p-4">
      <div class="container max-w-4xl">
        <div class="card p-8 rounded-xl flex flex-col gap-4 sm:p-3">
          <div class="flex items-center gap-3">
            <div
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-alt text-primary"
            >
              <Code :size="20" />
            </div>
            <h2 class="m-0 text-xl font-bold">About the Developer</h2>
          </div>
          <p class="text-sm text-muted m-0">
            Hi, I'm <strong>Faraaz Khan</strong> — a frontend engineer who loves
            building clean, accessible tools for the web. NoStyle CSS was born
            from my frustration with bloated frameworks and my desire for
            something lightweight that just works.
          </p>
          <div class="cluster gap-3">
            <a
              href="https://github.com/fvrvz"
              target="_blank"
              rel="noreferrer"
              class="btn btn-secondary inline-flex items-center gap-2 text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/FaraazKhhan"
              target="_blank"
              rel="noreferrer"
              class="btn btn-secondary inline-flex items-center gap-2 text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://ko-fi.com/FaySo"
              target="_blank"
              rel="noreferrer"
              class="btn btn-secondary inline-flex items-center gap-2 text-sm"
            >
              <Coffee :size="16" :stroke-width="2" />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t md:p-4">
      <div class="container">
        <div
          class="flex items-center justify-between gap-4 sm:flex-col sm:text-center"
        >
          <div class="flex items-center gap-3">
            <BrandLogo />
            <span class="text-sm font-bold">NoStyle CSS</span>
          </div>
          <div class="inline-flex items-center gap-2 text-xs text-muted">
            <span>Powered by</span>
            <a
              href="https://github.com/fvrvz"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 transition"
              style="color: #a855f7"
            >
              <img
                src="/fayso-logo.svg"
                alt="FaySo"
                width="72"
                height="24"
                class="inline-block"
                style="display: inline; vertical-align: middle"
              />
            </a>
          </div>
          <div class="inline-flex items-center gap-1 text-xs text-muted">
            Made with <Heart :size="12" style="color: #ec4899" /> by Faraaz Khan
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.hero-section {
  background:
    radial-gradient(
      circle at 20% 20%,
      color-mix(in srgb, var(--ns-primary) 6%, transparent) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      color-mix(in srgb, var(--ns-success) 5%, transparent) 0%,
      transparent 50%
    );
}
.hero-title {
  background: linear-gradient(
    135deg,
    var(--ns-text) 0%,
    var(--ns-primary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.install-snippet code {
  font-family: var(--ns-font-mono);
}

/* Feature cards */
.feature-card {
  position: relative;
  border-top: 2px solid transparent;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
}
.feature-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(
    circle at 50% 0%,
    color-mix(in srgb, var(--ns-primary) 8%, transparent) 0%,
    transparent 70%
  );
  transition: opacity 220ms ease;
  pointer-events: none;
}
.feature-card:hover {
  transform: translateY(-4px);
  border-top-color: var(--ns-primary);
  box-shadow:
    0 8px 24px color-mix(in srgb, var(--ns-primary) 10%, transparent),
    0 2px 8px rgb(0 0 0 / 0.04);
}
.feature-card:hover::before {
  opacity: 1;
}
.feature-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--ns-primary) 12%, var(--ns-surface-alt)),
    color-mix(in srgb, var(--ns-success) 8%, var(--ns-surface-alt))
  );
  color: var(--ns-primary);
  flex-shrink: 0;
}
</style>
