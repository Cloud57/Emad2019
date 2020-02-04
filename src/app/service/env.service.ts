import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  static API_URL = 'http://167.172.215.69:80';
  constructor() { }
}
