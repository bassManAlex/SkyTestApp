import { createReducer, on } from '@ngrx/store';
import { AccessTokenDTO } from 'src/models/access-token-dto';
import { appStateInitApplication, appStateResetApplication, appStateSetAccessToken } from './app-store.actions';


export const appStateKey = 'appState';

export interface AppState {
  accessToken: AccessTokenDTO | undefined;
  initialized: boolean | undefined;
}

export const initialState: AppState = {
  accessToken: undefined,
  initialized: false
};

export const appReducer = createReducer(
  initialState,
  on(appStateInitApplication, state => ({ ...state, initialized: true })),
  on(appStateResetApplication, state => ({ ...initialState })),
  on(appStateSetAccessToken, (state, props): AppState => ({...state, accessToken: props.accessToken})),
);
