<template>
    <!-- Candidate Information -->
    <div>
        <span class="text-xl font-bold text-cyan-500">Candidate Information</span> <br>
        <span class="text-sm text-slate-400 italic">Details about the applicants participating in the selection
            process</span>
    </div>
    <el-divider />

    <div class="flex justify-between items-center mt-5">
        <el-input v-model="input" style="width: 500px; height: 40px;" placeholder="Type something"
            :prefix-icon="Search" />
        <el-select v-model="value2" :empty-values="[null, undefined]" :value-on-clear="null" clearable
            placeholder="Select" style="width: 240px" @clear="handleClear">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>

    <div class=" mt-5">
        <p class="font-medium">Overall candidate status: 30 </p>
        <p class="mt-2">candidates in process as of March 2022.</p>
    </div>

    <div class="card-container space-x-5 overflow-x-auto mt-4" ref="scrCard">
        <div v-for="(item, index) in 10" :key="index" class="max-w-xs bg-white rounded-lg shadow-lg mr-1 w-[200px] ">
            <el-card style="max-width: 480px">
                <template #header>
                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        style="width: 100%; border-radius: 50px;" />
                </template>
                <div class="">
                    <p class="text-xl font-bold">Ngô Hoài Phong</p>
                    <p class="text-center">Admin</p>
                    <el-button type="primary" class="translate-x-20p mt-3" plain @click="openEditUser">View
                        Details</el-button>
                </div>
            </el-card>
        </div>
    </div>


    <!-- Process Step-->
    <div class="mt-10">
        <span class="text-xl font-bold text-cyan-500">Process Step</span> <br>
        <span class="text-sm text-slate-400 italic">A detailed overview of each step involved in the candidate selection
            process</span>
    </div>
    <el-divider />

    <div class="justify-center flex bg-white p-10">
        <el-tabs type="card" class="w-full">
            <el-tab-pane label="Analytics" lazy>
                <!-- Phân tích quy trình tuyển dụng -->
                <analytics />
            </el-tab-pane>

            <el-tab-pane label="Candidate List" lazy>
                <!-- Nội dung danh sách ứng viên -->
                <candidatelist />
            </el-tab-pane>

            <el-tab-pane label="Process Next Step" lazy>
                <!-- Nội dung về các bước tiếp theo trong quy trình -->
                <processnextstep />
            </el-tab-pane>

            <el-tab-pane label="Interview Schedule" lazy>
                <!-- Quản lý lịch phỏng vấn -->
                <interviewschedules />
            </el-tab-pane>

            <el-tab-pane label="Feedback" lazy>
                <!-- Phản hồi về ứng viên -->
                <feedback />
            </el-tab-pane>

            <el-tab-pane label="Documents" lazy>
                <!-- Quản lý tài liệu ứng viên -->
                <document />
            </el-tab-pane>
            <el-tab-pane label="Blacklist candidate" lazy>
                <!-- Quản lý tài liệu ứng viên -->
                <blacklist />
            </el-tab-pane>
        </el-tabs>
    </div>

    <!-- Edit Candidate-->
    <el-drawer v-model="drEditUser" title="View candidate" direction="rtl">
        <span class="text-xl">Candidate detail</span>
        <el-divider />
        <div class="flex justify-between items-center">
            <p class="font-bold text-base">Name:</p>
            <p>Ngô Hoài Phong</p>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Email:</p>
            <p>hoaiphong01***02@gmail.com</p>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Phone:</p>
            <p>03292***71</p>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Resume:</p>
            <a href="#" class="text-cyan-500" @click="openNotificationSetting">View Resume Detail</a>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Role Hire:</p>
            <p>Backend Developer</p>
        </div>
        <div class="flex justify-between mt-5 ">
            <div>
                <p class="font-bold text-base">Skills:</p>
            </div>
            <div class="text-end">
                <p class="text-base mb-5">English B2</p>
                <p class="text-base mb-5">Problem solving</p>
                <p class="text-base mb-5">Golang</p>
            </div>
        </div>
        <div>
            <div class="flex justify-between mt-5 ">
                <div>
                    <p class="font-bold text-base">Experiences:</p>
                </div>
                <div class="text-end">
                    <p class="text-base mb-5">FPT Software</p>
                    <p class="text-base mb-5">Simplify Dalat</p>
                    <p class="text-base mb-5">EDN</p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-between mt-5">
                <div>
                    <p class="font-bold text-base">Education:</p>
                </div>
                <div class="text-end">
                    <p class="text-base mb-5">Dalat University</p>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Status:</p>
            <p>On Hold</p>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Created at:</p>
            <p>31/01/2024</p>
        </div>
        <div class="flex justify-between mt-5 items-center">
            <p class="font-bold text-base">Updated at:</p>
            <p>31/01/2024</p>
        </div>
    </el-drawer>

    <!-- Notification Setting-->
    <el-drawer v-model="drNotificationSetting" title="Notification Setting" direction="rtl" size="50%">
        <span class="text-xl">Resume</span>
        <el-divider />
    </el-drawer>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import processnextstep from './func/processnextstep.vue';
import interviewschedules from './func/interviewschedules.vue';
import feedback from './func/feedback.vue';
import document from './func/document.vue';
import candidatelist from './func/candidatelist.vue';
import analytics from './func/analytics.vue';
import blacklist from './func/blacklist.vue';

const value2 = ref([])
const input = ref('')
const scrCard = ref<HTMLDivElement | null>(null)
const drEditUser = ref(false)
const drNotificationSetting = ref(false)

const handleClear = () => {
    ElMessage.info(`The clear value is ${value2.value}, waiting for loading data...`)
}

// Hàm mở dialog chỉnh sửa người dùng
const openEditUser = () => {
    drEditUser.value = true
}

const openNotificationSetting = () => {
    drNotificationSetting.value = true
}

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

</script>

<style scoped>
.card-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
}

.translate-x-custom {
    transform: translateX(40%)
}

.translate-x-20p {
    transform: translateX(20%);
}
</style>