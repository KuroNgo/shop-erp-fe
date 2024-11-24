<template>
  <div class = "h-auto">
    <div>
      <el-card style = "width: 100%; height: auto;" shadow = "always">
        <div class = "grid items-center">
          <p class = "font-bold text-2xl mb-3 ">Theme</p>
          <div class = "">
            <el-radio-group v-model = "rd" size = "medium">
              <el-radio-button label = "Light" value = "Light">
              </el-radio-button>
              <el-radio-button label = "Dark" value = "Dark">
              </el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </el-card>
    </div>
    <div class = "mt-5">
      <el-card style = "width: 100%; height: auto; color: #000; background-color: teal;" class = "rounded-r"
               shadow = "always">
        <div class = "flex items-center ">
          <el-icon :size = "30" class = "text-white mr-3">
            <Bell />
          </el-icon>
          <div>
            <p class = "text-white font-bold text-xl mb-2">Your notification settings are regrouped and
              simplified
            </p>
            <p class = "text-white">Your previous setting choices aren't changed.</p>
          </div>
        </div>
      </el-card>
    </div>
    <div class = "mt-5">
      <el-card style = "width: 100%; height: 700px; color: #000;" class = "rounded-r" shadow = "always">
        <div class = "grid items-center">
          <p class = "font-bold text-2xl mb-10">Notice your receive</p>
          <div class = "flex justify-between items-center h-[50px]">
            <p class = "text-xl">Searching for a job</p>
            <el-switch v-model = "vlSJob" size = "large" />
          </div>
          <el-divider />
          <div class = "flex justify-between items-center h-[50px]">
            <p class = "text-xl">Hiring someone</p>
            <el-switch v-model = "vlHire" size = "large" />
          </div>
          <el-divider />
          <div class = "flex justify-between items-center h-[50px]">
            <p class = "text-xl">Connecting with others</p>
            <el-switch v-model = "vlCon" size = "large" />
          </div>
          <el-divider />
          <div class = "flex justify-between items-center h-[50px]">
            <p class = "text-xl">Updating your profile</p>
            <el-switch v-model = "vlUpdate" size = "large" />
          </div>
          <el-divider />
          <div class = "flex justify-between items-center h-[50px]">
            <p class = "text-xl">News and reports</p>
            <el-switch v-model = "vlNew" size = "large" />
          </div>
          <el-divider />
          <div class = "flex justify-between items-center h-[50px]">
            <p class = "text-xl">Attending events</p>
            <el-switch v-model = "vlAttendance" size = "large" />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script setup lang = "ts">
import {ref} from 'vue'

const rd = ref('Light')
const vlSJob = ref(true)
const vlHire = ref(true)
const vlCon = ref(false)
const vlUpdate = ref(true)
const vlNew = ref(true)
const vlAttendance = ref(false)
</script>
<style scoped></style>