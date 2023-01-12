// 用户信息
export interface IUserInfo {
  name: string;
  role: string[];
}
// state
export interface IUser {
  // 用户信息
  userInfo: IUserInfo;
  count: number;
}
