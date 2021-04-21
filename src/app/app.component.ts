import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PrediccionAcademica';
  // sesion: boolean;
  constructor(
    public loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Inicializamos la variable de sesión en falso
    this.loginService.session = false;
    //Si no hay un token guardado
    if (this.loginService.getToken() == null) {
      //Redirigimos al login
      this.router.navigateByUrl('/login')
    }
    else {
      //Hacemos true la variable
      this.loginService.session = true;
    }
  }
}
