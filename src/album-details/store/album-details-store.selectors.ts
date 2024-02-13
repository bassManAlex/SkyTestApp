import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlbumDetailsState, albumDetailsStateKey } from "./album-details-store.reducer";

export const selectAlbumDetailsState = createFeatureSelector<AlbumDetailsState>(albumDetailsStateKey);

export const selectAlbumDetails = createSelector(
  selectAlbumDetailsState,
  state => state.album
);

