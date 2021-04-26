import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  /**
 * Servicio para registrar un profesor
 * @param data Datos del nuevo profesor
 * @param token Token del usuario
 * @returns "teacher"
 */
  addTeacher(data, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'user/teacher', data, { headers: headers }).pipe(map(res => res));
  }
  /**
  * Servicio para modificar un profesor
  * @param pk PK de la profesor
  * @param data Datos del profesor a modificar
  * @param token Token del usuario
  * @returns "teacher"
  */
  editTeacher(pk, data, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })

    return this._http.patch(this.url + 'user/teacher/' + pk, data, { headers: headers }).pipe(map(res => res));
  }
  /**
  * Servicio para obtener un profesor
  * @param pk PK del profesor
  * @param token Token del usuario
  * @returns "teacher"
  */
  getTeacher(pk, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.get(this.url + 'user/teacher/' + pk, { headers: headers }).pipe(map(res => res));
  }
  /**
  * Servicio para eliminar un profesor
  * @param pk PK del profesor
  * @param token Token del usuario
  * @returns "teacher"
  */
  deleteTeacher(pk, token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.delete(this.url + 'user/teacher/' + pk, { headers: headers }).pipe(map(res => res));
  }
  /**
  * Servicio para obtener todos los profesoress
  * @param token Token del usuario
  * @returns "events"
  */
  getTeachers(token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.get(this.url + 'user/teacher', { headers: headers }).pipe(map(res => res));
  }
}
