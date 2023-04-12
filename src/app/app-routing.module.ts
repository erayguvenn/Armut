import { NgModule } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./module/home-page/pages/home/home.component";
import {GirisComponent} from "./module/home-page/pages/giris/giris.component";
import {HizmetverComponent} from "./module/home-page/pages/hizmetver/hizmetver.component";
import {YardimComponent} from "./module/home-page/pages/yardim/yardim.component";
import {UyeOlComponent} from "./module/home-page/pages/uye-ol/uye-ol.component";
import {CardsComponent} from "./module/home-page/components/cards/cards.component";
import {HizmetComponent} from "./module/home-page/pages/hizmet/hizmet.component";
import {FooterComponent} from "./module/home-page/components/footer/footer.component";
import {KullaniciComponent} from "./module/home-page/pages/kullanici/kullanici.component";
import {HesabimNavbarComponent} from "./module/home-page/components/hesabim-navbar/hesabim-navbar.component";
import {HesabimComponent} from "./module/home-page/components/hesabim/hesabim.component";
import {TeklifComponent} from "./module/home-page/pages/teklif/teklif.component";
import {WorkListComponent} from "./module/home-page/pages/work-list/work-list.component";
import {TekliflerComponent} from "./module/home-page/pages/teklifler/teklifler.component";
import {AuthGuard} from "./module/home-page/services/auth.guard";
import {ChatComponent} from "./module/home-page/pages/chat/chat.component";


const routes: Routes = [
  {
    path: 'uyeol',
    component: UyeOlComponent
  },
  {
    path: 'yardim',
    component: YardimComponent
  },
  {
    path: 'hizmetver',
    component: HizmetverComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hizmet',
    component: HizmetComponent
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
  {
    path: 'hesabim',
    component: HesabimComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teklif/:id',
    component: TeklifComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'worklist',
    component: WorkListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teklifler',
    component: TekliflerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
