import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Patient } from '../models/patient';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public params:any;
  public currentUser:User;
  public currentPatient:Patient;
  constructor() { }
}
