import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

  }
  getUser(){
    return this.http.get("https://localhost:7058/api/user/me",{
      withCredentials:true
    })
  }

}
