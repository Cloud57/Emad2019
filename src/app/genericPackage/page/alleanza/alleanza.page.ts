import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';

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
     for(let item of this.global.currentPatient.users_in_alliance){
        if(item.profile_pic == undefined){
          item.profile_pic = "../../assets/img/profilo.png"
        } else {
          item.profile_pic = EnvService.API_URL +  item.profile_pic
        }
     }
   
  }

}
