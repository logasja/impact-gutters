<template>
    <section class="flex flex-row flex-wrap space-y-2 sm:space-y-0">
        <div class="grid place-items-center w-full sm:w-3/4 sm:pr-4">
            <div>
                <h2>{{ title }}</h2>
                <p> {{ description }}</p>
            </div>
        </div>
        <div class="grid grid-flow-col grid-cols-3 w-full border-2 border-neutral-500 h-56 rounded-lg">
            <img :src="heroimg"/>
            <div class="bg-neutral-500">

            </div>
            <div class="bg-neutral-900">

            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        title: string,
        name: string,
        description: string,
        heroimg: string,
    }>()
</script>

<style>

</style>