import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {UserModel} from "../../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;
  serverUrl = "http://3.127.53.229:60001";

  constructor(private http: HttpClient, private userService: UserService, private userModel: UserModel) {
    this.checkAuthenticated();
  }

  checkAuthenticated() {
    return this.userService.getUser().toPromise().then((data:any)=>{
      this._isAuthenticated = true;
      this.userModel.setUser(data);
    }).catch((err)=>{
      this._isAuthenticated = false;
      this.userModel.setUser(null);
    });
  }

  isAuthenticated() {
    return this._isAuthenticated;
  }

  login(email: string, password: string) {
    return this.http.post(
      this.serverUrl+`/api/Auth/login`,
      { email, password},{withCredentials: true}
    ).toPromise().then((data:any)=>{
      this._isAuthenticated = true;
      return this.userService.getUser().toPromise()
    }).then((data:any)=>{
      this.userModel.setUser(data);
    }).catch((err)=>{
      this._isAuthenticated = false;
      this.userModel.setUser(null);
    })
  }

  logout() {
    return this.http.post(
      this.serverUrl+`/api/Auth/logout`,
      {},{withCredentials: true}
    ).toPromise().then((data)=>{
      this._isAuthenticated = false;
      this.userModel.setUser(null);
    })
  }
  signUp(name:string,surname:string,phoneNumber:string,email:string,password:string,usertype:string,adress:string){
    return this.http.post(
      this.serverUrl+`/api/Auth/register`,
      {name,surname,phoneNumber, email, password,usertype,adress}
    )
  }
}
