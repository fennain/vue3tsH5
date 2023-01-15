import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import { UserStore } from "@/store/modules/user";
import NProgress from "@/utils/nprogress";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
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
        path: "/list",
        name: "list",
        component: () => import("@/views/list/index.vue"),
        meta: {
          keepAlive: false,
          title: "列表",
        },
      },
      {
        path: "/me",
        name: "me",
        component: () => import("@/views/me/index.vue"),
        meta: {
          keepAlive: true,
          title: "我的",
        },
      },
    ],
  },
];
const router = createRouter({
  // history: createWebHashHistory(),

  history: createWebHistory(),
  routes,
});
/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  console.log(to);
  const userStore = UserStore();

  // NProgress 开始
  NProgress.start();

  // 如果是访问登陆页，没有 token 直接放行，有 token 就在当前页
  if (to.path === "/login") {
    if (!userStore.token) return next();
    else return next(from.fullPath);
  }

  // 判断是否有 Token，没有重定向到 login
  if (!userStore.token) return next("/login");

  // 动态设置标题
  const title = import.meta.env.VITE_GLOB_APP_TITLE;
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;
  // 放行
  next();
});
/**
 * 路由后置守卫
 */
router.afterEach(() => {
  NProgress.done();
});
export default router;
