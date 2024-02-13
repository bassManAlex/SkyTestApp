import { Component, HostListener, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BaseFeatureComponent } from 'src/common/base-feature.component';
import { AlbumListDTO } from 'src/models/album-list-dto';
import { albumGetNewReleases, albumListInitFeature, albumListSearchAlbum } from './store/album-list-store.actions';
import { AlbumListState } from './store/album-list-store.reducer';
import { selectAlbumListStateAlbumList } from './store/album-list-store.selectors';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent extends BaseFeatureComponent implements OnInit, OnDestroy {

  protected albumList$ = this.store.select(selectAlbumListStateAlbumList);
  protected searchFor: string = '';

  protected displayAlbums: AlbumListDTO | undefined;

  private offset = 0;
  private limit = 25;

  constructor(injector: Injector, private router: Router, private store: Store<AlbumListState>) {
    super(injector);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.subscriptions.push(this.albumList$.subscribe(albumList => {
      if (albumList) {
        this.displayAlbums = ((albumList as any).albums) as AlbumListDTO;
        this.offset = this.displayAlbums.offset;
        this.limit = this.displayAlbums.limit;

        console.log(this.displayAlbums);
      }
    }));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMoreAlbums();
    }
  }

  protected override onFeatureSelected(): void {
    this.store.dispatch(albumListInitFeature());
  }

  protected onSearchClick(event: any) {
    this.store.dispatch(albumListSearchAlbum({ query: this.searchFor }));
  }

  private loadMoreAlbums() {
    this.offset += this.limit;
    this.store.dispatch(albumGetNewReleases({ offset: this.offset, limit: this.limit }))
  }

  protected onAlbumClick(albumId: string) {
    this.router.navigate(['album-details'], { queryParams: {id: albumId}});
  }
}
