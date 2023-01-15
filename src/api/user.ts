import request from "@/utils/request";
import { ResultData, Login } from "./interface";
export function login(
  data: Login.ReqLoginForm
): Promise<ResultData<Login.ResLogin>> {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}
