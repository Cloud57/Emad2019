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
      this.getToken();
  }

   // this will get called once with constructor execution:
   getToken() {
    this.storage.get('user').then((val) => {
      if(val != undefined){
      console.log("ruby"+val);
      this.userToken=JSON.parse(val).auth_token
      
      console.log("ruby"+this.userToken);
    }
      }
    );
  };

  getHeaderToken(){
    const headers = new HttpHeaders().set('Authorization', this.userToken);
    headers.append('Content-Type', 'application/json')
      return headers
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

      new_patient(form) {
        var register = { patient : {
          name :form.name, surname : form.surname, address : form.address,
          birth_date: form.birth_date, height: form.height,
          weight: form.weight, diagnosis: form.diagnosis}
         };
        return this.http.post(this.env.API_URL+"/patients",JSON.stringify(register), {headers: this.getHeaderToken()});
        }

        get_patients() {
          return this.http.get(this.env.API_URL+"/patients",{headers: this.getHeaderToken()});
          }

}
