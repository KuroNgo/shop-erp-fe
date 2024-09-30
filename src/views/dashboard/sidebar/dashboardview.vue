<template>
    <div>
        <div class="flex justify-normal">
            <div class="mr-5">
                <el-card style="width: 400px" shadow="always">
                    <div class="flex items-center">
                        <el-icon size="30" class="border-custom" color="teal">
                            <Postcard />
                        </el-icon>
                        <div class="ml-3">
                            <p class="mb-2 font-bold">Total Sales</p>
                            <p>1106 > 6202 Sale</p>
                        </div>

                    </div>
                </el-card>
                <div class="">
                    <el-card style="width: 400px" shadow="always">
                        <el-col :span="7" class="flex">
                            <el-statistic :value="outputValue" class="font-bold" />
                            <p class="text-sm">%</p>
                        </el-col>
                    </el-card>
                </div>
            </div>
            <div class="mr-5">
                <el-card style="width: 400px" shadow="always">
                    <div class="flex items-center">
                        <el-icon size="30" class="border-custom" color="teal">
                            <Postcard />
                        </el-icon>
                        <div class="ml-3">
                            <p class="mb-2 font-bold">Total Expaneses</p>
                            <p>1106 > 6202 Sale</p>
                        </div>

                    </div>
                </el-card>
                <div class="">
                    <el-card style="width: 400px" shadow="always">
                        <el-col :span="7" class="flex">
                            <el-statistic :value="outputValue2" class="font-bold" />
                            <p class="text-sm">%</p>
                        </el-col>
                    </el-card>
                </div>
            </div>
            <div>
                <el-card style="width: 350px" shadow="always">
                    <div class="flex items-center">
                        <el-icon size="30" class="border-custom" color="teal">
                            <Postcard />
                        </el-icon>
                        <div class="ml-3">
                            <p class="mb-2 font-bold">Total Employees</p>
                            <p>1106 > 6202 Sale</p>
                        </div>

                    </div>
                </el-card>
                <div class="">
                    <el-card style="width: 350px" shadow="always">
                        <el-col :span="7" class="flex">
                            <el-statistic :value="outputValue3" />
                            <p class="text-sm">%</p>
                        </el-col>
                    </el-card>
                </div>
            </div>
        </div>
        <div class="mt-5 flex justify-normal">
            <div class="mr-5 w-full">
                <!-- TODO chart -->
                <el-card style="width: 100%" class="h-[400px]" shadow="always">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-bold text-xl">Chart</p>
                            <p class="text-sm text-neutral-500 mt-2">In thousands</p>
                        </div>
                        <div>
                            <el-select v-model="formInline.region" placeholder="Choose time" clearable>
                                <el-option label="Days" value="Andrew" />
                                <el-option label="Weeks" value="Kuro" />
                                <el-option label="Months" value="Admin" />
                            </el-select>
                        </div>
                        <div>
                            <el-tooltip class="box-item" effect="light" content="column chart" placement="bottom-start">
                                <el-button :icon="DataAnalysis" circle />
                            </el-tooltip>
                            <el-tooltip class="box-item" effect="light" content="pie chart" placement="bottom-start">
                                <el-button :icon="PieChart" circle />
                            </el-tooltip>
                            <el-tooltip class="box-item" effect="light" content="progress bar" placement="bottom-start">
                                <el-button :icon="TrendCharts" circle />
                            </el-tooltip>
                        </div>
                    </div>
                    <el-divider />
                    <div>
                        <chart />
                    </div>
                </el-card>
            </div>
            <div class="w-[70%]">
                <!-- TODO Top Product -->
                <el-card style="width: 100%" class="h-[400px]" shadow="always">
                    <div>
                        <div>
                            <p class="font-bold text-xl">Top Product</p>
                            <p class="text-sm text-neutral-500 mt-2">In Unit</p>
                        </div>
                    </div>
                    <el-divider />
                    <div>

                    </div>
                </el-card>
            </div>
        </div>
        <div class="mt-5 flex ">
            <div class="mr-5 w-full">
                <!-- chart -->
                <el-card style="width: 100%" class="h-[300px]" shadow="always">To Do list</el-card>
            </div>
            <div class="mr-5 w-full">
                <!-- chart -->
                <el-card style="width: 100%" class="h-[300px]" shadow="always">Top Employee</el-card>
            </div>
            <div class="w-full">
                <el-card style="width: 100%" class="h-[300px]" shadow="always">Top Product 2</el-card>
            </div>
        </div>

        <div class="mt-5 ">
            <div class="w-full">
                <!-- chart -->
                <el-card style="width: 100%" class="h-[500px]" shadow="always">Employee Manager</el-card>
            </div>
        </div>

        <div class="mt-5 ">
            <div class="w-full">
                <p>Footer</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PieChart, TrendCharts, DataAnalysis } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import chart from '../../../components/charts/bar/chart.vue'

const formInline = reactive({
    user: '',
    region: '',
    date: '',
})

const source = ref<number>(0)
const outputValue = useTransition(source, {
    duration: 1500,
})
source.value = 85

const source2 = ref<number>(0)
const outputValue2 = useTransition(source2, {
    duration: 1500,
})
source2.value = 45

const source3 = ref<number>(0)
const outputValue3 = useTransition(source3, {
    duration: 1500,
})
source3.value = 26
</script>

<style scoped>
.border-custom {
    border: 1px solid #1b6d4f51;
    padding: 5px;
    border-radius: 10px;

}

.el-select {
    --el-select-width: 220px;
}

span {
    font-size: xx-large;
    font-weight: 700;
}
</style>