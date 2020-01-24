import { GlobalService } from './../../../../../service/global.service';
import { NgForm } from '@angular/forms';
import { SharedFilterService } from './../shared-filter.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-modal-filtri',
  templateUrl: './modal-filtri.page.html',
  styleUrls: ['./modal-filtri.page.scss'],
})
export class ModalFiltriPage implements OnInit {

  constructor(private modalController: ModalController, public sharedValueFilter: SharedFilterService, public global:GlobalService) { }

  ngOnInit() {
    
  }
 
  async closeModal(form: NgForm){
    console.log(form);
    await this.modalController.dismiss();
  }



}
