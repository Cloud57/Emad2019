import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedNewPazienteService {
nomeCognome;
indirizzo;
dataNascita;
altezza;
peso;
diagnosi;
  constructor() { }
}
