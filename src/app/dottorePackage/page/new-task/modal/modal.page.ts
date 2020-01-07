import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@Input() path:any;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal(){
    await this.modalController.dismiss();
  }
}
