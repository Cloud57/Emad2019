import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { SharedNewPazienteService } from '../shared-new-paziente.service';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
 
  constructor(public sharedService: SharedNewPazienteService) { }

  ngOnInit() {
    
  }
}
