<script setup lang="ts">
const headerRef = ref<{ mobileNavOpen: Ref<boolean> } | null>(null);
const mobileNavOpen = computed(() => headerRef.value?.mobileNavOpen ?? false);

function closeMobileNav() {
  if (headerRef.value) {
    headerRef.value.mobileNavOpen = false;
  }
}
</script>

<template>
  <div class="docs-shell min-h-screen flex flex-col">
    <SiteHeader ref="headerRef" />

    <div class="docs-body container flex-1 flex gap-0">
      <!-- Desktop sidebar -->
      <aside class="docs-sidebar-desktop">
        <div class="docs-sidebar-scroll">
          <DocsNav />
        </div>
      </aside>

      <!-- Mobile sidebar overlay -->
      <Transition name="slide">
        <div
          v-if="mobileNavOpen"
          class="mobile-overlay fixed z-10"
          @click.self="closeMobileNav"
        >
          <aside
            class="mobile-sidebar bg-surface overflow-y-auto border-b shadow-lg"
          >
            <DocsNav mobile @navigate="closeMobileNav" />
          </aside>
        </div>
      </Transition>

      <!-- Main content -->
      <main class="docs-main flex-1 py-6 px-8 md:px-4">
        <slot />
        <DocsFooter />
      </main>
    </div>
  </div>
</template>

<style scoped>
.docs-sidebar-desktop {
  width: 260px;
  flex-shrink: 0;
  border-right: 1px solid var(--ns-border);
}
.docs-sidebar-scroll {
  position: sticky;
  top: 3.5rem; /* header height */
  max-height: calc(100dvh - 3.5rem);
  overflow-y: auto;
  padding: 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
.docs-sidebar-scroll:hover {
  scrollbar-color: var(--ns-border) transparent;
}
.docs-sidebar-scroll::-webkit-scrollbar {
  width: 4px;
}
.docs-sidebar-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.docs-sidebar-scroll::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 4px;
}
.docs-sidebar-scroll:hover::-webkit-scrollbar-thumb {
  background: var(--ns-border);
}
.docs-main {
  min-width: 0;
}
.mobile-overlay {
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 0.3);
  backdrop-filter: blur(2px);
}
.mobile-sidebar {
  width: 280px;
  max-width: 80vw;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 200ms ease;
}
.slide-enter-active .mobile-sidebar,
.slide-leave-active .mobile-sidebar {
  transition: transform 200ms ease;
}
.slide-enter-from {
  opacity: 0;
}
.slide-enter-from .mobile-sidebar {
  transform: translateX(-100%);
}
.slide-leave-to {
  opacity: 0;
}
.slide-leave-to .mobile-sidebar {
  transform: translateX(-100%);
}
@media (max-width: 640px) {
  .docs-sidebar-desktop {
    display: none;
  }
}
@media (min-width: 641px) {
  .mobile-overlay {
    display: none;
  }
}
</style>
