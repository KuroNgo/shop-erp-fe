<template>
  <Line :data="data" :options="options" class="h-[250px]" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { data, options } from '../line/index' // Import lại data và options

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
      data, // Dữ liệu biểu đồ
      options, // Cấu hình biểu đồ bao gồm animation
    }
  }
}
</script>
