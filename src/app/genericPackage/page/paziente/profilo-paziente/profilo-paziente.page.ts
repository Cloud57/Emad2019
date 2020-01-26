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
  constructor(private location:Location, private navCtrl: NavController, public global : GlobalService) { 
      this.paziente = global.currentPatient
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
    this.location.back();
  }

  modify(){
    this.global.modify=true
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
}
