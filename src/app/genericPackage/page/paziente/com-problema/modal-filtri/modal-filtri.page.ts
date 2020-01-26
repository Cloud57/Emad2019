import { GlobalService } from './../../../../../service/global.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';

@Component({
  selector: 'app-modal-filtri',
  templateUrl: './modal-filtri.page.html',
  styleUrls: ['./modal-filtri.page.scss'],
})
export class ModalFiltriPage implements OnInit {
  public type: string[]
  public intensity: string[]
  constructor(private modalController: ModalController, public global:GlobalService) { }

  ngOnInit() {
    this.type = Problem_behaviour.TYPE_BEHAVIOR
    this.intensity = Problem_behaviour.INTENSITY_BEHAVIOR
  }
 
  async closeModal(form: NgForm){
    await this.modalController.dismiss();
  }



}
