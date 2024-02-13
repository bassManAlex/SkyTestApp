import { createFeature, createReducer, on } from '@ngrx/store';
import { BaseState } from 'src/models/base-state';
import { albumListInitFeature, albumListResetFeature, albumListSetResult } from './album-list-store.actions';


export const albumListStateKey = 'albumListState';

export interface AlbumListState extends BaseState {
  albumList: Object | undefined;
}

export const albumListInitialState: AlbumListState = {
  albumList: undefined,
  initialized: false
};

export const albumListFeature = createFeature({
  name: albumListStateKey,
  reducer: createReducer(
    albumListInitialState,
    on(albumListInitFeature, state => ({ ...state, initialized: true })),
    on(albumListResetFeature, state => ({ ...albumListInitialState })),
    on(albumListSetResult, (state, props) => ({...state, albumList: props.result }))

  )
});
