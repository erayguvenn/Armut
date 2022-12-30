import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkListingService {

  constructor(private http: HttpClient) { }

  getWorkList(){
    return this.http.get("https://localhost:7058/api/WorkListing")
  }

  setWorkListing(categoryId: number, state: string, ruleFill:string) {
    return this.http.post(
      `https://localhost:7058/api/WorkListing/worklist`,
      { categoryId, state,ruleFill},{withCredentials: true}
    )
  }

}
