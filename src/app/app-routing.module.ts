import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { AuthGuard } from 'src/routing/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'album-list', loadChildren: () => import('../album-list/album-list.module').then(m => m.AlbumListModule), data: { preload: true }, canActivate: [AuthGuard] },
  { path: 'album-details', loadChildren: () => import('../album-details/album-details.module').then(m => m.AlbumDetailsModule), data: { preload: true }, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
