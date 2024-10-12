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

    <div class="w-full justify-center flex bg-white p-10">
        <el-tabs type="card" class="background-custom">
            <el-tab-pane label="Analytics">
                Hello
                <!-- Phân tích quy trình tuyển dụng -->
            </el-tab-pane>

            <el-tab-pane label="Candidate List">
                <!-- Nội dung danh sách ứng viên -->
            </el-tab-pane>

            <el-tab-pane label="Process Next Step">
                <!-- Nội dung về các bước tiếp theo trong quy trình -->
                <processnextstep />
            </el-tab-pane>

            <el-tab-pane label="Interview Schedule">
                <!-- Quản lý lịch phỏng vấn -->
            </el-tab-pane>

            <el-tab-pane label="Feedback">
                <!-- Phản hồi về ứng viên -->
            </el-tab-pane>

            <el-tab-pane label="Documents">
                <!-- Quản lý tài liệu ứng viên -->
            </el-tab-pane>
        </el-tabs>
    </div>

    <!-- Edit Candidate-->
    <el-drawer v-model="drEditUser" title="View user" direction="rtl">
        <span class="text-xl">Candidate detail</span>
        <el-divider />
        <span class="font-medium">Name</span>
    </el-drawer>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import processnextstep from './func/processnextstep.vue';

const value2 = ref([])
const input = ref('')
const scrCard = ref<HTMLDivElement | null>(null)
const drEditUser = ref(false)

const handleClear = () => {
    ElMessage.info(`The clear value is ${value2.value}, waiting for loading data...`)
}

// Hàm mở dialog chỉnh sửa người dùng
const openEditUser = () => {
    drEditUser.value = true
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