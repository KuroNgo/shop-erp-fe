<template>
    <VaIcon :name="props.value" />
</template>

<script setup lang="ts">
interface Prop {
    value: string,
}
const props = defineProps<Prop>()
</script>