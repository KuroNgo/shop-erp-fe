<template>
    <div class="w-full h-full bg-neutral-50">
        <el-container class="h-full w-full">
            <el-aside width="300px" class="bg-white shadow-lg scroll-hide" ref="asideBar">
                <el-row :span="12">
                    <el-divider content-position="left">OVERVIEW</el-divider>
                    <el-menu class="ml-3 w-full">
                        <!-- Dashboard -->
                        <el-menu-item index="1" @click="navigateTo('/dashboard', 'dashboard')">
                            <el-icon>
                                <OfficeBuilding />
                            </el-icon>
                            <span>Dashboard</span>
                        </el-menu-item>

                        <!-- User settings -->
                        <el-menu-item index="2" @click="navigateTo('/user-settings', 'user settings')">
                            <el-icon>
                                <User />
                            </el-icon>
                            <span>User settings</span>
                        </el-menu-item>
                        <el-divider content-position="left" class="-translate-x-4">DEPARTMENTS</el-divider>

                        <!-- Department -->
                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon>
                                    <Notebook />
                                </el-icon>
                                <span>Account</span>
                            </template>

                            <!-- Account -->
                            <el-menu-item index="3-1" @click="navigateTo('/account', 'account')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Account</span>
                            </el-menu-item>

                            <!-- Budget -->
                            <el-menu-item index="3-2" @click="navigateTo('/budget', 'budget')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Budget</span>
                            </el-menu-item>

                            <!-- Financial Report -->
                            <el-menu-item index="3-3" @click="navigateTo('/financial-report', 'financial report')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Financial Report</span>
                            </el-menu-item>

                            <!-- Invoices -->
                            <el-menu-item index="3-4" @click="navigateTo('/invoice', 'invoices')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Invoices</span>
                            </el-menu-item>

                            <!-- Payments -->
                            <el-menu-item index="3-5" @click="navigateTo('/payment', 'payments')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Payments</span>
                            </el-menu-item>

                            <!-- Taxes -->
                            <el-menu-item index="3-6" @click="navigateTo('/taxes', 'taxes')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Taxes</span>
                            </el-menu-item>

                            <!-- Transaction Categories -->
                            <el-menu-item index="3-7"
                                @click="navigateTo('/transaction-category', 'transaction-category')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Transaction Categories</span>
                            </el-menu-item>

                            <!-- Transaction -->
                            <el-menu-item index="3-8" @click="navigateTo('/transaction', 'transaction')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Transaction</span>
                            </el-menu-item>

                            <!-- <el-sub-menu index="3-4" title="Candidater">
                                <el-menu-item index="3-4-1">item one</el-menu-item>
                            </el-sub-menu> -->
                        </el-sub-menu>

                        <el-sub-menu index="4" class="">
                            <template #title>
                                <el-icon>
                                    <Connection />
                                </el-icon>
                                <span>Human Resource</span>
                            </template>

                            <!-- Attendance -->
                            <el-menu-item index="4-1" @click="navigateTo('/attendance', 'attendance')">
                                <el-icon>
                                    <Calendar />
                                </el-icon>
                                <span>Attendance</span>
                            </el-menu-item>

                            <!-- Benefit -->
                            <el-menu-item index="4-2" @click="navigateTo('/benefit', 'benefit')">
                                <el-icon>
                                    <Present />
                                </el-icon>
                                <span>Benefit</span>
                            </el-menu-item>

                            <!-- Candidate -->
                            <el-menu-item index="4-3" @click="navigateTo('/candidate', 'candidate')">
                                <el-icon>
                                    <UserFilled />
                                </el-icon>
                                <span>Candidate</span>
                            </el-menu-item>

                            <!-- Contracts -->
                            <el-menu-item index="4-4" @click="navigateTo('/contracts', 'contracts')">
                                <el-icon>
                                    <Document />
                                </el-icon>
                                <span>Contracts</span>
                            </el-menu-item>

                            <!-- Departments -->
                            <el-menu-item index="4-5" @click="navigateTo('/departments', 'departments')">
                                <el-icon>
                                    <Folder />
                                </el-icon>
                                <span>Departments</span>
                            </el-menu-item>

                            <!-- Employees -->
                            <el-menu-item index="4-6" @click="navigateTo('/employees', 'employees')">
                                <el-icon>
                                    <User />
                                </el-icon>
                                <span>Employees</span>
                            </el-menu-item>

                            <!-- Leave Request -->
                            <el-menu-item index="4-7" @click="navigateTo('/leave-requests', 'leave request')">
                                <el-icon>
                                    <TurnOff />
                                </el-icon>
                                <span>Leave Request</span>
                            </el-menu-item>

                            <!-- Performance Review -->
                            <el-menu-item index="4-8" @click="navigateTo('/performance-review', 'performance review')">
                                <el-icon>
                                    <TrophyBase />
                                </el-icon>
                                <span>Performance Review</span>
                            </el-menu-item>

                            <!-- Role -->
                            <el-menu-item index="4-9" @click="navigateTo('/role', 'role')">
                                <el-icon>
                                    <Key />
                                </el-icon>
                                <span>Role</span>
                            </el-menu-item>

                            <!-- Salary -->
                            <el-menu-item index="4-10" @click="navigateTo('/salary', 'salary')">
                                <el-icon>
                                    <Money />
                                </el-icon>
                                <span>Salary</span>
                            </el-menu-item>

                            <!-- User -->
                            <el-menu-item index="4-11" @click="navigateTo('/user', 'user')">
                                <el-icon>
                                    <UserFilled />
                                </el-icon>
                                <span>User</span>
                            </el-menu-item>

                        </el-sub-menu>
                        <el-sub-menu index="5" class="">
                            <template #title>
                                <el-icon>
                                    <Service />
                                </el-icon>
                                <span>Sale and Distribution</span>
                            </template>

                            <!-- Category -->
                            <el-menu-item index="5-1" @click="navigateTo('/category', 'category')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Category</span>
                            </el-menu-item>

                            <!-- Customer -->
                            <el-menu-item index="5-2" @click="navigateTo('/customer', 'customer')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Customer</span>
                            </el-menu-item>

                            <!-- Invoices -->
                            <el-menu-item index="5-3" @click="navigateTo('/invoice', 'invoice')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Invoices</span>
                            </el-menu-item>

                            <!-- Order Detail -->
                            <el-menu-item index="5-4" @click="navigateTo('/order-detail', 'order detail')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Order Detail</span>
                            </el-menu-item>

                            <!-- Payments -->
                            <el-menu-item index="5-5" @click="navigateTo('/payment', 'payments')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Payments</span>
                            </el-menu-item>

                            <!-- Products -->
                            <el-menu-item index="5-6" @click="navigateTo('/product', 'product')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Products</span>
                            </el-menu-item>

                            <!-- Sale Order -->
                            <el-menu-item index="5-7" @click="navigateTo('/sale-order', 'sale order')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Sale Order</span>
                            </el-menu-item>

                            <!-- Sale Report -->
                            <el-menu-item index="5-8" @click="navigateTo('/sale-report', 'sale report')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Sale Report</span>
                            </el-menu-item>

                        </el-sub-menu>
                        <el-sub-menu index="6" class="">
                            <template #title>
                                <el-icon>
                                    <House />
                                </el-icon>
                                <span>Warehouse</span>
                            </template>

                            <!-- Inventory -->
                            <el-menu-item index="6-1" @click="navigateTo('/inventory', 'inventory')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Inventory</span>
                            </el-menu-item>

                            <!-- Product Category -->
                            <el-menu-item index="6-2" @click="navigateTo('/product-category', 'product category')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Product Category</span>
                            </el-menu-item>

                            <!-- Purchase Order -->
                            <el-menu-item index="6-3" @click="navigateTo('/purchase-order', 'purchase order')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Purchase Order</span>
                            </el-menu-item>

                            <!-- Purchase Order Detail -->
                            <el-menu-item index="6-4"
                                @click="navigateTo('/purchase-order-detail', 'purchase order detail')"
                                title="Purchase Order Detail">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Purchase Order Detail</span>
                            </el-menu-item>

                            <!-- Stock Adjustment -->
                            <el-menu-item index="6-5" @click="navigateTo('/stock-adjustment', 'stock adjustment')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Stock Adjustment</span>
                            </el-menu-item>

                            <!-- Stock Movement -->
                            <el-menu-item index="6-6" @click="navigateTo('/stock-movement', 'stock movement')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Stock Movement</span>
                            </el-menu-item>

                            <!-- Supplier -->
                            <el-menu-item index="6-7" @click="navigateTo('/supplier', 'supplier')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Supplier</span>
                            </el-menu-item>

                            <!-- Warehouse -->
                            <el-menu-item index="6-8" @click="navigateTo('/warehouse', 'warehouse')">
                                <el-icon>
                                    <OfficeBuilding />
                                </el-icon>
                                <span>Warehouse</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-divider content-position="left" class="-translate-x-4">APPROVAL</el-divider>

                        <!-- Chat -->
                        <el-menu-item index="7" @click="navigateTo('/chat', 'chat')">
                            <el-icon>
                                <Message />
                            </el-icon>
                            <span>Chat</span>
                        </el-menu-item>

                        <!-- To Do List -->
                        <el-menu-item index="8" @click="navigateTo('/to-do', 'to do list')">
                            <el-icon><Select /></el-icon>
                            <span>To Do</span>
                        </el-menu-item>
                        <el-divider content-position="left" class="-translate-x-4">SETTINGS</el-divider>

                        <!-- Settings -->
                        <el-menu-item index="9" @click="navigateTo('/settings', 'settings')">
                            <el-icon>
                                <Setting />
                            </el-icon>
                            <span>Settings</span>
                        </el-menu-item>

                    </el-menu>
                </el-row>
            </el-aside>
            <el-container>
                <el-header class="bg-white m-4 rounded-md shadow-lg ">
                    <el-menu ellipsis-icon mode="horizontal" :popper-offset="16"
                        class="items-center  flex justify-between">
                        <div>
                            <el-input v-model="input" style="width: 270px; height: 40px;" placeholder="Type something"
                                :prefix-icon="Search" ref="inpSearch" />
                        </div>

                        <div>
                            <p class="font-bold text-2xl">LOGO</p>
                        </div>

                        <div class="flex">
                            <el-tooltip class="box-item" effect="light" content="help" placement="bottom-start">
                                <el-button :icon="QuestionFilled" circle class="ml-5" @click="open = true" />
                            </el-tooltip>

                            <el-badge is-dot class="ml-5">
                                <el-tooltip class="box-item" effect="light" content="notification"
                                    placement="bottom-start">
                                    <el-button ref="btnNoti" :icon="Notification" circle />
                                </el-tooltip>
                            </el-badge>

                            <el-badge is-dot>
                                <el-tooltip class="box-item" effect="light" content="chat" placement="bottom-start">
                                    <el-button ref="btnChat" :icon="ChatDotRound" circle class="ml-5" />
                                </el-tooltip>
                            </el-badge>

                            <el-tooltip class="box-item" effect="light" content="refresh" placement="bottom-start">
                                <el-button ref="btnRefresh" :icon="Refresh" circle class="ml-5" />
                            </el-tooltip>
                            <el-avatar :size="35"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                class="ml-5" />
                            <div class="ml-2">
                                <p class="text-slate-400">Ngô Hoài Phong</p>
                                <p class="font-bold text-sm">Admin</p>
                            </div>
                        </div>
                    </el-menu>
                </el-header>
                <el-main class="h-full" ref="main">
                    <div class="flex">
                        <p class="mb-5 font-bold text-xl items-center capitalize">{{ activeView }}</p>
                        <!-- <p class="items-center text-sm translate-y-1">/edit</p> -->
                    </div>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

    <el-tour v-model="open">
        <el-tour-step title="Hướng dẫn"
            description="Chào mừng bạn đến với ứng dụng ERP, giải pháp quản lý toàn diện cho doanh nghiệp của bạn!" />

        <el-tour-step title="Thông báo"
            description="Đây là khu vực thông báo, giúp bạn theo dõi và không bỏ lỡ các thông tin quan trọng từ hệ thống."
            placement="right" :target="btnNoti?.$el" />

        <el-tour-step title="Chat"
            description="Khu vực chat cho phép bạn tương tác với AI hoặc trò chuyện với nhân viên, đồng nghiệp."
            placement="top" :target="btnChat?.$el" />

        <el-tour-step title="Làm mới dữ liệu"
            description="Khi có dữ liệu mới, bạn có thể làm mới hệ thống để cập nhật thông tin mới nhất."
            placement="top" :target="btnRefresh?.$el" />

        <el-tour-step title="Tìm kiếm"
            description="Tìm kiếm thông tin trong hệ thống bằng cách nhập từ khóa liên quan đến phòng ban hoặc nội dung bạn cần."
            placement="top" :target="inpSearch?.$el" />

        <el-tour-step title="Thanh điều hướng"
            description="Đây là thanh điều hướng, nơi bạn truy cập các chức năng chính của hệ thống." placement="right"
            :target="asideBar?.$el" />

        <el-tour-step title="Khu vực chính"
            description="Khu vực này hiển thị nội dung và các chức năng của hệ thống mà bạn đang làm việc."
            placement="right" :target="main?.$el" />

        <el-tour-step title="Lời chào" description="Chúc bạn có một ngày làm việc hiệu quả và vui vẻ!" />
    </el-tour>
</template>

<script lang="ts" setup>
import { QuestionFilled, Notification, ChatDotRound, Refresh, Search } from '@element-plus/icons-vue'
import type { ButtonInstance, InputInstance, AsideInstance, MainInstance } from 'element-plus'
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const btnNoti = ref<ButtonInstance>()
const btnChat = ref<ButtonInstance>()
const btnRefresh = ref<ButtonInstance>()
const inpSearch = ref<InputInstance>()
const asideBar = ref<AsideInstance>()
const main = ref<MainInstance>()

const open = ref(false)
const activeView = ref('')
const route = useRoute(); // Lấy thông tin route hiện tại
const router = useRouter();
const input = ref('')

const navigateTo = (path: string, viewName: string) => {
    router.push(path);
    activeView.value = viewName;
};

// Sử dụng onMounted để chỉ thiết lập activeView từ route hiện tại
onMounted((): void => {
    activeView.value = (route.name as string)?.split('|')[0].trim().toLowerCase() || ''; // Khởi tạo activeView từ route
});

// Theo dõi thay đổi route
watch(route, (newRoute) => {
    const routeName: string = (newRoute.name as string) || '';
    const parts: string[] = routeName.split('|');
    activeView.value = parts[0].trim().toLowerCase(); // Cập nhật activeView từ route
});

</script>

<style scoped>
.scroll-hide {
    -ms-overflow-style: none;
    overflow: auto;
}

.scroll-hide::-webkit-scrollbar {
    display: none;
}
</style>