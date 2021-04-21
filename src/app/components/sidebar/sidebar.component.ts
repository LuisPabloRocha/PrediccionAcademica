import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faChalkboardTeacher = faChalkboardTeacher;
  faBrain = faBrain;
  faUserFriends = faUserFriends;
  faBookReader = faBookReader;
  faNetworkWired = faNetworkWired;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  title = 'angularbootstrap';
  ngOnInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  cerrarSesion() {
    this.loginService.clearToken()
    this.loginService.session = false;
    this.router.navigateByUrl('/login')
    // this.loginService.logOut(this.loginService.getToken()).subscribe(
    //   response => {
    //     console.log(response)
    //   },
    //   error => {
    //     console.log(error);

    //   }
    // )
  }
}
