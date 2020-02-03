import { Filter } from './../models/filter';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Patient } from '../models/patient';
import { Task } from '../models/task';
import { Problem_behaviour } from '../models/Problem_behaviour';
import { Reports } from '../models/reports';
import { EnvService } from './env.service';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public params:any;
  public currentUser:User = new User();
  public currentPatient:Patient= new Patient();
  public currentTask:Task= new Task();
  public currentFilter= new Filter();
  public currentProblem:Problem_behaviour= new Problem_behaviour();
  public currentReport:Reports= new Reports();
  public modify = false
  constructor(private env: EnvService) { }

  setCurrentUser(data){
    this.currentUser.id=data.response.id
    this.currentUser.email= data.response.email
    this.currentUser.name = data.response.name
    this.currentUser.surname = data.response.surname
    this.currentUser.user_type = data.response.user_type
    this.currentUser.telephone = data.response.telephone
    if(data.profile_pic != undefined){
      this.currentUser.profile_pic = this.env + data.profile_pic
    } else {
      this.currentUser.profile_pic = "../../assets/img/profilo.png"
    }
  }

  setCurrentFilter(data){
    
  }
}
