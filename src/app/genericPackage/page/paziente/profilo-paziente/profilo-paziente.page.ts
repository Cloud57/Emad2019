import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { Patient } from 'src/app/models/patient';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profilo-paziente',
  templateUrl: './profilo-paziente.page.html',
  styleUrls: ['./profilo-paziente.page.scss'],
})
export class ProfiloPazientePage implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Mostra';
  public paziente:Patient = new Patient();
  public age:number;
  public title:string = "Profilo paziente"
  public response;
  constructor(private location:Location, private navCtrl: NavController, public global : GlobalService, public rubyService:RubyApiService) { 
      this.paziente = global.currentPatient
      this.paziente.user_in_alliance = global.currentPatient.user_in_alliance
      this.age = this.getAge(this.paziente.birth_date)
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
    console.log(this.paziente.user_in_alliance);
    
    if(this.global.modify){
      this.global.modify=false
      this.getPazienteUpdated()
    }

    console.log(this.paziente.user_in_alliance);
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
    if(this.global.currentUser.user_type >0)
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
        this.paziente = this.response.patient
        this.paziente.user_in_alliance = this.response.user_in_alliance
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }
}
