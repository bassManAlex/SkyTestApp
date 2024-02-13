import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-feature',
  template: ''
})
export abstract class BaseFeatureComponent implements OnInit, OnDestroy {

  protected subscriptions = new Array<Subscription>();

  constructor(injector: Injector) {
  }

  ngOnInit(): void {
    this.onFeatureSelected();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  protected abstract onFeatureSelected(): void

}
