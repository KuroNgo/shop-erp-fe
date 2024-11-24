<template>
  <div>
    <div class = "flex">
      <!-- Department Card -->
      <el-card class = "min-w-[200px]">
        <p class = "font-bold text-xl">Department</p>
        <p>Level 1</p>
      </el-card>

      <!-- Departments List Card -->
      <el-card class = "w-[40%] ml-2">
        <p class = "font-bold text-lg">Departments List</p>

        <!-- Skeleton loader when loading -->
        <template v-if = "isLoading">
          <p>Loading...</p>
        </template>

        <!-- Show departments list -->
        <ul v-else-if = "departments.length">
          <li
              v-for = "department in departments"
              :key = "department.id"
              class = "text-gray-700"
          >
            {{ department.name }}
          </li>
        </ul>

        <!-- Show message if departments is empty -->
        <p v-else>No departments available</p>

        <!-- Show error if there's an error -->
        <p v-if = "error" class = "text-red-500">{{ error }}</p>
      </el-card>
    </div>
  </div>
</template>

<script setup lang = "ts">
import {onMounted, ref} from "vue";
import {type DepartmentApi, fetchAll} from "@/api/hr_management/department.api";

// Reactive data
const departments = ref<DepartmentApi[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

// Type guard to ensure API response type
function isDepartmentApi(data: any): data is DepartmentApi[] {
  return (
      Array.isArray(data) &&
      data.every((item) => typeof item.id === "string" && typeof item.name === "string")
  );
}

// Fetch departments when component is mounted
onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await fetchAll();

    // Validate API response
    if (isDepartmentApi(response)) {
      departments.value = response;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unknown error occurred";
    console.error("Failed to fetch departments:", err);
  } finally {
    isLoading.value = false;
  }
});
</script>
