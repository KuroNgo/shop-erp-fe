<template>
    <!-- Employee -->
    <VaCollapse body-color="#00000022">
        <template #header="{ value: isCollapsed }">
            <VaSidebarItem>
                <VaSidebarItemContent>
                    <VaIcon name="mail" />
                    <VaSidebarItemTitle>Employee</VaSidebarItemTitle>
                    <VaSpacer />
                    <VaIcon :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
                </VaSidebarItemContent>
            </VaSidebarItem>
        </template>
        <template #body>
            <VaSidebarItem>
                <VaSidebarItemContent>
                    <VaIcon name="send" />
                    <VaSidebarItemTitle>Edit Employee</VaSidebarItemTitle>
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