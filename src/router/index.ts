import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/view/Home.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/list",
    name: "list",
    component: () => import("@/view/List.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/me",
    name: "me",
    component: () => import("@/view/Me.vue"),
    meta: {
      keepAlive: true,
    },
  },
];
const router = createRouter({
  // history: createWebHashHistory(),

  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});
export default router;
