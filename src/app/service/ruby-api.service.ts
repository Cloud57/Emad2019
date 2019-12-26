import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class RubyApiService {

  constructor(public http: HttpClient, public env:EnvService ) { }

  login(emailInput,passwordInput) {
    var login = {email :emailInput, password : passwordInput};
    return this.http.post(this.env.API_URL+"/authenticate",JSON.stringify(login), {headers: {'Content-Type': 'application/json'}});
    }

    register(form) {
      var register = {name :form.name, surname : form.surname, email : form.email,
      password: form.password, password_confirmation: form.password_confirmation,
      telephone: form.telephone, user_type:form.user_type};
      return this.http.post(this.env.API_URL+"/user/create",JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
      }

}
