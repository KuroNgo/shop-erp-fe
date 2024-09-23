<template>
    <VaButton @click="onButtonClick">
        Show confirm
    </VaButton>
</template>

<script setup lang="ts">
import { useModal } from 'vuestic-ui'
const { confirm } = useModal();
const onButtonClick = () => {
    confirm('Are you sure you want to handle action')
        .then((ok) => ok && alert("Here is pretty toast instead"))
}
</script>