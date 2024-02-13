import { createFeature, createReducer, on } from '@ngrx/store';
import { AlbumExtendedDTO } from 'src/models/album-dto';
import { BaseState } from 'src/models/base-state';
import { albumDetailsInitFeature, albumDetailsResetFeature, albumDetailsSetDetails } from './album-details-store.actions';


export const albumDetailsStateKey = 'albumDetailsState';

export interface AlbumDetailsState extends BaseState {
  album: AlbumExtendedDTO | undefined;
}

export const albumDetailsInitialState: AlbumDetailsState = {
  album: undefined,
  initialized: false
};

export const albumDetailsFeature = createFeature({
  name: albumDetailsStateKey,
  reducer: createReducer(
    albumDetailsInitialState,
    on(albumDetailsInitFeature, state => ({ ...state, initialized: true })),
    on(albumDetailsResetFeature, state => ({ ...albumDetailsInitialState })),
    on(albumDetailsSetDetails, (state, props) => ({...state, album: props.album}))
  )
});
