import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkListingService {
  serverUrl = "http://3.127.53.229:60001";

  constructor(private http: HttpClient) { }

  getWorkList(){
    return this.http.get(this.serverUrl+"/api/WorkListing")
  }

  setWorkListing(categoryId: number, state: string, ruleFill:string,userId:number) {
    return this.http.post(
      this.serverUrl+`/api/WorkListing/worklist`,
      { categoryId, state,ruleFill,userId},{withCredentials: true}
    )
  }
  setBid(worklistingId:number,workerId:number,price:number,message:string,accepted:boolean){
    return this.http.post(
      this.serverUrl+`/api/Bids/bids`,
      { worklistingId, workerId,price,message,accepted},{withCredentials: true}
    )
  }
  getBids(){
    return this.http.get(this.serverUrl+"/api/Bids")
  }
  getWorklistBids(id:number){
    return this.http.get(this.serverUrl+"/api/Bids/"+id)
  }

}
