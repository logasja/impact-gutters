<script setup>
import { onMounted, ref } from 'vue';
import { initTheme } from '@/composables/theme.js';
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import LofiHero from '@/components/LofiHero.vue';

const owner = ref(0)
const business = ref(0)

onMounted(async () => {
  const response = await fetch("/data.json");
  const file = await response.json();
  owner.value = file.about.owner;
  owner.value.description = owner.value.description.join('\n');

  business.value = file.about.business;
  business.value.description = business.value.description.join('\n');
  initTheme();
});
</script>

<template>
  <NavBar />
  <Hero 
    :v-show=business
    v-bind=business
  />
  <LofiHero 
    :v-show=owner
    v-bind=owner
  />
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-neutral-100;
}
</style>
