import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlbumListState, albumListStateKey } from "./album-list-store.reducer";

export const selectAlbumListState = createFeatureSelector<AlbumListState>(albumListStateKey);

export const selectAlbumListStateAlbumList = createSelector(
  selectAlbumListState,
  state => state.albumList
);

