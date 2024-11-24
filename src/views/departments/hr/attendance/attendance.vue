<template>
  <!-- Attendance -->
  <div>
    <span class = "text-xl font-bold text-cyan-500">Analytics</span> <br>
    <span class = "text-sm text-slate-400 italic"> refer to a series of steps or actions </span>
  </div>
  <el-divider />

  <div class = "flex w-full h-[450px] mt-5">
    <el-card style = "height: 100%; width: 350px;" class = "mr-5 rounded-md">
      <div class = "h-[400px]">
        <p class = "font-bold text-cyan-500 text-xl">Timesheet</p>
        <p class = "mt-2">{{ currentTime }}</p>
        <el-divider />
        <div class = "h-[250px] flex justify-center items-center">
          <el-progress type = "dashboard" :percentage = "percentage2" :color = "colors">
            <span>3.48 hrs</span>
          </el-progress>
        </div>
        <div class = "flex justify-between">
          <div class = "translate-x-10 grid">
            <span class = "text-sm font-bold">BREAK</span>
            <span class = "text-xs">BREAK</span>
          </div>
          <el-divider direction = "vertical" />
          <div class = "-translate-x-10 grid">
            <span class = "text-sm font-bold">OVERTIME</span>
            <span class = "text-xs">BREAK</span>
          </div>
        </div>
      </div>
    </el-card>
    <el-card style = "height: 100%; width: 400px;" class = "mr-5">
      <div class = "">
        <p class = "font-bold text-cyan-500 text-xl mb-5">Statistics</p>
        <el-card class = "mb-3 items-center grid">
          <div class = "font-bold text-xs flex justify-between">
            <p>Today</p>
            <p>3.48 / 8 hrs</p>
          </div>
          <el-progress :percentage = "10" status = "exception" class = "w-full mt-2" />
        </el-card>
      </div>
      <div class = "">
        <el-card class = "mb-3 items-center grid">
          <div class = "font-bold text-xs flex justify-between">
            <p>Today</p>
            <p>3.48 / 8 hrs</p>
          </div>
          <el-progress :percentage = "30" status = "warning" class = "w-full mt-2" />
        </el-card>
      </div>

      <div class = "">
        <el-card class = "mb-3 items-center grid">
          <div class = "font-bold text-xs flex justify-between">
            <p>Today</p>
            <p>3.48 / 8 hrs</p>
          </div>
          <el-progress :percentage = "60" status = "warning" class = "w-full mt-2" />
        </el-card>
      </div>

      <div class = "">
        <el-card class = "mb-3 items-center grid">
          <div class = "font-bold text-xs flex justify-between">
            <p>Today</p>
            <p>3.48 / 8 hrs</p>
          </div>
          <el-progress :percentage = "90" status = "success" class = "w-full mt-2" />
        </el-card>
      </div>
    </el-card>
    <el-card style = "height: 100%; width: 400px">
      <div class = "">
        <p class = "font-bold text-cyan-500 text-xl mb-5">Today Activity</p>
      </div>
      <el-timeline style = "max-width: 600px">
        <el-timeline-item center timestamp = "2018/4/12" placement = "top">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp = "2018/4/3" placement = "top">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp = "2018/4/2" placement = "top">
          Event start
        </el-timeline-item>
        <el-timeline-item timestamp = "2018/4/2" placement = "top">
          Event end
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>

  <!-- Process -->
  <div class = "mt-10">
    <span class = "text-xl font-bold text-cyan-500">Process</span> <br>
    <span class = "text-sm text-slate-400 italic">A set of activities or tasks designed to achieve a specific
            outcome</span>
  </div>
  <el-divider />

  <div>
    <div>
      <el-tabs type = "border-card" class = "demo-tabs">
        <el-tab-pane label = "Mark Attendance" lazy>
          Mark Attendance
        </el-tab-pane>
        <el-tab-pane label = "Report" lazy>
          Report
        </el-tab-pane>
        <el-tab-pane label = "Export Data" lazy>
          Export Data
        </el-tab-pane>
        <el-tab-pane label = "Filter" lazy>
          Filter
        </el-tab-pane>
        <el-tab-pane label = "Settings" lazy>
          Settings
        </el-tab-pane>
        <el-tab-pane label = "Add Note" lazy>
          Add Note
        </el-tab-pane>
        <el-tab-pane label = "Bulk Actions" lazy>
          Bulk Actions
        </el-tab-pane>
        <el-tab-pane label = "Send Reminder" lazy>
          Send Reminder
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <!-- Procedures -->
  <div class = " mt-10">
    <span class = "text-xl font-bold text-cyan-500">Procedures</span> <br>
    <span class = "text-sm text-slate-400 italic">Detailed instructions on how to carry out specific tasks within a
            process</span>
  </div>
  <el-divider />

  <div class = "flex justify-between items-center mt-5">
    <el-input v-model = "input" style = "width: 500px; height: 40px;" placeholder = "Type something"
              :prefix-icon = "Search" />
    <el-select v-model = "value2" :empty-values = "[null, undefined]" :value-on-clear = "null" clearable
               placeholder = "Select" style = "width: 240px" @clear = "handleClear">
      <el-option v-for = "item in options" :key = "item.value" :label = "item.label" :value = "item.value" />
    </el-select>
  </div>

  <div class = "card-container space-x-5 overflow-x-auto mt-4" ref = "scrCard">
    <div v-for = "(item, index) in 10" :key = "index" class = "max-w-xs bg-white rounded-lg shadow-lg mr-1 w-[200px] ">
      <el-card style = "max-width: 480px">
        <template #header>
          <img src = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
               style = "width: 100%; border-radius: 50px;" />
        </template>
        <div class = "">
          <p class = "text-xl font-bold">Ngô Hoài Phong</p>
          <p class = "text-center">Admin</p>
          <el-button type = "primary" class = "translate-x-20p mt-3" plain @click = "openEditUser">View
            Details
          </el-button>
        </div>
      </el-card>
    </div>
  </div>

  <div class = "w-full h-[400] mt-10">
    <el-table :data = "tableData" style = "width: 100%;height: 100%;"
              :default-sort = "{ prop: 'date', order: 'descending' }">
      <el-table-column label = "Employee" width = "180">
        <template #default = "scope">

          <el-popover effect = "light" trigger = "hover" placement = "top" width = "auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label = "Date" width = "180">
        <template #default = "scope">
          <div style = "display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style = "margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label = "Check-in-time" width = "180">
        <template #default = "scope">
          <div style = "display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style = "margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label = "Check-out-time" width = "180">
        <template #default = "scope">
          <div style = "display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style = "margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label = "Hour worked" sortable width = "180">
        <template #default = "scope">
          <div style = "display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style = "margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label = "Status" width = "180">
        <template #default = "scope">
          <div style = "display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style = "margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label = "Detail">
        <template #default = "scope">
          <el-button size = "small" @click = "handleEdit(scope.$index, scope.row)">
            View
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class = "mt-5">
      <el-pagination background layout = "prev, pager, next" :total = "1000" class = "flex justify-center" />
    </div>
  </div>


  <!-- Edit User-->
  <el-drawer v-model = "drEditUser" title = "View user" direction = "rtl">
    <span class = "text-xl">Employee detail</span>
    <el-divider />
    <span class = "font-medium">Name</span>
  </el-drawer>


</template>
<script setup lang = "ts">
import {onMounted, ref} from 'vue'
import {Search} from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus'

// Tạo biến lưu thời gian hiện tại
const currentTime = ref<string>(new Date().toLocaleString())
const value2 = ref([])
// Tạo biến reactive để điều khiển hiển thị icon
const showIcon = ref(false)
// Tạo ref cho phần tử cuộn
const percentage2 = ref(0)
const scrCard = ref<HTMLDivElement | null>(null)
const drEditUser = ref(false)
// Các biến reactive cho form và input
const input = ref('')
// Dữ liệu màu sắc
const colors = [
  {color: '#f56c6c', percentage: 20},
  {color: '#e6a23c', percentage: 40},
  {color: '#5cb87a', percentage: 60},
  {color: '#1989fa', percentage: 80},
  {color: '#6f7ad3', percentage: 100},
]

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

// Định nghĩa interface User
interface User {
  date: string
  name: string
  address: string
}

const handleClear = () => {
  ElMessage.info(`The clear value is ${value2.value}, waiting for loading data...`)
}

// Hàm để khởi tạo thời gian hiện tại
const initializeTime = () => {
  currentTime.value = new Date().toLocaleString()
}

// Hàm mở dialog chỉnh sửa người dùng
const openEditUser = () => {
  drEditUser.value = true
}

// Hàm xử lý chỉnh sửa người dùng
const handleEdit = (index: number, row: User) => {
  openEditUser()
  console.log(index, row)
}

// Thêm sự kiện wheel khi component mount và gỡ bỏ khi component unmount
onMounted(() => {
  initializeTime() // Cập nhật thời gian hiện tại khi refresh trang
  let intervalId = setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 90;

    // Kiểm tra nếu percentage2 bằng 80 thì dừng lại
    if (percentage2.value >= 80) {
      clearInterval(intervalId);
    }
  }, 150);

});

// Dữ liệu bảng (tableData)
const tableData: User[] = [
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
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
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

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>