import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFeatureComponent } from 'src/common/base-feature.component';
import { CommonUtilities } from 'src/common/utils';
import { albumDetailsInitFeature } from './store/album-details-store.actions';
import { AlbumDetailsState } from './store/album-details-store.reducer';
import { selectAlbumDetails } from './store/album-details-store.selectors';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent extends BaseFeatureComponent implements OnInit, OnDestroy {

  protected albumDetails$ = this.store.select(selectAlbumDetails);
  constructor(injector: Injector, private store: Store<AlbumDetailsState>) {
    super(injector);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  protected override onFeatureSelected(): void {
    this.store.dispatch(albumDetailsInitFeature());
  }

  protected convertDuration(duration: number) {
    return CommonUtilities.msToMm(duration);
  }

  protected convertReleaseDate(releaseDate: string) {
    return CommonUtilities.stringToDate(releaseDate);
  }

}
