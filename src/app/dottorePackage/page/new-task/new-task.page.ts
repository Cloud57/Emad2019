import { SharedIconService } from './shared-icon.service';
import { ModalPage } from './modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  


  constructor(private modalController: ModalController, private sharedIService: SharedIconService) { }
  async openModal(){
    
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
    
  }
  ngOnInit() {
    this.sharedIService.src="";
  }

  newTask(form){
    console.log(form)
  }

}
