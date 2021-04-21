import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;
  public session: boolean;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
    this.session = false;
  }

  /**
 * Servicio para iniciar sesión
 * @param data Datos necesarios para iniciar sesión
 * @returns "token"
 */
  login(data): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    data = JSON.stringify(data)
    return this._http.post(this.url + 'auth/login', data, { headers: headers }).pipe(map(res => res));
  }

  /**
   * Servicio para cerrar sesión
   * @param token Token del usuario logeado
   * @returns 
   */
  logOut(token): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    })
    return this._http.post(this.url + 'auth/logout', { headers: headers }).pipe(map(res => res));
  }

  /**
  * Función para obtener el token del usuario del sessionStorage
  * @returns "token"
  */
  getToken() {
    //Obtenemos el token del usuario del sessionStorage
    return JSON.parse(sessionStorage.getItem('token'))
  }
  /**
  * Función para guardar el token del usuario en el sessionStorage
  * @param token Token del usuario
  */
  setToken(token) {
    //Guardamos el token del usuario en el sessionStorage
    sessionStorage.setItem('token', JSON.stringify(token));
  }
  /**
   * Función para eliminar el token del sesión storage
   */
  clearToken() {
    //Borramos el token del usuario del sessionStorage
    sessionStorage.removeItem('token');
  }
}
