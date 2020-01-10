import { SharedIconService } from './../shared-icon.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
 paths = {
   bathtub: "../assets/img/icon-modal/bathtub.png",
   chat: "../assets/img/icon-modal/chat.png",
   cleaning: "../assets/img/icon-modal/cleaning.png",
   shirt: "../assets/img/icon-modal/shirt.png",
   shoppingCart: "../assets/img/icon-modal/shopping-cart.png",
   study: "../assets/img/icon-modal/study.png",
   toothbrush: "../assets/img/icon-modal/toothbrush.png",



 };
  constructor(private modalController: ModalController, public sharedIService: SharedIconService) { }

  ngOnInit() {
  }
  async closeModal(src){
    this.sharedIService.src = src;
    await this.modalController.dismiss();
  }
}
