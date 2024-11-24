import {createRouter, createWebHistory} from 'vue-router';
import dashboardlayout from '@/views/layout/dashboardlayout.vue';
import nonelayout from '@/views/layout/nonelayout.vue';
import accountDepartmentRoute from '@/views/departments/account/route';
import humanResourceDepartmentRoute from '@/views/departments/hr/route';
import warehouseDepartmentRoute from '@/views/departments/warehouse/route';
import saleAndDistributionDepartmentRoute from '@/views/departments/sd/route';
import NProgress from "nprogress";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            redirect: '/not-found'
        },

        {
            path: '/',
            redirect: '/dashboard'
        },

        {
            path: '/',
            component: dashboardlayout,
            children: [
                ...accountDepartmentRoute.options.routes,
                ...humanResourceDepartmentRoute.options.routes,
                ...warehouseDepartmentRoute.options.routes,
                ...saleAndDistributionDepartmentRoute.options.routes,
                {
                    path: '/dashboard',
                    name: 'Dashboard | ERP Platform',
                    component: () => import('../views/dashboard/func/dashboardview.vue')
                },

                {
                    path: '/user-settings',
                    name: 'User Settings | ERP Platform',
                    component: () => import('../views/user-settings/usersettings.vue')
                },

                {
                    path: '/chat',
                    name: 'Chat | ERP Platform',
                    component: () => import('../views/chat/chatview.vue')
                },

                {
                    path: '/to-do',
                    name: 'To-do list | ERP Platform',
                    component: () => import('../views/todo/todo.vue'),
                    children: [
                        {
                            path: ':id',
                            component: () => import('../views/todo/todo.vue')
                        }
                    ]
                },

                {
                    path: '/settings',
                    name: 'Settings | ERP Platform',
                    component: () => import('../views/settings/settings.vue')
                },
            ]
        },

        {
            path: '/login',
            component: nonelayout,
            children: [
                {
                    path: '/login',
                    name: 'Login | ERP Platform',
                    component: () => import('../views/login/loginview.vue')
                },

                {
                    path: '/not-found',
                    name: 'Not Found | ERP Platform',
                    component: () => import('@/views/error/notfound.vue')
                },
            ],
        },
    ]
});


router.beforeEach((to, from, next) => {
    const titleParts = (to.name as string).split('|');
    document.title = titleParts[0].trim();
    next();
})

router.beforeEach(() => {
    NProgress.start();
    return true;
})

router.afterEach(() => {
    NProgress.done();
})

NProgress.configure({showSpinner: false});

export default router

