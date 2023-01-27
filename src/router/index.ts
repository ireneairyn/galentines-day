import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import haveRoleGuard from './auth-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
    beforeEnter: [haveRoleGuard]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: [haveRoleGuard]
  },
  {
    path: '/extra',
    name: 'extra',
    // route level code-splitting
    // this generates a separate chunk (products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "landing" */ '../views/LandingView.vue'),
    meta: {
      hideNavBar: true,
      beforeEnter: [haveRoleGuard]
      
    }
  },
  {
    path: '/products',
    name: 'products',
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },
    //404 error
    {
      path: "/:pathMatch(.*)",
      component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
