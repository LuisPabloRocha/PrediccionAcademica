import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  closeResult = '';
  public isCollapsed = true;
  public faUserPlus = faUserPlus;
  public faTrash = faTrash;
  public faPen = faPen;
  public profSeleccionado;
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
    private loginService: LoginService,
    private modalService: NgbModal
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

  /**
   * Función para eliminar profesores en la lista
   */
   eliminaProfesor() {
    this.teacherService.deleteTeacher(this.profSeleccionado.id, this.loginService.getToken()).subscribe(
      response => {
        this.obtenProfesores()
        this.modalService.dismissAll()
      },
      error => {
        console.log(error);
      }
    )
  }

  /**
   * Función para modificar profesores en la lista
   */
   modificaProfesor() {
    this.teacherService.editTeacher(this.profSeleccionado.id, this.profSeleccionado ,this.loginService.getToken()).subscribe(
      response => {
        this.obtenProfesores()
        this.modalService.dismissAll()
      },
      error => {
        console.log(error);
      }
    )
  }

  /**
   * Funciónes del MODAL
   */
  open(content, profesor) {
    this.profSeleccionado=profesor;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-class', centered: true, animation:true},  ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.profSeleccionado = null;
    this.obtenProfesores()
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }  
  }
 

}
