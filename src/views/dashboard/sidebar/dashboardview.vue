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
                    <el-card style="width: 400px" shadow="always" class="font-bold text-3xl">
                        40.3%</el-card>
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
                    <el-card style="width: 400px" shadow="always" class="font-bold text-3xl">
                        40.3%</el-card>
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
                    <el-card style="width: 350px" shadow="always" class="font-bold text-3xl">
                        40.3%</el-card>
                </div>
            </div>
        </div>
        <div class="mt-5 flex justify-normal">
            <div class="mr-5 w-full">
                <!-- chart -->
                <el-card style="width: 100%" class="h-[400px]" shadow="always">Chart</el-card>
            </div>
            <div class="mr-5 w-[200px]">
                <el-card style="width: 220px" class="h-[400px]" shadow="always">Top Product</el-card>
            </div>
        </div>
        <div class="mt-5 flex justify-normal">
            <div class="mr-5 w-[400px]">
                <!-- chart -->
                <el-card style="width: 400px" class="h-[300px]" shadow="always">Chart</el-card>
            </div>
            <div class="mr-5 w-full">
                <!-- chart -->
                <el-card style="width: 100%" class="h-[300px]" shadow="always">Chart</el-card>
            </div>
            <div class="mr-5 w-[300px]">
                <el-card style="width: 320px" class="h-[300px]" shadow="always">Top Product</el-card>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.border-custom {
    border: 1px solid #1b6d4f51;
    padding: 5px;
    border-radius: 10px;

}
</style>