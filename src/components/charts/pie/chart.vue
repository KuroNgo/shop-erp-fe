<template>
    <Pie :data="data" :options="options" class="w-[250px]" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './index'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Pie
    },
    data() {
        return chartConfig
    }
}
</script>