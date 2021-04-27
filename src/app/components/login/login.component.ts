import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //#region Variables
  /**Variable con los datos del usuario */
  public user = {
    /**Nombre de usuario */
    "username": "",
    /**Nombre */
    "first_name": "",
    /**Apellido */
    "last_name": "",
    /**Contraseña */
    "password": ""
  }
  //#endregion
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Inicializamos los datos del usuario
    this.inicializaUsuario()
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
      /**Contraseña */
      "password": ""
    }
  }

  /**
   * Función para iniciar sesión
   */
  iniciarSesion() {
    this.user.first_name = undefined
    this.user.last_name = undefined
    if (this.user.username != "" && this.user.password != "") {
      //Iniciamos sesión
      this.loginService.login(this.user).subscribe(
        response => {
          //Si en la respuesta contiene el token
          if (response.token != null) {
            //Lo guardamos
            this.loginService.setToken(response.token)
            //Actualizamos el inicio de sesión
            this.loginService.session = true;
            //Enrutamos al login
            this.router.navigateByUrl('/home');
          }
        },
        error => {
          console.log(error);
          this.user.password = ""
        }
      )
    }
  }

}
