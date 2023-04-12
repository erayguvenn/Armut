import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkCategoryService {

  serverUrl = "http://3.127.53.229:60001";

  constructor(private http: HttpClient) { }

  getWorkCategory(){
    return this.http.get(this.serverUrl+"/api/Workcategories")
  }

}
