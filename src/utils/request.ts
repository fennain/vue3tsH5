import axios from "axios";
import { showToast } from "vant";
import { UserStore } from "@/store/modules/user";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  timeout: 30000, // request timeout
  // withCredentials:true
});
// 请求拦截
service.interceptors.request.use(
  (config: any) => {
    const userStore = UserStore();
    if (userStore.token) {
      config.headers["Authorization"] = userStore.token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: any) => {
    const res = response.data;
    if (res.code == 200) {
      return res;
    } else {
      showToast(res.msg);
      return Promise.reject("error");
    }
  },
  (error: any) => {
    if (error.message === "Network Error") {
      showToast("服务器错误，请稍后重试");
      return Promise.reject(error);
    }
    console.log("err" + error); // for debug

    showToast(error.message);

    return Promise.reject(error);
  }
);

export default service;
