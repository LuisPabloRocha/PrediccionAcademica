import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {
  @Input() modelo;
  



  constructor() {
   
   }

  ngOnInit(): void {

  }

  trainingModel(){
   

  }



}
