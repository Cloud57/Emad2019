import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {
  public response : any = [];
  public loading = true;
  title = "Lista pazienti"
  constructor(private navCtrl: NavController,
    public rubyService: RubyApiService, public globalService:GlobalService, public env:EnvService, public alertController: AlertController) {
    }

     async presentAlertConfirm(patient) {
      if(this.globalService.currentUser.user_type == 2){
        const alert = await this.alertController.create({
          header: 'Attenzione!',
          message: 'Vuoi cancellare questo paziente?',
          buttons: [
            {
              text: 'Annulla',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                
              }
            }, {
              text: 'Conferma',
              handler: () => {
                this.deletePatient(patient)
              }
            }
          ]
        });
    
        await alert.present();
      }
    }

  ngOnInit() {
    if(this.globalService.currentUser.user_type ==2)
      this.getListaPazientiForMedico()
    else
      this.getListaPazientiForCaregiver()
  }
  loginPage() {
    this.navCtrl.navigateRoot('/');
  }
  penMenu() {
    document.querySelector('ion-menu-controller')
      .open();
  }
  inserisciPaziente() {
    this.globalService.modify = false;
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
  ComProblema() {
    this.navCtrl.navigateRoot('/com-problema');
  }
  homeDoctor() {
    this.navCtrl.navigateRoot('/doctor-home');
  }

  getListaPazientiForMedico() {
    
    this.rubyService.get_patients(this.globalService.currentUser.id).subscribe(
      data => {
        console.log(data);
        this.response = data   
        for(let item of this.response){
          if(item.patient.profile_pic == undefined){
            item.patient.profile_pic = "../../assets/img/profilo.png"
          } else {
            item.patient.profile_pic = EnvService.API_URL +  item.patient.profile_pic
          }
        }
      },
      error => {
        console.log(error);
      },
      () => {
        this.loading=false;
      }
    );
  }

  getListaPazientiForCaregiver() {
    
    this.rubyService.get_patients_alliance(this.globalService.currentUser.id).subscribe(
      data => {
        console.log(data);
        this.response = data   
        for(let item of this.response){
          if(item.patient.profile_pic == undefined){
            item.patient.profile_pic = "../../assets/img/profilo.png"
          } else {
            item.patient.profile_pic = EnvService.API_URL +  item.patient.profile_pic
          }
        }
      },
      error => {
        console.log(error);
      },
      () => {
        this.loading=false;
      }
    );
  }

  openDetail(patient) {
    console.log(this.globalService.currentUser)
    if(this.globalService.currentUser.user_type ==2) {
      console.log(patient);
      
      this.globalService.currentPatient= patient.patient;
      this.globalService.currentPatient.users_in_alliance= patient.users_in_alliance;
      this.globalService.currentPatient.alliance= patient.alliance;

      this.navCtrl.navigateRoot('/profilo-paziente');
    } else {
      console.log(patient);
      console.log(patient.users_in_alliance);
      this.globalService.currentPatient= patient.patient;
      this.globalService.currentPatient.users_in_alliance= patient.users_in_alliance;
      console.log(this.globalService.currentPatient);
      this.navCtrl.navigateRoot('/paziente-home');
    }
  }

  deletePatient(patient){
    this.rubyService.delete_patient(patient.id).subscribe(
      data => {
        console.log(data);
        this.response = this.response.filter(obj => obj.patient !== patient);
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }
}
