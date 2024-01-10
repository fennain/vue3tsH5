import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import { setupPageGuard } from "./permission";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          keepAlive: true,
          title: "首页",
        },
      },
      {
        path: "/goodsList",
        name: "goodsList",
        component: () => import("@/views/goodsList/index.vue"),
        meta: {
          keepAlive: true,
          title: "商品列表",
        },
      },
      {
        path: "/list",
        name: "list",
        component: () => import("@/views/home/index.vue"),
        meta: {
          keepAlive: true,
          title: "列表",
        },
      },
      {
        path: "/me",
        name: "me",
        component: () => import("@/views/home/index.vue"),
        meta: {
          keepAlive: true,
          title: "我的",
        },
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/views/home/index.vue"),
  //   meta: {
  //     title: "首页",
  //   },
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/views/login/index.vue"),
  //   meta: {
  //     title: "登录",
  //   },
  // },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/exception/404/index.vue"),
  // },

  // {
  //   path: "/500",
  //   name: "500",
  //   component: () => import("@/views/exception/500/index.vue"),
  // },

  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "notFound",
  //   redirect: "/404",
  // },
];
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});
setupPageGuard(router);

export default router;
