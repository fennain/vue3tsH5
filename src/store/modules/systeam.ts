import { defineStore } from "pinia";
import { ISysteam } from "../interface/systeam";

export const SysteamStore = defineStore({
  id: "Systeam",
  persist: true,
  state: (): ISysteam => ({
    // tabbar下标
    tabbarIndex: 0,
  }),
  getters: {},
  actions: {
    setTabbarIndex(data: number) {
      this.tabbarIndex = data;
    },
  },
});
