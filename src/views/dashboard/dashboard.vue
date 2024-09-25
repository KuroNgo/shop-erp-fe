<template>
    <!-- Navbar -->
    <div class="bg-teal-700 h-[70px] w-full color absolute z-10">
        <div class="flex items-center justify-end nav-custom">
            <div class="grid text-right custom-transform-y">
                <label for="avatar" class=" font-bold">Ngô Hoài Phong</label>
                <label for="avatar" class="translate-y-2">Admin</label>
            </div>
            <Avatar color="#949494" icon="person" data="" size="medium" class="text-center m-2" id="avatar" />
        </div>
    </div>
    <div class="w-full h-screen flex">
        <div class="h-full w-[250px] bg-teal-100 overflow-y-auto overflow-x-hidden ">
            <div class="translate-y-20">
                <div class="translate-x-2 translate-y-2">
                    <VaSidebarItem>
                        <VaSidebarItemContent>
                            <VaIcon name="dashboard" />
                            <VaSidebarItemTitle>Dashboard</VaSidebarItemTitle>
                        </VaSidebarItemContent>
                    </VaSidebarItem>
                    <VaSidebarItem>
                        <VaSidebarItemContent>
                            <VaIcon name="analytics" />
                            <VaSidebarItemTitle>Analytics</VaSidebarItemTitle>
                        </VaSidebarItemContent>
                    </VaSidebarItem>
                </div>
                <Divider value="APP & PAGES" class="translate-y-6 font-bold" />
                <div class="translate-x-2 translate-y-10">
                    <VaSidebarItem>
                        <VaSidebarItemContent>
                            <VaIcon name="chat" />
                            <VaSidebarItemTitle>Chat</VaSidebarItemTitle>
                        </VaSidebarItemContent>
                    </VaSidebarItem>
                    <VaSidebarItem>
                        <VaSidebarItemContent>
                            <VaIcon name="list" />
                            <VaSidebarItemTitle>Todo List</VaSidebarItemTitle>
                        </VaSidebarItemContent>
                    </VaSidebarItem>
                    <VaSidebarItem>
                        <VaSidebarItemContent>
                            <VaIcon name="mail" />
                            <VaSidebarItemTitle>Mail</VaSidebarItemTitle>
                        </VaSidebarItemContent>
                    </VaSidebarItem>
                </div>

                <Divider value="ACCOUNT DEPARTMENT" class="translate-y-14 font-bold" />
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

                <Divider value="HR DEPARTMENT" class="translate-y-20 font-bold" />
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

                <Divider value="S&D DEPARTMENT" class="translate-y-28 font-bold" />
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

                <Divider value="WAREHOUSE DEPARTMENT" class="translate-y-36 font-bold" />
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

                <Divider value="SETTINGS" class="translate-y-44 font-bold" />
                <div class="translate-x-2 translate-y-48">
                    <VaSidebarItem>
                        <VaSidebarItemContent>
                            <VaIcon name="settings" />
                            <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
                        </VaSidebarItemContent>
                    </VaSidebarItem>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/avatar/avatar.vue';
import Divider from '@/components/divider/divider.vue';
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