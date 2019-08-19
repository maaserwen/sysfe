export interface UserInfoState {
  username: string;
  id: string;
  photo?: string;
  isAdmin: boolean;
}

export const InitUserInfo: UserInfoState = {
  username: null,
  id: null,
  photo: null,
  isAdmin: null
};

export type StoreStates = UserInfoState;
