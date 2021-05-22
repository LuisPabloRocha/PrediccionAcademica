import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PredictionService } from 'src/app/services/prediction.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {
  @Input() modelo;
  @Output() actualizar = new EventEmitter();




  constructor(
    private predictionService: PredictionService,
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {

  }

  trainingModel() {
    console.log(this.modelo);
    let data = { attributes: [] }
    this.modelo.attributes.forEach(element => {
      data.attributes.push({ name: element.name, value: element.actualValue })
    });
    console.log(data);

    this.predictionService.modelPKFit(this.modelo.id, data, this.loginService.getToken()).subscribe(
      response => {
        console.log(response);
        this.actualizar.emit(true)
      },
      error => {
        console.log(error);
      }
    )
  }



}
