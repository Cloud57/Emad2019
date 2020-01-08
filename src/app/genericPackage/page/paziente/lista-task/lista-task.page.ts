import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements OnInit {

  constructor(private navCtrl: NavController) { 

  }

  ngOnInit() {

  }

  inserisciTask(){
    this.navCtrl.navigateRoot('/lista-task');
  }
}
