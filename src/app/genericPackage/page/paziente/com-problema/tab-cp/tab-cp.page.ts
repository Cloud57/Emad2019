import { GlobalService } from './../../../../../service/global.service';
import { Component, OnInit } from '@angular/core';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';

@Component({
  selector: 'app-tab-cp',
  templateUrl: './tab-cp.page.html',
  styleUrls: ['./tab-cp.page.scss'],
})
export class TabCpPage implements OnInit {
  public type: string[]
  constructor(public shared:NewProbBehSharedService, public GlobalService:GlobalService) { 
    if(this.GlobalService.modify){
      this.shared.problem.name = this.shared.problem.name+""
    }
  }


  ngOnInit() {
    this.type = Problem_behaviour.TYPE_BEHAVIOR
  }

}
