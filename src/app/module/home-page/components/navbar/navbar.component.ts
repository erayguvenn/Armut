import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sideNavVis:string="width: 0px;"

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    this.sideNavVis ="width: 350px;"
  }
  closeNav(){
    this.sideNavVis ="width: 0px;"

  }
}
