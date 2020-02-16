import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';
import { AlertService } from 'src/app/service/alert.service';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';
import {  LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-new-com-problema',
  templateUrl: './new-com-problema.page.html',
  styleUrls: ['./new-com-problema.page.scss'],
})
export class NewComProblemaPage implements OnInit {
  title;
  spinner:any;
  constructor(private navCtrl: NavController,private sharedService: NewProbBehSharedService, private rubyService: RubyApiService,
    private global:GlobalService, private alertService:AlertService, private loading: LoadingController,) { }
  
  ngOnInit() {
    if(!this.global.modify){
      this.sharedService.problem = new Problem_behaviour()
      this.title = "Nuovo CP"
    } else {
      this.sharedService.problem = this.global.currentProblem
      console.log(this.sharedService.problem);
      
      this.title = "Modifica CP"
    }
  }
  comProblemaPage() {
  if(this.global.modify)
    this.navCtrl.navigateRoot('/dettagli-comportamento-problema');
  else
    this.navCtrl.navigateRoot('/com-problema');
  }

  saveComProblema() {
    console.log(this.sharedService.problem)

      this.loading.create({
        message: "Attendi..."
      }).then((overlay) => {
        this.spinner = overlay
        this.spinner.present();
     
      if(!this.global.modify){

        this.rubyService.new_prom_beh(this.sharedService.problem, this.global.currentPatient.id, this.sharedService.videoBlob, this.sharedService.fileVideoToUpload, this.sharedService.audioBlob, this.sharedService.fileAudioToUpload).subscribe(
          data => {
            this.alertService.presentToast("Comportamento problema inserito");  
            this.comProblemaPage()
          },
          error => {
            this.alertService.presentToast("Errore nell'inserimento del comportamento problema. Assicurati di aver compilato i campi obbligatori");
            console.log(error);
            this.spinner.dismiss()
          },
          () => {
            this.spinner.dismiss()
          }
        );
      } else {
        this.rubyService.mod_prom_beh(this.sharedService.problem, this.global.currentPatient.id, this.sharedService.problem.id,this.sharedService.videoBlob, this.sharedService.fileVideoToUpload, this.sharedService.audioBlob, this.sharedService.fileAudioToUpload).subscribe(
          data => {
            this.alertService.presentToast("Comportamento problema modificato");  
            this.comProblemaPage()

          },
          error => {
            this.alertService.presentToast("Errore nella modifica del comportamento problema. Assicurati di aver compilato i campi obbligatori");
            console.log(error);
            this.spinner.dismiss()
          },
          () => {
            this.spinner.dismiss()
          }
        );
      }
  })
  }
  
}
