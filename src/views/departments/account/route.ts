import { createRouter, createWebHistory } from 'vue-router'

const accountDepartmentRoute = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/account',
      name: 'Account | ERP Platform',
      component:  () => import('@/views/departments/account/account/account.vue'),
      
    },

    {
      path: '/budget',
      name: 'Budget | ERP Platform',
      component: () => import('@/views/departments/account/budget/budget.vue')
    },

    {
      path: '/financial-report',
      name: 'Financial Report | ERP Platform',
      component: () => import('@/views/departments/account/financialreport/financialreport.vue')
    },

    {
      path: '/invoice',
      name: 'Invoice | ERP Platform',
      component: () => import('@/views/departments/account/invoice/invoice.vue')
    },

    {
      path: '/payment',
      name: 'Payment | ERP Platform',
      component: () => import('@/views/departments/account/payment/payment.vue')
    },
    
    {
      path:'/taxes',
      name: 'Taxes | ERP Platform',
      component: () => import('@/views/departments/account/taxes/taxes.vue')
    },
    
    {
      path: '/transaction', 
      name: 'Transaction | ERP Platform',
      component: () => import('@/views/departments/account/transaction/transaction.vue')
    },

    {
        path: '/transaction-category', 
        name: 'Transaction Category | ERP Platform',
        component: () => import('@/views/departments/account/transactioncategory/transactioncategory.vue')
      },
  ]
})

export default accountDepartmentRoute 