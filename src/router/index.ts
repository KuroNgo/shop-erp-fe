import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/dashboard/dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard | ERP Platform',
      component: dashboard
    },
    {
      path: '/login',
      name: 'Login | ERP Platform',
      component: () => import('../views/login/loginview.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found | ERP Platform',
      component: () => import('@/views/error/notfound.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = String(to.name)
  next()
})


export default router
