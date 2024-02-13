import { HttpErrorResponse } from '@angular/common/http';
import { Params } from '@angular/router';
import { Action, createAction, props } from '@ngrx/store';
import { AccessTokenDTO } from 'src/models/access-token-dto';

export enum AppStateActionsIds {
  initApplication = '[APP STATE] Init application',
  resetApplication = '[APP STATE] Reset application',
  getAccessToken = '[APP STATE] Get Access Token',
  setAccessToken = '[APP STATE] Set Access Token',
  showError = '[APP STATE] Show error',
  navigateTo = '[APP STATE] Navigate to page'
};

export const appStateInitApplication = createAction(AppStateActionsIds.initApplication);
export const appStateResetApplication = createAction(AppStateActionsIds.resetApplication);

export const appStateGetAccessToken = createAction(AppStateActionsIds.getAccessToken,
  props<{ clientId: string | undefined, secret: string | undefined }>()
);
export const appStateSetAccessToken = createAction(AppStateActionsIds.setAccessToken,
  props<{ accessToken: AccessTokenDTO | undefined }>()
);
export const appShowError = createAction(AppStateActionsIds.showError,
  props<{ error: HttpErrorResponse, onCloseAction?: Action }>()
);
export const appRouteToPage = createAction(AppStateActionsIds.navigateTo,
  props<{ path: string | undefined, params?: Params }>()
);
