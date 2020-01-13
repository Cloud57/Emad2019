import { SharedIconService } from './shared-icon.service';
import { ModalPage } from './modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  


  constructor(private modalController: ModalController, public sharedIService: SharedIconService,private alertService: AlertService,
    public rubyService: RubyApiService, private navCtrl: NavController, private global: GlobalService) { }
  async openModal(){
    
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
    
  }
  ngOnInit() {
    this.sharedIService.src="";
  }

  goBack(){
    this.navCtrl.back();
  }

  listOfTask(){
    this.navCtrl.navigateRoot('/lista-task');
  }

  newTask(form : NgForm){
    console.log(form)
    this.rubyService.new_task(form.value, this.global.currentPatient.id, this.sharedIService.src).subscribe(
      data => {
        this.alertService.presentToast("Task creato");
        this.listOfTask();
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

}
