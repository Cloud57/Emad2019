import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  loginPage() {
    this.navCtrl.navigateRoot('/');
  }
  penMenu() {
    document.querySelector('ion-menu-controller')
      .open();
  }
  inserisciPaziente() {
    this.navCtrl.navigateRoot('/nuovoPaziente/tabs');
  }
}
