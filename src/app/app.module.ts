import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageRoutingModule } from './module/home-page/home-page-routing.module';
import {HomePageModule} from "./module/home-page/home-page.module";
import {HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {AlertModule} from "ngx-bootstrap/alert";
import {CookieService} from "ngx-cookie-service";
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthService} from "./module/home-page/services/auth.service";
import {UserModel} from "./model/user.model";

export function startAuthentication(authService: AuthService) {
  return () => authService.checkAuthenticated();
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageRoutingModule,
    HomePageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot(),
    NgxPaginationModule,

  ],
  providers: [CookieService, UserModel, {
    provide: APP_INITIALIZER,
    useFactory: startAuthentication,
    multi: true,
    deps: [AuthService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
