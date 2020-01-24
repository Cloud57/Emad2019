import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-esecuzione-task',
  templateUrl: './esecuzione-task.page.html',
  styleUrls: ['./esecuzione-task.page.scss'],
})
export class EsecuzioneTaskPage implements OnInit {
  constructor(public global:GlobalService, private navCtrl:NavController,private rubyService:RubyApiService,
              public alertService:AlertService) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back()
  }

  newReport(form: NgForm){
    console.log(form)
    this.rubyService.new_Report(form.value, this.global.currentUser.id,this.global.currentTask.id).subscribe(
      data => {
        this.alertService.presentToast("Task creato");
        this.goBack()
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
  }
}
