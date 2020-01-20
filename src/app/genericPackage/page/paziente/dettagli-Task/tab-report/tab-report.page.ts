import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-tab-report',
  templateUrl: './tab-report.page.html',
  styleUrls: ['./tab-report.page.scss'],
})
export class TabReportPage implements OnInit {

  constructor(private navCtrl:NavController, public global:GlobalService) { }

  ngOnInit() {
  }
  inserisciReport(){
    this.navCtrl.navigateRoot('/esecuzione-task');
  }
}
