<script setup lang="ts">
/**
 * ProsePre — Code block renderer for @nuxt/content markdown.
 * Uses the same Shiki client-side highlighting as CodeTabs
 * so all code blocks look identical across the site.
 */
import { Copy, Check } from "@lucide/vue";
import { highlightCode, detectLang, getFileIcon } from "~/composables/useShiki";

const props = defineProps<{
  code?: string;
  language?: string;
  filename?: string;
  highlights?: number[];
}>();

const highlightedHtml = ref("");
const copied = ref(false);

const label = computed(() => props.filename || props.language || "");

onMounted(async () => {
  if (props.code) {
    const lang = detectLang(label.value || "text");
    highlightedHtml.value = await highlightCode(props.code, lang);
  }
});

async function copyCode() {
  if (!props.code) return;
  await navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <div class="prose-pre rounded-lg overflow-hidden my-4 border">
    <!-- Header -->
    <div class="prose-pre-header flex items-center justify-between border-b">
      <div class="flex items-center gap-2 px-4 py-2 text-xs">
        <span v-if="label" class="prose-pre-icon" v-html="getFileIcon(label)" />
        <span v-if="label" class="prose-pre-label font-medium">
          {{ filename || language }}
        </span>
      </div>
      <button
        v-if="code"
        class="copy-btn inline-flex items-center gap-1 px-3 py-1 mr-2 text-xs rounded"
        :title="copied ? 'Copied!' : 'Copy code'"
        @click="copyCode"
      >
        <Check v-if="copied" :size="13" />
        <Copy v-else :size="13" />
        {{ copied ? "Copied" : "Copy" }}
      </button>
    </div>

    <!-- Shiki highlighted output (same as CodeTabs) -->
    <div
      v-if="highlightedHtml"
      class="prose-pre-body"
      v-html="highlightedHtml"
    />

    <!-- Fallback: slot from @nuxt/content (before Shiki loads) -->
    <div v-else class="prose-pre-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.prose-pre {
  border-color: var(--ns-border);
  background: var(--ns-surface);
}
.prose-pre-header {
  background: var(--ns-surface-alt);
  border-color: var(--ns-border);
}
.prose-pre-icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
.prose-pre-label {
  color: var(--ns-muted);
  font-family: var(--ns-font-mono);
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
.prose-pre-body :deep(pre) {
  margin: 0;
  border: none;
  border-radius: 0;
  padding: 1rem 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  overflow-x: auto;
  background: var(--ns-surface) !important;
}
.prose-pre-body :deep(code) {
  font-family: var(--ns-font-mono);
  background: transparent !important;
}
.prose-pre-body :deep(.shiki) {
  background: transparent !important;
}
</style>
