import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app-store.reducer';
import { selectAppStateAccessToken } from 'src/store/app-store.selectors';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.url.includes('/api/token')) {
      return next.handle(req); // Ignora l'interceptor per questa richiesta
    }

    const token$ = this.store.select(selectAppStateAccessToken);
    let bearer: string | undefined;

    token$.subscribe(token => bearer = token?.access_token );
    if (bearer) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${bearer}`,
        },
      });

      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
