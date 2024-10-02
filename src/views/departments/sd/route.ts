import { createRouter, createWebHistory } from 'vue-router'

const saleAndDistributionDepartmentRoute = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/category',
      name: 'Category | ERP Platform',
      component:  () => import('@/views/departments/sd/cateogory/category.vue'),
      
    },

    {
      path: '/customer',
      name: 'Customer | ERP Platform',
      component: () => import('@/views/departments/sd/customer/customer.vue')
    },

    {
      path: '/invoice',
      name: 'Invoice | ERP Platform',
      component: () => import('@/views/departments/sd/invoice/invoice.vue')
    },

    {
      path: '/order-detail',
      name: 'Order Detail | ERP Platform',
      component: () => import('@/views/departments/sd/orderdetail/orderdetail.vue')
    },

    {
      path: '/sale-order',
      name: 'Sale Order | ERP Platform',
      component: () => import('@/views/departments/sd/saleorder/saleorder.vue')
    },

    {
      path: '/sale-report',
      name: 'Sale Report | ERP Platform',
      component: () => import('@/views/departments/sd/salereport/salereport.vue')
    },
    
    {
      path:'/shipping',
      name: 'Shipping | ERP Platform',
      component: () => import('@/views/departments/sd/shipping/shipping.vue')
    },
    
    {
      path: '/payment', 
      name: 'Payment | ERP Platform',
      component: () => import('@/views/departments/sd/payment/payment.vue')
    },

    {
        path: '/product', 
        name: 'Product | ERP Platform',
        component: () => import('@/views/departments/sd/product/product.vue')
    },
  ]
})

export default saleAndDistributionDepartmentRoute 