import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-tab-dettagli',
  templateUrl: './tab-dettagli.page.html',
  styleUrls: ['./tab-dettagli.page.scss'],
})
export class TabDettagliPage implements OnInit {
num: number;

  constructor(public global:GlobalService, public nvCtrl:NavController) { }

  ngOnInit() {
    this.global.currentTask.autonomy;
    
    //35,65,100
    if(this.global.currentTask.autonomy==1){
      this.num=35;
    }
    else if(this.global.currentTask.autonomy==2){
      this.num=65;
    }
    else if(this.global.currentTask.autonomy==3){
      this.num=100;
    }

  }
  goStorico(){
    this.nvCtrl.navigateRoot('/storico-esecuzione-task');
  }

}
