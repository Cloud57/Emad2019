import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements OnInit {
  public response : any = [];
  constructor(private navCtrl: NavController, private globalService: GlobalService, private rubyService: RubyApiService) { 

  }

  ngOnInit() {

  }

  inserisciTask(){
    this.navCtrl.navigateRoot('/lista-task');
  }

  getListaTask() {
    
    this.rubyService.get_tasks(this.globalService.currentPatient.id).subscribe(
      data => {
        this.response = data   
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }
}
