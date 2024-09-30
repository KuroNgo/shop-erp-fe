<template>
    <div class="w-full h-full transform scale-x-1 scale-y-1" id="container">
        <div class="items-center w-full h-full grid justify-items-center">
            <div class="w-[500px] h-[600px] rounded-lg" id="box">
                <div class="w-full h-full p-8">
                    <h1 class="text-center font-bold mt-25 ">Đăng nhập</h1>
                    <div class="grid justify-left relative top-10">
                        <label class="">Email</label>
                        <el-input v-model="input" type="email" placeholder="Please input Email"
                            class="h-[40px] mb-2 w-full"></el-input>
                        <label>Mật khẩu</label>
                        <el-input v-model="password" type="password" placeholder="Please input password" show-password
                            maxlength="20" class="h-[40px] mt-2 mb-2 w-full"></el-input>
                    </div>

                    <div class="translate-y-10 flex justify-between items-center">
                        <el-checkbox v-model="checkRemember" class="font-sm translate-y-1">Nhớ mật khẩu</el-checkbox>
                        <a href="#">Quên mật khẩu</a>
                    </div>

                    <el-button size="large" class="w-full mt-5 custom-transform font-bold" type="primary">Đăng
                        nhập</el-button>
                    <p class="line-throught">Hoặc</p>
                    <el-button size="large" class="w-full mt-5 custom-transform" type="primary">Đăng nhập bằng
                        Google</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
const password = ref('')
const checkRemember = ref('')
</script>

<style scoped lang="css">
#container {
    background-image: url("../../assets/img/background.png");
    background-size: cover;
    background-position: bottom;
}

#box {
    background-color: #e3e3e39e;
}

label {
    color: #0a2041;
    font-size: 1.0rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.custom-transform {
    transform: translate(0px, 70px);
}

.custom-margin-left {
    margin-left: 140px;
}


.sign-in {
    transform: translate(10px, 70px);
}

.google {
    transform: translate(10px, 90px);
}

p {
    text-align: center;
    font-weight: 600;
    transform: translateY(80px);
}

.line-throught {
    padding: 5px 10px;
    border-radius: 5px;
    position: relative;
    z-index: 1;
}
</style>