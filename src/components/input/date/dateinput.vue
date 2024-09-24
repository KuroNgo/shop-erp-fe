<template>
    <VaDateInput v-model="value" label="clearable" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
</script>

<style setup lang="ts">
</style>