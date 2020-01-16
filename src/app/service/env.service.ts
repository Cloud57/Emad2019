import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://172.19.189.27:3000';
  constructor() { }
}
