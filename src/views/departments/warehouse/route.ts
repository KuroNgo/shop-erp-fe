import { createRouter, createWebHistory } from 'vue-router'

const warehouseDepartmentRoute = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inventory',
      name: 'Inventory | ERP Platform',
      component:  () => import('@/views/departments/warehouse/inventory/inventory.vue'),
      
    },

    {
      path: '/product-category',
      name: 'Product category | ERP Platform',
      component: () => import('@/views/departments/warehouse/productcategory/productcategory.vue')
    },

    {
      path: '/purchase-order',
      name: 'Purchase Order | ERP Platform',
      component: () => import('@/views/departments/warehouse/purchaseorder/purchaseorder.vue')
    },

    {
      path: '/purchase-order-detail',
      name: 'Purchase Order Detail | ERP Platform',
      component: () => import('@/views/departments/warehouse/purchaseorderdetail/purchaseorderdetail.vue')
    },

    {
      path: '/stock-adjustment',
      name: 'Stock Adjustment | ERP Platform',
      component: () => import('@/views/departments/warehouse/stockadjustment/stockadjustment.vue')
    },
    
    {
      path:'/stock-movement',
      name: 'Stock Movement | ERP Platform',
      component: () => import('@/views/departments/warehouse/stockmovement/stockmovement.vue')
    },
    
    {
      path: '/supplier', 
      name: 'Supplier | ERP Platform',
      component: () => import('@/views/departments/warehouse/supplier/supplier.vue')
    },

    {
      path: '/warehouse', 
      name: 'Warehouse | ERP Platform',
      component: () => import('@/views/departments/warehouse/warehouse/warehouse.vue')
    },
  ]
})

export default warehouseDepartmentRoute 