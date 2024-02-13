import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, take } from "rxjs";
import { SpotifyService } from "src/services/spotify.service";
import { appShowError } from "src/store/app-store.actions";
import { albumGetNewReleases, albumListInitFeature, albumListSearchAlbum, albumListSetResult } from "./album-list-store.actions";

@Injectable()
export class AlbumListEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private spotifyService: SpotifyService
  ) {}

  initFeature$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(albumListInitFeature),
      map(() => albumGetNewReleases({ offset: 0, limit: 25 })),
    );
  });

  albumList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(albumGetNewReleases),
      switchMap(action => this.spotifyService.getNewReleases(action.offset!, action.limit!).pipe(
        take(1),
        map(response => albumListSetResult({ result: response })),
        catchError(error => of(appShowError({ error })))
      ))
    );
  });

  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(albumListSearchAlbum),
      switchMap(action => this.spotifyService.search(action.query!).pipe(
      take(1),
      map(response => albumListSetResult({ result: response })),
      catchError(error => of(appShowError({ error })))
      )
    ))
  });
}
