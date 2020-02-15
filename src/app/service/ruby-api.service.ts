import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Storage } from '@ionic/storage';
import { Alliance } from 'src/app/models/alliance';

@Injectable({
  providedIn: 'root'
})
export class RubyApiService {
  userToken: string;
  constructor(public http: HttpClient, public env:EnvService,
    private storage: Storage ) { 
  }


  login(emailInput,passwordInput) {
    var login = {email :emailInput.toLowerCase(), password : passwordInput};
    return this.http.post(EnvService.API_URL+"/authenticate",JSON.stringify(login), {headers: {'Content-Type': 'application/json'}});
    }

    register(form, imageName, imageBlob) {
      let formData = new FormData();
      formData.append('user[name]', form.name);
      formData.append('user[surname]', form.surname);
      formData.append('user[email]', form.email.toLowerCase());
      formData.append('user[password]', form.password);
      formData.append('user[password_confirmation]', form.password_confirmation);
      formData.append('user[telephone]', form.telephone);
      formData.append('user[user_type]',  form.user_type);
      if(imageBlob != null)
        formData.append('profile_pic', imageBlob,imageName)
      return this.http.post(EnvService.API_URL+"/users",formData);  
    }

    mod_utente(imageName, imageBlob, id) {
      let formData = new FormData();
      formData.append('user[id]', id);
      formData.append('profile_pic', imageBlob,imageName)
      return this.http.put(EnvService.API_URL+"/users/"+id,formData);  
    }

      new_patient(form, id,imageName, imageBlob) {
        let formData = new FormData();
        formData.append('patient[name]', form.name);
        formData.append('patient[surname]', form.surname);
        formData.append('patient[address]', form.address);
        formData.append('patient[birth_date]', form.birth_date);
        formData.append('patient[height]', form.height);
        formData.append('patient[weight]', form.weight);
        formData.append('patient[diagnosis]',  form.diagnosis);
        formData.append('patient[user_id]',  id);
        if(imageBlob != null)
          formData.append('profile_pic', imageBlob,imageName)
        return this.http.post(EnvService.API_URL+"/patients",formData);  
      }

      mod_patient(form, id, patientID, imageName, imageBlob) {
        let formData = new FormData();
        formData.append('patient[name]', form.name);
        formData.append('patient[surname]', form.surname);
        formData.append('patient[address]', form.address);
        formData.append('patient[birth_date]', form.birth_date);
        formData.append('patient[height]', form.height);
        formData.append('patient[weight]', form.weight);
        formData.append('patient[diagnosis]',  form.diagnosis);
        formData.append('patient[user_id]',  id);
        if(imageBlob != null)
          formData.append('profile_pic', imageBlob,imageName)
        return this.http.put(EnvService.API_URL+"/patients/"+patientID,formData);
      }

      new_task(form, autonomy, id, src,imgBlob, filenameVideo, audioBlob, filenameAudio) {
          let formData = new FormData();
          formData.append('task[name]', form.name);
          formData.append('task[description]', form.description);
          formData.append('task[duration]', form.duration);
          formData.append('task[autonomy]', autonomy);
          formData.append('task[is_task_active]',  "true");
          formData.append('task[patient_id]',  id);
          formData.append('task[icon]', src)
          
          if(imgBlob != null)
            formData.append('media_files[]', imgBlob,filenameVideo);
          if(audioBlob != null)
            formData.append('media_files[]', audioBlob,filenameAudio);
          return this.http.post(EnvService.API_URL+"/tasks",formData);
        }

        mod_task(form,autonomy ,id, src, taskId,imgBlob, filenameVideo, audioBlob, filenameAudio) {
           let formData = new FormData();
           formData.append('task[name]', form.name);
           formData.append('task[description]', form.description);
           formData.append('task[duration]', form.duration);
           formData.append('task[autonomy]', autonomy);
           formData.append('task[patient_id]',  id);
           formData.append('task[icon]', src)
           if(imgBlob != null)
           formData.append('media_files[]', imgBlob,filenameVideo);
         if(audioBlob != null)
           formData.append('media_files[]', audioBlob,filenameAudio);
          return this.http.put(EnvService.API_URL+"/tasks/"+taskId,formData);
        }

        new_prom_beh(form, id) {
          var register = { problem_behavior : {
            name :form.name, description : form.description, frequency : form.frequency,
            intensity: form.intensity, duration: form.duration, antecedent : form.antecedent,
            behavior: form.behavior, consequence: form.consequence, date : form.date,
            patient_id: id}
           };
          return this.http.post(EnvService.API_URL+"/problem_behaviors",JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
        }

        mod_prom_beh(form, id, problemId) {
          var register = { problem_behavior : {
            name :form.name, description : form.description, frequency : form.frequency,
            intensity: form.intensity, duration: form.duration, antecedent : form.antecedent,
            behavior: form.behavior, consequence: form.consequence, date : form.date,
            patient_id: id}
           };
          return this.http.put(EnvService.API_URL+"/problem_behaviors/"+problemId,JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
        }

        new_alliance(allianceForm:Alliance[],patientID) {
          var ids: number[] = [];
          for(let item of allianceForm){
            ids.push(item.user_id)
          }
          var register = { alliance : {
            user_ids :ids, patient_id : patientID}
           };
          return this.http.post(EnvService.API_URL+"/alliances",JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
        }

        mod_alliance(allianceForm:Alliance[],allianceID) {
          var ids: number[] = [];
          for(let item of allianceForm){
            ids.push(item.user_id)
          }
          var register = { alliance : {
            user_ids :ids}
           };
           console.log(register)
          return this.http.put(EnvService.API_URL+"/alliances/"+allianceID,JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
        }

      new_Report(form, id_user,id_task) {
          var register = { report : {
            description : form.description, duration : form.duration,
            date_execution: form.date_execution, is_executed: form.is_executed,
            task_id: id_task, user_id: id_user}
           };
          return this.http.post(EnvService.API_URL+"/reports.json",JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
        }

      mod_Report(form, idReport) {
        var register = { report : {
          description : form.description, duration : form.duration,
          date_execution: form.date_execution, is_executed: form.is_executed}
         };
        return this.http.put(EnvService.API_URL+"/reports/"+idReport+".json",JSON.stringify(register), {headers: {'Content-Type': 'application/json'}});
      }

      get_patients(id) {
          return this.http.get(EnvService.API_URL+"/users/search_patient.json?id="+id, {headers: {'Content-Type': 'application/json'}});
      }
      get_patients_alliance(id) {
        return this.http.get(EnvService.API_URL+"/users/search_patient_alliance.json?id="+id, {headers: {'Content-Type': 'application/json'}});
    }

      get_tasks(id) {
          return this.http.get(EnvService.API_URL+"/patients/search_task.json?id="+id, {headers: {'Content-Type': 'application/json'}});
        }

      get_task(id) {
          return this.http.get(EnvService.API_URL+"/tasks/"+id, {headers: {'Content-Type': 'application/json'}});
      }

      get_problem(id) {
          return this.http.get(EnvService.API_URL+"/patients/search_problem_behavior?id="+id, {headers: {'Content-Type': 'application/json'}});
      }


      get_users() {
          return this.http.get(EnvService.API_URL+"/users.json", {headers: {'Content-Type': 'application/json'}});
      }

      get_patient(id) {
        return this.http.get(EnvService.API_URL+"/patients/"+id+".json", {headers: {'Content-Type': 'application/json'}});
    }

      get_report(id) {
        return this.http.get(EnvService.API_URL+"/tasks/search_report.json?id="+id, {headers: {'Content-Type': 'application/json'}});
      }

      delete_media_task(idTask, idMedia) {
        return this.http.delete(EnvService.API_URL+"/media_tasks/"+idTask+"/"+idMedia);
      }

      delete_patient(id) {
        return this.http.delete(EnvService.API_URL+"/patients/"+id);
      }

      delete_comp(id) {
        return this.http.delete(EnvService.API_URL+"/problem_behaviors/"+id);
      }

      delete_task(id) {
        return this.http.delete(EnvService.API_URL+"/tasks/"+id);
      }

      delete_report(id) {
        return this.http.delete(EnvService.API_URL+"/reports/"+id);
      }

}
