// 用户信息
export interface IUserInfo {
  headImgUrl: string;
  nickname: string;
}
// state
export interface IUser {
  /** 用户信息 */
  userInfo: IUserInfo;
  token: string | null;
}
