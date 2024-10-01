<template>
    <el-card class="h-[650px]">
        <div class="flex items-center ">
            <div class="mr-2">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div>
                <p class="font-bold mb-1">Ngô Hoài Phong</p>
                <p>Admin</p>
            </div>
        </div>
        <el-divider />

        <div>
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-bold mb-3">Name</p>
                    <p>Ngô Hoài Phong</p>
                </div>
                <el-button>
                    <el-icon class="mr-2">
                        <Edit />
                    </el-icon>
                    <p>Edit</p>
                </el-button>
            </div>
            <el-divider />

            <div class="flex justify-between items-center">
                <div>
                    <p class="font-bold mb-3">Email</p>
                    <p>admin@admin.com</p>
                </div>
            </div>

            <div class="flex justify-between items-center  mt-5">
                <div>
                    <p class="font-bold mb-2">Password</p>
                    <p class="">123456</p>
                </div>
                <el-button>
                    <el-icon class="mr-2">
                        <Edit />
                    </el-icon>
                    <p>Reset Password</p>
                </el-button>
            </div>
            <el-divider />

            <div class="flex justify-between items-center  mt-2">
                <div>
                    <p class="font-bold mb-3">Two-factor authentication</p>
                    <p class="">Add an extra layer of security to your account. To sign in, you’ll need to provide a
                        code along with your username and password.
                    </p>
                </div>
                <el-button>
                    <el-icon class="mr-1">
                        <Edit />
                    </el-icon>
                    <p>Set up 2FA</p>
                </el-button>
            </div>
            <el-divider />

            <div class="flex justify-between items-center  mt-2">
                <div>
                    <p class="font-bold mb-2">Email subscriptions</p>
                    <p class="mb-2">To manage what emails you get, visit the
                        <a href="#" class="text-cyan-500">Notification settings</a>
                    </p>
                </div>
            </div>
        </div>
    </el-card>
</template>
<script setup lang="ts"></script>

<style scoped>
.scroll-hide {
    -ms-overflow-style: none;
    overflow: auto;
}

.scroll-hide::-webkit-scrollbar {
    display: none;
}
</style>