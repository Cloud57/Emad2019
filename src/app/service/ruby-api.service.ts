import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class RubyApiService {

  constructor(public http: HttpClient, public env:EnvService ) { }

  getUsers() {
    return this.http.get(this.env.API_URL+"/users.json");
  }

}
