import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(protected router: Router) {

  }

  protected onClickBackToHome() {
    this.router.navigate(['album-list']);
  }
}
