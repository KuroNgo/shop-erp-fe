<template>
    <div>
        <VaCheckbox v-model="value" class="mb-6" :style="checkboxStyle" /> <span class="custom-label">{{ props.label
            }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Prop {
    label: string,
}

const props = defineProps<Prop>()
const value = ref('')

const checkboxStyle = {
    border: '1px solid black',
    color: 'black',
}
</script>

<style scoped>
.custom-label {
    position: relative;
    top: -5px;
}
</style>
