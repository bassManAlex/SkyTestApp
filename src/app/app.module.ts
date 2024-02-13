import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlbumDetailsModule } from 'src/album-details/album-details.module';
import { AlbumListModule } from 'src/album-list/album-list.module';
import { LoginModule } from 'src/login/login.module';
import { BearerInterceptor } from 'src/routing/bearer.interceptor';
import { AppStateEffects } from 'src/store/app-store.effects';
import { appReducer } from 'src/store/app-store.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    AlbumListModule,
    AlbumDetailsModule,

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ appState: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AppStateEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
