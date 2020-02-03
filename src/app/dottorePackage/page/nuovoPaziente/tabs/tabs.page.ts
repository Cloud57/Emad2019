import { SharedNewPazienteService } from './../shared-new-paziente.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { GlobalService } from 'src/app/service/global.service';
import { Patient } from 'src/app/models/patient';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
   public title:string
   spinner: any;

  constructor(private navCtrl: NavController, private sharedService: SharedNewPazienteService,
              private rubyService: RubyApiService, private alertService: AlertService,
              private global: GlobalService,private loading:LoadingController) { 
                sharedService.patient = new Patient();
                sharedService.patient
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
  if(this.global.modify)
    this.navCtrl.navigateRoot('/profilo-paziente');
  else
    this.navCtrl.navigateRoot('/doctor-home');
}
save(){
  var response : any = {id : "" };
  if(!this.global.modify) {
    this.loading.create({
      message: "Attendi..."
    }).then((overlay) => {
      this.spinner = overlay
      this.spinner.present();

    this.rubyService.new_patient(this.sharedService.patient, this.global.currentUser.id, this.sharedService.imageName, this.sharedService.imageBlob).subscribe(
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
    });
  } else {
      this.loading.create({
        message: "Attendi..."
      }).then((overlay) => {
        this.spinner = overlay
        this.spinner.present();

    this.rubyService.mod_patient(this.sharedService.patient, this.global.currentUser.id, this.global.currentPatient.id, this.sharedService.imageName, this.sharedService.imageBlob).subscribe(
      data => {
        this.alertService.presentToast("Paziente modificato");  
        response = data;
        this.modifyAlliance(this.global.currentPatient.alliance.id)
      },
      error => {
        this.alertService.presentToast("Errore nella modifica del paziente");
        console.log(error);
      },
      () => {
      
      }
    );
  });
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

modifyAlliance(allianceID) {
  console.log(allianceID)
  this.rubyService.mod_alliance(this.sharedService.alliance,allianceID).subscribe(
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
