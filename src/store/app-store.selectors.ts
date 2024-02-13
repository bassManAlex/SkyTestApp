import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, appStateKey } from "./app-store.reducer";

export const selectAppState = createFeatureSelector<AppState>(appStateKey);

export const selectAppStateInitialized = createSelector(
  selectAppState,
  state => state.initialized
);

export const selectAppStateAccessToken = createSelector(
  selectAppState,
  state => state.accessToken
);
