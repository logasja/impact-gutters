<template>
    <section class="space-y-10">
        <div class="h-72 sm:w-full sm:h-96">
            <div class="relative h-full bg-neutral-50">
                <img class="w-full h-full lg:drop-shadow-md lg:rounded-lg object-cover opacity-30 sm:opacity-100" :src="heroimg"/>
                <div class="absolute h-12 m-auto top-0 bottom-0 left-0 right-0 sm:invisible grid place-items-center">
                    <h1 class="">{{ title }}</h1>
                </div>
            </div>
        </div>
        <div class="grid place-items-center">
            <div class="max-w-2xl space-y-5">
                <h2 class="uppercase text-center">
                    {{ tagline }}
                </h2>
                <p class="text-base font-rbno31 font-light text-center">
                    {{ description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        title: string,
        heroimg: string,
        tagline: string,
        description: string,
    }>()
</script>
