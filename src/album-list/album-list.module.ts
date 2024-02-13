import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HeaderModule } from 'src/common/components/header/header.module';
import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { AlbumListEffects } from './store/album-list-store.effects';
import { albumListFeature } from './store/album-list-store.reducer';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [
    HeaderModule,
    CommonModule,
    FormsModule,
    AlbumListRoutingModule,
    StoreModule.forFeature(albumListFeature),
    EffectsModule.forFeature([AlbumListEffects])
  ]
})
export class AlbumListModule { }
