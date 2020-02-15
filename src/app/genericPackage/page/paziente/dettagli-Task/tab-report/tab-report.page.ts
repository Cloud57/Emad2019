import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-report',
  templateUrl: './tab-report.page.html',
  styleUrls: ['./tab-report.page.scss'],
})
export class TabReportPage implements OnInit {
  public response : any = [];
  public loading = true;
  constructor(private navCtrl:NavController, public global:GlobalService, public rubyService:RubyApiService,public alertController: AlertController) { }

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
