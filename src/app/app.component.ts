import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app-store.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // private _clientID = '8eca5ef598c148a9b702abd3cce610ad';
  // private _secret = '400f119ccd6a407ba2d9fa37117f2a30';

  // private isInitialized$ = this.store.select(selectAppStateInitialized);


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.isInitialized$.subscribe(init => {
    //   if (!init) {
    //     this.store.dispatch(appStateGetAccessToken({clientId: this._clientID, secret: this._secret }));
    //   }
    // });
  }
}
