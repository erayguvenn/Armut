import { Component, OnInit } from '@angular/core';
import {WorkCategoryService} from "../../services/work-category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teklif',
  templateUrl: './teklif.component.html',
  styleUrls: ['./teklif.component.scss']
})
export class TeklifComponent implements OnInit {
  workCategoryList:any[]=[]
  category:any=[]
  ruleTemplate:any[]=[]
  id:number=0
  question:string=""
  choices:string=""
  counter:number=0
  inputVisibility:boolean=false



  constructor(private workCategoryService:WorkCategoryService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number( this.route.snapshot.paramMap.get('id'))
    this.workCategory(this.counter)
  }

  workCategory(value:number){
    return this.workCategoryService.getWorkCategory().subscribe(
      data=>{
        this.workCategoryList.push(data)

        var veri=this.workCategoryList[value][this.id-1].ruleTemplate
        this.ruleTemplate  = JSON.parse(veri);
        console.log(this.ruleTemplate)
        console.log(this.workCategoryList)
        console.log(this.ruleTemplate[value])
        this.question=this.ruleTemplate[value].question
        this.choices=this.ruleTemplate[value].choices
        console.log(this.question)
        if (this.choices==""){
          this.inputVisibility=true
        }

      } ,
      err => console.log("Category verileri getirilemedi"))
  }

  setCounter() {
    this.counter+=1
    this.workCategory(this.counter)
  }
}

