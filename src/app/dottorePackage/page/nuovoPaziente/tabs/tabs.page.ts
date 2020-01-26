import { SharedNewPazienteService } from './../shared-new-paziente.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { GlobalService } from 'src/app/service/global.service';
import { Patient } from 'src/app/models/patient';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
   public title:string
  constructor(private navCtrl: NavController, private sharedService: SharedNewPazienteService,
              private rubyService: RubyApiService, private alertService: AlertService,
              private global: GlobalService) { 
                sharedService.patient = new Patient();
              }

  ngOnInit() {
    if(this.global.modify){
      this.title = "Modifica paziente"
      this.sharedService.patient = this.global.currentPatient
    } else {
      this.title = "Nuovo paziente"
    }

  }
  ionChange(myTabs) {
    
}
homePage() {
  this.navCtrl.back()
}
save(){
  if(!this.global.modify) {
    var response : any = {id : "" };
    this.rubyService.new_patient(this.sharedService.patient, this.global.currentUser.id).subscribe(
      data => {
        this.alertService.presentToast("Paziente inserito");  
        response = data;
        this.insertAlliance(response.id)
      },
      error => {
        this.alertService.presentToast("Errore nell'inserimento paziente");
        console.log(error);
      },
      () => {
      
      }
    );
  } else {
    this.rubyService.mod_patient(this.sharedService.patient, this.global.currentUser.id, this.global.currentPatient.id).subscribe(
      data => {
        this.alertService.presentToast("Paziente modificato");  
        response = data;
      },
      error => {
        this.alertService.presentToast("Errore nella modifica del paziente");
        console.log(error);
      },
      () => {
      
      }
    );
  }
}

insertAlliance(patientID) {
  this.rubyService.new_alliance(this.sharedService.alliance,patientID).subscribe(
    data => {
      this.homePage();
    },
    error => {
      this.homePage();
      console.log(error);
    },
    () => {
     
    }
  );
}
}
