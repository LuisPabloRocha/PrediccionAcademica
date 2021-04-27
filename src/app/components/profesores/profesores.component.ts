import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  public isCollapsed = true;
  public faUserPlus = faUserPlus;
  /**Variable para guardar los datos de un nuevo profesor */
  public profesor = {
    /**Nombre de usuario */
    "username": "",
    /**Nombre */
    "first_name": "",
    /**Apellido */
    "last_name": "",
    /**Contraseña */
    "password": ""
  }
  /**Arreglo para la lista de profesores */
  public profesores = []
  /**Variable para buscar */
  public busqueda = ""



  constructor(
    private teacherService: TeacherService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.inicializaVariables()
    this.obtenProfesores()
  }

  /**
   * Función para inicializar las variables
   */
  inicializaVariables() {
    this.profesor = {
      "username": "",
      "first_name": "",
      "last_name": "",
      "password": ""
    }
    this.profesores = []
    this.busqueda = ""
  }

  /**
   * Función para obtener los profesores
   */
  obtenProfesores() {
    this.teacherService.getTeachers(this.loginService.getToken()).subscribe(
      response => {
        if (response != null)
          this.profesores = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  /**
   * Función para registrar los profesores en el api
   */
  registraProfesor() {
    if (
      this.profesor.first_name != "" &&
      this.profesor.last_name != "" &&
      this.profesor.username != ""
    ) {
      this.teacherService.addTeacher(this.profesor, this.loginService.getToken()).subscribe(
        response => {
          this.inicializaVariables()
          this.obtenProfesores();
          this.isCollapsed = true;
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  /**
   * Función para buscar profesores en la lista
   */
  buscaProfesoresMem() {
    if (this.busqueda == "")
      this.obtenProfesores()
    else {
      this.profesores = this.profesores.filter(p =>
        p.first_name.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        p.last_name.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        p.username.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  }

}
