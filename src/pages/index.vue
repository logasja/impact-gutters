<script setup>
import { onMounted } from 'vue';
import { initTheme } from '@/composables/theme.js';
import navCompVue from '@/components/nav-comp.vue';

onMounted(() => {
  initTheme();
});
</script>

<template>
  <navCompVue />
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-neutral-100;
}
</style>
