<template>
  <div>
    <div class = "flex justify-normal">
      <div class = "mr-5">
        <el-card style = "width: 400px" shadow = "always">
          <div class = "flex items-center">
            <el-icon size = "30" class = "border-custom" color = "teal">
              <Postcard />
            </el-icon>
            <div class = "ml-3">
              <p class = "mb-2 font-bold text-cyan-500">Total Sales</p>
              <p>1106 > 6202 Sale</p>
            </div>

          </div>
        </el-card>
        <div class = "">
          <el-card style = "width: 400px" shadow = "always">
            <el-col :span = "7" class = "flex">
              <el-statistic :value = "outputValue" class = "font-bold" />
              <p class = "text-sm">%</p>
            </el-col>
          </el-card>
        </div>
      </div>
      <div class = "mr-5">
        <el-card style = "width: 400px" shadow = "always">
          <div class = "flex items-center">
            <el-icon size = "30" class = "border-custom" color = "teal">
              <Postcard />
            </el-icon>
            <div class = "ml-3">
              <p class = "mb-2 font-bold text-cyan-500">Total Expaneses</p>
              <p>1106 > 6202 Sale</p>
            </div>

          </div>
        </el-card>
        <div class = "">
          <el-card style = "width: 400px" shadow = "always">
            <el-col :span = "7" class = "flex">
              <el-statistic :value = "outputValue2" class = "font-bold" />
              <p class = "text-sm">%</p>
            </el-col>
          </el-card>
        </div>
      </div>
      <div>
        <el-card style = "width: 350px" shadow = "always">
          <div class = "flex items-center">
            <el-icon size = "30" class = "border-custom" color = "teal">
              <Postcard />
            </el-icon>
            <div class = "ml-3">
              <p class = "mb-2 font-bold text-cyan-500">Total Employees</p>
              <p>1106 > 6202 Sale</p>
            </div>

          </div>
        </el-card>
        <div class = "">
          <el-card style = "width: 350px" shadow = "always">
            <el-col :span = "7" class = "flex">
              <el-statistic :value = "outputValue3" />
              <p class = "text-sm">%</p>
            </el-col>
          </el-card>
        </div>
      </div>
    </div>
    <div class = "mt-5 flex justify-normal">
      <div class = "mr-5 w-full">
        <!-- TODO chart -->
        <el-card style = "width: 100%" class = "h-[400px]" shadow = "always">
          <div class = "flex justify-between items-center">
            <div>
              <p class = "font-bold text-xl text-cyan-500">Chart</p>
              <p class = "text-sm text-neutral-500 mt-2">In thousands</p>
            </div>
            <div>
              <el-select v-model = "formInline.region" placeholder = "Choose time" clearable>
                <el-option label = "Days" value = "Andrew" />
                <el-option label = "Weeks" value = "Kuro" />
                <el-option label = "Months" value = "Admin" />
              </el-select>
            </div>
            <div>
              <el-tooltip class = "box-item" effect = "light" content = "column chart" placement = "bottom-start">
                <el-button :icon = "DataAnalysis" circle />
              </el-tooltip>
              <el-tooltip class = "box-item" effect = "light" content = "pie chart" placement = "bottom-start">
                <el-button :icon = "PieChart" circle />
              </el-tooltip>
              <el-tooltip class = "box-item" effect = "light" content = "progress bar" placement = "bottom-start">
                <el-button :icon = "TrendCharts" circle />
              </el-tooltip>
            </div>
          </div>
          <el-divider />
          <div>
            <chart />
          </div>
        </el-card>
      </div>
      <div class = "w-full">
        <!-- TODO Top Product -->
        <el-card style = "width: 100%" class = "h-[400px]" shadow = "always">
          <div class = "flex items-center justify-between">
            <div>
              <p class = "font-bold text-xl text-cyan-500">Top Product</p>
              <p class = "text-sm text-neutral-500 mt-2">In Unit</p>
            </div>
            <div>
              <el-select v-model = "formInline.user" placeholder = "Choose time" clearable>
                <el-option label = "Days" value = "1" />
                <el-option label = "Weeks" value = "2" />
                <el-option label = "Months" value = "3" />
              </el-select>
            </div>
          </div>
          <el-divider />
          <div>
            <chart />
          </div>
        </el-card>
      </div>
    </div>
    <div class = "mt-5 flex ">
      <div class = "mr-5 w-full">
        <!-- To Do list -->
        <el-card style = "width: 100%" class = "h-[300px] scroll-hide-2" shadow = "always">
          <div class = "">
            <p class = "font-bold text-xl text-cyan-500">To Do list</p>
            <p class = "text-sm text-neutral-500 mt-2">In Unit</p>
          </div>
          <el-divider />
          <el-table :data = "tableData" height = "250">
            <el-table-column prop = "date" label = "Date" width = "100" />
            <el-table-column prop = "name" label = "Name" width = "100" />
            <el-table-column prop = "address" label = "Address" />
          </el-table>
        </el-card>
      </div>
      <div class = "w-[700px]">
        <!--Top Employee -->
        <el-card style = "width: 100%" class = "h-[300px] scroll-hide-2" shadow = "always">
          <div class = "">
            <p class = "font-bold text-xl text-cyan-500">Top Employee</p>
            <p class = "text-sm text-neutral-500 mt-2">In Unit</p>
          </div>
          <el-divider />
          <el-table :data = "tableData" height = "250">
            <el-table-column prop = "date" label = "Date" width = "100" />
            <el-table-column prop = "name" label = "Name" width = "100" />
            <el-table-column prop = "address" label = "Address" />
          </el-table>
        </el-card>
      </div>
    </div>
    <div class = "mt-5 ">
      <div class = "w-full h-[700px]]">
        <!-- Employee Manager -->
        <el-card style = "width: 100%" class = "h-full scroll-hide-2" shadow = "always">
          <div class = "flex justify-between items-center">
            <div>
              <p class = "font-bold text-xl text-cyan-500">Employee Manager</p>
              <p class = "text-sm text-neutral-500 mt-2">In Unit</p>
            </div>
            <div>
              <el-input v-model = "input" style = "width: 270px; height: 40px;" placeholder = "Type something"
                        :prefix-icon = "Search" ref = "inpSearch" />
            </div>
          </div>
          <el-divider />
          <el-table :data = "tableData" height = "350">
            <el-table-column prop = "date" label = "Date" width = "100" />
            <el-table-column prop = "name" label = "Name" width = "100" />
            <el-table-column prop = "address" label = "Address" />
            <el-table-column prop = "date" label = "Date" width = "100" />
            <el-table-column prop = "name" label = "Name" width = "100" />
            <el-table-column prop = "address" label = "Address" />
            <el-table-column prop = "date" label = "Date" width = "100" />
            <el-table-column prop = "name" label = "Name" width = "100" />
            <el-table-column prop = "address" label = "Address" />
          </el-table>
        </el-card>
      </div>
      <!-- <div>
                <h1>Danh sách người dùng</h1>
                <ul>
                    <li v-for="employee in employees" :key="employee.Employee.ID">
                        <p>Tên: {{ employee.Employee.Email }}</p>
                    </li>
                </ul>
            </div> -->
    </div>

  </div>
</template>
<script setup lang = "ts">
import {DataAnalysis, PieChart, Search, TrendCharts} from '@element-plus/icons-vue'
import {reactive, ref} from 'vue'
import {useTransition} from '@vueuse/core'
import chart from '../../../components/charts/bar/barchart.vue'

// const employees = ref([])

// const fetchUsers = async () => {
//     try {
//         const response = await getAllEmployee() // Gọi hàm getUsers từ file api.ts
//         employees.value = response.data.data
//         console.log(employees.value)
//     } catch (error) {
//         console.error('Lỗi khi gọi API:', error)
//     }
// }

// fetchUsers()

const input = ref('')

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

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

interface User {
  date: string
  name: string
  address: string
}
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

.scroll-hide {
  -ms-overflow-style: none;
  overflow: auto;
}

.scroll-hide::-webkit-scrollbar {
  display: none;
}

.scroll-hide-2 {
  -ms-overflow-style: none;
  overflow: hidden;
}
</style>