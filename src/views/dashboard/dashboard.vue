<template>
    <!-- Navbar -->
    <div class=" flex justify-between bg-teal-700 h-[70px] w-full color absolute z-10">
        <div class="flex items-center translate-x-8 ">
            <img src="" alt="">
            <p class="text-xl font-bold">LOGO</p>
        </div>
        <div class="flex items-center nav-custom">
            <icon value="notifications" class="-translate-x-10" />
            <icon value="message" class="-translate-x-4" />
            <div class="grid text-right custom-transform-y nav-content p-2">
                <label for="avatar" class=" font-bold">Ngo Hoai Phong</label>
                <label for="avatar" class="translate-y-2">Admin</label>
            </div>
            <Avatar color="#949494" icon="person" data="" size="medium" class="text-center m-2" id="avatar" />
        </div>
    </div>
    <div class="w-full flex translate-y-20 h-full absolute">
        <div class="content block w-[320px] bg-teal-100 overflow-y-auto overflow-x-hidden pd-10 ">
            <div class="relative">
                <div class="translate-x-2 translate-y-2">
                    <VaSidebar :minimized="minimized" class="aside">
                        <VaPopover icon="dashboard" message="Dashboard" placement="right" readonly
                            :disabled="!minimized">
                            <VaSidebarItem :active="'Dashboard' === activeElement" @click="activeElement = 'Dashboard'"
                                :key="'Dashboard'" class="aside">
                                <VaSidebarItemContent>
                                    <icon value="dashboard" />
                                    <VaSidebarItemTitle>Dashboard</VaSidebarItemTitle>
                                </VaSidebarItemContent>
                            </VaSidebarItem>
                        </VaPopover>
                        <VaPopover icon="analytics" message="Analytics" placement="right" readonly
                            :disabled="!minimized">
                            <VaSidebarItem :active="'Analytics' === activeElement" @click="activeElement = 'Analytics'">
                                <VaSidebarItemContent>
                                    <icon value="analytics" />
                                    <VaSidebarItemTitle>Analytics</VaSidebarItemTitle>
                                </VaSidebarItemContent>
                            </VaSidebarItem>
                        </VaPopover>
                    </VaSidebar>
                </div>
                <Divider :fontSize=fontSize value="APP & PAGES" class="translate-y-6 font-bold divider" />
                <div class="translate-x-2 translate-y-10">
                    <VaSidebar :minimized="minimized" class="aside">
                        <VaPopover icon="chat" message="Chat" placement="right" readonly :disabled="!minimized">
                            <VaSidebarItem :active="'Chat' === activeElement" @click="activeElement = 'Chat'">
                                <VaSidebarItemContent>
                                    <icon value="chat" />
                                    <VaSidebarItemTitle>Chat</VaSidebarItemTitle>
                                </VaSidebarItemContent>
                            </VaSidebarItem>
                        </VaPopover>
                        <VaPopover icon="list" message="Todo List" placement="right" readonly :disabled="!minimized">
                            <VaSidebarItem :active="'Todo List' === activeElement" @click="activeElement = 'Todo List'">
                                <VaSidebarItemContent>
                                    <icon value="list" />
                                    <VaSidebarItemTitle>Todo List</VaSidebarItemTitle>
                                </VaSidebarItemContent>
                            </VaSidebarItem>
                        </VaPopover>
                        <VaPopover icon="mail" message="Mail" placement="right" readonly :disabled="!minimized">
                            <VaSidebarItem :active="'Mail' === activeElement" @click="activeElement = 'Mail'">
                                <VaSidebarItemContent>
                                    <VaIcon name="mail" />
                                    <VaSidebarItemTitle>Mail</VaSidebarItemTitle>
                                </VaSidebarItemContent>
                            </VaSidebarItem>
                        </VaPopover>
                        <VaPopover icon="settings" message="Settings" placement="right" readonly :disabled="!minimized">
                            <VaSidebarItem :active="'Settings' === activeElement" @click="activeElement = 'Settings'">
                                <VaSidebarItemContent>
                                    <icon value="settings" />
                                    <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
                                </VaSidebarItemContent>
                            </VaSidebarItem>
                        </VaPopover>
                    </VaSidebar>
                </div>

                <Divider :fontSize=fontSize value="ACCOUNT DEPARTMENT" class="translate-y-14 font-bold divider" />
                <div class="translate-x-2 translate-y-16">
                    <account />
                    <budgets />
                    <financial_reports />
                    <invoices />
                    <payments />
                    <taxes />
                    <payments />
                    <transaction />
                    <transaction_category />
                </div>

                <Divider :fontSize=fontSize value="HR DEPARTMENT" class="translate-y-20 font-bold divider" />
                <div class="translate-x-2 translate-y-24">
                    <employee />
                    <candidate />
                    <salary />
                    <benefit />
                    <attendance />
                    <role />
                    <leaverquest />
                    <department />
                    <contract />
                    <performancereview />
                </div>

                <Divider :fontSize=fontSize value="S&D DEPARTMENT" class="translate-y-28 font-bold divider" />
                <div class="translate-x-2 translate-y-32">
                    <Category />
                    <Customer />
                    <invoices />
                    <Orderdetail />
                    <payments />
                    <Product />
                    <Sale_reports />
                    <sale_order />
                    <Shipping />
                    <performancereview />
                </div>

                <Divider :fontSize=fontSize value="WAREHOUSE DEPARTMENT" class="translate-y-36 font-bold divider" />
                <div class="translate-x-2 translate-y-40">
                    <inventory />
                    <product_category />
                    <product />
                    <purchase_order />
                    <purchase_order_detail />
                    <stock_adjustment />
                    <stock_movement />
                    <supplier />
                    <warehouse />
                </div>
            </div>
        </div>
        <div class="w-[100%] h-full overflow-y-auto overflow-x-hidden ">
            <div class="custom-transform-2 ">
                <p class="text-5xl font-bold">Dashboard</p>
                <p class="text-sm"></p>
            </div>

            <div>
                <!-- <chart /> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/avatar/avatar.vue';
import Button from '@/components/button/button.vue';
import Divider from '@/components/divider/divider.vue';
import icon from '@/components/icon/icon.vue';
import attendance from './sidebar/hr_management/attendance.vue';
import benefit from './sidebar/hr_management/benefit.vue';
import role from './sidebar/hr_management/role.vue';
import salary from './sidebar/hr_management/salary.vue';
import candidate from './sidebar/hr_management/candidate.vue';
import employee from './sidebar/hr_management/employee.vue';
import contract from './sidebar/hr_management/contract.vue';
import department from './sidebar/hr_management/department.vue';
import leaverquest from './sidebar/hr_management/leaverquest.vue';
import performancereview from './sidebar/hr_management/performancereview.vue';
import account from './sidebar/account_management/account.vue';
import budgets from './sidebar/account_management/budgets.vue';
import financial_reports from './sidebar/account_management/financial_reports.vue';
import invoices from './sidebar/account_management/invoices.vue';
import payments from './sidebar/account_management/payments.vue';
import taxes from './sidebar/account_management/taxes.vue';
import transaction from './sidebar/account_management/transaction.vue';
import transaction_category from './sidebar/account_management/transaction_category.vue';
import Category from './sidebar/sales_and_distribution/category.vue';
import Customer from './sidebar/sales_and_distribution/customer.vue';
import Orderdetail from './sidebar/sales_and_distribution/orderdetail.vue';
import Product from './sidebar/sales_and_distribution/product.vue';
import Sale_reports from './sidebar/sales_and_distribution/sale_reports.vue';
import sale_order from './sidebar/sales_and_distribution/sale_order.vue';
import Shipping from './sidebar/sales_and_distribution/shipping.vue';
import inventory from './sidebar/warehouse_management/inventory.vue';
import product_category from './sidebar/warehouse_management/product_category.vue';
import product from './sidebar/warehouse_management/product.vue';
import purchase_order from './sidebar/warehouse_management/purchase_order.vue';
import purchase_order_detail from './sidebar/warehouse_management/purchase_order_detail.vue';
import stock_adjustment from './sidebar/warehouse_management/stock_adjustment.vue';
import stock_movement from './sidebar/warehouse_management/stock_movement.vue';
import supplier from './sidebar/warehouse_management/supplier.vue';
import warehouse from './sidebar/warehouse_management/warehouse.vue';
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


const setActive = (item: string) => {
    activeItem.value = item;
};
</script>

<style scoped lang="scss">
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

.color {
    color: white;
}

aside {
    background-color: rgba(255, 255, 255, 0) !important;
}

.custom-transform-2 {
    transform: translate(2rem, 2rem);
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