// 扩展全局属性
// https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
export {};
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    keepAlive?: boolean;
    // 每个路由都必须声明
    title: string;
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    /** vite处理路径 */
    $require: (key: string) => string;
  }
}