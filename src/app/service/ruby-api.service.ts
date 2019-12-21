import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class RubyApiService {

  constructor(public http: HttpClient, public env:EnvService ) { }

  getUsers() {
    const params = new HttpParams();
    params.set('email', "usertwo@gmail.com");
    params.set('password', "123456");
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    header.append('Access-Control-Allow-Origin', '*')

    return this.http.post(this.env.API_URL+"/authenticate",params, {
      headers: header});
    }

}
