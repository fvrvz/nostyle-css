<script setup lang="ts">
import { Sparkles } from "@lucide/vue";
import { useAssetPath } from "~/composables/useAssetPath";

const assetPath = useAssetPath();
</script>

<template>
  <div class="brand-logo-wrap relative w-8 h-8">
    <img
      :src="assetPath('/brand-logo.svg')"
      alt="NoStyle CSS"
      class="brand-logo-art"
    />
    <span class="brand-logo-sparkle">
      <Sparkles :size="14" :stroke-width="2.25" />
    </span>
  </div>
</template>
