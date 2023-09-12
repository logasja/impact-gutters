<template>
    <section>
        <div>
            <h2>{{ name }}</h2>
            <p> {{ description }}</p>
        </div>
        <div>
            <img :src="heroimg"/>
        </div>
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