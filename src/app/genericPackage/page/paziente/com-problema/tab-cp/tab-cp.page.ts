import { Component, OnInit } from '@angular/core';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';

@Component({
  selector: 'app-tab-cp',
  templateUrl: './tab-cp.page.html',
  styleUrls: ['./tab-cp.page.scss'],
})
export class TabCpPage implements OnInit {

  constructor(public shared:NewProbBehSharedService) { }

  ngOnInit() {
  }

}
