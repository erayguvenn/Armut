import { NgModule } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./module/home-page/pages/home/home.component";
import {GirisComponent} from "./module/home-page/pages/giris/giris.component";
import {HizmetverComponent} from "./module/home-page/pages/hizmetver/hizmetver.component";
import {YardimComponent} from "./module/home-page/pages/yardim/yardim.component";


const routes: Routes = [

  {
    path: 'yardim',
    component: YardimComponent
  },
  {
    path: 'hizmetver',
    component: HizmetverComponent
  },
  {
    path: 'giris',
    component: GirisComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
