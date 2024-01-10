import { defineStore } from "pinia";
import { IApp, Theme, LanguageType } from "../interface/app";
import { useLoading } from "@/hooks/useLoading";
// 引入全局加载页
const { loadingShow, loadingHide } = useLoading();

export const useAppStore = defineStore({
  id: "App",
  persist: true, // 数据持久化
  state: (): IApp => ({
    theme: "light",
    language: "enUS",
    tabbarIndex: 0,
  }),
  getters: {},
  actions: {
    setTabbarIndex(data: number) {
      this.tabbarIndex = data;
    },
    loadingShow(msg: string = "") {
      loadingShow(msg);
    },
    loadingHide() {
      loadingHide();
    },
    setLanguage(language: LanguageType) {
      this.language = language;
    },
  },
});
