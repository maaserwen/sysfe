import { createAction, props } from '@ngrx/store';
import { UserInfoState } from './storeState';

// UserInfo Store
export const saveUserInfo = createAction('[Counter Component] SaveUserInfo', props<UserInfoState>());   // save
export const clearUserInfo = createAction('[Counter Component] ClearUserInfo'); // clear(logout)
