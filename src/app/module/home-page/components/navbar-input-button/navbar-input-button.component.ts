import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserModel} from "../../../../model/user.model";

@Component({
  selector: 'app-navbar-input-button',
  templateUrl: './navbar-input-button.component.html',
  styleUrls: ['./navbar-input-button.component.scss']
})
export class NavbarInputButtonComponent implements OnInit {

  userName:string = "Kullanıcı Adı";

  constructor(private authservice:AuthService,
              private usermodel:UserModel) {

  }

  ngOnInit(): void {
    if (this.isAuthenticated()){
      this.getUser();
    }
  }

  isAuthenticated(){
    return this.authservice.isAuthenticated();
  }
  logout() {
    this.authservice.logout().then(() => {
      window.location.href = '/';
    })
  }

  getUser(){
    if (this.isAuthenticated()){
      const user =this.usermodel.getUser()
      console.log(user)
      this.userName = user.name+" "+user.surname
      this.userName = this.userName.toUpperCase()
    }
  }


}
