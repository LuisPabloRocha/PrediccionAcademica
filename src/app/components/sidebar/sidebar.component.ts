import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

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
  
  constructor() { }

  title = 'angularbootstrap';
   ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
