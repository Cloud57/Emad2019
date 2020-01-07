import { SharedNewPazienteService } from './../shared-new-paziente.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
   
  constructor(private navCtrl: NavController, private sharedService: SharedNewPazienteService,
              private rubyService: RubyApiService, private alertService: AlertService) { }

  ngOnInit() {
  }
  ionChange(myTabs) {
    
}
homePage() {
  this.navCtrl.navigateRoot('/doctor-home');
}
save(){
  this.rubyService.new_patient(this.sharedService.patient).subscribe(
    data => {
      this.alertService.presentToast("Paziente inserito");  
      this.homePage();
    },
    error => {
      this.alertService.presentToast("Errore nell'inserimento paziente");
      console.log(error);
    },
    () => {
     
    }
  );
}
}
