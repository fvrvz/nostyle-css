<script setup lang="ts">
import { Search, ExternalLink, Coffee, Menu, X } from "@lucide/vue";

const route = useRoute();
const searchRef = ref<{ open: () => void } | null>(null);
const mobileNavOpen = ref(false);

const isDocsPage = computed(() => route.path.startsWith("/docs"));

function openSearch() {
  searchRef.value?.open();
}

function toggleMobileNav() {
  mobileNavOpen.value = !mobileNavOpen.value;
}

defineExpose({ mobileNavOpen });
</script>

<template>
  <header class="site-header sticky top-0 z-20 border-b bg-surface">
    <div class="container flex items-center justify-between gap-3 py-3">
      <!-- Left: Logo + Brand -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wide"
      >
        <BrandLogo />
        <span class="sm:hidden">NoStyle CSS</span>
      </NuxtLink>

      <!-- Center: Search trigger -->
      <button
        class="search-trigger flex items-center gap-2 text-sm text-muted rounded px-3 py-2 transition"
        @click="openSearch"
      >
        <Search :size="15" />
        <span class="sm:hidden">Search docs...</span>
        <kbd class="search-trigger-kbd sm:hidden">
          <span>⌘K</span>
        </kbd>
      </button>

      <!-- Right: Actions -->
      <div class="flex items-center gap-2">
        <ThemeToggle />
        <a
          href="https://ko-fi.com/FaySo"
          target="_blank"
          rel="noreferrer"
          class="btn btn-secondary inline-flex items-center gap-1 text-sm sm:hidden"
          aria-label="Support on Ko-fi"
        >
          <Coffee :size="15" :stroke-width="2.2" />
          <span class="md:hidden">Support</span>
        </a>
        <a
          href="https://github.com/fvrvz/nostyle-css"
          target="_blank"
          rel="noreferrer"
          class="btn btn-secondary inline-flex items-center gap-1 text-sm sm:hidden"
          aria-label="GitHub repository"
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
          <ExternalLink :size="12" class="md:hidden" />
        </a>
        <!-- Mobile menu toggle (docs pages only) -->
        <button
          v-if="isDocsPage"
          class="mobile-menu-btn btn btn-secondary inline-flex items-center justify-center"
          aria-label="Toggle navigation"
          @click="toggleMobileNav"
        >
          <X v-if="mobileNavOpen" :size="18" />
          <Menu v-else :size="18" />
        </button>
      </div>
    </div>

    <DocSearch ref="searchRef" />
  </header>
</template>

<style scoped>
.site-header {
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--ns-surface) 85%, transparent);
}
.search-trigger {
  border: 1px solid var(--ns-border);
  background: var(--ns-surface-alt);
  cursor: pointer;
  min-width: 200px;
}
.search-trigger:hover {
  border-color: var(--ns-primary);
}
.search-trigger-kbd {
  margin-left: auto;
  font-size: 0.7rem;
  padding: 0.1rem 0.35rem;
  border: 1px solid var(--ns-border);
  border-radius: var(--ns-radius-sm);
  background: var(--ns-surface);
  font-family: var(--ns-font-mono);
  color: var(--ns-muted);
}
.mobile-menu-btn {
  display: none;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
}
@media (max-width: 900px) {
  .search-trigger {
    min-width: unset;
  }
}
@media (max-width: 640px) {
  .mobile-menu-btn {
    display: inline-flex;
  }
}
</style>
