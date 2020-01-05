import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {
  public response : any = [];
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
    
    this.rubyService.get_patients().subscribe(
      data => {
        this.response = data   
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }
}
