import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profilo-caregiver',
  templateUrl: './profilo-caregiver.page.html',
  styleUrls: ['./profilo-caregiver.page.scss'],
})
export class ProfiloCaregiverPage implements OnInit {
  public title:string = "Profilo Utente"
  public age:number;
  public role:string[] = ["Caregiver", "Terapista", "Medico"]
  public caregiver:User = new User();

  constructor(private navCtrl: NavController, public global : GlobalService)
 { 
    this.caregiver = global.currentUser
  }

  ngOnInit() {
  }

  logout(){
    this.global.currentUser = new User()
    this.navCtrl.navigateRoot('/');
  }
  home(){
    this.global.currentUser = new User()
    this.navCtrl.navigateRoot('/doctor-home');
  }

}
