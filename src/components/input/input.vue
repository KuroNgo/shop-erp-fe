<template>
    <div>
        <VaInput :type="props.type" v-model="value" class="mb-6 w-[400px]" :placeholder="props.placeholderValue"
            autocomplete="off" style="border: 1px solid #000; padding: 2px;">
            <template #appendInner>
                <VaIcon :name="props.iconName" color="secondary"></VaIcon>
            </template>
        </VaInput>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

interface Prop {
    iconName: string,
    placeholderValue: string,
    type: string,
}

const props = defineProps<Prop>()
const value = ref('')
</script>

<style scoped lang="scss">
input:-webkit-autofill {
    background-color: transparent !important;
    color: inherit !important;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
}

fieldset {
    border: 1px solid #000;
}
</style>