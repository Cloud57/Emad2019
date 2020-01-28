import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';
import { AlertService } from 'src/app/service/alert.service';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';

@Component({
  selector: 'app-new-com-problema',
  templateUrl: './new-com-problema.page.html',
  styleUrls: ['./new-com-problema.page.scss'],
})
export class NewComProblemaPage implements OnInit {

  constructor(private navCtrl: NavController,private sharedService: NewProbBehSharedService, private rubyService: RubyApiService,
    private global:GlobalService, private alertService:AlertService) { }

  ngOnInit() {
    this.sharedService.problem = new Problem_behaviour()
  }
  comProblemaPage() {
    this.navCtrl.back()
  }

  saveComProblema() {
    console.log(this.sharedService.problem)
    this.rubyService.new_prom_beh(this.sharedService.problem, this.global.currentPatient.id).subscribe(
      data => {
        this.alertService.presentToast("Comportamento problema inserito");  
        this.comProblemaPage()
      },
      error => {
        this.alertService.presentToast("Errore nell'inserimento del comportamento problema");
        console.log(error);
      },
      () => {
       
      }
    );
  }
}
