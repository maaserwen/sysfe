import { UserInfoState } from '../reducers/storeState';

export interface ResInterface {
  code: number;
  status: string;
  message: string;
  data?: any;
}

export interface UserInfoRes extends ResInterface {
  data?: {
    token: string;
    user: UserInfoState;
  };
}
