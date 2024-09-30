<template>
    <div class="w-full h-full bg-neutral-50">
        <el-container class="h-full w-full">
            <el-aside width="300px" class="bg-white shadow-lg scroll-hide">
                <el-row :span="12">
                    <el-divider content-position="left">OVERVIEW</el-divider>
                    <el-menu default-active="1" class="ml-3 w-full" @open="handleOpen" @close="handleClose">
                        <el-menu-item index="1" @click="activeView = 'dashboard'">
                            <el-icon>
                                <OfficeBuilding />
                            </el-icon>
                            <span>Dashboard</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="activeView = 'user-settings'">
                            <el-icon>
                                <User />
                            </el-icon>
                            <span>User settings</span>
                        </el-menu-item>
                        <el-divider content-position="left" class="-translate-x-4">DEPARTMENTS</el-divider>
                        <el-sub-menu index="3" class="">
                            <template #title>
                                <el-icon>
                                    <Notebook />
                                </el-icon>
                                <span>Account</span>
                            </template>
                            <el-menu-item-group>
                                <template #title><span>Employee</span></template>
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-sub-menu index="4" class="">
                            <template #title>
                                <el-icon>
                                    <Connection />
                                </el-icon>
                                <span>Human Resource</span>
                            </template>
                            <el-menu-item-group>
                                <template #title><span>Employee</span></template>
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-sub-menu index="5" class="">
                            <template #title>
                                <el-icon>
                                    <Service />
                                </el-icon>
                                <span>Sale and Distribution</span>
                            </template>
                            <el-menu-item-group>
                                <template #title><span>Employee</span></template>
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-sub-menu index="6" class="">
                            <template #title>
                                <el-icon>
                                    <House />
                                </el-icon>
                                <span>Warehouse</span>
                            </template>
                            <el-menu-item-group>
                                <template #title><span>Employee</span></template>
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-divider content-position="left" class="-translate-x-4">APPROVAL</el-divider>
                        <el-menu-item index="7" @click="activeView = 'chat'">
                            <el-icon>
                                <Message />
                            </el-icon>
                            <span>Chat</span>
                        </el-menu-item>
                        <el-menu-item index="8" @click="activeView = 'todo'">
                            <el-icon><Select /></el-icon>
                            <span>To Do</span>
                        </el-menu-item>
                        <el-divider content-position="left" class="-translate-x-4">SETTINGS</el-divider>
                        <el-menu-item index="9" @click="activeView = 'settings'">
                            <el-icon>
                                <Setting />
                            </el-icon>
                            <span>Settings</span>
                        </el-menu-item>
                    </el-menu>
                </el-row>
            </el-aside>
            <el-container>
                <el-header class="bg-white m-4 rounded-md shadow-lg ">
                    <el-menu ellipsis-icon mode="horizontal" :popper-offset="16"
                        class="items-center  flex justify-between">
                        <div>
                            <el-input v-model="input" style="width: 270px; height: 40px;" placeholder="Type something"
                                :prefix-icon="Search" />
                        </div>

                        <div>
                            <p class="font-bold text-2xl">LOGO</p>
                        </div>

                        <div class="flex">
                            <el-tooltip class="box-item" effect="light" content="help" placement="bottom-start">
                                <el-button :icon="QuestionFilled" circle class="ml-5" />
                            </el-tooltip>

                            <el-badge is-dot class="ml-5">
                                <el-tooltip class="box-item" effect="light" content="notification"
                                    placement="bottom-start">
                                    <el-button :icon="Notification" circle />
                                </el-tooltip>
                            </el-badge>

                            <el-badge is-dot>
                                <el-tooltip class="box-item" effect="light" content="chat" placement="bottom-start">
                                    <el-button :icon="ChatDotRound" circle class="ml-5" />
                                </el-tooltip>
                            </el-badge>

                            <el-tooltip class="box-item" effect="light" content="refresh" placement="bottom-start">
                                <el-button :icon="Refresh" circle class="ml-5" />
                            </el-tooltip>
                            <el-avatar :size="35"
                                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                                class="ml-5" />
                            <div class="ml-2">
                                <p class="text-slate-400">Ngô Hoài Phong</p>
                                <p class="font-bold text-sm">Admin</p>
                            </div>
                        </div>
                    </el-menu>
                </el-header>
                <el-main class="h-full scroll-hide">
                    <div class="flex">
                        <p class="mb-5 font-bold text-xl items-center">Dashboard</p>
                        <!-- <p class="items-center text-sm translate-y-1">/edit</p> -->
                    </div>
                    <dashboard v-if="activeView === 'dashboard'" />
                    <chat v-if="activeView === 'chat'" />
                    <todo v-if="activeView === 'todo'" />
                    <settings v-if="activeView === 'settings'" />
                    <usersettings v-if="activeView === 'user-settings'" />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import chat from './sidebar/chatview.vue';
import dashboard from './sidebar/dashboardview.vue'
import todo from './sidebar/todo.vue';
import settings from './sidebar/settings.vue';
import usersettings from './sidebar/usersettings.vue';
import { QuestionFilled, Notification, ChatDotRound, Refresh, Search } from '@element-plus/icons-vue'

const activeView = ref('dashboard')

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const input = ref('')
</script>

<style scoped>
.scroll-hide {
    -ms-overflow-style: none;
    overflow: auto;
}

.scroll-hide::-webkit-scrollbar {
    display: none;
}
</style>