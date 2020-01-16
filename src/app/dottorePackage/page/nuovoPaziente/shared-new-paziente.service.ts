import { Injectable } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { Alliance } from 'src/app/models/alliance';

@Injectable({
  providedIn: 'root'
})
export class SharedNewPazienteService {
  patient:Patient = new Patient();
  alliance: Alliance[] = []
  constructor() { }
}
