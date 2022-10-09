import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {HomePageRoutingModule} from "./home-page-routing.module";
import { CardComponent } from './components/card/card.component';
import { NavbarInputButtonComponent } from './components/navbar-input-button/navbar-input-button.component';
import { FormSearchComponent } from './components/form-search/form-search.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CardComponent,
    NavbarInputButtonComponent,
    FormSearchComponent

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
