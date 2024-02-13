import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, take, tap } from "rxjs";
import { SpotifyService } from "src/services/spotify.service";
import { appRouteToPage, appShowError, appStateGetAccessToken, appStateSetAccessToken } from "./app-store.actions";

@Injectable()
export class AppStateEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private spotifyService: SpotifyService
  ) {}

  authorize$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appStateGetAccessToken),
      mergeMap(action => this.spotifyService.getAccessToken(action.clientId!, action.secret!).pipe(
        take(1),
        tap(response => this.store.dispatch(appStateSetAccessToken({ accessToken: response }))),
        map(_ => appRouteToPage({ path: 'album-list' })),
        catchError(error => of(appShowError({ error })))
      ))
    );
  });

  navigateTo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appRouteToPage),
      take(1),
      tap(action => {
        if (action.params) {
          this.router.navigate([action.path!, { queryParams: action.params! }])
        } else {
          this.router.navigate([action.path!])
        }
      })
    );
  });

  showError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appShowError),
      take(1),
      tap(error => console.log('API Call error', error))
    )});
}
