import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'
import NProgress from '@/utils/nprogress'

// 路由白名单
const ROUTER_WHITE_LIST: string[] = ['/500', '/404', '/login']

export function setupPageGuard(router: Router) {
  /**
   * 路由前置守卫
   */
  router.beforeEach(async (to, from, next) => {
    console.log(to)
    const userStore = useUserStore()
    // NProgress 开始
    NProgress.start()

    // 如果是访问登陆页，没有 token 直接放行，有 token 就在当前页
    if (to.path === '/login') {
      if (!userStore.token) return next()
      else return next(from.fullPath)
    }

    //判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
    if (ROUTER_WHITE_LIST.includes(to.path ?? '')) return next()

    // 判断是否有 Token，没有重定向到 login
    // if (!userStore.token) return next('/login')

    // 动态设置标题
    const title = import.meta.env.VITE_GLOB_APP_TITLE;

    // 放行
    next()
  })
  /**
   * 路由后置守卫
   */
  router.afterEach((to) => {
    // console.log(to);
    NProgress.done()
  })
}
