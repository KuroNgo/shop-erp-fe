import { createRouter, createWebHistory } from 'vue-router'

const humanResourceDepartmentRoute = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/attendance',
      name: 'Attendance | ERP Platform',
      component:  () => import('@/views/departments/hr/attendance/attendance.vue'),
      
    },

    {
      path: '/benefit',
      name: 'Benefit | ERP Platform',
      component: () => import('@/views/departments/hr/benefit/benefit.vue')
    },

    {
      path: '/candidate',
      name: 'Candidate | ERP Platform',
      component: () => import('@/views/departments/hr/candidate/candidate.vue')
    },

    {
      path: '/contracts',
      name: 'Contracts | ERP Platform',
      component: () => import('@/views/departments/hr/contracts/contracts.vue')
    },

    {
      path: '/departments',
      name: 'Departments | ERP Platform',
      component: () => import('@/views/departments/hr/departments/departments.vue')
    },
    
    {
      path:'/employees',
      name: 'Employees | ERP Platform',
      component: () => import('@/views/departments/hr/employees/employee.vue')
    },
    
    {
      path: '/leaverequest', 
      name: 'Leave Request | ERP Platform',
      component: () => import('@/views/departments/hr/leaverequest/leaverequest.vue')
    },

    {
        path: '/performance-review', 
        name: 'Performance Review | ERP Platform',
        component: () => import('@/views/departments/hr/performancereview/performancereview.vue')
    },

    {
      path: '/role', 
      name: 'Role | ERP Platform',
      component: () => import('@/views/departments/hr/role/role.vue')
    },

    {
      path: '/salary', 
      name: 'Salary | ERP Platform',
      component: () => import('@/views/departments/hr/salary/salary.vue')
    },

    {
      path: '/user', 
      name: 'User | ERP Platform',
      component: () => import('@/views/departments/hr/user/user.vue')
    },
  ]
})

export default humanResourceDepartmentRoute 