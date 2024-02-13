import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, take } from "rxjs";
import { SpotifyService } from "src/services/spotify.service";
import { appShowError } from "src/store/app-store.actions";
import { albumDetailsInitFeature, albumDetailsSetDetails } from "./album-details-store.actions";

@Injectable()
export class AlbumDetailsEffects {

  constructor(
    private actions$: Actions,
    private route: ActivatedRoute,
    private store: Store,
    private spotifyService: SpotifyService
  ) {}

  albumDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(albumDetailsInitFeature),
      map(_ => this.route.snapshot.queryParams['id']),
      switchMap(albumId => this.spotifyService.getAlbum(albumId).pipe(
        take(1),
        map(response => albumDetailsSetDetails({ album: response as any })),
        catchError(error => of(appShowError({ error })))
      ))
    );
  });
}
