<script setup lang="ts">
/**
 * UiPreview — Live HTML preview + code toggle.
 * Shows rendered HTML by default; "Code" tab shows Shiki-highlighted source.
 * Used by [...slug].vue to render frontmatter `previews` array.
 */
import { Eye, Code, Copy, Check } from "@lucide/vue";
import { highlightCode } from "~/composables/useShiki";

const props = defineProps<{
  title: string;
  code: string;
}>();

const showCode = ref(false);
const highlightedHtml = ref("");
const copied = ref(false);

onMounted(async () => {
  highlightedHtml.value = await highlightCode(props.code, "html");
});

async function copyCode() {
  await navigator.clipboard.writeText(props.code.trim());
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <section class="ui-preview rounded-lg my-6 overflow-hidden border">
    <header
      class="ui-preview-header flex items-center justify-between gap-2 px-4 py-2 border-b"
    >
      <h4 class="m-0 text-sm font-semibold">{{ title }}</h4>
      <div class="flex items-center gap-2">
        <!-- Copy (only when code is visible) -->
        <button
          v-if="showCode"
          class="copy-btn inline-flex items-center gap-1 px-2 py-1 text-xs rounded"
          @click="copyCode"
        >
          <Check v-if="copied" :size="12" />
          <Copy v-else :size="12" />
        </button>
        <!-- Toggle tabs -->
        <div
          class="ui-preview-tabs flex items-center rounded-md overflow-hidden border text-xs"
        >
          <button
            class="ui-preview-tab inline-flex items-center gap-1 px-3 py-1"
            :class="{ active: !showCode }"
            @click="showCode = false"
          >
            <Eye :size="13" /> Preview
          </button>
          <button
            class="ui-preview-tab inline-flex items-center gap-1 px-3 py-1"
            :class="{ active: showCode }"
            @click="showCode = true"
          >
            <Code :size="13" /> Code
          </button>
        </div>
      </div>
    </header>

    <!-- Live preview -->
    <div v-if="!showCode" class="ui-preview-stage p-6" v-html="code" />

    <!-- Shiki-highlighted code -->
    <div v-else class="ui-preview-code" v-html="highlightedHtml" />
  </section>
</template>

<style scoped>
.ui-preview {
  border-color: var(--ns-border);
  background: var(--ns-surface);
}
.ui-preview-header {
  background: var(--ns-surface-alt);
  border-color: var(--ns-border);
}
.ui-preview-tabs {
  background: var(--ns-surface);
  border-color: var(--ns-border);
}
.ui-preview-tab {
  color: var(--ns-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  background: transparent;
  border: none;
  font-family: inherit;
}
.ui-preview-tab:hover {
  color: var(--ns-text);
}
.ui-preview-tab.active {
  color: var(--ns-primary);
  background: var(--ns-surface-alt);
  font-weight: 600;
}
.ui-preview-stage {
  background: var(--ns-bg);
}

.copy-btn {
  color: var(--ns-muted);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--ns-border);
  font-family: inherit;
  transition: all 0.15s ease;
}
.copy-btn:hover {
  color: var(--ns-text);
  background: var(--ns-surface);
}

/* Shiki output styling */
.ui-preview-code :deep(pre) {
  margin: 0;
  padding: 1rem 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  overflow-x: auto;
  border: none;
  border-radius: 0;
  background: var(--ns-surface) !important;
}
.ui-preview-code :deep(code) {
  font-family: var(--ns-font-mono);
  background: transparent !important;
}
.ui-preview-code :deep(.shiki) {
  background: transparent !important;
}
</style>
