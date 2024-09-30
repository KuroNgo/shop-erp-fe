import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/dashboard/dashboard.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/not-found'
    },

    {
      path: '/',
      name: 'ERP Platform',
      component: dashboard,
      
    },

    {
      path: '/login',
      name: 'Login | ERP Platform',
      component: () => import('../views/login/loginview.vue')
    },
    
    {
      path:'/not-found',
      name: 'Not Found | ERP Platform',
      component: () => import('@/views/error/notfound.vue')
    },
    
    {
      path: '/chat', 
      name: 'Chat | ERP Platform',
      component: () => import('@/views/dashboard/sidebar/chatview.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  document.title = String(to.name)
  next()
})

router.beforeEach(()=> {
  NProgress.start();
  return true;
})

router.afterEach(()=>{
  NProgress.done();
})

NProgress.configure({ showSpinner: false });

export default router
