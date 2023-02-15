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
const app = createApp(App);
// Toast
import "vant/es/toast/style";

// Dialog
import "vant/es/dialog/style";

// Notify
import "vant/es/notify/style";

// ImagePreview
import "vant/es/image-preview/style";

// 引入require图片路径封装
import { require } from "@/utils/require";
app.config.globalProperties.$require = require;

// 引入全局混入
import { mixin } from "@/utils/mixin";
app.mixin(mixin);

// 自定义指令
import directives from "@/directives/index";

// 挂载到 Vue 根实例
app.use(pinia).use(router).use(directives).mount("#app");
