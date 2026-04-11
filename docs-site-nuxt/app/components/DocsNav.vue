<script setup lang="ts">
import {
  AppWindow,
  BookOpenText,
  CircleDashed,
  Droplets,
  Fence,
  FormInput,
  Paintbrush,
  Ruler,
  Type,
} from "@lucide/vue";

defineProps<{
  mobile?: boolean;
}>();

const emit = defineEmits<{
  navigate: [];
}>();

const sections = [
  {
    title: "Getting Started",
    links: [
      { title: "Installation", to: "/docs/installation", icon: BookOpenText },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Buttons", to: "/docs/buttons", icon: AppWindow },
      { title: "Forms", to: "/docs/forms", icon: FormInput },
    ],
  },
  {
    title: "Utilities",
    links: [
      { title: "Typography", to: "/docs/typography", icon: Type },
      { title: "Spacing", to: "/docs/spacing", icon: Ruler },
      { title: "Colors", to: "/docs/colors", icon: Droplets },
      { title: "Borders", to: "/docs/borders", icon: Fence },
      { title: "Border Radius", to: "/docs/border-radius", icon: CircleDashed },
    ],
  },
  {
    title: "Customization",
    links: [{ title: "Theming", to: "/docs/theming", icon: Paintbrush }],
  },
];
</script>

<template>
  <nav :class="['docs-sidebar', { 'docs-sidebar--mobile': mobile }]">
    <div v-for="section in sections" :key="section.title" class="mb-6">
      <p
        class="text-xs font-semibold text-muted uppercase tracking-wide mb-2 px-3"
      >
        {{ section.title }}
      </p>
      <div class="flex flex-col gap-1">
        <NuxtLink
          v-for="link in section.links"
          :key="link.to"
          :to="link.to"
          class="docs-nav-link px-3 py-2 rounded text-sm transition inline-flex items-center gap-2"
          active-class="docs-nav-link-active"
          @click="emit('navigate')"
        >
          <component :is="link.icon" :size="15" :stroke-width="2.1" />
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.docs-sidebar {
  padding: 1rem 0;
}
.docs-sidebar--mobile {
  padding: 1rem;
}
</style>
