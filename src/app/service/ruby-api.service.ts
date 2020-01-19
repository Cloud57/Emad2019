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

        new_task(form, id, src) {
          var register = { task : {
            name :form.name, description : form.description, duration : form.duration,
            autonomy: form.autonomy, icon: src,
            patient_id: id}
           };
          return this.http.post(this.env.API_URL+"/tasks",JSON.stringify(register));
        }

        new_prom_beh(form, id) {
          var register = { problem_behavior : {
            name :form.name, description : form.description, frequency : form.frequency,
            intensity: form.intensity, duration: form.duration, antecedent : form.antecedent,
            behavior: form.behavior, consequence: form.consequence, date : form.date,
            patient_id: id}
           };
          return this.http.post(this.env.API_URL+"/problem_behaviors",JSON.stringify(register));
        }

      get_patients(id) {
          return this.http.get(this.env.API_URL+"/users/search_patient?id="+id);
      }

      get_tasks(id) {
          return this.http.get(this.env.API_URL+"/patients/search_task?id="+id);
        }

      get_problem(id) {
          return this.http.get(this.env.API_URL+"/patients/search_problem_behavior?id="+id);
      }


      get_users() {
          return this.http.get(this.env.API_URL+"/users");
      }


}
