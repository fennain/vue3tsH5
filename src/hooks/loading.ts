import { createApp, reactive } from "vue";
import myLoad from "@/components/Loading/index.vue";

export interface Cfg {
  show: boolean;
  msg: string;
}

export function useLoading() {
  const cfg = reactive<Cfg>({
    show: false,
    msg: "",
  });

  const $loading = createApp(myLoad, { cfg }).mount(
    document.createElement("div")
  );
  document.body.appendChild($loading.$el);

  const loadingShow = (msg: string = cfg.msg) => {
    // 控制显示loading的方法
    cfg.show = true;
    cfg.msg = msg;
  };

  const loadingHide = () => {
    // 控制loading隐藏的方法
    cfg.show = false;
  };
  return { loadingShow, loadingHide };
}
