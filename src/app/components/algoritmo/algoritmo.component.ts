import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})
export class AlgoritmoComponent implements OnInit {

  idAlgoritmo: number;
  faTools = faTools;
  faQuestion = faQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
