import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import haveRoleGuard from "./auth-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
    beforeEnter: [haveRoleGuard],
  },

  {
    path: "/products",
    name: "products",
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductView.vue"),
  },

  //404 error
  {
    path: "/:pathMatch(.*)",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
