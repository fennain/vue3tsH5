import { defineStore } from "pinia";
import { IUser, IUserInfo } from "../interface/user";
import { Login } from "@/api/interface";
import { login } from "@/api/user";
import { useRouter } from "vue-router";
import { SysteamStore } from "./systeam";

const router = useRouter();

export const UserStore = defineStore({
  id: "User",
  persist: true, // 数据持久化
  state: (): IUser => ({
    // 用户信息
    userInfo: {
      name: "test",
      headImg: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    },
    token: "",
  }),
  getters: {
    getUserInfo(): IUserInfo {
      return this.userInfo;
    },
  },
  actions: {
    /**
     * 登录
     * @param data
     * @returns
     */
    login(data: Login.ReqLoginForm) {
      return new Promise<void>((resolve, reject) => {
        login(data)
          .then((res) => {
            this.token = res.data.access_token;
            // this.userInfo = res.userInfo;
            console.log(res);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /**
     * 登出
     * @returns
     */
    logout() {
      return new Promise<void>((resolve, reject) => {
        this.$reset();
        const systeamStore = SysteamStore();
        systeamStore.$reset();
        resolve();
      });
    },
  },
});
