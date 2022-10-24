import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {HomePageRoutingModule} from "./home-page-routing.module";
import { NavbarInputButtonComponent } from './components/navbar-input-button/navbar-input-button.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { CardsComponent } from './components/cards/cards.component';
import { HizmetlerLinkComponent } from './components/hizmetler-link/hizmetler-link.component';
import { GirisComponent } from './pages/giris/giris.component';
import { HizmetverComponent } from './pages/hizmetver/hizmetver.component';
import { YardimComponent } from './pages/yardim/yardim.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NavbarInputButtonComponent,
    FormSearchComponent,
    CardsComponent,
    HizmetlerLinkComponent,
    GirisComponent,
    HizmetverComponent,
    YardimComponent

  ],
  exports: [
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule

  ]
})
export class HomePageModule { }
