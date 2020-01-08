import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-profilo-paziente',
  templateUrl: './profilo-paziente.page.html',
  styleUrls: ['./profilo-paziente.page.scss'],
})
export class ProfiloPazientePage implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Mostra';
  

  constructor(private navCtrl: NavController, public global : GlobalService) { 
      console.log(this.global.params)
  }

  ngOnInit() {
  }
  TaskListPage() {
    this.navCtrl.navigateRoot('/lista-task');
  }
  toggle(){
    this.show = !this.show;

   
    if(this.show)  
      this.buttonName = "Nascondi";
    else
      this.buttonName = "Mostra";
  }
}
