import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-hesabim-navbar',
  templateUrl: './hesabim-navbar.component.html',
  styleUrls: ['./hesabim-navbar.component.scss']
})
export class HesabimNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().then(() => {
      window.location.href = '/';
    })
  }

}
