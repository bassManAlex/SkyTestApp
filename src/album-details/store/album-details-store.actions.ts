import { createAction, props } from '@ngrx/store';
import { AlbumExtendedDTO } from 'src/models/album-dto';

export enum AlbumDetailsStateActionIds {
  initApplication = '[ALBUM DETAILS] Init feature',
  resetApplication = '[ALBUM DETAILS] Reset feature',
  setDetails = '[ALBUM LIST] Set album details',
};

export const albumDetailsInitFeature = createAction(AlbumDetailsStateActionIds.initApplication);
export const albumDetailsResetFeature = createAction(AlbumDetailsStateActionIds.resetApplication);
export const albumDetailsSetDetails = createAction(AlbumDetailsStateActionIds.setDetails,
  props<{ album: AlbumExtendedDTO | undefined}>())
