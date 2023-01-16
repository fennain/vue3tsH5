// 用户信息
export interface IUserInfo {
  name: string;
  headImg: string;
}
// state
export interface IUser {
  /** 用户信息 */
  userInfo: IUserInfo;
  token: string;
}
