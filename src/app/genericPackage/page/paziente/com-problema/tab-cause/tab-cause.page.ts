import { Component, OnInit } from '@angular/core';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';

@Component({
  selector: 'app-tab-cause',
  templateUrl: './tab-cause.page.html',
  styleUrls: ['./tab-cause.page.scss'],
})
export class TabCausePage implements OnInit {

  constructor(public shared: NewProbBehSharedService) { }

  ngOnInit() {
  }

}
