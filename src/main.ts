import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import { pinia } from "./store/index";
// custom directives
import directives from "@/directives/index";

import '@/styles/lib/tailwind.css'
import '@/styles/global.scss'

import { setDomWidth } from "@/hooks/useBasicLayout";
setDomWidth();
window.onresize = function () {
  setDomWidth();
};

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

app.use(directives).use(pinia).use(router).mount('#app')
