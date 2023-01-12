import { createApp } from "vue";
// import "./style.css";
// import "amfe-flexible";
import App from "./App.vue";
import { pinia } from "./store/index";
import router from "./router/index";
const app = createApp(App);
// 挂载到 Vue 根实例
app.use(pinia).use(router).mount("#app");
