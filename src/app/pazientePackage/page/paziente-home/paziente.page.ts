import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.page.html',
  styleUrls: ['./paziente.page.scss'],
})
export class PazientePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  TaskListPage() {
    this.navCtrl.navigateRoot('/lista-task');
  }
  alleanzaPage(){
    this.navCtrl.navigateRoot('alleanza');
  }
  comportamentiProblemaPage(){
    
  }
}
