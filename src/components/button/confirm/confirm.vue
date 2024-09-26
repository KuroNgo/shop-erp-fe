<template>
    <VaButton @click="onButtonClick">
        {{ props.value }}
    </VaButton>
</template>

<script setup lang="ts">
import { useModal } from 'vuestic-ui'

interface Prop {
    value: string,
    content: string,
}

const props = defineProps<Prop>()
const { confirm } = useModal();

const onButtonClick = () => {
    confirm({
        title: 'Confirmation',
        message: props.content,
    })
}
</script>