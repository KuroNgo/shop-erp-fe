<template>
    <div class="w-full h-screen transform scale-x-1 scale-y-1" id="container">
        <div class="items-center w-full h-full grid justify-items-center">
            <div class="w-[500px] h-[600px] rounded-lg" id="box">
                <div class="w-full h-full p-8">
                    <h1 class="text-center font-bold mt-25">Đăng nhập</h1>
                    <div class="grid justify-center relative top-10  ">
                        <label>Email</label>
                        <Input type="text" iconName="mail_outline" placeholderValue="Vui lòng nhập Email" />
                        <label>Mật khẩu</label>
                        <Input type="password" iconName="password" placeholderValue="Vui lòng nhập Mật khẩu" class="" />
                    </div>
                    <div class="flex justify-around custom-transform">
                        <Checkbox label="Nhớ mật khẩu" />
                        <a href="#" class="custom-margin-left font-bold">Quên mật khẩu</a>
                    </div>

                    <Button opacity="0.9" name="Đăng nhập" icon="" class="sign-in" color="#0a2041"
                        maskColor="blue"></Button>
                    <div class="line">
                        <p class="line-throught">Hoặc</p>
                    </div>
                    <Button opacity="0.9" name="Google" icon="fa-brands fa-google" class="google" color="#b7f1f9"
                        maskColor="blue">
                    </Button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';
import Checkbox from '@/components/checkbox/checkbox.vue';
</script>

<style scoped lang="scss">
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
    transform: translate(22px, 40px);
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