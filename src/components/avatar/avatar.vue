<template>
    <VaAvatar :color="prop.color" :src="prop.data" :icon="prop.icon" :size="prop.size" />
</template>

<script setup lang="ts">
interface Prop {
    data: string,
    icon: string,
    size: string,
    color: string,
}

const prop = defineProps<Prop>()
</script>

<style scoped lang="scss"></style>