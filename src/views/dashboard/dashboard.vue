<template>
    <!-- Navbar -->
    <div class="bg-teal-700 h-[70px] w-full color">
        <div class="flex items-center justify-end nav-custom">
            <div class="grid text-right custom-transform-y">
                <label for="avatar" class=" font-bold">Ngô Hoài Phong</label>
                <label for="avatar" class="translate-y-2">Admin</label>
            </div>
            <Avatar color="#949494" icon="person" data="" size="medium" class="text-center m-2" id="avatar" />
        </div>
    </div>
    <div class="w-full h-screen flex">
        <div class="h-full w-[200px] bg-teal-100">
            <div class="translate-x-2 translate-y-2">
                <Button name="Dashboard" icon="fa-solid fa-house" opacity="" maskColor="black" color="#000" />
                <Button name="Analytics" icon="fa-solid fa-chart-line" opacity="" maskColor="black" color="#000" />
            </div>
            <Divider value="APP & PAGES" class="translate-y-4 font-bold" />
            <div class="translate-x-2 translate-y-6">
                <Button name="Email" icon="fa-solid fa-house" opacity="" maskColor="black" color="#000" />
                <Button name="Chat" icon="fa-solid fa-chart-line" opacity="" maskColor="black" color="#000" />
                <Button name="Chat" icon="fa-solid fa-chart-line" opacity="" maskColor="black" color="#000" />
            </div>
        </div>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/button/button.vue';
import Avatar from '@/components/avatar/avatar.vue';
import Divider from '@/components/divider/divider.vue';
</script>

<style scoped lang="scss">
.overflow {
    overflow-y: hidden;
}

.custom-transform-y {
    transform: translateY(-3px);
}

.nav-custom {
    transform: translate(-20px, 5px);
}

.custom-transform {
    transform: translate(5px, 15px);
}

.color {
    color: white;
}
</style>