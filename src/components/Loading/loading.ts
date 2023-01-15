import { createApp, reactive } from "vue";
import myLoad from "./index.vue";

export interface Cfg {
  show: boolean;
  msg: string;
}
const cfg: Cfg = reactive({
  show: false,
  msg: "",
});

const $loading = createApp(myLoad, { cfg }).mount(
  document.createElement("div")
);
const loading = {
  show(msg: string = cfg.msg) {
    // 控制显示loading的方法
    cfg.show = true;
    cfg.msg = msg;
    document.body.appendChild($loading.$el);
  },

  hide() {
    // 控制loading隐藏的方法
    cfg.show = false;
  },
};
export { loading };
