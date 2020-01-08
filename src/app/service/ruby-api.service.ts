import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RubyApiService {
  userToken: string;
  constructor(public http: HttpClient, public env:EnvService,
    private storage: Storage ) { 
  }


  login(emailInput,passwordInput) {
    var login = {email :emailInput, password : passwordInput};
    return this.http.post(this.env.API_URL+"/authenticate",JSON.stringify(login), {headers: {'Content-Type': 'application/json'}});
    }

    register(form) {
      var register = {user : {
        name :form.name, surname : form.surname, email : form.email,
        password: form.password, password_confirmation: form.password_confirmation,
        telephone: form.telephone, user_type:form.user_type}
       };
      return this.http.post(this.env.API_URL+"/users",JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
      }

      new_patient(form, id) {
        var register = { patient : {
          name :form.name, surname : form.surname, address : form.address,
          birth_date: form.birth_date, height: form.height,
          weight: form.weight, diagnosis: form.diagnosis, user_id: id}
         };
        return this.http.post(this.env.API_URL+"/patients",JSON.stringify(register));
        }

        get_patients(id) {
          return this.http.get(this.env.API_URL+"/users/search_user?id="+id);
          }

}
