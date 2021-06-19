export interface UserInfoState {
  username: string;
  id: string;
  role: string;
}

export const InitUserInfo: UserInfoState = {
  username: null,
  id: null,
  role: null
};

export type StoreStates = UserInfoState;
