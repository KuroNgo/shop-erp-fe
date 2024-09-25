<template>
    <!-- Attendance -->
    <VaCollapse body-color="#00000022">
        <template #header="{ value: isCollapsed }">
            <VaSidebarItem>
                <VaSidebarItemContent>
                    <VaIcon name="mail" />
                    <VaSidebarItemTitle>Product Category</VaSidebarItemTitle>
                    <VaSpacer />
                    <VaIcon :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
                </VaSidebarItemContent>
            </VaSidebarItem>
        </template>

        <template #body>
            <VaSidebarItem>
                <VaSidebarItemContent>
                    <VaIcon name="edit" />
                    <VaSidebarItemTitle>Edit Attendance</VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>

            <VaSidebarItem>
                <VaSidebarItemContent>
                    <VaIcon name="drafts" />
                    <VaSidebarItemTitle>Drafts</VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
        </template>
    </VaCollapse>
</template>