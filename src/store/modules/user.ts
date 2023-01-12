import { defineStore } from "pinia";
import { IUser, IUserInfo } from "../interface/user";

export const userStore = defineStore({
  id: "user",
  persist: true,
  state: (): IUser => ({
    // 用户信息
    userInfo: {
      name: "test",
      role: [],
    },
    count: 0,
  }),
  getters: {
    getUserInfo(): IUserInfo {
      return this.userInfo;
    },
  },
  actions: {
    setUserInfo(data: IUserInfo) {
      this.userInfo = data;
    },
    setCount(data: number) {
      console.log(data);
      this.count = data;
    },
  },
});
