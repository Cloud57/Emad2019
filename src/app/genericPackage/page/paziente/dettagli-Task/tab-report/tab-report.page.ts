import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertController } from '@ionic/angular';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-tab-report',
  templateUrl: './tab-report.page.html',
  styleUrls: ['./tab-report.page.scss'],
})
export class TabReportPage implements OnInit {
  public response : any = [];
  public loading = true;
  constructor(private navCtrl:NavController, public global:GlobalService, public rubyService:RubyApiService,public alertController: AlertController, private EnvService:EnvService) { }

  ngOnInit() {
    this.getListaReport()
  }
  inserisciReport(){
    this.global.modify=false
    this.navCtrl.navigateRoot('/esecuzione-task');
  }

  openReport(report){
    this.global.currentReport= report;
    this.navCtrl.navigateRoot('/dettagli-esecuzione-task');
  }

  getListaReport() {
    
    this.rubyService.get_report(this.global.currentTask.id).subscribe(
      data => {
        console.log(data);
        this.response = data   
        for(let item of  this.response){
          console.log("setProfile "+item.user.profile_pic);
          if(item.user.profile_pic == undefined ){
            item.user.profile_pic = "../../assets/img/profilo.png"
          } else if(item.user.profile_pic.indexOf('http') < 0 && (item.user.profile_pic.indexOf('assets/img/profilo.png') < 0)) {
            item.user.profile_pic = EnvService.API_URL +  item.user.profile_pic
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

  async presentAlertConfirm(report) {
      const alert = await this.alertController.create({
        header: 'Attenzione!',
        message: 'Vuoi cancellare questo task?',
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
              this.deleteReport(report)
            }
          }
        ]
      });
  
      await alert.present();
    
  }

  deleteReport(report){
    this.rubyService.delete_report(report.id).subscribe(
      data => {
        console.log(data);
        this.response = this.response.filter(obj => obj !== report);
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

}
