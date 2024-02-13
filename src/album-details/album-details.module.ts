import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HeaderModule } from 'src/common/components/header/header.module';
import { AlbumDetailsRoutingModule } from './album-details-routing.module';
import { AlbumDetailsComponent } from './album-details.component';
import { AlbumDetailsEffects } from './store/album-details-store.effects';
import { albumDetailsFeature } from './store/album-details-store.reducer';

@NgModule({
  declarations: [AlbumDetailsComponent],
  imports: [
    HeaderModule,
    CommonModule,
    AlbumDetailsRoutingModule,
    StoreModule.forFeature(albumDetailsFeature),
    EffectsModule.forFeature([AlbumDetailsEffects])
  ]
})
export class AlbumDetailsModule { }
