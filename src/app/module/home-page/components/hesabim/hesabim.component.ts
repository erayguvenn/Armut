import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../services/auth.service";
import {UserModel} from "../../../../model/user.model";


@Component({
  selector: 'app-hesabim',
  templateUrl: './hesabim.component.html',
  styleUrls: ['./hesabim.component.scss']
})
export class HesabimComponent implements OnInit {

  user: any
  name: any
  surname: any
  telNo: any
  email: any
  sifre: any
  adres: any

  constructor(private userService: UserService,
              private userModel:UserModel,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public cookie: CookieService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getUser()

  }

  getUser() {
    this.user = this.userModel.getUser();
    console.log(this.user)
    this.name = this.user.name
    this.surname = this.user.surname
    this.telNo = this.user.phoneNumber
    this.email = this.user.email
    this.sifre = this.user.password

  }

}
