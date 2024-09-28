<template>
    <VaDivider orientation="left" color="#fff">
        <span class="px-2" :style="{ fontSize: props.fontSize }">{{ value }}</span>
    </VaDivider>
</template>

<script setup lang="ts">
interface Prop {
    value: string,
    fontSize: string,
}

const props = defineProps<Prop>() 
</script>