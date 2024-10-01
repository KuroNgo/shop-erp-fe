<template>
    <div class="w-full h-full bg-neutral-50">
        <el-container class="h-full w-full">
            <el-aside width="300px" class="bg-white shadow-lg scroll-hide" ref="asideBar">
                <el-row :span="12">
                    <el-divider content-position="left">OVERVIEW</el-divider>
                    <el-menu default-active="1" class="ml-3 w-full" @open="handleOpen" @close="handleClose">
                        <el-menu-item index="1" @click="activeView = 'dashboard'">
                            <el-icon>
                                <OfficeBuilding />
                            </el-icon>
                            <span>Dashboard</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="activeView = 'user'">
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
                                <el-menu-item index="3-1">item one</el-menu-item>
                                <el-menu-item index="3-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="3-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="3-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="3-4-1">item one</el-menu-item>
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
                                <el-menu-item index="4-1">item one</el-menu-item>
                                <el-menu-item index="4-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="4-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="4-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="4-4-1">item one</el-menu-item>
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
                                <el-menu-item index="5-1">item one</el-menu-item>
                                <el-menu-item index="5-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="5-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="5-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="5-4-1">item one</el-menu-item>
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
                                <el-menu-item index="6-1">item one</el-menu-item>
                                <el-menu-item index="6-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="6-3">Candidater</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="6-4">
                                <template #title>Candidater</template>
                                <el-menu-item index="6-4-1">item one</el-menu-item>
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
                                :prefix-icon="Search" ref="inpSearch" />
                        </div>

                        <div>
                            <p class="font-bold text-2xl">LOGO</p>
                        </div>

                        <div class="flex">
                            <el-tooltip class="box-item" effect="light" content="help" placement="bottom-start">
                                <el-button :icon="QuestionFilled" circle class="ml-5" @click="open = true" />
                            </el-tooltip>

                            <el-badge is-dot class="ml-5">
                                <el-tooltip class="box-item" effect="light" content="notification"
                                    placement="bottom-start">
                                    <el-button ref="btnNoti" :icon="Notification" circle />
                                </el-tooltip>
                            </el-badge>

                            <el-badge is-dot>
                                <el-tooltip class="box-item" effect="light" content="chat" placement="bottom-start">
                                    <el-button ref="btnChat" :icon="ChatDotRound" circle class="ml-5" />
                                </el-tooltip>
                            </el-badge>

                            <el-tooltip class="box-item" effect="light" content="refresh" placement="bottom-start">
                                <el-button ref="btnRefresh" :icon="Refresh" circle class="ml-5" />
                            </el-tooltip>
                            <el-avatar :size="35"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                class="ml-5" />
                            <div class="ml-2">
                                <p class="text-slate-400">Ngô Hoài Phong</p>
                                <p class="font-bold text-sm">Admin</p>
                            </div>
                        </div>
                    </el-menu>
                </el-header>
                <el-main class="h-full scroll-hide" ref="main">
                    <div class="flex">
                        <p class="mb-5 font-bold text-xl items-center capitalize">{{ activeView }}</p>
                        <!-- <p class="items-center text-sm translate-y-1">/edit</p> -->
                    </div>
                    <dashboard v-if="activeView === 'dashboard'" />
                    <chat v-if="activeView === 'chat'" />
                    <todo v-if="activeView === 'todo'" />
                    <settings v-if="activeView === 'settings'" />
                    <usersettings v-if="activeView === 'user'" />
                </el-main>
            </el-container>
        </el-container>
    </div>

    <el-tour v-model="open">
        <el-tour-step title="Hướng dẫn"
            description="Chào mừng bạn đến với ứng dụng ERP, giải pháp toàn diện cho việc quản lý công ty của bạn!" />
        <el-tour-step title="Hướng dẫn"
            description="Đây là nơi hiển thị thông báo, giúp bạn không bỏ lỡ các thông tin về hệ thống"
            placement="right" :target="btnNoti?.$el" />
        <el-tour-step title="Hướng dẫn"
            description="Đây là nơi hiển thị đoạn chat, có thể tương tác với AI và tương tác với nhân viên hoặc đồng nghiệp của bạn"
            placement="top" :target="btnChat?.$el" />
        <el-tour-step title="Hướng dẫn"
            description="Đây là nơi làm mới dữ liệu, khi có dữ liệu cập nhật, hệ thống sẽ thông báo để thực hiện làm mới"
            placement="top" :target="btnRefresh?.$el" />
        <el-tour-step title="Hướng dẫn"
            description="Đây là nơi tìm kiếm thông tin trong hệ thống theo từ khóa phòng ban" placement="top"
            :target="inpSearch?.$el" />
        <el-tour-step title="Hướng dẫn" description="Đây là nơi hiển thị các chức năng của hệ thống" placement="right"
            :target="asideBar?.$el" />
        <el-tour-step title="Hướng dẫn" description="Đây là nơi hiển thị các chức năng của hệ thống" placement="right"
            :target="main?.$el" />
        <el-tour-step title="Hướng dẫn" description="Chúc bạn một ngày mới làm việc vui vẻ" />
    </el-tour>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import chat from '../dashboard/sidebar/chatview.vue';
import dashboard from '../dashboard/sidebar/dashboardview.vue'
import todo from '../dashboard/sidebar/todo.vue';
import settings from '../dashboard/sidebar/settings.vue';
import usersettings from '../dashboard/sidebar/usersettings.vue';
import { QuestionFilled, Notification, ChatDotRound, Refresh, Search } from '@element-plus/icons-vue'
import type { ButtonInstance, InputInstance, AsideInstance, MainInstance } from 'element-plus'


const btnNoti = ref<ButtonInstance>()
const btnChat = ref<ButtonInstance>()
const btnRefresh = ref<ButtonInstance>()
const inpSearch = ref<InputInstance>()
const asideBar = ref<AsideInstance>()
const main = ref<MainInstance>()

const open = ref(false)
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