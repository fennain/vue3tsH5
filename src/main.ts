import { createApp, watch } from "vue";
import App from "./App.vue";
import { pinia } from "./store/index";
import router from "./router/index";
// 窗口改变时重新为html设置font-size
// import "amfe-flexible"; 如果不打算适配pc，可以用此插件并注释以下setRem代码
import { setRem } from "@/utils/rem";
import { useWindowSize } from "@vant/use";
setRem();
const { width, height } = useWindowSize();
watch([width, height], () => {
  // onsize
  setRem();
});
//
// Toast
import "vant/es/toast/style";

// Dialog
import "vant/es/dialog/style";

// Notify
import "vant/es/notify/style";

// ImagePreview
import "vant/es/image-preview/style";
const app = createApp(App);
// 挂载到 Vue 根实例
app.use(pinia).use(router).mount("#app");
