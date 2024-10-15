<template>
    <!-- HelloWorld -->
    <div>
        <h1>User Information</h1>
        <div v-if="user">
            <p>{{ user }}</p>
            <!-- <p>Name: {{ user.fullName }}</p> -->
            <!-- <p>Email: {{ user.email }}</p> -->
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getInfor, logout } from '@/api/hr_management/user.api';
import type { User } from '@/api/hr_management/user.api'

const user = ref<string | null>(null);
// alert(user.value)
console.log(user.value)

onMounted(async () => {
    user.value = await logout();
})
</script>