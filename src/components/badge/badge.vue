<template>
    <VaBadge overlap>
        <template #text>
            {{ count }}
        </template>
        <VaButton preset="primary">
            <VaIcon :name="props.icon" />
            {{ props.value }}
        </VaButton>
    </VaBadge>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Prop {
    value: string,
    icon: string,
}

const count = ref(0)
const props = defineProps<Prop>()
</script>