import {Component, OnInit} from '@angular/core';
import {WorkListingService} from "../../services/work-listing.service";
import {set} from "lodash-es";

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
  worklist:any=[]
  bidValue={}


  constructor(private workListService: WorkListingService) {
  }

  ngOnInit(): void {
    this.getWorkList()


  }

  setRuleFill(){
    for (let item of this.worklist){
      item.ruleFill=JSON.parse(item.ruleFill)
    }
    console.log(this.worklist)
  }

  getWorkList() {

    return this.workListService.getWorkList().subscribe(d => {
      const data = d as Object[];
        this.worklist=data

        console.log(this.worklist[0].ruleFill)
        console.log(this.worklist)
        console.log(data[0])
      this.setRuleFill()

      },
      err => console.log("iş listesi getirilemedi"))
  }

  sendBid() {
    const input = document.querySelector('input') as HTMLInputElement;
    const value = input.value;
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const taValue = textarea.value;
    this.bidValue={
      bid:value,
      message:taValue
    }

    console.log(this.bidValue)

  }
}
