<script setup lang="ts">
import { Search, X } from "@lucide/vue";

const isOpen = ref(false);
const query = ref("");
const results = ref<any[]>([]);
const searchInput = ref<HTMLInputElement | null>(null);

async function search() {
  if (!query.value.trim()) {
    results.value = [];
    return;
  }
  const allDocs = await queryCollection("content").all();
  const q = query.value.toLowerCase();
  results.value = allDocs
    .filter(
      (doc: any) =>
        doc.title?.toLowerCase().includes(q) ||
        doc.description?.toLowerCase().includes(q) ||
        doc.body?.raw?.toLowerCase().includes(q),
    )
    .slice(0, 8);
}

function open() {
  isOpen.value = true;
  query.value = "";
  results.value = [];
  nextTick(() => searchInput.value?.focus());
}

function close() {
  isOpen.value = false;
}

function navigateAndClose(path: string) {
  close();
  navigateTo(path);
}

onMounted(() => {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (isOpen.value) close();
      else open();
    }
    if (e.key === "Escape" && isOpen.value) close();
  });
});

defineExpose({ open });
</script>

<template>
  <Teleport to="body">
    <Transition name="search-fade">
      <div
        v-if="isOpen"
        class="search-overlay fixed inset-0 z-50"
        @click.self="close"
      >
        <div class="search-modal card rounded-xl shadow-lg">
          <div
            class="search-input-wrap flex items-center gap-2 px-4 py-3 border-b"
          >
            <Search :size="18" class="text-muted flex-shrink-0" />
            <input
              ref="searchInput"
              v-model="query"
              type="text"
              placeholder="Search documentation..."
              class="search-input flex-1"
              @input="search"
            />
            <kbd class="search-kbd text-xs text-muted">ESC</kbd>
            <button
              class="search-close"
              @click="close"
              aria-label="Close search"
            >
              <X :size="16" />
            </button>
          </div>
          <div class="search-results overflow-y-auto">
            <div
              v-if="results.length === 0 && query.trim()"
              class="p-6 text-center text-muted text-sm"
            >
              No results for "<strong>{{ query }}</strong
              >"
            </div>
            <div
              v-else-if="results.length === 0 && !query.trim()"
              class="p-6 text-center text-muted text-sm"
            >
              Type to search docs...
            </div>
            <button
              v-for="doc in results"
              :key="doc.path"
              class="search-result flex flex-col gap-1 w-full text-left px-4 py-3 transition"
              @click="navigateAndClose(doc.path)"
            >
              <span class="text-sm font-semibold text-body">{{
                doc.title
              }}</span>
              <span
                v-if="doc.description"
                class="text-xs text-muted truncate"
                >{{ doc.description }}</span
              >
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.search-overlay {
  background: rgb(0 0 0 / 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15vh;
}
.search-modal {
  width: min(560px, calc(100vw - 2rem));
  max-height: 420px;
  display: flex;
  flex-direction: column;
}
.search-input {
  border: none;
  background: transparent;
  font: inherit;
  font-size: 1rem;
  color: var(--ns-text);
  outline: none;
}
.search-input::placeholder {
  color: var(--ns-muted);
}
.search-kbd {
  padding: 0.15rem 0.4rem;
  border: 1px solid var(--ns-border);
  border-radius: var(--ns-radius-sm);
  background: var(--ns-surface-alt);
  font-family: var(--ns-font-mono);
  line-height: 1;
}
.search-close {
  appearance: none;
  border: none;
  background: none;
  color: var(--ns-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: var(--ns-radius-sm);
}
.search-close:hover {
  background: var(--ns-surface-alt);
}
.search-results {
  flex: 1;
  overflow-y: auto;
}
.search-result {
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 1px solid var(--ns-border);
  color: inherit;
  font: inherit;
}
.search-result:hover {
  background: var(--ns-surface-alt);
}
.search-result:last-child {
  border-bottom: none;
}
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 150ms ease;
}
.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}
</style>
