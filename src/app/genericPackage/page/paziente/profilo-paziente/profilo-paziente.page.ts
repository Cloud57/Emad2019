import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { Patient } from 'src/app/models/patient';
import { Location } from '@angular/common';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-profilo-paziente',
  templateUrl: './profilo-paziente.page.html',
  styleUrls: ['./profilo-paziente.page.scss'],
})
export class ProfiloPazientePage implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Mostra';
  public paziente:Patient = new Patient();
  public title:string = "Profilo paziente"
  public response;
  public role:string[] = ["Caregiver", "Terapista", "Medico"]
  constructor(private location:Location, private navCtrl: NavController, public global : GlobalService, public rubyService:RubyApiService, private env:EnvService) { 
  
  }
  

  getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
  ngOnInit() {
    this.paziente = this.global.currentPatient
    this.paziente.users_in_alliance = this.global.currentPatient.users_in_alliance
    this.setProfileIconAlleanza()
    console.log(this.paziente);
    
    if(this.global.modify){
      this.global.modify=false
      this.getPazienteUpdated()
    }

  }
  TaskListPage() {
    this.navCtrl.navigateRoot('/lista-task');
  }

  ProblemBehPage() {
    this.navCtrl.navigateRoot('/com-problema');
  }
  toggle(){
    this.show = !this.show;

   
    if(this.show)  
      this.buttonName = "Nascondi";
    else
      this.buttonName = "Mostra";
  }

  goBack(){
    if(this.global.currentUser.user_type == 2)
      this.navCtrl.navigateRoot('/doctor-home');
    else
      this.navCtrl.navigateRoot('/paziente-home');
    
  }

  modify(){
    this.global.modify=true
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  getPazienteUpdated() {
    
    this.rubyService.get_patient(this.global.currentPatient.id).subscribe(
      data => {
        console.log(data);
        this.response = data   
        this.global.currentPatient = this.response.patient
        this.global.currentPatient.alliance = this.response.patient.alliance
        this.global.currentPatient.users_in_alliance = this.response.patient.users_in_alliance
        this.paziente = this.response.patient
        this.paziente.users_in_alliance = this.response.users_in_alliance
        this.paziente.alliance = this.response.alliance
        this.setProfileIconAlleanza()
        if(this.global.currentPatient.profile_pic == undefined){
          this.global.currentPatient.profile_pic = "../../assets/img/profilo.png"
        } else {
          this.global.currentPatient.profile_pic = EnvService.API_URL +  this.global.currentPatient.profile_pic
        }
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  setProfileIconAlleanza(){
    
    for(let item of this.paziente.users_in_alliance){
      console.log("setProfile "+item.profile_pic);
      if(item.profile_pic == undefined ){
        item.profile_pic = "../../assets/img/profilo.png"
      } else if(item.profile_pic.indexOf('http') < 0 && (item.profile_pic.indexOf('assets/img/profilo.png') < 0)) {
        item.profile_pic = EnvService.API_URL +  item.profile_pic
      }
   }
  }
}
