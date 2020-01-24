import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedFilterService {
  frequenza = {
    1:"1 volata al giorno",
    2:"2 volte al giorno",
    3:"più di due volte"
  };
  intensita = {
    1:"Bassa",
    2:"Media",
    3:"Alta"
  };
  durata = {
    1:"2 minuti",
    2:"tra 2 e 5 minuti",
    3:"più di 5 minuti"
  };
  filter:string;
  valueFilter:string;
  constructor() { }
}
