import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class RubyApiService {

  constructor(public http: HttpClient, public env:EnvService ) { }

  getUsers() {
    var login = {email :"usertwo@gmail.com", password : "123456" };
    return this.http.post(this.env.API_URL+"/authenticate",JSON.stringify(login), {headers: {'Content-Type': 'application/json'}});
    }

}
