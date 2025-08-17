import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/home/Index.vue'),
    children: [
      {
        path: '/mockmanage',
        name: 'MockManage',
        component: () => import('../views/testtool/MockManage.vue'),
        children: [
          {
            path: '/mockmanage/amazonwholesale',
            name: 'AmazonWholesale',
            component: () => import('../views/testtool/mockmanage/AmazonWholesale.vue')
          }
        ]
      },
      {
        path: '/usermanage',
        name: 'UserManage',
        component: () => import('../views/sysmanage/UserManage.vue')
      },
      {
        path: '/rolemanage',
        name: 'RoleManage',
        component: () => import('../views/sysmanage/RoleManage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.ROUTER_BASE,
  routes
})

export default router
