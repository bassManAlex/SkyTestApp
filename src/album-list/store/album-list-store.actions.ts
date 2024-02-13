import { createAction, props } from '@ngrx/store';

export enum AlbumListStateActionsIds {
  initApplication = '[ALBUM LIST] Init feature',
  resetApplication = '[ALBUM LIST] Reset feature',
  searchAlbums = '[ALBUM LIST] Search for album',
  getNewReleases = '[ALBUM LIST] Get new reseases',
  setResultAlbums = '[ALBUM LIST] Set Result list of album',
};

export const albumListInitFeature = createAction(AlbumListStateActionsIds.initApplication);
export const albumListResetFeature = createAction(AlbumListStateActionsIds.resetApplication);
export const albumListSearchAlbum = createAction(AlbumListStateActionsIds.searchAlbums,
  props<{ query: string | undefined }>());
export const albumListSetResult = createAction(AlbumListStateActionsIds.setResultAlbums,
  props<{ result: Object | undefined }>());
export const albumGetNewReleases = createAction(AlbumListStateActionsIds.getNewReleases,
  props<{ offset: number | undefined, limit: number | undefined }>());
