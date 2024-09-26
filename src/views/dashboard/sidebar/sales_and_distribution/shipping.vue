<template>
    <!-- Attendance -->
    <VaCollapse body-color="#00000022">
        <template #header="{ value: isCollapsed }">
            <VaSidebarItem :active="activeItem === 'shipping'" @click="setActive('shipping')">
                <VaSidebarItemContent>
                    <VaIcon name="mail" />
                    <VaSidebarItemTitle>Shipping</VaSidebarItemTitle>
                    <VaSpacer />
                    <VaIcon :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
                </VaSidebarItemContent>
            </VaSidebarItem>
        </template>

        <template #body>
            <VaSidebarItem :active="activeItem === 'edit-shipping'" @click="setActive('edit-shipping')">
                <VaSidebarItemContent>
                    <VaIcon name="edit" />
                    <VaSidebarItemTitle>Edit Shipping</VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>

            <VaSidebarItem :active="activeItem === 'drafts'" @click="setActive('drafts')">
                <VaSidebarItemContent>
                    <VaIcon name="drafts" />
                    <VaSidebarItemTitle>Drafts</VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
        </template>
    </VaCollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeItem = ref<string | null>(null);

const setActive = (item: string) => {
    activeItem.value = item;
};
</script>
