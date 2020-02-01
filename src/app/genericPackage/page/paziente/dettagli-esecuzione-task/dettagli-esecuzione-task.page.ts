import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dettagli-esecuzione-task',
  templateUrl: './dettagli-esecuzione-task.page.html',
  styleUrls: ['./dettagli-esecuzione-task.page.scss'],
})
export class DettagliEsecuzioneTaskPage implements OnInit {
  title = "Report del task"
  constructor(public global:GlobalService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back()
  }

  modify(){
    this.global.modify=true
    this.navCtrl.navigateRoot('/esecuzione-task');
  }

}
