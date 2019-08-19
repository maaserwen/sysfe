import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { saveUserInfo, clearUserInfo } from './actions';
import * as StoreStates from './storeState';

export const UserInfoReducer: ActionReducer<StoreStates.UserInfoState> = createReducer(StoreStates.InitUserInfo,
  on(saveUserInfo, (state, user) => ({...state, user})),
  on(clearUserInfo, state => StoreStates.InitUserInfo)
);

export interface State {
  userInfo: StoreStates.UserInfoState;
}

export const reducers: ActionReducerMap<State> = {
  userInfo: UserInfoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
