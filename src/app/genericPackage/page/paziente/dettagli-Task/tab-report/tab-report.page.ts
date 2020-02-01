import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-tab-report',
  templateUrl: './tab-report.page.html',
  styleUrls: ['./tab-report.page.scss'],
})
export class TabReportPage implements OnInit {
  public response : any = [];
  constructor(private navCtrl:NavController, public global:GlobalService, public rubyService:RubyApiService) { }

  ngOnInit() {
    this.getListaReport()
  }
  inserisciReport(){
    this.global.modify=false
    this.navCtrl.navigateRoot('/esecuzione-task');
  }

  openReport(report){
    this.global.currentReport= report.report;
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
       
      }
    );
  }

}
