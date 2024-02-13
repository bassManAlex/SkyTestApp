import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appStateGetAccessToken } from 'src/store/app-store.actions';
import { AppState } from 'src/store/app-store.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  protected form = new FormGroup({
    clientId: new FormControl<string>(''),
    secretId: new FormControl<string>('')
  });

  constructor(private store: Store<AppState>) {

  }

  protected onClickAuthorize() {
    this.store.dispatch(appStateGetAccessToken({clientId: this.form.value.clientId!, secret: this.form.value.secretId! }));
  }
}
