import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  loginPage(){
    this.navCtrl.navigateRoot('/');
  }
  HomePage() {
    this.navCtrl.navigateRoot('/doctor-home');
  }

}
