import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://3.127.53.229:60001";

  constructor(private http:HttpClient) {

  }
  getUser(){
    return this.http.get(this.serverUrl+"/api/user/me",{
      withCredentials:true
    })
  }
  getUserValue(id:number){
    return this.http.get(this.serverUrl+"/api/user/"+id,{
      withCredentials:true
    })
  }



}
