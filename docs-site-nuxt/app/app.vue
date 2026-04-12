<script setup lang="ts">
import { useAssetPath } from "~/composables/useAssetPath";

const assetPath = useAssetPath();

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | NoStyle CSS` : "NoStyle CSS",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: assetPath("/brand-logo.svg"),
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
    },
  ],
});

// Initialize color mode composable
useColorMode();
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
