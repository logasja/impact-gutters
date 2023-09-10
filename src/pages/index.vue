<script setup>
import { onMounted } from 'vue';
import { initTheme } from '@/composables/theme.js';
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';

onMounted(() => {
  initTheme();
});
</script>

<template>
  <NavBar />
  <Hero title="impact gutters" heroimg="https://images.unsplash.com/photo-1518736346281-76873166a64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-neutral-100;
}
</style>
