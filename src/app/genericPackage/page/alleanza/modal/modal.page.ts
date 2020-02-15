import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-alleanza',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalAlleanzaPage implements OnInit {
 paths = {
   bathtub: "../assets/img/icon-modal/bathtub.png",
   chat: "../assets/img/icon-modal/chat.png",
   cleaning: "../assets/img/icon-modal/cleaning.png",
   shirt: "../assets/img/icon-modal/shirt.png",
   shoppingCart: "../assets/img/icon-modal/shopping-cart.png",
   study: "../assets/img/icon-modal/study.png",
   toothbrush: "../assets/img/icon-modal/toothbrush.png",
   generic:"../assets/img/icon-modal/generic.png"


 };
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal(src){
    await this.modalController.dismiss();
  }
}
