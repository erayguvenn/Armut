import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {HomePageRoutingModule} from "./home-page-routing.module";
<<<<<<< HEAD
import { CardComponent } from './components/card/card.component';
=======
import { NavbarInputButtonComponent } from './components/navbar-input-button/navbar-input-button.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
>>>>>>> 234cc559b8fd1f341da5274c8cae8fe3c4f6a093



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    CardComponent
=======
    NavbarInputButtonComponent,
    FormSearchComponent
>>>>>>> 234cc559b8fd1f341da5274c8cae8fe3c4f6a093
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
