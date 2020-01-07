import { Component, OnInit } from '@angular/core';
import { SharedNewPazienteService } from '../shared-new-paziente.service';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(public sharedService: SharedNewPazienteService) { }

  ngOnInit() {
  }

}
