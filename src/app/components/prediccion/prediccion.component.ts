import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PredictionService } from 'src/app/services/prediction.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as $ from 'jquery';


import { Label } from 'ng2-charts';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {
  public columns = []
  public results = [] 
  public prediction;
  public widthANN: number;
  public widthNaive: number;
  public widthRF: number;
  public widthSVM: number;
  public promedio: number;
  public resPositivo:number=0;

  constructor(
    private predictionService: PredictionService,
    private loginService: LoginService,
    private spinnerService : SpinnerService
  ) { this.prediction = null }

  ngOnInit(): void {
    this.obtenColumnas()

  }

  obtenColumnas() {
    this.predictionService.getColumns(this.loginService.getToken()).subscribe(
      response => {
        console.log(response);
        this.columns = response
        for (let i = 0; i < this.columns.length; i++) {
          this.columns[i]['data'] = ""
        }
      },
      error => {
        console.log(error);

      }
    )
  }

  obtenPrediccion() {
    this.prediction = null
    this.resPositivo=0;
    let data = {}
    this.columns.forEach(element => {
      if (element.name != "tipoED1" && element.name != "tipoPen") {
        data[element.name] = Number.parseInt(element.data)
      } else {
        data[element.name] = element.data
      }
      if (element.name == "numED1")
        data[element.name] = 1
    });

    this.predictionService.predict(data, this.loginService.getToken()).subscribe(
      response => {
        console.log(response)
        if (response != null) {
          this.prediction = response;
          this.estableceWidths();
        }
      },
      error => { console.log(error) }
    )
  }

  estableceWidths() {
    this.widthRF = this.prediction.RandomForest.SI * 100;
    this.widthANN = this.prediction.ANN.SI * 100;
    this.widthNaive = this.prediction.NaiveBayes.SI * 100;
    this.widthSVM = this.prediction.SVM.SI * 100;
    this.results.push(this.widthRF, this.widthANN, this.widthNaive, this.widthSVM);
    this.obtienePosibilidad();
    let suma = this.widthRF + this.widthANN + this.widthNaive + this.widthSVM;
    this.promedio = Math.round(suma / 4);
  }

  obtienePosibilidad(){
    console.log(this.results);
    this.results.forEach(element => {
      if(element >= 70){
        this.resPositivo+=1;
      }
    });
    if(this.prediction.Tree.SI==1){
      this.resPositivo+=1;
    }
    console.log(this.resPositivo)
    this.results = [];
  }

}