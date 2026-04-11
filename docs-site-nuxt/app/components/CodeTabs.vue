<script setup lang="ts">
/**
 * CodeTabs — Tabbed code editor component.
 * Clean card with file-type color dots, Shiki syntax highlighting,
 * and a copy-to-clipboard button.
 */
import { Copy, Check } from "@lucide/vue";
import { highlightCode, detectLang, getFileIcon } from "~/composables/useShiki";

interface Tab {
  label: string;
  code: string;
}

const props = defineProps<{
  tabs: Tab[];
}>();

const activeTab = ref(0);
const highlightedHtml = ref("");
const copied = ref(false);

async function updateHighlight() {
  const tab = props.tabs[activeTab.value];
  if (tab) {
    highlightedHtml.value = await highlightCode(
      tab.code,
      detectLang(tab.label),
    );
  }
}

watch(activeTab, updateHighlight, { immediate: true });

async function copyCode() {
  const tab = props.tabs[activeTab.value];
  if (!tab) return;
  await navigator.clipboard.writeText(tab.code.trim());
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <section class="code-tabs rounded-lg my-4 overflow-hidden border">
    <!-- Tab bar -->
    <div class="code-tabs-header flex items-center justify-between border-b">
      <div class="flex items-center overflow-x-auto">
        <button
          v-for="(tab, i) in tabs"
          :key="tab.label"
          class="code-tab inline-flex items-center gap-2 px-4 py-2 text-xs font-medium"
          :class="{ active: activeTab === i }"
          @click="activeTab = i"
        >
          <span class="code-tab-icon" v-html="getFileIcon(tab.label)" />
          {{ tab.label }}
        </button>
      </div>
      <button
        class="copy-btn inline-flex items-center gap-1 px-3 py-1 mr-2 text-xs rounded"
        :title="copied ? 'Copied!' : 'Copy code'"
        @click="copyCode"
      >
        <Check v-if="copied" :size="13" />
        <Copy v-else :size="13" />
        {{ copied ? "Copied" : "Copy" }}
      </button>
    </div>

    <!-- Code body (Shiki output) -->
    <div class="code-tabs-body" v-html="highlightedHtml" />
  </section>
</template>

<style scoped>
.code-tabs {
  border-color: var(--ns-border);
  background: var(--ns-surface);
}
.code-tabs-header {
  background: var(--ns-surface-alt);
  border-color: var(--ns-border);
}
.code-tab {
  color: var(--ns-muted);
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-family: inherit;
  white-space: nowrap;
  transition: all 0.15s ease;
}
.code-tab:hover {
  color: var(--ns-text);
}
.code-tab.active {
  color: var(--ns-text);
  border-bottom-color: var(--ns-primary);
  background: var(--ns-surface);
}
.code-tab-icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.copy-btn {
  color: var(--ns-muted);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--ns-border);
  font-family: inherit;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.copy-btn:hover {
  color: var(--ns-text);
  background: var(--ns-surface);
}

/* Shiki output styling */
.code-tabs-body :deep(pre) {
  margin: 0;
  padding: 1rem 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  overflow-x: auto;
  border: none;
  border-radius: 0;
  background: var(--ns-surface) !important;
}
.code-tabs-body :deep(code) {
  font-family: var(--ns-font-mono);
  background: transparent !important;
}
.code-tabs-body :deep(.shiki) {
  background: transparent !important;
}
</style>
