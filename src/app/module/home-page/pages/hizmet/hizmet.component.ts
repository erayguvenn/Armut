import { Component, OnInit } from '@angular/core';
import {WorkCategoryService} from "../../services/work-category.service";

@Component({
  selector: 'app-hizmet',
  templateUrl: './hizmet.component.html',
  styleUrls: ['./hizmet.component.scss']
})
export class HizmetComponent implements OnInit {

  workCategoryList:any[]=[]
  p: number = 1;

  constructor(private workCategoryService:WorkCategoryService) { }


  ngOnInit(): void {
    this.workCategory()
  }

  workCategory(){

    return this.workCategoryService.getWorkCategory().subscribe(
      data=>{
        this.workCategoryList.push(data)
        console.log(this.workCategoryList)
      } ,
      err => console.log("Category verileri getirilemedi"))
  }
}

