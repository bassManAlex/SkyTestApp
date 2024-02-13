import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app-store.reducer';
import { selectAppStateAccessToken } from 'src/store/app-store.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token: string | undefined;
    this.store.select(selectAppStateAccessToken).subscribe(accessToken => {
      token = accessToken?.access_token;
    });

    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
}

