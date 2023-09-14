<template>
    <section class="flex flex-row flex-wrap space-y-2 sm:space-y-0">
        <div class="grid place-items-center w-full sm:w-1/2 sm:pr-4">
            <div>
                <h2>{{ name }}</h2>
                <p> {{ description }}</p>
            </div>
        </div>
        <img class="object-cover sm:rounded-lg w-full sm:w-1/2 sm:h-96 h-44" :src="heroimg"/>
    </section>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        name: string,
        description: string,
        heroimg: string,
    }>()
</script>

<style>

</style>