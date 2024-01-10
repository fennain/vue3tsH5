import { defineStore } from "pinia";
import { IUser, IUserInfo } from "../interface/user";
import router from "@/router/index";

export const useUserStore = defineStore({
  id: "User",
  persist: true, // 数据持久化
  state: (): IUser => ({
    // 用户信息
    userInfo: {
      headImgUrl: "",
      nickname: "tourist"
    },
    token: null,
  }),
  getters: {
    getUserInfo(): IUserInfo {
      return this.userInfo;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    updateUserInfo(userInfo: Partial<IUserInfo>) {
      this.userInfo = { ...this.userInfo, ...userInfo };
    },
  },
});
