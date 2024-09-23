import { createRouter, createWebHistory } from 'vue-router'
import loginview from '@/views/login/loginview.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: loginview
    },
    {
      path: '/login',
      name: 'Login | ERP Platform',
      component: () => import('../views/login/loginview.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = String(to.name)
  next()
})


export default router
