import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PredictionService } from 'src/app/services/prediction.service';

//ICONOS 
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})
export class AlgoritmoComponent implements OnInit {
  public modelos;
  idAlgoritmo: number;
  faTools = faTools;
  faChartLine = faChartLine;
  faQuestion = faQuestion;

  constructor(
    private predictionService: PredictionService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.obtenModelos()
  }

  obtenModelos() {
    this.predictionService.getModel(this.loginService.getToken()).subscribe(
      response => {
        console.log(response);
        this.modelos = response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
