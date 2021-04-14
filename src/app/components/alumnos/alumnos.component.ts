import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  public alumnos: Array<any>;

  
  constructor() {
    this.alumnos = [
      {nombre: "Luis Pablo Rocha", matricula:252102, generacion: 2016,carrera:'Informática',semestre:'Decimo'},
      {nombre: "Jacob Loredo de la Rosa",matricula:232422,generacion: 2016, carrera:'Computación',semestre:'Decimo'},
      {nombre: "Raúl Bautista Robles", matricula:254322,generacion: 2016,carrera:'Computación',semestre:'Decimo'},
      {nombre: "Miguel Ángel Méndez Orta",matricula:23643,generacion: 2016,carrera:'Computación',semestre:'Decimo'},
      {nombre: "Luis Alberto López Romero", matricula:23458,generacion: 2016,carrera:'Computación',semestre:'Decimo'},
    ];
   }

  ngOnInit(): void {
  }

}
