import { Component, OnInit } from '@angular/core';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';

@Component({
  selector: 'app-tab-misure',
  templateUrl: './tab-misure.page.html',
  styleUrls: ['./tab-misure.page.scss'],
})
export class TabMisurePage implements OnInit {

  constructor(public shared:NewProbBehSharedService) { }

  ngOnInit() {
  }

}
