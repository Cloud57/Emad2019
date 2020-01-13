import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-tabs-dettagli-task',
  templateUrl: './tabs-dettagli-task.page.html',
  styleUrls: ['./tabs-dettagli-task.page.scss'],
})
export class TabsDettagliTaskPage implements OnInit {
  public title:String;
  constructor(public global:GlobalService) { 
    this.title = global.currentTask.name;
  }

  ngOnInit() {
  }

}
