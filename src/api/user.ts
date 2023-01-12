import request from "@/utils/request";
import { Login } from "./interface";
export function login(data: Login.ReqLoginForm) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}
