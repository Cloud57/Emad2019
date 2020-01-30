import { GlobalService } from './../../../../../service/global.service';
import { Component, OnInit } from '@angular/core';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';

@Component({
  selector: 'app-tab-misure',
  templateUrl: './tab-misure.page.html',
  styleUrls: ['./tab-misure.page.scss'],
})
export class TabMisurePage implements OnInit {

  constructor(public shared:NewProbBehSharedService, public GlobalService:GlobalService) {
    if(this.GlobalService.modify){
      this.shared.problem.duration = this.shared.problem.duration+""
      this.shared.problem.intensity = this.shared.problem.intensity+""
      this.shared.problem.frequency = this.shared.problem.frequency+""
    }
    console.log(shared.problem);
    
   }

  ngOnInit() {
  }

}
