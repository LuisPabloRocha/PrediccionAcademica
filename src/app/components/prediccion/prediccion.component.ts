import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PredictionService } from 'src/app/services/prediction.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';


import { Label } from 'ng2-charts';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {
  public columns = []
  public prediction;
  constructor(
    private predictionService: PredictionService,
    private loginService: LoginService
  ) { }

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
    let data = {}
    this.columns.forEach(element => {
      if (element.name != "tipoED1" && element.name != "tipoPen") {
        data[element.name] = Number.parseInt(element.data)
      } else {
        data[element.name] = element.data
      }
    });
    
    this.predictionService.predict(data, this.loginService.getToken()).subscribe(
      response => {
        console.log(response)
        if (response.answer!=null) {
          this.prediction = response.answer[0]
        }
        console.log(this.prediction)
      },
      error => { console.log(error) }
    )
  }

}