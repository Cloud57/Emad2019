import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profilo-paziente',
  templateUrl: './profilo-paziente.page.html',
  styleUrls: ['./profilo-paziente.page.scss'],
})
export class ProfiloPazientePage implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Mostra';
  constructor(private navCtrl: NavController) { }

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
