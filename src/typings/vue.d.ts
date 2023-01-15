// 扩展全局属性
// https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
export {};
declare module "vue" {
  interface ComponentCustomProperties {
    $require: (key: string) => string;
    testMixin: () => void;
  }
}
