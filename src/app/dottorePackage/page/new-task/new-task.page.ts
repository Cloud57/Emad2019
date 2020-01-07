import { ModalPage } from './modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  constructor(private modalController: ModalController) { }
  async openModal(){
    const modal= await this.modalController.create({
      component: ModalPage,
      componentProps:{
        path: 5
      }
    });
    return await modal.present();
    modal.onDidDismiss()
    .then(res => alert(JSON.stringify(res)))
  }
  ngOnInit() {
  }

}
