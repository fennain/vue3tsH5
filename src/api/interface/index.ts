// * 请求响应参数(不包含data)
export interface Result {
  code: string;
  msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data: T;
}

// * 分页响应参数
export interface ResPage<T> {
  datalist: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// * 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// * 登录模块
export namespace Login {
  // * 登录请求参数
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  // * 登录响应参数
  export interface ResLogin {
    token: string;
  }
}

// * 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}