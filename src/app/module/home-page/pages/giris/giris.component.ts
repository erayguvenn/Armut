import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {

  buttonClass: string = "";
  data: any;
  name: string = ""
  surname: string = ""
  phoneNumber: string = ""
  email: string = ""
  password: string = ""



  constructor(private authService:AuthService,private toastr: ToastrService   ) {

  }

  ngOnInit(): void {

  }

  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
  }

  signUpButton() {
    this.buttonClass = "right-panel-active";
  }

  signInButton() {
    this.buttonClass = "";
  }

  signUp(name:string,surname:string,phoneNumber:string,email:string,password:string) {
  this.name=name;
  this.surname=surname;
  this.phoneNumber=phoneNumber;
  this.email=email;
  this.password=password;
  this.authService.signUp(this.name,this.surname,this.phoneNumber,this.email,this.password).subscribe(data=> console.log("üye olundu"), err => console.log("Hatalı bilgiler"))
  }
  signIn(email:string,password:string) {
    this.email=email;
    this.password=password;
    this.authService.login(this.email,this.password).subscribe(data => console.log("Giriş yapıldı"), err => console.log("Hatalı bilgiler"));
  }

}
