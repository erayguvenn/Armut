import { NgModule } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./module/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./module/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
