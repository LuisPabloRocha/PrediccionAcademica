import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  /**
   * Función para obtener las columnas
   * @param token Token del usuario logeado
   * @returns Columnas
   */
  getColumns(token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.get(this.url + 'prediction/columns', { headers: headers }).pipe(map(res => res));
  }
  /**
   * Función para obtener los modelos
   * @param token Token del usuario logeado
   * @returns Modelos
   */
  getModel(token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.get(this.url + 'prediction/model', { headers: headers }).pipe(map(res => res));
  }
  /**
   * Función para obtener los modelos
   * @param pk PK del modelo
   * @param token Token del usuario logeado
   * @returns Modelo
   */
  getModelPK(pk, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.get(this.url + 'prediction/model/' + pk, { headers: headers }).pipe(map(res => res));
  }
  /**
   * Función para ajustar un modelo
   * @param pk PK del modelo
   * @param data Datos del modelo
   * @param token Token del usuario logeado
   * @returns Modelo
   */
  modelPKFit(pk, data, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'prediction/model/' + pk + '/fit', data, { headers: headers }).pipe(map(res => res));
  }
  /**
   * Función para realizar la predicción con todos los modelos
   * @param data Datos de la predicción
   * @param token Token del usuario logeado
   * @returns Predicción
   */
  predict(data, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'prediction/predict', data, { headers: headers }).pipe(map(res => res));
  }
  /**
   * Función para realizar la predicción con un modelo especifico
   * @param data Datos de la predicción
   * @param token Token del usuario logeado
   * @returns Predición
   */
  predictPK(data, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'prediction/predict/pk', data, { headers: headers }).pipe(map(res => res));
  }
  /**
   * Versión anterior
   * Función para ajustar todos los modelos
   * @param token Token del usuario logeado
   * @returns Modelos
   * @deprecated
   */
  fit(token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'prediction/fit', { headers: headers }).pipe(map(res => res));
  }
}
