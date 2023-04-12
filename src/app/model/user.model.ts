import { Injectable } from "@angular/core";
@Injectable()
export class UserModel {
  private _user:any;
  private _userId:any;
  private _worker:any;
  private _workerId:any;
  private _bidId:any;


  setUser(user:any){
    this._user = user;
    if (user != null) {
      this.setUserId(user.id);
    }
  }

  getUser(){
    return this._user;
  }
  setWorker(worker:any){
    this._worker = worker;
  }
  getWorker(){
    return this._user.worker;
  }
  setUserId(userId:any){
    this._userId = userId;
  }
  getUserId(){
    return this._userId;
  }

  //workerın user id si
  setWorkerId(workerId:any){
    this._workerId = workerId;
  }
  getWorkerId(){
    return this._workerId;
  }
  setBidId(bidId:any){
    this._bidId = bidId;
  }
  getBidId(){
    return this._bidId;
  }


}
