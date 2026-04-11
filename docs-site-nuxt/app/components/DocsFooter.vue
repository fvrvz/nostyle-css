<script setup lang="ts">
import { Heart } from "@lucide/vue";
</script>

<template>
  <footer class="docs-footer mt-8 py-6">
    <div
      class="flex items-center justify-between gap-4 text-xs text-muted sm:flex-col"
    >
      <div class="inline-flex items-center gap-2">
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
      <div class="inline-flex items-center gap-1">
        <span>Made with</span>
        <Heart :size="12" :stroke-width="2.5" style="color: #ec4899" />
        <span>by Faraaz Khan</span>
      </div>
    </div>
  </footer>
</template>
