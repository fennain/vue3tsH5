import { createPinia } from "pinia";

//引入持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
