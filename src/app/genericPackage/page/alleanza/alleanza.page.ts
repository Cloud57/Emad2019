import { Alliance } from './../../../models/alliance';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalAlleanzaPage } from './modal/modal.page';

@Component({
  selector: 'app-alleanza',
  templateUrl: './alleanza.page.html',
  styleUrls: ['./alleanza.page.scss'],
})
export class AlleanzaPage implements OnInit {
public title:string="Alleanza";
  constructor(public global:GlobalService,private modalController: ModalController, private ruby:RubyApiService,private loading:LoadingController) { }
  public role:string[] = ["Caregiver", "Terapista", "Medico"]
  public response : any = [];
  spinner: any;
  alliance: Alliance[] = []
  ngOnInit() {
    console.log(this.global.currentPatient);
    this.setProfilePic
   
  }

  async aggiungiAlleanza(){
    const modal = await this.modalController.create({
      component: ModalAlleanzaPage
    });
    modal.onDidDismiss().then(()=>{
      console.log("onDismiss");
      this.updateLista()
    })
    return await modal.present();
  }
  setProfilePic(){
    for(let item of this.global.currentPatient.users_in_alliance){
      if(item.profile_pic == undefined){
        item.profile_pic = "../../assets/img/profilo.png"
      } else {
        item.profile_pic = EnvService.API_URL +  item.profile_pic
      }
   }
  }

  updateLista() {
    this.ruby.get_patients_alliance(this.global.currentUser.id).subscribe(
      data => {
        console.log(data);
        this.response = data
        for(let patient of this.response){
          if(patient.patient.id == this.global.currentPatient.id){
            this.global.currentPatient.users_in_alliance = patient.users_in_alliance
            this.setProfilePic()
            this.spinner.dismiss()
          }
        }
      },
      error => {
        console.log(error);
        this.spinner.dismiss()
      },
      () => {
       
      }
    );

  }

  removeFromAlleanza(toRemove){
    this.alliance = []
    for(let user of this.global.currentPatient.users_in_alliance){
      if(toRemove.id != user.id)
        this.alliance.push(new Alliance(user.id,0,user.email))
    }
    this.loading.create({
      message: "Attendi..."
    }).then((overlay) => {
      this.spinner = overlay
      this.spinner.present();
      this.ruby.mod_alliance(this.alliance,this.global.currentAlliance.id).subscribe(
        data => {
          this.updateLista()
        },
        error => {
          this.spinner.dismiss()
          console.log(error);

        },
        () => {
         
        }
      );
    });

  }
}
