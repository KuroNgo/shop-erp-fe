<template>
    <Pie :data="data" :options="options" />
</template>

<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../pie/index'

ChartJS.register(ArcElement, Tooltip, Legend)

// Dữ liệu biểu đồ và tùy chọn lấy từ chartConfig
const data = chartConfig.data
const options = chartConfig.options
</script>