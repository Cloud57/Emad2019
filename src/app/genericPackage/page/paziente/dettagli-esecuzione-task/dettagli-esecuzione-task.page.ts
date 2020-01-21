import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-dettagli-esecuzione-task',
  templateUrl: './dettagli-esecuzione-task.page.html',
  styleUrls: ['./dettagli-esecuzione-task.page.scss'],
})
export class DettagliEsecuzioneTaskPage implements OnInit {
  title = "Report del task"
  constructor(public global:GlobalService) { }

  ngOnInit() {
  }

}
