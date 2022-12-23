import { Component, OnInit } from '@angular/core';
import {WorkCategoryService} from "../../services/work-category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, first} from "rxjs";
import { pickBy, identity,isEmpty } from 'lodash-es';


@Component({
  selector: 'app-hizmet',
  templateUrl: './hizmet.component.html',
  styleUrls: ['./hizmet.component.scss']
})
export class HizmetComponent implements OnInit {

  workCategoryList:any[]=[]
  p: number = 1;
  params={}
  category:any=[]
  categoryName:any=[]
  hizmetTitle:string=""
  ruleTemplate={}

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private workCategoryService:WorkCategoryService,
              ) {

    this.params={
      page:  '',

    }

  }

  ngOnInit(): void {
    this.workCategory()
    this.getCategoryName()
  }

  workCategory(){
    return this.workCategoryService.getWorkCategory().subscribe(
      data=>{
        this.workCategoryList.push(data)

        var veri=this.workCategoryList[0][7].ruleTemplate
        this.ruleTemplate  = JSON.parse(veri)
        console.log(this.ruleTemplate)
        console.log(this.workCategoryList)

        for (let catg of this.workCategoryList[0]){
          if (catg.parentId==this.getPageId()){
            this.category.push(catg)
          }
        }
        this.getCategoryName()
      } ,
      err => console.log("Category verileri getirilemedi"))
  }

  getCategoryName(){
    for (const key in this.category) {
      if (this.category.hasOwnProperty(key)) {
        length += 1;
        this.categoryName.push(this.category[key].name)
      }
    }

  }

  getPageId(){
    let sayfa=this.activatedRoute.snapshot?.queryParams?.["sayfa"];
    let parentId=0;

    switch (sayfa){
      case "temizlik":{
        parentId=1
        this.hizmetTitle="Temizlik Hizmetleri"
        break;
      }
      case "tadilat":{
        parentId=2
        this.hizmetTitle="Tadilat Hizmetleri"

        break;
      }
      case "nakliyat":{
        parentId=3
        this.hizmetTitle="Nakliyat Hizmetleri"

        break;
      }
      case "tamir":{
        parentId=4
        this.hizmetTitle="Tamir Hizmetleri"

        break;
      }
      case "özel ders":{
        parentId=5
        this.hizmetTitle="Özel Ders Hizmetleri"

        break;
      }
      case "sağlık":{
        parentId=6
        this.hizmetTitle="Sağlık Hizmetleri"

        break;
      }
      case "düğün":{
        parentId=7
        this.hizmetTitle="Düğün Hizmetleri"

        break;
      }


    }
    return parentId
  }



}

