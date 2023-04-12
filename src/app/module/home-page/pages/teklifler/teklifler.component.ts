import {Component, OnInit} from '@angular/core';
import {WorkListingService} from "../../services/work-listing.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../../model/user.model";
import {WorkerService} from "../../services/worker.service";

@Component({
  selector: 'app-teklifler',
  templateUrl: './teklifler.component.html',
  styleUrls: ['./teklifler.component.scss']
})
export class TekliflerComponent implements OnInit {
  worklistBids: any[] = []
  userId: number = 1
  user: any = []


  constructor(private worklistservice: WorkListingService,
              private userservice: UserService,
              private router: Router,
              private usermodel: UserModel,
              private workerService: WorkerService) {
  }


  ngOnInit(): void {
    this.getUser()

  }

  getBid(worklistid: number) {
    return this.worklistservice.getWorklistBids(worklistid).subscribe(
      d => {
        const data = d as any[];
        this.worklistBids.push(data);
       // console.log(this.worklistBids);
      },
      err => console.log("Teklifler getirilemedi"))
  }

  getWorklistAll() {
    return this.worklistservice.getWorkList().subscribe(
      d => {
        const data = d as any[];
        //this.worklistBids = data;
        console.log(data);
        this.worklistUserControl(data)
      },
      err => console.log("Teklifler getirilemedi"))
  }


  getUser() {
    this.user = this.usermodel.getUser();
    console.log(this.user)
    this.getWorklistAll()
  }

  worklistUserControl(data: any) {
    for (let item of data) {
      if (item.userId == this.usermodel.getUserId()) {
        this.getBid(item.id)
      }
    }
  }


  chatRoute(workerId: number, bidId: number) {

    this.usermodel.setBidId(bidId);
    this.workerService.getWorkerData(workerId).subscribe(d => {
      const data = d as any;
      this.usermodel.setWorkerId(data.user.id);
      console.log(data.user.id)
    })
    console.log(workerId)
    console.log(bidId)


    this.router.navigate(['/chat']);
  }
}
