import { Filter } from './../models/filter';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Patient } from '../models/patient';
import { Task } from '../models/task';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public params:any;
  public currentUser:User = new User();
  public currentPatient:Patient= new Patient();
  public currentTask:Task= new Task();
  public currentFilter= new Filter();
  constructor() { }

  setCurrentUser(data){
    this.currentUser.id=data.response.id
    this.currentUser.email= data.response.email
    this.currentUser.name = data.response.name
    this.currentUser.surname = data.response.surname
    this.currentUser.user_type = data.response.user_type
    

  }

  setCurrentFilter(data){
    
  }
}
