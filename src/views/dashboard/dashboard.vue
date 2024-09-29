<template>
    <!-- Navbar -->
    <div class=" flex justify-between bg-teal-700 h-[70px] w-full color absolute z-10">
        <div class="flex items-center translate-x-8 ">
            <img src="" alt="">
            <p class="text-xl font-bold">LOGO</p>
        </div>
        <div class="flex items-center nav-custom">
            <div class="grid text-right custom-transform-y nav-content p-2">
                <label for="avatar" class=" font-bold">Ngo Hoai Phong</label>
                <label for="avatar" class="translate-y-2">Admin</label>
            </div>
        </div>
    </div>
    <div class="w-full flex translate-y-20 h-full absolute">
        <div class="content block w-[290px] bg-teal-100 overflow-y-auto overflow-x-hidden pd-10 ">
            <div class="relative">
                <div class="translate-x-2 translate-y-2">
                </div>
                <Divider :fontSize=fontSize value="OVERVIEW" class="translate-y-6 font-bold divider" />
                <div class="translate-x-2 translate-y-10">

                </div>

                <div class="translate-x-2 translate-y-16">

                </div>
            </div>
        </div>
        <div class="w-[100%] h-full overflow-y-auto overflow-x-hidden bg-slate-100">
            <div class="custom-transform-2 flex w-full justify-between ">
                <div class="grid">
                    <p class="text-5xl font-bold">Dashboard</p>
                    <p class="text-sm translate-x-1">You last login: 21h ago NewZealand</p>
                </div>
            </div>
            <div class="custom-transform-3 ">
                <div class="flex">
                    <div class="w-[200px] border-custom flex justify-between bg-white">
                        <div class="flex justify-end">
                            <div class="relative">
                                <icon value="home"
                                    styles="border:1px solid #000;background-color:white;border-radius:15px;padding:2px;color:blue"
                                    classes="" class="icon custom-transform-4" />
                            </div>
                            <div class="translate-x-10">
                                <p class="text-2xl font-extralight">Total Sales</p>
                                <p class="text-lg font-sm">1106 > 6202 Sale</p>
                            </div>
                        </div>
                        <div class="grid">
                            <!-- <p class="text-2xl font-bold">26.13M$</p>
                            <p class="text-lg font-thin">Total Sales</p> -->
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const activeElement = ref('Dashboard');
const minimized = ref<boolean>(false);
const activeItem = ref<string | null>(null);
const fontSize = ref('12px');

const checkScreenSize = () => {
    updateFontSize();
    minimized.value = window.innerWidth < 500;
};

const updateFontSize = () => {
    if (window.innerWidth < 500) {
        fontSize.value = '0px'
    } else {
        fontSize.value = '12px'
    }
}

onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize)
})

</script>

<style scoped lang="css">
.overflow {
    overflow-y: hidden;
}

.custom-transform-y {
    transform: translateY(-3px);
}

.nav-custom {
    transform: translate(-20px, 0px);
}

.custom-transform {
    transform: translate(5px, 15px);
}

.custom-transform-2 {
    transform: translate(2rem, 1rem);
}

.custom-transform-3 {
    transform: translate(2rem, 3rem);
}

.custom-transform-4 {
    transform: translate(6px, -13px);
}

.color {
    color: white;
}

aside {
    background-color: rgba(255, 255, 255, 0) !important;
}

.icon {
    position: absolute;
    font-size: 20px;
    top: 50%;
    left: 50%;
}

.border-b-custom {
    border-bottom: 1px solid #505050;
}

.border-custom {
    border: 1px solid #000;
}

@media screen and (max-width: 500px) {
    .content {
        width: 100px;
        min-width: 85px;
    }

    .nav-content {
        font-size: 0px;
    }
}
</style>