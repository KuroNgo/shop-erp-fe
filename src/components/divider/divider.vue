<template>
    <VaDivider orientation="left" color="#fff">
        <span class="px-2">{{ value }}</span>
    </VaDivider>
</template>

<script setup lang="ts">
interface Prop {
    value: string,
}

const props = defineProps<Prop>() 
</script>