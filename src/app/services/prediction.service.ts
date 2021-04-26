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

  getColumns(token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.get(this.url + 'prediction/columns', { headers: headers }).pipe(map(res => res)); //get -> post , columns -> fit 
  }
  predict(data, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'prediction/predict', data, { headers: headers }).pipe(map(res => res));
  }
}
