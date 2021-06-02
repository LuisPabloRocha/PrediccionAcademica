import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PredictionService } from 'src/app/services/prediction.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {
  @Input() modelo;
  @Output() actualizar = new EventEmitter();
  closeResult: string;
  @ViewChild('content') myModal: any;


  constructor(
    private predictionService: PredictionService,
    private loginService: LoginService,
    private spinnerService: SpinnerService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit(): void {

  }

  trainingModel() {
    //console.log(this.modelo);
    let data = { attributes: [] }
    this.modelo.attributes.forEach(element => {
      // console.log(element);
      let s = ""
      s.replace("<class \'", "")
      let type = element.dataType.replace("<class \'", "").replace("'>", "")
      // console.log(type);
      switch (type) {
        case "tuple":

          break;
        case "str":
          element.actualValue = element.actualValue.toString()
          break;
        case "float":
          element.actualValue = Number.parseFloat(element.actualValue)
          break;
        case "int":
          element.actualValue = Number.parseInt(element.actualValue);
          break;
        case "bool":
          switch (element.actualValue.toString().toLowerCase()) {
            case "true":
              element.actualValue = true
              break;
            case "false":
              element.actualValue = false
              break;
            default:
              element.actualValue = false
              break;
          }
        default:
          break;
      }

      data.attributes.push({ name: element.name, value: element.actualValue })
    });
    console.log(data);

    this.predictionService.modelPKFit(this.modelo.id, data, this.loginService.getToken()).subscribe(
      response => {
        console.log(response)
        this.actualizaModelo()
      },
      error => {
        console.log(error);
      }
    )
  }

  muestraModal() {
    this.actualizar.emit(true)
    this.open(this.myModal)
    setTimeout(() => {
      this.modalService.dismissAll()
    },
      7000);
  }

  actualizaModelo() {
    this.predictionService.getModelPK(this.modelo.id, this.loginService.getToken()).subscribe(
      response => {
        this.modelo.score = response.score;
        this.muestraModal()
      },
      error => {
        console.log(error);
      }
    )
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-class', centered: true, animation: true, size: 'sm' },).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
