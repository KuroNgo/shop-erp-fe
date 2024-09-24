<template>
    <div class="flex items-center">
        <VaButton class="mr-6 mb-2 w-full" hover-behavior="opacity" :hover-opacity="0.4" pressed-behavior="mask"
            :pressed-opacity="1" :pressed-mask-color="props.color" size="large" :color="props.color"
            :backgroundOpacity="props.opacity">
            <i :class="icon"></i> &nbsp;
            {{ name }}
        </VaButton>
    </div>
</template>

<script setup lang="ts">
type Prop = {
    name: string,
    maskColor: string,
    color: string,
    opacity: string,
    icon: string,
}

const props = defineProps<Prop>()
</script>
