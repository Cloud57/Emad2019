import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-tab-dettagli',
  templateUrl: './tab-dettagli.page.html',
  styleUrls: ['./tab-dettagli.page.scss'],
})
export class TabDettagliPage implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit() {
  }

}
