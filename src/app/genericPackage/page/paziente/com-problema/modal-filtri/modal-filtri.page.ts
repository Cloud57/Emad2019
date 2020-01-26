import { GlobalService } from './../../../../../service/global.service';
import { NgForm } from '@angular/forms';
import { SharedFilterService } from './../shared-filter.service';
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
  constructor(private modalController: ModalController, public sharedValueFilter: SharedFilterService, public global:GlobalService) { }

  ngOnInit() {
    this.type = Problem_behaviour.TYPE_BEHAVIOR
  }
 
  async closeModal(form: NgForm){
    console.log(form.value);
    await this.modalController.dismiss();
  }



}
