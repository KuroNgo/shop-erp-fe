<template>
    <div class="flex items-center">
        <button class="relative flex justify-start items-center w-[80%] h-[30px] overflow-hidden bg-transparent  
            text-black hover:text-white hover:bg-violet-600 transition duration-300 ease-in-out p-2 rounded-md m-2">
            <i :class="icon" :style="{ color: color }" class="translate-x-4 text-[13px]"></i>
            <p class="translate-x-12 relative ">{{ props.name }}</p>
        </button>
    </div>
</template>

<script setup lang="ts">
type Prop = {
    name: string,
    maskColor: string,
    color: string,
    opacity: string,
    icon: string,
}

const props = defineProps<Prop>()
</script>