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
  selector: 'app-navsidebar',
  templateUrl: './navsidebar.component.html',
  styleUrls: ['./navsidebar.component.css']
})
export class NavsidebarComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faChalkboardTeacher = faChalkboardTeacher;
  faBrain = faBrain;
  faUserFriends = faUserFriends;
  faBookReader = faBookReader;
  faNetworkWired = faNetworkWired;
  public user = {
    /**Nombre de usuario */
    "username": "",
    /**Nombre */
    "first_name": "",
    /**Apellido */
    "last_name": "",
    /**Rol */
    "role": -1
  }

  constructor(
    public loginService: LoginService,
    private router: Router) { }

  title = 'angularbootstrap';
  ngOnInit(): void {
    this.obtenDatosUsuario()
    this.inicializaUsuario()
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("active");
    });
  }

  /**
  * Función para inicializar
  */
  inicializaUsuario() {
    this.user = {
      /**Nombre de usuario */
      "username": "",
      /**Nombre */
      "first_name": "",
      /**Apellido */
      "last_name": "",
      /**Rol */
      "role": -1
    }
  }

  cerrarSesion() {
    this.loginService.clearToken()
    this.loginService.clearUser()
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

  /**
 * Función para obtener los datos del usuario
 */
  obtenDatosUsuario() {
    this.loginService.whoAmI(this.loginService.getToken()).subscribe(
      response => {
        console.log(response)
        this.loginService.setUser(response)
      },
      error => { console.log(error) }
    )
  }

}
