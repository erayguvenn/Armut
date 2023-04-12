import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  serverUrl = "http://3.127.53.229:60001";

  constructor(private http:HttpClient) {

  }
  getWorker(userId:number){
    return this.http.get(this.serverUrl+"/api/worker/"+userId,{
      withCredentials:true
    })
  }
  getWorkerData(workerId:number){
    return this.http.get(this.serverUrl+"/api/worker?workerId="+workerId,{
      withCredentials:true
    })
  }
}
