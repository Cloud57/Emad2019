import { Injectable } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class SharedNewPazienteService {
  patient:Patient = new Patient();
  constructor() { }
}
