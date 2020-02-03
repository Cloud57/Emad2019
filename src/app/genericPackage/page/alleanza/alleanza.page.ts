import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-alleanza',
  templateUrl: './alleanza.page.html',
  styleUrls: ['./alleanza.page.scss'],
})
export class AlleanzaPage implements OnInit {
public title:string="Alleanza";
  constructor(public global:GlobalService) { }
  public role:string[] = ["Caregiver", "Terapista", "Medico"]
  ngOnInit() {
    console.log(this.global.currentPatient);
     
  }

}
