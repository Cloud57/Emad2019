import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {

  constructor(private navCtrl: NavController,
    public rubyService: RubyApiService) { }

  ngOnInit() {
    this.getListaPazienti()
  }
  loginPage() {
    this.navCtrl.navigateRoot('/');
  }
  penMenu() {
    document.querySelector('ion-menu-controller')
      .open();
  }
  inserisciPaziente() {
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
  ComProblema() {
    this.navCtrl.navigateRoot('/com-problema');
  }
  homeDoctor() {
    this.navCtrl.navigateRoot('/doctor-home');
  }

  getListaPazienti() {
    var response : any = { id :"", name : "", surname: "", address: "", birth_date: "", height: "", weight: "", diagnosis: ""};
    this.rubyService.get_patients().subscribe(
      data => {
        response = data   
        console.log(JSON.stringify(response))
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }
}
