<script setup lang="ts">
import { VaSwitch } from 'vuestic-ui';
import { ref } from 'vue';

const value = ref(true)
</script>

<template>
    <div>
        <VaSwitch v-model="value" color="#5123a1" off-color="#ffd300"
            style="--va-switch-checker-background-color: #252723">
            <template #innerLabel>
                <div class="va-text-center">
                    <VaIcon :name="value ? 'dark_mode' : 'light_mode'" />
                </div>
            </template>
        </VaSwitch>
    </div>
</template>